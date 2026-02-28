import { CanDeactivateFn } from '@angular/router';
import { FirebaseHttpDemoComponent } from './firebase-http-demo/firebase-http-demo.component';

export const unsaveGuard: CanDeactivateFn<FirebaseHttpDemoComponent> = (component) => {
  console.log("submitButtonClickFlag inside component",component.submitButtonClickFlag);
  
  if(component.submitButtonClickFlag)
    return true;
  else
    return confirm("are you sure you want to leave the page without saving the cahnges")

};
