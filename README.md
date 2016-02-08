# Angular2 Materialize

[![travis build](https://img.shields.io/travis/InfomediaLtd/angular2-materialize.svg?style=flat-square)](https://travis-ci.org/InfomediaLtd/angular2-materialize)
[![version](https://img.shields.io/npm/v/angular2-materialize.svg?style=flat-square)](https://www.npmjs.com/package/angular2-materialize)
[![downloads](https://img.shields.io/npm/dm/angular2-materialize.svg?style=flat-square)](https://www.npmjs.com/package/angular2-materialize)
[![MIT Licence](https://img.shields.io/npm/l/angular2-materialize.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Angular 2 support for Materialize CSS framework [https://github.com/Dogfalo/materialize](https://github.com/Dogfalo/materialize)

This library adds support for the Materialize CSS framework in Angular 2. It is needed to add the dynamic behavior of Materialize CSS that is using JavaScript rather than plain CSS.

To use the library you need to import it once per project and then use its Materialize directive for binding it to any component that needs a dynamic behavior, like collapsible panels, tooltips, etc.

#### Using angular2-materialize

Import it once per project, for example in your main.ts:
```js
import "angular2-materialize";
```

In your component, use it for dynamic behavior. For example, for collapsible panels:
```js
import {MaterializeDirective} from "angualr2-materialize";

@Component({
    selector: "my-component",
    directives: [MaterializeDirective],
    template: `
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>

```

Apply an empty [Materialize](https://github.com/InfomediaLtd/angular2-materialize/blob/master/src/materialize.ts) attribute directive for top level components, like forms:
```html
<form materialize class="col s12">
  <div class="row">
    <div class="input-field col s6">
      <input placeholder="Placeholder" id="first_name" type="text" class="validate">
      <label for="first_name">First Name</label>
    </div>
  </div>
</form>
```

The [Materialize](https://github.com/InfomediaLtd/angular2-materialize/blob/master/src/materialize.ts) attribute directive (**materialize**) accepts any MaterializeCSS initialization call to apply to the element. The list of supported functions are provided by MaterializeCSS. Examples: collapsible, leanModal, tooltip, dropdown, tabs, material_select, sideNav, etc.

For example, to apply tooltip:
```html
<a materialize="tooltip" class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip">Hover me!</a>
```

The [Materialize](https://github.com/InfomediaLtd/angular2-materialize/blob/master/src/materialize.ts) attribute directive also allows specifying parameters to be passed to the function, but providing a **materializeParams** attribute returning an array of params. Use it with a function call or even by inlining the params in the HTML:
```html
<!-- Modal Trigger -->
<a materialize="leanModal" [materializeParams]="[{dismissible: false}]" class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
<!-- Modal Structure -->
<div id="modal1" class="modal">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
```

#### Installing angular2-materialize with JSPM

Install MaterializeCSS, by providing overrides for its dependencies:
```sh
jspm install materialize=github:Dogfalo/materialize -o "{'main': 'js/materialize','shim': {'js/materialize': {'deps': ['jquery','../css/materialize.css!'],'exports': '$'}},'dependencies': {'jquery': 'github:components/jquery','css': 'github:systemjs/plugin-css'}}"
```

Install angular2-materialize
```sh
jspm install npm:angular2-materialize
```

Add the Google MD fonts to your index.html:
```html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Add a package configuration to specify the main entry point for MaterializeCSS:
```js
System.config({
  ...
  packages: {
    ...
    "materialize": {
      "main": "js/materialize"
    }
  },
```
