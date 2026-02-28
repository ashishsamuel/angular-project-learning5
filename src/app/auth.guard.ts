import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { InterviewPracticeService } from './services/interview-practice.service';

export const authGuard: CanActivateFn = (route, state) => {

  console.log("route and state value inside authguard file",route,"and",state)

  const service = inject(InterviewPracticeService);
  const router = inject(Router);
  console.log("service.isuserloggedin value",service.isUserLoggedIn);
  
  if(service.isUserLoggedIn)
    return true;
  else {
    return router.createUrlTree(['/home'])
  }
};
