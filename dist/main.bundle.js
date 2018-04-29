webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar > mat-toolbar-row:first-child {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nmat-toolbar > mat-toolbar-row:first-child > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\nmat-toolbar > mat-toolbar-row:first-child > div:nth-child(2) {\n  text-align: center;\n}\n\nmat-toolbar > mat-toolbar-row:first-child > div:nth-child(3) {\n  text-align: right;\n}\n\n.toolbar-logo {\n  width: 65px;\n}\n\nnav.mat-tab-nav-bar {\n  width: 100%;\n}\n\n::ng-deep .mat-tab-links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.mat-tab-link {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div></div>\n    <div>\n      <img class=\"toolbar-logo\" src=\"assets/images/icon.png\" alt=\"G-Drive Sorter Logo\">\n    </div>\n    <div>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"signOut()\">Sign Out</button>\n      </mat-menu>\n      <button *ngIf=\"authenticated\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button *ngIf=\"!authenticated\" mat-button (click)=\"signIn()\">\n        Sign In\n      </button>\n    </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"authenticated\">\n    <nav mat-tab-nav-bar color=\"accent\">\n      <a mat-tab-link\n         *ngFor=\"let link of tabLinks\"\n         [routerLink]=\"link.path\"\n         routerLinkActive #rla=\"routerLinkActive\"\n         [active]=\"rlaSafe&&rla.isActive\">\n        {{ link.label }}\n      </a>\n    </nav>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div [@routerTransition]=\"getRouteAnimation(route)\">\n  <router-outlet #route=\"outlet\"></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("./src/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Base application component.
 *
 * @export
 * @class AppComponent
 * @implements {AfterViewInit}
 */
var AppComponent = /** @class */ (function () {
    /**
     * Creates an instance of AppComponent.
     * @param {GoogleService} google Declare the Google Service as google
     * @param {Router} router Declare the Router as router
     * @param {NgZone} zone  Declare NgZone as zon
     * @memberof AppComponent
     */
    function AppComponent(google, router, zone) {
        var _this = this;
        this.google = google;
        this.router = router;
        this.zone = zone;
        /**
         * Checks if the view has initalized yet.
         *
         * @public
         * @type {boolean}
         * @memberof AppComponent
         */
        this.rlaSafe = false;
        /**
         * An array of links thats translated into tabs.
         *
         * @memberof AppComponent
         */
        this.tabLinks = [
            {
                path: 'app/home',
                label: 'Home'
            },
            {
                path: 'app/config',
                label: 'Configuration'
            },
            {
                path: 'app/settings',
                label: 'Settings'
            }
        ];
        var googleInitInterval = setInterval(function () {
            if (window['gapi']) {
                _this.google.init({
                    apiKey: 'AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM',
                    clientId: '362606538820-om1dhhvv5d9npas7jj02mbtvi5mjksmo.apps.googleusercontent.com',
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                    scope: 'https://www.googleapis.com/auth/drive'
                }, function () {
                    console.debug('Google initalized.');
                });
                _this.google.authState$.subscribe(function (state) {
                    _this.authenticated = state;
                    if (state) {
                        _this.zone.run(function () {
                            _this.router.navigate(['/app/home']);
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            _this.router.navigate(['/']);
                        });
                    }
                });
                clearInterval(googleInitInterval);
            }
        }, 250);
    }
    /**
     * Called after the view is initalized.
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.ngAfterViewInit = function () {
        this.rlaSafe = true;
    };
    /**
     * Signs the user out.
     *
     * @memberof AppComponent
     */
    AppComponent.prototype.signOut = function () {
        this.google.signOut();
    };
    AppComponent.prototype.signIn = function () {
        this.google.signIn();
    };
    /**
     * Gets the current route information.
     *
     * @param {any} outlet The route
     * @returns
     * @memberof AppComponent
     */
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.name;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_google_google_service__["a" /* GoogleService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_google_google_service__["a" /* GoogleService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_authenticated_authenticated_module__ = __webpack_require__("./src/app/modules/authenticated/authenticated.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_guard_service__ = __webpack_require__("./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_config_config_module__ = __webpack_require__("./src/app/modules/config/config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment_prod__ = __webpack_require__("./src/environments/environment.prod.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_parallax__ = __webpack_require__("./node_modules/ngx-parallax/dist/bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_parallax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ngx_parallax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_auth_unauthenticated_unauthenticated_component__ = __webpack_require__("./src/app/components/auth/unauthenticated/unauthenticated.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_auth_unauthenticated_unauthenticated_component__["a" /* UnauthenticatedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_parallax__["ParallaxModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["q" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_9__modules_config_config_module__["a" /* ConfigModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__modules_authenticated_authenticated_module__["a" /* AuthenticatedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_10__environments_environment_prod__["a" /* environment */].firebase),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__services_google_google_service__["a" /* GoogleService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_guard_service__["b" /* PreventAuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__ = __webpack_require__("./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tabs_home_home_component__ = __webpack_require__("./src/app/components/tabs/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_tabs_config_config_component__ = __webpack_require__("./src/app/components/tabs/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabs_settings_settings_component__ = __webpack_require__("./src/app/components/tabs/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_new_rule_page_new_rule_page_component__ = __webpack_require__("./src/app/components/shared/new-rule-page/new-rule-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_unauthenticated_unauthenticated_component__ = __webpack_require__("./src/app/components/auth/unauthenticated/unauthenticated.component.ts");
// Authguard imports

// Componet imports





var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__components_auth_unauthenticated_unauthenticated_component__["a" /* UnauthenticatedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["b" /* PreventAuthGuardService */]],
        data: {
            name: 'landing'
        }
    },
    {
        path: 'app/home',
        component: __WEBPACK_IMPORTED_MODULE_1__components_tabs_home_home_component__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            name: 'appHome'
        }
    },
    {
        path: 'app/config',
        component: __WEBPACK_IMPORTED_MODULE_2__components_tabs_config_config_component__["a" /* ConfigComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            name: 'appConfig'
        }
    },
    {
        path: 'app/settings',
        component: __WEBPACK_IMPORTED_MODULE_3__components_tabs_settings_settings_component__["a" /* SettingsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            name: 'appSettings'
        }
    },
    {
        path: 'app/config/create',
        component: __WEBPACK_IMPORTED_MODULE_4__components_shared_new_rule_page_new_rule_page_component__["a" /* NewRulePageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            name: 'appConfigCreate'
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];


/***/ }),

