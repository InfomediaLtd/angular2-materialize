import {Component} from "@angular/core"

@Component({
    selector: "chips",
    template: `
        <div class="chip">Tag1<i class="close material-icons">close</i></div>
        <div class="chip">Tag2<i class="close material-icons">close</i></div>
        <br/><hr/>
        <div class="chips" materialize="material_chip"></div>
        <div class="chips chips-initial" materialize="material_chip" [materializeParams]="[chipsInit]"></div>
        <div class="chips chips-placeholder" materialize="material_chip" [materializeParams]="[chipsPlaceholder]"></div>
        <br/><hr/>
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
  
  chipsPlaceholder = {
    placeholder: '+Tag',
    secondaryPlaceholder: 'Enter a tag',
  };

}
