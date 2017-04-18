import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

declare var Materialize:any;

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
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
}
