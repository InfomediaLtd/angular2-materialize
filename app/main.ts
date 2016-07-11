import "zone.js";
import "reflect-metadata";
import "es6-shim";

import {bootstrap} from "@angular/platform-browser-dynamic";
import {provide} from "@angular/core";
import {App} from "./app";

import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
