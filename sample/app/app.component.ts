
import {Component} from "@angular/core";
import {Location} from '@angular/common';

import "../../src/index";

@Component({
    selector: "app-root",
    styles: [`header, main, footer { padding-left: 260px; }`],
    template: `

        <sideNav></sideNav>

        <main>
          <h3>Angular2 Materialize Examples</h3>
          <br/>
          <router-outlet></router-outlet>
        </main>

    `
}) 
export class AppComponent { }