/***/ "./src/app/classes/config-builder.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigBuilder; });
var ConfigBuilder = /** @class */ (function () {
    function ConfigBuilder() {
    }
    ConfigBuilder.generateNewConfig = function (configName, firstGroupName, firstGroupRule) {
        var configHolder = {
            groups: {}
        };
        configHolder['name'] = configName;
        configHolder['groups'][firstGroupName] = [firstGroupRule];
        return configHolder;
    };
    return ConfigBuilder;
}());



/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.html":
/***/ (function(module, exports) {

module.exports = "<div parallax>\n  <div class=\"parallax-overlay\">\n    <h1>G-Drive Sorter</h1>\n    <h3>An organized Google Drive™ has never been easier</h3>\n    <button (click)=\"login()\" mat-raised-button color=\"accent\">Get Organized</button>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"usage-points row\">\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">view_list</i></h1>\n      <h2 class=\"center\"><b>Effectively Sort Files</b></h2>\n      <p>Sorting your drive only requires a quick visit to this website. And we do the rest of the work for you!</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">accessibility</i></h1>\n      <h2 class=\"center\"><b>Simplistic Use</b></h2>\n      <p>Preset configurations and a simplistic user interface makes the G-Drive sorter suitable for all Google Drive users.</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">art_track</i></h1>\n      <h2 class=\"center\"><b>Fully Customizable</b></h2>\n      <p>Fully customizable configurations that sorts all Google Drive files based on type, creation date, name, current owner, and much more.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.scss":
/***/ (function(module, exports) {

module.exports = "*[parallax] {\n  width: 100%;\n  height: 400px;\n  background-image: url('messy_files.f58855ea9a96d7ba73ad.jpg');\n  background-size: 100%; }\n\n.usage-points h1 i {\n  font-size: 80px; }\n\n.container {\n  width: 96%;\n  max-width: unset; }\n\n.usage-points p {\n  font-size: 1.5rem; }\n\n.parallax-overlay {\n  text-align: center;\n  padding-top: 90px; }\n\n.parallax-overlay > * {\n  color: white; }\n\n@media all and (max-width: 650px) {\n  *[parallax] {\n    background-size: cover; } }\n"

/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthenticatedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Declare the component to be shown when the user isn't authenticated.
 *
 * @export
 * @class UnauthenticatedComponent
 */
var UnauthenticatedComponent = /** @class */ (function () {
    /**
     * Creates an instance of UnauthenticatedComponent.
     * @param {GoogleService} google Declare the Google Service as google.
     * @memberof UnauthenticatedComponent
     */
    function UnauthenticatedComponent(google) {
        this.google = google;
    }
    /**
     * Method to log the user in.
     *
     * @memberof UnauthenticatedComponent
     */
    UnauthenticatedComponent.prototype.login = function () {
        this.google.signIn();
    };
    UnauthenticatedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unauthenticated',
            template: __webpack_require__("./src/app/components/auth/unauthenticated/unauthenticated.component.html"),
            styles: [__webpack_require__("./src/app/components/auth/unauthenticated/unauthenticated.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_google_google_service__["a" /* GoogleService */]])
    ], UnauthenticatedComponent);
    return UnauthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.container]=\"isPage\">\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Create New Config</h3>\n  <h3 *ngIf=\"isPage\">Create New Config</h3>\n  <div mat-dialog-content>\n    <form [formGroup]=\"newConfig\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Config Name\n            </mat-panel-title>\n            <mat-panel-description>\n              The name of the new configuration.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Name</mat-label>\n              <input matInput formControlName=\"newConfigNameControl\" required>\n              <mat-error>Please a config name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [expanded]=\"step === 1\" [disabled]=\"!checkValidation(0)\" (opened)=\"setStep(1)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Name\n            </mat-panel-title>\n            <mat-panel-description>\n              The new configuration's inital group name.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Group Name</mat-label>\n              <input matInput formControlName=\"newGroupNameControl\" required>\n              <mat-error>Please enter a inital group name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [class.overflow-limit]=\"!isPage\" [disabled]=\"!checkValidation(1)\" [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              First Rule\n            </mat-panel-title>\n            <mat-panel-description>\n              The new configuration's inital group's first rule.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-new-rule-stepper (valueChange)=\"stepperFinished($event)\" ></app-new-rule-stepper>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </form>\n    <br>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"create()\" [disabled]=\"!finished\">Create</button>\n    <button mat-button (click)=\"close()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".overflow-limit {\n  max-height: 40vh;\n  overflow-y: auto; }\n"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_config_builder__ = __webpack_require__("./src/app/classes/config-builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigModalComponent = /** @class */ (function () {
    function ConfigModalComponent(zone, router, formBuilder, firebase, firebaseAuth) {
        this.zone = zone;
        this.router = router;
        this.formBuilder = formBuilder;
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this.isPage = false;
        this.step = -1;
        this.finished = false;
        this._closeCommand = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.closeCommand = this._closeCommand.asObservable();
    }
    ConfigModalComponent.prototype.ngOnInit = function () {
        this.newConfig = this.formBuilder.group({
            floatLabel: 'auto',
            newConfigNameControl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required],
            newGroupNameControl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required],
        });
    };
    ConfigModalComponent.prototype.checkValidation = function (stepNumber) {
        switch (stepNumber) {
            case 0:
                return this.newConfig.get('newConfigNameControl').valid;
            case 1:
                return this.newConfig.get('newGroupNameControl').valid;
            case 2:
                return ((this.rule === undefined) ? false : true);
            default:
                return false;
        }
    };
    ConfigModalComponent.prototype.checkAllValidation = function () {
        var anyInvalid = false;
        for (var i = 0; i < 2; i++) {
            if (!this.checkValidation(i)) {
                anyInvalid = true;
            }
        }
        return !anyInvalid;
    };
    ConfigModalComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ConfigModalComponent.prototype.nextStep = function () {
        if (this.checkValidation(this.step)) {
            this.step++;
        }
    };
    ConfigModalComponent.prototype.prevStep = function () {
        this.step--;
    };
    ConfigModalComponent.prototype.stepperFinished = function (rule) {
        this.rule = rule;
        this.setStep(-1);
        this.finished = this.checkAllValidation();
    };
    ConfigModalComponent.prototype.create = function () {
        if (this.checkAllValidation()) {
            var userID = this.firebaseAuth.auth.currentUser.uid;
            var newConfig = __WEBPACK_IMPORTED_MODULE_3__classes_config_builder__["a" /* ConfigBuilder */].generateNewConfig(this.newConfig.get('newConfigNameControl').value, this.newConfig.get('newGroupNameControl').value, this.rule);
            this
                .firebase
                .doc("users/" + userID)
                .collection('configs')
                .add(newConfig);
        }
        else {
            this.finished = false;
        }
    };
    ConfigModalComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    ConfigModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-config-modal',
            template: __webpack_require__("./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/config-modal/config-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ConfigModalComponent);
    return ConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/new-rule-page/new-rule-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRulePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_modal_config_modal_component__ = __webpack_require__("./src/app/components/shared/config-modal/config-modal.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NewRulePageComponent = /** @class */ (function (_super) {
    __extends(NewRulePageComponent, _super);
    function NewRulePageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPage = true;
        return _this;
    }
    NewRulePageComponent.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    NewRulePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-rule-page',
            template: __webpack_require__("./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/config-modal/config-modal.component.scss")]
        })
    ], NewRulePageComponent);
    return NewRulePageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__config_modal_config_modal_component__["a" /* ConfigModalComponent */]));



