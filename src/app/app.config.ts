import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_EXPANSION_PANEL_DEFAULT_OPTIONS } from '@angular/material/expansion';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection ({ eventCoalescing: true }), 
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: MAT_EXPANSION_PANEL_DEFAULT_OPTIONS,
      useValue: { hideToggle: true, expandedHeight: 'auto' }
    }
  ],
};
