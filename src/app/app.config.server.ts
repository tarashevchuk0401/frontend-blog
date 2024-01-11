import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {provideState, provideStore} from '@ngrx/store';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideStore(),
    provideRouter(routes),
    
  
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
