import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ViewContainerDirective } from '../view-container.directive';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

interface User {
  no: number;
  name: string;
  mobileno: string;
  emailid: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ConfirmDeleteComponent, ViewContainerDirective, RouterLink, RouterOutlet],
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
  @ViewChild(ViewContainerDirective)container:ViewContainerDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) {

  }

  onDeleteClick(user:User) {
    console.log("inside on delete click function",user);
    
    // commenting below for displaying the component dynamically
    // this.showConfirmDeleteComponent = true;
    this.userToDelete = user;
    this.displayConfirmDeleteComponentDynam(this.userToDelete);
    // const confirmDeleteFactoryComponent = this.componentFactoryResolver.resolveComponentFactory(ConfirmDeleteComponent);

  }

  displayConfirmDeleteComponentDynam(user: User) {

    // instantiating confirmdelete component
    const ConfirmDeletecomponentFactory = this.componentFactoryResolver.resolveComponentFactory(ConfirmDeleteComponent);   

    // rendering the component in place of location of DOM
    const containerViewRef = this.container.viewContainer;
    // we need to clear if any content is already rendered in that DOM element where we have applied the directive 
    containerViewRef.clear();

    // create component method to which we need to pass the component factory variable
    const componentRef = containerViewRef.createComponent(ConfirmDeletecomponentFactory);
    // for passing the input property ie usertodelete from user component to confirm delete component 
    componentRef.instance.userToDelete = user;
    // for getting the value transfered from confirmdelete component to user component 
    const hideConfirmSubs = componentRef.instance.showConfirmUserPopup.subscribe((value:boolean)=>{
      hideConfirmSubs.unsubscribe();
      this.hideConfirmDelete(value,containerViewRef);
    });

  }

  hideConfirmDelete(event: any,containerViewRef:ViewContainerRef) {
    console.log("event",event);
    
    if (event) {
      // user needs to be deleted
      let deleteUserIndex = this.users.indexOf(this.userToDelete);
      if (deleteUserIndex > -1) {
        this.users.splice(deleteUserIndex, 1);
      }
      this.showConfirmDeleteComponent = false;
      containerViewRef.clear();
    }
    else {
      this.showConfirmDeleteComponent = false;
      containerViewRef.clear();
    }
  }

  onEditClick(user: User) {
    // this.router.navigate([`/user/${user.no}`])
    // better approach than above one pass userno separately as route paramater
    // for passing dynamic values to the queryparam and all we can define it in ts file
    this.router.navigate(['/user',user.no],{
      queryParams:{
        name:user.name,
        emailid:user.emailid
      }
    });

  }

}
