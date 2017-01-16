import {MaterializeDirective} from "../../src/index";
import {Component,OnInit} from "@angular/core"

@Component({
  selector: "parallax",
  template: `
    <div class="parallax-container">
      <div class="parallax" materialize="parallax"><img src="http://materializecss.com/images/parallax1.jpg"></div>
    </div>
    <div class="section white">
      <div class="row container">
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax" materialize="parallax"><img src="http://materializecss.com/images/parallax2.jpg"></div>
    </div>
  `
})
export class Parallax {


}
