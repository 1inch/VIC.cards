(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"max-width: 768px; margin: 50px auto;\">\n  <a class=\"btn btn-primary\" routerLink=\"/\"><img src=\"assets/logo.svg\" style=\"margin: 0 auto 50px auto; width: 200px; display: block;\"></a>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routes, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./no-content/no-content.component */ "./src/app/no-content/no-content.component.ts");
/* harmony import */ var _card_card_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card-form.module */ "./src/app/card/card-form.module.ts");
/* harmony import */ var _card_card_form_trade_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card/card-form/trade-form.component */ "./src/app/card/card-form/trade-form.component.ts");
/* harmony import */ var _sign_sign_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sign/sign.module */ "./src/app/sign/sign.module.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_12__);













var routes = [
    {
        path: '',
        component: _card_card_form_trade_form_component__WEBPACK_IMPORTED_MODULE_9__["TradeFormComponent"]
    },
    {
        path: 'sign/:privateKey/:proof',
        component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_11__["SignComponent"]
    },
    {
        path: '**',
        component: _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_7__["NoContentComponent"]
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _no_content_no_content_component__WEBPACK_IMPORTED_MODULE_7__["NoContentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _card_card_form_module__WEBPACK_IMPORTED_MODULE_8__["CardFormModule"],
                _sign_sign_module__WEBPACK_IMPORTED_MODULE_10__["SignModule"],
                primeng_panel__WEBPACK_IMPORTED_MODULE_12__["PanelModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes, {
                    enableTracing: false,
                    useHash: true
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card-form.module.ts":
/*!******************************************!*\
  !*** ./src/app/card/card-form.module.ts ***!
  \******************************************/
/*! exports provided: CardFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFormModule", function() { return CardFormModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _card_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-form/trade-form.component */ "./src/app/card/card-form/trade-form.component.ts");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_vcard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-vcard */ "./node_modules/ngx-vcard/fesm5/ngx-vcard.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");










var CardFormModule = /** @class */ (function () {
    function CardFormModule() {
    }
    CardFormModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_4__["UtilModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CodeHighlighterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["KeyFilterModule"],
                ngx_vcard__WEBPACK_IMPORTED_MODULE_8__["NgxVcardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            declarations: [_card_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__["TradeFormComponent"]],
            exports: [_card_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__["TradeFormComponent"]],
            entryComponents: [_card_form_trade_form_component__WEBPACK_IMPORTED_MODULE_3__["TradeFormComponent"]]
        })
    ], CardFormModule);
    return CardFormModule;
}());



/***/ }),

/***/ "./src/app/card/card-form/VicABI.json":
/*!********************************************!*\
  !*** ./src/app/card/card-form/VicABI.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"root","type":"uint160"},{"name":"index","type":"uint32"}],"name":"report","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"index","type":"uint32"}],"name":"_report","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"index","type":"uint32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"}],"name":"reportBySignature","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"count","type":"uint32"}],"name":"_publish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"count","type":"uint32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"}],"name":"publishBySignature","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"root","type":"uint160"},{"name":"count","type":"uint32"}],"name":"publish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"root","type":"uint160"},{"indexed":false,"name":"count","type":"uint32"}],"name":"CardsAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"root","type":"uint160"},{"indexed":false,"name":"index","type":"uint32"}],"name":"CardCompromised","type":"event"}];

/***/ }),

