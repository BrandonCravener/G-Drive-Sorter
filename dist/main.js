(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/config/config.module": [
		"./src/app/modules/config/config.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/animations.ts":
/*!***************************!*\
  !*** ./src/animations.ts ***!
  \***************************/
/*! exports provided: routerAnimation, fabAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimation", function() { return routerAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fabAnimation", function() { return fabAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeOutIn = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
    }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0
        }))
    ], {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s 0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })), {
        optional: true
    })
];
var slideLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
    }), {
        optional: false
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }))
        ], {
            optional: false
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)'
            }))
        ], {
            optional: false
        })
    ])
];
var slideRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%'
    }), {
        optional: false
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(-100%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }))
        ], {
            optional: false
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0%)'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(100%)'
            }))
        ], {
            optional: false
        })
    ])
];
var slideDown = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: 'fixed',
        width: '100%',
        height: '100%'
    }), {
        optional: false
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(100%)',
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%)',
                opacity: 1
            }))
        ], {
            optional: false
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(0%)',
                opacity: 1
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(100%)',
                opacity: 0
            }))
        ], {
            optional: false
        })
    ])
];
/**
 * Animation for switching between routes
 */
var routerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    // Landing transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => landing', fadeOutIn),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('landing => appHome', fadeOutIn),
    // Tabs transitions
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appConfig', slideLeft),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appHome', slideRight),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appSettings', slideLeft),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appHome', slideRight),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appSettings', slideLeft),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appConfig', slideRight),
    // Small screen pages
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appConfigEdit', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigEdit => appConfig', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appConfigCreate', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigCreate => appConfig', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfig => appConfigPresets', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigPresets => appConfig', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appConfigEdit', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigEdit => appSettings', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appConfigCreate', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigCreate => appSettings', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appSettings => appConfigPresets', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigPresets => appSettings', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appConfigEdit', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigEdit => appHome', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appConfigCreate', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigCreate => appHome', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appHome => appConfigPresets', slideDown),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('appConfigPresets => appHome', slideDown)
]);
var fabAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('createConfigFABState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(0)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.1s'))
]);


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"loader\" class=\"loading-overlay\" [class.hidden]=\"loaded\">\n  <div class=\"square-holder\">\n    <div class=\"square-1\"></div>\n    <div class=\"square-2\"></div>\n    <div class=\"square-3\"></div>\n    <div class=\"square-4\"></div>\n  </div>\n</div>\n<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div></div>\n    <div>\n      <img class=\"toolbar-logo\" src=\"assets/images/icon.png\" alt=\"G-Drive Sorter Logo\">\n    </div>\n    <div>\n      <mat-menu #appMenu=\"matMenu\">\n        <button mat-menu-item (click)=\"signOut()\">Sign Out</button>\n      </mat-menu>\n      <button *ngIf=\"authenticated\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button *ngIf=\"!authenticated\" mat-button (click)=\"signIn()\">\n        Sign In\n      </button>\n    </div>\n  </mat-toolbar-row>\n  <mat-toolbar-row *ngIf=\"authenticated\">\n    <nav mat-tab-nav-bar color=\"accent\">\n      <a mat-tab-link *ngFor=\"let link of tabLinks\" [routerLink]=\"link.path\" routerLinkActive #rla=\"routerLinkActive\" [active]=\"rlaSafe&&rla.isActive\">\n        {{ link.label }}\n      </a>\n    </nav>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div [class.container]=\"authenticated\" [@routerTransition]=\"getRouteState(route)\">\n  <router-outlet #route=\"outlet\"></router-outlet>\n</div>\n<button class=\"new-config-button\" matTooltip=\"Create Config\" matTooltipPosition=\"left\" mat-fab color=\"accent\" [@createConfigFABState]=\"createConfigButtonState\"\n  (click)=\"openConfigModalFunc()\">\n  <mat-icon aria-label=\"Create new config button.\">add</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar > mat-toolbar-row:first-child {\n  justify-content: center; }\n  mat-toolbar > mat-toolbar-row:first-child div {\n    flex: 1; }\n  mat-toolbar > mat-toolbar-row:first-child div:nth-child(2) {\n    text-align: center; }\n  mat-toolbar > mat-toolbar-row:first-child div:nth-child(3) {\n    text-align: right; }\n  nav.mat-tab-nav-bar {\n  width: 100%; }\n  .toolbar-logo {\n  width: 65px; }\n  ::ng-deep .mat-tab-links {\n  display: flex; }\n  .mat-tab-link {\n  flex: 1 1 auto; }\n  .new-config-button {\n  right: 20px;\n  bottom: 20px;\n  position: fixed; }\n  .square-holder {\n  top: 50%;\n  z-index: 9999;\n  position: fixed;\n  min-width: 100%;\n  max-height: 10vw;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .loading-overlay .square-1, .loading-overlay .square-2, .loading-overlay .square-3, .loading-overlay .square-4 {\n  width: 10vw;\n  height: 10vw;\n  display: inline-block;\n  background-color: #2196f3;\n  -webkit-animation: squareAnimation 1.5s ease-in-out;\n          animation: squareAnimation 1.5s ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n  .loading-overlay {\n  width: 100%;\n  height: 100%;\n  z-index: 9998;\n  position: fixed;\n  transition: ease-out 1s;\n  background-color: #4caf50; }\n  .loading-overlay .square-1 {\n    margin-left: 15vw; }\n  .loading-overlay .square-2 {\n    margin-left: 10vw;\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s; }\n  .loading-overlay .square-3 {\n    margin-left: 10vw;\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n  .loading-overlay .square-4 {\n    margin-left: 10vw;\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s; }\n  .loading-overlay.hidden {\n  opacity: 0; }\n  @-webkit-keyframes squareAnimation {\n  0% {\n    -webkit-transform: translateY(0) rotate(0);\n            transform: translateY(0) rotate(0); }\n  50% {\n    -webkit-transform: translateY(-10vw) rotate(120deg);\n            transform: translateY(-10vw) rotate(120deg); }\n  100% {\n    -webkit-transform: translateY(0) rotate(360deg);\n            transform: translateY(0) rotate(360deg); } }\n  @keyframes squareAnimation {\n  0% {\n    -webkit-transform: translateY(0) rotate(0);\n            transform: translateY(0) rotate(0); }\n  50% {\n    -webkit-transform: translateY(-10vw) rotate(120deg);\n            transform: translateY(-10vw) rotate(120deg); }\n  100% {\n    -webkit-transform: translateY(0) rotate(360deg);\n            transform: translateY(0) rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/animations.ts");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        this.openConfigModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loaderRemoved = false;
        this.tabsEnabled = true;
        this.loaded = false;
        this.rlaSafe = false;
        this.createConfigButtonState = 'inactive';
        this.openConfigModal$ = this.openConfigModal.asObservable();
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
                    discoveryDocs: [
                        'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'
                    ],
                    scope: 'https://www.googleapis.com/auth/drive'
                }, function () {
                    console.debug('Google initalized.');
                });
                _this.google.authState$.subscribe(function (state) {
                    if (!_this.loaderRemoved) {
                        _this.loaded = true;
                        setTimeout(function () {
                            document.getElementById('loader').remove();
                            _this.loaderRemoved = true;
                        }, 500);
                    }
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
        var _this = this;
        this.rlaSafe = true;
        // Listen for route changes
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                if (event.url === '/app/config') {
                    _this.createConfigButtonState = 'active';
                }
                else {
                    _this.createConfigButtonState = 'inactive';
                }
                if (event.url === '/app/config/create' ||
                    event.url === '/app/config/presets' ||
                    event.url === '/app/config/edit') {
                    _this.tabsEnabled = false;
                }
                else {
                    _this.tabsEnabled = true;
                }
            }
        });
    };
    AppComponent.prototype.signOut = function () {
        this.google.signOut();
    };
    AppComponent.prototype.signIn = function () {
        this.google.signIn();
    };
    AppComponent.prototype.openConfigModalFunc = function () {
        this.openConfigModal.next(true);
    };
    /**
     * Gets the current route information.
     *
     * @param {any} outlet The route
     * @returns
     * @memberof AppComponent
     */
    AppComponent.prototype.getRouteState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_services_google_google_service__WEBPACK_IMPORTED_MODULE_3__["GoogleService"]],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_2__["routerAnimation"], _animations__WEBPACK_IMPORTED_MODULE_2__["fabAnimation"]]
        }),
        __metadata("design:paramtypes", [_services_google_google_service__WEBPACK_IMPORTED_MODULE_3__["GoogleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _modules_authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/authenticated/authenticated.module */ "./src/app/modules/authenticated/authenticated.module.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modules_config_config_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/config/config.module */ "./src/app/modules/config/config.module.ts");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/auth/unauthenticated/unauthenticated.component */ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_18__["UnauthenticatedComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["appRoutes"]),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"],
                _modules_config_config_module__WEBPACK_IMPORTED_MODULE_9__["ConfigModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _modules_authenticated_authenticated_module__WEBPACK_IMPORTED_MODULE_5__["AuthenticatedModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_1__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase)
            ],
            providers: [
                _services_google_google_service__WEBPACK_IMPORTED_MODULE_11__["GoogleService"],
                _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"],
                _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["PreventAuthGuardService"],
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/tabs/home/home.component */ "./src/app/components/tabs/home/home.component.ts");
/* harmony import */ var _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabs/settings/settings.component */ "./src/app/components/tabs/settings/settings.component.ts");
/* harmony import */ var _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/unauthenticated/unauthenticated.component */ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts");




var appRoutes = [
    {
        path: '',
        component: _components_auth_unauthenticated_unauthenticated_component__WEBPACK_IMPORTED_MODULE_3__["UnauthenticatedComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["PreventAuthGuardService"]],
        data: {
            state: 'landing'
        }
    },
    {
        path: 'app/config',
        loadChildren: './modules/config/config.module#ConfigModule'
    },
    {
        path: 'app/home',
        component: _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appHome'
        }
    },
    {
        path: 'app/settings',
        component: _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__["AuthGuardService"]],
        data: {
            state: 'appSettings'
        }
    },
    {
        path: '**',
        redirectTo: ''
    }
];


/***/ }),

/***/ "./src/app/classes/config-builder.ts":
/*!*******************************************!*\
  !*** ./src/app/classes/config-builder.ts ***!
  \*******************************************/
