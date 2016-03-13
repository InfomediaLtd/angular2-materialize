import {Component, EventEmitter} from "angular2/core";
import {MaterializeDirective} from "../../../src/index";
import * as Materialize from "../../../src/index";
import {Option} from './option';

@Component({
    selector: "materialSelect",
    directives: [MaterializeDirective],
    inputs: ['model: model', 'options: options'],
    outputs: ['modelChange'],
    template: `
      <div class="row">
          <div class="input-field col s6">
                <select [ngModel]="model" (ngModelChange)="change($event)" id="selectExample" materialize="material_select">
                  <option value="" disabled selected>Select option ..</option>
                  <option *ngFor="#option of options" [value]="option.value">{{option.name}}</option>
              </select>
          </div>
      </div>
`
})
export class MaterialSelect {
    model: string;
    modelChange = new EventEmitter();
    options: Array<Option>;

    change(newValue) {
      Materialize.toast('child select: '+newValue, 2000)
      this.model = newValue;
      this.modelChange.emit(newValue);
    }
}
