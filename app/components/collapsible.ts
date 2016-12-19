import {MaterializeDirective} from "./../../src/index";
import {Component} from "@angular/core"

@Component({
    selector: "collapsible",
    template: `
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion" [materializeParams]="params">
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
}
