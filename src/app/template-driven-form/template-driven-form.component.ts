import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss'
})
export class TemplateDrivenFormComponent{

  // @ViewChild('userForm') formValues: NgForm;
  genderList = [
    {id:"male", display: "Male", value: "Male"},
    {id:"female", display: "Female", value: "Female"},
    {id:"other", display: "Other", value: "Other"},
  ];

  uName: string = '';
  place: string = '';
  gender: string = '';
  userNameDisplay = '';
  placeDisplay = '';
  genderDisplay = '';
  addressStreetDisplay = '';
  isAgreed = false;


  submitUserForm(form:NgForm){
	  console.log("form values",form)
    // accesing form field values from value property
    console.log("form value of username",form.value.userName)
    console.log("form value of place",form.value.place)
    console.log("form value of gender",form.value.gender)
    console.log("form value of address street value",form.value.address.street);

    // setting values to variables for displaying 
    this.userNameDisplay = form.value.userName;
    this.placeDisplay = form.value.place;
    this.genderDisplay = form.value.gender;
    this.addressStreetDisplay = form.value.address.street
    

    // accessing form field values from controls property
    console.log("form value of username from controls property",form.controls['userName'].value);
    console.log("form value of username from controls property",form.controls['place'].value);
    console.log("form value of username from controls property",form.controls['gender'].value);
    
    // reseting the form 
    // form.reset();
    form.form.patchValue({
      userName: 'Ashwin',
      place: 'Bangalore'
    })
    
  }

  formSetValueManually(form:NgForm) {
    form.setValue({
      address: {
        district: "Alappuzha",
        pincode: "689508",
        state: "Kerala",
        street: "Chengannur"
      },
      emailId: form.value.emailId,
      place: form.value.place,
      userName: form.value.userName,
      gender: "Male"
    })
  }

  formpatchValueManually(form:NgForm) {
    form.form.patchValue({
      userName:'Ashish'
    })
  }

}
 