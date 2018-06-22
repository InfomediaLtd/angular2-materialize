export {MaterializeDirective,MaterializeAction} from "./materialize-directive";
export {MaterializeModule} from "./materialize-module";

if (!("M" in window)) {
  throw new Error("Couldn't find Materialize object on window. It is created by the materialize-css library. Please import materialize-css before importing angular2-materialize.");
}
if (!("Waves" in window)) {
  throw new Error("Couldn't find Waves object on window. It is supposed to be created by the materialize-css library. Please import materialize-css before importing angular2-materialize.");
}

declare var Waves:any;
Waves.displayEffect();

declare var M:any;

export function toast(...args) {
  M.toast(...args);
}

// polyfill remove any elem in DOM - https://github.com/InfomediaLtd/angular2-materialize/issues/377 (IE)
if (!Element.prototype.remove) {
  Element.prototype.remove = function remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}