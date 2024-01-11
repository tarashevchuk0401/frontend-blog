import { Route, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';
import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { ErrorComponent } from './components/error.component.ts/error.component';
import { LoginComponent } from './components/login/login.component';

// export const signupRoutes: Route[] = [
//   {
//     path: '',
//     component: SignupComponent,
//   },
// ];
// export const loginRoutes: Route[] = [
//   {
//     path: '',
//     component: LoginComponent,
//   },
// ];

// export const testRoutes: Route[] = [
//   {
//     path: '',
//     component: TestComponent,
//   },
// ];

export const testRoutes: Route[] = [
  {
    path: '',
    component: TestComponent,
  },
  // {
  //   path: 'log-in',
  //   component: LogInComponent,
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'error',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(testRoutes)],
  exports: [RouterModule]
})

export class TestRoutingModule{}


