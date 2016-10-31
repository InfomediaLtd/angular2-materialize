import {MaterializeDirective,MaterializeAction} from "../../src/index";
import {Component,EventEmitter} from "@angular/core"

@Component({
    selector: "dialogs",
    template: `
      <!-- Modal Trigger -->
      <a class="waves-effect waves-light btn modal-trigger" (click)="openModal()">Modal</a>

      <!-- Modal Structure -->
      <div id="modal1" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: false}]" [materializeActions]="modalActions">
        <div class="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a class="waves-effect waves-green btn-flat" (click)="closeModal()">Close</a>
          <a class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

      <!-- data-position can be : bottom, top, left, or right -->
      <!-- data-delay controls delay before tooltip shows (in milliseconds)-->
      <a materialize="tooltip" (click)="printSomething()" class="btn tooltipped" data-position="bottom" data-delay="10" data-tooltip="I am tooltip">Hover me!</a>

      <br/><br/>

      <!-- toast -->
      <a class="btn" onclick="Materialize.toast('I am a toast', 4000)">Toast 1!</a>
      <a class="btn" (click)="triggerToast()" materialize [materializeParams]="['I am also a toast',4000]" [materializeActions]="globalActions">Toast 2!</a>
    `
})
export class Dialogs {
  modalActions = new EventEmitter<string|MaterializeAction>();
  globalActions = new EventEmitter<string|MaterializeAction>();
  params = []
  printSomething() {
    console.log("tooltip button clicked!");
  }
  triggerToast() {
    this.globalActions.emit('toast')
  }
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
}
