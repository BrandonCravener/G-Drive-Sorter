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
                __WEBPACK_IMPORTED_MODULE_19__components_auth_unauthenticated_unauthenticated_component__["a" /* UnauthenticatedComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_parallax__["ParallaxModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material__["v" /* MatToolbarModule */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_new_config_page_new_config_page_component__ = __webpack_require__("./src/app/components/shared/new-config-page/new-config-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_auth_unauthenticated_unauthenticated_component__ = __webpack_require__("./src/app/components/auth/unauthenticated/unauthenticated.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_edit_config_page_edit_config_page_component__ = __webpack_require__("./src/app/components/shared/edit-config-page/edit-config-page.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_4__components_shared_new_config_page_new_config_page_component__["a" /* NewConfigPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            name: 'appConfigCreate'
        }
    },
    {
        path: 'app/config/edit',
        component: __WEBPACK_IMPORTED_MODULE_6__components_shared_edit_config_page_edit_config_page_component__["a" /* EditConfigPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__services_auth_auth_guard_service__["a" /* AuthGuardService */]],
        data: {
            name: 'appConfigEdit'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__("./node_modules/uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);

var ConfigBuilder = /** @class */ (function () {
    function ConfigBuilder() {
    }
    ConfigBuilder.generateNewConfig = function (configName, firstGroupName, sourceFolder, destinationFolder, firstGroupRule) {
        var configHolder = {
            name: configName,
            groups: [{
                    id: Object(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])(),
                    name: firstGroupName,
                    source: sourceFolder,
                    destination: destinationFolder,
                    rules: [firstGroupRule]
                }],
            id: Object(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])()
        };
        return configHolder;
    };
    ConfigBuilder.addGroup = function (config, newGroupName, newGroupDestination, newGroupSource, firstGroupRule) {
        var localConfig = config;
        localConfig.groups.push({
            id: Object(__WEBPACK_IMPORTED_MODULE_0_uuid__["v4"])(),
            name: newGroupName,
            source: newGroupSource,
            destination: newGroupDestination,
            rules: [firstGroupRule]
        });
        return localConfig;
    };
    ConfigBuilder.verifyConfig = function (config) {
        var valid = true;
        // Check if config has name and groups
        if (!config.name || !config.groups || (config.name.length <= 0)) {
            valid = false;
        }
        config.groups.forEach(function (group) {
            if (!group.destination.folderID || !group.id ||
                !group.source.folderID ||
                !group.name || !group.rules ||
                (group.name.length <= 0)) {
                valid = false;
            }
            group.rules.forEach(function (rule) {
                if (!rule.classifier || !rule.constraint ||
                    !rule.data || !rule.id || !rule.name ||
                    (rule.name.length <= 0)) {
                    valid = false;
                }
            });
        });
        return valid;
    };
    return ConfigBuilder;
}());



/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.html":
/***/ (function(module, exports) {

module.exports = "<div parallax>\n  <div class=\"parallax-overlay\">\n    <h1>G-Drive Sorter</h1>\n    <h3>An organized Google Drive™ has never been easier</h3>\n    <h5>Work in progress, the app currently has minimal functionality please wait until full release.</h5>\n    <button (click)=\"login()\" mat-raised-button color=\"accent\">Get Organized</button>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"usage-points row\">\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">view_list</i></h1>\n      <h2 class=\"center\"><b>Effectively Sort Files</b></h2>\n      <p>Sorting your drive only requires a quick visit to this website. And we do the rest of the work for you!</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">accessibility</i></h1>\n      <h2 class=\"center\"><b>Simplistic Use</b></h2>\n      <p>Preset configurations and a simplistic user interface makes the G-Drive sorter suitable for all Google Drive users.</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">art_track</i></h1>\n      <h2 class=\"center\"><b>Fully Customizable</b></h2>\n      <p>Fully customizable configurations that sorts all Google Drive files based on type, creation date, name, current owner, and much more.</p>\n    </div>\n  </div>\n</div>\n"

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

module.exports = "<div [class.container]=\"isPage\">\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Create New Config</h3>\n  <h3 *ngIf=\"isPage\">Create New Config</h3>\n  <div mat-dialog-content>\n    <form [formGroup]=\"newConfig\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Config Name\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The name of the new configuration.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\" [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Name</mat-label>\n              <input matInput formControlName=\"newConfigNameControl\" required>\n              <mat-error>Please a config name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [expanded]=\"step === 1\" [disabled]=\"!checkValidation(0)\" (opened)=\"setStep(1)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Name\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The new configuration's inital group name.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\" [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Group Name</mat-label>\n              <input matInput formControlName=\"newGroupNameControl\" required>\n              <mat-error>Please enter a inital group name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [disabled]=\"!checkValidation(1)\" [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Locations\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              Where all files matching group rules will go.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n              <div class=\"full-width\">\n                <mat-form-field style=\"width: 70%;\">\n                  <input matInput type=\"text\" placeholder=\"From\" [value]=\"source.name\" disabled required/>\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Pick From Folder\" [disabled]=\"folderButtonSourceDisabled\" (click)=\"openFolderPicker('source')\">\n                    <mat-icon>folder</mat-icon>\n                  </button>\n                </mat-form-field> \n                <mat-slide-toggle (change)=\"rootToggleChange($event, 'source')\">My Drive</mat-slide-toggle>\n              </div>\n              <div class=\"full-width\">\n                <mat-form-field style=\"width: 70%;\">\n                  <input matInput type=\"text\" placeholder=\"To\" [value]=\"destination.name\" disabled required/>\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Pick To Folder\" [disabled]=\"folderButtonDestinationDisabled\" (click)=\"openFolderPicker('destination')\">\n                    <mat-icon>folder</mat-icon>\n                  </button>\n                </mat-form-field> \n                <mat-slide-toggle (change)=\"rootToggleChange($event, 'destination')\">My Drive</mat-slide-toggle>\n              </div>\n          </ng-template>\n          <mat-action-row>\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n        <mat-expansion-panel [class.overflow-limit]=\"!isPage\" [disabled]=\"!checkValidation(2)\" [expanded]=\"step === 3\" (opened)=\"setStep(3)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              First Rule\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The new configuration's inital group's first rule.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-new-rule-stepper (valueChange)=\"stepperFinished($event)\"></app-new-rule-stepper>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </form>\n    <br>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"create()\" [disabled]=\"!finished\">Create</button>\n    <button mat-button (click)=\"close()\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".overflow-limit {\n  max-height: 40vh;\n  overflow-y: auto; }\n\n.full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_firebase_database_service__ = __webpack_require__("./src/app/services/firebase/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
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
    function ConfigModalComponent(zone, router, formBuilder, google, database, firebase, firebaseAuth) {
        this.zone = zone;
        this.router = router;
        this.formBuilder = formBuilder;
        this.google = google;
        this.database = database;
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this._closeCommand = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["a" /* Subject */]();
        this.isPage = false;
        this.step = -1;
        this.finished = false;
        this.source = {
            folderID: undefined,
            name: null
        };
        this.destination = {
            folderID: undefined,
            name: null
        };
        this.folderButtonSourceDisabled = false;
        this.closeCommand = this._closeCommand.asObservable();
        this.folderButtonDestinationDisabled = false;
    }
    ConfigModalComponent.prototype.ngOnInit = function () {
        this.newConfig = this.formBuilder.group({
            floatLabel: 'auto',
            newConfigNameControl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required],
            newGroupNameControl: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required]
        });
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
    ConfigModalComponent.prototype.checkValidation = function (stepNumber) {
        switch (stepNumber) {
            case 0:
                return this.newConfig.get('newConfigNameControl').valid;
            case 1:
                return this.newConfig.get('newGroupNameControl').valid;
            case 2:
                if (this.source.folderID === undefined ||
                    this.destination.folderID === undefined) {
                    return false;
                }
                else {
                    return true;
                }
            case 3:
                return ((this.rule === undefined) ? false : true);
            default:
                return false;
        }
    };
    ConfigModalComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ConfigModalComponent.prototype.openFolderPicker = function (folderType) {
        var _this = this;
        var folderPickedListener = this.google.folderPicked$.subscribe(function (pickedFolder) {
            if (folderType === 'destination') {
                _this.destination = {
                    name: pickedFolder.name,
                    folderID: pickedFolder.id
                };
            }
            else {
                _this.source = {
                    name: pickedFolder.name,
                    folderID: pickedFolder.id
                };
            }
            folderPickedListener.unsubscribe();
        }, function (err) {
            folderPickedListener.unsubscribe();
        });
        this.google.openFilePicker();
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
    ConfigModalComponent.prototype.rootToggleChange = function (event, folderType) {
        if (event.checked) {
            if (folderType === 'source') {
                this.folderButtonSourceDisabled = true;
            }
            else {
                this.folderButtonDestinationDisabled = true;
            }
            this[folderType].folderID = 'root';
            this[folderType].name = 'My Drive';
        }
        else {
            if (folderType === 'source') {
                this.folderButtonSourceDisabled = false;
            }
            else {
                this.folderButtonDestinationDisabled = false;
            }
            this[folderType].folderID = undefined;
            this[folderType].name = '';
        }
    };
    ConfigModalComponent.prototype.create = function () {
        if (this.checkAllValidation()) {
            this.database.createConfig(this.newConfig.get('newConfigNameControl').value, this.newConfig.get('newGroupNameControl').value, this.source, this.destination, this.rule);
            this._closeCommand.next(true);
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
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_google_google_service__["a" /* GoogleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_firebase_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ConfigModalComponent);
    return ConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div [class.container]=\"isPage\" *ngIf=\"configLoaded | async; else loadingConfig\">\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Editing Config - {{ config.name | unNamed }}</h3>\n  <h3 *ngIf=\"isPage\">Editing Config - {{ config.name | unNamed }}</h3>\n  <div mat-dialog-content>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Config Name\" [(ngModel)]=\"config.name\" required>\n    </mat-form-field>\n    <h4>\n      Group's\n      <button mat-icon-button class=\"right\" color=\"primary\" matTooltip=\"Add Group\" (click)=\"addGroup()\">\n        <mat-icon aria-label=\"Add Group\">add</mat-icon>\n      </button>\n    </h4>\n    <div style=\"padding: 10px 16px;\" class=\"overflow-limit\">\n        <mat-expansion-panel  *ngFor=\"let group of config.groups\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              {{ group.name | unNamed }}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Group Name\" [(ngModel)]=\"group.name\" required>\n            </mat-form-field>\n            <div class=\"full-width\">\n              <mat-form-field style=\"width: 70%;\">\n                <input matInput type=\"text\" [value]=\"group.source.name\" placeholder=\"From\" disabled required/>\n                <button mat-button matSuffix mat-icon-button aria-label=\"Pick Source Folder\" [disabled]=\"group.source.folderID === 'root'\" (click)=\"openFolderPicker(group.id, 'source')\">\n                  <mat-icon>folder</mat-icon>\n                </button>\n              </mat-form-field>\n              <mat-slide-toggle [checked]=\"group.source.folderID === 'root'\" (change)=\"rootToggleChange($event, 'source', group.id)\">My Drive</mat-slide-toggle>\n            </div>\n            <div class=\"full-width\">\n              <mat-form-field style=\"width: 70%;\">\n                <input matInput type=\"text\" [value]=\"group.destination.name\" placeholder=\"To\" disabled required/>\n                <button mat-button matSuffix mat-icon-button aria-label=\"Pick Destination Folder\" [disabled]=\"group.destination.folderID === 'root'\" (click)=\"openFolderPicker(group.id, 'destination')\">\n                  <mat-icon>folder</mat-icon>\n                </button>\n              </mat-form-field>\n              <mat-slide-toggle [checked]=\"group.destination.folderID === 'root'\" (change)=\"rootToggleChange($event, 'destination', group.id)\">My Drive</mat-slide-toggle> \n            </div>\n            <h5>\n              Rule's\n              <button mat-icon-button class=\"right\" color=\"accent\" matTooltip=\"Add Rule\" (click)=\"addRule(group.id)\">\n                <mat-icon aria-label=\"Add Rule\">add</mat-icon>\n              </button>\n            </h5>\n            <mat-expansion-panel [expanded]=\"editingRuleID === rule.id\" (opened)=\"editingRuleID = rule.id\" *ngFor=\"let rule of group.rules\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  {{ rule.name | unNamed }}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <ng-template matExpansionPanelContent>\n                <app-new-rule-stepper (valueChange)=\"ruleChanged($event, rule.id, group.id)\" [reset]=\"true\" [inputRule]=\"rule\"></app-new-rule-stepper>\n              </ng-template>\n            </mat-expansion-panel>\n          </ng-template>\n        </mat-expansion-panel>            \n    </div>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button [disabled]=\"!valid\" (click)=\"done()\">Done</button>\n    <button mat-button (click)=\"close()\">Cancel</button>\n  </div>\n</div>\n<ng-template #loadingConfig>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss":
/***/ (function(module, exports) {

module.exports = ".overflow-limit {\n  max-height: 40vh;\n  overflow-y: auto; }\n\n.full-width {\n  width: 100%; }\n\n.right {\n  float: right; }\n"

/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConfigModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_config_builder__ = __webpack_require__("./src/app/classes/config-builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_database_service__ = __webpack_require__("./src/app/services/firebase/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_uuid__ = __webpack_require__("./node_modules/uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_google_google_service__ = __webpack_require__("./src/app/services/google/google.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditConfigModalComponent = /** @class */ (function () {
    function EditConfigModalComponent(zone, router, google, snackBar, formBuilder, database) {
        this.zone = zone;
        this.router = router;
        this.google = google;
        this.snackBar = snackBar;
        this.formBuilder = formBuilder;
        this.database = database;
        this._closeCommand = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.valid = true;
        this.closeCommand = this._closeCommand.asObservable();
    }
    EditConfigModalComponent.prototype.getGroupIndex = function (groupID) {
        return this.config.groups.findIndex(function (group) {
            return group.id === groupID;
        });
    };
    EditConfigModalComponent.prototype.getRuleIndex = function (groupID, ruleID) {
        return this.config.groups[this.getGroupIndex(groupID)]
            .rules.findIndex(function (rule) {
            return rule.id === ruleID;
        });
    };
    EditConfigModalComponent.prototype.verifyValidation = function () {
        return __WEBPACK_IMPORTED_MODULE_1__classes_config_builder__["a" /* ConfigBuilder */].verifyConfig(this.config);
    };
    EditConfigModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.database.editingConfig) {
            this.database.getConfig(this.database.editingConfig, function (data) {
                _this.config = data;
                _this.configLoaded = Promise.resolve(true);
            });
        }
    };
    EditConfigModalComponent.prototype.openFolderPicker = function (groupID, folderType) {
        var _this = this;
        var folderPickedListener = this.google.folderPicked$.subscribe(function (folder) {
            if (folderType === 'source') {
                _this.config.groups[_this.getGroupIndex(groupID)].source = {
                    name: folder.name,
                    folderID: folder.id
                };
            }
            else {
                _this.config.groups[_this.getGroupIndex(groupID)].destination = {
                    name: folder.name,
                    folderID: folder.id
                };
            }
            folderPickedListener.unsubscribe();
        }, function (cancelled) {
            if (cancelled) {
                folderPickedListener.unsubscribe();
            }
        });
        this.google.openFilePicker();
    };
    EditConfigModalComponent.prototype.addGroup = function () {
        var newConfigUUID = Object(__WEBPACK_IMPORTED_MODULE_7_uuid__["v4"])();
        this.config.groups.push({
            id: newConfigUUID,
            destination: {
                name: ''
            },
            source: {
                name: ''
            },
            name: '',
            rules: []
        });
        this.addRule(newConfigUUID);
        this.valid = false;
    };
    EditConfigModalComponent.prototype.addRule = function (groupID) {
        var newRuleUUID = Object(__WEBPACK_IMPORTED_MODULE_7_uuid__["v4"])();
        this.config.groups[this.getGroupIndex(groupID)].rules
            .push({
            id: newRuleUUID,
            name: ''
        });
        this.editingRuleID = newRuleUUID;
        this.valid = false;
    };
    EditConfigModalComponent.prototype.ruleChanged = function (newRule, ruleID, groupID) {
        this.config.groups[this.getGroupIndex(groupID)]
            .rules[this.getRuleIndex(groupID, ruleID)] = newRule;
        this.editingRuleID = '';
        this.valid = this.verifyValidation();
    };
    EditConfigModalComponent.prototype.done = function () {
        if (this.verifyValidation()) {
            this.database.updateConfig(this.config);
            this.close();
        }
        else {
            this.snackBar.open('Complete your edits!', 'OK', {
                duration: 5000
            });
        }
    };
    EditConfigModalComponent.prototype.rootToggleChange = function (event, folderType, groupID) {
        var groupIndex = this.getGroupIndex(groupID);
        if (event.checked) {
            this.config.groups[groupIndex][folderType] = {
                folderID: 'root',
                name: 'My Drive'
            };
        }
        else {
            this.config.groups[groupIndex][folderType] = {
                folderID: undefined,
                name: null
            };
        }
    };
    EditConfigModalComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    EditConfigModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-config-modal',
            template: __webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__services_google_google_service__["a" /* GoogleService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_firebase_database_service__["a" /* DatabaseService */]])
    ], EditConfigModalComponent);
    return EditConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConfigPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_config_modal_edit_config_modal_component__ = __webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
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


var EditConfigPageComponent = /** @class */ (function (_super) {
    __extends(EditConfigPageComponent, _super);
    function EditConfigPageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPage = true;
        return _this;
    }
    EditConfigPageComponent.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    EditConfigPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-config-page',
            template: __webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss")]
        })
    ], EditConfigPageComponent);
    return EditConfigPageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__edit_config_modal_edit_config_modal_component__["a" /* EditConfigModalComponent */]));



/***/ }),