/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper (selectionChange)=\"stepChanged($event)\" linear>\n  <mat-step label=\"Classifier\" [stepControl]=\"classifierFormGroup\">\n    <form [formGroup]=\"classifierFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Classifier\" formControlName=\"classifierControl\" [(value)]=\"classifierSelectOption\">\n          <mat-option *ngFor=\"let classifier of classifiers\" [value]=\"classifier.value\">\n            {{ classifier.label }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Constraint\" [stepControl]=\"constraintFormGroup\">\n    <form [formGroup]=\"constraintFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Constraint\" formControlName=\"constraintControl\" [(value)]=\"constraintSelectOption\">\n          <mat-option *ngFor=\"let constraint of constriants\" [value]=\"constraint.value\">\n            {{ constraint.label }}\n          </mat-option>\n          <mat-option [disabled]=\"startEndWithDisabled\" value=\"startWith\">\n            Start's With\n          </mat-option>\n          <mat-option [disabled]=\"startEndWithDisabled\" value=\"endWith\">\n            End's With\n          </mat-option>\n          <mat-option [disabled]=\"betweenConstraintDisabled\" value=\"between\">\n            Between\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Input\" [stepControl]=\"inputFieldGroup\">\n    <form [formGroup]=\"inputFieldGroup\">\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"4px\">\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'title'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Title Text\" formControlName=\"titleTextControl\" [required]=\"classifierSelectOption === 'title'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'owner'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Owner Name\" formControlName=\"ownerTextControl\" [required]=\"classifierSelectOption === 'owner'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'type'\">\n          <mat-form-field>\n            <mat-select placeholder=\"Drive File Type\" formControlName=\"fileTypeControl\" [required]=\"classifierSelectOption === 'type'\">\n              <mat-option *ngFor=\"let fileType of driveFileTypes\" [value]=\"fileType.value\">\n                {{ fileType.label }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"datePickerSingleNeeded() === 1\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"datePicker\" placeholder=\"Date\" formControlName=\"dateControl\" [required]=\"datePickerSingleNeeded() === 1\">\n            <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #datePicker startView=\"month\"></mat-datepicker>\n          </mat-form-field>          \n        </mat-grid-tile>\n        <div *ngIf=\"datePickerSingleNeeded() === 2\">\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenFirst\" formControlName=\"firstDateControl\" placeholder=\"Starting Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenFirst\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenFirst startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenSecond\" formControlName=\"secondDateControl\" placeholder=\"Ending Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenSecond\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenSecond startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n        </div>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'location'\">\n          <mat-form-field style=\"width: 100%;\">\n            <input matInput type=\"text\" placeholder=\"Location\" formControlName=\"folderLocationControl\" disabled [required]=\"classifierSelectOption === 'location'\"/>\n            <button mat-button matSuffix mat-icon-button aria-label=\"Pick Folder\" (click)=\"openFolderPicker()\">\n              <mat-icon>folder</mat-icon>\n            </button>\n          </mat-form-field>  \n        </mat-grid-tile>\n      </mat-grid-list>\n      <div>\n        <button mat-button type=\"button\" (click)=\"finished()\">Done</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n</mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRuleStepperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DEFAULT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NewRuleStepperComponent; }),
    multi: true
};
var NewRuleStepperComponent = /** @class */ (function () {
    function NewRuleStepperComponent(formBuilder, zone, router, google) {
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.router = router;
        this.google = google;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.betweenConstraintDisabled = false;
        this.startEndWithDisabled = false;
        this.constriants = [
            {
                label: 'Include\'s',
                value: 'include'
            },
            {
                label: 'Exclude\'s',
                value: 'exclude'
            }
        ];
        this.classifiers = [
            {
                label: 'Title',
                value: 'title',
                inputFieldControl: 'titleTextControl',
                hideBetween: true,
                hideStartEnd: false
            },
            {
                label: 'Type',
                value: 'type',
                inputFieldControl: 'fileTypeControl',
                hideBetween: true,
                hideStartEnd: true
            },
            {
                label: 'Location',
                value: 'location',
                inputFieldControl: 'folderLocationControl',
                hideBetween: true,
                hideStartEnd: true
            },
            {
                label: 'Owner',
                value: 'owner',
                inputFieldControl: 'ownerTextControl',
                hideBetween: true,
                hideStartEnd: false
            },
            {
                label: 'Creation Date',
                value: 'creationDate',
                inputFieldControl: 'dateControl',
                hideBetween: false,
                hideStartEnd: true
            },
            {
                label: 'Last Opened',
                value: 'lastOpened',
                inputFieldControl: 'dateControl',
                hideBetween: false,
                hideStartEnd: true
            },
            {
                label: 'Last Modified',
                value: 'lastModified',
                inputFieldControl: 'dateControl',
                hideBetween: false,
                hideStartEnd: true
            }
        ];
        this.driveFileTypes = [
            {
                label: 'Sound File',
                value: 'application/vnd.google-apps.audio'
            },
            {
                label: 'Document',
                value: 'application/vnd.google-apps.document'
            },
            {
                label: 'Drawing',
                value: 'application/vnd.google-apps.drawing'
            },
            {
                label: 'Drive File',
                value: 'application/vnd.google-apps.file'
            },
            {
                label: 'Drive Folder',
                value: 'application/vnd.google-apps.folder'
            },
            {
                label: 'Forms',
                value: 'application/vnd.google-apps.form'
            },
            {
                label: 'Fusion Tables',
                value: 'application/vnd.google-apps.fusiontable'
            },
            {
                label: 'My Maps',
                value: 'application/vnd.google-apps.map'
            },
            {
                label: 'Image',
                value: 'application/vnd.google-apps.photo'
            },
            {
                label: 'Slide\'s',
                value: 'application/vnd.google-apps.presentation'
            },
            {
                label: 'App\'s Script',
                value: 'application/vnd.google-apps.script'
            },
            {
                label: 'Site\'s',
                value: 'application/vnd.google-apps.site'
            },
            {
                label: 'Sheet\'s',
                value: 'application/vnd.google-apps.spreadsheet'
            },
            {
                label: 'Video',
                value: 'application/vnd.google-apps.video'
            },
        ];
    }
    NewRuleStepperComponent.prototype.valueArrayToObject = function (array) {
        var searchableObject = {};
        array.forEach(function (value) {
            searchableObject[value['value']] = value;
        });
        return searchableObject;
    };
    NewRuleStepperComponent.prototype.checkIfBetweenDisabled = function (classifierValue) {
        return this
            .valueArrayToObject(this.classifiers)[classifierValue]
            .hideBetween;
    };
    NewRuleStepperComponent.prototype.checkIfStartEndDisabled = function (classifierValue) {
        return this
            .valueArrayToObject(this.classifiers)[classifierValue]
            .hideStartEnd;
    };
    NewRuleStepperComponent.prototype.getFieldControl = function (classifierValue) {
        return this
            .valueArrayToObject(this.classifiers)[classifierValue]
            .inputFieldControl;
    };
    NewRuleStepperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classifierFormGroup = this.formBuilder.group({
            classifierControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.constraintFormGroup = this.formBuilder.group({
            constraintControl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
        this.inputFieldGroup = this.formBuilder.group({
            folderLocationControl: [{
                    value: null,
                    disabled: true
                }],
            secondDateControl: null,
            firstDateControl: null,
            titleTextControl: null,
            ownerTextControl: null,
            fileTypeControl: null,
            dateControl: null
        });
        this.google.folderPicked$.subscribe(function (folder) {
            _this.pickedFolder = folder.id;
            _this.inputFieldGroup.get('folderLocationControl').setValue(folder.name);
        });
    };
    NewRuleStepperComponent.prototype.finished = function () {
        var data = {};
        switch (this.getFieldControl(this.classifierSelectOption)) {
            case 'titleTextControl':
                data['title'] = this.inputFieldGroup.get('titleTextControl').value;
                break;
            case 'fileTypeControl':
                data['fileType'] = this.inputFieldGroup.get('fileTypeControl').value;
                break;
            case 'folderLocationControl':
                data['folder'] = this.pickedFolder;
                break;
            case 'ownerTextControl':
                data['owner'] = this.inputFieldGroup.get('ownerTextControl').value;
                break;
            case 'dateControl':
                if (this.constraintSelectOption === 'between') {
                    data['firstDate'] = this.inputFieldGroup.get('firstDateControl').value;
                    data['secondDate'] = this.inputFieldGroup.get('secondDateControl').value;
                }
                else {
                    data['date'] = this.inputFieldGroup.get('dateControl').value;
                }
                break;
        }
        var val = {
            classifier: this.classifierFormGroup.get('classifierControl').value,
            constraint: this.constraintFormGroup.get('constraintControl').value,
            data: data
        };
        this.value = val;
        this.valueChange.emit(this.value);
    };
    /*
      Datepicker Need Codes:
        0 - No picker needed
        1 - Single picker needed
        2 - Double picker needed
    */
    NewRuleStepperComponent.prototype.datePickerSingleNeeded = function () {
        var classifierVal = this.classifierSelectOption;
        var constraintVal = this.constraintSelectOption;
        if (classifierVal === 'creationDate' ||
            classifierVal === 'lastOpened' ||
            classifierVal === 'lastModified') {
            if (constraintVal !== 'between') {
                return 1;
            }
            else {
                return 2;
            }
        }
        return 0;
    };
    NewRuleStepperComponent.prototype.stepChanged = function (event) {
        if (event.previouslySelectedIndex === 0) {
            var classifierValue = this.classifierFormGroup.get('classifierControl').value;
            this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
            this.startEndWithDisabled = this.checkIfStartEndDisabled(classifierValue);
            if (this.betweenConstraintDisabled) {
                this.constraintFormGroup.get('constraintControl').setValue('include');
            }
        }
    };
    NewRuleStepperComponent.prototype.openFolderPicker = function () {
        this.google.openFilePicker();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "valueChange", void 0);
    NewRuleStepperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-rule-stepper',
            template: __webpack_require__("./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss")],
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_google_google_service__["a" /* GoogleService */]])
    ], NewRuleStepperComponent);
    return NewRuleStepperComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Configurations</h2>\n\n<div [hidden]=\"noConfigs\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let config\"> {{config.name}} </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: tableColumns;\"></mat-row>\n  </mat-table>\n  \n  <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n<p *ngIf=\"noConfigs\">You have no configurations try creating one!</p>"

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigListComponent; });
/* unused harmony export ConfigDataSource */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfigListComponent = /** @class */ (function () {
    function ConfigListComponent(firebase, firebaseAuth) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this.oldPageSize = 10;
        this.tableColumns = ['name'];
        this.userID = firebaseAuth.auth.currentUser.uid;
        this.configCollection = firebase.doc("users/" + this.userID).collection('configs');
    }
    ConfigListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new ConfigDataSource(this.configCollection, this.paginator);
        this.dataSource.numberConfigs(function (numConfigs) {
            if (numConfigs === 0) {
                _this.noConfigs = true;
            }
        });
    };
    ConfigListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.paginator.page.subscribe(function () {
            if (_this.oldPageSize == _this.paginator.pageSize) {
                _this.dataSource.loadConfigs(_this.paginator.pageIndex, _this.paginator.pageSize);
            }
            else {
                _this.dataSource.loadConfigs(0, _this.paginator.pageSize);
                _this.oldPageSize = _this.paginator.pageSize;
                _this.paginator.pageIndex = 0;
            }
        });
        this.dataSource.loadConfigs();
        this.dataSource.numberConfigs(function (numConfigs) {
            _this.paginator.length = numConfigs;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginator */])
    ], ConfigListComponent.prototype, "paginator", void 0);
    ConfigListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-config-list',
            template: __webpack_require__("./src/app/components/tabs/config/config-list/config-list.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/config/config-list/config-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ConfigListComponent);
    return ConfigListComponent;
}());

