import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';

interface User {
  no: number;
  name: string;
  mobileno: string;
  emailid: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ConfirmDeleteComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users: User[] = [
    {
      no: 1,
      name: 'John Doe',
      mobileno: '9876543210',
      emailid: 'john.doe@example.com'
    },
    {
      no: 2,
      name: 'Jane Smith',
      mobileno: '9123456789',
      emailid: 'jane.smith@example.com'
    },
    {
      no: 3,
      name: 'Michael Johnson',
      mobileno: '9345678901',
      emailid: 'michael.johnson@example.com'
    },
    {
      no: 4,
      name: 'Sarah Williams',
      mobileno: '9567890123',
      emailid: 'sarah.williams@example.com'
    }
  ];

  showConfirmDeleteComponent = false;
  userToDelete: User;

  onDeleteClick(user:User) {
    console.log("inside on delete click function",user);
    
    this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
  }

  hideConfirmDelete(event: any) {
    console.log("event",event);
    
    if (event) {
      // user needs to be deleted
      let deleteUserIndex = this.users.indexOf(this.userToDelete);
      if (deleteUserIndex > -1) {
        this.users.splice(deleteUserIndex, 1);
      }
      this.showConfirmDeleteComponent = false;
    }
    else {
      this.showConfirmDeleteComponent = false;
    }
  }

}
