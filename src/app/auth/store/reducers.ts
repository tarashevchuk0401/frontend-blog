import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

const initialState: AuthStateInterface = {
    isLoading: false,
    currentUser: undefined,
    validationErrors: null,
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.signUp, (state) => ({
            ...state
        })),
        on(authActions.signUpSuccess, (state, action) => ({
            ...state,
            currentUser: action.response
        })),
        on(authActions.signUpFailed, (state, action) => ({
            ...state,
            validationErrors: action.error
        }))
    )
})

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectCurrentUser,
    selectValidationErrors
} = authFeature