/***/ "./src/app/card/card-form/trade-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/card/card-form/trade-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-panel-footer {\n  text-align: center;\n}\n\n.ui-card-body {\n  padding: 0 0 0.5em 0;\n}\n\n.ui-card {\n  border: 1px solid #ccc;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLWZvcm0vdHJhZGUtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UscUJBQXFCO0NBQ3RCOztBQUVEO0VBQ0UsdUJBQXVCO0NBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY2FyZC9jYXJkLWZvcm0vdHJhZGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLXBhbmVsLWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVpLWNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAgMCAwLjVlbSAwO1xufVxuXG4udWktY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/card/card-form/trade-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/card/card-form/trade-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel>\n  <p-header>\n    Generate VIC Cards\n  </p-header>\n\n  <div class=\"ui-g ui-fluid\">\n\n    <div class=\"ui-g-12 ui-md-12\">\n        <span class=\"ui-float-label\">\n            <input [(ngModel)]=\"vCard.title\" [disabled]=\"loading\" id=\"title\" pInputText size=\"30\" type=\"text\">\n            <label for=\"organization\">Title</label>\n        </span>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12\">\n        <span class=\"ui-float-label\">\n            <input [(ngModel)]=\"vCard.name.firstNames\" [disabled]=\"loading\" id=\"firstName\" pInputText size=\"30\" type=\"text\">\n            <label for=\"firstName\">First Name</label>\n        </span>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12\">\n        <span class=\"ui-float-label\">\n            <input [(ngModel)]=\"vCard.name.lastNames\" [disabled]=\"loading\" id=\"lastName\" pInputText size=\"30\" type=\"text\">\n            <label for=\"lastName\">Last Name</label>\n        </span>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12\">\n        <span class=\"ui-float-label\">\n            <input [(ngModel)]=\"vCard.organization\" [disabled]=\"loading\" id=\"organization\" pInputText size=\"30\" type=\"text\">\n            <label for=\"organization\">Organization</label>\n        </span>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12\">\n        <span class=\"ui-float-label\">\n            <input [(ngModel)]=\"vCard.telephone\" [disabled]=\"loading\" id=\"workPhone\" pInputText size=\"30\" type=\"tel\">\n            <label for=\"workPhone\">Work Phone</label>\n        </span>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12\">\n        <span class=\"ui-float-label\">\n            <input [(ngModel)]=\"vCard.workEmail\" [disabled]=\"loading\" id=\"emailAddress\" pInputText size=\"30\" type=\"tel\">\n            <label for=\"emailAddress\">E-Mail Address</label>\n        </span>\n    </div>\n  </div>\n\n  <p-footer style=\"text-align: center;\">\n    <div class=\"margin: 0 auto;\">\n      <button pButton type=\"button\" class=\"ui-button-rounded\" label=\"Generate\" [disabled]=\"loading\" (click)=\"generate()\"></button>\n      &nbsp;\n      <button pButton type=\"reset\" class=\"ui-button-danger ui-button-rounded\" [disabled]=\"loading\" label=\"Reset\" (click)=\"resetVCard()\"></button>\n    </div>\n  </p-footer>\n</p-panel>\n\n<br>\n\n<p-panel header=\"VIC Cards\" [hidden]=\"!QRCodes.length\">\n  <div id=\"contentToConvert\" class=\"ui-g ui-fluid\">\n    <p-card *ngFor=\"let QRCode of QRCodes\" class=\"ui-g-6\">\n\n      <div class=\"ui-g ui-fluid\">\n        <div class=\"ui-g-5\">\n          <img [src]=\"QRCode\" width=\"135\">\n        </div>\n        <div class=\"ui-g-7\">\n          <span style=\"font-size: 20pt;\">\n            <div [hidden]=\"!vCard.title\">\n              {{vCard.title}}\n            </div>\n\n            {{vCard.name.firstNames + ' ' + vCard.name.lastNames}}\n            <div style=\"color: darkgray; font-size: 14pt;\">\n              {{vCard.organization}}\n            </div>\n          </span>\n        </div>\n      </div>\n\n      <p-footer>\n        <div style=\"text-align: center\">\n          📞 {{vCard.telephone}}&nbsp;&nbsp;&nbsp;📨 {{vCard.workEmail}}\n        </div>\n      </p-footer>\n    </p-card>\n  </div>\n</p-panel>\n"

/***/ }),

/***/ "./src/app/card/card-form/trade-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/card/card-form/trade-form.component.ts ***!
  \********************************************************/
