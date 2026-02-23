import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  constructor(element: ElementRef, renderer: Renderer2) {
    // element.nativeElement.style.backgroundColor = "red";
    renderer.setStyle(element.nativeElement,'backgroundColor','yellow');
    renderer.addClass(element.nativeElement,'text-info');
    
    // for adding multiple classes together then we can separate those classes by space and give the classes together inside a string and use the setattribute method

    renderer.setAttribute(element.nativeElement,'class','alignment badge')
  }



}
