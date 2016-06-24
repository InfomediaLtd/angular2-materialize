import {MaterializeDirective} from "../../src/index";
import {Component} from "@angular/core"

@Component({
    selector: "dialogs",
    directives: [MaterializeDirective],
    template: `
      <!-- Modal Trigger -->
      <a materialize="leanModal" [materializeParams]="[{dismissible: false}]" class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

      <!-- data-position can be : bottom, top, left, or right -->
      <!-- data-delay controls delay before tooltip shows (in milliseconds)-->
      <a materialize="tooltip" (click)="printSomething()" class="btn tooltipped" data-position="bottom" data-delay="10" data-tooltip="I am tooltip">Hover me!</a>

      <!-- toast -->
      <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
    `
})
export class Dialogs {
  printSomething() {
    console.log("tooltip button clicked!");
  }
}
