import {Component} from "angular2/core";
import {Option} from "./option";
import {MaterialInput} from "./input";
import {MaterialSelect} from "./select";
import {MaterializeDirective} from "../../../src/index";
import * as Materialize from "../../../src/index";

@Component({
    selector: "actionsMain",
    directives: [MaterializeDirective, MaterialInput, MaterialSelect],
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
          <materialSelect [options]="selectOptions" [(model)]="selectedVal" (modelChange)="onSelectValChange($event)"></materialSelect>
          <p>{{ 'Value: ' + selectedOption.value + ' Name: ' + selectedOption.name}}</p>
        </div>

        <div class="row">
             <h4>Datepicker model binding</h4>
                <div class="row">
                    <div class="input-field col s6">
                            <input type="text" [(ngModel)]="datepicker" materialize="pickadate" />
                    </div>
                </div>
            <p>{{ datepicker }}</p>
        </div>
      </form>
    `
})
export class ModelBindings {
    selectOptions: Array<Option>;
    selectedOption: Option;
    selectedVal: string;
    inputVal : string;
    datepicker: string;
    constructor() {
        
        this.datepicker = '12/12/12';

        // input
        this.inputVal="Materialize is awesome!";

        // select
        let option1 = new Option("1", "Option 1");
        let option2 = new Option("2", "Option 2");

        this.selectedVal = "1";
        this.selectedOption = option1;

        this.selectOptions = new Array<Option>();
        this.selectOptions.push(option1);
        this.selectOptions.push(option2);

    }

    onInputValChange(val){
        Materialize.toast(`parent input: ${val}`, 500)
    }

    onSelectValChange(val){
        this.selectOptions.forEach(element => {
            if(element.value === val) this.selectedOption = element;
        });
        Materialize.toast(`parent select: ${val}`, 2000)
    }
}
