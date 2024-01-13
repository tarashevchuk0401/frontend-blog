import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feeds/feed.routing').then((m) => m.FeedsRoutes),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./feeds/feed.routing').then((m) => m.FeedsRoutes),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.signupRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
