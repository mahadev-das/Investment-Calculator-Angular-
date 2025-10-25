// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// import { BrowserModule } from "@angular/platform-browser";

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

// import { platformBrowser } from "@angular/platform-browser";
// import { AppModule } from "./app/app.module";

// platformBrowser().bootstrapModule(AppModule).catch(err=>console.log(err));



import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
