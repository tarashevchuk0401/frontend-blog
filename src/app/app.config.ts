import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideState, provideStore} from '@ngrx/store';
import {provideAnimations} from '@angular/platform-browser/animations';
import {getAuth, provideAuth,} from '@angular/fire/auth';
import {getDatabase, provideDatabase} from '@angular/fire/database';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {authFeatureKey, authReducer} from './auth/store/reducers';
import {provideEffects} from '@ngrx/effects';
import * as authEffects from './auth/store/effects';
import * as articleEffects from './feeds/state/effects'
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { articleFeatureKey, articleReducer } from './feeds/state/reducers';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getStorage, provideStorage} from '@angular/fire/storage'


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      router: routerReducer
    }),
    provideState(authFeatureKey, authReducer),
    provideState(articleFeatureKey, articleReducer),
    provideEffects(articleEffects, authEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideRouterStore({}),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),

    // FIREBASE
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp({
        apiKey: "AIzaSyAoMkeQIVjqd_NhkWt0wA_Sgl4nCFzfIzc",
        authDomain: "frontend-blog-angular.firebaseapp.com",
        databaseURL: "https://frontend-blog-angular-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "frontend-blog-angular",
        storageBucket: "frontend-blog-angular.appspot.com",
        messagingSenderId: "886300302950",
        appId: "1:886300302950:web:593bce6465baddcdf8d7a7",
        measurementId: "G-J67TZF90K4"
      })),
      provideStorage(() => getStorage()),
    ]),
  ],
};
