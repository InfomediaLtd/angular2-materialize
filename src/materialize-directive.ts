import {Directive, ElementRef, Input, DoCheck, AfterViewInit} from 'angular2/core';

declare var $:any;
declare var Materialize:any;

// This will only be supported in TS 1.8
// export type MaterializeOptions =
  // "collapsible" |
  // "dropdown" |
  // "materialbox" |
  // "tabs" |
  // "tooltip" |
  // "characterCounter" |
  // "material_select" |
  // "sideNav" |
  // "leanModal";

@Directive({
    selector: '[materialize]'
})
export class MaterializeDirective implements AfterViewInit,DoCheck {

    private _params:[any] = null;
    private _functionName:string = null;

    private previousValue = null;

    private changeListenerShouldBeAdded = true;

    constructor(private _el: ElementRef) {
    }

    @Input() set materializeParams(params:any){
      this._params = params;
      this.performElementUpdates();
    }
    @Input() set materialize(functionName:string){
      this._functionName = functionName;
    }

    public ngAfterViewInit() {
      this.performElementUpdates();
    }

    public ngDoCheck() {
      const nativeElement = this._el.nativeElement;
      if (this.isSelect() && nativeElement.value!=this.previousValue) {
        // handle select changes of the model
        this.previousValue = nativeElement.value;
        this.performLocalElementUpdates();
      }
      return false;
    }
    
    private performElementUpdates() {
      // it should have been created by now, but confirm anyway
      if (Materialize && Materialize.updateTextFields) {
        Materialize.updateTextFields();
      }
      // handle select changes from the HTML
      if (this.isSelect() && this.changeListenerShouldBeAdded) {
        const nativeElement = this._el.nativeElement;
        const jQueryElement = $(nativeElement);
        jQueryElement.on("change", e => nativeElement.dispatchEvent(new Event("input")));
        this.changeListenerShouldBeAdded = false;
      }
      
      if (this.isDatePicker() && this.changeListenerShouldBeAdded) {
        const nativeElement = this._el.nativeElement;
        const jQueryElement = $(nativeElement);
        const enablebtns = this.enableDPButtons;

        jQueryElement[this._functionName](...this._params);
        
        const datePickerPopUp = jQueryElement.siblings().first();
        
        jQueryElement.on('click', function(){
            datePickerPopUp.addClass('picker--focused picker--opened');

            enablebtns();
            

            //close on side click
            $('.picker__holder').click(function(event){
                if(event.target.className === 'picker__holder'){
                    datePickerPopUp.removeClass('picker--focused picker--opened');
                }
            });
            
            jQueryElement.change(() => {
                setTimeout(function() {
                    enablebtns()     
                }, 10);
            });
            
            $('.picker__select--year').on('change', function(){
                setTimeout(function() {
                    enablebtns();
                }, 10);
            });
            
            $('.picker__select--month').on('change', function(){
                setTimeout(function() {
                    enablebtns();
                }, 10);
            });
            
        });
        
        this.changeListenerShouldBeAdded = false;
      }
      
      this.performLocalElementUpdates();
    }
    private performLocalElementUpdates() {
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
          // fallback to running this function on the global Materialize object
          if (Materialize[this._functionName]) {
            Materialize[this._functionName]();
          } else {
            throw new Error("Couldn't find materialize function ''" + this._functionName + "' on element or the global Materialize object.");
          }
        }
      }
    }

    private isSelect() {
      return (this._functionName && this._functionName === "material_select");
    }

    private isDatePicker() {
      return (this._functionName && this._functionName === "pickadate");
    }
    private enableDPButtons(){
        $('.picker__clear').removeAttr("disabled");
        $('.picker__today').removeAttr("disabled");
        $('.picker__close').removeAttr("disabled");
        $('.picker__select--year').removeAttr("disabled");
        $('.picker__select--month').removeAttr("disabled");
    }
}
