import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { CustomValidators } from '../Validators/noSpaceAllowed.validator';

@Component({
  selector: 'app-reactive-forms-demo',
  standalone: true,
  imports: [ɵInternalFormsSharedModule,FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms-demo.component.html',
  styleUrl: './reactive-forms-demo.component.scss'
})
export class ReactiveFormsDemoComponent implements OnInit{

  reactiveForm: FormGroup;
  formStatus: string = '';

  ngOnInit() {

    // reactive form fields initialization
    this.reactiveForm = new FormGroup({
      username: new FormControl(null,[Validators.required,CustomValidators.noSpaceAllowed],CustomValidators.checkUsername),
      email: new FormControl(null,[Validators.required,Validators.email,CustomValidators.noSpaceAllowed]),
      gender: new FormControl(null),
      place: new FormControl(null,Validators.required),
      address: new FormGroup({
        street: new FormControl(null,Validators.required),
        district: new FormControl(null,Validators.required),
        state: new FormControl(null,Validators.required)
      }),
      // for static from control adding case
      // skills: new FormArray([
      //   new FormControl(null),
      //   new FormControl(null),
      //   new FormControl(null)
      // ])
      skills: new FormArray([
        new FormControl(null),
       ]),
       experience: new FormArray([
        new FormGroup({
          company: new FormControl(null),
          position: new FormControl(null),
          totalExp: new FormControl(null),
          startDate: new FormControl(null),
          endDate: new FormControl(null)
    })
       ])
      // street: new FormControl(null),
    })

    // username formcontrol valuechanges function
    // this.reactiveForm.get('username').valueChanges.subscribe((value)=>{
    //   console.log("username formcontrol value from valuechanges function",value);      
    // })

    // reactiveform fromgroup valuechanges fucntion
    // this.reactiveForm.valueChanges.subscribe((value)=>{
    //   console.log("value of the reactive formgroup from valuechanges function",value)
    // })

    //username formcontrol statuschanges function
    this.reactiveForm.get('username').statusChanges.subscribe((value)=>{
      console.log("status of the username formcontrol from statuschanges function",value)
    })

    //reactive form group statuschanges function
    this.reactiveForm.statusChanges.subscribe((value)=>{
      this.formStatus = value;
      console.log("status of the reactive formgroup from statuschanges function",value)
    })
  }

  submitReactiveForm() {
    console.log("reactiveform",this.reactiveForm);    

    // updating a formgroup value fully using setvalue method
    // this.reactiveForm.setValue({
    //   username: "ashish",
    //   email: "ast@godigit.com",
    //   gender: "male",
    //   place: "",
    //   address: ({
    //     street: "",
    //     district: "",
    //     state: ""
    //   }),
    //   skills: [""],
    //   experience: [{company: "", position: "", totalExp: "", startDate: "", endDate: ""}]
    // })

    //updating a formcontrol only using setvalue method
    // this.reactiveForm.setValue({
    //   username: "amal"
    // });

    // updating a formcontrol using patchvalue method 
    this.reactiveForm.patchValue({
      username:"amal"
    })

    // updating many formcontrols using patchvalue method
    this.reactiveForm.patchValue({
      username: "amal",
      email: "amal@godigit.com"
    })
  }

  addSkill(){
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null,Validators.required)
    ); 
  }

  deleteSkill(index:number) {
    // (<FormArray>this.reactiveForm.get('skills')).
    const skillsControl = <FormArray>this.reactiveForm.get('skills');
    skillsControl.removeAt(index);
  }

  addExperience() {
    (<FormArray>this.reactiveForm.get('experience')).push(new FormGroup({
          company: new FormControl(null),
          position: new FormControl(null),
          totalExp: new FormControl(null),
          startDate: new FormControl(null),
          endDate: new FormControl(null)
    }))
  }

  deleteExperience(index:number) {
    const experienceControl = <FormArray>this.reactiveForm.get('experience');
    experienceControl.removeAt(index);
  }

  resetEmployeeForm() {
    // reseting the entire form 
    // this.reactiveForm.reset();

    // reset the entire form and setting some default value 
    this.reactiveForm.reset({
      username: "",
      email: "ashwin@godigit.com",
      gender: "male",
      place: "",
      address: {
        street: "",
        district: "",
        state: ""
      },
      skills: [],
       experience: {
          company: "",
          position: "",
          totalExp: "",
          startDate: "",
          endDate: ""
      }
    })

  }


}
