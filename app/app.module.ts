import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import {
  Buttons,
  Collapsible,
  Dropdown,
  Dialogs,
  Tabs,
  TabsRouting,
  Forms,
  SideNav,
  DatePicker,
  ModelBindings
} from './components/index';
import { routing } from './app.routing'


@NgModule({
  declarations: [
    AppComponent,
    Buttons,
    Collapsible,
    Dropdown,
    Dialogs,
    Tabs,
    TabsRouting,
    Forms,
    SideNav,
    DatePicker,
    ModelBindings
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
