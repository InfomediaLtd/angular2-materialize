export class TabsRouting {}

// todo
/*
import {MaterializeDirective} from "../../src/index";
import {Component,OnDestroy} from "@angular/core"
import {Subscription} from "rxjs/subscription";
import {Location} from '@angular/common';
import { Router, Routes, RouterModule } from '@angular/router';

@Component({selector: "tabs-test1",template: `<div id="test1" class="col s12">Test 1</div>`})
class TabsTest1 {}
@Component({selector: "tabs-test2",template: `<div id="test2" class="col s12">Test 2</div>`})
class TabsTest2 {}
@Component({selector: "tabs-test3",template: `<div id="test3" class="col s12">Test 3</div>`})
class TabsTest3 {}
@Component({selector: "tabs-test4",template: `<div id="test4" class="col s12">Test 4</div>`})
class TabsTest4 {}

@Component({
    selector: "tabs-routing",
    directives: [TabsTest1,TabsTest2,TabsTest3,TabsTest4],
    template: `
        <div class="row">
          <div class="col s12">
            <ul materialize="tabs" [materializeParams]="tabSelectionParams" class="tabs">
              <li class="tab col s3" [class.disabled]="tab.disabled" *ngFor="let tab of tabs">
                <a [href]="'#'+tab.route" (click)="$event.preventDefault();routeTo(tab.route)">{{tab.name}}</a>
              </li>
            </ul>
          </div>
          <br/>
          <router-outlet></router-outlet>
        </div>
    `
})
export class TabsRouting implements OnDestroy {

  private tabs = [
    {name:"Test 1",href:"/TabsRouting/TabsTest1",route:"TabsTest1"},
    {name:"Test 2",href:"/TabsRouting/TabsTest2",route:"TabsTest2"},
    {name:"Test 3",href:"/TabsRouting/TabsTest3",route:"TabsTest3", disabled:true},
    {name:"Test 4",href:"/TabsRouting/TabsTest4",route:"TabsTest4"}
  ];
  private routerSubscription:Subscription;
  private tabSelectionParams = null;

  constructor(private router:Router, private location:Location) {
  }

  routeTo(route) {
    this.router.navigate([route]);
  }

  updateSelectionParams(router) {
    for (var i=0; i<this.tabs.length; i++) {
      const tab = this.tabs[i];
      if (location.href.lastIndexOf(tab.href)==location.href.length-tab.href.length) {
        if (!this.tabSelectionParams || this.tabSelectionParams[0]!=tab.route) {
          // switch the view to select that tab
          this.tabSelectionParams = ['select_tab',tab.route];
        }
      }
    };
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }
}

const routes: Routes = [
  {
    path: 'TabsRouting',
    component: TabsRouting,
    children: [
      { path: 'TabsTest1', component: TabsTest1 },
      { path: 'TabsTest2', component: TabsTest2 },
      { path: 'TabsTest3', component: TabsTest3 },
      { path: 'TabsTest4', component: TabsTest4 }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
*/