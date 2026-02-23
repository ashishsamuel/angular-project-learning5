import { AppHighlightDirective } from "./app-highlight.directive";
import { ElementRef } from "@angular/core";

describe('AppHighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new AppHighlightDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
