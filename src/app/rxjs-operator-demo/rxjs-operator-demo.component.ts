import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-operator-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-operator-demo.component.html',
  styleUrl: './rxjs-operator-demo.component.scss'
})
export class RxjsOperatorDemoComponent implements OnInit{

  ngOnInit() {
    
  }
  // map operator 
  //  the below will written an array with the list of names and the first map that we use is the rxjs operator and second map that we use 
  // is the js map operator rxjs map will convert the observables into a different format whereas js map operator returns an array 
  // based on the condition like what we need to return 
  // this.http.get<User[]>("/api/users").pipe(
  //   map(users => users.map(u => u.name))
  // );


  // this.http.get<User[]>("/api/users").pipe(map(users=>users.map(u=>u.name))).
  // subscribe((res:any)=>{this.users=res})

  // so here first http get api call returns a type of User[] data from backend
  // and we use pipe operator for chaning multiple operators inside it using ,
  // like pipe inside 

  // actually http get call will return a object with status property insdie it
  //  at the first emission and to that data we are using map and we are checking the
  // status value is active or not which will convert the observable' return value 
  // from object to boolean
  // this.http.get<{status: string}>("/api/users").pipe(map(res=>res.status === 'ACTIVE'))


  // service file
  // getStatus():Observable<boolean>{
  //   return this.http.get<{status:string}>('/users/list')
  //   .pipe(map(user=>user.status === "ACTIVE"));
  // }

  // component file
  // status$!:observable<boolean>;

  // this.status$! = this.statusService.getStatus();

  // subscribing to the observable
  // this.status$.subscribe((active)=>{
  //   if(active){
  //     console.log("user is active");
  //   }
  // })

  // also in template file ie html file we can use async pipe if we want to show something based
  // on observable in UI then we can directly use as below:
  // for accessing the value of the value emitted by the subscriber without subscribing to it from component class
  // status$ | async where status$ is our observable and based on the status$ value we will
  // show something (subscribes automatically and unsubscribes automatically)

// always we have to use the rxjs operators before subscribing to its values as we cant modify the values of the observables at the time of 
// emission so always use the operators before subscription and for using multiple operators we need to use the pipe operator provided by rxjs inside 
// which we have to pass each operators and on the basis of the operators placing order same way only data transfomration will happen
// ! -> using along with a variable means currently no intialization needed but will assign the later
// $ -> usage of $ along with variablename indicates that the variable is an observable 

// inside subscribe we can perform the following operations 
// call methods, perform side effects, update UI, READ VALUES, 



// ---------------------switchMap() operator --------------------------
// 
}
