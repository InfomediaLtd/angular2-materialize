import {Component} from "@angular/core"

@Component({
    selector: "buttons",
    template: `
        <a class="waves-effect waves-light btn">Stuff</a>
        <a class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>button</a>
        <a class="waves-effect waves-light btn"><i class="material-icons right">cloud</i>button</a>
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
    `
})
export class Buttons {}
