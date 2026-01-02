import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-demo',
  standalone: true,
  imports: [ɵInternalFormsSharedModule,FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms-demo.component.html',
  styleUrl: './reactive-forms-demo.component.scss'
})
export class ReactiveFormsDemoComponent implements OnInit{

  reactiveForm: FormGroup;

  ngOnInit() {

    // reactive form fields initialization
    this.reactiveForm = new FormGroup({
      username: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
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
  }

  submitReactiveForm() {
    console.log("reactiveform",this.reactiveForm);    
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


}
