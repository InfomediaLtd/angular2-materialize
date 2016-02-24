import {MaterializeDirective} from "../../src/index";
import {Component} from "angular2/core"
//import {Component,OnDestroy} from "angular2/core"
//import {Router,RouteParams} from "angular2/router"
//import {Subscription} from "rxjs/subscription";

@Component({
    selector: "tabs",
    directives: [MaterializeDirective],
    template: `
        <div class="row">
          <div class="col s12">
            <ul materialize="tabs" class="tabs">
              <li class="tab col s3"><a href="#test1">Test 1</a></li>
              <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
              <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
              <li class="tab col s3"><a href="#test4">Test 4</a></li>
            </ul>
            <!--<ul materialize="tabs" [materializeParams]="selectionParams" class="tabs">
              <li class="tab col s3"><a (click)="$event.preventDefault();routeTo('test1')" href="#test1">Test 1</a></li>
              <li class="tab col s3"><a (click)="$event.preventDefault();routeTo('test2')" href="#test2">Test 2</a></li>
              <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
              <li class="tab col s3"><a (click)="$event.preventDefault();routeTo('test4')" href="#test4">Test 4</a></li>
            </ul>-->
          </div>
          <div id="test1" class="col s12">Test 1</div>
          <div id="test2" class="col s12">Test 2</div>
          <div id="test3" class="col s12">Test 3</div>
          <div id="test4" class="col s12">Test 4</div>
        </div>
    `
})
export class Tabs {
//export class Tabs implements OnDestroy {
//  private routerSubscription:Subscription;
//  private selectionParams = null;
//  constructor(private router:Router, private routeParams:RouteParams) {
//    this.updateSelectionParams();
//    this.routerSubscription = <Subscription>router.subscribe(() => {
//      this.updateSelectionParams();
//    });
//  }
//  updateSelectionParams() {
//    const tabName = this.routeParams.get("tabName");
//    if (tabName && (!this.selectionParams || tabName!=this.selectionParams[1])) {
//      this.selectionParams = ['select_tab',tabName];
//    }
//  }
//  routeTo(tabName) {
//    this.router.navigate(["Tabs",{tabName}])
//  }
//  ngOnDestroy() {
//    this.routerSubscription.unsubscribe();
//  }
}
