import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TestComponent } from './auth/components/test/test.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  // {
  //     path: 'login',
  //     loadChildren: () => import('../app/auth/auth.routes').then((m) => m.loginRoutes)
  // },
  // {
  //     path: 'signup',
  //     loadChildren: () => import('../app/auth/auth.routes').then((m) => m.signupRoutes)
  // },
  {
    path: 'auth',
    loadChildren: () =>import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>import('../app/auth/auth.module').then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }