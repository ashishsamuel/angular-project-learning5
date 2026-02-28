import { CanActivateFn, Router } from '@angular/router';
import { InterviewPracticeService } from './services/interview-practice.service';
import { inject } from '@angular/core';

export const childGuard: CanActivateFn = (route, state) => {
  
  const service = inject(InterviewPracticeService);
  const router = inject(Router);

  if(!service.isUserLoggedInChild)
    return true;
  else
    return router.createUrlTree(['/http-demo'])
};
