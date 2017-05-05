import {MaterializeDirective, MaterializeAction} from "angular2-materialize";
import {Component, EventEmitter} from "@angular/core"

@Component({
    selector: "collapsible",
    template: `
        <a class="waves-effect waves-light btn" (click)="openFirst()">Open First</a>
        <a class="waves-effect waves-light btn" (click)="closeFirst()">Close First</a>
        <br/><br/>
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion" [materializeParams]="params" [materializeActions]="actions1">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header active"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>
        <br/><br/>
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li *ngFor="let value of values">
            <div class="collapsible-header">{{value}}</div>
            <div class="collapsible-body"><p>{{value}}</p></div>
          </li>
        </ul>
    `
})
export class Collapsible {

    actions1 = new EventEmitter<string|MaterializeAction>();


    params = [
      {
        onOpen: (el) => {
          console.log("Collapsible open", el);
        },
        onClose: (el) => {
          console.log("Collapsible close", el);
        }
      }
    ];

    values = ["First", "Second", "Third"];

    openFirst() {
      this.actions1.emit({action:"collapsible",params:['open',0]});
    }

    closeFirst() {
      this.actions1.emit({action:"collapsible",params:['close',0]});
    }
}
