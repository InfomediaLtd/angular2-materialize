import {MaterializeDirective} from "../../src/index";
import {Component} from "angular2/core"

@Component({
    selector: "sideNav",
    directives: [MaterializeDirective],
    template: `
      <nav>
        <ul id="slide-out" class="side-nav fixed">
          <li><a href="#!">First Sidebar Link</a></li>
          <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        <a materialize="sideNav" href="#" data-activates="slide-out" class="button-collapse show-on-large"><i class="mdi-navigation-menu"></i></a>
      </nav>
    `
})
export class SideNav {}