/*! exports provided: TradeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeFormComponent", function() { return TradeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _util_merkle_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/merkle-tree */ "./src/app/util/merkle-tree.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/npm/index.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_9__);










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__["fab"]);
var QRCode = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
var vicArtifacts = __webpack_require__(/*! ./VicABI.json */ "./src/app/card/card-form/VicABI.json");
var VCardFormatter = __webpack_require__(/*! ngx-vcard/esm5/lib/ngx-vcard.formatter */ "./node_modules/ngx-vcard/esm5/lib/ngx-vcard.formatter.js").VCardFormatter;
var TradeFormComponent = /** @class */ (function () {
    function TradeFormComponent(web3Service) {
        this.web3Service = web3Service;
        this.loading = false;
        this.vicSmartContractAddress = '0xd321d87758e588438a5c3da5a6f1db076cd6c551';
        this.URL_PREFIX = 'https://vic.cards/#/sign/';
        this.vCard = {
            name: {
                firstNames: '',
                lastNames: ''
            },
            organization: '',
            telephone: '',
            workEmail: '',
            title: ''
        };
        this.QRCodes = [];
        this.accounts = [];
        this.account = null;
        // console.log('Constructor: ' + web3Service);
    }
    TradeFormComponent.prototype.ngOnInit = function () {
        // console.log('OnInit: ' + this.web3Service);
        this.watchAccount();
        // console.log(this);
    };
    TradeFormComponent.prototype.resetVCard = function () {
        this.vCard = {
            name: {
                firstNames: '',
                lastNames: ''
            },
            organization: '',
            telephone: '',
            workEmail: '',
            title: ''
        };
    };
    TradeFormComponent.prototype.generate = function (amount) {
        if (amount === void 0) { amount = 8; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var privateKeys, merkleTree, vCards, _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loading = true;
                        privateKeys = Array.from(Array(amount).keys())
                            .map(function (_) { return _this.web3Service.web3.eth.accounts.create(); });
                        merkleTree = new _util_merkle_tree__WEBPACK_IMPORTED_MODULE_7__["MerkleTree"](privateKeys.map(function (pk) { return pk.address; }));
                        return [4 /*yield*/, this.generateVCards(amount, privateKeys.map(function (pk) { return pk.privateKey; }), merkleTree)];
                    case 1:
                        vCards = _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.generateQRCodes(vCards)];
                    case 2:
                        _a.QRCodes = _b.sent();
                        setTimeout(this.generatePDF, 300);
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.storeMerkleTree = function (merkleTree) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var vicContract;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);
                        console.log(this.web3Service.web3.eth.accounts.getAccount);
                        return [4 /*yield*/, vicContract.methods
                                .publish(merkleTree.getHexRoot(), merkleTree.elements.length)
                                .send({
                                from: this.account
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TradeFormComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            console.log('Accounts: ', accounts);
            _this.accounts = [];
            for (var i = 0; i < accounts.length; i++) {
                _this.accounts.push({
                    label: accounts[i],
                    value: accounts[i],
                });
            }
            // console.log('Accounts', this.accounts);
            _this.account = accounts[0];
        });
    };
    TradeFormComponent.prototype.generateVCards = function (amount, privateKeys, merkleTree) {
        var _this = this;
        var vCards = privateKeys.map(function (privateKey, index) {
            var proof = merkleTree.getHexProof(index);
            var vCard = {
                name: {
                    firstNames: _this.vCard.name.firstNames,
                    lastNames: _this.vCard.name.lastNames
                },
                organization: _this.vCard.organization,
                telephone: _this.vCard.telephone ? [
                    _this.vCard.telephone
                ] : undefined,
                workEmail: _this.vCard.workEmail ? [
                    _this.vCard.workEmail
                ] : undefined,
                title: _this.vCard.title,
                url: _this.URL_PREFIX + privateKey.substr(2) + '/' + proof
                // .toString()
                // .replace(/,/g, '')
                // .replace(/0x/g, '')
            };
            return VCardFormatter.getVCardAsString(vCard);
        });
        console.log('VCards', vCards);
        return vCards;
    };
    TradeFormComponent.prototype.generateQRCodes = function (vCards) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var QRCodes;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(vCards.map(function (value) { return QRCode.toDataURL(value); }))];
                    case 1:
                        QRCodes = _a.sent();
                        console.log('QRCodes', QRCodes);
                        return [2 /*return*/, QRCodes];
                }
            });
        });
    };
    TradeFormComponent.prototype.generatePDF = function () {
        var data = document.getElementById('contentToConvert');
        console.log('Data:', data);
        html2canvas__WEBPACK_IMPORTED_MODULE_9___default()(data).then(function (canvas) {
            console.log('Canvas:', canvas);
            // Few necessary setting options
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_8__('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('MYPdf.pdf'); // Generated PDF
        });
    };
    TradeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trade-form',
            template: __webpack_require__(/*! ./trade-form.component.html */ "./src/app/card/card-form/trade-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./trade-form.component.css */ "./src/app/card/card-form/trade-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_2__["Web3Service"]])
    ], TradeFormComponent);
    return TradeFormComponent;
}());



