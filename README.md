# Angular2 Materialize

[![travis build](https://img.shields.io/travis/InfomediaLtd/angular2-materialize.svg?style=flat-square)](https://travis-ci.org/InfomediaLtd/angular2-materialize)
[![version](https://img.shields.io/npm/v/angular2-materialize.svg?style=flat-square)](https://www.npmjs.com/package/angular2-materialize)
[![downloads](https://img.shields.io/npm/dm/angular2-materialize.svg?style=flat-square)](https://www.npmjs.com/package/angular2-materialize)
[![MIT Licence](https://img.shields.io/npm/l/angular2-materialize.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[![NPM](https://nodei.co/npm/angular2-materialize.png?downloads=true)](https://www.npmjs.com/package/angular2-materialize)
[![NPM](https://nodei.co/npm-dl/angular2-materialize.png?height=2&months=12)](https://www.npmjs.com/package/angular2-materialize)

Angular 2 support for Materialize CSS framework [http://materializecss.com/](http://materializecss.com/)

This library adds support for the Materialize CSS framework in Angular 2. It is needed to add the dynamic behavior of Materialize CSS that is using JavaScript rather than plain CSS.

View demo here: [http://angular2-materialize.surge.sh](http://angular2-materialize.surge.sh/)

To use the library you need to import it once per project and then use its MaterializeDirective directive for binding it to any component that needs a dynamic behavior, like collapsible panels, tooltips, etc.

#### Using angular2-materialize

Import both materialize-css and angular2-materialize once per project, for example in your main.ts:
```js
import "materialize-css";
import "angular2-materialize";
```

Add the Google MD fonts to your index.html:
```html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Add the MaterializeModule to your NgModule:
```js
import { MaterializeModule } from "../src/index";

@NgModule({
  imports: [
    //...
    MaterializeModule,
  ],
  //...
})
```

In your component, use it for dynamic behavior. For example, for collapsible panels:
```js
@Component({
    selector: "my-component",
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

Apply an empty [MaterializeDirective](https://github.com/InfomediaLtd/angular2-materialize/blob/master/src/materialize-directive.ts) attribute directive for top level components, like forms:
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

The [MaterializeDirective](https://github.com/InfomediaLtd/angular2-materialize/blob/master/src/materialize-directive.ts) attribute directive (**materialize**) accepts any MaterializeCSS initialization call to apply to the element. The list of supported functions are provided by MaterializeCSS. Examples: collapsible, modal, tooltip, dropdown, tabs, material_select, sideNav, etc.

For example, to apply tooltip:
```html
<a materialize="tooltip" class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip">Hover me!</a>
```

The [Materialize](https://github.com/InfomediaLtd/angular2-materialize/blob/master/src/materialize.ts) attribute directive also allows specifying parameters to be passed to the function, but providing a **materializeParams** attribute returning an array of params. Use it with a function call or even by inlining the params in the HTML.

Another useful option is emitting actions on an element. You may want to do that for calling Materialize functions, like closing a modal dialog or triggering a toast. You can do that by setting the **materializeActions** attribute, which accepts an [EventEmitter](https://angular.io/docs/ts/latest/api/core/index/EventEmitter-class.html). The emitted events can either be a "string" type action (Materialize function call) or a structure with action and parameters:

The example below shows how you'd create a modal dialog and use the actions to open or close it.
```html
<!-- Modal Trigger -->
<a class="waves-effect waves-light btn modal-trigger" (click)="openModal()">Modal</a>

<!-- Modal Structure -->
<div id="modal1" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: false}]" [materializeActions]="modalActions">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a class="waves-effect waves-green btn-flat" (click)="closeModal()">Close</a>
    <a class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
```
```js
  import {MaterializeAction} from 'angular2-materialize';
  //...
  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
```

For dynamic select elements apply the **materializeSelectOptions** directive to trigger element updates when the options list changes:
```html
<select materialize="material_select" [materializeSelectOptions]="selectOptions">
  <option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
</select>
```

#### Installing and configuring angular2-materialize with webpack

Install MaterializeCSS and angular2-materialize from npm
```sh
npm install materialize-css --save
npm install angular2-materialize --save
```

MaterializeCSS required jQuery and HammerJS. Check the exact version materialize-css is compatible with:
```sh
npm install jquery@^2.2.4 --save
npm install hammerjs --save
```

Add the Google MD fonts to your index.html:
```html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Import materialize-css styles:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
```

Add the following plugin to your webpack configuration to provide jQuery:
```js
var webpack = require("webpack");
module.exports = {
  //...
  plugins: [
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery",
          "window.jQuery": "jquery",
          Hammer: "hammerjs/hammer"
      })
  ]
  //...
};
```

###### Loading additional resources

Another thing you would need to confirm is being able to load web fonts properly:
```js
{ test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
```
Notice that the url loader is required for this to work.

The following example project is a fork of the angular2-webpack-starter with the addition of angular2-materialize: [InfomediaLtd/angular2-webpack-starter](https://github.com/InfomediaLtd/angular2-webpack-starter)

#### Installing and configuring angular2-materialize with jspm

Install MaterializeCSS and angular2-materialize:
```sh
jspm install npm:materialize-css
jspm install npm:angular2-materialize
```

Add the Google MD fonts to your index.html:
```html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

You may need to add a package configuration to specify the main entry point for MaterializeCSS:
```js
System.config({
  ...
  packages: {
    ...
    "materialize": {
      "main": "dist/js/materialize"
    }
  },
```

#### An example setup with SystemJS (no Webpack nor JSPM)

```html
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
<link type="text/css" rel="stylesheet" href="node_modules/materialize-css/dist/css/materialize.css" media="screen,projection" />
<!-- Import jQuery before materialize.js -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>

System.config({
    defaultJSExtensions: true,
    packages: {
        "materialize-css": {
            "main": "dist/js/materialize"
        }
    },
    map: {
        "materialize-css": "node_modules/materialize-css",
        "angular2-materialize": "node_modules/angular2-materialize"
    }
});
```

#### Installing & configuring angular2-materialize in projects created with angular-cli

Install MaterializeCSS and angular2-materialize from npm
```
npm install materialize-css --save
npm install angular2-materialize --save
```

Jquery is required
```
npm install jquery@^2.2.4 --save
```

add vendor in angular-cli-build.js
```
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      //other vendors
      'jquery/dist/*',
      'angular2-materialize/dist/*',
      'materialize-css/dist/**/*'
    ]
  });
};
```

Add mapping and packages in system-config.ts
```
/** Map relative paths to URLs. */
const map: any = {
   "materialize-css": "vendor/materialize-css",
   "angular2-materialize": "vendor/angular2-materialize",
   "jquery": "vendor/jquery"
};

/** User packages configuration. */
const packages: any = {
  'materialize-css': {
    "format": "global",
    "main": "dist/js/materialize",
    "defaultExtension": "js"
  },
  'angular2-materialize': {
    "main": "dist/index",
    "defaultExtension": "js"
  }
};
```

Import angular2-materialize in main.ts
```
import "angular2-materialize";
```

Add these lines to header of index.html
```
<link type="text/css" rel="stylesheet" href="vendor/materialize-css/dist/css/materialize.css"/>
<script type="text/javascript" src="vendor/jquery/dist/jquery.min.js"></script>
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

The following example project, by [pragdev](https://github.com/pragdev), uses angular-cli with angualr2-materialize: https://github.com/pragdev/angular_example

#### Installing & configuring angular2-materialize in projects created with angular-cli@webpack (1.0.0-beta.26)

Install MaterializeCSS and angular2-materialize from npm
```
npm install materialize-css --save
npm install angular2-materialize --save
```

jQuery 2.2 and Hammer.JS are required
```
npm install jquery@^2.2.4 --save
npm install hammerjs --save
```

Edit the angular-cli.json :
* Go to section apps and find styles array inside it (with only styles.css value by default), add the following line inside array before any styles:
  * ../node_modules/materialize-css/dist/css/materialize.css
* Go to section apps and find scripts array inside it, and add the following lines inside array
  * ../node_modules/jquery/dist/jquery.js
  * ../node_modules/hammerjs/hammer.js
  * ../node_modules/materialize-css/dist/js/materialize.js

Add ```import { MaterializeModule } from 'angular2-materialize';``` to the top of app.module.ts

Add MaterializeModule inside imports array of @NgModule decorator in app.module.ts

Add this line to header of index.html
```
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```
