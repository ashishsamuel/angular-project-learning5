import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'forms-demo', component: FormsDemoComponent}
];
