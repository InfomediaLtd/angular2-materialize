import {MaterializeDirective} from "../../src/index";
import {Component} from "@angular/core"

@Component({
    selector: "dropdown",
    template: `
     <!-- Dropdown Trigger -->
     <a materialize="dropdown" class='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me!</a>
     <!-- Dropdown Structure -->
     <ul id='dropdown1' class='dropdown-content'>
       <li><a>one</a></li>
       <li><a>two</a></li>
       <li class="divider"></li>
       <li><a>three</a></li>
     </ul>
    `
})
export class Dropdown {}