/*! exports provided: ConfigBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigBuilder", function() { return ConfigBuilder; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var ConfigBuilder = /** @class */ (function () {
    function ConfigBuilder() {
    }
    ConfigBuilder.generateNewConfig = function (configName, firstGroupName, sourceFolder, destinationFolder, createFolder, firstGroupRule) {
        var configHolder = {
            name: configName,
            groups: [
                {
                    id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
                    name: firstGroupName,
                    source: sourceFolder,
                    rules: [firstGroupRule]
                }
            ],
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
        };
        if (createFolder) {
            configHolder.groups[0].createFolder = createFolder;
        }
        else {
            configHolder.groups[0].destination = destinationFolder;
        }
        return configHolder;
    };
    ConfigBuilder.addGroup = function (config, newGroupName, newGroupDestination, newGroupSource, firstGroupRule) {
        var localConfig = config;
        localConfig.groups.push({
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
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
        if (!config.name || !config.groups || config.name.length <= 0) {
            valid = false;
        }
        config.groups.forEach(function (group) {
            if (!group.id ||
                !group.source.folderID ||
                !group.name ||
                !group.rules ||
                group.name.length <= 0) {
                valid = false;
            }
            if (!group.createFolder) {
                valid = group.destination.folderID ? true : false;
            }
            group.rules.forEach(function (rule) {
                if (!rule.classifier ||
                    !rule.constraint ||
                    !rule.data ||
                    !rule.id ||
                    !rule.name ||
                    rule.name.length <= 0) {
                    valid = false;
                }
            });
        });
        return valid;
    };
    ConfigBuilder.folderNameBuilder = function (createFolderConfig) {
        var outputString = '';
        switch (createFolderConfig.prefix.type) {
            case 'text':
                outputString += createFolderConfig.prefix.value;
                break;
            case 'date':
                outputString += Date();
                break;
        }
        switch (createFolderConfig.name.type) {
            case 'text':
                outputString += " " + createFolderConfig.name.value;
                break;
            case 'date':
                outputString += " " + Date();
                break;
        }
        switch (createFolderConfig.suffix.type) {
            case 'text':
                outputString += " " + createFolderConfig.suffix.value;
                break;
            case 'date':
                outputString += " " + Date();
                break;
        }
        return outputString;
    };
    ConfigBuilder.configFromGroup = function (groups, name) {
        return {
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
            name: name,
            groups: groups
        };
    };
    return ConfigBuilder;
}());



/***/ }),

/***/ "./src/app/classes/drive-query-builder.ts":
/*!************************************************!*\
  !*** ./src/app/classes/drive-query-builder.ts ***!
  \************************************************/
/*! exports provided: DriveMimeType, DriveQueryBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveMimeType", function() { return DriveMimeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveQueryBuilder", function() { return DriveQueryBuilder; });
/**
 * A enumerable of Google Drive file types
 *
 * @export
 * @enum {number}
 */
var DriveMimeType;
(function (DriveMimeType) {
    DriveMimeType["audio"] = "application/vnd.google-apps.audio";
    DriveMimeType["document"] = "application/vnd.google-apps.document";
    DriveMimeType["drawing"] = "application/vnd.google-apps.drawing";
    DriveMimeType["file"] = "application/vnd.google-apps.file";
    DriveMimeType["folder"] = "application/vnd.google-apps.folder";
    DriveMimeType["form"] = "application/vnd.google-apps.form";
    DriveMimeType["fustiontable"] = "application/vnd.google-apps.fusiontable";
    DriveMimeType["map"] = "application/vnd.google-apps.map";
    DriveMimeType["photo"] = "application/vnd.google-apps.photo";
    DriveMimeType["presentation"] = "application/vnd.google-apps.presentation";
    DriveMimeType["script"] = "application/vnd.google-apps.script";
    DriveMimeType["site"] = "application/vnd.google-apps.site";
    DriveMimeType["spreadsheet"] = "application/vnd.google-apps.spreadsheet";
    DriveMimeType["unknown"] = "application/vnd.google-apps.unknown";
    DriveMimeType["video"] = "application/vnd.google-apps.video";
    DriveMimeType["thirdParty"] = "application/vnd.google-apps.drive-sdk";
})(DriveMimeType || (DriveMimeType = {}));
/**
 * A utility class to build Google Drive query's
 *
 * @export
 * @class DriveQueryBuilder
 */
var DriveQueryBuilder = /** @class */ (function () {
    /**
     * Creates an instance of DriveQueryBuilder.
     * @param {string} parentFolderID The ID of the folder to search in
     * @param {boolean} disableTrashed Whether or not to include file in trash
     * @memberof DriveQueryBuilder
     */
    function DriveQueryBuilder(parentFolderID, disableTrashed) {
        /**
         * The current generated query
         *
         * @private
         * @type {string}
         * @memberof DriveQueryBuilder
         */
        this.query = '';
        if (parentFolderID) {
            this.query += "'" + parentFolderID + "' in parents";
        }
        if (disableTrashed) {
            this.query += ' and trashed=false';
        }
    }
    /**
     * Returns the current query
     *
     * @returns {string} The built query
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.get = function () {
        return this.query;
    };
    /**
     * Add a file type to ignore to the query
     *
     * @param {DriveMimeType} mimeType The file type to ignore
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.excludeType = function (mimeType) {
        this.query += " and mimeType != '" + mimeType + "'";
        return this;
    };
    /**
     * Add a file type to require to the query
     *
     * @param {DriveMimeType} mimeType The file type to require
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.requiresType = function (mimeType) {
        this.query += " and mimeType = '" + mimeType + "'";
        return this;
    };
    /**
     * Add a name content's requirement to the query
     *
     * @param {string} string The string the name needs
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.nameContains = function (string) {
        this.query += " and name contains '" + string + "'";
        return this;
    };
    /**
     * Add a name content's to exclude from the query
     *
     * @param {string} string
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.nameExcludes = function (string) {
        this.query += " and not name contains '" + string + "'";
        return this;
    };
    /**
     * Adds a owner requirement to the query
     *
     * @param {string} email The owners email address
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.hasOwner = function (email) {
        this.query += " and " + email + " in owners";
        return this;
    };
    /**
     * Adds a owner exclusion to the query
     *
     * @param {string} email The owners email address to exclude
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.excludesOwner = function (email) {
        this.query += " and not " + email + " in  owners";
        return this;
    };
    /**
     * Require the file to be created after the supplied date
     *
     * @param {Date} date The date the file should be created after
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.createdAfter = function (date) {
        this.query += " and createdTime >= '" + date.toISOString().split('.')[0] + "'";
        return this;
    };
    /**
     * Require the file to be created before the supplied date
     *
     * @param {Date} date The date the file should be created before
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.createdBefore = function (date) {
        this.query += " and createdTime <= '" + date.toISOString().split('.')[0] + "'";
        return this;
    };
    /**
     * Require the file to be modified after the supplied date
     *
     * @param {Date} date The date the file should be modified after
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.modifiedAfter = function (date) {
        this.query += " and modifiedTime >= '" + date.toISOString().split('.')[0] + "'";
        return this;
    };
    /**
     * Require the file to be modified before the supplied date
     *
     * @param {Date} date The date the file should be modified before
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.modifiedBefore = function (date) {
        this.query += " and modifiedTime <= '" + date.toISOString().split('.')[0] + "'";
        return this;
    };
    /**
     * Require the file to be opened after the supplied date
     *
     * @param {Date} date The date the file beeds to be opened after
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.openedAfter = function (date) {
        this.query += " and viewedByMeTime >= '" + date.toISOString().split('.')[0] + "'";
        return this;
    };
    /**
     * Require the file to be opened before the supplied date
     *
     * @param {Date} date The date the file beeds to be opened before
     * @memberof DriveQueryBuilder
     */
    DriveQueryBuilder.prototype.openedBefore = function (date) {
        this.query += " and viewedByMeTime <= '" + date.toISOString().split('.')[0] + "'";
        return this;
    };
    return DriveQueryBuilder;
}());



/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/unauthenticated/unauthenticated.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"parallax\">\n    <h1>G-Drive Sorter</h1>\n    <h3>An organized Google Drive™ has never been easier</h3>\n    <button (click)=\"login()\" mat-raised-button color=\"accent\">Get Organized</button>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"usage-points row\">\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">view_list</i></h1>\n      <h2 class=\"center\"><b>Effectively Sort Files</b></h2>\n      <p>Sorting your drive only requires a quick visit to this website. And we do the rest of the work for you!</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">accessibility</i></h1>\n      <h2 class=\"center\"><b>Simplistic Use</b></h2>\n      <p>Preset configurations and a simplistic user interface makes the G-Drive sorter suitable for all Google Drive users.</p>\n    </div>\n    <div class=\"col-4 col-12-sm\">\n      <h1 class=\"center\"><i class=\"teal-text large material-icons\">art_track</i></h1>\n      <h2 class=\"center\"><b>Fully Customizable</b></h2>\n      <p>Fully customizable configurations that sorts all Google Drive files based on type, creation date, name, current owner, and much more.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/unauthenticated/unauthenticated.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax {\n  height: 50%;\n  padding: 10vw;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-image: url('messy_files.jpg'); }\n\n.parallax > * {\n  color: white; }\n\n.usage-points h1 i {\n  font-size: 80px; }\n\n.container {\n  width: 96%;\n  max-width: unset; }\n\n.usage-points p {\n  font-size: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/components/auth/unauthenticated/unauthenticated.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/unauthenticated/unauthenticated.component.ts ***!
  \******************************************************************************/