var ConfigDataSource = /** @class */ (function () {
    function ConfigDataSource(configCollection, paginator) {
        this.configCollection = configCollection;
        this.paginator = paginator;
        this.configSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    ConfigDataSource.prototype.connect = function () {
        return this.configSubject.asObservable();
    };
    ConfigDataSource.prototype.disconnect = function () {
        return this.configSubject.complete();
    };
    ConfigDataSource.prototype.calculateStart = function (page, pageSize) {
        return (page ? page * pageSize : 0);
    };
    ConfigDataSource.prototype.loadConfigs = function (page, pageSize) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        this
            .configCollection
            .ref
            .orderBy('name')
            .startAt(this.calculateStart(page, pageSize))
            .limit(pageSize)
            .get()
            .then(function (snapshot) {
            var configs = snapshot.docs;
            var data = [];
            for (var config in configs) {
                var name_1 = configs[config].data()['name'];
                data.push({
                    name: name_1,
                    key: configs[config].id
                });
            }
            _this.configSubject.next(data);
        }, function (err) { return console.error; });
    };
    ConfigDataSource.prototype.numberConfigs = function (cb) {
        this
            .configCollection
            .ref
            .get()
            .then(function (snapshot) {
            cb(snapshot.docs.length);
        });
    };
    return ConfigDataSource;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-config-list></app-config-list>\n</div>\n<button class=\"new-config-button\" matTooltip=\"Create Config\" matTooltipPosition=\"left\" mat-fab color=\"accent\" (click)=\"openNewConfigDialog()\">\n    <mat-icon aria-label=\"Create new config button.\">add</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/components/tabs/config/config.component.scss":
/***/ (function(module, exports) {

module.exports = ".new-config-button {\n  right: 20px;\n  bottom: 20px;\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/components/tabs/config/config.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_config_modal_config_modal_component__ = __webpack_require__("./src/app/components/shared/config-modal/config-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Declare component to be shown when the config tab is selected.
 *
 * @export
 * @class ConfigComponent
 * @implements {OnInit}
 */
var ConfigComponent = /** @class */ (function () {
    /**
     * Creates an instance of ConfigComponent.
     * @memberof ConfigComponent
     */
    function ConfigComponent(dialog, router, zone) {
        this.dialog = dialog;
        this.router = router;
        this.zone = zone;
    }
    /**
     * Handle component initalization
     *
     * @memberof ConfigComponent
     */
    ConfigComponent.prototype.ngOnInit = function () {
    };
    ConfigComponent.prototype.getDialogWidth = function () {
        var width = document.body.clientWidth;
        if (width >= 1280) {
            return (width / 2);
        }
        else if (width >= 640) {
            return (width / 1.5);
        }
        else {
            return 0;
        }
    };
    ConfigComponent.prototype.openNewConfigDialog = function () {
        var _this = this;
        var dialogWidth = this.getDialogWidth();
        if (dialogWidth) {
            var dialogInstance_1 = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__shared_config_modal_config_modal_component__["a" /* ConfigModalComponent */], {
                width: this.getDialogWidth() + "px",
                maxHeight: document.body.clientHeight * .9 + "px"
            });
            dialogInstance_1.componentInstance.closeCommand.subscribe(function (close) {
                dialogInstance_1.close();
            });
        }
        else {
            this.zone.run(function () {
                _this.router.navigate(['/app/config/create']);
            });
        }
    };
    ConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-config',
            template: __webpack_require__("./src/app/components/tabs/config/config.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/config/config.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/tabs/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Declare a component to be shown when the home tab is selected.
 *
 * @export
 * @class HomeComponent
 * @implements {OnInit}
 */
var HomeComponent = /** @class */ (function () {
    /**
     * Creates an instance of HomeComponent.
     * @memberof HomeComponent
     */
    function HomeComponent() {
    }
    /**
     * Handle component initalization
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/tabs/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"center\">\n            <button mat-raised-button color=\"warn\" class=\"buttons\" (click)=\"deleteAccount()\">Delete Account</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ".buttons {\n  font-size: 25px;\n  margin: 20px; }\n"

/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Declare the component to be shown when the settings tab is selected.
 *
 * @export
 * @class SettingsComponent
 */
var SettingsComponent = /** @class */ (function () {
    /**
     * Creates an instance of SettingsComponent.
     * @memberof SettingsComponent
     */
    function SettingsComponent(firebase, firebaseAuth, google) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this.google = google;
    }
    SettingsComponent.prototype.deleteAccount = function () {
        var _this = this;
        this
            .firebaseAuth
            .auth
            .currentUser
            .delete()
            .then(function () {
            _this.google.signOut();
        }, function (err) { return console.error; });
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/components/tabs/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/settings/settings.component.scss"), __webpack_require__("./src/simple-grid.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__services_google_google_service__["a" /* GoogleService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/authenticated/authenticated.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticatedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tabs_config_config_component__ = __webpack_require__("./src/app/components/tabs/config/config.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_config_module__ = __webpack_require__("./src/app/modules/config/config.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tabs_home_home_component__ = __webpack_require__("./src/app/components/tabs/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabs_settings_settings_component__ = __webpack_require__("./src/app/components/tabs/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








/**
 * Handles all authenticated components
 *
 * @export
 * @class AuthenticatedModule
 */
var AuthenticatedModule = /** @class */ (function () {
    function AuthenticatedModule() {
    }
    AuthenticatedModule_1 = AuthenticatedModule;
    /**
     * Register with the root module of the app
     *
     * @static
     * @returns {ModuleWithProviders} This module
     * @memberof AuthenticatedModule
     */
    AuthenticatedModule.forRoot = function () {
        return {
            ngModule: AuthenticatedModule_1,
            providers: []
        };
    };
    AuthenticatedModule = AuthenticatedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__components_tabs_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_tabs_config_config_component__["a" /* ConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabs_settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__config_config_module__["a" /* ConfigModule */].forRoot()
            ]
        })
    ], AuthenticatedModule);
    return AuthenticatedModule;
    var AuthenticatedModule_1;
}());



/***/ }),

/***/ "./src/app/modules/config/config.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tabs_config_config_list_config_list_component__ = __webpack_require__("./src/app/components/tabs/config/config-list/config-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_shared_config_modal_config_modal_component__ = __webpack_require__("./src/app/components/shared/config-modal/config-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared_new_rule_page_new_rule_page_component__ = __webpack_require__("./src/app/components/shared/new-rule-page/new-rule-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_new_rule_stepper_new_rule_stepper_component__ = __webpack_require__("./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule_1 = ConfigModule;
    /**
     * Register with the root module of the app
     *
     * @static
     * @returns {ModuleWithProviders} This module
     * @memberof ConfigModule
     */
    ConfigModule.forRoot = function () {
        return {
            ngModule: ConfigModule_1,
            providers: []
        };
    };
    ConfigModule = ConfigModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_tabs_config_config_list_config_list_component__["a" /* ConfigListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shared_new_rule_page_new_rule_page_component__["a" /* NewRulePageComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_shared_config_modal_config_modal_component__["a" /* ConfigModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_shared_new_rule_stepper_new_rule_stepper_component__["a" /* NewRuleStepperComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__components_shared_config_modal_config_modal_component__["a" /* ConfigModalComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__components_tabs_config_config_list_config_list_component__["a" /* ConfigListComponent */]
            ]
        })
    ], ConfigModule);
    return ConfigModule;
    var ConfigModule_1;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PreventAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Prevent a user from accessing a route if they aren't authenticated.
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 */
var AuthGuardService = /** @class */ (function () {
    /**
     * Creates an instance of AuthGuardService.
     * @param {GoogleService} google Declare the Google Service as google.
     * @param {Router} router Declare the Router as router
     * @param {NgZone} zone Declare NgZone as zone
     * @memberof AuthGuardService
     */
    function AuthGuardService(google, router, zone) {
        this.google = google;
        this.router = router;
        this.zone = zone;
    }
    /**
     * Determines whether the user can go to the page and handle it.
     *
     * @returns {boolean} Whether or not the user can access the route
     * @memberof AuthGuardService
     */
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        if (this.google.getAuthStatus()) {
            return true;
        }
        this.zone.run(function () {
            _this.router.navigate(['/']);
        });
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__google_google_service__["a" /* GoogleService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]])
    ], AuthGuardService);
    return AuthGuardService;
}());

/**
 * Prevent a user from accessing a route if they are authenticated.
 *
 * @export
 * @class PreventAuthGuardService
 * @implements {CanActivate}
 */
var PreventAuthGuardService = /** @class */ (function () {
    /**
     * Creates an instance of PreventAuthGuardService.
     * @param {GoogleService} google Declare the Google Service as google.
     * @param {Router} router Declare the Router as router
     * @param {NgZone} zone Declare NgZone as zone
     * @memberof PreventAuthGuardService
     */
    function PreventAuthGuardService(google, router, zone) {
        this.google = google;
        this.router = router;
        this.zone = zone;
    }
    /**
     * Determines whether the user can go to the page and handle it.
     *
     * @returns {boolean} Whether or not the user can access the route
     * @memberof PreventAuthGuardService
     */
    PreventAuthGuardService.prototype.canActivate = function () {
        var _this = this;
        if (!this.google.getAuthStatus()) {
            return true;
        }
        this.zone.run(function () {
            _this.router.navigate(['/app/home']);
        });
        return false;
    };
    PreventAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__google_google_service__["a" /* GoogleService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgZone"]])
    ], PreventAuthGuardService);
    return PreventAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/google/google.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__("./node_modules/firebase/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Variable for easy reference to the authenitcation instance.
 */
var authInstance;
var folderPicker;
var _folderPicked = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
function folderPicked(data) {
    if (data.action === 'picked') {
        _folderPicked.next(data.docs[0]);
    }
}
/**
 * Utility class to handle all interacting with the Google API
 *
 * @export
 * @class GoogleService
 */
var GoogleService = /** @class */ (function () {
    /**
     * Creates an instance of GoogleService.
     * @memberof GoogleService
     */
    function GoogleService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        /**
         * Holds a subject that is used to update subscribers with the authentication status.
         *
         * @private
         * @memberof GoogleService
         */
        this._authState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        /**
         * Allows other modules / services to subscribe to the authentication status.
         *
         * @memberof GoogleService
         */
        this.authState$ = this._authState.asObservable();
        this.folderPicked$ = _folderPicked.asObservable();
    }
    /**
     * Initialize the Google API
     *
     * @param {Object} config
     * @memberof GoogleService
     */
    GoogleService.prototype.init = function (config, callback) {
        var _this = this;
        gapi.load('client:auth2', function () {
            gapi
                .client
                .init(config)
                .then(function () {
                authInstance = gapi.auth2.getAuthInstance();
                authInstance.isSignedIn.listen(function () {
                    _this._authState.next(authInstance.isSignedIn.get());
                    if (authInstance.isSignedIn.get()) {
                        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider.credential(_this.getToken());
                        _this.firebaseAuth.auth.signInWithCredential(credential);
                    }
                });
                var authStatus = authInstance.isSignedIn.get();
                _this._authState.next(authStatus);
                gapi.load('picker', function () {
                    var view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
                        .setIncludeFolders(true)
                        .setSelectFolderEnabled(true);
                    folderPicker = new google.picker.PickerBuilder()
                        .disableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
                        .setAppId(362606538820)
                        .setOAuthToken(authInstance.currentUser.get().getAuthResponse().access_token)
                        .setDeveloperKey('AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM')
                        .setSelectableMimeTypes('application/vnd.google-apps.folder')
                        .addView(view)
                        .setCallback(folderPicked)
                        .build();
                    if (callback) {
                        callback();
                    }
                });
            }, console.error);
        });
    };
    GoogleService.prototype.openFilePicker = function () {
        folderPicker.setVisible(true);
    };
    /**
     * Returns the users current authentication status.
     *
     * @returns {Boolean}
     * @memberof GoogleService
     */
    GoogleService.prototype.getAuthStatus = function () {
        if (authInstance) {
            return authInstance.isSignedIn.get();
        }
        else {
            return false;
        }
    };
    /**
     * Opens a popup allowing the user to sign in.
     *
     * @memberof GoogleService
     */
    GoogleService.prototype.signIn = function () {
        authInstance.signIn();
    };
    /**
     * Signs a user out
     *
     * @memberof GoogleService
     */
    GoogleService.prototype.signOut = function () {
        authInstance.signOut();
        this.firebaseAuth.auth.signOut();
    };
    /**
     * Gets the users id token
     *
     * @returns {string}
     * @memberof GoogleService
     */
    GoogleService.prototype.getToken = function () {
        return authInstance.currentUser.get().getAuthResponse().id_token;
    };
    GoogleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], GoogleService);
    return GoogleService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
/**
 * Environment for production builds
 */
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM",
        authDomain: "g-drive-sorter-2.firebaseapp.com",
        databaseURL: "https://g-drive-sorter-2.firebaseio.com",
        projectId: "g-drive-sorter-2",
        storageBucket: "g-drive-sorter-2.appspot.com",
        messagingSenderId: "362606538820"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
/**
 * Environment for development builds
 */
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB-yE9IXT29Vl_eAU7bzvzv5Qe17flfpzM",
        authDomain: "g-drive-sorter-2.firebaseapp.com",
        databaseURL: "https://g-drive-sorter-2.firebaseio.com",
        projectId: "g-drive-sorter-2",
        storageBucket: "g-drive-sorter-2.appspot.com",
        messagingSenderId: "362606538820"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routerAnimation; });
/* unused harmony export fabAnimation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

/**
* Animation for switching between routes
*/
var routerAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('routerTransition', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("* <=> *", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["g" /* group */])([
            // Route leaving
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':leave', [
                // Inital styles
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    transform: 'translateX(0%)',
                    width: '100%',
                    height: '100%',
                    position: 'fixed'
                }),
                // Animated style
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    transform: 'translateX(100%)'
                }))
            ], { optional: true }),
            // Router entering
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])(':enter', [
                // Inital styles
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    transform: 'translateX(-100%)',
                    width: '100%',
                    height: '100%',
                    position: 'fixed'
                }),
                // Animated style
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                    transform: 'translateX(0%)'
                }))
            ], { optional: true }),
        ])
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* transition */])("* => appConfig", [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* query */])('.mat-fab', [
            // Inital styles
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                transform: 'scale(0)'
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* style */])({
                transform: 'scale(1)'
            }))
        ])
    ])
]);
var fabAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["n" /* trigger */])('fabAnimation', []);


