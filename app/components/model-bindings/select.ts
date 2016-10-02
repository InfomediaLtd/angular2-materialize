import {Component, Input, Output, EventEmitter} from "@angular/core";
import {MaterializeDirective} from "../../../src/index";
import * as Materialize from "../../../src/index";
import {Option} from './option';

@Component({
    selector: "materialSelect",
    template: `
      <div class="row">
          <div class="input-field col s6">
                <select [ngModel]="initialValue" (ngModelChange)="change($event)" id="selectExample" materialize="material_select" [materializeSelectOptions]="options">
                  <option value="" disabled selected>Select option ..</option>
                  <option *ngFor="let option of options" [value]="option.value">{{option.name}}</option>
              </select>
          </div>
      </div>
`
})
export class MaterialSelect {
    @Input() initialValue: string;
    @Output() modelChange = new EventEmitter();
    @Input() options: Array<Option>;

    change(newValue) {
      Materialize.toast('child select: '+newValue, 2000)
      this.modelChange.emit(newValue);
    }
}