/*! exports provided: UnauthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthenticatedComponent", function() { return UnauthenticatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthenticated',
            template: __webpack_require__(/*! ./unauthenticated.component.html */ "./src/app/components/auth/unauthenticated/unauthenticated.component.html"),
            styles: [__webpack_require__(/*! ./unauthenticated.component.scss */ "./src/app/components/auth/unauthenticated/unauthenticated.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"]])
    ], UnauthenticatedComponent);
    return UnauthenticatedComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/config-modal/config-modal.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Create New Config</h3>\n  <h3 *ngIf=\"isPage\">Create New Config</h3>\n  <div mat-dialog-content [class.overflow-limit]=\"!isPage\">\n    <form [formGroup]=\"newConfig\">\n      <mat-accordion>\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Config Name\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The name of the new configuration.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\" [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Name</mat-label>\n              <input matInput formControlName=\"newConfigNameControl\" required>\n              <mat-error>Please a config name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [expanded]=\"step === 1\" [disabled]=\"!checkValidation(0)\" (opened)=\"setStep(1)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Name\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The new configuration's inital group name.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <mat-form-field class=\"full-width\" [floatLabel]=\"newConfig.value.floatLabel\">\n              <mat-label>Group Name</mat-label>\n              <input matInput formControlName=\"newGroupNameControl\" required>\n              <mat-error>Please enter a inital group name!</mat-error>\n            </mat-form-field>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n        <mat-expansion-panel [disabled]=\"!checkValidation(1)\" [expanded]=\"step === 2\" (opened)=\"setStep(2)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Group Locations\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              Where all files matching group rules will go.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent class=\"overflow-limit\">\n            <div class=\"full-width\">\n              <mat-form-field style=\"width: 70%;\">\n                <input matInput type=\"text\" placeholder=\"From\" [value]=\"source.name\" disabled required/>\n                <button mat-button matSuffix mat-icon-button aria-label=\"Pick From Folder\" [disabled]=\"folderButtonSourceDisabled\" (click)=\"openFolderPicker('source')\">\n                  <mat-icon>folder</mat-icon>\n                </button>\n              </mat-form-field>\n              <mat-slide-toggle (change)=\"rootToggleChange($event, 'source')\">My Drive</mat-slide-toggle>\n            </div>\n            <div>\n              <mat-slide-toggle (change)=\"createToggleChange($event)\">Create Folder</mat-slide-toggle>\n              <app-folder-creation [class.hidden]=\"!creatingFolder\"></app-folder-creation>\n              <div class=\"full-width\" [class.hidden]=\"creatingFolder\">\n                <div class=\"full-width\">\n                  <mat-form-field style=\"width: 70%;\">\n                    <input matInput type=\"text\" placeholder=\"To\" [value]=\"destination.name\" disabled required/>\n                    <button mat-button matSuffix mat-icon-button aria-label=\"Pick To Folder\" [disabled]=\"folderButtonDestinationDisabled\" (click)=\"openFolderPicker('destination')\">\n                      <mat-icon>folder</mat-icon>\n                    </button>\n                  </mat-form-field>\n                  <mat-slide-toggle (change)=\"rootToggleChange($event, 'destination')\">My Drive</mat-slide-toggle>\n                </div>\n              </div>\n            </div>\n          </ng-template>\n          <mat-action-row>\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n          </mat-action-row>\n        </mat-expansion-panel>\n        <mat-expansion-panel [class.overflow-limit]=\"!isPage\" [disabled]=\"!checkValidation(2)\" [expanded]=\"step === 3\" (opened)=\"setStep(3)\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              First Rule\n            </mat-panel-title>\n            <mat-panel-description *ngIf=\"!isPage\">\n              The new configuration's inital group's first rule.\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent>\n            <app-new-rule-stepper (valueChange)=\"stepperFinished($event)\"></app-new-rule-stepper>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n      </mat-accordion>\n    </form>\n    <br>\n    <div mat-dialog-actions>\n      <button mat-button (click)=\"create()\" [disabled]=\"!finished\">Create</button>\n      <button mat-button (click)=\"close()\">Cancel</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/config-modal/config-modal.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflow-limit {\n  max-height: 60vh;\n  overflow-y: auto; }\n\n.full-width {\n  width: 100%; }\n\n.hidden {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/shared/config-modal/config-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/config-modal/config-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConfigModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModalComponent", function() { return ConfigModalComponent; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _folder_creation_folder_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../folder-creation/folder-creation.component */ "./src/app/components/shared/folder-creation/folder-creation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConfigModalComponent = /** @class */ (function () {
    function ConfigModalComponent(zone, router, snackbar, google, formBuilder, database, firebase, firebaseAuth) {
        this.zone = zone;
        this.router = router;
        this.snackbar = snackbar;
        this.google = google;
        this.formBuilder = formBuilder;
        this.database = database;
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this._closeCommand = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
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
        this.creatingFolder = false;
        this.folderButtonSourceDisabled = false;
        this.closeCommand = this._closeCommand.asObservable();
        this.folderButtonDestinationDisabled = false;
    }
    ConfigModalComponent.prototype.ngOnInit = function () {
        this.newConfig = this.formBuilder.group({
            floatLabel: 'auto',
            newConfigNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            newGroupNameControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
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
                if (this.creatingFolder) {
                    if (this.folderComponent.value) {
                        if (this.source.folderID === undefined) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                    else {
                        return false;
                    }
                }
                else {
                    if (this.source.folderID === undefined ||
                        this.destination.folderID === undefined) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            case 3:
                return this.rule === undefined ? false : true;
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
            else if (folderType === 'source') {
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
        else {
            this.snackbar.open('Please complete all fields!', 'OK', {
                duration: 3000
            });
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
            else if (folderType === 'destination') {
                this.folderButtonDestinationDisabled = true;
            }
            this[folderType].folderID = 'root';
            this[folderType].name = 'My Drive';
        }
        else {
            if (folderType === 'source') {
                this.folderButtonSourceDisabled = false;
            }
            else if (folderType === 'destination') {
                this.folderButtonDestinationDisabled = false;
            }
            this[folderType].folderID = undefined;
            this[folderType].name = '';
        }
    };
    ConfigModalComponent.prototype.createToggleChange = function (event) {
        if (event.checked) {
            this.creatingFolder = true;
        }
        else {
            this.creatingFolder = false;
            this.folderComponent.reset();
        }
    };
    ConfigModalComponent.prototype.create = function () {
        if (this.checkAllValidation()) {
            this.database.createConfig(this.newConfig.get('newConfigNameControl').value, this.newConfig.get('newGroupNameControl').value, this.source, this.destination, this.folderComponent.value, this.rule);
            this._closeCommand.next(true);
        }
        else {
            this.finished = false;
        }
    };
    ConfigModalComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_folder_creation_folder_creation_component__WEBPACK_IMPORTED_MODULE_4__["FolderCreationComponent"]),
        __metadata("design:type", _folder_creation_folder_creation_component__WEBPACK_IMPORTED_MODULE_4__["FolderCreationComponent"])
    ], ConfigModalComponent.prototype, "folderComponent", void 0);
    ConfigModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-config-modal',
            template: __webpack_require__(/*! ./config-modal.component.html */ "./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__(/*! ./config-modal.component.scss */ "./src/app/components/shared/config-modal/config-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_6__["GoogleService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]])
    ], ConfigModalComponent);
    return ConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-modal/edit-config-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"configLoaded | async; else loadingConfig\">\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Editing Config - {{ config.name | unNamed }}</h3>\n  <h3 *ngIf=\"isPage\">Editing Config - {{ config.name | unNamed }}</h3>\n  <div mat-dialog-content>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Config Name\" [(ngModel)]=\"config.name\" required>\n    </mat-form-field>\n    <h4>\n      Group's\n      <button mat-icon-button class=\"right\" color=\"primary\" matTooltip=\"Add Group\" (click)=\"addGroup()\">\n        <mat-icon aria-label=\"Add Group\">add</mat-icon>\n      </button>\n    </h4>\n    <div style=\"padding: 10px 16px;\" class=\"overflow-limit\">\n        <mat-expansion-panel  *ngFor=\"let group of config.groups\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              {{ group.name | unNamed }}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <ng-template matExpansionPanelContent class=\"overflow-limit\">\n            <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"Group Name\" [(ngModel)]=\"group.name\" required>\n            </mat-form-field>\n            <div class=\"full-width\">\n              <mat-form-field style=\"width: 70%;\">\n                <input matInput type=\"text\" placeholder=\"From\" [value]=\"group.source.name\" disabled required/>\n                <button mat-button matSuffix mat-icon-button aria-label=\"Pick From Folder\" [disabled]=\"group.source.folderID === 'root'\" (click)=\"openFolderPicker(group.id ,'source')\">\n                  <mat-icon>folder</mat-icon>\n                </button>\n              </mat-form-field>\n              <mat-slide-toggle (change)=\"rootToggleChange($event, 'source', group.id)\" [checked]=\"group.source.folderID === 'root'\">My Drive</mat-slide-toggle>\n            </div>\n            <div>\n              <mat-slide-toggle (change)=\"createFolderToggleChange(group.id, $event)\" [checked]=\"group.createFolder\">Create Folder</mat-slide-toggle>\n              <app-folder-creation *ngIf=\"group.createFolder\" [inputFolder]=\"group.createFolder\" (valueChange)=\"createFolderChange(group.id, $event)\"></app-folder-creation>\n              <div class=\"full-width\" *ngIf=\"!group.createFolder\">\n                <div class=\"full-width\">\n                  <mat-form-field style=\"width: 70%;\">\n                    <input matInput type=\"text\" placeholder=\"To\" [value]=\"group.destination.name\" disabled required/>\n                    <button mat-button matSuffix mat-icon-button aria-label=\"Pick To Folder\" [disabled]=\"group.destination.folderID === 'root'\" (click)=\"openFolderPicker(group.id, 'destination')\">\n                      <mat-icon>folder</mat-icon>\n                    </button>\n                  </mat-form-field>\n                  <mat-slide-toggle (change)=\"rootToggleChange($event, 'destination', group.id)\" [checked]=\"group.destination.folderID === 'root'\">My Drive</mat-slide-toggle>\n                </div>\n              </div>\n            </div>\n            <h5>\n              Rule's\n              <button mat-icon-button class=\"right\" color=\"accent\" matTooltip=\"Add Rule\" (click)=\"addRule(group.id)\">\n                <mat-icon aria-label=\"Add Rule\">add</mat-icon>\n              </button>\n            </h5>\n            <mat-expansion-panel [expanded]=\"editingRuleID === rule.id\" (opened)=\"editingRuleID = rule.id\" *ngFor=\"let rule of group.rules\">\n              <mat-expansion-panel-header>\n                <mat-panel-title>\n                  {{ rule.name | unNamed }}\n                </mat-panel-title>\n              </mat-expansion-panel-header>\n              <ng-template matExpansionPanelContent>\n                <app-new-rule-stepper (valueChange)=\"ruleChanged($event, rule.id, group.id)\" [reset]=\"true\" [inputRule]=\"rule\"></app-new-rule-stepper>\n                <mat-action-row>\n                  <button mat-button color=\"warn\" (click)=\"removeRule(group.id, rule.id)\" [disabled]=\"group.rules.length < 2\">Remove Rule</button>\n                </mat-action-row>\n              </ng-template>\n            </mat-expansion-panel>\n            <mat-action-row>\n              <button mat-button color=\"warn\" (click)=\"removeGroup(group.id)\" [disabled]=\"config.groups.length < 2\">Remove Group</button>\n            </mat-action-row>\n          </ng-template>\n        </mat-expansion-panel>\n    </div>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button [disabled]=\"!valid\" (click)=\"done()\">Done</button>\n    <button mat-button (click)=\"close()\">Cancel</button>\n  </div>\n</div>\n<ng-template #loadingConfig>\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</ng-template>"

/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%; }\n\n.right {\n  float: right; }\n\n.overflow-limit {\n  max-height: 40vh;\n  overflow-y: auto; }\n\n.hidden {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: EditConfigModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConfigModalComponent", function() { return EditConfigModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_config_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../classes/config-builder */ "./src/app/classes/config-builder.ts");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        this._closeCommand = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.valid = true;
        this.closeCommand = this._closeCommand.asObservable();
    }
    EditConfigModalComponent.prototype.getGroupIndex = function (groupID) {
        return this.config.groups.findIndex(function (group) {
            return group.id === groupID;
        });
    };
    EditConfigModalComponent.prototype.getRuleIndex = function (groupID, ruleID) {
        return this.config.groups[this.getGroupIndex(groupID)].rules.findIndex(function (rule) {
            return rule.id === ruleID;
        });
    };
    EditConfigModalComponent.prototype.verifyValidation = function () {
        return _classes_config_builder__WEBPACK_IMPORTED_MODULE_1__["ConfigBuilder"].verifyConfig(this.config);
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
        var newConfigUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
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
        var newRuleUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        this.config.groups[this.getGroupIndex(groupID)].rules.push({
            id: newRuleUUID,
            name: ''
        });
        this.editingRuleID = newRuleUUID;
        this.valid = false;
    };
    EditConfigModalComponent.prototype.ruleChanged = function (newRule, ruleID, groupID) {
        this.config.groups[this.getGroupIndex(groupID)].rules[this.getRuleIndex(groupID, ruleID)] = newRule;
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
    EditConfigModalComponent.prototype.removeGroup = function (groupID) {
        this.config.groups.splice(this.getGroupIndex(groupID), 1);
        this.valid = this.verifyValidation();
    };
    EditConfigModalComponent.prototype.removeRule = function (groupID, ruleID) {
        this.config.groups[this.getGroupIndex(groupID)].rules.splice(this.getRuleIndex(groupID, ruleID), 1);
        this.valid = this.verifyValidation();
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
    EditConfigModalComponent.prototype.createFolderToggleChange = function (groupID, event) {
        var groupIndex = this.getGroupIndex(groupID);
        if (event.checked) {
            delete this.config.groups[groupIndex].destination;
            this.config.groups[groupIndex].createFolder = {
                parent: {
                    folderID: undefined,
                    name: null
                },
                prefix: {
                    type: null,
                    value: ''
                },
                name: {
                    type: null,
                    value: ''
                },
                suffix: {
                    type: null,
                    value: ''
                }
            };
        }
        else {
            delete this.config.groups[groupIndex].createFolder;
            this.config.groups[groupIndex].destination = {
                folderID: undefined,
                name: null
            };
        }
    };
    EditConfigModalComponent.prototype.createFolderChange = function (groupID, event) {
        var groupIndex = this.getGroupIndex(groupID);
        this.config.groups[groupIndex].createFolder = event;
    };
    EditConfigModalComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    EditConfigModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-config-modal',
            template: __webpack_require__(/*! ./edit-config-modal.component.html */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-config-modal.component.scss */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_4__["GoogleService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], EditConfigModalComponent);
    return EditConfigModalComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/edit-config-page/edit-config-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditConfigPageComponent", function() { return EditConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-config-modal/edit-config-modal.component */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-config-page',
            template: __webpack_require__(/*! ../edit-config-modal/edit-config-modal.component.html */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.html"),
            styles: [__webpack_require__(/*! ../edit-config-modal/edit-config-modal.component.scss */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.scss")]
        })
    ], EditConfigPageComponent);
    return EditConfigPageComponent;
}(_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_1__["EditConfigModalComponent"]));



/***/ }),

/***/ "./src/app/components/shared/folder-creation/folder-creation.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/folder-creation/folder-creation.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel [expanded]=\"!finished\" (opened)=\"finished = false\">\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Folder Creation\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <div class=\"full-width overflow-limit\" [class.hidden]=\"!creatingFolder\">\n    <div class=\"full-width\">\n      <mat-form-field style=\"width: 70%;\">\n        <input matInput type=\"text\" placeholder=\"Parent\" [value]=\"createFolder.parent.name\" disabled required/>\n        <button mat-button matSuffix mat-icon-button aria-label=\"Pick Parent Folder\" [disabled]=\"createFolder.parent.folderID === 'root' || parentFolderIsRoot\" (click)=\"openFolderPicker()\">\n          <mat-icon>folder</mat-icon>\n        </button>\n      </mat-form-field>\n      <mat-slide-toggle (change)=\"rootToggleChange($event)\" [checked]=\"createFolder.parent.folderID === 'root' || parentFolderIsRoot\">My Drive</mat-slide-toggle>\n    </div>\n    <div class=\"row\">\n      <mat-form-field class=\"col-3 col-12-sm\">\n        <mat-select placeholder=\"Prefix\" [(ngModel)]=\"createFolder.prefix.type\">\n          <mat-option *ngFor=\"let option of namingOptions\" [value]=\"option.value\">{{ option.name }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"col-3 col-12-sm\">\n        <mat-select placeholder=\"Name\" [(ngModel)]=\"createFolder.name.type\">\n          <mat-option *ngFor=\"let option of namingOptions\" [value]=\"option.value\">{{ option.name }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"col-3 col-12-sm\">\n        <mat-select placeholder=\"Suffix\" [(ngModel)]=\"createFolder.suffix.type\">\n          <mat-option *ngFor=\"let option of namingOptions\" [value]=\"option.value\">{{ option.name }}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <mat-form-field class=\"col-3 col-12-sm\">\n        <input matInput placeholder=\"Prefix Text\" [(ngModel)]=\"createFolder.prefix.value\" [disabled]=\"createFolder.prefix.type !== 'text'\">\n      </mat-form-field>\n      <mat-form-field class=\"col-3 col-12-sm\">\n        <input matInput placeholder=\"Name Text\" [(ngModel)]=\"createFolder.name.value\" [disabled]=\"createFolder.name.type !== 'text'\">\n      </mat-form-field>\n      <mat-form-field class=\"col-3 col-12-sm\">\n        <input matInput placeholder=\"Suffix Text\" [(ngModel)]=\"createFolder.suffix.value\" [disabled]=\"createFolder.suffix.type !== 'text'\">\n      </mat-form-field>\n    </div>\n  </div>\n  <mat-action-row>\n    <button mat-button color=\"primary\" (click)=\"done()\">Done</button>\n  </mat-action-row>\n</mat-expansion-panel>"

/***/ }),

