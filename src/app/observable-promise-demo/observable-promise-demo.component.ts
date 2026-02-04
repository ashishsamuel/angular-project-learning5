import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-promise-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-promise-demo.component.html',
  styleUrl: './observable-promise-demo.component.scss'
})
export class ObservablePromiseDemoComponent implements OnInit{

  observable: any;
  promise: any;
  array1= [10,20,30,40];
  @ViewChild('fromeventbtn') fromEventBtn!: ElementRef;
  observableConvertFromEvent!: Observable<Event>;

  ngOnInit() {
    // observable
    this.observable = new Observable((observer:any)=>{
      console.log("observable has been created");
      observer.next([1,2,3,4]);
    })

    console.log("observable",this.observable);
    

    // promise
    this.promise = new Promise((resolve,reject)=>{
      // console.log("Promise is created")
      // resolve("Promise value is emitted");  
      reject("Promise is rejected with error");
    })
   

    console.log("promise",this.promise);

    //from operator -> can be applied only on arrays and strings, we can pass only 1 argument to the from operator either that argument
    //value should be of type string or array
    //for converting a promise to observable best recommended is the from operator
    // if we pass an array as an argument to the from operator then that observable will emit each values of the array at a time one by 
    //one 

    // of opertor -> we can pass any number of arguments to the of operator -> arrayvalue, string or number or boolean or anything
    // if an array is passed then it will emit the entire array from the observable 
    const observableConvert = of(this.array1,"hello",12,true);
    console.log("observableconvert",observableConvert);
    observableConvert.subscribe((res:any)=>{
      console.log("response",res);
    })

    
    const observableConvertFrom = from(this.array1);
    console.log("observable created from from operator",observableConvertFrom);
    observableConvertFrom.subscribe((res:any)=>{
      console.log("resultant data from the observable created from the from operator",res);
    }) 
    
  }

  getDataFromObservable(event:any) {
    

    // fromevent operator -> if we need to create an observable from a user event like keypress or mousehover or mouseclick then we 
    // use fromevent operator and we need to pass 2 arguments into it  1. target element (elementref through template variable)
    // 2. we need to specify the event on which we have to create the observable 
    this.observableConvertFromEvent = fromEvent(this.fromEventBtn.nativeElement,'click');
    console.log("fromEventBtn operator",this.fromEventBtn);
    
    this.observableConvertFromEvent.subscribe((data:any)=>{
      console.log("data that comes from fromEvent operator",data);
    })

    this.observable.subscribe((res:any)=>{
      console.log("response from observable", res);
    },(err:any)=>{
      console.log("error response from observable", err);
    },()=>{
      console.log("complete state in observable");
    })

    this.observable.subscribe((res:any)=>{
      res.forEach(element => {
        console.log("response from observable", element);
      });
    })

  }

  getDataFromPromise() {

  //   return this.promise.then((res:any)=>{
  //     console.log(res);
  //   }
  // ).catch((err:any)=> {
  //     console.log("error from the promise", err);
  // })
  // return this.promise;

  return this.promise;

  
  }

  async demoFunction() {
    try{
      const asyncFunction = await this.getDataFromPromise();
      console.log("async function",asyncFunction);
    }
    catch(err:any){
      console.log("error from promise inside catch",err);
    }   
  }


}


