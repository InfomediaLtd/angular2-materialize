import {Component} from '@angular/core';
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
                   [materializeParams]="[{format: 'dd/mm/yyyy'}]"
                   type="text" />
          </div>
        </div>
      </form>
    `
})
export class DatePicker {
    birthdate;

    constructor() {
        this.birthdate = new Date('03/12/2017');
    }

    modelChanged($event) {
        console.log($event);
    }
}