/***/ "./src/app/components/shared/folder-creation/folder-creation.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/folder-creation/folder-creation.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/folder-creation/folder-creation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/folder-creation/folder-creation.component.ts ***!
  \********************************************************************************/
/*! exports provided: FolderCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FolderCreationComponent", function() { return FolderCreationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FolderCreationComponent = /** @class */ (function () {
    function FolderCreationComponent(google // private snackbar: MatSnackBar
    ) {
        this.google = google; // private snackbar: MatSnackBar
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.valueAttributes = ['prefix', 'name', 'suffix'];
        this.namingOptions = [
            {
                name: 'Text',
                value: 'text'
            },
            {
                name: 'Sorting Date',
                value: 'date'
            },
            {
                name: 'None',
                value: 'none'
            }
        ];
        this.createFolder = {
            parent: {
                folderID: undefined,
                name: null
            },
            prefix: {
                type: null,
                value: ''
            },
            name: {
                type: null,
                value: ''
            },
            suffix: {
                type: null,
                value: ''
            }
        };
        this.parentFolderIsRoot = false;
        this.finished = false;
    }
    Object.defineProperty(FolderCreationComponent.prototype, "value", {
        get: function () {
            if (this.validate()) {
                return this.createFolder;
            }
            else {
                return null;
            }
        },
        enumerable: true,
        configurable: true
    });
    FolderCreationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.inputFolder) {
            setTimeout(function (_) {
                _this.createFolder = _this.inputFolder;
            });
        }
    };
    FolderCreationComponent.prototype.openFolderPicker = function () {
        var _this = this;
        var folderPickedListener = this.google.folderPicked$.subscribe(function (pickedFolder) {
            _this.createFolder.parent = {
                folderID: pickedFolder.id,
                name: pickedFolder.name
            };
            folderPickedListener.unsubscribe();
        }, function (err) {
            console.error(err);
            folderPickedListener.unsubscribe();
        });
        this.google.openFilePicker();
    };
    FolderCreationComponent.prototype.rootToggleChange = function (event) {
        if (event.checked) {
            this.parentFolderIsRoot = true;
            this.createFolder.parent = {
                folderID: 'root',
                name: 'My Drive'
            };
        }
        else {
            this.parentFolderIsRoot = false;
            this.createFolder.parent = {
                folderID: undefined,
                name: null
            };
        }
    };
    FolderCreationComponent.prototype.validate = function () {
        var folder = this.createFolder;
        if (folder) {
            if (folder.parent.folderID !== undefined) {
                var anyInvalid_1 = false;
                var numNone_1 = 0;
                this.valueAttributes.forEach(function (attribute) {
                    if (folder[attribute].type === 'none') {
                        numNone_1 += 1;
                    }
                    if (folder[attribute].type === 'text') {
                        if (folder[attribute].value.length <= 0) {
                            anyInvalid_1 = true;
                        }
                    }
                    if (folder[attribute].type === null) {
                        anyInvalid_1 = true;
                    }
                });
                if (numNone_1 === 3) {
                    // this.snackbar.open('All naming options can\'t be \'None\'!');
                    anyInvalid_1 = true;
                }
                return !anyInvalid_1;
            }
        }
        return false;
    };
    FolderCreationComponent.prototype.done = function () {
        if (this.validate()) {
            this.valueChange.emit(this.createFolder);
            this.finished = true;
        }
    };
    FolderCreationComponent.prototype.reset = function () {
        this.createFolder = {
            parent: {
                folderID: undefined,
                name: null
            },
            prefix: {
                type: null,
                value: ''
            },
            name: {
                type: null,
                value: ''
            },
            suffix: {
                type: null,
                value: ''
            }
        };
        this.parentFolderIsRoot = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FolderCreationComponent.prototype, "inputFolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FolderCreationComponent.prototype, "valueChange", void 0);
    FolderCreationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-folder-creation',
            template: __webpack_require__(/*! ./folder-creation.component.html */ "./src/app/components/shared/folder-creation/folder-creation.component.html"),
            styles: [__webpack_require__(/*! ./folder-creation.component.scss */ "./src/app/components/shared/folder-creation/folder-creation.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"] // private snackbar: MatSnackBar
        ])
    ], FolderCreationComponent);
    return FolderCreationComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/new-config-page/new-config-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/new-config-page/new-config-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: NewConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewConfigPageComponent", function() { return NewConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config-modal/config-modal.component */ "./src/app/components/shared/config-modal/config-modal.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-rule-page',
            template: __webpack_require__(/*! ../config-modal/config-modal.component.html */ "./src/app/components/shared/config-modal/config-modal.component.html"),
            styles: [__webpack_require__(/*! ../config-modal/config-modal.component.scss */ "./src/app/components/shared/config-modal/config-modal.component.scss")]
        })
    ], NewConfigPageComponent);
    return NewConfigPageComponent;
}(_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfigModalComponent"]));



/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper (selectionChange)=\"stepChanged($event)\" linear #stepper>\n  <mat-step label=\"Name\" [stepControl]=\"nameFormGroup\">\n    <form [formGroup]=\"nameFormGroup\">\n      <mat-form-field>\n          <input matInput placeholder=\"Rule Name\" formControlName=\"ruleName\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Trait\" [stepControl]=\"classifierFormGroup\">\n    <form [formGroup]=\"classifierFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Trait\" formControlName=\"classifierControl\" [(value)]=\"classifierSelectOption\">\n          <mat-option *ngFor=\"let classifier of classifiers\" [value]=\"classifier.value\">\n            {{ classifier.label }}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Limitation\" [stepControl]=\"constraintFormGroup\">\n    <form [formGroup]=\"constraintFormGroup\">\n      <mat-form-field>\n        <mat-select placeholder=\"Limitation\" formControlName=\"constraintControl\" [(value)]=\"constraintSelectOption\">\n          <mat-option *ngFor=\"let constraint of constriants\" [value]=\"constraint.value\">\n            {{ constraint.label }}\n          </mat-option>\n          <mat-option [disabled]=\"betweenConstraintDisabled\" value=\"between\">\n            Between\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step label=\"Input\" [stepControl]=\"inputFieldGroup\">\n    <form [formGroup]=\"inputFieldGroup\">\n      <mat-grid-list cols=\"2\" rowHeight=\"2:1\" gutterSize=\"4px\">\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'title'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Title Text\" formControlName=\"titleTextControl\" [required]=\"classifierSelectOption === 'title'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'owner'\">\n          <mat-form-field>\n            <input matInput placeholder=\"Owner Name\" formControlName=\"ownerTextControl\" [required]=\"classifierSelectOption === 'owner'\">\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"classifierSelectOption === 'type'\">\n          <mat-form-field>\n            <mat-select placeholder=\"Drive File Type\" formControlName=\"fileTypeControl\" [required]=\"classifierSelectOption === 'type'\">\n              <mat-option *ngFor=\"let fileType of driveFileTypes\" [value]=\"fileType.value\">\n                {{ fileType.label }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile colspan=\"2\" *ngIf=\"datePickerSingleNeeded() === 1\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"datePicker\" placeholder=\"Date\" formControlName=\"dateControl\" [required]=\"datePickerSingleNeeded() === 1\">\n            <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\n            <mat-datepicker #datePicker startView=\"month\"></mat-datepicker>\n          </mat-form-field>          \n        </mat-grid-tile>\n        <div *ngIf=\"datePickerSingleNeeded() === 2\">\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenFirst\" formControlName=\"firstDateControl\" placeholder=\"Starting Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenFirst\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenFirst startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n          <mat-grid-tile colspan=\"2\">\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"datePickerBetweenSecond\" formControlName=\"secondDateControl\" placeholder=\"Ending Date\" [required]=\"datePickerSingleNeeded() === 2\">\n              <mat-datepicker-toggle matSuffix [for]=\"datePickerBetweenSecond\"></mat-datepicker-toggle>\n              <mat-datepicker #datePickerBetweenSecond startView=\"month\"></mat-datepicker>\n            </mat-form-field>          \n          </mat-grid-tile>\n        </div>\n      </mat-grid-list>\n      <div>\n        <button mat-button type=\"button\" (click)=\"finished()\">Done</button>\n        <button mat-button type=\"button\" matStepperPrevious>Back</button>\n      </div>\n    </form>\n  </mat-step>\n</mat-vertical-stepper>"

/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DEFAULT_VALUE_ACCESSOR, NewRuleStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VALUE_ACCESSOR", function() { return DEFAULT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRuleStepperComponent", function() { return NewRuleStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DEFAULT_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NewRuleStepperComponent; }),
    multi: true
};
var NewRuleStepperComponent = /** @class */ (function () {
    function NewRuleStepperComponent(formBuilder, zone, router, google) {
        this.formBuilder = formBuilder;
        this.zone = zone;
        this.router = router;
        this.google = google;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.betweenConstraintDisabled = false;
        this.startEndWithDisabled = false;
        this.constriants = [
            {
                label: "Include's / After",
                value: 'include'
            },
            {
                label: "Exclude's / Before",
                value: 'exclude'
            }
        ];
        this.classifiers = [
            {
                label: 'Title',
                value: 'title',
                inputFieldControl: 'titleTextControl',
                hideBetween: true
            },
            {
                label: 'Type',
                value: 'type',
                inputFieldControl: 'fileTypeControl',
                hideBetween: true
            },
            {
                label: 'Owner',
                value: 'owner',
                inputFieldControl: 'ownerTextControl',
                hideBetween: true
            },
            {
                label: 'Creation Date',
                value: 'creationDate',
                inputFieldControl: 'dateControl',
                hideBetween: false
            },
            {
                label: 'Last Opened',
                value: 'lastOpened',
                inputFieldControl: 'dateControl',
                hideBetween: false
            },
            {
                label: 'Last Modified',
                value: 'lastModified',
                inputFieldControl: 'dateControl',
                hideBetween: false
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
                label: "Slide's",
                value: 'application/vnd.google-apps.presentation'
            },
            {
                label: "App's Script",
                value: 'application/vnd.google-apps.script'
            },
            {
                label: "Site's",
                value: 'application/vnd.google-apps.site'
            },
            {
                label: "Sheet's",
                value: 'application/vnd.google-apps.spreadsheet'
            },
            {
                label: 'Video',
                value: 'application/vnd.google-apps.video'
            }
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
        return this.valueArrayToObject(this.classifiers)[classifierValue]
            .hideBetween;
    };
    NewRuleStepperComponent.prototype.getFieldControl = function (classifierValue) {
        return this.valueArrayToObject(this.classifiers)[classifierValue]
            .inputFieldControl;
    };
    NewRuleStepperComponent.prototype.ngOnInit = function () {
        this.nameFormGroup = this.formBuilder.group({
            ruleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.classifierFormGroup = this.formBuilder.group({
            classifierControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.constraintFormGroup = this.formBuilder.group({
            constraintControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.inputFieldGroup = this.formBuilder.group({
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
            this.classifierFormGroup
                .get('classifierControl')
                .setValue(this.inputRule.classifier);
            this.constraintSelectOption = this.inputRule.constraint;
            this.constraintFormGroup
                .get('constraintControl')
                .setValue(this.inputRule.constraint);
            switch (this.getFieldControl(this.classifierSelectOption)) {
                case 'titleTextControl':
                    this.inputFieldGroup
                        .get('titleTextControl')
                        .setValue(this.inputRule.data.title);
                    break;
                case 'fileTypeControl':
                    this.inputFieldGroup
                        .get('fileTypeControl')
                        .setValue(this.inputRule.data.fileType);
                    break;
                case 'ownerTextControl':
                    this.inputFieldGroup
                        .get('ownerTextControl')
                        .setValue(this.inputRule.data.owner);
                    break;
                case 'dateControl':
                    if (this.constraintSelectOption === 'between') {
                        this.inputFieldGroup
                            .get('firstDateControl')
                            .setValue(this.inputRule.data.firstDate);
                        this.inputFieldGroup
                            .get('secondDateControl')
                            .setValue(this.inputRule.data.secondDate);
                    }
                    else {
                        this.inputFieldGroup
                            .get('dateControl')
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
            ruleUUID = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
        }
        switch (this.getFieldControl(this.classifierSelectOption)) {
            case 'titleTextControl':
                data['title'] = this.inputFieldGroup.get('titleTextControl').value;
                break;
            case 'fileTypeControl':
                data['fileType'] = this.inputFieldGroup.get('fileTypeControl').value;
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
        if (event.previouslySelectedIndex === 1) {
            var classifierValue = this.classifierFormGroup.get('classifierControl')
                .value;
            this.betweenConstraintDisabled = this.checkIfBetweenDisabled(classifierValue);
            if (this.betweenConstraintDisabled) {
                this.constraintFormGroup.get('constraintControl').setValue('include');
            }
        }
    };
    NewRuleStepperComponent.prototype.openFolderPicker = function () {
        this.google.openFilePicker();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "inputRule", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewRuleStepperComponent.prototype, "reset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewRuleStepperComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatVerticalStepper"])
    ], NewRuleStepperComponent.prototype, "stepper", void 0);
    NewRuleStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-rule-stepper',
            template: __webpack_require__(/*! ./new-rule-stepper.component.html */ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.html"),
            styles: [__webpack_require__(/*! ./new-rule-stepper.component.scss */ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.scss")],
            providers: [DEFAULT_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_2__["GoogleService"]])
    ], NewRuleStepperComponent);
    return NewRuleStepperComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tabs/config/config-list/config-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <span style=\"font-size: 2rem;\">Configuration's</span>\n  <span class=\"right refresh-button\" >\n    <button mat-icon-button color=\"accent\" (click)=\"openPresets()\" matTooltip=\"Preset Config's\" matTooltipPosition=\"left\">\n      <mat-icon aria-label=\"Presets list\">list</mat-icon>\n    </button>\n    <button mat-icon-button color=\"accent\" (click)=\"refreshConfigs()\" matTooltip=\"Refresh Config's\" matTooltipPosition=\"right\">\n      <mat-icon aria-label=\"Refresh configurations\">refresh</mat-icon>\n    </button>\n  </span>\n</div>\n<div *ngIf=\"loading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div [hidden]=\"noConfigs\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let config\">{{config.name}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell class=\"right\" *matHeaderCellDef>Actions</mat-header-cell>\n      <mat-cell class=\"right\" *matCellDef=\"let config\">\n        <button mat-icon-button color=\"accent\" matTooltip=\"Edit Config\" (click)=\"editConfig(config.key)\">\n          <mat-icon aria-label=\"Edit Config\">edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\" matTooltip=\"Set Active\" (click)=\"setActiveConfig(config.key)\" [disabled]=\"getActiveConfig(config.key)\">\n          <mat-icon aria-label=\"Make Config Active\">settings_power</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" matTooltip=\"Delete config\" (click)=\"deleteConfig(config.key)\">\n          <mat-icon aria-label=\"Delete Config\">delete_forever</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"tableColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: tableColumns;\"></mat-row>\n  </mat-table>\n  \n  <mat-paginator #paginator\n    [pageSize]=\"10\"\n    [pageSizeOptions]=\"[5, 10, 20]\"\n    [showFirstLastButtons]=\"true\">\n  </mat-paginator>\n</div>\n<p *ngIf=\"noConfigs\">You have no configurations try creating one!</p>"

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/tabs/config/config-list/config-list.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".right {\n  float: right;\n  text-align: right;\n  justify-content: end; }\n\n.refresh-button {\n  -ms-grid-row-align: center;\n      align-self: center; }\n\n.header {\n  display: flex;\n  padding: 15px 0;\n  justify-content: space-between; }\n"

/***/ }),

/***/ "./src/app/components/tabs/config/config-list/config-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/tabs/config/config-list/config-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigListComponent, ConfigDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigListComponent", function() { return ConfigListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDataSource", function() { return ConfigDataSource; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/edit-config-modal/edit-config-modal.component */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../preset-config/preset-config.component */ "./src/app/components/tabs/config/preset-config/preset-config.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ConfigListComponent = /** @class */ (function () {
    function ConfigListComponent(firebaseAuth, firebase, database, dialog, router, zone) {
        this.firebaseAuth = firebaseAuth;
        this.firebase = firebase;
        this.database = database;
        this.dialog = dialog;
        this.router = router;
        this.zone = zone;
        this.oldPageSize = 10;
        this.loading = true;
        this.noConfigs = true;
        this.tableColumns = ['name', 'actions'];
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
            this.paginatorSubscription = this.paginator.page.subscribe(function () {
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
            this.configChangeSubscription = this.database.configSubject.subscribe(function (created) {
                _this.refreshConfigs();
            });
            // Retrive the active config
            this.database.getActiveConfig(function (activeConfig) {
                _this.activeConfig = activeConfig;
            });
            // Listen for active config changes
            this.activeConfigChangeSubscription = this.database.activeConfigChanged.subscribe(function (newConfigID) {
                _this.activeConfig = newConfigID;
            }, function (err) { return console.error; });
            setTimeout(function (_) {
                // Listen for loading state changes
                _this.loadingSubscription = _this.dataSource.loading$.subscribe(function (loading) {
                    _this.loading = loading;
                });
            });
        }
    };
    ConfigListComponent.prototype.getDialogWidth = function () {
        var width = document.body.clientWidth;
        if (width >= 1280) {
            return width / 2;
        }
        else if (width >= 640) {
            return width / 1.5;
        }
        else {
            return 0;
        }
    };
    ConfigListComponent.prototype.openPresets = function () {
        var _this = this;
        var dialogWidth = this.getDialogWidth();
        if (dialogWidth) {
            var dialogInstance_1 = this.dialog.open(_preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_8__["PresetConfigComponent"], {
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * 0.9 + "px"
            });
            var componentInstance = dialogInstance_1.componentInstance;
            var closeSubscription_1 = componentInstance.closeCommand.subscribe(function (close) {
                dialogInstance_1.close();
                closeSubscription_1.unsubscribe();
            });
        }
        else {
            this.zone.run(function () {
                _this.router.navigate(['/app/config/presets']);
            });
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
            var dialogInstance_2 = this.dialog.open(_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_5__["EditConfigModalComponent"], {
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * 0.9 + "px"
            });
            var componentInstance = dialogInstance_2.componentInstance;
            var closeSubscription_2 = componentInstance.closeCommand.subscribe(function (close) {
                dialogInstance_2.close();
                closeSubscription_2.unsubscribe();
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
        return this.activeConfig === configKey ? true : false;
    };
    ConfigListComponent.prototype.ngOnDestroy = function () {
        this.loadingSubscription.unsubscribe();
        this.paginatorSubscription.unsubscribe();
        this.configChangeSubscription.unsubscribe();
        this.activeConfigChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ConfigListComponent.prototype, "paginator", void 0);
    ConfigListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-config-list',
            template: __webpack_require__(/*! ./config-list.component.html */ "./src/app/components/tabs/config/config-list/config-list.component.html"),
            styles: [__webpack_require__(/*! ./config-list.component.scss */ "./src/app/components/tabs/config/config-list/config-list.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], ConfigListComponent);
    return ConfigListComponent;
}());

var ConfigDataSource = /** @class */ (function () {
    function ConfigDataSource(configCollection, paginator) {
        this.configCollection = configCollection;
        this.paginator = paginator;
        this.configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.loadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.loading$ = this.loadingSubject.asObservable();
    }
    ConfigDataSource.prototype.calculateStart = function (page, pageSize) {
        return page ? page * pageSize : 0;
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
        this.configCollection.ref
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
            _this.loadingSubject.next(false);
        }, function (err) { return console.error; });
    };
    return ConfigDataSource;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/config.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/tabs/config/config.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-config-list></app-config-list>\n"

/***/ }),

/***/ "./src/app/components/tabs/config/config.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/tabs/config/config.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/config/config.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/tabs/config/config.component.ts ***!
  \************************************************************/
/*! exports provided: ConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigComponent", function() { return ConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/config-modal/config-modal.component */ "./src/app/components/shared/config-modal/config-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
    function ConfigComponent(appComponent, dialog, router, zone) {
        this.appComponent = appComponent;
        this.dialog = dialog;
        this.router = router;
        this.zone = zone;
        this.initalized = false;
    }
    ConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.openConfigModalListener =
            this.appComponent.openConfigModal$.subscribe(function (open) {
                if (open === true) {
                    _this.openNewConfigDialog();
                }
            });
    };
    ConfigComponent.prototype.ngAfterViewInit = function () {
        this.initalized = true;
    };
    ConfigComponent.prototype.ngOnDestroy = function () {
        this.openConfigModalListener.unsubscribe();
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
            var dialogInstance_1 = this.dialog.open(_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfigModalComponent"], {
                width: dialogWidth + "px",
                maxHeight: document.body.clientHeight * .9 + "px"
            });
            var componentInstance = dialogInstance_1.componentInstance;
            var dialogSubscription_1 = componentInstance
                .closeCommand
                .subscribe(function (close) {
                dialogInstance_1.close();
                dialogSubscription_1.unsubscribe();
            });
        }
        else {
            this.zone.run(function () {
                _this.router.navigate(['/app/config/create']);
            });
        }
    };
    ConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./config.component.html */ "./src/app/components/tabs/config/config.component.html"),
            styles: [__webpack_require__(/*! ./config.component.scss */ "./src/app/components/tabs/config/config.component.scss")],
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ConfigComponent);
    return ConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/preset-config-page/preset-config-page.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/tabs/config/preset-config-page/preset-config-page.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PresetConfigPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetConfigPageComponent", function() { return PresetConfigPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preset-config/preset-config.component */ "./src/app/components/tabs/config/preset-config/preset-config.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PresetConfigPageComponent = /** @class */ (function (_super) {
    __extends(PresetConfigPageComponent, _super);
    function PresetConfigPageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isPage = true;
        return _this;
    }
    PresetConfigPageComponent.prototype.close = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    PresetConfigPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preset-config-page',
            template: __webpack_require__(/*! ../preset-config/preset-config.component.html */ "./src/app/components/tabs/config/preset-config/preset-config.component.html"),
            styles: [__webpack_require__(/*! ../preset-config/preset-config.component.scss */ "./src/app/components/tabs/config/preset-config/preset-config.component.scss")]
        })
    ], PresetConfigPageComponent);
    return PresetConfigPageComponent;
}(_preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_1__["PresetConfigComponent"]));



/***/ }),

/***/ "./src/app/components/tabs/config/preset-config/preset-config.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tabs/config/preset-config/preset-config.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 mat-dialog-title *ngIf=\"!isPage\">Preset Configs</h3>\n  <h3 *ngIf=\"isPage\">Preset Configs</h3>\n  <div mat-dialog-content [class.overflow-limit]=\"!isPage\">\n    <mat-card *ngFor=\"let preset of presets\">\n      <mat-card-header>\n          <div *ngIf=\"preset.imageURL\" mat-card-avatar style=\"background-size: cover;\" [style.background-image]=\"'url(' + preset.imageURL + ')'\"></div>\n        <mat-card-title>{{ preset.name }}</mat-card-title>\n        <mat-card-subtitle>{{ preset.category }}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <p>{{ preset.description }}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"addPreset(preset.id)\" [disabled]=\"!creationEnabled\">Add Preset</button>\n      </mat-card-actions>\n    </mat-card>\n    <div mat-dialog-actions>\n      <button style=\"margin-top: 10px;\" mat-button (click)=\"close()\">Cancel</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/config/preset-config/preset-config.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/tabs/config/preset-config/preset-config.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/config/preset-config/preset-config.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/tabs/config/preset-config/preset-config.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PresetConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetConfigComponent", function() { return PresetConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _presets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presets */ "./src/app/components/tabs/config/presets.ts");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _classes_config_builder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../classes/config-builder */ "./src/app/classes/config-builder.ts");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PresetConfigComponent = /** @class */ (function () {
    function PresetConfigComponent(zone, router, snackbar, google, database) {
        this.zone = zone;
        this.router = router;
        this.snackbar = snackbar;
        this.google = google;
        this.database = database;
        this._closeCommand = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.closeCommand = this._closeCommand.asObservable();
        this.presets = _presets__WEBPACK_IMPORTED_MODULE_3__["presets"];
        this.creationEnabled = true;
    }
    PresetConfigComponent.prototype.ngOnInit = function () { };
    PresetConfigComponent.prototype.close = function () {
        this._closeCommand.next(true);
    };
    PresetConfigComponent.prototype.addPreset = function (presetID) {
        var _this = this;
        var config = _presets__WEBPACK_IMPORTED_MODULE_3__["presets"].find(function (element) {
            return element.id === presetID;
        });
        var createFolders = config.data.createFolders;
        var groups = config.data.groups;
        var createdFolders = [];
        var requestsSent = 0;
        var requestsRecived = 0;
        this.creationEnabled = false;
        createFolders.forEach(function (folder) {
            requestsSent += 1;
            _this.google
                .createFolder(folder)
                .then(function (id) {
                requestsRecived += 1;
                var group = groups.find(function (group) {
                    return group.destination.presetID === folder;
                });
                group.destination = {
                    folderID: id,
                    name: folder
                };
            })
                .catch(function (err) { return console.error; });
        });
        var checkInterval = setInterval(function () {
            if (requestsSent === requestsRecived) {
                clearInterval(checkInterval);
                groups.forEach(function (group) {
                    group['id'] = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                    group.rules.forEach(function (rule) {
                        rule.data['id'] = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                    });
                });
                _this.database
                    .addConfig(_classes_config_builder__WEBPACK_IMPORTED_MODULE_6__["ConfigBuilder"].configFromGroup(groups, 'I-STEM'))
                    .then(function () {
                    _this.close();
                    _this.creationEnabled = true;
                }, function (err) {
                    _this.snackbar.open('There was a problem adding your preset!');
                    _this.creationEnabled = true;
                });
            }
        }, 100);
    };
    PresetConfigComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preset-config',
            template: __webpack_require__(/*! ./preset-config.component.html */ "./src/app/components/tabs/config/preset-config/preset-config.component.html"),
            styles: [__webpack_require__(/*! ./preset-config.component.scss */ "./src/app/components/tabs/config/preset-config/preset-config.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _services_google_google_service__WEBPACK_IMPORTED_MODULE_4__["GoogleService"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]])
    ], PresetConfigComponent);
    return PresetConfigComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/config/presets.ts":
/*!***************************************************!*\
  !*** ./src/app/components/tabs/config/presets.ts ***!
  \***************************************************/
/*! exports provided: presets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presets", function() { return presets; });
var quartersArray = ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'];
var presets = [
    {
        id: 'istem',
        name: 'I-STEM Geometry Preset',
        category: 'School',
        description: 'A preset configuration for the Wilson High School 9th Grade Geometry I-STEM classes(Periods 3-5).',
        imageURL: 'assets/images/istem-logo.png',
        data: {
            createFolders: [
                'Geometry',
                'Physics',
                'Integrated Engineering and Design'
            ],
            groups: [
                {
                    destination: {
                        presetID: 'Geometry'
                    },
                    name: 'Geometry',
                    rules: [
                        {
                            classifier: 'title',
                            constraint: 'include',
                            data: {
                                title: 'Geo'
                            },
                            name: 'Name'
                        }
                    ],
                    source: {
                        folderID: 'root',
                        name: 'My Drive'
                    }
                },
                {
                    destination: {
                        presetID: 'Physics'
                    },
                    name: 'Physics',
                    rules: [
                        {
                            classifier: 'title',
                            constraint: 'include',
                            data: {
                                title: 'Phys'
                            },
                            name: 'Name'
                        }
                    ],
                    source: {
                        folderID: 'root',
                        name: 'My Drive'
                    }
                },
                {
                    destination: {
                        presetID: 'Integrated Engineering and Design'
                    },
                    name: 'Integrated Engineering and Design',
                    rules: [
                        {
                            classifier: 'title',
                            constraint: 'include',
                            data: {
                                title: 'IED'
                            },
                            name: 'Name'
                        }
                    ],
                    source: {
                        folderID: 'root',
                        name: 'My Drive'
                    }
                }
            ]
        }
    }
];


/***/ }),

