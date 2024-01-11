import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {provideState, provideStore} from '@ngrx/store';


const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideStore(),
    // provideState()
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
