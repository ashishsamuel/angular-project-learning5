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

export const routes: Routes = [
  { path: '', component: HomeComponent },
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


];
