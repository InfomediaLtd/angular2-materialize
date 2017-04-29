import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MaterializeAction} from "angular2-materialize"

declare var Materialize:any;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  tapTargetActions = new EventEmitter<MaterializeAction>();

  constructor(private router:Router) {}

  ngOnInit() {
  }

  gotoCollapsible() {
    this.router.navigate(['/Collapsible']);
  }

  updateTextFields() {
    Materialize.updateTextFields();
    console.log("updateTextFields called");
  }

  openTapTarget() {
    this.tapTargetActions.emit({action:"tapTarget",params:["open"]});
  }
  closeTapTarget() {
    this.tapTargetActions.emit({action:"tapTarget",params:["close"]});
  }
}
