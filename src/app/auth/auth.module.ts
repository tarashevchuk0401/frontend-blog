import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { Route, RouterModule } from '@angular/router';
import { TestRoutingModule } from './auth.routes';
import { SignupComponent } from './components/signup/signup.component';
// import { LogInComponent } from './components/log-in/log-in.component';
import { ErrorComponent } from './components/error.component.ts/error.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
  ],
  imports: [
    // RouterModule.forRoot(testRoutes),
    // LogInComponent,
    LoginComponent,
    ErrorComponent,
    SignupComponent,
    TestComponent,
    CommonModule,
    TestRoutingModule
  
  ],
  providers: [
    // AuthService
  ]
})
export class AuthModule { }
