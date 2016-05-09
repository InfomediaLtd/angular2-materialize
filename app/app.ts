import {SideNav} from "./components/side-nav";
import {Forms} from "./components/forms";
import {Tabs} from "./components/tabs";
import {TabsRouting} from "./components/tabs-routing";
import {Dialogs} from "./components/dialogs";
import {Dropdown} from "./components/dropdown";
import {Collapsible} from "./components/collapsible";
import {Buttons} from "./components/buttons";
import {DatePicker} from "./components/datepicker";
import {ModelBindings} from "./components/model-bindings/model-bindings";
import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Location} from '@angular/common';
import "../src/index";

@Component({
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES, Buttons, Collapsible, Dropdown, Dialogs, Tabs, TabsRouting, Forms, SideNav, ModelBindings],
    styles: [`header, main, footer { padding-left: 260px; }`],
    template: `

        <sideNav></sideNav>

        <main>
          <h3>Angular2 Materialize Examples</h3>
          <br/>
          <router-outlet></router-outlet>
        </main>

    `
})
@RouteConfig([
  {path: "/buttons", component: Buttons, name: "Buttons", useAsDefault:true},
  {path: "/collapsible", component: Collapsible, name: "Collapsible"},
  {path: "/dialogs", component: Dialogs, name: "Dialogs"},
  {path: "/dropdowns", component: Dropdown, name: "Dropdown"},
  {path: "/forms", component: Forms, name: "Forms"},
  {path: "/tabs/", component: Tabs, name: "Tabs"},
  {path: "/tabs-routing/...", component: TabsRouting, name: "TabsRouting"},
  {path: "/datepicker", component: DatePicker, name: "DatePicker"},
  {path: "/modelbindings", component: ModelBindings, name: "ModelBindings"},
])
export class App { }
