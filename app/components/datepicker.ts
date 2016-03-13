import {MaterializeDirective} from "../../src/index";
import {Component} from "angular2/core"

@Component({
    selector: "datePicker",
    directives: [MaterializeDirective],
    template: `
    <input materialize="pickadate" [materializeParams]="[{selectMonths: true, selectYears: 15}]" type="text" />
    `
})
export class DatePicker {}