/***/ }),

/***/ "./src/app/no-content/no-content.component.css":
/*!*****************************************************!*\
  !*** ./src/app/no-content/no-content.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tY29udGVudC9uby1jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9uby1jb250ZW50L25vLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/no-content/no-content.component.html":
/*!******************************************************!*\
  !*** ./src/app/no-content/no-content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel>\n  <p-header>\n    Page Not Found!\n  </p-header>\n\n  <p>\n    Seems you're looking for something that doesn't exist. <a class=\"btn btn-primary\" routerLink=\"/\">Return home</a>\n  </p>\n</p-panel>\n"

/***/ }),

/***/ "./src/app/no-content/no-content.component.ts":
/*!****************************************************!*\
  !*** ./src/app/no-content/no-content.component.ts ***!
  \****************************************************/
/*! exports provided: NoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoContentComponent", function() { return NoContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoContentComponent = /** @class */ (function () {
    function NoContentComponent() {
    }
    NoContentComponent.prototype.ngOnInit = function () {
    };
    NoContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-content',
            template: __webpack_require__(/*! ./no-content.component.html */ "./src/app/no-content/no-content.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./no-content.component.css */ "./src/app/no-content/no-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoContentComponent);
    return NoContentComponent;
}());



/***/ }),

/***/ "./src/app/sign/VicABI.json":
/*!**********************************!*\
  !*** ./src/app/sign/VicABI.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"root","type":"uint160"},{"name":"index","type":"uint32"}],"name":"report","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"index","type":"uint32"}],"name":"_report","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"index","type":"uint32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"}],"name":"reportBySignature","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"count","type":"uint32"}],"name":"_publish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"user","type":"address"},{"name":"root","type":"uint160"},{"name":"count","type":"uint32"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"v","type":"uint8"}],"name":"publishBySignature","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"root","type":"uint160"},{"name":"count","type":"uint32"}],"name":"publish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"root","type":"uint160"},{"indexed":false,"name":"count","type":"uint32"}],"name":"CardsAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":true,"name":"root","type":"uint160"},{"indexed":false,"name":"index","type":"uint32"}],"name":"CardCompromised","type":"event"}];

/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign/sign.component.html":
/*!******************************************!*\
  !*** ./src/app/sign/sign.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-panel>\n  <p-header>\n    Sign Form\n  </p-header>\n\n  <div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-md-12\">\n      <code style=\"border: 1px solid #ccc; background: #efefef; padding: 10px; display: block\">\n        0x\n      </code>\n    </div>\n  </div>\n\n  <p-footer style=\"text-align: center;\">\n    <div class=\"margin: 0 auto;\">\n      <button pButton type=\"button\" class=\"ui-button-rounded ui-button-success\" label=\"📤 E-MAIL\" [disabled]=\"loading\" (click)=\"sign()\"></button>\n    </div>\n  </p-footer>\n</p-panel>\n"

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_web3_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/web3.service */ "./src/app/util/web3.service.ts");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _util_merkle_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/merkle-tree */ "./src/app/util/merkle-tree.ts");









