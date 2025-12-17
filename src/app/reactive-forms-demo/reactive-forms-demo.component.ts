import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

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
      })
      // street: new FormControl(null),
    })
  }

  submitReactiveForm() {
    console.log("reactiveform",this.reactiveForm);    
  }

}
