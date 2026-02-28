import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-firebase-http-demo',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './firebase-http-demo.component.html',
  styleUrl: './firebase-http-demo.component.scss'
})
export class FirebaseHttpDemoComponent {

  http:HttpClient = inject(HttpClient);
  submitButtonClickFlag = false;

  submitUserData(userData: NgForm) {
    console.log("userdata",userData.value);
    if(userData.value.place)
      this.submitButtonClickFlag = true;
    this.http.post('https://httpclient-project-bd70e-default-rtdb.firebaseio.com/users.json',userData.value).subscribe((res)=>{
      // console.log("response for the new user call",res);
    })
  }
}
