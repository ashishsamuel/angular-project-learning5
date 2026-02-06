import { CommonModule, NgForOf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, effect, ElementRef, EventEmitter, input, Input, Output, output, Signal, signal, viewChild, ViewChild, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [ FormsModule,CommonModule, HttpClientModule],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss'
})
export class SignalsDemoComponent {

  // without specifying the type directly based on the initial value assigned to the signal we determine the data type
  courseName = signal("Angular");

  // we can specify the data type for the signal also like below
  courseNamewithType = signal<string>("React JS")

  // we can define an array type signal where the type is taken from what given for the signal
  stateList = signal<string[]>(["Kerala","Tamilnadu","Pune"]);

  // we can define array type signal by specifying data type directly to the variable 
  // we need to give it as writeablesignal as we can perform updations only on writablesignals 
  // not on readablesignals
  districtList:WritableSignal<string[]> = signal(["Alappuzha","Kannur","Kochi"]);

  // declaring an object type signal
  userObj = signal<any>({name:"Ashish", Place: "Chengannur"});

  district: string;

  fname = signal<string>("");
  mname = signal<string>("");
  lname = signal<string>("");
  fullName = computed(()=> this.fname() + " " + this.mname() + " " + this.lname());

  // input decorator property
  signalValueFromParent = input<string>("");

  // @Output() signalValueToParent = new EventEmitter<string>();
  signalValueCourseToParent = output<string>();

  // @ViewChild('district') districtName!: ElementRef; 
  districtNameSignal = viewChild<ElementRef>('district');
  constructor(private http: HttpClient) {
    // will return the courseName signal value to the course_name variable and angular value will be assigned to the courseName
    const course_name = this.courseName();
    // debugger;

    // effect method will get triggered whenever the signal value which we have mentioned is changed
    // if we didnt mention any of the signal value inside effect method then inside constrcutor only one 
    // time effect will be called
    // basically we use effect to execute some tasks based on the value updation of a signal
    effect(()=>{console.log("Effect function called",this.fname())})

    // observable has been assigned to the userListApi variable 
    // const userListApi = this.http.get("userlist/user").subscribe((res)=>{
    // });

    // const user$ = this.http.get("userlist/api");
    // userSignal = toSignal(user$);
    // console.log("usersignal",userSignal()?.name)
    
    // const userList = toSignal(this.http.get("userlist/user"),{initialValue:null});
    
  }

  // function that gets triggered on the change course name button in html
  changeCourseName() {
    // coursename will be set as React JS by clearing angular
    this.courseName.set("React JS");
  }

  // function for changing the statelist array
  changeStateList() {
    // directly updating the statelist using set operator
    this.stateList.set(["Punjab","J&K","Haryana"]);
  }

  // function for adding a new parameter named grade to user object using set method
  changeUserObject() {
    //  the below line will throw error becoz what it will think like after arrow function's arrow 
    // js will consider it as the function definition not like an object's {} curly brace
    // this.userObj.update(userobj=> {...userobj,grade:"A+"});

    // solution for the above issue is below wither we can explicitly return the object
    // or we can use () round paranathesis before object curly braces {}
    // this.userObj.update(userobj=>{return {...userobj,grade:"A+"}});
    this.userObj.update(userobj=>({...userobj,grade:"A+"}));
  }

  // function for updating the existing name in the userobj from ashish to yashin using set method
  changeExistingParameter() {
    this.userObj.update((userObj)=>({...this.userObj(),name:"Yashin"}));
  }

  // function for adding a new district from the user and add it to the districtList array
  addNewDistrict() {
    if(this.district)
      this.districtList.update((oldDistList)=>[...oldDistList,this.district]);
    this.district = "";
  }

  // computed signal task function for combining the first, middle and last name and forms the fullname
  // combineNamestoFullName() {
  //   if(this.fname() || this.mname() || this.lname())
  //     this.fullName.update(computed(()=>{return this.fname()+ " " + this.mname() + " " + this.lname()}));
  // }

  // function for updating names based on the typing of the user on the fname, middle name and last name
  // fields and based on these 3 fields we set the fullname which is a computed signal 
  updateName(name,event) {
    if(name === "fname")
      this.fname.set(event.target.value);
    else if(name === "mname")
      this.mname.set(event.target.value);
    else
      this.lname.set(event.target.value)
    
    this.signalValueCourseToParent.emit(event.target.value);
  }

  // effect 


}
