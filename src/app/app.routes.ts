import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('../app/auth/auth.routes').then((m) => m.loginRoutes)
    },
    {
        path: 'signup',
        loadChildren: () => import('../app/auth/auth.routes').then((m) => m.signupRoutes)
    },
];
