import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {MaterializeDirective} from "../src/index";
import {MaterialInput,
        Option,
        MaterialSelect} from "./components/model-bindings/index"
import { AppComponent } from './app.component';
import {
  Buttons,
  Chips,
  Collapsible,
  Dropdown,
  Dialogs,
  Tabs,
  //TabsRouting,
  Forms,
  SideNav,
  DatePicker,
  ModelBindings
} from './components/index';
import { routing, appRoutingProviders } from './app.routing'


@NgModule({
  declarations: [
    AppComponent,
    Buttons,
    Chips,
    Collapsible,
    Dropdown,
    Dialogs,
    Tabs,
    //TabsRouting,
    Forms,
    SideNav,
    DatePicker,
    ModelBindings,
    MaterializeDirective,
    MaterialInput,
    MaterialSelect,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
