import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-demo-inteview',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-demo-inteview.component.html',
  styleUrl: './child-demo-inteview.component.scss'
})
export class ChildDemoInteviewComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked{

  // parent child communication starts here

  @Input() textValueFromParent!: string;
  @Output() textValueFromChild = new EventEmitter<string>();
  textValue: string;

  ngOnInit() {
    // console.log("data",this.textValueFromParent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("cahnges", changes);
  }
  

  emitValueToParent() {
    this.textValueFromChild.emit(this.textValue);
  }

  // parent child communication ends here

  // template refernce variable demo starts here

  fetchName(name: string){
    console.log("name from the template reference variable",name);
  }

  @ViewChild('dateValue') dateOfBirth!: ElementRef; 
  @ViewChild('age') ageValue!: ElementRef; 
  calculatedAge:number;


  calculateAge() {
    let birthYear = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.ageValue.nativeElement.value = age;
    console.log("age",age);
    this.calculatedAge = age;
    
  }
  // template refernce variable demo ends here

  // contentchild demo starts here
  @ContentChild('h3msgvalue') headingMessage!: ElementRef;
  @ContentChildren('messages') messages!: QueryList<ElementRef>;

  ngAfterContentChecked() {
    if (this.headingMessage) {
      console.log("heading message  is changed",this.headingMessage.nativeElement.textContent);
    }
  }

  ngAfterContentInit() {
    if (this.headingMessage) {
      console.log("heading message",this.headingMessage.nativeElement.textContent);
    }

    this.messages.forEach((msg:any)=>{
      console.log("message",msg.nativeElement.textContent);
      
    })
    
  }
  // contentchild demo ends here



}