/***/ "./src/app/components/tabs/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/tabs/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top: 10px;\">\n  <mat-card class=\"col-5 col-10-sm\">\n    <mat-card-header>\n      <mat-icon mat-card-avatar color=\"accent\">settings_power</mat-icon>\n      <mat-card-title>Active Config</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      {{ activeConfigName }}\n    </mat-card-content>\n  </mat-card>\n  <mat-card class=\"col-5 col-10-sm\">\n    <mat-card-header>\n      <mat-icon mat-card-avatar color=\"accent\">sort</mat-icon>\n      <mat-card-title>Sorting</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <button mat-raised-button style=\"width: 100%;\" color=\"primary\" [disabled]=\"!isActiveConfig\" (click)=\"sortUsersDrive()\">Sort Now</button>\n    </mat-card-content>\n  </mat-card>\n</div>\n<div class=\"row\">\n  <mat-card class=\"col-5 col-10-sm\">\n    <mat-card-header>\n      <mat-icon mat-card-avatar color=\"accent\">settings</mat-icon>\n      <mat-card-title>Configuration's</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      Configuration's control how your Google Drive is sorted!\n    </mat-card-content>\n    <mat-card-actions>\n      <button color=\"primary\" (click)=\"goToConfigPage()\" mat-button>Go to Configuration's</button>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/home/home.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/tabs/home/home.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/tabs/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_sorter_sorter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/sorter/sorter.service */ "./src/app/services/sorter/sorter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
    function HomeComponent(zone, router, snackBar, database, sorterService) {
        this.zone = zone;
        this.router = router;
        this.snackBar = snackBar;
        this.database = database;
        this.sorterService = sorterService;
        this.isActiveConfig = false;
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
                    _this.isActiveConfig = true;
                }
                else {
                    _this.activeConfigName = 'No active configuration!';
                    _this.isActiveConfig = false;
                }
            });
        }
    };
    HomeComponent.prototype.sortUsersDrive = function () {
        var _this = this;
        this.sorterService.sort().then(function () {
            _this.snackBar.open('Google Drive sorted!', 'OK', {
                duration: 5000
            });
        }, function (err) { return console.error; });
    };
    HomeComponent.prototype.goToConfigPage = function () {
        var _this = this;
        this.zone.run(function () {
            _this.router.navigateByUrl('/app/config');
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/tabs/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/tabs/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"],
            _services_sorter_sorter_service__WEBPACK_IMPORTED_MODULE_3__["SorterService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/tabs/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"center\">\n        <button mat-raised-button color=\"warn\" class=\"buttons\" (click)=\"deleteAccount()\">Delete Account</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/tabs/settings/settings.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons {\n  font-size: 25px;\n  margin: 20px; }\n"

/***/ }),

/***/ "./src/app/components/tabs/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/tabs/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_google_google_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/google/google.service */ "./src/app/services/google/google.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/tabs/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/tabs/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"], _services_google_google_service__WEBPACK_IMPORTED_MODULE_3__["GoogleService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/modules/authenticated/authenticated.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/authenticated/authenticated.module.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticatedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedModule", function() { return AuthenticatedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabs/config/config.component */ "./src/app/components/tabs/config/config.component.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config.module */ "./src/app/modules/config/config.module.ts");
/* harmony import */ var _services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tabs/home/home.component */ "./src/app/components/tabs/home/home.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/tabs/settings/settings.component */ "./src/app/components/tabs/settings/settings.component.ts");
/* harmony import */ var _services_sorter_sorter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sorter/sorter.service */ "./src/app/services/sorter/sorter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
            declarations: [_components_tabs_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__["ConfigComponent"], _components_tabs_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_2__["ConfigModule"].forRoot()
            ],
            providers: [_services_firebase_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _services_sorter_sorter_service__WEBPACK_IMPORTED_MODULE_9__["SorterService"]],
            exports: [_components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_1__["ConfigComponent"]]
        })
    ], AuthenticatedModule);
    return AuthenticatedModule;
    var AuthenticatedModule_1;
}());



