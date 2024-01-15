import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from '../environment/environment';


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
  imports: [RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment),
    AngularFireModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
