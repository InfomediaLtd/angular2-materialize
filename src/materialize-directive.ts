import {
  Directive,
  ElementRef,
  Input,
  DoCheck,
  OnChanges,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import {CustomEvent} from "./custom-event-polyfill"

declare var $:any;
declare var Materialize:any;

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
export class MaterializeDirective implements AfterViewInit,DoCheck,OnChanges,OnDestroy {

    private _params:[any] = null;
    private _functionName:string = null;

    private previousValue = null;

    private changeListenerShouldBeAdded = true;

    constructor(private _el: ElementRef) { }

    @Input() set materializeParams(params:any){
      this._params = params;
      this.performElementUpdates();
    }
    @Input() set materialize(functionName:string){
      this._functionName = functionName;
    }

    // this is here to trigger change detection for select elements
    @Input() set materializeSelectOptions(options:any) { }

    public ngAfterViewInit() {
      this.performElementUpdates();
    }

    public ngOnChanges() {
      if (this.isSelect()) {
        setTimeout(() => this.performLocalElementUpdates(), 10);
      }
    }

    public ngOnDestroy() {
      this.performElementRemotion();
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

    private performElementRemotion() {
      if (this.isTooltip()) {
        const nativeElement = this._el.nativeElement;
        const jQueryElement = $(nativeElement);
        const tooltipId = jQueryElement.attr('data-tooltip-id');
        if (tooltipId) {
          $('#' + tooltipId).remove();
        }
      }
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
        jQueryElement.on("change", e => {
          if (!e.originalEvent || !e.originalEvent.internalToMaterialize) {
            const event:any = document.createEvent("CustomEvent");
            event.initCustomEvent("change",false,false,undefined);
            event.internalToMaterialize = true;
            nativeElement.dispatchEvent(event);
          }
        });
        this.changeListenerShouldBeAdded = false;
      }

      if (this.isDatePicker()) {
        const nativeElement = this._el.nativeElement;
        const jQueryElement = $(nativeElement);
        const enablebtns = this.enableDPButtons;

        jQueryElement[this._functionName](...this._params);
        jQueryElement.on("change", e => nativeElement.dispatchEvent(new CustomEvent("input")));
        //jQueryElement.on("change", e => nativeElement.dispatchEvent(new Event("input")));
        // jQueryElement.on("change", e => dispatchEventOnTarget(nativeElement,"input"));

        const datePickerPopUp = jQueryElement.siblings(".picker").first();

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

    private isTooltip(){
      return (this._functionName && this._functionName === "tooltip");
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

/*function dispatchEventOnTarget(target, eventType) {
  let event;
  try {
    event = new Event(eventType);
  } catch (e) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(eventType, true, true);
  }
  target.dispatchEvent(event);
};*/