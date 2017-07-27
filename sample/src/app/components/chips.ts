import { Component, EventEmitter } from "@angular/core"
import { MaterializeAction } from "angular2-materialize";

@Component({
    selector: "chips",
    template: `
        <div class="chips" materialize="material_chip" [materializeParams]="[chipsInit]" (chip.add)="add($event.detail)" (chip.delete)="delete($event.detail)" (chip.select)="select($event.detail)" [materializeActions]="chipsActions"></div>
        <a class="waves-effect waves-light btn" (click)="updateChips()">Update Chips</a>
        <br/><br/><br/>
        <div class="chips" materialize="material_chip" [materializeParams]="[chipsPlaceholder]"></div>
        <span>With Autocomplete: (Apple/Microsoft/Google)</span>
        <div class="chips" materialize="material_chip" [materializeParams]="[autocompleteInit]"></div>
    `
})
export class Chips {
  chipsActions = new EventEmitter<string|MaterializeAction>();

  chipsInit = {
    data: [{
      tag: 'Apple',
    }, {
      tag: 'Microsoft',
    }, {
      tag: 'Google',
    }],
  };
  autocompleteInit = {
    autocompleteOptions: {
      data: {
        'Apple': null,
        'Microsoft': null,
        'Google': null
      },
      limit: Infinity,
      minLength: 1
    }
  };
  
  chipsPlaceholder = {
    placeholder: '+Tag',
    secondaryPlaceholder: 'Enter a tag',
  };

  add(chip) {
    console.log("Chip added: " + chip.tag);
  }

  delete(chip) {
    console.log("Chip deleted: " + chip.tag);
  }

  select(chip) {
    console.log("Chip selected: " + chip.tag);
  }
  
  updateChips() {
    const newChipsInit = {
      data: [{
        tag: 'Apple2',
      }, {
        tag: 'Google2',
      }],
    }
    this.chipsActions.emit({action:"material_chip",params:[newChipsInit]});
  }
}
