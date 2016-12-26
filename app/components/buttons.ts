import {Component} from "@angular/core"
import {Router} from "@angular/router"

// we can do that because it's been imported globally in app.component.ts
declare var Materialize:any;

@Component({
    selector: "buttons",
    styles: [`
      .no-upper-case {
        text-transform: none
      }
    `],
    template: `
        <a class="waves-effect waves-light btn">Stuff</a>
        <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
        <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
        <br/><br/>
        <button class="btn waves-effect waves-light" type="submit" name="action" routerLink="/Chips">Go to Chips
          <i class="material-icons right">send</i>
        </button>
        <br/><br/>
        <button class="btn waves-effect waves-light" type="submit" name="action" (click)="gotoCollapsible()">Go to Collapsible
          <i class="material-icons right">send</i>
        </button>
        <br/>
        <div class="fixed-action-btn horizontal click-to-toggle" style="top: 24px; right: 24px;">
          <a class="btn-floating btn-large red">
            <i class="large mdi-navigation-menu"></i>
          </a>
          <ul>
            <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
            <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
            <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
            <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
          </ul>
        </div>
        <br/>
        <a class="waves-effect waves-light btn no-upper-case" (click)="updateTextFields()">Call Materialize.updateTextFields()</a>
    `
})
export class Buttons {
  constructor(private router:Router) {}
  gotoCollapsible() {
    this.router.navigate(['/Collapsible']);
  }

  updateTextFields() {
    Materialize.updateTextFields();
    console.log("updateTextFields called");
  }
}
