import {Dialogs} from "./components/dialogs";
import {Dropdown} from "./components/dropdown";
import {Collapsible} from "./components/collapsible";
import {Buttons} from "./components/buttons";
import {Component} from "angular2/core"
import "../src/index"

@Component({
    selector: "my-app",
    directives: [Buttons, Collapsible, Dropdown, Dialogs],
    template: `
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
    `
})
export class App {

}
