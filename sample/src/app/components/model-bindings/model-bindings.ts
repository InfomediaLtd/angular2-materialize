import {Component} from "@angular/core";
import {Option} from "./option";
import {MaterialInput} from "./input";
import {MaterialSelect} from "./select";
import {MaterializeDirective} from "angular2-materialize";
import * as Materialize from "angular2-materialize";
import "rxjs";
import {Observable} from "rxjs/Observable";

@Component({
    selector: "actionsMain",
    template: `
      <form materialize class="col s12">
        <div class="row">
          <h4>Input model binding</h4>
          <materialInput [(model)]="inputVal" (modelChange)="onInputValChange($event)" ></materialInput>
          <p>{{inputVal}}</p>
        </div>
        <div>
          <br/>
          <div class="divider"></div>
          <br/>
        </div>
        <div class="row">
          <h4>Select model binding</h4>
          <materialSelect [options]="selectOptions" (modelChange)="onSelectValChange($event)"></materialSelect>
        </div>
        <div class="row">
          <h4>Select model binding with initial value</h4>
          <materialSelect [options]="selectOptions" [initialValue]="selectedVal" (modelChange)="onSelectValChange($event)"></materialSelect>
          <p>{{ 'Initial value: ' + selectedVal }}</p>
        </div>
        <br/>
        <div class="row">
          <div class="input-field">
            <select [(ngModel)]="selectedCountries" name="countries" (ngModelChange)="onCountryChange($event)" materialize="material_select" [materializeSelectOptions]="countryOptions">
              <option value="" disabled>Select option ..</option>
              <option *ngFor="let country of countryOptions" [value]="country.value">{{country.name}}</option>
            </select>
            <label>Country selection ({{selectedCountries}})</label>
          </div>
        </div>
        <div class="row">
             <h4>Datepicker model binding</h4>
                <div class="row">
                    <div class="input-field col s6">
                            <input type="text" [(ngModel)]="datepicker" name="datepicker" materialize="pickadate" [materializeParams]="[{format:'dd/mm/yyyy'}]" />
                    </div>
                </div>
            <p>{{ datepicker }}</p>
        </div>
      </form>
    `
})
export class ModelBindings {
    selectOptions: Array<Option>;
    selectedVal: string;
    inputVal : string;
    datepicker: string;

    countryOptions = [new Option("US", "United States"),new Option("GB", "Great Britain"),new Option("AU", "Australia")];
    selectedCountries;

    constructor() {

        this.datepicker = '01/02/2016';

        // input
        this.inputVal="Materialize is awesome!";

        this.selectedVal = "1";

        const options$ = Observable.create(observer => {
          window.setTimeout(()=> {
            observer.next([new Option("1", "Option 1"),new Option("2", "Option 2")]);
          },100);
        });
        options$.subscribe(options => {
          this.selectOptions = options;
        });

        window.setTimeout(()=> {
          this.selectedCountries = "AU";
        },1000);

    }

    onInputValChange(val){
        Materialize.toast(`parent input: ${val}`, 500)
    }

    onSelectValChange(val){
        Materialize.toast(`parent select: ${val}`, 2000)
    }

    onCountryChange(e) {
      console.log(e);
    }
}