_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__["fab"]);
var vicArtifacts = __webpack_require__(/*! ./VicABI.json */ "./src/app/sign/VicABI.json");
var SignComponent = /** @class */ (function () {
    function SignComponent(web3Service, route, router) {
        this.web3Service = web3Service;
        this.route = route;
        this.router = router;
        this.privateKey = '';
        this.proof = [];
        this.loading = false;
        this.account = null;
        this.accounts = [];
        this.vicSmartContractAddress = '0xd321d87758e588438a5c3da5a6f1db076cd6c551';
        // console.log('Constructor: ' + web3Service);
    }
    SignComponent.prototype.ngOnInit = function () {
        // console.log('OnInit: ' + this.web3Service);
        this.privateKey = '0x' + this.route.snapshot.paramMap.get('privateKey');
        this.proof = this.route.snapshot.paramMap.get('proof').split(',');
        console.log('Private Key', this.privateKey);
        console.log('Proof', this.proof);
        console.log('Web3', this.web3Service);
        this.parseEvents();
        // console.log(this);
    };
    SignComponent.prototype.parseEvents = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var scope, account, _a, root, index, vicContract, events;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scope = this;
                        if (!this.web3Service.ready) {
                            return [2 /*return*/, setTimeout(function () {
                                    scope.parseEvents();
                                }, 100)];
                        }
                        account = this.web3Service.web3.eth.accounts.create(this.privateKey).address;
                        _a = _util_merkle_tree__WEBPACK_IMPORTED_MODULE_8__["MerkleTree"].applyProof(account, this.proof), root = _a.root, index = _a.index;
                        vicContract = new this.web3Service.web3.eth.Contract(vicArtifacts, this.vicSmartContractAddress);
                        return [4 /*yield*/, vicContract.getPastEvents('CardsAdded', {
                                filter: { root: root },
                                fromBlock: 7094907,
                                toBlock: 'latest'
                            })];
                    case 1:
                        events = _b.sent();
                        console.log('Events', events);
                        return [2 /*return*/];
                }
            });
        });
    };
    SignComponent.prototype.sign = function () {
    };
    SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! ./sign.component.html */ "./src/app/sign/sign.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_util_web3_service__WEBPACK_IMPORTED_MODULE_1__["Web3Service"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/app/sign/sign.module.ts":
/*!*************************************!*\
  !*** ./src/app/sign/sign.module.ts ***!
  \*************************************/
/*! exports provided: SignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignModule", function() { return SignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _util_util_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/util.module */ "./src/app/util/util.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_vcard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-vcard */ "./node_modules/ngx-vcard/fesm5/ngx-vcard.js");
/* harmony import */ var _sign_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sign.component */ "./src/app/sign/sign.component.ts");









var SignModule = /** @class */ (function () {
    function SignModule() {
    }
    SignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _util_util_module__WEBPACK_IMPORTED_MODULE_3__["UtilModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CodeHighlighterModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DialogModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["PanelModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["KeyFilterModule"],
                ngx_vcard__WEBPACK_IMPORTED_MODULE_7__["NgxVcardModule"]
            ],
            declarations: [_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"]],
            exports: [_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"]],
            entryComponents: [_sign_component__WEBPACK_IMPORTED_MODULE_8__["SignComponent"]]
        })
    ], SignModule);
    return SignModule;
}());



/***/ }),

/***/ "./src/app/util/merkle-tree.ts":
/*!*************************************!*\
  !*** ./src/app/util/merkle-tree.ts ***!
  \*************************************/
