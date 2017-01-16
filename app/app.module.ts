import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MaterializeModule } from "../src/index";
import {MaterialInput,
        Option,
        MaterialSelect} from "./components/model-bindings/index"
import { AppComponent } from './app.component';
import {
  Buttons,
  Carousel,
  Chips,
  Collapsible,
  Dropdown,
  Dialogs,
  Tabs,
  //TabsRouting,
  Forms,
  SideNav,
  DatePicker,
  Parallax,
  ModelBindings
} from './components/index';
import { routing, appRoutingProviders } from './app.routing'


@NgModule({
  declarations: [
    AppComponent,
    Buttons,
    Carousel,
    Chips,
    Collapsible,
    Dropdown,
    Dialogs,
    Tabs,
    //TabsRouting,
    Forms,
    SideNav,
    DatePicker,
    Parallax,
    ModelBindings,
    MaterialInput,
    MaterialSelect,

  ],
  imports: [
    MaterializeModule,
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
