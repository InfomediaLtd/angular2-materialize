export {MaterializeDirective,MaterializeAction} from "./materialize-directive";
export {MaterializeModule} from "./materialize-module";

if (!("Materialize" in window)) {
  throw new Error("Couldn't find Materialize object on window. It is created by the materialize-css library. Please import materialize-css before importing angular2-materialize.");
}
if (!("Waves" in window)) {
  throw new Error("Couldn't find Waves object on window. It is supposed to be created by the materialize-css library. Please import materialize-css before importing angular2-materialize.");
}

declare var Waves:any;
Waves.displayEffect();

declare var Materialize:any;

export function toast(...args) {
  Materialize.toast(...args);
}
