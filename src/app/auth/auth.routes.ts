import { Route } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

export const signupRoutes: Route[] = [
  {
    path: '',
    component: SignupComponent,
  },
];
export const loginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
];



