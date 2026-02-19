import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = "red";
   }


}
