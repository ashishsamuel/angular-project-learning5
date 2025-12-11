import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  firstName: string;
  lastName: string;
  gender: string;
  mobile: string;
  email: string;
  country: string;
  state: string;
}

@Component({
  selector: 'app-forms-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms-demo.component.html',
  styleUrl: './forms-demo.component.scss'
})
export class FormsDemoComponent {
  formData: FormData = {
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    email: '',
    country: '',
    state: ''
  };

  states: string[] = [];
  submitted = false;
  @ViewChild('regForm') formValues:NgForm;

  statesByCountry: { [key: string]: string[] } = {
    india: ['Andhra Pradesh', 'Bihar', 'Gujarat', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal'],
    usa: ['California', 'Florida', 'New York', 'Texas', 'Pennsylvania'],
    uk: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    canada: ['Alberta', 'British Columbia', 'Ontario', 'Quebec']
  };

  onCountryChange() {
    this.states = this.statesByCountry[this.formData.country] || [];
    this.formData.state = '';
  }

  // html element we wont get js object correctly instead we will get html element list code in console
  // onSubmit(form: HTMLFormElement) {
  //   console.log('Form Data:', form);
  //   this.submitted = true;
  // }

  // now only we get an full js object of the form after giving the ngform type
    // onSubmit(form:NgForm) {
    //   console.log('Form Data:', form);
    //   this.submitted = true;
    // }

    // for accessing the form data we dont even need pass formdata from html to ts we can take the reference from dom and obtain the 
    // form value
    onSubmit() {
      console.log('Form Data:', this.formValues);
      this.submitted = true;
    }


  onReset() {
    this.formData = {
      firstName: '',
      lastName: '',
      gender: '',
      mobile: '',
      email: '',
      country: '',
      state: ''
    };
    this.states = [];
  }
}