/***/ }),

/***/ "./src/app/modules/config/config-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/config/config-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ConfigRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function() { return ConfigRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tabs/config/config.component */ "./src/app/components/tabs/config/config.component.ts");
/* harmony import */ var _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/new-config-page/new-config-page.component */ "./src/app/components/shared/new-config-page/new-config-page.component.ts");
/* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth-guard.service */ "./src/app/services/auth/auth-guard.service.ts");
/* harmony import */ var _components_tabs_config_preset_config_page_preset_config_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/tabs/config/preset-config-page/preset-config-page.component */ "./src/app/components/tabs/config/preset-config-page/preset-config-page.component.ts");
/* harmony import */ var _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/shared/edit-config-page/edit-config-page.component */ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'app/config',
        component: _components_tabs_config_config_component__WEBPACK_IMPORTED_MODULE_2__["ConfigComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        data: {
            state: 'appConfig'
        }
    },
    {
        path: 'app/config/create',
        component: _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_3__["NewConfigPageComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        data: {
            state: 'appConfigCreate'
        }
    },
    {
        path: 'app/config/presets',
        component: _components_tabs_config_preset_config_page_preset_config_page_component__WEBPACK_IMPORTED_MODULE_5__["PresetConfigPageComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        data: {
            state: 'appConfigPresets'
        }
    },
    {
        path: 'app/config/edit',
        component: _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_6__["EditConfigPageComponent"],
        canActivate: [_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
        data: {
            state: 'appConfigEdit'
        }
    },
];
var ConfigRoutingModule = /** @class */ (function () {
    function ConfigRoutingModule() {
    }
    ConfigRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConfigRoutingModule);
    return ConfigRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/config/config.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/config/config.module.ts ***!
  \*************************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tabs_config_config_list_config_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tabs/config/config-list/config-list.component */ "./src/app/components/tabs/config/config-list/config-list.component.ts");
