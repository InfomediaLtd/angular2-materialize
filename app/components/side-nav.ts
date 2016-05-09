import {MaterializeDirective} from "../../src/index";
import {Component} from "@angular/core"
import {Router, RouterLink} from "@angular/router-deprecated"
import {Location} from '@angular/common';

@Component({
    selector: "sideNav",
    directives: [MaterializeDirective, RouterLink],
    styles: [`
      nav {
          height: 0px;
      }

      li.active {
        background-color: #ee6e73
      }

    `],
    template: `
      <nav>
        <ul id="slide-out" class="side-nav fixed">
          <li *ngFor="let routeName of routeNames" [class]="isActive(routeName)?'active':''"><a [routerLink]="[routeName]">{{routeName}}</a></li>
        </ul>
        <a materialize="sideNav" [materializeParams]="[{edge:'left'}]" href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu"></i></a>
      </nav>
    `
})
export class SideNav {

  private routeNames = ["Buttons", "Collapsible", "Dialogs", "Dropdown", "Forms", "Tabs", "TabsRouting", "DatePicker", "ModelBindings"];

  constructor(private _location:Location, private _router:Router) {
  }

  public isActive(routeName) {
      return this._router.isRouteActive(this._router.generate([routeName]))
  }

}