/***/ "./src/app/components/shared/new-config-page/new-config-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewConfigPageComponent; });
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


var NewConfigPageComponent = /** @class */ (function (_super) {
    __extends(NewConfigPageComponent, _super);
    function NewConfigPageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPage = true;
        return _this;
    }
    NewConfigPageComponent.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    NewConfigPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-rule-page',
            template: __webpack_require__("./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/config-modal/config-modal.component.scss")]
        })
    ], NewConfigPageComponent);
    return NewConfigPageComponent;
}(__WEBPACK_IMPORTED_MODULE_1__config_modal_config_modal_component__["a" /* ConfigModalComponent */]));



/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper (selectionChange)=\"stepChanged($event)\" linear #stepper>\n  <mat-step label=\"Name\" [stepControl]=\"nameFormGroup\">\n    <form [formGroup]=\"nameFormGroup\">\n      <mat-form-field>\n          <input matInput placeholder=\"Rule Name\" formControlName=\"ruleName\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Trait\" [stepControl]=\"classifierFormGroup\">\n    <form [formGroup]=\"classifierFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Trait\" formControlName=\"classifierControl\" [(value)]=\"classifierSelectOption\">\n          <mat-option *ngFor=\"let classifier of classifiers\" [value]=\"classifier.value\">\n            {{ classifier.label }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Limitation\" [stepControl]=\"constraintFormGroup\">\n    <form [formGroup]=\"constraintFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Limitation\" formControlName=\"constraintControl\" [(value)]=\"constraintSelectOption\">\n          <mat-option *ngFor=\"let constraint of constriants\" [value]=\"constraint.value\">\n            {{ constraint.label }}\n          </mat-option>\n          <mat-option [disabled]=\"startEndWithDisabled\" value=\"startWith\">\n            Start's With\n          </mat-option>\n          <mat-option [disabled]=\"startEndWithDisabled\" value=\"endWith\">\n            End's With\n          </mat-option>\n          <mat-option [disabled]=\"betweenConstraintDisabled\" value=\"between\">\n            Between\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Input\" [stepControl]=\"inputFieldGroup\">\n    <form [formGroup]=\"inputFieldGroup\">\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"4px\">\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'title'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Title Text\" formControlName=\"titleTextControl\" [required]=\"classifierSelectOption === 'title'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'owner'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Owner Name\" formControlName=\"ownerTextControl\" [required]=\"classifierSelectOption === 'owner'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'type'\">\n          <mat-form-field>\n            <mat-select placeholder=\"Drive File Type\" formControlName=\"fileTypeControl\" [required]=\"classifierSelectOption === 'type'\">\n              <mat-option *ngFor=\"let fileType of driveFileTypes\" [value]=\"fileType.value\">\n                {{ fileType.label }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"datePickerSingleNeeded() === 1\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"datePicker\" placeholder=\"Date\" formControlName=\"dateControl\" [required]=\"datePickerSingleNeeded() === 1\">\n            <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #datePicker startView=\"month\"></mat-datepicker>\n          </mat-form-field>          \n        </mat-grid-tile>\n        <div *ngIf=\"datePickerSingleNeeded() === 2\">\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenFirst\" formControlName=\"firstDateControl\" placeholder=\"Starting Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenFirst\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenFirst startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenSecond\" formControlName=\"secondDateControl\" placeholder=\"Ending Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenSecond\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenSecond startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n        </div>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'location'\">\n          <mat-form-field style=\"width: 100%;\">\n            <input matInput type=\"text\" placeholder=\"Location\" formControlName=\"folderLocationControl\" disabled [required]=\"classifierSelectOption === 'location'\"/>\n            <button mat-button matSuffix mat-icon-button aria-label=\"Pick Folder\" (click)=\"openFolderPicker()\">\n              <mat-icon>folder</mat-icon>\n            </button>\n          </mat-form-field>  \n        </mat-grid-tile>\n      </mat-grid-list>\n      <div>\n        <button mat-button type=\"button\" (click)=\"finished()\">Done</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n</mat-vertical-stepper>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uuid__ = __webpack_require__("./node_modules/uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uuid__);
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
        this.nameFormGroup = this.formBuilder.group({
            ruleName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]
        });
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
        if (this.inputRule && this.inputRule.data) {
            this.nameFormGroup.get('ruleName').setValue(this.inputRule.name);
            this.classifierSelectOption = this.inputRule.classifier;
            this.classifierFormGroup.get('classifierControl').setValue(this.inputRule.classifier);
            this.constraintSelectOption = this.inputRule.constraint;
            this.constraintFormGroup.get('constraintControl').setValue(this.inputRule.constraint);
            switch (this.getFieldControl(this.classifierSelectOption)) {
                case 'titleTextControl':
                    this.inputFieldGroup.get('titleTextControl')
                        .setValue(this.inputRule.data.title);
                    break;
                case 'fileTypeControl':
                    this.inputFieldGroup.get('fileTypeControl')
                        .setValue(this.inputRule.data.fileType);
                    break;
                case 'folderLocationControl':
                    this.pickedFolder = this.inputRule.data.folder;
                    break;
                case 'ownerTextControl':
                    this.inputFieldGroup.get('ownerTextControl')
                        .setValue(this.inputRule.data.owner);
                    break;
                case 'dateControl':
                    if (this.constraintSelectOption === 'between') {
                        this.inputFieldGroup.get('firstDateControl')
                            .setValue(this.inputRule.data.firstDate);
                        this.inputFieldGroup.get('secondDateControl')
                            .setValue(this.inputRule.data.secondDate);
                    }
                    else {
                        this.inputFieldGroup.get('dateControl')
                            .setValue(this.inputRule.data.date);
                    }
                    break;
            }
        }
    };
    NewRuleStepperComponent.prototype.finished = function () {
        var data = {};
        var ruleUUID;
        if (this.inputRule) {
            ruleUUID = this.inputRule.id;
        }
        else {
            ruleUUID = Object(__WEBPACK_IMPORTED_MODULE_5_uuid__["v4"])();
        }
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
            id: ruleUUID,
            classifier: this.classifierFormGroup.get('classifierControl').value,
            constraint: this.constraintFormGroup.get('constraintControl').value,
            data: data,
            name: this.nameFormGroup.get('ruleName').value
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
        var _this = this;
        if (event.previouslySelectedIndex === 1) {
            var classifierValue = this.classifierFormGroup.get('classifierControl').value;
            this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
            this.startEndWithDisabled = this.checkIfStartEndDisabled(classifierValue);
            if (this.betweenConstraintDisabled) {
                this.constraintFormGroup.get('constraintControl').setValue('include');
            }
        }
        if (event.selectedIndex === 2) {
            var folderPickedSubscription_1 = this.google.folderPicked$.subscribe(function (folder) {
                _this.pickedFolder = folder.id;
                _this.inputFieldGroup.get('folderLocationControl').setValue(folder.name);
                folderPickedSubscription_1.unsubscribe();
            });
        }
    };
    NewRuleStepperComponent.prototype.openFolderPicker = function () {
        this.google.openFilePicker();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "inputRule", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewRuleStepperComponent.prototype, "reset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stepper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["x" /* MatVerticalStepper */])
    ], NewRuleStepperComponent.prototype, "stepper", void 0);
    NewRuleStepperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-rule-stepper',
            template: __webpack_require__("./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss")],
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_google_google_service__["a" /* GoogleService */]])
    ], NewRuleStepperComponent);
    return NewRuleStepperComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <span style=\"font-size: 2rem;\">Configuration's</span>\n  <span class=\"right refresh-button\" matTooltip=\"Refresh Config's\" matTooltipPosition=\"left\">\n    <button mat-icon-button color=\"accent\" (click)=\"refreshConfigs()\">\n      <mat-icon aria-label=\"Refresh configurations\">refresh</mat-icon>\n    </button>\n  </span>\n</div>\n<div *ngIf=\"loading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div [hidden]=\"noConfigs\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let config\">{{config.name}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef style=\"text-align: right;\">Actions</mat-header-cell>\n      <mat-cell style=\"text-align: right;\" *matCellDef=\"let config\">\n        <button mat-icon-button color=\"accent\" matTooltip=\"Edit Config\" (click)=\"editConfig(config.key)\">\n          <mat-icon aria-label=\"Edit Config\">edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Set Active\" (click)=\"setActiveConfig(config.key)\" [disabled]=\"getActiveConfig(config.key)\">\n          <mat-icon aria-label=\"Make Config Active\">settings_power</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" matTooltip=\"Delete config\" (click)=\"deleteConfig(config.key)\">\n          <mat-icon aria-label=\"Delete Config\">delete_forever</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: tableColumns;\"></mat-row>\n  </mat-table>\n  \n  <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n<p *ngIf=\"noConfigs\">You have no configurations try creating one!</p>"

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right; }\n\n.refresh-button {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 15px 0;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_database_service__ = __webpack_require__("./src/app/services/firebase/database.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_edit_config_modal_edit_config_modal_component__ = __webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function ConfigListComponent(firebase, firebaseAuth, database, dialog, router, zone) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this.database = database;
        this.dialog = dialog;
        this.router = router;
        this.zone = zone;
        this.oldPageSize = 10;
        this.noConfigs = true;
        this.tableColumns = ['name', 'actions'];
        this.loading = true;
    }
    ConfigListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.firebaseAuth.auth.currentUser) {
            this.userID = this.firebaseAuth.auth.currentUser.uid;
            this.configCollection = this.firebase
                .doc("users/" + this.userID)
                .collection('configs');
            this.dataSource = new ConfigDataSource(this.configCollection, this.paginator);
            this.database.numberConfigs(function (numConfigs) {
                if (numConfigs === 0) {
                    _this.noConfigs = true;
                }
                else {
                    _this.noConfigs = false;
                }
            });
        }
    };
    ConfigListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.firebaseAuth.auth.currentUser) {
            // Listen for page changes
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
            // Load the configurations
            this.dataSource.loadConfigs();
            // Pass the number of configs to the paginator
            this.database.numberConfigs(function (numConfigs) {
                _this.paginator.length = numConfigs;
            });
            // Listen for config changes
            this.database.configSubject.subscribe(function (created) {
                if (created) {
                    _this.refreshConfigs();
                }
                else {
                }
            });
            // Retrive the active config
            this.database.getActiveConfig(function (activeConfig) {
                _this.activeConfig = activeConfig;
            });
            // Listen for active config changes
            this.database.activeConfigChanged.subscribe(function (newConfigID) {
                _this.activeConfig = newConfigID;
            }, function (err) { return console.error; });
            setTimeout(function (_) {
                // Listen for loading state changes
                _this.dataSource.loading$.subscribe(function (loading) {
                    _this.loading = loading;
                });
            });
        }
    };
    ConfigListComponent.prototype.getDialogWidth = function () {
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
    ConfigListComponent.prototype.refreshConfigs = function () {
        var _this = this;
        this.dataSource.loadConfigs();
        this.database.numberConfigs(function (numConfigs) {
            if (numConfigs === 0) {
                _this.noConfigs = true;
            }
            else {
                _this.noConfigs = false;
            }
        });
    };
    ConfigListComponent.prototype.editConfig = function (configID) {
        var _this = this;
        this.database.editingConfig = configID;
        var dialogWidth = this.getDialogWidth();
        if (dialogWidth) {
            var dialogInstance_1 = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shared_edit_config_modal_edit_config_modal_component__["a" /* EditConfigModalComponent */], {
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * .9 + "px"
            });
            var componentInstance = dialogInstance_1.componentInstance;
            componentInstance.closeCommand.subscribe(function (close) {
                dialogInstance_1.close();
            });
        }
        else {
            this.zone.run(function () {
                _this.router.navigate(['/app/config/edit']);
            });
        }
    };
    ConfigListComponent.prototype.deleteConfig = function (configKey) {
        if (configKey === this.activeConfig) {
            this.setActiveConfig('');
        }
        this.database.deleteConfig(configKey);
    };
    ConfigListComponent.prototype.setActiveConfig = function (configKey) {
        this.database.setActiveConfig(configKey);
    };
    ConfigListComponent.prototype.getActiveConfig = function (configKey) {
        return (this.activeConfig === configKey) ? true : false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MatPaginator */])
    ], ConfigListComponent.prototype, "paginator", void 0);
    ConfigListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-config-list',
            template: __webpack_require__("./src/app/components/tabs/config/config-list/config-list.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/config/config-list/config-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__services_firebase_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["NgZone"]])
    ], ConfigListComponent);
    return ConfigListComponent;
}());

