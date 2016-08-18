import "materialize-css";

// export {Materialize,MaterializeOptions} from "./materialize";
export {MaterializeDirective} from "./materialize-directive";
export {MaterializeModule} from "./materialize-module";

declare var Waves:any;
Waves.displayEffect();

declare var Materialize:any;

export function toast(...args) {
  Materialize.toast(...args);
}
