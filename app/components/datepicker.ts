import {MaterializeDirective} from "../../src/index";
import {Component} from "@angular/core"

@Component({
    selector: "datePicker",
    template: `
      <form materialize class="col s12">
        <div class="row">
          <div class="col s6">
            <label for="birthdate">Birthdate</label>
            <input id="birthdate"
                   materialize="pickadate"
                   [materializeParams]="[{selectMonths: true, selectYears: 15}]"
                   type="text" />
          </div>
        </div>
      </form>
    `
})
export class DatePicker {}
