import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildDemoInteviewComponent } from "../child-demo-inteview/child-demo-inteview.component";
import { AppHighlightDirective } from '../directives/app-highlight.directive';
import { InterviewPracticeService } from '../services/interview-practice.service';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-forms-interview',
  standalone: true,
  imports: [FormsModule, CommonModule, ChildDemoInteviewComponent,AppHighlightDirective],
  templateUrl: './forms-interview.component.html',
  styleUrl: './forms-interview.component.scss'
})
export class FormsInterviewComponent implements OnInit, AfterViewInit{

  fullName: string = '';
  allProductsList: any[] =[];

  // constrcutor used for dependecy injection
  constructor(private service: InterviewPracticeService,
    private element: ElementRef
  ) {

  }

  ngOnInit() {
    // value that is obtained from service file by depenedency injection
    console.log("full name variable inside service file", this.service.fullName);
    this.fullName = this.service.fullName;
    this.service.getUsersList();

    // observable created from of operator
    this.observableofList.subscribe((data)=>{
      console.log("data emitted",data);
    })

    // observable created from from operator
    this.observablefromList.subscribe(data=>{
      console.log("names list coming from the observable", data);      
    })

    // observable that has been created from observable class
    this.observableListClass.subscribe((data)=>{
      console.log("observable created from observable class", data);
    })

    // promise
    this.promise.then((res)=>{
      console.log("response from promise",res);
    })

    // observable
    this.observable.subscribe((res)=>{
      console.log("response coming from observable",res);
    })

    // api call for getting all products list 
    this.service.getAllProductsList().subscribe({
      next:(productsList)=>{
        // console.log("full productsList after data transformation", productsList);
        this.allProductsList = productsList;
      },
      error:(err)=>{
        console.log("error while fetching all products",err);
      }
    }) 
  }

  productsPriceGreater: any[] = [];

  productPriceGreater100() {
    this.service.getProductsPrice100().subscribe({
      next:(productsList)=>{
        this.productsPriceGreater = productsList;
        console.log("productsp price greater",this.productsPriceGreater);
        
      },
      error:(err)=>{
        console.log("error while fetching all products",err);
      }
    }) 
    
    
  }

  // ----------------binding demo starts here
  // string interpolation
  name: string = "Ashish Samuel Thomson";

  // property binding 
  btnDisable: boolean = true;

  // event binding
  buttonClicked(event: Event) {
    // console.log("Button has been clicked");
    // console.log("event clicked",event);
    // console.log("event clicked",(<HTMLInputElement>event.target).value);
    // if we have any value inside event then we can access it since the event is of Event type
    // (<HTMLInputElement>event.target).value -> here we are typecasting the event type to htmlinput element
    
  }
      // two way data binding
    textValue:string = "two way data binding";

    // binding demo ends here
  
    // directive demo starts here
    // ngif structural directive
    displayUserFlag:boolean = false;

    // ngfor strucutural directive starts here
    users:string[] = ["ashish","amal","ashwin","ajmal"];

    trackbyIndex(i:number,user:any){
      // console.log("index",i);
      // console.log("user",user);
    }

    // ngfor strucutural directive ends here

    // ngswitch structural directive starts here

    userType: string ="HR";
    // ngswitch structural directive ends here

    // structural directive ends here

    // attribute directive starts here
    // ngswtich and ngclass
    isBackgroundColorChange:boolean = true;

    isStyleEnable:boolean = true;

  //  attribute directive ends here

  // parent child communication demo starts here
  textValueToChild = "This is the text coming from parent";
  textValueFromChild!: string;

  fetchValueFromChild(event: any) {
    // console.log("event value",event);
    this.textValueFromChild = event;    
  }

  // parent child communication demo ends here

  // accesing the child component itself using viewchild
  @ViewChild(ChildDemoInteviewComponent) childComp!: ChildDemoInteviewComponent;

  accessChildCompValue() {
    // this.childComp.calculateAge();
    console.log("childcomp age value",this.childComp.ageValue.nativeElement.value);
    console.log("age value from direct varibale",this.childComp.calculatedAge); 
  }

  // observable code changes
  // creating observables using rxjs operators of, from and fromevent
  // of operator we can pass any number of arguments to of operator 
  observableofList = of("ashish",true,123456);

  // from operator 
  // we can pass only 1 argument to the from operator which should be either an array or a string
  // it will emit the datas one by one at a time ie each elements of the array at a time if it is an array
  observablefromList = from(["ashish","amal","ashwin"]);

  // fromEvent operator
  observableFromEventList: any;
  @ViewChild('fromEventBtn') fromEventBtn: ElementRef;
  fromEvent() {
    this.observableFromEventList = fromEvent(this.fromEventBtn.nativeElement,'click')
    
    this.observableFromEventList.subscribe((data)=>{
      console.log("data coming from fromevent",data);
      
    })
  }

  // normal creation of observables
  observableListClass = new Observable((observer)=>{
    observer.next([12,13,14,15]);
  });

  ngAfterViewInit() {
    this.fromEvent();
  }

  //promises and observables difference
  promise = new Promise((resolve,reject)=>{
    console.log("Inside Promise at the time of creation itself");
    resolve(100);

    // emits only a single value the previous value that is 100
    resolve(200);

    reject("Promise value is rejected");
    
  }) 

  observable = new Observable((observer)=>{
    console.log("inside observable only after subscription");
    
    observer.next(12);

    // emits multiple values
    observer.next(13);

    observer.error("Observer value failed");
  })

  // rxjs operators practice
  // map, filter, debouncetime, switchMap, mergeMap, concatMap, exhaustMap, take, takeUntil, forkJoin,
  // catchError, share, pipe, tap, interval, first, last, throttleTime, distinctUntilChanged
  // retry

  
  

}
