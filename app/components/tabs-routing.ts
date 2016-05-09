import {MaterializeDirective} from "../../src/index";
import {Component,OnDestroy} from "@angular/core"
import {Subscription} from "rxjs/subscription";
import {Router, RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {Location} from '@angular/common';

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
    directives: [ROUTER_DIRECTIVES,MaterializeDirective,TabsTest1,TabsTest2,TabsTest3,TabsTest4],
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
@RouteConfig([
  {path: "/test1", component: TabsTest1, name: "TabsTest1", useAsDefault:true},
  {path: "/test2", component: TabsTest2, name: "TabsTest2"},
  {path: "/test3", component: TabsTest3, name: "TabsTest3"},
  {path: "/test4", component: TabsTest4, name: "TabsTest4"}
])
export class TabsRouting implements OnDestroy {

  private tabs = [
    {name:"Test 1",href:"/tabs/test1",route:"TabsTest1"},
    {name:"Test 2",href:"/tabs/test2",route:"TabsTest2"},
    {name:"Test 3",href:"/tabs/test3",route:"TabsTest3", disabled:true},
    {name:"Test 4",href:"/tabs/test4",route:"TabsTest4"}
  ];
  private routerSubscription:Subscription;
  private tabSelectionParams = null;

  constructor(private router:Router, private location:Location) {
    this.routerSubscription = <Subscription>router.parent.subscribe(() => {
      this.updateSelectionParams(router);
    });
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
