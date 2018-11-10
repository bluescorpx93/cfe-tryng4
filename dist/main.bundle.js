webpackJsonp([1,4],{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'assets/json/videos.json';
var VideoService = (function () {
    function VideoService(http) {
        this.http = http;
    }
    VideoService.prototype.getAllVideos = function () {
        return this.http.get(endpoint).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    VideoService.prototype.getVideoBySlug = function (slug) {
        return this.http.get(endpoint).map(function (response) {
            var data = response.json().filter(function (item) {
                if (item.slug == slug) {
                    return item;
                }
            });
            if (data.length == 1) {
                return data[0];
            }
            return {};
        }).catch(this.handleError);
    };
    VideoService.prototype.searchVideoByName = function (name) {
        return this.http.get(endpoint).map(function (response) {
            var data = [];
            var req = response.json().filter(function (item) {
                if (item.name.indexOf(name) >= 0) {
                    data.push(item);
                }
            });
            return data;
        }).catch(this.handleError);
    };
    VideoService.prototype.handleError = function (error, caught) {
        console.log("Error\n" + error, "Caught\n" + caught);
    };
    return VideoService;
}());
VideoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 296;


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(309);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'App Component!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(392),
        styles: [__webpack_require__(363)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__video_list_video_list_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_detail_video_detail_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__safe_pipe__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_pipe__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_detail_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__video_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_11__search_pipe__["a" /* SearchNamePipe */],
            __WEBPACK_IMPORTED_MODULE_12__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__search_detail_component__["a" /* SearchDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* CarouselModule */].forRoot(),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__video_service__["a" /* VideoService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_detail_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_list_video_list_component__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__video_detail_video_detail_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]
    },
    {
        path: "videos",
        component: __WEBPACK_IMPORTED_MODULE_3__video_list_video_list_component__["a" /* VideoListComponent */]
    },
    {
        path: "videos/:slug",
        component: __WEBPACK_IMPORTED_MODULE_4__video_detail_video_detail_component__["a" /* VideoDetailComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_2__search_detail_component__["a" /* SearchDetailComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavComponent = (function () {
    function NavComponent() {
    }
    return NavComponent;
}());
NavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'navbar',
        template: __webpack_require__(394),
        styles: [__webpack_require__(365)]
    })
], NavComponent);

//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (value, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = (function () {
    function SearchComponent(router) {
        this.router = router;
    }
    SearchComponent.prototype.submitSearch = function (event, formData) {
        // console.log(event);
        // console.log(formData);
        // console.log(formData.value);
        this.searchedQuery = formData.value['searchQuery'];
        if (this.searchedQuery) {
            this.router.navigate(['/search', { query: this.searchedQuery }]);
        }
    };
    SearchComponent.prototype.searchQueryChange = function (event, formData) {
        this.searchedQuery = formData.value['searchQuery'];
        if (this.searchedQuery.length > 0) {
            this.router.navigate(['/search', { query: this.searchedQuery }]);
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'search',
        template: __webpack_require__(396),
        styles: [__webpack_require__(367)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], SearchComponent);

var _a;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNamePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchNamePipe = (function () {
    function SearchNamePipe() {
    }
    SearchNamePipe.prototype.transform = function (value, args) {
        var nameSearch = args.toLowerCase();
        if (nameSearch == null) {
            return null;
        }
        return value.filter(function (item) { return item.name.toLowerCase().includes(nameSearch); });
    };
    return SearchNamePipe;
}());
SearchNamePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'SearchNamePipe'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], SearchNamePipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".carousel-control.left, .carousel-control.right{\n\tcursor: pointer;\n}\n.img-para{\n\tposition: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".navbar{\n\tborder-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".form-control, .btn{\n\tborder-radius: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 111,
	"./af.js": 111,
	"./ar": 118,
	"./ar-dz": 112,
	"./ar-dz.js": 112,
	"./ar-kw": 113,
	"./ar-kw.js": 113,
	"./ar-ly": 114,
	"./ar-ly.js": 114,
	"./ar-ma": 115,
	"./ar-ma.js": 115,
	"./ar-sa": 116,
	"./ar-sa.js": 116,
	"./ar-tn": 117,
	"./ar-tn.js": 117,
	"./ar.js": 118,
	"./az": 119,
	"./az.js": 119,
	"./be": 120,
	"./be.js": 120,
	"./bg": 121,
	"./bg.js": 121,
	"./bn": 122,
	"./bn.js": 122,
	"./bo": 123,
	"./bo.js": 123,
	"./br": 124,
	"./br.js": 124,
	"./bs": 125,
	"./bs.js": 125,
	"./ca": 126,
	"./ca.js": 126,
	"./cs": 127,
	"./cs.js": 127,
	"./cv": 128,
	"./cv.js": 128,
	"./cy": 129,
	"./cy.js": 129,
	"./da": 130,
	"./da.js": 130,
	"./de": 133,
	"./de-at": 131,
	"./de-at.js": 131,
	"./de-ch": 132,
	"./de-ch.js": 132,
	"./de.js": 133,
	"./dv": 134,
	"./dv.js": 134,
	"./el": 135,
	"./el.js": 135,
	"./en-au": 136,
	"./en-au.js": 136,
	"./en-ca": 137,
	"./en-ca.js": 137,
	"./en-gb": 138,
	"./en-gb.js": 138,
	"./en-ie": 139,
	"./en-ie.js": 139,
	"./en-nz": 140,
	"./en-nz.js": 140,
	"./eo": 141,
	"./eo.js": 141,
	"./es": 143,
	"./es-do": 142,
	"./es-do.js": 142,
	"./es.js": 143,
	"./et": 144,
	"./et.js": 144,
	"./eu": 145,
	"./eu.js": 145,
	"./fa": 146,
	"./fa.js": 146,
	"./fi": 147,
	"./fi.js": 147,
	"./fo": 148,
	"./fo.js": 148,
	"./fr": 151,
	"./fr-ca": 149,
	"./fr-ca.js": 149,
	"./fr-ch": 150,
	"./fr-ch.js": 150,
	"./fr.js": 151,
	"./fy": 152,
	"./fy.js": 152,
	"./gd": 153,
	"./gd.js": 153,
	"./gl": 154,
	"./gl.js": 154,
	"./gom-latn": 155,
	"./gom-latn.js": 155,
	"./he": 156,
	"./he.js": 156,
	"./hi": 157,
	"./hi.js": 157,
	"./hr": 158,
	"./hr.js": 158,
	"./hu": 159,
	"./hu.js": 159,
	"./hy-am": 160,
	"./hy-am.js": 160,
	"./id": 161,
	"./id.js": 161,
	"./is": 162,
	"./is.js": 162,
	"./it": 163,
	"./it.js": 163,
	"./ja": 164,
	"./ja.js": 164,
	"./jv": 165,
	"./jv.js": 165,
	"./ka": 166,
	"./ka.js": 166,
	"./kk": 167,
	"./kk.js": 167,
	"./km": 168,
	"./km.js": 168,
	"./kn": 169,
	"./kn.js": 169,
	"./ko": 170,
	"./ko.js": 170,
	"./ky": 171,
	"./ky.js": 171,
	"./lb": 172,
	"./lb.js": 172,
	"./lo": 173,
	"./lo.js": 173,
	"./lt": 174,
	"./lt.js": 174,
	"./lv": 175,
	"./lv.js": 175,
	"./me": 176,
	"./me.js": 176,
	"./mi": 177,
	"./mi.js": 177,
	"./mk": 178,
	"./mk.js": 178,
	"./ml": 179,
	"./ml.js": 179,
	"./mr": 180,
	"./mr.js": 180,
	"./ms": 182,
	"./ms-my": 181,
	"./ms-my.js": 181,
	"./ms.js": 182,
	"./my": 183,
	"./my.js": 183,
	"./nb": 184,
	"./nb.js": 184,
	"./ne": 185,
	"./ne.js": 185,
	"./nl": 187,
	"./nl-be": 186,
	"./nl-be.js": 186,
	"./nl.js": 187,
	"./nn": 188,
	"./nn.js": 188,
	"./pa-in": 189,
	"./pa-in.js": 189,
	"./pl": 190,
	"./pl.js": 190,
	"./pt": 192,
	"./pt-br": 191,
	"./pt-br.js": 191,
	"./pt.js": 192,
	"./ro": 193,
	"./ro.js": 193,
	"./ru": 194,
	"./ru.js": 194,
	"./sd": 195,
	"./sd.js": 195,
	"./se": 196,
	"./se.js": 196,
	"./si": 197,
	"./si.js": 197,
	"./sk": 198,
	"./sk.js": 198,
	"./sl": 199,
	"./sl.js": 199,
	"./sq": 200,
	"./sq.js": 200,
	"./sr": 202,
	"./sr-cyrl": 201,
	"./sr-cyrl.js": 201,
	"./sr.js": 202,
	"./ss": 203,
	"./ss.js": 203,
	"./sv": 204,
	"./sv.js": 204,
	"./sw": 205,
	"./sw.js": 205,
	"./ta": 206,
	"./ta.js": 206,
	"./te": 207,
	"./te.js": 207,
	"./tet": 208,
	"./tet.js": 208,
	"./th": 209,
	"./th.js": 209,
	"./tl-ph": 210,
	"./tl-ph.js": 210,
	"./tlh": 211,
	"./tlh.js": 211,
	"./tr": 212,
	"./tr.js": 212,
	"./tzl": 213,
	"./tzl.js": 213,
	"./tzm": 215,
	"./tzm-latn": 214,
	"./tzm-latn.js": 214,
	"./tzm.js": 215,
	"./uk": 216,
	"./uk.js": 216,
	"./ur": 217,
	"./ur.js": 217,
	"./uz": 219,
	"./uz-latn": 218,
	"./uz-latn.js": 218,
	"./uz.js": 219,
	"./vi": 220,
	"./vi.js": 220,
	"./x-pseudo": 221,
	"./x-pseudo.js": 221,
	"./yo": 222,
	"./yo.js": 222,
	"./zh-cn": 223,
	"./zh-cn.js": 223,
	"./zh-hk": 224,
	"./zh-hk.js": 224,
	"./zh-tw": 225,
	"./zh-tw.js": 225
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 370;


/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = "<!-- <h1>\n\t{{title}}\n</h1> -->\n<navbar></navbar>\n<div class='container'>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 393:
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-8 col-sm-offset-2'>\n\t<carousel class='text-center'>\n\t\t<slide *ngFor=\"let image of homeImageList\">\n\t\t\t<a class=\"\" routerLink='{{image.link}}'>\n\t\t\t\t<img class='img-responsive' [src]=\"image.imageSrc\" (click)='preventNormal($event, image)'>\n\t\t\t</a>\n\t\t\t<div class='carousel-caption'>\n\t\t\t\t<h3> {{ image.name}}</h3>\n\t\t\t\t<p> <a routerLink='/videos/{{image.slug}}' class='btn btn-default'> Watch </a> </p>\n\t\t\t</div>\n\t\t</slide>\n\t\t<!-- <img class='img-responsive' src=\"assets/images/4.jpg\" alt=\"First slide\"> -->\n\n<!-- \t<slide>\n\t\t\t<img class='img-responsive' src=\"assets/images/5.jpg\" alt=\"Second slide\">\n\t\t\t<p> <a #imageTwo href='/videos/video-1' class='btn btn-default' (click)='preventNormal($event, imageTwo)'> Video 1 </a> </p>\n\t\t</slide>\n\t\t<slide>\n\t\t\t<img class='img-responsive' src=\"assets/images/6.jpg\" alt=\"Third slide\">\n\t\t\t<p> <a #imageThree href='/videos/video-1' class='btn btn-default' (click)='preventNormal($event, imageThree)'> Video 1 </a> </p>\n\t\t</slide> -->\n\n\t</carousel>\n</div>"

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\t\t\t<a class=\"navbar-brand\" routerLink='' routerLinkActive=\"active\">SrvUp</a>\n\t\t\t<!-- <a href='/' class=\"navbar-brand\">SrvUp</a> -->\n\t\t</div>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li > \n\t\t\t\t\t<a routerLink='/videos' routerLinkActive=\"active\"> Videos </a>\n\t\t\t\t\t<!-- <a href='/videos'> Videos <span class=\"sr-only\">(current)</span></a> -->\n\t\t\t\t</li>\n\t\t\t\t<!-- <li> <a href=\"#\">Link</a></li> -->\n\t\t\t\t\n\t\t\t\t<!-- <li class=\"dropdown\" dropdown  >\n\t\t\t\t\t<a dropdownToggle href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"  >Dropdown <span class=\"caret\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul *dropdownMenu class=\"dropdown-menu\">\n\t\t\t\t\t\t<li><a href=\"#\">Action</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Another action</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Something else here</a></li>\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t<li> <a href=\"#\">Separated link</a></li>\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t\t\t<li> <a href=\"#\">One more separated link</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li> -->\n\n\t\t\t</ul>\n\t\t\t<search></search>\n\t\t</div><!-- /.navbar-collapse -->\n\n\n\t</div><!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ 395:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='col-sm-6'>\n\t\tMethod1\n\t\t<div *ngIf='query.length>1'>\n\t\t\t<h3> Searched <b> {{ query}}</b> </h3>\n\t\t\t<ul >\n\t\t\t\t<li *ngFor = \"let item of searchResults | SearchNamePipe:query\"> <a routerLink='/videos/{{item.slug}}'> {{item.name}}</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<div class='col-sm-6'>\n\t\tMethod 2\n\t\t<div *ngIf='searchResultsv2'>\n\t\t\t<h3> Searched <b> {{ query}}</b> </h3>\n\t\t\t<ul >\n\t\t\t\t<li *ngFor = \"let item of searchResultsv2\"> <a routerLink='/videos/{{item.slug}}'> {{item.name}}</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<div class='col-sm-4'>\n\t<form #searchForm='ngForm' class='navbar-form' (ngSubmit)=\"submitSearch($event, searchForm)\">\n\t\t<input type='text' class='form-control' placeholder='Search Videos' [(ngModel)]='searchedQuery' name='searchedQuery' (keyup)='searchQueryChange($event, searchForm)'>\n\t\t<button type='submit' class='btn btn-primary'> \n\t\t\t<!-- <span *ngIf='!searchQuery'> Find</span>\n\t\t\t<span *ngIf='searchQuery'> Get {{ searchQuery }}</span> -->\n\t\t\tFind\n\t\t</button>\n\t</form>\n</div>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<h1> {{video.name}}</h1>\n<iframe class='col-md-12 ' height='500px' *ngIf='video.embed' [src]=\"getEmbedURL(video.embed) | safe\" frameborder=\"0\" allowfullscreen style='padding-left: 0'></iframe>\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<h1> {{ title }} - {{todayDate | date: \"dd/MM/yy\"}}</h1>\n<!-- <p *ngFor = \"let item of videoList\">\n\t<a href='videos/{{ item.slug }} ' *ngIf= ' item.slug == \"item-1\" '> {{ item.name }} </a>\n\t<a href='videos/{{ item.slug }} ' *ngIf= ' item.slug != \"item-1\" ' style='color:green;'> {{item.name}}</a>\n</p>\n-->\n\n<div *ngFor = ' let item of videoList; let i = index ' [ngClass]=\" { 'row': (i+1)%3==0 } \">\n\t<div class='thumbnail col-sm-4'>\n\t\t<img [src]='item.imageSrc' alt='{{item.name}}' class='img-responsive'>\n\t\t<div class='caption'>\n\t\t\t<h3> <a routerLink='/videos/{{item.slug}}/'> {{ item.name }}</a></h3>\n\t\t\t<p> <a routerLink='/videos/{{item.slug}}/' class='btn btn-warning'> View</a></p>\n\t\t</div>\n\t</div>\n\n\t<!-- The embed URL gets created from the function which returns a string\n\tthe SAFE pipe makes it Sanitized -->\n\t\n\t<!-- <div class='col-md-6 ' style='padding-left: 0'>\n\t\t<h3> \t \t<a routerLink='/videos/{{item.slug}}/'> {{ item.name }}</a> </h3> \n\t\t<iframe class='col-md-12 ' height='300px' *ngIf='item.embed' [src]=\"getEmbedURL(item.embed) | safe\" frameborder=\"0\" allowfullscreen style='padding-left: 0'></iframe>\n\t</div>\n -->\n</div>"

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(297);


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(router, http, videoService) {
        this.router = router;
        this.http = http;
        this.videoService = videoService;
        // first put event: any, and based on the console.log find which event it is.
        // image.attr doesn't work
        this.homeImageList = [];
    }
    HomeComponent.prototype.preventNormal = function (event, image) {
        if (!image.prevented) {
            console.log(event + " " + image.getAttribute("href"));
            event.preventDefault();
            // image.setAttribute("href","/videos");
            // image.link
            //image.prevented = true;
            this.router.navigate(['/videos']);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.req = this.http.get('assets/json/videos.json').subscribe(data => {
        // 	this.homeImageList = data.json() as [any];
        // })
        this.req = this.videoService.getAllVideos().subscribe(function (data) {
            _this.homeImageList = data;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'home',
        template: __webpack_require__(393),
        styles: [__webpack_require__(364)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__video_service__["a" /* VideoService */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDetailComponent = (function () {
    function SearchDetailComponent(route, http, videoService) {
        this.route = route;
        this.http = http;
        this.videoService = videoService;
    }
    SearchDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            console.log(params);
            _this.query = params['query'];
            _this.http.get('assets/json/videos.json').subscribe(function (data) {
                _this.searchResults = data.json();
            });
            _this.req = _this.videoService.searchVideoByName(_this.query).subscribe(function (data) {
                _this.searchResultsv2 = data;
            });
        });
    };
    SearchDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
    };
    return SearchDetailComponent;
}());
SearchDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'search-detail',
        template: __webpack_require__(395),
        styles: [__webpack_require__(366)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__video_service__["a" /* VideoService */]) === "function" && _c || Object])
], SearchDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=search-detail.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoDetailComponent = (function () {
    function VideoDetailComponent(route, http, videoService) {
        this.route = route;
        this.http = http;
        this.videoService = videoService;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routeSub = this.route.params.subscribe(function (params) {
            _this.slug = params['slug'];
            // this.http.get('assets/json/videos.json').subscribe(data => {
            // 	data.json().filter(item=>{
            // 		if (item.slug == this.slug){
            // 			console.log(item);
            // 			this.video = item;
            // 		}
            // 	})
            // })
            // -->	NOTE: Using same method from service
            // this.req = this.videoService.getAllVideos().subscribe(data => {
            // 	data.filter(item=> {
            // 		if (item.slug == this.slug){
            // 			this.video = item;
            // 		}
            // 	})
            // })
            // 	--> NOTE: Using getSingle method from service
            _this.req = _this.videoService.getVideoBySlug(_this.slug).subscribe(function (data) {
                _this.video = data;
            });
        });
    };
    VideoDetailComponent.prototype.ngOnDestroy = function () {
        this.routeSub.unsubscribe();
        this.req.unsubscribe();
    };
    VideoDetailComponent.prototype.getEmbedURL = function (embed) {
        return 'http://www.youtube.com/embed/' + embed;
    };
    return VideoDetailComponent;
}());
VideoDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_0" /* Component */])({
        selector: 'video-detail',
        template: __webpack_require__(397),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */]) === "function" && _c || Object])
], VideoDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=video-detail.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_service__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoListComponent = (function () {
    // videoList = [
    // 	{
    // 		name: "Video1",
    // 		slug: "video-1",
    // 		embed: '6wD4V0rvlDI'
    // 	},
    // 	{
    // 		name: "Video2",
    // 		slug: "video-2",
    // 		embed: '6wD4V0rvlDI'
    // 	},
    // 	{
    // 		name: "Video3",
    // 		slug: "video-3",
    // 		embed: null
    // 	}
    // ]
    function VideoListComponent(http, videoService) {
        this.http = http;
        this.videoService = videoService;
        this.title = "Video List";
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todayDate = new Date();
        this.req = this.videoService.getAllVideos().subscribe(function (data) {
            _this.videoList = data;
        });
        // this.req = this.http.get('assets/json/videos.json').subscribe(data => { console.log(data.json());
        // 	this.videoList = data.json() as any;
        // })
    };
    VideoListComponent.prototype.getEmbedURL = function (embed) {
        return 'http://www.youtube.com/embed/' + embed;
    };
    VideoListComponent.prototype.ngOnDestroy = function () {
        this.req.unsubscribe();
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'video-list',
        template: __webpack_require__(398),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__video_service__["a" /* VideoService */]) === "function" && _b || Object])
], VideoListComponent);

var _a, _b;
//# sourceMappingURL=video-list.component.js.map

/***/ })

},[439]);
//# sourceMappingURL=main.bundle.js.map