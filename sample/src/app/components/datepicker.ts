import {Component,EventEmitter} from '@angular/core';
import { MaterializeAction } from "../../../lib/materialize-directive";
declare var Materialize: any;

@Component({
    selector: "datePicker",
    template: `
      <form materialize class="col s12">
        <div class="row">
          <div class="col s6">
            <label for="birthdate">Birthdate {{birthdate}}</label>
            <input id="birthdate" [(ngModel)]="birthdate" name="birthdate" (ngModelChange)="modelChanged($event)"
                   materialize="pickadate"
                   [materializeActions]="actions"
                   [materializeParams]="[{format: 'dd/mm/yyyy'}]"
                   type="text" />
          </div>
        </div>
      </form>
      <br/><br/>
      <a class="waves-effect waves-light btn" (click)="openAndClose()">Open and Close</a>
        `
})
export class DatePicker {
    birthdate;

      actions = new EventEmitter<string|MaterializeAction>();

    constructor() {
        this.birthdate = new Date('03/12/2017');
    }

    openAndClose() {
        this.actions.emit({action:"pickadate",params:["open"]});
        window.setTimeout(()=>{
            this.actions.emit({action:"pickadate",params:["close"]});
        },1000);
    }

    modelChanged($event) {
        console.log($event);
    }
}
