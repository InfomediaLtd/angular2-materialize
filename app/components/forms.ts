import {MaterializeDirective} from "../../src/index";
import {Component,OnInit} from "@angular/core"

@Component({
    selector: "forms",
    template: `
        <form materialize class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input [(ngModel)]="firstName" name="firstName" placeholder="Placeholder" id="first_name" type="text" class="validate" [attr.disabled]="isDisabled?true:null">
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" [attr.disabled]="isDisabled?true:null">
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input type="text" name="autoComplete" materialize="autocomplete" [materializeParams]="[{'data': {'apple': null, 'google': null}}]" [attr.disabled]="isDisabled?true:null">
              <label for="autoComplete">Autocomplete (a/g)</label>
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
              <input id="password" type="password" placeholder="" class="validate" [attr.disabled]="isDisabled?true:null">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate" [attr.disabled]="isDisabled?true:null">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" class="validate" [attr.disabled]="isDisabled?true:null">
              <label for="icon_prefix">First Name</label>
            </div>
            <div class="input-field col s6">
              <i class="material-icons prefix">phone</i>
              <input id="icon_telephone" type="tel" class="validate" [attr.disabled]="isDisabled?true:null">
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
          <div class="row">
            <input materialize="pickadate" type="date" class="datepicker" [attr.disabled]="isDisabled?true:null">
          </div>
          <div class="row">
            <div class="input-field col s12">
              <textarea id="textarea1" class="materialize-textarea" materialize="characterCounter" length="120" [attr.disabled]="isDisabled?true:null"></textarea>
              <label for="textarea1">Textarea</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <select [(ngModel)]="selectedOption" name="selectedOption" materialize="material_select" [materializeSelectOptions]="selectOptions" [attr.disabled]="isDisabled?true:null">
                <option value="" disabled selected>Choose your option</option>
                <option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
              </select>
              <label>Materialize Select</label>
            </div>
            <div class="input-field col s6">
              <select multiple materialize="material_select" [materializeSelectOptions]="selectOptions" [attr.disabled]="isDisabled?true:null">
                <option value="" disabled selected>Choose your option</option>
                <option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
              </select>
              <label>Materialize Multi Select</label>
            </div>
          </div>
          <div class="row">
            <div class="col s6 switch">
              <div class="switch">
                <label>
                  Off
                  <input type="checkbox" [attr.disabled]="isDisabled?true:null">
                  <span class="lever"></span>
                  On
                </label>
              </div>
              <br/>
              <p>
                <input type="checkbox" id="test5" [checked]="isTest5Checked" [attr.disabled]="isDisabled?true:null"/>
                <label for="test5">Red</label>
              </p>
              <p>
                <input type="checkbox" id="test6" name="test6" [(ngModel)]="isTest6Checked" [attr.disabled]="isDisabled?true:null"/>
                <label for="test6">Yellow</label>
              </p>
              <p>
                <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" [attr.disabled]="isDisabled?true:null"/>
                <label for="filled-in-box">Filled in</label>
              </p>
              <p>
                <input type="checkbox" id="indeterminate-checkbox" [attr.disabled]="isDisabled?true:null"/>
                <label for="indeterminate-checkbox">Indeterminate Style</label>
              </p>
            </div>
            <div class="col s6">Value: {{isTest6Checked}}</div>
          </div>
          <div class="row">
            <div class="col s6">
              <p>
                <input name="group1" type="radio" id="test1" [(ngModel)]="radioButtonValue" [value]="1" [attr.disabled]="isDisabled?true:null"/>
                <label for="test1">Red</label>
              </p>
              <p>
                <input name="group1" type="radio" id="test2" [(ngModel)]="radioButtonValue" [value]="2" [attr.disabled]="isDisabled?true:null"/>
                <label for="test2">Yellow</label>
              </p>
              <p>
                <input class="with-gap" name="group1" type="radio" id="test3" [(ngModel)]="radioButtonValue" [value]="3" [attr.disabled]="isDisabled?true:null"/>
                <label for="test3">Green</label>
              </p>
                <p>
                  <input name="group1" type="radio" id="test4" disabled="disabled"/>
                  <label for="test4">Brown</label>
              </p>
            </div>
            <div class="col s6">Value: {{radioButtonValue}}</div>
          </div>
        </form>
        <br/><hr/><br/>        
        <a class="waves-effect waves-light btn" (click)="isDisabled=!isDisabled">{{isDisabled?"Enable":"Disable"}} Form</a>
        <br/><br/><hr/><br/>
        <div class="row">
          <div class="col s6">First Name: {{firstName}}</div>
        </div>
        <div class="row">
          <div class="col s6">Selected Option: {{selectedOption}}</div>
        </div>
    `
})
export class Forms implements OnInit {
  private firstName = "";
  private selectedOption = "";

  private selectOptions = [];

  private isTest5Checked = false;
  private isTest6Checked = true;
  
  private radioButtonValue = 3;

  public ngOnInit() {
      window.setTimeout(()=>{
        this.selectOptions = [
          {value:1,name:"Option 1"},
          {value:2,name:"Option 2"},
          {value:3,name:"Option 3"}
        ]
      },100);

      // window.setInterval(()=>{
      //   console.log(this.radioButtonValue);
      // },500);
  }

  isDisabled = false;

}
