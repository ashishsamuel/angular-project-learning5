import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';
import { FirebaseHttpDemoComponent } from './firebase-http-demo/firebase-http-demo.component';
import { ObservablePromiseDemoComponent } from './observable-promise-demo/observable-promise-demo.component';
import { RxjsOperatorDemoComponent } from './rxjs-operator-demo/rxjs-operator-demo.component';
import { SignalsDemoComponent } from './signals-demo/signals-demo.component';
import { SignalsComponent } from './signals/signals.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { FormsInterviewComponent } from './forms-interview/forms-interview.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';

export const routes: Routes = [
  // for redirect route it will change the route path from localhost:4200/ to localhost:4200/home
  { path: '', redirectTo: 'home', pathMatch:'full'},
  // for the below route it wont change the route path from localhost:4200/ but it will load the homecomponent if we dont give any path also pathmatch not needed for default route and this is the default route
  // {path: '' , component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'forms-demo', component: FormsDemoComponent},
  { path: 'template-driven-form', component: TemplateDrivenFormComponent},
  { path: 'reactive-form', component: ReactiveFormsDemoComponent},
  { path: 'http-demo', component: FirebaseHttpDemoComponent},
  { path: 'async-demo', component: ObservablePromiseDemoComponent},
  { path: 'rxjs-demo', component: RxjsOperatorDemoComponent},
  { path: 'signals-demo', component: SignalsDemoComponent},
  { path: 'signals-first', component: SignalsComponent},
  { path: 'rxjs-operator-demo', component: RxjsOperatorDemoComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'angular-forms-interview', component: FormsInterviewComponent},
  // wild route
  { path: '**', component: FournotfourComponent}
];
