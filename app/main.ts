import "zone.js";
import 'zone.js/dist/long-stack-trace-zone';
import "reflect-metadata";

import {bootstrap} from "angular2/platform/browser";
import {provide} from "angular2/core";
import {App} from "./app";

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