/*! exports provided: MerkleTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerkleTree", function() { return MerkleTree; });
var _a = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js"), keccak256 = _a.keccak256, bufferToHex = _a.bufferToHex;
var keccak160 = function (input) {
    return keccak256(input).slice(12);
};
var MerkleTree = /** @class */ (function () {
    function MerkleTree(elements) {
        // Create layers
        this.layers = null;
        this.elements = null;
        this.elements = elements;
        this.layers = this.getLayers(elements.map(function (el) { return keccak160(el); }));
        return this;
    }
    MerkleTree.applyProof = function (account, proof) {
        var index = 0;
        for (var i = 0; i < proof.length; i++) {
            if (account < proof[i]) {
                account = keccak160(account + proof[i]);
            }
            else {
                account = keccak160(proof[i] + account);
                index += 1 << i;
            }
        }
        return {
            root: account,
            index: index
        };
    };
    MerkleTree.prototype.getLayers = function (elements) {
        var emptyLeveled = keccak160('');
        if ((elements.length % 2) === 1) {
            elements.push(emptyLeveled);
        }
        var tree = [elements];
        var maxLevel = 1 + Math.log2(elements.length);
        for (var level = 1; level <= maxLevel; level++) {
            var current = [];
            for (var i = 0; i < tree[level - 1].length / 2; i++) {
                var a = tree[level - 1][i * 2];
                var b = tree[level - 1][i * 2 + 1];
                var hash = keccak160(Buffer.concat([a, b]));
                current.push(hash);
            }
            if (current.length & 1 && level < maxLevel) {
                current.push(emptyLeveled);
            }
            emptyLeveled = keccak160(Buffer.concat([emptyLeveled, emptyLeveled]));
            tree.push(current);
        }
        return tree;
    };
    MerkleTree.prototype.getRoot = function () {
        return this.layers[this.layers.length - 1][0];
    };
    MerkleTree.prototype.getHexRoot = function () {
        return bufferToHex(this.getRoot());
    };
    MerkleTree.prototype.getProof = function (idx) {
        var _this = this;
        if (idx === -1) {
            throw new Error('Element does not exist in Merkle tree');
        }
        return this.layers.reduce(function (proof, layer) {
            var pairElement = _this.getPairElement(idx, layer);
            if (pairElement) {
                proof.push(pairElement);
            }
            idx = Math.floor(idx / 2);
            return proof;
        }, []);
    };
    MerkleTree.prototype.getHexProof = function (idx) {
        var result = this.getProof(idx);
        return this.bufArrToHexArr(result);
    };
    MerkleTree.prototype.getPairElement = function (idx, layer) {
        var pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
        if (pairIdx < layer.length) {
            return layer[pairIdx];
        }
        else {
            return null;
        }
    };
    MerkleTree.prototype.bufIndexOf = function (el, arr) {
        var hash;
        // Convert element to 32 byte hash if it is not one already
        if (el.length !== 32 || !Buffer.isBuffer(el)) {
            hash = keccak160(el);
        }
        else {
            hash = el;
        }
        for (var i = 0; i < arr.length; i++) {
            if (hash.equals(arr[i])) {
                return i;
            }
        }
        return -1;
    };
    MerkleTree.prototype.bufArrToHexArr = function (arr) {
        if (arr.some(function (el) { return !Buffer.isBuffer(el); })) {
            throw new Error('Array is not an array of buffers');
        }
        return arr.map(function (el) { return '0x' + el.toString('hex'); });
    };
    return MerkleTree;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/util/util.module.ts":
/*!*************************************!*\
  !*** ./src/app/util/util.module.ts ***!
  \*************************************/
/*! exports provided: UtilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilModule", function() { return UtilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _web3_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web3.service */ "./src/app/util/web3.service.ts");




var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                _web3_service__WEBPACK_IMPORTED_MODULE_3__["Web3Service"],
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/*!**************************************!*\
  !*** ./src/app/util/web3.service.ts ***!
  \**************************************/
/*! exports provided: Web3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web3Service", function() { return Web3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var Web3 = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getAccounts, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getAccounts = true;
                        if (!window.ethereum) return [3 /*break*/, 5];
                        window.web3 = new Web3(ethereum);
                        this.web3 = window.web3;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Request account access if needed
                        return [4 /*yield*/, ethereum.enable()];
                    case 2:
                        // Request account access if needed
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        if (typeof window.web3 !== 'undefined') {
                            // Use Mist/MetaMask's provider
                            this.web3 = new Web3(window.web3.currentProvider);
                        }
                        else {
                            console.log('No web3? You should consider trying MetaMask!');
                            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
                            Web3.providers.HttpProvider.prototype.sendAsync = Web3.providers.HttpProvider.prototype.send;
                            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
                            this.web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));
                            getAccounts = false;
                            this.ready = true;
                        }
                        _a.label = 6;
                    case 6:
                        if (getAccounts) {
                            setInterval(function () { return _this.refreshAccounts(); }, 500);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            // console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                //    console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            _this.ready = true;
        });
    };
    Web3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
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

module.exports = __webpack_require__(/*! /home/circleci/repo/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map