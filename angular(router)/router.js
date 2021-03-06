/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
var router_link_1 = require('./src/directives/router_link');
exports.RouterLink = router_link_1.RouterLink;
var router_outlet_1 = require('./src/directives/router_outlet');
exports.RouterOutlet = router_outlet_1.RouterOutlet;
var instruction_1 = require('./src/instruction');
exports.RouteData = instruction_1.RouteData;
exports.RouteParams = instruction_1.RouteParams;
var route_registry_1 = require('./src/route_registry');
exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
exports.RouteRegistry = route_registry_1.RouteRegistry;
var router_1 = require('./src/router');
exports.RootRouter = router_1.RootRouter;
exports.Router = router_1.Router;
__export(require('./src/route_config/route_config_decorator'));
var lifecycle_annotations_1 = require('./src/lifecycle/lifecycle_annotations');
exports.CanActivate = lifecycle_annotations_1.CanActivate;
var instruction_2 = require('./src/instruction');
exports.Instruction = instruction_2.Instruction;
exports.ComponentInstruction = instruction_2.ComponentInstruction;
var core_1 = require('@angular/core');
exports.OpaqueToken = core_1.OpaqueToken;
var router_providers_common_1 = require('./src/router_providers_common');
exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
var router_providers_1 = require('./src/router_providers');
exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
var router_outlet_2 = require('./src/directives/router_outlet');
var router_link_2 = require('./src/directives/router_link');
/**
 * A list of directives. To use the router directives like {@link RouterOutlet} and
 * {@link RouterLink}, add this to your `directives` array in the {@link Component} decorator
 * of your component.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from '@angular/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from '@angular/router-deprecated';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *    // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
exports.ROUTER_DIRECTIVES = [router_outlet_2.RouterOutlet, router_link_2.RouterLink];
//# sourceMappingURL=router.js.map