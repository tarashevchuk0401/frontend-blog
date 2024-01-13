import {createFeature, createReducer, on} from '@ngrx/store';
import {AuthStateInterface} from '../types/authState.interface';
import {authActions} from './actions';
import {routerNavigationAction} from '@ngrx/router-store';
import { act } from '@ngrx/effects';

const initialState: AuthStateInterface = {
  isLoading: false,
  currentUser: undefined,
  currentUserData: undefined,
  validationErrors: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,

    // SignUp
    on(authActions.signUp, (state) => ({
      ...state,
    })),
    on(authActions.signUpSuccess, (state, action) => ({
      ...state,
      currentUser: action.response,
    })),
    on(authActions.signUpFailed, (state, action) => ({
      ...state,
      validationErrors: action.error,
      currentUser: null,
    })),

    // LogIn
    on(authActions.logIn, (state) => ({
      ...state,
    })),
    on(authActions.logInSuccess, (state, action) => ({
      ...state,
      currentUser: action.response,
    })),
    on(authActions.logInFailed, (state, action) => ({
      ...state,
      validationErrors: action.error,
      currentUser: null,
    })),

    //Get Current User
    on(authActions.getCurrentUser, (state) => ({
      ...state,
    })),
    on(authActions.getCurrentUserSuccess, (state, action) => ({
      ...state,
      currentUserData: action.currentUserData,
    })),
    on(authActions.getCurrentUserFailed, (state) => ({
      ...state,
      currentUserData: null,
    })),

    // Log Out

    on(authActions.logOut, (state) => {
      localStorage.removeItem('token');

      return {
        ...state,
        currentUser: null,
        currentUserData: null,
      };
    }),

    on(routerNavigationAction, (state) => ({
      ...state,
      validationError: null,
    }))
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectCurrentUserData,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature;
