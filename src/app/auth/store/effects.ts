import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from '../services/auth.service';
import {authActions} from './actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {CurrentUser} from '../../shared/types/currentUser.interface';
import {HttpErrorResponse} from '@angular/common/http';

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
            )
          })
        );
      })
    );
  },
  {functional: true}
);
