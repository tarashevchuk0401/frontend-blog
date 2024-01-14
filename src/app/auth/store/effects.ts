import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../services/auth.service';
import {authActions} from './actions';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {PersistanceService} from '../../shared/services/persistance.service';

export const signUpEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.signUp),
      switchMap(({request}) => {
        return authService.signUp(request).pipe(
          map((response) => {
            return authActions.signUpSuccess({response});
          }),

          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.signUpFailed({
                error: errorResponse.error.error.message,
              })
            );
          })
        );
      })
    );
  },
  {functional: true}
);

export const redirectAfterSignUpEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.signUpSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {functional: true, dispatch: false}
);

export const logInEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(authActions.logIn),
      switchMap(({request}) => {
        return authService.logIn(request).pipe(
          map((response) => {
            return authActions.logInSuccess({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.logInFailed({
                error: errorResponse.error.error.message,
              })
            );
          })
        );
      })
    );
  },
  {functional: true}
);

export const redirectAfterLoginEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.logInSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  {functional: true, dispatch: false}
);

export const getCurrentUser = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.getCurrentUser),
      switchMap(() => {
        const token = persistanceService.get('token');
        if (!token) {
          return of(authActions.getCurrentUserFailed());
        }
        return authService.getCurrentUser().pipe(
          map((currentUserData) => {
            return authActions.getCurrentUserSuccess({currentUserData})
            }),
          catchError(() => {
            return of(authActions.getCurrentUserFailed());
          })
        );
      })
    );
  },
  {functional: true}
);
