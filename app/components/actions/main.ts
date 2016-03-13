import {Component} from "angular2/core";
import {Option} from "./option";
import {MaterialInput} from "./input";
import {MaterialSelect} from "./select";

import {MaterializeDirective} from "../../../src/index";

@Component({
    selector: "actionsMain",
    directives: [MaterializeDirective, MaterialInput, MaterialSelect],
    template: `
        <h4>Input model binding</h4>
        <materialInput [(model)]="inputVal" (modelChange)="onInputValChange($event)" ></materialInput>
        <p>{{inputVal}}</p>
        
        <div class="divider"></div>
        
        <h4>Select model binding</h4>
        <materialSelect [options]="selectOptions" [(model)]="selectedVal" (modelChange)="onSelectValChange($event)" ></materialSelect>
        <p>{{ 'Value: ' + selectedOption.value + ' Name: ' + selectedOption.name}}</p>
    `
})
export class ActionsMain {
    selectOptions: Array<Option>;
    selectedOption: Option;
    selectedVal: string;
    inputVal : string;
    
    constructor() {
        
        /**
         * Input
         */
        this.inputVal="Materialize is awesome!";
        
        /**
         * Select
         */
        
        let option1 = new Option("1", "Option 1");
        let option2 = new Option("2", "Option 2");
        
        this.selectedVal = "1";        
        this.selectedOption = option1;      
        
        this.selectOptions = new Array<Option>();
        this.selectOptions.push(option1);
        this.selectOptions.push(option2);
    }
    
    onInputValChange(val){
        console.log('parent input: ', val);
    }
    
    onSelectValChange(val){
        this.selectOptions.forEach(element => {
            if(element.value === val) this.selectedOption = element;
        });
        console.log('parent select: ', val);
    }
}
