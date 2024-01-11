import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'frontend-blog-angular',
          appId: '1:886300302950:web:593bce6465baddcdf8d7a7',
          storageBucket: 'frontend-blog-angular.appspot.com',
          apiKey: 'AIzaSyAoMkeQIVjqd_NhkWt0wA_Sgl4nCFzfIzc',
          authDomain: 'frontend-blog-angular.firebaseapp.com',
          messagingSenderId: '886300302950',
          measurementId: 'G-J67TZF90K4',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
  ],
};
