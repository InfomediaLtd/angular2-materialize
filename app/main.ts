import "zone.js";
import "reflect-metadata";

import {bootstrap} from "angular2/platform/browser";
import {provide} from "angular2/core";
import {App} from "./app";

import {ROUTER_PROVIDERS} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
