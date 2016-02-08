import {MaterializeDirective} from "../../src/index";
import {Component} from "angular2/core"
import {RouterLink} from "angular2/router"

@Component({
    selector: "sideNav",
    directives: [MaterializeDirective, RouterLink],
    styles: [`
      nav {
          color: #fff;
          background-color: #ee6e73;
          width: 100%;
          height: 56px;
          line-height: 56px;
      }
    `],
    template: `
      <nav>
        <ul id="slide-out" class="side-nav fixed">
          <li><a [routerLink]="['Buttons']">Buttons</a></li>
          <li><a [routerLink]="['Collapsible']">Collapsible</a></li>
          <li><a [routerLink]="['Dialogs']">Dialogs</a></li>
          <li><a [routerLink]="['Dropdown']">Dropdown</a></li>
          <li><a [routerLink]="['Forms']">Forms</a></li>
          <li><a [routerLink]="['Tabs']">Tabs</a></li>
        </ul>
        <a href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu"></i></a>
      </nav>
    `
})
export class SideNav {}
