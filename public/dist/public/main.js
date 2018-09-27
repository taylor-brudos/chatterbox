(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _chatterbox_chatterbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chatterbox/chatterbox.component */ "./src/app/chatterbox/chatterbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', pathMatch: "full", redirectTo: '/home' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'welcome', component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_2__["SplashComponent"] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
    { path: 'chat/:id', component: _chatterbox_chatterbox_component__WEBPACK_IMPORTED_MODULE_5__["ChatterboxComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = "\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"


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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'Chatterbox';
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());

//Hey Taylor I'm here - rinebob


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _chatterbox_chatterbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatterbox/chatterbox.component */ "./src/app/chatterbox/chatterbox.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _splash_splash_component__WEBPACK_IMPORTED_MODULE_8__["SplashComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_9__["CreateComponent"],
                _chatterbox_chatterbox_component__WEBPACK_IMPORTED_MODULE_10__["ChatterboxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chatterbox/chatterbox.component.css":
/*!*****************************************************!*\
  !*** ./src/app/chatterbox/chatterbox.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatHeader{\r\n\theight: 200px;\r\n\twidth: 80%;\r\n\tpadding-left: 100px;\r\n}\r\n\r\n.chatBox{\r\n\t/* height: 800px; */\r\n\twidth: 800px;\r\n\tborder: 2px solid black;\r\n\tborder-radius: 10px;\r\n\r\n}\r\n\r\n.boxHeading{\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n}\r\n\r\n.chatWindow{\r\n\t/* height: 600px; */\r\n\tmargin: 20px;\r\n\t/* width: 600px; */\r\n\tborder: 2px solid black;\r\n\tborder-radius: 10px;\r\n\r\n}\r\n\r\n.messagesWindow{\r\n\theight: 400px;\r\n\tmargin: 25px;\r\n\t/* width: 600px; */\r\n\tborder: 2px solid black;\r\n\tborder-radius: 10px;\r\n\r\n}\r\n\r\n.messageField{\r\n\theight: 100px;\r\n\tmargin: 25px;\r\n\t/* width: 600px; */\r\n\tborder: 2px solid black;\r\n\tborder-radius: 10px;\r\n\r\n}\r\n\r\n.buttonBox{\r\n\t/* width: 100px;\r\n\tmargin: 25px; */\r\n\tpadding: 25px;\r\n\t/* width: 600px; */\r\n\tborder: 2px solid black;\r\n\tborder-radius: 10px;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/chatterbox/chatterbox.component.html":
/*!******************************************************!*\
  !*** ./src/app/chatterbox/chatterbox.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\t<!-- COMPONENT SHOW CAKE DETAILS - TWO FIELD DATA DISPLAY -->\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col chatBox\">\t\r\n\t\t<div class=\"row chatHeader\">\r\n\t\t\t<div class=\"col-12 m-3 \">\r\n\t\t\t\t<div class=\"row m-3\">\r\n\t\t\t\t\t<h3 class=\"col-6 font-weight-bold\">Chatterbox Topic:</h3>\r\n\t\t\t\t\t<div class=\"col boxHeading\"><strong>{{box[\"topic\"]}}</strong></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row m-3\">\r\n\t\t\t\t\t<h3 class=\"col-6 font-weight-bold\">Box ID#:</h3>\r\n\t\t\t\t\t<div class=\"col boxHeading\">{{box['_id']}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row m-3\">\r\n\t\t\t\t\t<h3 class=\"col-6 font-weight-bold\">Description:</h3>\r\n\t\t\t\t\t<div class=\"col boxHeading\">{{box['desc']}}</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col chatWindow\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col messagesWindow\">\r\n\t\t\t\t\t\t<table class=\"table table-striped\">\r\n\t\t\t\t\t\t\t<!-- <thead>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Prod. Id</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Qty</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Price</th>\r\n\t\t\t\t\t\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</thead> -->\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"mr-3\">{{message[\"username\"]}}</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"mr-3\">{{message[\"createdAt\"]}}</td>\r\n\t\t\t\t\t\t\t\t<!-- </tr>\r\n\t\t\t\t\t\t\t\t<tr> -->\r\n\t\t\t\t\t\t\t\t\t<td class=\"mr-3\">{{message[\"content\"]}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\r\n\t\t\t\t\t\t<form (submit)=\"sendMessage()\">\r\n\t\t\t\t\t\t\t<div class=\"row messageField p-4\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-9\">\r\n\t\t\t\t\t\t\t\t\t<!-- <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\".form-control-lg\"> -->\r\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" a></textarea>\r\n\t\t\t\t\t\t\t\t\t<!-- <input type=\"text\" form-control required minlength=\"2\" name=\"message.content\" #message=\"ngModel\" [(ngModel)]=\"message.content\" /> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col buttonbox px-5\">\r\n\t\t\t\t\t\t\t\t\t<input class=\"btn btn-primary btn-lg\" type=\"submit\" value=\"Send\"/>\r\n\t\t\t\t\t\t\t\t\t<!-- <input [disabled]=\"message.valid\" class=\"btn btn-primary btn-sm\" type=\"submit\" value=\"Send\"/> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chatterbox/chatterbox.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chatterbox/chatterbox.component.ts ***!
  \****************************************************/
/*! exports provided: ChatterboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatterboxComponent", function() { return ChatterboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatterboxComponent = /** @class */ (function () {
    function ChatterboxComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    ChatterboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = { id: "" };
        this.box = { topic: "", desc: "", welcome: "" };
        this.username = { username: "" };
        this.message = { username: "", content: "" };
        this.messages = { messages: "" };
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log("05 chbox.c.ts onInit params.id = ", params.id);
        });
        this.getBox(this.id);
    };
    ChatterboxComponent.prototype.getBox = function (id) {
        var _this = this;
        var obs = this._httpService.getOneFromServer(id);
        obs.subscribe(function (response) {
            console.log("30 chbox.c.ts getBox response.  response = ", response);
            if (response['status'] == false) {
                _this.messages = response['messages'];
                console.log("32 chbox.c.ts getBox.  status=false.  response.ServerMessage = ", response['ServerMessage']);
            }
            else {
                if (response['status'] == true) {
                    console.log("34 chbox.c.ts getBox.  status=true.  response['Box'] = ", response['Box'], " response.ServerMessage = ", response['ServerMessage']);
                    _this.box = response['Box'];
                    _this.message = response['ServerMessage'];
                    _this.messages = response['Box']['messages'];
                    console.log("36 chbox.c.ts getBox.  status=true.  response['Box']['messages'] = ", response['Box']['messages']);
                }
            }
        });
    };
    ChatterboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chatterbox',
            template: __webpack_require__(/*! ./chatterbox.component.html */ "./src/app/chatterbox/chatterbox.component.html"),
            styles: [__webpack_require__(/*! ./chatterbox.component.css */ "./src/app/chatterbox/chatterbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], ChatterboxComponent);
    return ChatterboxComponent;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = "<div>\n  <h1>Chatterbox</h1>\n  <h4>Create a chatterbox!</h4>\n  <div>\n    <ul>\n      <li *ngFor=\"let i of errors\">{{i}}</li>\n    </ul>\n  </div>\n  <form (submit)=\"createBox()\">\n    <table>\n      <tr>\n        <td>Topic:</td>\n        <td><input \n          type=\"text\"\n          name=\"topic\"\n          required\n          minlength=\"3\"\n          [(ngModel)]=\"newBox.topic\"\n          #topic=\"ngModel\"/>\n        </td>\n        <td *ngIf=\"topic.errors\">\n          <p *ngIf=\"topic.errors['required']\">required</p>\n          <p *ngIf=\"topic.errors['minlength']\"> {{topic.errors['minlength']['actualLength']}}/{{topic.errors['minlength']['requiredLength']}} required characters.</p>\n        </td>\n      </tr>\n      <tr>\n        <td>Description:</td>\n        <td><input\n          type=\"text\"\n          name=\"desc\"\n          required\n          minlength=\"5\"\n          [(ngModel)]=\"newBox.desc\"\n          #desc=\"ngModel\"/>\n        </td>\n        <td *ngIf=\"desc.errors\">\n          <p *ngIf=\"desc.errors['required']\">required</p>\n          <p *ngIf=\"desc.errors['minlength']\"> {{desc.errors['minlength']['actualLength']}}/{{desc.errors['minlength']['requiredLength']}} required characters. </p>\n        </td>\n      </tr>\n      <tr>\n        <td>Welcome Message:</td>\n        <td><input\n          type=\"text\"\n          name=\"welcome\"\n          required\n          minlength=\"5\"\n          [(ngModel)]=\"newBox.welcome\"\n          #welcome=\"ngModel\"/>\n        </td>\n        <td *ngIf=\"welcome.errors\">\n          <p *ngIf=\"welcome.errors['required']\">required</p>\n          <p *ngIf=\"welcome.errors['minlength']\"> {{welcome.errors['minlength']['actualLength']}}/{{welcome.errors['minlength']['requiredLength']}} required characters. </p>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"goHome()\"><button>Cancel</button></td>\n        <td>\n          <button>Submit</button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>"


/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.errors = [];
        this.newBox = {
            topic: '',
            desc: '',
            welcome: '',
            messages: []
        };
    }
    CreateComponent.prototype.ngOnInit = function () { };
    CreateComponent.prototype.createBox = function () {
        var _this = this;
        var obs = this._http.createNewToServer(this.newBox);
        obs.subscribe(function (data) {
            if (data['ServerMessage'] == "Error") {
                _this.errors = [];
                if (typeof (data['Error']) == 'string') {
                    _this.errors.push(data['Error']);
                }
                else {
                    for (var key in data['Error']['errors']) {
                        _this.errors.push(data['Error']['errors'][key]['message']);
                    }
                }
            }
            else {
                _this.newBox = {
                    topic: '',
                    desc: '',
                    welcome: '',
                    messages: []
                };
            }
            _this.goToBox();
        });
    };
    CreateComponent.prototype.goToBox = function () {
        //this code will need to change to redirect to the box
        this._router.navigate(['/home']);
    };
    CreateComponent.prototype.goHome = function () {
        this._router.navigate(['/home']);
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = "<div>\n  <a href=\"/create\"><button>Create a chatterbox!</button></a>\n  <h1>Current Topics</h1>\n  <table>\n    <tr>\n      <th>Topic</th>\n      <th>Id</th>\n      <th>Last Update</th>\n      <th>Messages</th>\n      <th>Join</th>\n    </tr>\n    <tr *ngFor=\"let box of boxes\">\n      <td>{{box['topic']}}</td>\n      <td>{{box['_id']}}</td>\n      <td>Time/Date</td>\n      <td>#</td>\n      <td><a href=\"/chat/{{box['_id']}}\"><button>Join</button></a></td>\n    </tr>\n  </table>\n</div>"


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBoxes();
    };
    HomeComponent.prototype.getBoxes = function () {
        var _this = this;
        var obs = this._httpService.getAllFromServer();
        obs.subscribe(function (data) {
            if (data['ServerMessage'] == "Success") {
                _this.boxes = data['Boxes'];
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllFromServer = function () {
        return this._http.get('/items');
    };
    HttpService.prototype.getOneFromServer = function (id) {
        console.log("130 service.ts getOneFromServer id = ", id);
        return this._http.get('/items/' + id);
    };
    HttpService.prototype.updateToServer = function (id, box) {
        return this._http.put('/items/' + id, box);
    };
    HttpService.prototype.deleteToServer = function (id) {
        return this._http.delete('/items/' + id);
    };
    HttpService.prototype.createNewToServer = function (box) {
        return this._http.post('/items', box);
    };
    HttpService.prototype.createMessageToServer = function (id, message) {
        return this._http.post('/items/' + id + '/subitem', message);
    };
    HttpService.prototype.getMessagesFromServer = function (id) {
        return this._http.get('/items/' + id + '/subitem');
    };
    HttpService.prototype.deleteMessageToServer = function (id, sid) {
        return this._http.delete('/items/' + id + '/subitem/' + sid);
    };
    HttpService.prototype.createUser = function (user) {
        console.log("100 service.ts createUser.  user = ", user);
        return this._http.post('/items', user);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/splash/splash.component.css":
/*!*********************************************!*\
  !*** ./src/app/splash/splash.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/splash/splash.component.html":
/*!**********************************************!*\
  !*** ./src/app/splash/splash.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = "\r\n<div class=\"container\">\r\n\t<div class=\"row flex-row \">\r\n\t\t<div class=\"col d-flex mx-auto display-1 justify-content-center \">\r\n\t\t\t<h1 class=\"text-align: center\">Chatter</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row flex-row\">\r\n\t\t<div class=\"col d-flex mx-auto display-1 justify-content-center \">\r\n\t\t\t<h3 class=\"display-5\">Let's Get Chattering!</h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col d-flex justify-content-center border rounded mx-auto main-border\">\r\n\t\t\t<form (submit)=\"createUser()\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <p> {{ messages | json }} </p>\r\n\t\t\t\t\t<p> {{ user | json }} </p> -->\r\n\r\n\t\t\t\t\t<!-- <div *ngIf=\"!username.valid && (username.dirty || username.touched)\">\r\n\t\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"username.errors.required\">Username is required</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.username\">{{ messages.username }}</span>\r\n\t\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span> -->\r\n\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-6\" path=\"name\">Your username:</label>\r\n\t\t\t\t\t\t<input type=\"text\" name=\"user.username\" [(ngModel)]=\"user.username\" />\r\n\t\t\t\t\t\t<!-- <input type=\"text\" required name=\"user.username\" #username=\"ngModel\" [(ngModel)]=\"user.username\" /> -->\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <div *ngIf=\"!location.valid && (location.dirty || location.touched)\">\r\n\t\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"location.errors.required\">Location is required</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.location\">{{ messages.location }}</span>\r\n\t\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span> -->\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-6\" path=\"name\">Your location:</label>\r\n\t\t\t\t\t\t<input type=\"text\" name=\"user.location\" [(ngModel)]=\"user.location\"/>\r\n\t\t\t\t\t\t<!-- <input type=\"text\" required name=\"user.location\" #location=\"ngModel\" [(ngModel)]=\"user.location\" /> -->\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- <div *ngIf=\"!funfact.valid && (funfact.dirty || funfact.touched)\">\r\n\t\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"funfact.errors.required\">Fun fact is required</span>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<span class=\"text-danger\" *ngIf=\"messages.funfact\">{{ messages.funfact }}</span>\r\n\t\t\t\t\t<span class=\"text-success\" *ngIf=\"message\">{{ message }}</span> -->\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t<label class=\"col-6\">Fun fact about you:</label>\r\n\t\t\t\t\t\t<input type=\"text\" name=\"user.funfact\"[(ngModel)]=\"user.funfact\"/>\r\n\t\t\t\t\t\t<!-- <input type=\"text\" required name=\"user.funfact\" #funfact=\"ngModel\" [(ngModel)]=\"user.funfact\" /> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-block btn-primary btn-lg m-x-2\" value=\"Let's Go!\"/>\r\n\t\t\t\t\t<!-- <input [disabled]=\"!name.valid || !location.valid || !funfact.valid\" class=\"btn btn-primary btn-sm\" type=\"submit\" value=\"Let's Go!\"/> -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"
/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashComponent = /** @class */ (function () {
    function SplashComponent(_route, _router, _httpService) {
        this._route = _route;
        this._router = _router;
        this._httpService = _httpService;
    }
    SplashComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = { id: "" };
        this.user = { username: "", location: "", funfact: "" };
        this.username = { name: "" };
        this.message = { success: "", name: "" };
        this.messages = { messages: "" };
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            //	console.log("05 params.id = ",params.id," params['id'] = ",params['id']);
        });
    };
    SplashComponent.prototype.createUser = function () {
        var _this = this;
        var obs = this._httpService.createUser(this.user);
        obs.subscribe(function (response) {
            console.log("10 splash.c.ts createUser.  this.user = ", _this.user);
            if (response['status'] == false) {
                _this.messages = response['messages'];
                console.log("12 splash.c.ts createUser.  status=false.  response.messages = ", response['messages']);
            }
            else {
                if (response['status'] == true) {
                    console.log("14 splash.c.ts createUser.  status=true.  response['user'] = ", response['user'], " response.message = ", response['message']);
                    _this.message = response['message'];
                    _this.storeSessionData(_this.user);
                    //	this.showHome()
                }
            }
        });
    };
    SplashComponent.prototype.storeSessionData = function (user) {
        sessionStorage.username = user.username;
        sessionStorage.location = user.location;
        sessionStorage.funfact = user.funfact;
        console.log("sessionStorage:");
        console.log("username = ", sessionStorage.username);
        console.log("location = ", sessionStorage.location);
        console.log("funfact = ", sessionStorage.funfact);
        this.ngOnInit();
    };
    SplashComponent.prototype.showHome = function () {
        this._router.navigate(['/home']);
    };
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], SplashComponent);
    return SplashComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\AA_local_Code\z_git\chatterbox\chatterbox\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map