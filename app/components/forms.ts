import {MaterializeDirective} from "../../src/index";
import {Component} from "angular2/core"

@Component({
    selector: "forms",
    directives: [MaterializeDirective],
    template: `
        <form materialize class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input [(ngModel)]="firstName" placeholder="Placeholder" id="first_name" type="text" class="validate">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate">
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input disabled value="I am not editable" id="disabled" type="text" class="validate">
              <label for="disabled">Disabled</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="password" type="password" placeholder="" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" class="validate">
              <label for="icon_prefix">First Name</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" class="validate">
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
          <div class="row">
            <input materialize="pickadate" type="date" class="datepicker">
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Textarea</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <select [(ngModel)]="selectedOption" materialize="material_select">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Materialize Select</label>
            </div>
            <div class="input-field col s6">
              <select [(ngModel)]="selectedOption" materialize="material_select">
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Materialize Select</label>
            </div>
          </div>
          <div class="row">
            <div class="col s6 switch">
              <label>
                Off
                <input type="checkbox">
                <span class="lever"></span>
                On
              </label>
            </div>
          </div>
        </form>
        <br/><hr/><hr/><br/>
        <div class="row">
          <div class="col s6">First Name: {{firstName}}</div>
        </div>
        <div class="row">
          <div class="col s6">Selected Option: {{selectedOption}}</div>
        </div>
    `
})
export class Forms {
  private firstName = "";
  private selectedOption = "";

}
