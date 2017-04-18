import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { MaterializeModule } from "angular2-materialize";
import { MaterializeDirective } from "angular2-materialize";

if (environment.production) {
  enableProdMode();
}

console.log("MaterializeModule",MaterializeModule);
console.log("MaterializeDirective",MaterializeDirective);

platformBrowserDynamic().bootstrapModule(AppModule);
