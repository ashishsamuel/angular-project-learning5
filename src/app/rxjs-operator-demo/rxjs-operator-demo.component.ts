import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-rxjs-operator-demo',
  standalone: true,
  imports: [CommonModule],
  providers: [ApiServiceService],
  templateUrl: './rxjs-operator-demo.component.html',
  styleUrl: './rxjs-operator-demo.component.scss'
})
export class RxjsOperatorDemoComponent implements OnInit{

  @ViewChild('btn') btn!: ElementRef;
  // number array list
  numberArray!: number[];

  apiService = inject(ApiServiceService);

  constructor() {
    this.apiService.getUserDetails().subscribe(res=>{
      console.log("response",res);
    })

    this.apiService.getSingleUserDetails().subscribe(res=>{
      console.log("response", res);
    })
  }

  ngOnInit() {
    // of opertor demo code
    const ofOperatorResult$ = of(1,2,true,"Of operator demo");
    ofOperatorResult$.subscribe({
      next: (data:any)=>{
        console.log("datas emitted from of operator",data);
      },
      error: (err:any)=>{
        console.log("errror inside of operator",err);
      },
      complete:()=>{
        console.log("observables value emission is completed");
      }
    })  

    // from operator demo code
    const fromOperatorResult$ = from([12,"ashish",true]);
    fromOperatorResult$.subscribe({
      next: (data:any)=>{
        console.log("data inside next from operator", data);

      }
    })

    // pipe operator with filter operator where observable created using from operator
    const noList$ = from([10,11,12,13,14,15,16]);
    noList$.pipe(filter((num:number)=>num%2===0)).subscribe((res)=>{
      console.log("numbers divisible by 2 are",res);
    })
    // where from operator emits the each datas in the array one by one at a time

    // pipe operator with map operator where observable created using of operator
    const noListOf$ = of([10,11,12,13,14,15,16]);
    const filteredData$ = noListOf$.pipe(map((num)=>num.filter(num1=>num1 % 2 == 0)));
    filteredData$.subscribe((res)=>{
      console.log("numbers divisible by 2 are",res);
    })

    // where of operator emits all the the datas in the array at a single time

  }

  // fromevent operator demo code
  createObservableFromFromEvent() {
    const fromEventResult$ = fromEvent(this.btn.nativeElement,'click');
    fromEventResult$.subscribe((data)=>{
      console.log("data related to the event", data);
    })
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
