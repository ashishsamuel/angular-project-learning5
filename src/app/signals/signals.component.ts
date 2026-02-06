import { Component, computed, DoCheck, effect, signal } from '@angular/core';
import { SignalsDemoComponent } from '../signals-demo/signals-demo.component';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [SignalsDemoComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent implements DoCheck{

  inputValue:string = "string to Signal conversion";

  // change detection case
  // counter:number = 0;

  // increment() {
  //   this.counter++;
  // }

  // decrement() {
  //   this.counter--;
  // }

  ngDoCheck() {
    console.log("change detection cycle called");
  }

  // signal case set method
  // counter = signal(0);

  // increment() {
  //   this.counter.set(this.counter()+1);
  // }

  // decrement() {
  //   this.counter.set(this.counter()-1);
  // }

  // signal case update method

  // counter = signal(0);

  // increment() {
  //   this.counter.update((prevValue)=> prevValue+1 );
  // }

  // decrement() {
  //   this.counter.update((prevValue)=> prevValue-1 );
  // }

  // signal case mutate method
  // message: string[]= [];
  // message = signal([]);
  // since message property is of type string[], we can provide type to message property
  counter = signal(0);
  messages = signal<string[]>([]);
  // computed fucntion in signals
  doubleCounter = computed(()=>this.counter()*2);

  constructor() {
    effect(()=>console.log("new counter value is",this.counter()));
  }

  increment() {
    this.counter.update((prevValue)=> prevValue+1);
    this.messages.update((prevValue)=> [...prevValue, ` value after incrementing ${this.counter()}`]);
  }

  decrement() {
    this.counter.update((prevValue)=> prevValue-1);
    this.messages.update((prevValue)=> prevValue.slice(0, -1));
  }

  fetchNameType(event:any) {
    console.log("event",event);
    
  }


}