/* harmony import */ var _components_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shared/config-modal/config-modal.component */ "./src/app/components/shared/config-modal/config-modal.component.ts");
/* harmony import */ var _components_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/shared/edit-config-modal/edit-config-modal.component */ "./src/app/components/shared/edit-config-modal/edit-config-modal.component.ts");
/* harmony import */ var _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/shared/edit-config-page/edit-config-page.component */ "./src/app/components/shared/edit-config-page/edit-config-page.component.ts");
/* harmony import */ var _components_shared_folder_creation_folder_creation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shared/folder-creation/folder-creation.component */ "./src/app/components/shared/folder-creation/folder-creation.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/shared/new-config-page/new-config-page.component */ "./src/app/components/shared/new-config-page/new-config-page.component.ts");
/* harmony import */ var _components_shared_new_rule_stepper_new_rule_stepper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/shared/new-rule-stepper/new-rule-stepper.component */ "./src/app/components/shared/new-rule-stepper/new-rule-stepper.component.ts");
/* harmony import */ var _pipes_un_named_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/un-named.pipe */ "./src/app/pipes/un-named.pipe.ts");
/* harmony import */ var _components_tabs_config_preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/tabs/config/preset-config/preset-config.component */ "./src/app/components/tabs/config/preset-config/preset-config.component.ts");
/* harmony import */ var _components_tabs_config_preset_config_page_preset_config_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/tabs/config/preset-config-page/preset-config-page.component */ "./src/app/components/tabs/config/preset-config-page/preset-config-page.component.ts");
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config-routing.module */ "./src/app/modules/config/config-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [
                _components_tabs_config_config_list_config_list_component__WEBPACK_IMPORTED_MODULE_1__["ConfigListComponent"],
                _components_shared_new_config_page_new_config_page_component__WEBPACK_IMPORTED_MODULE_9__["NewConfigPageComponent"],
                _components_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfigModalComponent"],
                _components_shared_new_rule_stepper_new_rule_stepper_component__WEBPACK_IMPORTED_MODULE_10__["NewRuleStepperComponent"],
                _components_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_3__["EditConfigModalComponent"],
                _components_shared_edit_config_page_edit_config_page_component__WEBPACK_IMPORTED_MODULE_4__["EditConfigPageComponent"],
                _components_shared_folder_creation_folder_creation_component__WEBPACK_IMPORTED_MODULE_5__["FolderCreationComponent"],
                _components_tabs_config_preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_12__["PresetConfigComponent"],
                _components_tabs_config_preset_config_page_preset_config_page_component__WEBPACK_IMPORTED_MODULE_13__["PresetConfigPageComponent"],
                _pipes_un_named_pipe__WEBPACK_IMPORTED_MODULE_11__["UnNamedPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _config_routing_module__WEBPACK_IMPORTED_MODULE_14__["ConfigRoutingModule"]
            ],
            entryComponents: [_components_shared_config_modal_config_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfigModalComponent"], _components_shared_edit_config_modal_edit_config_modal_component__WEBPACK_IMPORTED_MODULE_3__["EditConfigModalComponent"], _components_tabs_config_preset_config_preset_config_component__WEBPACK_IMPORTED_MODULE_12__["PresetConfigComponent"]],
            exports: [_components_tabs_config_config_list_config_list_component__WEBPACK_IMPORTED_MODULE_1__["ConfigListComponent"]]
        })
    ], ConfigModule);
    return ConfigModule;
    var ConfigModule_1;
}());