var ConfigDataSource = /** @class */ (function () {
    function ConfigDataSource(configCollection, paginator) {
        this.configCollection = configCollection;
        this.paginator = paginator;
        this.configSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](true);
        this.loading$ = this.loadingSubject.asObservable();
    }
    ConfigDataSource.prototype.calculateStart = function (page, pageSize) {
        return (page ? page * pageSize : 0);
    };
    ConfigDataSource.prototype.connect = function () {
        return this.configSubject.asObservable();
    };
    ConfigDataSource.prototype.disconnect = function () {
        this.configSubject.complete();
        this.loadingSubject.complete();
    };
    ConfigDataSource.prototype.loadConfigs = function (page, pageSize) {
        var _this = this;
        if (page === void 0) { page = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        this.loadingSubject.next(true);
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
            _this
                .configSubject
                .next(data);
            _this.loadingSubject.next(false);
        }, function (err) { return console.error; });
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
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * .9 + "px"
            });
            var componentInstance = dialogInstance_1.componentInstance;
            componentInstance
                .closeCommand
                .subscribe(function (close) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 10px;\">\n  <mat-card class=\"col-4 col-6-sm\">\n    <mat-card-header>\n      <mat-icon mat-card-avatar color=\"accent\">settings_power</mat-icon>\n      <mat-card-title>Active Config</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      {{ activeConfigName }}\n    </mat-card-content>\n  </mat-card>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_database_service__ = __webpack_require__("./src/app/services/firebase/database.service.ts");
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
    function HomeComponent(database) {
        this.database = database;
        this.activeConfigName = 'Loading...';
    }
    /**
     * Handle component initalization
     *
     * @memberof HomeComponent
     */
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.database.userID) {
            this.database.getActiveConfig(function (activeConfig) {
                if (activeConfig) {
                    _this.database.getConfig(activeConfig, function (config) {
                        _this.activeConfigName = config.name;
                    });
                }
                else {
                    _this.activeConfigName = 'No active configuration!';
                }
            });
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/tabs/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_firebase_database_service__["a" /* DatabaseService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_firebase_database_service__ = __webpack_require__("./src/app/services/firebase/database.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__config_config_module__["a" /* ConfigModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_firebase_database_service__["a" /* DatabaseService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__components_tabs_config_config_component__["a" /* ConfigComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shared_new_config_page_new_config_page_component__ = __webpack_require__("./src/app/components/shared/new-config-page/new-config-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_shared_new_rule_stepper_new_rule_stepper_component__ = __webpack_require__("./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shared_edit_config_modal_edit_config_modal_component__ = __webpack_require__("./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_edit_config_page_edit_config_page_component__ = __webpack_require__("./src/app/components/shared/edit-config-page/edit-config-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_un_named_pipe__ = __webpack_require__("./src/app/pipes/un-named.pipe.ts");
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
                __WEBPACK_IMPORTED_MODULE_5__components_shared_new_config_page_new_config_page_component__["a" /* NewConfigPageComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_shared_config_modal_config_modal_component__["a" /* ConfigModalComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_shared_new_rule_stepper_new_rule_stepper_component__["a" /* NewRuleStepperComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_shared_edit_config_modal_edit_config_modal_component__["a" /* EditConfigModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_shared_edit_config_page_edit_config_page_component__["a" /* EditConfigPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_un_named_pipe__["a" /* UnNamedPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["u" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["w" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["o" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSlideToggleModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__components_shared_config_modal_config_modal_component__["a" /* ConfigModalComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_shared_edit_config_modal_edit_config_modal_component__["a" /* EditConfigModalComponent */]
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

/***/ "./src/app/pipes/un-named.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnNamedPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnNamedPipe = /** @class */ (function () {
    function UnNamedPipe() {
    }
    UnNamedPipe.prototype.transform = function (value, args) {
        return (value.length > 0) ? value : 'No Name';
    };
    UnNamedPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'unNamed'
        })
    ], UnNamedPipe);
    return UnNamedPipe;
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

