import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildDemoInteviewComponent } from "../child-demo-inteview/child-demo-inteview.component";
import { AppHighlightDirective } from '../app-highlight.directive';

@Component({
  selector: 'app-forms-interview',
  standalone: true,
  imports: [FormsModule, CommonModule, ChildDemoInteviewComponent,AppHighlightDirective],
  templateUrl: './forms-interview.component.html',
  styleUrl: './forms-interview.component.scss'
})
export class FormsInterviewComponent {

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


}
