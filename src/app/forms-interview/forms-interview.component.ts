import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildDemoInteviewComponent } from "../child-demo-inteview/child-demo-inteview.component";
import { AppHighlightDirective } from '../directives/app-highlight.directive';
import { InterviewPracticeService } from '../services/interview-practice.service';
import { BehaviorSubject, debounceTime, distinctUntilChanged, from, fromEvent, Observable, of, pipe, ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-forms-interview',
  standalone: true,
  imports: [FormsModule, CommonModule, ChildDemoInteviewComponent,AppHighlightDirective],
  templateUrl: './forms-interview.component.html',
  styleUrl: './forms-interview.component.scss'
})
export class FormsInterviewComponent implements OnInit, AfterViewInit, OnDestroy{

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
  // retry, delay

  first3Products:any[] = [];

  fetchFirst3Products() {
    this.service.getFirst3Products().subscribe({
      next:(products)=>{
        console.log("first 3 products",products);
        this.first3Products = products;
      },
      error:(err:any)=>{
        console.log("error inside api",err);
      }
    })
  }

  // basically takeuntil() is used when we want to unsubscribe automatically from a source observable when a notifier observable emits its value
  // used mainly for avoiding memory leaks when components are destroyed
  // we maintain a subject observable destroy$ which is our notifier and as this notifier emits values 
  // the current subscription also will get cancelled like below
  
  destroy$ = new Subject<void>();
  takeUntillist: any[] = [];

  takeUntilDemoFunction() {
    this.service.takeUntilProductsDestroy().pipe(takeUntil(this.destroy$)).subscribe((productsList)=>
    this.takeUntillist = productsList
  )}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // another approach ----------------------
  destroyRef = inject(DestroyRef);

  // wihout implementing angular's destruction ngondestroy we can hook into the components destruction cycle
  // takeuntildestroyed usually used with destroyref 

  takeUntilDestroyedDemoFunction() {
    this.service.takeUntilProductsDestroy().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((productsList)=>
    this.takeUntillist = productsList
  )}  

  // distinctuntilchanged() operator
  duplicateEmissionObservableFunctionComp(){
    this.service.duplicateEmissionObservableFunction().subscribe((res)=>{
      console.log("response of not getting any duplicate datas",res);    
    })
  }
  
  // retry operator
  retryOperator() {
    this.service.getFirst3ProductsRetry().subscribe((data)=>{
      console.log("if api fails due to server issue then retry the failed api for 2 times as per we have given");   
    })
  }

  // debouncetime, distinctuntilchanged and switchmap

  searchText$ = new Subject();

  fetchSearchText(searchValue: string) {

    this.searchText$.next(searchValue);
    console.log("searchvalue",searchValue);
    this.searchText$.pipe(debounceTime(3000),distinctUntilChanged(),
    switchMap((searchTerm:string)=>
      this.service.fetchSearchResults(searchTerm)
    )).subscribe((res)=>{
      console.log("response based on search text", res);
    }
    )
    
  }

  // concatmap, exhaustmap, mergemap, catcherror

  // mergeMap runs all the inner observables in parallel
  // orders are not guaranteed for the execution
  // it does not cancels the previous requests
  // it will combine and give the result of all the emissions into a single result
  // file download scenario 
  mergeMapFunctionCall() {
    let ids = [1,2,3,4];
    this.service.mergeMapProductDetails(ids).subscribe((res)=>{
      console.log("resultant data from mergemap", res);
    })
  }

  // concatMap() 
  // operator that is used when the inner obseravbles have to be handled sequentially 
  // order is guranteed
  // previous requests and emissions wont get cancelled
  // sequential file upload scenrio and all
  concatMapProductDetailsFunction() {
    let ids = [5,6,7,8];
    this.service.concatMapProductDetails(ids).subscribe((res)=>{
      console.log("response from the concatmap operator",res);
      
    })
  }


  // exhaustmap operator in rxjs
  // it will ignore all new emissions until the current emitting observable emits fully
  // usually used in case of preventing multiple form submit clicks and button clicks 
  exhaustMapFunctionCall() {
    this.service.productTrigger$.next(10);
    this.service.exhaustMapProductDetails().pipe(debounceTime(2000)).subscribe((res)=>{
      console.log("exhaustmap function",res);
    })

    this.service.productTrigger$.next(11);

    this.service.productTrigger$.next(12);

  }

  // subjects in angular

  subject = new Subject();
  passValueSubject() {
    this.service.emitValueToSubject({username:'Ashish Samuel Thomson',userId:123});
    // this.service.emitValueToSubject({username:'Ajmal Roshna',userId:198 });
    // this.subject.next("hello ashish");
    // this.subject.next("hello yashin");
    // this.subject.next("hello saranya");

    const subject = new Subject<number>();

subject.next(1);
subject.subscribe(value => console.log(value));

subject.next(2);



  }

  // Without subscription ther will be no value to emit always subscription is needed for mission in subjects

  // subject can act as data provider as well as data consumer

  // Because a normal Subject does not store previously emitted values. It only delivers values to active subscribers. If we need late subscribers to receive the last emitted value, we should use BehaviorSubject or ReplaySubject.

  // automatically subjects will notify the value has been changed like that
  fetchSubjectValue() {
    // this.service.emitValueToSubject({username:'Amal Raj',userId:145});
    this.subject.subscribe((res)=>{
      console.log("res",res);
    })
    this.subject.next(20);

    let userValue = this.service.fetchValueFromSubject();
    console.log("uservalue observable",userValue);
    
    userValue.subscribe((res)=>{
         console.log("uservalue",res);
      }) 
  }

  // behaviorSubject() and replaySubject()
  // behaviorSubject -> we can assign an intial value of any type and if we dont know the type of 
  // value we can give it as null
  // it stores the last value that has been emitted by the observable

  productName = new BehaviorSubject<string>("Shoe");
  productName$ = this.productName.asObservable();

  // function for getting the last emitted value and the the console inside this will be triggered whenever the value of the productname is being updated
  getDataBehaviorSubject() {
    this.productName$.subscribe((res)=>{
      console.log("data from behvaiour subject",res);
    })
  }

  // function for updating the value of the productName using next() method
  emitDataBehaviorSubject() {
    this.productName.next("Bag");
  }

  // replaySubject is also a type of subject that can store mutliple values that has been emitted
  // we can specify the count of how many values that has been emitted needs to be stored and 
  // also the time period also we can give for how long the values should be stored

  // replaysubject will consider the buffer size which we have given only if subscription happens after emission and it wont conside buffer size and will emit all the datas if subscription happens before emission

  // if we give buffer time then after that time all datas will get cleared which is the last 2 values in
  // this case
  
  // student = new ReplaySubject<any>(2,1000);
  student = new ReplaySubject<any>(2);


  emitDataReplaySubject() {
    this.student.next({studName:"ashish samuel", id:1});
    setTimeout(() => {
      this.student.next({studName:"aswin mohan", id:2});
    }, 1000);
    setTimeout(() => {
      this.student.next({studName:"akash menon", id:3});
    }, 2000);
  }

  getDataReplaySubject() {
    this.student.subscribe((res)=>{
      console.log("response from replay subject",res);
    })
  }
  

}
