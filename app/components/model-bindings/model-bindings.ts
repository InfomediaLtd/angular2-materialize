import {Component} from "@angular/core";
import {Option} from "./option";
import {MaterialInput} from "./input";
import {MaterialSelect} from "./select";
import {MaterializeDirective} from "../../../src/index";
import * as Materialize from "../../../src/index";
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

    }

    onInputValChange(val){
        Materialize.toast(`parent input: ${val}`, 500)
    }

    onSelectValChange(val){
        Materialize.toast(`parent select: ${val}`, 2000)
    }
}
