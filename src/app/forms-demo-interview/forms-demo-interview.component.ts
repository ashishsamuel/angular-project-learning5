import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-demo-interview',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms-demo-interview.component.html',
  styleUrl: './forms-demo-interview.component.scss'
})
export class FormsDemoInterviewComponent {

    hobbiesList: string[]=[];


  fetchUserValue(userform: NgForm) {
    console.log("userform in template driven form before setting hobbies list",userform.value);

    const userForm = {
      ...userform.value,
      hobbies:this.hobbiesList
    }
    console.log("userform in template driven form after setting hobbies list",userForm);

    console.log("address fields inside the userForm", userform.controls['address'].get('street').value);
    

    
  } 

  onHobbyChange(event:any){
    console.log("event target value",event.target.value);
    console.log("event",event);
    

    if(event.target.checked){
      this.hobbiesList.push(event.target.value);
    } else {
      const index = this.hobbiesList.indexOf(event.target.value);
      if(index>-1){
        this.hobbiesList.splice(index,1);
      }
    }

    console.log("final hobbieslist array", this.hobbiesList);
    
    
  }

}