/***/ }),

/***/ "./src/simple-grid.scss":
/***/ (function(module, exports) {

module.exports = "/*\n  Code from: https://github.com/zachacole/Simple-Grid\n\n  MIT License:\n  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n  THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n/* Webfont: Lato-Italic */\n@font-face {\n  font-family: 'LatoWeb';\n  src: url('Lato-Italic.0acac3839ae2c89cf8b5.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-Italic.0acac3839ae2c89cf8b5.eot?#iefix') format(\"embedded-opentype\"), url('Lato-Italic.4eb103b4d12be57cb1d0.woff2') format(\"woff2\"), url('Lato-Italic.f28f2d6482446544ef1e.woff') format(\"woff\"), url('Lato-Italic.4ffc48d0549568bb624b.ttf') format(\"truetype\");\n  font-style: italic;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\n/* Webfont: Lato-Regular */\n@font-face {\n  font-family: 'LatoWeb';\n  src: url('Lato-Regular.8ab18d934cfa1e51dc82.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-Regular.8ab18d934cfa1e51dc82.eot?#iefix') format(\"embedded-opentype\"), url('Lato-Regular.bd03a2cc277bbbc338d4.woff2') format(\"woff2\"), url('Lato-Regular.27bd77b9162d388cb8d4.woff') format(\"woff\"), url('Lato-Regular.6d4e78225df0cfd5fe1b.ttf') format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\n/* Webfont: Lato-Light */\n@font-face {\n  font-family: 'LatoWebLight';\n  src: url('Lato-Light.4afee4c98483c85a3346.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-Light.4afee4c98483c85a3346.eot?#iefix') format(\"embedded-opentype\"), url('Lato-Light.7244318390cc4d36aac4.woff2') format(\"woff2\"), url('Lato-Light.90301aa07d780a098122.woff') format(\"woff\"), url('Lato-Light.cf44fd55d7045a2378f9.ttf') format(\"truetype\");\n  font-style: normal;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\n/* Webfont: Lato-LightItalic */\n@font-face {\n  font-family: 'LatoWebLight';\n  src: url('Lato-LightItalic.7be5435e82c853b13cae.eot');\n  /* IE9 Compat Modes */\n  src: url('Lato-LightItalic.7be5435e82c853b13cae.eot?#iefix') format(\"embedded-opentype\"), url('Lato-LightItalic.314210a4825a7cc8ca7d.woff2') format(\"woff2\"), url('Lato-LightItalic.b55e385f24f0f9f724da.woff') format(\"woff\"), url('Lato-LightItalic.7865ec9dc1b26d5447c7.ttf') format(\"truetype\");\n  font-style: italic;\n  font-weight: normal;\n  text-rendering: optimizeLegibility; }\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  top: 0;\n  font-size: 100%; }\n* {\n  font-family: \"LatoWeb\", Helvetica, sans-serif;\n  line-height: 1.5; }\nh1 {\n  font-size: 2.5rem; }\nh2 {\n  font-size: 2rem; }\nh3 {\n  font-size: 1.375rem; }\nh4 {\n  font-size: 1.125rem; }\nh5 {\n  font-size: 1rem; }\nh6 {\n  font-size: 0.875rem; }\np {\n  font-size: 1.125rem;\n  font-family: 'LatoWebLight';\n  line-height: 1.8; }\n.left {\n  float: left;\n  text-align: left; }\n.right {\n  float: right;\n  text-align: right; }\n.center {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto; }\n.justify {\n  text-align: justify; }\n.hidden-sm {\n  display: none; }\n.container {\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto; }\n@media only screen and (min-width: 33.75em) {\n    .container {\n      width: 80%; } }\n@media only screen and (min-width: 60em) {\n    .container {\n      width: 75%;\n      max-width: 60rem; } }\n.row {\n  position: relative;\n  width: 100%; }\n.row [class^=\"col\"] {\n  float: left;\n  margin: 0.5rem 2%;\n  min-height: 0.125rem; }\n.row::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n.col-1,\n.col-2,\n.col-3,\n.col-4,\n.col-5,\n.col-6,\n.col-7,\n.col-8,\n.col-9,\n.col-10,\n.col-11,\n.col-12 {\n  width: 96%; }\n.col-1-sm {\n  width: 4.33333333%; }\n.col-2-sm {\n  width: 12.66666667%; }\n.col-3-sm {\n  width: 21%; }\n.col-4-sm {\n  width: 29.33333333%; }\n.col-5-sm {\n  width: 37.66666667%; }\n.col-6-sm {\n  width: 46%; }\n.col-7-sm {\n  width: 54.33333333%; }\n.col-8-sm {\n  width: 62.66666667%; }\n.col-9-sm {\n  width: 71%; }\n.col-10-sm {\n  width: 79.33333333%; }\n.col-11-sm {\n  width: 87.66666667%; }\n.col-12-sm {\n  width: 96%; }\n@media only screen and (min-width: 45em) {\n  .col-1 {\n    width: 4.33333333%; }\n  .col-2 {\n    width: 12.66666667%; }\n  .col-3 {\n    width: 21%; }\n  .col-4 {\n    width: 29.33333333%; }\n  .col-5 {\n    width: 37.66666667%; }\n  .col-6 {\n    width: 46%; }\n  .col-7 {\n    width: 54.33333333%; }\n  .col-8 {\n    width: 62.66666667%; }\n  .col-9 {\n    width: 71%; }\n  .col-10 {\n    width: 79.33333333%; }\n  .col-11 {\n    width: 87.66666667%; }\n  .col-12 {\n    width: 96%; }\n  .hidden-sm {\n    display: block; } }\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map