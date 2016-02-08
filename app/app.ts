import {SideNav} from "./components/side-nav";
import {Forms} from "./components/forms";
import {Tabs} from "./components/tabs";
import {Dialogs} from "./components/dialogs";
import {Dropdown} from "./components/dropdown";
import {Collapsible} from "./components/collapsible";
import {Buttons} from "./components/buttons";
import {Component} from "angular2/core"
import "../src/index"

@Component({
    selector: "my-app",
    directives: [Buttons, Collapsible, Dropdown, Dialogs, Tabs, Forms, SideNav],
    styles: [`
      header, main, footer { padding-left: 240px; }
      @media only screen and (max-width : 992px) {
        header, main, footer { padding-left: 0; }
      }
      `],
    template: `

        <sideNav></sideNav>

        <main>
          <h5>Buttons</h5>
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
          <br/>
        </main>

    `
})
export class App {

}