/***/ "./src/app/services/firebase/database.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_config_builder__ = __webpack_require__("./src/app/classes/config-builder.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatabaseService = /** @class */ (function () {
    function DatabaseService(firebase, firebaseAuth) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this._configSubject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.configSubject = this._configSubject.asObservable();
        this._activeConfigChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.activeConfigChanged = this._activeConfigChanged.asObservable();
        if (this.firebaseAuth.auth.currentUser) {
            this.userID = firebaseAuth
                .auth
                .currentUser
                .uid;
            this.userDoc = firebase.doc("users/" + this.userID);
            this.configDocument = firebase.doc("users/" + this.userID + "/userData/config");
            this.configsCollection = this.userDoc.collection('configs');
        }
    }
    DatabaseService.prototype.createConfig = function (configName, firstGroupName, sourceLocation, destinationLocation, firstGroupRule) {
        var _this = this;
        var newConfig = __WEBPACK_IMPORTED_MODULE_2__classes_config_builder__["a" /* ConfigBuilder */].generateNewConfig(configName, firstGroupName, sourceLocation, destinationLocation, firstGroupRule);
        this
            .configsCollection
            .add(newConfig)
            .then(function () {
            _this._configSubject.next(true);
        }, function (err) {
            console.error(err);
            _this._configSubject.next(false);
        });
    };
    DatabaseService.prototype.deleteConfig = function (configID) {
        var _this = this;
        this
            .configsCollection
            .doc(configID)
            .delete()
            .then(function () {
            _this._configSubject.next(true);
        }, function (err) {
            console.error(err);
            _this._configSubject.next(false);
        });
    };
    DatabaseService.prototype.setActiveConfig = function (configID) {
        var _this = this;
        this
            .configDocument
            .set({
            activeConfig: configID
        })
            .then(function () {
            _this._activeConfigChanged.next(configID);
        }, function (err) {
            console.error(err);
            _this._activeConfigChanged.error(err);
        });
    };
    DatabaseService.prototype.updateConfig = function (newConfig) {
        var _this = this;
        this.configsCollection.doc(this.editingConfig).ref.set(newConfig)
            .then(function () {
            _this.editingConfig = '';
            _this._configSubject.next(true);
        }, function (err) { return console.error; });
    };
    DatabaseService.prototype.getConfig = function (configID, cb) {
        this.configsCollection.doc(configID).ref.get().then(function (snapshot) {
            cb(snapshot.data());
        }, function (err) { return console.error; });
    };
    DatabaseService.prototype.getActiveConfig = function (cb) {
        this
            .configDocument
            .ref
            .get()
            .then(function (snapshot) {
            cb(snapshot.data()['activeConfig']);
        }, function (err) { return console.error; });
    };
    DatabaseService.prototype.numberConfigs = function (cb) {
        this
            .configsCollection
            .ref
            .get()
            .then(function (snapshot) {
            cb(snapshot.docs.length);
        });
    };
    DatabaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], DatabaseService);
    return DatabaseService;
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
    else if (data.action === 'cancel') {
        _folderPicked.error(true);
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