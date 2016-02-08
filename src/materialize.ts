import {Directive, ElementRef, Input, AfterViewInit} from 'angular2/core';

// This will only be supported in TS 1.8
// export type MaterializeOptions =
  // "collapsible" |
  // "dropdown" |
  // "materialbox" |
  // "tabs" |
  // "tooltip" |
  // "characterCounter" |
  // "leanModal";

declare var $:any;

@Directive({
    selector: '[materialize]'
})
export class Materialize implements AfterViewInit {

    private _params:[any] = null;
    private _functionName:string = null;

    constructor(private _el: ElementRef) { }

    @Input() set materializeParams(params:any){
      this._params = params;
    }
    @Input() set materialize(functionName:string){
      this._functionName = functionName;
    }

    ngAfterViewInit() {
      if (this._functionName) {
        const jQueryElement = $(this._el.nativeElement);
        if (jQueryElement[this._functionName]) {
          if (this._params) {
            if (this._params instanceof Array) {
              jQueryElement[this._functionName](...this._params);
            } else {
              throw new Error("Params has to be an array.")
            }
          } else {
            jQueryElement[this._functionName]();
          }
        } else {
          throw new Error("Couldn't find materialize function ''" + this._functionName + "' on element.");
        }
      } else {
        throw new Error("No materialize function specified.")
      }
    }

}
