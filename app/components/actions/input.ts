import {Component, EventEmitter} from "angular2/core";
import {MaterializeDirective} from "../../../src/index";


@Component({
    selector: "materialInput",
    directives: [MaterializeDirective],
    inputs: ['model: model'],
    outputs: ['modelChange'],
    template: `
    <div class="row">
        <div class="input-field col s6">
          <input [ngModel]="model" (ngModelChange)="change($event)" id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
    </div>
`
})
export class MaterialInput {
    model: string;
    modelChange = new EventEmitter();

   change(newValue) {
      console.log('child input: ', newValue)
      this.model = newValue;
      this.modelChange.emit(newValue);
    }
}
