import {Component, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../../lib/materialize-directive';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
declare var Materialize: any;

@Component({
    selector: "datePicker",
    template: `
    <div class="row">
          <div class="col s6">
            <label for="birthdate">Birthdate No Form {{birthdate}}</label>
            <input id="birthdate" name="birthdate" [(ngModel)]="birthdate"
                   materialize="pickadate"
                   [materializeActions]="actions"
                   [materializeParams]="[{format: 'dd/mm/yyyy'}]"
                   type="text" />
          </div>
          <div class="col s4">
             <label for="birthtime">Birthtime No Form</label>
             <input id="birthtime"
                    materialize="pickatime" [materializeParams]="[{default: '00:00', twelvehour: false}]"
                    placeholder="00:00" class="validate" type="text">
          </div>
    </div>
    <form [formGroup]="form" materialize class="col s12">
        <div class="row">
           <div class="col s6">
            <label for="birthdate">Birthdate 06/07/2017</label>
            <input id="birthdate" name="birthdate" formControlName="from"
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
    form: FormGroup;


    constructor(private fb: FormBuilder) {
        this.birthdate = new Date('03/12/2017');
        this.form = this.fb.group({
            'from': new FormControl('06/07/2017'),
        });
    }

    openAndClose() {
        this.actions.emit({action: "pickadate", params: ["open"]});
        window.setTimeout(()=> {
            this.actions.emit({action: "pickadate", params: ["close"]});
        }, 1000);
    }
}
