import {Component, EventEmitter} from '@angular/core';
import {MaterializeAction} from '../../../lib/materialize-directive';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
declare var Materialize: any;

@Component({
    selector: "datePicker",
    template: `
    <div class="row"><h4>Simple Binding</h4></div>
    <div class="row">
          <div class="col s6">
            <label for="birthdate">Birthdate {{birthDate}}</label>
            <input id="birthdate" name="birthdate" [(ngModel)]="birthDate"
                   materialize="pickadate"
                   [materializeActions]="birthDateActions"
                   [materializeParams]="[{format: 'dd/mm/yyyy'}]"
                   type="text" />
          </div>
          <div class="col s6">
             <label for="birthtime">Birthtime {{birthTime}}</label>
             <input id="birthtime" name="birthtime" [(ngModel)]="birthTime"
                    materialize="pickatime" 
                    [materializeActions]="birthTimeActions"
                    [materializeParams]="[{twelvehour: false}]"
                    placeholder="00:00" class="validate" type="text">
          </div>
          
    </div>
    <div class="row">
          <div class="col s6">
            <a class="waves-effect waves-light btn" (click)="openDatePicker()">Open Date Picker</a>
          </div>
            
          <div class="col s3">
           <a class="waves-effect waves-light btn" (click)="setTime('01:15')">Set Time to 01:15</a>
          </div>
          <div class="col s3">
           <a class="waves-effect waves-light btn" (click)="openTimePicker()">Open Time Picker</a>
          </div>
    </div>
    
    <div class="row"></div>
    <div class="row"></div>
    
    <div class="row"><h4>Form Binding</h4></div>
    
    <form [formGroup]="form" materialize class="col s12">
        <div class="row">
           <div class="col s4">
          
            <label for="birthdate2">Birthdate {{form.value.fromDate}}</label>
            <input id="birthdate2" name="birthdate2" formControlName="fromDate"
                   materialize="pickadate"
                   [materializeParams]="[{format: 'dd/mm/yyyy'}]"
                   type="text" />
          </div>
          </div>
          <div class="row">
           <div class="col s4">
            <label for="birthtime2">Birthtime {{form.value.fromTime}}</label>
            <input id="birthtime2" name="birthtime2" formControlName="fromTime"
                   materialize="pickatime"
                   [materializeParams]="[{format: 'dd/mm/yyyy'}]"
                   type="text" />
          </div>
        </div>
    </form>
        `
})
export class DatePicker {
    birthDate:string;
    birthTime:string;

    birthDateActions = new EventEmitter<string|MaterializeAction>();
    birthTimeActions = new EventEmitter<string|MaterializeAction>();
    form: FormGroup;


    constructor(private fb: FormBuilder) {
        this.birthDate = "03/12/2017";
        this.birthTime = "12:36";
        this.form = this.fb.group({
            'fromDate': new FormControl('06/07/2017'),
            'fromTime': new FormControl('08:30')
        });
    }

    openDatePicker() {
        //actions are open or close
        this.birthDateActions.emit({action: "pickadate", params: ["open"]});
    }

    setTime(time) {
        this.birthTime = time;
    }

    openTimePicker() {
        //actions are show or hide
        this.birthTimeActions.emit({action: "pickatime", params: ["show"]});
    }
}
