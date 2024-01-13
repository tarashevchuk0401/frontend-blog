import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {authRequestInterface} from '../types/authRequest.interface';
import {AuthResponseInterface} from '../types/authResponse.interface';
import {BackendError} from '../../shared/types/backendError.interface';
import { CurrentUser } from '../../shared/types/currentUser.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    SignUp: props<{request: authRequestInterface}>(),
    'SignUp success': props<{response: AuthResponseInterface}>(),
    'SignUp failed': props<{error: BackendError}>(),

    LogIn: props<{request: authRequestInterface}>(),
    'LogIn success': props<{response: AuthResponseInterface}>(),
    'LogIn failed': props<{error: BackendError}>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{currentUser: CurrentUser}>(),
    'Get current user failed': emptyProps(),
  },
});

authActions.signUp;
