import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {

  myData:any = [];
  // subject
  // subject = new Subject();

  // ReplaySubject
  // subject = new ReplaySubject(3);

  // BehaviorSubject
  // behviorsubject with initial value as null
  // subject = new BehaviorSubject(null);

  // behaviorSubject with initial value other than null
  subject = new BehaviorSubject(654789);

  getObservableData() {
    let observable$ = new Observable<string>(observer=>{observer.next("This is value emitted from observable")})

    observable$.subscribe((data)=>{
      console.log("data obtained from observable", data);
    })
  }

  getSubjectData() {
    let subject$ = new Subject<string>();  

    subject$.subscribe((data)=>{
      console.log("data obtained from subject",data);
    })
    subject$.next("This is value emitted from subject");
  }

  getData() {
    this.subject.subscribe((data)=>{
      console.log("data subscribed", data);
      this.myData.push(data);
    })
  }

  emitData() {
    this.subject.next(1);
    console.log(1);
    setTimeout(() => {
      this.subject.next(2);
      console.log(2);
    }, 1000);
    setTimeout(() => {
      this.subject.next(3);
      console.log(3);
    }, 2000);
    setTimeout(() => {
      this.subject.next(4);
      console.log(4);
    }, 3000);
    
  }
}
