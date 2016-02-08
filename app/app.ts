import {SideNav} from "./components/side-nav";
import {Forms} from "./components/forms";
import {Tabs} from "./components/tabs";
import {Dialogs} from "./components/dialogs";
import {Dropdown} from "./components/dropdown";
import {Collapsible} from "./components/collapsible";
import {Buttons} from "./components/buttons";
import {Component} from "angular2/core"
import {RouteConfig, ROUTER_DIRECTIVES, Location} from "angular2/router"
import "../src/index"

@Component({
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES, Buttons, Collapsible, Dropdown, Dialogs, Tabs, Forms, SideNav],
    styles: [`header, main, footer { padding-left: 260px; }`],
    template: `

        <sideNav></sideNav>

        <main>
          <br/><br/>
          <router-outlet></router-outlet>
          <!--<h5>Buttons</h5>
          <buttons></buttons>
          <br/>
          <h5>Collapsible</h5>
          <collapsible></collapsible>
          <br/>
          <h5>Dropdown</h5>
          <dropdown></dropdown>
          <br/>
          <h5>Dialogs</h5>
          <dialogs></dialogs>
          <br/>
          <h5>Tabs</h5>
          <tabs></tabs>
          <br/>
          <h5>Forms</h5>
          <forms></forms>
          <br/>-->
        </main>

    `
})
@RouteConfig([
  {path: "/buttons", component: Buttons, name: "Buttons", useAsDefault:true},
  {path: "/collapsible", component: Collapsible, name: "Collapsible"},
  {path: "/dialogs", component: Dialogs, name: "Dialogs"},
  {path: "/dropdowns", component: Dropdown, name: "Dropdown"},
  {path: "/forms", component: Forms, name: "Forms"},
  {path: "/tabs", component: Tabs, name: "Tabs"}
])
export class App {

}
