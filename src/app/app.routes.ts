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
import { UserDetailsComponent } from './user-details/user-details.component';
import { authGuard } from './auth.guard';
import { childGuard } from './child.guard';
import { unsaveGuard } from './unsave.guard';
import { FormsDemoInterviewComponent } from './forms-demo-interview/forms-demo-interview.component';

export const routes: Routes = [
  // for redirect route it will change the route path from localhost:4200/ to localhost:4200/home
  { path: '', redirectTo: 'home', pathMatch:'full'},
  // for the below route it wont change the route path from localhost:4200/ but it will load the homecomponent if we dont give any path also pathmatch not needed for default route and this is the default route
  // {path: '' , component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'user', 
    component: UserComponent,
    // children:[
    //   {path:':id', component: UserDetailsComponent}
    // ],
    canActivate: [authGuard],
    // canActivateChild:[childGuard]
   },

  //  if we want to render only the view of userdetails component alone then we have to define it as a separate route like below
// { path: 'user/:id', 
  //   component: UserDetailsComponent,
  //   canActivate:[childGuard]
  //  },

  // need to include like below if we want the view of the usercomponent also needs to be rendered
  // { path: 'user', 
  //   component:UserComponent,
  //   children:[
  //     {path:':id', component: UserDetailsComponent}
  //   ]
  //  },

   { path: 'user/:id', 
    component:UserDetailsComponent,
    canActivate: [authGuard]
   },
  //  query strings are the optional data that is passed to a component through the route
  // query strings come at the end of the route after a ?
  // eg: localhost:4200/user/id?name=ashish&id=12
  // so key for the url is name and id separated by & symbol and its values are ashish and 12 respectively
  // we are able to pass queryparams to the navigate as an object with the key and its value
  // like this.router.navigate(['/user',10],{
  // queryParams: {
  //  name:"ashish samuel",
  // active:true
  //} 
  // })
  { path: 'forms-demo', component: FormsDemoComponent},
  { path: 'template-driven-form', component: TemplateDrivenFormComponent},
  { path: 'reactive-form', component: ReactiveFormsDemoComponent},
  { path: 'http-demo', component: FirebaseHttpDemoComponent,
    canDeactivate:[unsaveGuard]
  },
  { path: 'async-demo', component: ObservablePromiseDemoComponent},
  { path: 'rxjs-demo', component: RxjsOperatorDemoComponent},
  { path: 'signals-demo', component: SignalsDemoComponent},
  { path: 'signals-first', component: SignalsComponent},
  { path: 'rxjs-operator-demo', component: RxjsOperatorDemoComponent},
  { path: 'subjects', component: SubjectsComponent},
  { path: 'angular-forms-interview', component: FormsInterviewComponent},
  { path : 'forms-interview', component: FormsDemoInterviewComponent},
  // wild route
  { path: '**', component: FournotfourComponent}
];