/***/ }),

/***/ "./src/app/pipes/un-named.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/un-named.pipe.ts ***!
  \****************************************/
/*! exports provided: UnNamedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnNamedPipe", function() { return UnNamedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'unNamed'
        })
    ], UnNamedPipe);
    return UnNamedPipe;
}());



/***/ }),

/***/ "./src/app/services/auth/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService, PreventAuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventAuthGuardService", function() { return PreventAuthGuardService; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _google_google_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_google_google_service__WEBPACK_IMPORTED_MODULE_1__["GoogleService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], PreventAuthGuardService);
    return PreventAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/firebase/database.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/firebase/database.service.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _classes_config_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/config-builder */ "./src/app/classes/config-builder.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatabaseService = /** @class */ (function () {
    function DatabaseService(firebase, firebaseAuth) {
        this.firebase = firebase;
        this.firebaseAuth = firebaseAuth;
        this._configSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.configSubject = this._configSubject.asObservable();
        this._activeConfigChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.activeConfigChanged = this._activeConfigChanged.asObservable();
        firebase.firestore.settings({
            timestampsInSnapshots: true
        });
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
    DatabaseService.prototype.createConfig = function (configName, firstGroupName, sourceLocation, destinationLocation, createFolder, firstGroupRule) {
        var _this = this;
        var newConfig = _classes_config_builder__WEBPACK_IMPORTED_MODULE_2__["ConfigBuilder"].generateNewConfig(configName, firstGroupName, sourceLocation, destinationLocation, createFolder, firstGroupRule);
        console.log(newConfig);
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
    DatabaseService.prototype.addConfig = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.configsCollection.add(config).then(function () {
                _this._configSubject.next(true);
                resolve();
            }, function (err) {
                console.error(err);
                _this._configSubject.next(false);
                reject();
            });
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
        if (this.configDocument) {
            this
                .configDocument
                .ref
                .get()
                .then(function (snapshot) {
                if (snapshot && snapshot.data()) {
                    cb(snapshot.data()['activeConfig']);
                }
                else {
                    cb(null);
                }
            }, function (err) { return console.error; });
        }
        else {
            cb(null);
        }
    };
    DatabaseService.prototype.numberConfigs = function (cb) {
        if (this.configsCollection) {
            this
                .configsCollection
                .ref
                .get()
                .then(function (snapshot) {
                cb(snapshot.docs.length);
            });
        }
        else {
            cb(0);
        }
    };
    DatabaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_0__["AngularFireAuth"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/services/google/google.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/google/google.service.ts ***!
  \***************************************************/
/*! exports provided: GoogleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleService", function() { return GoogleService; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/index.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _classes_drive_query_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../classes/drive-query-builder */ "./src/app/classes/drive-query-builder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Variable for easy reference to the authenitcation instance.
 */
var authInstance;
var folderPicker;
var _folderPicked = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
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
            console.debug('GAPI: Client & Auth Loaded');
            gapi.client.init(config).then(function () {
                authInstance = gapi.auth2.getAuthInstance();
                authInstance.isSignedIn.listen(function () {
                    _this._authState.next(authInstance.isSignedIn.get());
                    if (authInstance.isSignedIn.get()) {
                        var credential = firebase_app__WEBPACK_IMPORTED_MODULE_0__["auth"].GoogleAuthProvider.credential(_this.getToken());
                        _this.firebaseAuth.auth.signInWithCredential(credential);
                    }
                });
                var authStatus = authInstance.isSignedIn.get();
                _this._authState.next(authStatus);
                gapi.load('picker', function () {
                    console.debug('GAPI: Picker Loaded');
                    var view = new google.picker.DocsView(google.picker.ViewId.FOLDERS)
                        .setIncludeFolders(true)
                        .setSelectFolderEnabled(true)
                        .setParent('root')
                        .setOwnedByMe(true);
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
    GoogleService.prototype.listFiles = function (query, cb) {
        gapi.client.drive.files
            .list({
            q: query
        })
            .execute(function (resp) {
            cb(resp);
        });
    };
    GoogleService.prototype.getFileInfo = function (fileID, fields, cb) {
        gapi.client.drive.files
            .get({
            fileId: fileID,
            fields: fields
        })
            .execute(function (resp) {
            if (resp.err) {
                console.error(resp.err);
            }
            else {
                cb(resp);
            }
        });
    };
    GoogleService.prototype.createFolder = function (name, parent) {
        var fileResource = {
            name: name,
            mimeType: _classes_drive_query_builder__WEBPACK_IMPORTED_MODULE_5__["DriveMimeType"].folder
        };
        if (parent)
            fileResource['parents'] = [parent];
        return new Promise(function (resolve, reject) {
            gapi.client.drive.files
                .create({
                resource: fileResource,
                fields: 'id'
            })
                .execute(function (resp) {
                if (resp.err)
                    reject(resp.err);
                else
                    resolve(resp.id);
            });
        });
    };
    GoogleService.prototype.moveFile = function (fileID, folder, cb) {
        this.getFileInfo(fileID, 'parents', function (file) {
            var prevParents = file.parents.join(',');
            gapi.client.drive.files
                .update({
                fileId: fileID,
                addParents: folder,
                removeParents: prevParents
            })
                .execute(function (resp) {
                if (resp.err) {
                    console.error(resp.err);
                }
                else {
                    cb(true);
                }
            });
        });
    };
    GoogleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], GoogleService);
    return GoogleService;
}());



/***/ }),

/***/ "./src/app/services/sorter/sorter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/sorter/sorter.service.ts ***!
  \***************************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _firebase_database_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/database.service */ "./src/app/services/firebase/database.service.ts");
/* harmony import */ var _classes_drive_query_builder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/drive-query-builder */ "./src/app/classes/drive-query-builder.ts");
/* harmony import */ var _google_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../google/google.service */ "./src/app/services/google/google.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_config_builder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/config-builder */ "./src/app/classes/config-builder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SorterService = /** @class */ (function () {
    function SorterService(google, database) {
        var _this = this;
        this.google = google;
        this.database = database;
        this.loadConfig();
        this.database.activeConfigChanged.subscribe(function () {
            _this.loadConfig();
        });
    }
    SorterService.prototype.getDriveQuery = function (group) {
        var driveQuery = new _classes_drive_query_builder__WEBPACK_IMPORTED_MODULE_1__["DriveQueryBuilder"](group.source.folderID, true);
        group.rules.forEach(function (rule) {
            switch (rule.classifier) {
                case 'title':
                    var title = rule.data.title;
                    switch (rule.constraint) {
                        case 'include':
                            driveQuery = driveQuery.nameContains(title);
                            break;
                        case 'exclude':
                            driveQuery = driveQuery.nameExcludes(title);
                            break;
                    }
                    break;
                case 'type':
                    var type = rule.data.fileType;
                    switch (rule.constraint) {
                        case 'include':
                            driveQuery = driveQuery.requiresType(type);
                            break;
                        case 'exclude':
                            driveQuery = driveQuery.excludeType(type);
                            break;
                    }
                    break;
                case 'owner':
                    var owner = rule.data.owner;
                    switch (rule.constraint) {
                        case 'include':
                            driveQuery = driveQuery.hasOwner(owner);
                            break;
                        case 'exclude':
                            driveQuery = driveQuery.excludesOwner(owner);
                            break;
                    }
                    break;
                case 'creationDate':
                    switch (rule.constraint) {
                        case 'include':
                            driveQuery = driveQuery.createdAfter(rule.data.date);
                            break;
                        case 'exclude':
                            driveQuery = driveQuery.createdBefore(rule.data.date);
                            break;
                        case 'between':
                            driveQuery = driveQuery
                                .createdAfter(rule.data.firstDate)
                                .createdBefore(rule.data.secondDate);
                            break;
                    }
                    break;
                case 'lastOpened':
                    switch (rule.constraint) {
                        case 'include':
                            driveQuery = driveQuery.openedAfter(rule.data.date);
                            break;
                        case 'exclude':
                            driveQuery = driveQuery.openedBefore(rule.data.date);
                            break;
                        case 'between':
                            driveQuery = driveQuery
                                .openedAfter(rule.data.firstDate)
                                .openedBefore(rule.data.secondDate);
                            break;
                    }
                    break;
                case 'lastModified':
                    switch (rule.constraint) {
                        case 'include':
                            driveQuery = driveQuery.modifiedAfter(rule.data.date);
                            break;
                        case 'exclude':
                            driveQuery = driveQuery.modifiedBefore(rule.data.date);
                            break;
                        case 'between':
                            driveQuery = driveQuery
                                .modifiedAfter(rule.data.firstDate)
                                .modifiedBefore(rule.data.secondDate);
                            break;
                    }
                    break;
            }
        });
        return driveQuery.get();
    };
    SorterService.prototype.loadConfig = function (cb) {
        var _this = this;
        this.database.getActiveConfig(function (activeConfig) {
            if (activeConfig) {
                _this.database.getConfig(activeConfig, function (config) {
                    _this.config = config;
                    if (cb)
                        cb();
                });
            }
        });
    };
    SorterService.prototype.sort = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var drive = gapi.client.drive;
            var success = true;
            _this.config.groups.forEach(function (group) {
                if (group.destination) {
                    _this.google.listFiles(_this.getDriveQuery(group), function (resp) {
                        if (resp.error) {
                            reject(resp.error);
                        }
                        else {
                            resp.files.forEach(function (file) {
                                _this.google.moveFile(file.id, group.destination.folderID, function (success) {
                                    if (!success) {
                                        success = false;
                                    }
                                });
                            }, _this);
                        }
                    });
                }
                else {
                    var newFolderName = _classes_config_builder__WEBPACK_IMPORTED_MODULE_4__["ConfigBuilder"].folderNameBuilder(group.createFolder);
                    _this.google
                        .createFolder(newFolderName, group.createFolder.parent.folderID)
                        .then(function (newFolderID) {
                        _this.google.listFiles(_this.getDriveQuery(group), function (resp) {
                            if (resp.error) {
                                reject(resp.error);
                            }
                            else {
                                resp.files.forEach(function (file) {
                                    _this.google.moveFile(file.id, newFolderID, function (success) {
                                        if (!success) {
                                            success = false;
                                        }
                                    });
                                }, _this);
                            }
                        });
                    }, function (err) { return console.error; });
                }
            });
            if (success)
                resolve();
            else
                reject();
        });
    };
    SorterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        __metadata("design:paramtypes", [_google_google_service__WEBPACK_IMPORTED_MODULE_2__["GoogleService"],
            _firebase_database_service__WEBPACK_IMPORTED_MODULE_0__["DatabaseService"]])
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/brandon/Projects/g-drive-sorter/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map