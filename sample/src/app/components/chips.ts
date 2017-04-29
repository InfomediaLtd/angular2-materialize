import {Component} from "@angular/core"

@Component({
    selector: "chips",
    template: `
        <div class="chips" materialize="material_chip" [materializeParams]="[chipsInit]" (chip.add)="add($event.detail)" (chip.delete)="delete($event.detail)" (chip.select)="select($event.detail)"></div>
        <div class="chips" materialize="material_chip" [materializeParams]="[chipsPlaceholder]"></div>
        <span>With Autocomplete: (Apple/Microsoft/Google)</span>
        <div class="chips" materialize="material_chip" [materializeParams]="[autocompleteInit]"></div>
    `
})
export class Chips {

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
}
