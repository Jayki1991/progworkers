import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideMonacoEditor({
      baseUrl: 'assets/monaco/vs', // Pfad zu den Monaco-Assets
      defaultOptions: {
        scrollBeyondLastLine: false,
        theme: 'vs-dark',
        language: 'csharp',
      }
    })
  ]
};