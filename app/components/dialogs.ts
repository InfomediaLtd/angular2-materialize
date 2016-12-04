import {MaterializeDirective,MaterializeAction} from "../../src/index";
import {Component,EventEmitter} from "@angular/core"

@Component({
    selector: "dialogs",
    template: `
      <!-- Modal Trigger -->
      <a class="waves-effect waves-light btn modal-trigger" (click)="openModal1()">Modal 1</a>
      <a class="waves-effect waves-light btn modal-trigger" (click)="openModal2()">Modal 2</a>
      <button data-target="modal2" class="btn">Modal 2 (2)</button>

      <!-- Modal Structure -->
      <div id="modal1" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: false}]" [materializeActions]="modalActions1">
        <div class="modal-content">
          <h4>Modal Header 1</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a class="waves-effect waves-green btn-flat" (click)="closeModal1()">Close</a>
          <a class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

      <!-- Modal Structure -->
      <div id="modal2" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: false}]" [materializeActions]="modalActions2">
        <div class="modal-content">
          <h4>Modal Header 2</h4>
          <p>A bunch of text</p>
        </div>
        <div class="modal-footer">
          <a class="waves-effect waves-green btn-flat" (click)="closeModal2()">Close</a>
          <a class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>

      <br/><br/>

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
  modalActions1 = new EventEmitter<string|MaterializeAction>();
  modalActions2 = new EventEmitter<string|MaterializeAction>();
  globalActions = new EventEmitter<string|MaterializeAction>();
  params = []
  printSomething() {
    console.log("tooltip button clicked!");
  }
  triggerToast() {
    this.globalActions.emit('toast')
  }
  openModal1() {
    this.modalActions1.emit({action:"modal",params:['open']});
  }
  closeModal1() {
    this.modalActions1.emit({action:"modal",params:['close']});
  }
  openModal2() {
    this.modalActions2.emit({action:"modal",params:['open']});
  }
  closeModal2() {
    this.modalActions2.emit({action:"modal",params:['close']});
  }
}
