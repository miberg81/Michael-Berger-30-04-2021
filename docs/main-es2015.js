(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <header class=\"header row\">\n    <div class=\"left-container\">\n      <h2 class=\"app-title\">Weather App</h2>\n    </div>\n    <nav class=\"nav row\">\n      <a routerLink=\"/home\" routerLinkActive=\"active\"> Home </a>\n      <a routerLink=\"/favorites\" routerLinkActive=\"active\"> Favorites </a>\n      <a routerLink=\"/searchHistory\"> Search History </a>\n    </nav>\n  </header>\n  <main class=\"main\">\n     <router-outlet></router-outlet>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/city/city.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/city/city.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <mat-card class=\"city-card\">\n    <mat-card-header>\n      <mat-card-title>{{city?.name}}</mat-card-title>\n      <mat-card-subtitle>{{city?.country}}</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n        {{city?.tempCurrent}} C \n    </mat-card-content>\n    <mat-card-actions>\n      <button (click)=onOpenCityClicked() mat-button color=\"warn\">Open city</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"wrapper\"\n  fxLayout=\"row wrap\" fxLayoutGap=\"32px grid\" fxLayoutAlign=\"flex-start\">\n  <ng-container *ngFor=\"let cityEl of favorites\">\n    <app-city class=\"city\" [city]=\"cityEl\" fxFlex.gt-xs=\"0 1 calc(20% - 32px)\"></app-city>\n  </ng-container>\n</div> -->\n\n<div class=\"wrapper row\">\n    <app-city class=\"city\" \n    [city]=\"cityEl\" *ngFor=\"let cityEl of favorites\">\n    </app-city>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/city-detail/city-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/city-detail/city-detail.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"row top-row\">\n    <div class=\"row left-container\">\n      <div class=\"column city-name-temp\">\n        <h2 *ngIf=\"city?.name\" class=\"city-name\">{{city?.name}} / {{city?.country}}</h2>\n        <h3 *ngIf=\"city?.tempCurrent\" class=\"city-temp\">{{city?.tempCurrent}} C</h3>    \n      </div>\n    </div>\n    <div class=\"row right-container\">\n      <button mat-button (click)=\"onAddToRemoveFromFavorites()\">\n        <span *ngIf=\"city && !city.isFavorite\" class=\"material-icons md-48\">favorite_border</span>\n        <span *ngIf=\"city && city.isFavorite\" class=\"material-icons md-48\">favorite</span>\n        {{addOrRemoveFromFavorites}}\n      </button>\n    </div>\n  </div>\n  <div class=\"row middle-row\">\n    <h1 class=\"today-cast-title\">{{city?.weatherText}}</h1>\n  </div>\n  <div class=\"row bottom-row\">\n    <app-day-cast class=\"day-cast\" *ngFor=\"let dayCastEl of city?.fiveDaysCast; let i=index\"\n      [dayCast]=\"dayCastEl\">\n    </app-day-cast>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/city-detail/day-cast/day-cast.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/city-detail/day-cast/day-cast.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <mat-card  class=\"day-card\">\n    <mat-card-header>\n      <mat-card-title>{{dayCast.dayOfWeek}}</mat-card-title>\n    </mat-card-header>\n     <mat-icon matSuffix>\n       <span class=\"material-icons md-24\">wb_sunny</span>\n    </mat-icon>\n    <mat-card-content>\n      <p class=\"temperature\">\n         {{minTemp}} / {{maxTemp}} {{unit}}\n      </p>\n      <button mat-button (click)=\"toggleUnit()\">convert!</button>\n    </mat-card-content>\n  </mat-card>  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"row\">\n    <form #form=\"ngForm\" class=\"auto-complete-form\" >\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label class=\"searchLabel\">Please start typing a city name. Full name is not required...</mat-label>\n        <input type=\"text\" id=\"userInput\" placeholder=\"choose from this list\" aria-label=\"Number\" value = \"Tel Aviv / Israel\"\n              matInput\n              pattern=\"^[\\s\\w\\d\\x21-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\x7e]*$\"\n              [ngModel] = \"userInput\"\n              name = \"userInput\"\n              #myInput = \"ngModel\"\n              (keyup) = \"onKeyUp($event)\"\n              [matAutocomplete] = \"auto\">\n        <mat-error *ngIf=\"myInput.invalid\">\"only English letters allowed\"</mat-error>\n        <mat-icon matSuffix><span class=\"material-icons md-24\">search</span></mat-icon>\n      </mat-form-field>\n      <mat-autocomplete #auto = \"matAutocomplete\" class=\"auto-complete\" \n      (optionSelected) = onCitySelected($event) [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let city of matchingCitiesRes\" [value]=\"city\">\n          {{city?.LocalizedName}} / {{city?.Country?.LocalizedName}}\n        </mat-option>\n      </mat-autocomplete>\n    </form>\n  </div>\n\n  <app-city-detail [city] = \"city\"> </app-city-detail>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-history/search-detail/search-detail.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-history/search-detail/search-detail.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>coming soon!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-history/search-history.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-history/search-history.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <table mat-table [dataSource]=\"searchHistory\" multiTemplateDataRows>\n    <ng-container matColumnDef=\"action\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <button mat-icon-button (click)=\"expandedElement = expandedElement === element ? null : element\"         \n                aria-label=\"expand colapse button\">\n                <mat-icon *ngIf=\"element != expandedElement\">add</mat-icon>\n                <mat-icon *ngIf=\"element == expandedElement\">remove</mat-icon>\n        </button>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"country\">\n      <th mat-header-cell *matHeaderCellDef> Country </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.country }} </td>\n    </ng-container>\n\n    <!-- <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> {{ Date | date:'M/yyyy' }} </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.date }}  </td>\n    </ng-container> -->\n\n    <ng-container matColumnDef=\"temp\">\n      <th mat-header-cell *matHeaderCellDef> Temerature </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.tempCurrent }} C  </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\"\n        class=\"data-row\"\n        [class.expanded-row]=\"expandedElement === element\">\n    </tr>\n    <!-- <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\n     class=\"detail-row\"></tr> -->\n\n    <!-- Expanded Content - The detail row is made up of this one cell that spans across all columns -->\n    <!-- <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell class=\"inner-table\" *matCellDef=\"let element\"\n       [attr.colspan]=\"columnsToDisplay.length\">\n        <div class=\"element-detail\"\n            [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n            <app-search-detail [city]=\"element\"></app-search-detail>\n        </div>\n      </td>\n    </ng-container> -->\n\n  </table>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/no-data-alert/no-data-alert.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/no-data-alert/no-data-alert.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n<h1 mat-dialog-title>No favorite cities yet!</h1>\n<div mat-dialog-content>Would you please add some on the home page?<br> Then access them from here.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/server-problem-alert/server-problem-alert.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/server-problem-alert/server-problem-alert.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <h1 mat-dialog-title>Server did not respond as expected</h1>\n  <div mat-dialog-content>Mockup weather data will be shown</div>\n  <div mat-dialog-actions>\n    <button mat-button mat-dialog-close>Close</button>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-history/search-history.component */ "./src/app/components/search-history/search-history.component.ts");






const routes = [
    { path: "", redirectTo: "/home/215854", pathMatch: "full" },
    { path: "home", redirectTo: "/home/215854", pathMatch: "full" },
    { path: "home/:id", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: "favorites", component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_3__["FavoritesComponent"] },
    { path: "searchHistory", component: _components_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_5__["SearchHistoryComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n}\n.wrapper .header {\n  height: 10%;\n  width: 100%;\n  margin: 0;\n  padding: 1rem;\n  border-bottom: 0.2rem solid gray;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.wrapper .header .left-container .app-title {\n  font-weight: bold;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper .header .left-container {\n    display: none;\n  }\n}\n.wrapper .header .nav {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n.wrapper .header .nav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  text-align: center;\n  margin: 0.5rem;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n  min-width: 7rem;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper .header .nav a {\n    min-width: 3rem;\n  }\n}\n.wrapper .header .nav a:visited, .wrapper .header .nav a:link {\n  color: #607d8b;\n}\n.wrapper .header .nav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n.wrapper .header .nav a.active {\n  color: #039be5;\n  border: 3px solid gray;\n  border-radius: 6px;\n}\n.wrapper .main {\n  height: 90%;\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNFSjtBREFNO0VBQ0UsaUJBQUE7QUNFUjtBREFNO0VBSkY7SUFLSSxhQUFBO0VDR047QUFDRjtBRERJO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtBQ0dOO0FERk07RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0lSO0FERlE7RUFWRjtJQVlJLGVBQUE7RUNJUjtBQUNGO0FERk07RUFDRSxjQUFBO0FDSVI7QURGTTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0lSO0FERk07RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0lSO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gIGhlaWdodDoxMDAlO1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLmhlYWRlcntcbiAgICBoZWlnaHQ6MTAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzoxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZCBncmF5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAubGVmdC1jb250YWluZXJ7XG4gICAgICAuYXBwLXRpdGxle1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm5hdntcbiAgICAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgYSB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtaW4td2lkdGg6IDdyZW07XG4gICAgICAgIC8vd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLy93aWR0aDpmaXQtY29udGVudDtcbiAgICAgICAgICBtaW4td2lkdGg6IDNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgICAgICAgY29sb3I6ICM2MDdkOGI7XG4gICAgICB9XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG4gICAgICB9XG4gICAgICBhLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICBib3JkZXI6M3B4IHNvbGlkIGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWFpbiB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICB9XG59XG5cbiIsIi53cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ud3JhcHBlciAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1ib3R0b206IDAuMnJlbSBzb2xpZCBncmF5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ud3JhcHBlciAuaGVhZGVyIC5sZWZ0LWNvbnRhaW5lciAuYXBwLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIC5oZWFkZXIgLmxlZnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ud3JhcHBlciAuaGVhZGVyIC5uYXYge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi53cmFwcGVyIC5oZWFkZXIgLm5hdiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1pbi13aWR0aDogN3JlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLndyYXBwZXIgLmhlYWRlciAubmF2IGEge1xuICAgIG1pbi13aWR0aDogM3JlbTtcbiAgfVxufVxuLndyYXBwZXIgLmhlYWRlciAubmF2IGE6dmlzaXRlZCwgLndyYXBwZXIgLmhlYWRlciAubmF2IGE6bGluayB7XG4gIGNvbG9yOiAjNjA3ZDhiO1xufVxuLndyYXBwZXIgLmhlYWRlciAubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbi53cmFwcGVyIC5oZWFkZXIgLm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ud3JhcHBlciAubWFpbiB7XG4gIGhlaWdodDogOTAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'weather-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_favorites_city_city_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/favorites/city/city.component */ "./src/app/components/favorites/city/city.component.ts");
/* harmony import */ var _components_home_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/city-detail/city-detail.component */ "./src/app/components/home/city-detail/city-detail.component.ts");
/* harmony import */ var _components_home_city_detail_day_cast_day_cast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/city-detail/day-cast/day-cast.component */ "./src/app/components/home/city-detail/day-cast/day-cast.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _components_shared_no_data_alert_no_data_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/no-data-alert/no-data-alert.component */ "./src/app/components/shared/no-data-alert/no-data-alert.component.ts");
/* harmony import */ var _components_shared_server_problem_alert_server_problem_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/server-problem-alert/server-problem-alert.component */ "./src/app/components/shared/server-problem-alert/server-problem-alert.component.ts");
/* harmony import */ var _components_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search-history/search-history.component */ "./src/app/components/search-history/search-history.component.ts");
/* harmony import */ var _components_search_history_search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/search-history/search-detail/search-detail.component */ "./src/app/components/search-history/search-detail/search-detail.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_10__["FavoritesComponent"],
            _components_favorites_city_city_component__WEBPACK_IMPORTED_MODULE_11__["CityComponent"],
            _components_home_city_detail_city_detail_component__WEBPACK_IMPORTED_MODULE_12__["CityDetailComponent"],
            _components_home_city_detail_day_cast_day_cast_component__WEBPACK_IMPORTED_MODULE_13__["DayCastComponent"],
            _components_shared_no_data_alert_no_data_alert_component__WEBPACK_IMPORTED_MODULE_16__["NoDataAlertComponent"],
            _components_shared_server_problem_alert_server_problem_alert_component__WEBPACK_IMPORTED_MODULE_17__["ServerProblemAlertComponent"],
            _components_search_history_search_history_component__WEBPACK_IMPORTED_MODULE_18__["SearchHistoryComponent"],
            _components_search_history_search_detail_search_detail_component__WEBPACK_IMPORTED_MODULE_19__["SearchDetailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        ],
        providers: [
            _services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [
            _components_shared_no_data_alert_no_data_alert_component__WEBPACK_IMPORTED_MODULE_16__["NoDataAlertComponent"],
            _components_shared_server_problem_alert_server_problem_alert_component__WEBPACK_IMPORTED_MODULE_17__["ServerProblemAlertComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/favorites/city/city.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/city/city.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 12rem;\n  height: 15rem;\n  min-height: 13rem;\n  padding: 1rem;\n  margin: 1rem;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    width: 95%;\n  }\n}\n.wrapper .city-card {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 6px;\n}\n.wrapper .city-card mat-card-header {\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.wrapper .city-card mat-card-header mat-card-title, .wrapper .city-card mat-card-header mat-card-subtitle {\n  text-align: center;\n}\n.wrapper .city-card mat-card-content, .wrapper .city-card mat-card-actions {\n  text-align: center;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper .city-card {\n    width: 95%;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2NpdHkvY2l0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvY2l0eS9jaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQU5KO0lBT1EsVUFBQTtFQ0dOO0FBQ0Y7QURGSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0lSO0FESFE7RUFDSSx3QkFBQTtVQUFBLHVCQUFBO0FDS1o7QURKWTtFQUNJLGtCQUFBO0FDTWhCO0FESFE7RUFDSSxrQkFBQTtBQ0taO0FEQVE7RUFwQko7SUFxQlEsVUFBQTtJQUNBLGNBQUE7RUNHVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvY2l0eS9jaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHdpZHRoOjEycmVtO1xuICAgIGhlaWdodDoxNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAxM3JlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1hcmdpbjoxcmVtO1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgd2lkdGg6OTUlO1xuICAgIH1cbiAgICAuY2l0eS1jYXJkIHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWF0LWNhcmQtaGVhZGVyIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWF0LWNhcmQtdGl0bGUsICBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hdC1jYXJkLWNvbnRlbnQsIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hdC1jYXJkLXRpdGxlLCBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gICAgICAgIC8vICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgLy8gfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICB3aWR0aDo5NSU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEycmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xuICBtaW4taGVpZ2h0OiAxM3JlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgfVxufVxuLndyYXBwZXIgLmNpdHktY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ud3JhcHBlciAuY2l0eS1jYXJkIG1hdC1jYXJkLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLndyYXBwZXIgLmNpdHktY2FyZCBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUsIC53cmFwcGVyIC5jaXR5LWNhcmQgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIgLmNpdHktY2FyZCBtYXQtY2FyZC1jb250ZW50LCAud3JhcHBlciAuY2l0eS1jYXJkIG1hdC1jYXJkLWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIC5jaXR5LWNhcmQge1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/favorites/city/city.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/city/city.component.ts ***!
  \*************************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_city_detail_city_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../home/city-detail/city.model */ "./src/app/components/home/city-detail/city.model.ts");




let CityComponent = class CityComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes) {
            this.city = changes.city.currentValue;
        }
    }
    onOpenCityClicked() {
        this.router.navigate(['/home', this.city.key]);
    }
};
CityComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _home_city_detail_city_model__WEBPACK_IMPORTED_MODULE_3__["City"])
], CityComponent.prototype, "city", void 0);
CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./city.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/city/city.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./city.component.scss */ "./src/app/components/favorites/city/city.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CityComponent);



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  flex-wrap: wrap;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    width: 95%;\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBSEY7SUFJSSxVQUFBO0lBQ0EsY0FBQTtFQ0dGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgd2lkdGg6MTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgd2lkdGg6OTUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxufVxuIiwiLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_no_data_alert_no_data_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/no-data-alert/no-data-alert.component */ "./src/app/components/shared/no-data-alert/no-data-alert.component.ts");





let FavoritesComponent = class FavoritesComponent {
    constructor(dataService, dialogue
    //private store: Store<{ favorites: {favorites: City[]} }> 
    ) {
        this.dataService = dataService;
        this.dialogue = dialogue;
    }
    ngOnInit() {
        //this.favorites = this.store.select('favorites')
        this.favorites = this.dataService.getSearchHistory().filter(city => city.isFavorite);
        this.dataService.searchHistoryChanged.subscribe(() => {
            this.favorites = this.dataService.getSearchHistory().filter(city => city.isFavorite);
        });
        if (!this.favorites === undefined || this.favorites.length === 0)
            this.dialogue.open(_shared_no_data_alert_no_data_alert_component__WEBPACK_IMPORTED_MODULE_4__["NoDataAlertComponent"]);
        console.log("favorites", this.favorites);
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/favorites/favorites.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.scss */ "./src/app/components/favorites/favorites.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        //private store: Store<{ favorites: {favorites: City[]} }> 
    ])
], FavoritesComponent);



/***/ }),

/***/ "./src/app/components/home/city-detail/city-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/home/city-detail/city-detail.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 0.2rem solid gray;\n  border-radius: 0.8rem;\n  flex-wrap: wrap;\n  padding: 1rem 0.2rem;\n  opacity: 0.7;\n}\n.wrapper .top-row {\n  height: 15%;\n  min-height: 10rem;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: white;\n  border-radius: 6px;\n  padding: 1rem;\n  margin: 1rem;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper .top-row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.wrapper .top-row .left-container {\n  height: 100%;\n  -webkit-box-flex: 0.1;\n          flex-grow: 0.1;\n}\n.wrapper .top-row .left-container .city-name-temp {\n  width: 100%;\n  justify-content: space-around;\n}\n.wrapper .top-row .left-container .city-name-temp .city-name {\n  margin-bottom: 0;\n}\n.wrapper .top-row .left-container .city-name-temp .city-temp {\n  margin-bottom: 0.5rem;\n}\n.wrapper .top-row .right-container {\n  height: 100%;\n  flex-shrink: 0.1;\n}\n.wrapper .top-row .right-container .mat-button {\n  width: 15rem;\n  border: 2px solid gray;\n  border-radius: 6px;\n}\n.wrapper .middle-row .today-cast-title {\n  display: -webkit-box;\n  display: flex;\n  direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 1rem auto;\n  color: white;\n  font-style: italic;\n  font-size: 3em;\n}\n.wrapper .bottom-row {\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n.wrapper .bottom-row .day-cast {\n  width: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jaXR5LWRldGFpbC9jaXR5LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NpdHktZGV0YWlsL2NpdHktZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBUkY7SUFTSSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7RUNJSjtBQUNGO0FESEk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7VUFBQSxjQUFBO0FDS047QURKTTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQ01SO0FETFE7RUFDRSxnQkFBQTtBQ09WO0FETFE7RUFDRSxxQkFBQTtBQ09WO0FESEk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNLTjtBREpNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNNUjtBRERJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDR047QURBRTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY2l0eS1kZXRhaWwvY2l0eS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDAuMnJlbSBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiAwLjhyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcGFkZGluZzogMXJlbSAwLjJyZW07XG4gIG9wYWNpdHk6MC43O1xuICAudG9wLXJvdyB7XG4gICAgaGVpZ2h0OjE1JTtcbiAgICBtaW4taGVpZ2h0OjEwcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzoxcmVtO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAubGVmdC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICBmbGV4LWdyb3c6MC4xO1xuICAgICAgLmNpdHktbmFtZS10ZW1wIHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIC5jaXR5LW5hbWUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNpdHktdGVtcCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICBmbGV4LXNocmluazowLjE7XG4gICAgICAubWF0LWJ1dHRvbntcbiAgICAgICAgd2lkdGg6MTVyZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1pZGRsZS1yb3cge1xuICAgIC50b2RheS1jYXN0LXRpdGxle1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbWFyZ2luOiAxcmVtIGF1dG87XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gIH1cbiAgLmJvdHRvbS1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAuZGF5LWNhc3R7XG4gICAgICB3aWR0aDoxNXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlcjogMC4ycmVtIHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDAuOHJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nOiAxcmVtIDAuMnJlbTtcbiAgb3BhY2l0eTogMC43O1xufVxuLndyYXBwZXIgLnRvcC1yb3cge1xuICBoZWlnaHQ6IDE1JTtcbiAgbWluLWhlaWdodDogMTByZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAud3JhcHBlciAudG9wLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLndyYXBwZXIgLnRvcC1yb3cgLmxlZnQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWdyb3c6IDAuMTtcbn1cbi53cmFwcGVyIC50b3Atcm93IC5sZWZ0LWNvbnRhaW5lciAuY2l0eS1uYW1lLXRlbXAge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4ud3JhcHBlciAudG9wLXJvdyAubGVmdC1jb250YWluZXIgLmNpdHktbmFtZS10ZW1wIC5jaXR5LW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLndyYXBwZXIgLnRvcC1yb3cgLmxlZnQtY29udGFpbmVyIC5jaXR5LW5hbWUtdGVtcCAuY2l0eS10ZW1wIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLndyYXBwZXIgLnRvcC1yb3cgLnJpZ2h0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDAuMTtcbn1cbi53cmFwcGVyIC50b3Atcm93IC5yaWdodC1jb250YWluZXIgLm1hdC1idXR0b24ge1xuICB3aWR0aDogMTVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi53cmFwcGVyIC5taWRkbGUtcm93IC50b2RheS1jYXN0LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogM2VtO1xufVxuLndyYXBwZXIgLmJvdHRvbS1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLndyYXBwZXIgLmJvdHRvbS1yb3cgLmRheS1jYXN0IHtcbiAgd2lkdGg6IDE1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/city-detail/city-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/city-detail/city-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: CityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityDetailComponent", function() { return CityDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _city_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city.model */ "./src/app/components/home/city-detail/city.model.ts");




let CityDetailComponent = class CityDetailComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        // setup the title on the favorite/unfavorite button
        this.addOrRemoveFromFavorites = this.city.isFavorite ?
            "remove from favorites" : "add to favorites";
    }
    ngOnChanges(changes) {
        if (changes) {
            this.city = changes.city.currentValue;
            this.addOrRemoveFromFavorites = this.city.isFavorite ?
                "remove from favorites" : "add to favorites";
        }
    }
    onAddToRemoveFromFavorites() {
        if (this.city) {
            if (this.city.isFavorite) {
                // this will also emit in Subject to notify all parties of interest about favorites change
                this.dataService.unmarkCityAsFavorite(this.city);
                this.city.isFavorite = false;
                this.addOrRemoveFromFavorites = "add to favorites";
            }
            else {
                // this will also emit in Subject to notify all parties of interest about favorites change
                this.dataService.markCityAsFavorite(this.city);
                this.city.isFavorite = true;
                this.addOrRemoveFromFavorites = "remove from favorites";
            }
        }
    }
};
CityDetailComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _city_model__WEBPACK_IMPORTED_MODULE_3__["City"])
], CityDetailComponent.prototype, "city", void 0);
CityDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-city-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./city-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/city-detail/city-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./city-detail.component.scss */ "./src/app/components/home/city-detail/city-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], CityDetailComponent);



/***/ }),

/***/ "./src/app/components/home/city-detail/city.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/home/city-detail/city.model.ts ***!
  \***********************************************************/
/*! exports provided: City */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class City {
    constructor() {
        this.isFavorite = false;
    }
}


/***/ }),

/***/ "./src/app/components/home/city-detail/day-cast/day-cast.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/home/city-detail/day-cast/day-cast.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.wrapper .day-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  margin: 0.5rem;\n  border-radius: 6px;\n}\n.wrapper .day-card .mat-button {\n  border: 2px solid gray;\n}\n.wrapper .day-card .temperature {\n  padding: 0.2rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jaXR5LWRldGFpbC9kYXktY2FzdC9kYXktY2FzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NpdHktZGV0YWlsL2RheS1jYXN0L2RheS1jYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKO0FEQUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VOO0FERE07RUFDRSxzQkFBQTtBQ0dSO0FERE07RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jaXR5LWRldGFpbC9kYXktY2FzdC9kYXktY2FzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICB3aWR0aDoxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIC5kYXktY2FyZCB7XG4gICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAubWF0LWJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICB9XG4gICAgICAudGVtcGVyYXR1cmUge1xuICAgICAgICBwYWRkaW5nOjAuMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICB9XG59XG5cbiIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXIgLmRheS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ud3JhcHBlciAuZGF5LWNhcmQgLm1hdC1idXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xufVxuLndyYXBwZXIgLmRheS1jYXJkIC50ZW1wZXJhdHVyZSB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/city-detail/day-cast/day-cast.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/city-detail/day-cast/day-cast.component.ts ***!
  \****************************************************************************/
/*! exports provided: DayCastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCastComponent", function() { return DayCastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _day_cast_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-cast.model */ "./src/app/components/home/city-detail/day-cast/day-cast.model.ts");



let DayCastComponent = class DayCastComponent {
    constructor() {
        this.unit = "C";
    }
    ngOnChanges(changes) {
        if (changes) {
            this.dayCast = changes.dayCast.currentValue;
        }
        this.minTemp = this.dayCast.tempMin;
        this.maxTemp = this.dayCast.tempMax;
    }
    ngOnInit() {
        this.minTemp = this.dayCast.tempMin;
        this.maxTemp = this.dayCast.tempMax;
    }
    fahrenheitToCelsius(fahrenheit) {
        return Math.round((fahrenheit - 32) / 1.8);
    }
    celsiusToFahrenheit(celsisus) {
        return Math.floor((celsisus * 1.8) + 32);
    }
    toggleUnit() {
        if (this.unit === "C") { // celsius
            this.unit = "F";
            this.minTemp = this.celsiusToFahrenheit(this.minTemp);
            this.maxTemp = this.celsiusToFahrenheit(this.maxTemp);
        }
        else {
            this.unit = "C";
            this.minTemp = this.fahrenheitToCelsius(this.minTemp);
            this.maxTemp = this.fahrenheitToCelsius(this.maxTemp);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _day_cast_model__WEBPACK_IMPORTED_MODULE_2__["DayCast"])
], DayCastComponent.prototype, "dayCast", void 0);
DayCastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day-cast',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day-cast.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/city-detail/day-cast/day-cast.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./day-cast.component.scss */ "./src/app/components/home/city-detail/day-cast/day-cast.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DayCastComponent);



/***/ }),

/***/ "./src/app/components/home/city-detail/day-cast/day-cast.model.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/city-detail/day-cast/day-cast.model.ts ***!
  \************************************************************************/
/*! exports provided: DayCast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayCast", function() { return DayCast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_week_days__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/week-days */ "./src/app/models/week-days.ts");


class DayCast {
    constructor(epocTimestamp, tempMin, tempMax) {
        //convert timestamp to day of week
        const timestamp = +epocTimestamp;
        const a = new Date(timestamp * 1000);
        const days = [
            _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].SUNDAY, _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].MONDAY, _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].TUESDAY,
            _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].WEDNESDAY, _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].THURSDAY, _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].FRIDAY, _models_week_days__WEBPACK_IMPORTED_MODULE_1__["WeekDays"].SATURDAY
        ];
        const dayOfWeek = days[a.getDay()];
        this.dayOfWeek = dayOfWeek;
        this.tempMin = tempMin;
        this.tempMax = tempMax;
    }
}


/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n}\n.wrapper .row {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.wrapper .row .auto-complete-form {\n  width: 35rem;\n  min-width: 5rem;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper .row .auto-complete-form {\n    min-width: 5rem;\n  }\n}\n.wrapper .row .auto-complete-form .form-field {\n  width: 100%;\n}\n.wrapper .row .auto-complete-form .form-field .searchLabel {\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0dOO0FERk07RUFIRjtJQUlNLGVBQUE7RUNLUjtBQUNGO0FESk07RUFDRSxXQUFBO0FDTVI7QURMUTtFQUNFLGdCQUFBO0FDT1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTs7XG4gIC5yb3cge1xuICAgIHdpZHRoOjEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmF1dG8tY29tcGxldGUtZm9ybSB7XG4gICAgICB3aWR0aDogMzVyZW07XG4gICAgICBtaW4td2lkdGg6IDVyZW07XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgbWluLXdpZHRoOiA1cmVtO1xuICAgICAgfVxuICAgICAgLmZvcm0tZmllbGQgeyAgXG4gICAgICAgIHdpZHRoOjEwMCU7ICAgIFxuICAgICAgICAuc2VhcmNoTGFiZWwge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi53cmFwcGVyIC5yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLndyYXBwZXIgLnJvdyAuYXV0by1jb21wbGV0ZS1mb3JtIHtcbiAgd2lkdGg6IDM1cmVtO1xuICBtaW4td2lkdGg6IDVyZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIC5yb3cgLmF1dG8tY29tcGxldGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiA1cmVtO1xuICB9XG59XG4ud3JhcHBlciAucm93IC5hdXRvLWNvbXBsZXRlLWZvcm0gLmZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbi53cmFwcGVyIC5yb3cgLmF1dG8tY29tcGxldGUtZm9ybSAuZm9ybS1maWVsZCAuc2VhcmNoTGFiZWwge1xuICBmb250LXdlaWdodDogOTAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_mocks_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/mocks.model */ "./src/app/models/mocks.model.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _city_detail_city_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./city-detail/city.model */ "./src/app/components/home/city-detail/city.model.ts");
/* harmony import */ var _city_detail_day_cast_day_cast_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./city-detail/day-cast/day-cast.model */ "./src/app/components/home/city-detail/day-cast/day-cast.model.ts");









let HomeComponent = class HomeComponent {
    constructor(apiService, dataService, route, dialog) {
        this.apiService = apiService;
        this.dataService = dataService;
        this.route = route;
        this.dialog = dialog;
        this.serverErrorHasBeenShown = false; // prevent server error showing multiple times in a single session
    }
    ngOnInit() {
        // When clicking on a favorite city in Favorites page, we pass the city key in route params
        // We retreive the key here, find the city in the cities history array, then load it
        // if the page is loaded first time, Tel-Aviv key will be passed in params
        let cityKey = this.route.snapshot.params["id"];
        if (cityKey) {
            let city = this.dataService.getCityByKey(cityKey);
            city ? this.loadCity(city) : this.loadTelAviv();
        }
    }
    loadTelAviv() {
        // try getting fresh weather data for Tel Aviv, if API won;t answer, load mockup data
        this.getMatchingCities("215854");
        this.getCurrentConditions("215854");
        this.get5daysCast("215854");
        this.city = new _city_detail_city_model__WEBPACK_IMPORTED_MODULE_7__["City"]();
        this.city.key = "215854";
        this.city.name = "Tel Aviv";
        this.city.country = "Israel";
    }
    // load the current screen from an existing favorite city and not from API
    loadCity(city) {
        this.city = city;
        //this.city.isFavorite = true;
        //this.dataService.markCityAsFavorite(this.city);
    }
    onKeyUp(event) {
        this.getMatchingCities(event.target.value);
    }
    // on each key stroke dinamically fetch cities matching the current search term
    // to fill the select options, for the user to choose from
    getMatchingCities(userInput) {
        if (this.dataService.serverResponds) {
            this.apiService.getMatchingCities(userInput).subscribe((res) => {
                console.log("current matching cities for input ", userInput, ": ", res);
                this.matchingCitiesRes = (res && res.length > 0) ? res : src_app_models_mocks_model__WEBPACK_IMPORTED_MODULE_4__["autoCompleteForWordTel"];
            }, (error) => {
                this.dataService.serverResponds = false;
                this.matchingCitiesRes = src_app_models_mocks_model__WEBPACK_IMPORTED_MODULE_4__["autoCompleteForWordTel"];
                // if server refuced to respond we only want to show error once
                // if(this.dataService.getSearchHistory.length>0) {
                //   this.dialog.open(ServerProblemAlertComponent);
                // }
            });
        }
        else {
            this.matchingCitiesRes = src_app_models_mocks_model__WEBPACK_IMPORTED_MODULE_4__["autoCompleteForWordTel"];
        }
    }
    onCitySelected(event) {
        let selectedCity = event.option.value;
        this.setupSelectedCity(selectedCity);
        this.getCurrentConditions(selectedCity.Key);
        this.get5daysCast(selectedCity.Key);
    }
    // create a small footprint city object
    setupSelectedCity(selectedCity) {
        this.city = new _city_detail_city_model__WEBPACK_IMPORTED_MODULE_7__["City"]();
        this.city.key = selectedCity.Key;
        this.city.name = selectedCity.LocalizedName;
        this.city.country = selectedCity.Country.LocalizedName;
        this.city.isFavorite = false;
    }
    // get server response otherwice get mock data
    getCurrentConditions(cityKey) {
        if (this.dataService.serverResponds) {
            this.apiService.getCurrentConditionByLocationKey(cityKey).subscribe((res) => {
                console.log("current conditions for city key", cityKey, ": ", res);
                this.currentConditionResponse = res;
                this.initCurrentConditions();
            }, (error) => {
                this.dataService.serverResponds = false;
                this.currentConditionResponse = this.dataService.getCurrentConditionsFromMock(cityKey);
                this.initCurrentConditions();
            });
        }
        else {
            this.currentConditionResponse = this.dataService.getCurrentConditionsFromMock(cityKey);
            this.initCurrentConditions();
        }
    }
    initCurrentConditions() {
        this.city.weatherText = this.currentConditionResponse[0].WeatherText;
        this.city.tempCurrent = this.currentConditionResponse[0].Temperature.Metric.Value;
    }
    // get server response otherwice get mock data
    get5daysCast(cityKey) {
        if (this.dataService.serverResponds) {
            this.apiService.get5DaysCastByLocationKey(cityKey).subscribe((res) => {
                console.log("5 days cast for city key ", cityKey, ": ", res);
                this.fiveDaysCastResponse = res;
                this.initFiveDaysCast();
            }, (error) => {
                this.dataService.serverResponds = false;
                this.fiveDaysCastResponse = this.dataService.getFiveDaysForecastFromMock(cityKey);
                this.initFiveDaysCast();
            });
        }
        else {
            this.fiveDaysCastResponse = this.dataService.getFiveDaysForecastFromMock(cityKey);
            this.initFiveDaysCast();
        }
    }
    // construct smaller object from the original response
    initFiveDaysCast() {
        let fiveDaysCast = new Array();
        this.fiveDaysCastResponse.DailyForecasts.forEach((element) => {
            let dayCast = new _city_detail_day_cast_day_cast_model__WEBPACK_IMPORTED_MODULE_8__["DayCast"](element.EpochDate, element.Temperature.Minimum.Value, element.Temperature.Maximum.Value);
            fiveDaysCast.push(dayCast);
        });
        this.city.fiveDaysCast = fiveDaysCast;
        this.dataService.addToSearchHistory(this.city);
    }
    // display input value as string instead of objects
    displayFn(city) {
        return city && city.LocalizedName && city.Country && city.Country.LocalizedName
            ? city.LocalizedName + "/" + city.Country.LocalizedName : "";
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/search-history/search-detail/search-detail.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/search-history/search-detail/search-detail.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWhpc3Rvcnkvc2VhcmNoLWRldGFpbC9zZWFyY2gtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/search-history/search-detail/search-detail.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/search-history/search-detail/search-detail.component.ts ***!
  \************************************************************************************/
/*! exports provided: SearchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDetailComponent", function() { return SearchDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchDetailComponent = class SearchDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-history/search-detail/search-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-detail.component.scss */ "./src/app/components/search-history/search-detail/search-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SearchDetailComponent);



/***/ }),

/***/ "./src/app/components/search-history/search-history.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/search-history/search-history.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background-color: transparent !important;\n}\n\n.wrapper {\n  width: 50%;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 768px) {\n  .wrapper {\n    width: 90%;\n  }\n}\n\n.wrapper table {\n  font-family: \"Open Sans Hebrew\", serif;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-radius: 5px;\n  opacity: 0.7;\n}\n\n.wrapper table tr:last-child td {\n  border-bottom: none;\n}\n\n.wrapper table td.inner-table {\n  padding: 0;\n}\n\n.wrapper table .mat-header-row .mat-header-cell {\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n  color: black;\n  opacity: 0.7;\n  margin: 0;\n}\n\n.wrapper table .mat-header-row .mat-header-cell:last-of-type {\n  padding-right: 0;\n}\n\n.wrapper table .data-row:not(.expanded-row) {\n  background-color: white;\n}\n\n.wrapper table .data-row:not(.expanded-row):hover {\n  background: whitesmoke;\n}\n\n.wrapper table .data-row:not(.expanded-row):active {\n  background: #efefef;\n}\n\n.wrapper table .data-row .mat-cell {\n  font-size: 100%;\n  line-height: 1.3;\n  font-weight: bold;\n  padding: 0;\n  text-align: center;\n  border-bottom-width: 0;\n}\n\n.wrapper table .data-row .mat-cell mat-icon {\n  color: #50b948;\n}\n\n.wrapper table .detail-row {\n  height: 0;\n}\n\n.wrapper table .detail-row .element-detail {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWhpc3Rvcnkvc2VhcmNoLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWhpc3Rvcnkvc2VhcmNoLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtBQ0NGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUNFRjs7QURERTtFQUhGO0lBSUksVUFBQTtFQ0lGO0FBQ0Y7O0FESEU7RUFDRSxzQ0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSUo7O0FESEk7RUFDRSxtQkFBQTtBQ0tOOztBREhJO0VBQ0UsVUFBQTtBQ0tOOztBREZNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNJUjs7QURIUTtFQUNFLGdCQUFBO0FDS1Y7O0FEQU07RUFPRSx1QkFBQTtBQ0pSOztBREZRO0VBQ0Usc0JBQUE7QUNJVjs7QURGUTtFQUNFLG1CQUFBO0FDSVY7O0FEQU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRVI7O0FERFE7RUFDRSxjQUFBO0FDR1Y7O0FEQ0k7RUFDRSxTQUFBO0FDQ047O0FEQU07RUFDRSxnQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtaGlzdG9yeS9zZWFyY2gtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGV7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50OyBcbn1cbi53cmFwcGVyIHtcbiAgd2lkdGg6NTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIHdpZHRoOjkwJTtcbiAgfVxuICB0YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zIEhlYnJld1wiLCBzZXJpZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICAgIHRkLmlubmVyLXRhYmxlIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5kYXRhLXJvdyB7XG4gICAgICAmOm5vdCguZXhwYW5kZWQtcm93KSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gICAgICAgIH1cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XG4gICAgICAgIH1cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICAubWF0LWNlbGwge1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICBjb2xvcjogcmdiKDgwLCAxODUsIDcyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuZGV0YWlsLXJvdyB7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICAuZWxlbWVudC1kZXRhaWwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLm1hdC10YWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4ud3JhcHBlciB0YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBIZWJyZXdcIiwgc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi53cmFwcGVyIHRhYmxlIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLndyYXBwZXIgdGFibGUgdGQuaW5uZXItdGFibGUge1xuICBwYWRkaW5nOiAwO1xufVxuLndyYXBwZXIgdGFibGUgLm1hdC1oZWFkZXItcm93IC5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbjogMDtcbn1cbi53cmFwcGVyIHRhYmxlIC5tYXQtaGVhZGVyLXJvdyAubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4ud3JhcHBlciB0YWJsZSAuZGF0YS1yb3c6bm90KC5leHBhbmRlZC1yb3cpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ud3JhcHBlciB0YWJsZSAuZGF0YS1yb3c6bm90KC5leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cbi53cmFwcGVyIHRhYmxlIC5kYXRhLXJvdzpub3QoLmV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cbi53cmFwcGVyIHRhYmxlIC5kYXRhLXJvdyAubWF0LWNlbGwge1xuICBmb250LXNpemU6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG4ud3JhcHBlciB0YWJsZSAuZGF0YS1yb3cgLm1hdC1jZWxsIG1hdC1pY29uIHtcbiAgY29sb3I6ICM1MGI5NDg7XG59XG4ud3JhcHBlciB0YWJsZSAuZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cbi53cmFwcGVyIHRhYmxlIC5kZXRhaWwtcm93IC5lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/components/search-history/search-history.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/search-history/search-history.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHistoryComponent", function() { return SearchHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




let SearchHistoryComponent = class SearchHistoryComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.searchHistory = this.dataService.getSearchHistory();
        console.log('searchHistory from table ', this.searchHistory);
        this.columnsToDisplay = ['name', 'country', 'temp'];
    }
};
SearchHistoryComponent.ctorParameters = () => [
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], SearchHistoryComponent.prototype, "searchHistory", void 0);
SearchHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-search-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-history/search-history.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0px', minHeight: '0' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-history.component.scss */ "./src/app/components/search-history/search-history.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], SearchHistoryComponent);



/***/ }),

/***/ "./src/app/components/shared/no-data-alert/no-data-alert.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/no-data-alert/no-data-alert.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper h1 {\n  text-align: center;\n}\n.wrapper .mat-dialog-actions {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25vLWRhdGEtYWxlcnQvbm8tZGF0YS1hbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbm8tZGF0YS1hbGVydC9uby1kYXRhLWFsZXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUNBSjtBREVFO0VBQ0UsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uby1kYXRhLWFsZXJ0L25vLWRhdGEtYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXQtZGlhbG9nLWFjdGlvbnN7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSIsIi53cmFwcGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/components/shared/no-data-alert/no-data-alert.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/no-data-alert/no-data-alert.component.ts ***!
  \****************************************************************************/
/*! exports provided: NoDataAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataAlertComponent", function() { return NoDataAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NoDataAlertComponent = class NoDataAlertComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoDataAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-data-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-data-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/no-data-alert/no-data-alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-data-alert.component.scss */ "./src/app/components/shared/no-data-alert/no-data-alert.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NoDataAlertComponent);



/***/ }),

/***/ "./src/app/components/shared/server-problem-alert/server-problem-alert.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/components/shared/server-problem-alert/server-problem-alert.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper h1 {\n  text-align: center;\n}\n.wrapper .mat-dialog-actions {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9kYXRhL0FuZ3VsYXIvSW50L0hlcm9sby93ZWF0aGVyLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZlci1wcm9ibGVtLWFsZXJ0L3NlcnZlci1wcm9ibGVtLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2ZXItcHJvYmxlbS1hbGVydC9zZXJ2ZXItcHJvYmxlbS1hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUo7QURFRTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmVyLXByb2JsZW0tYWxlcnQvc2VydmVyLXByb2JsZW0tYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXQtZGlhbG9nLWFjdGlvbnN7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSIsIi53cmFwcGVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXIgLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/components/shared/server-problem-alert/server-problem-alert.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/server-problem-alert/server-problem-alert.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ServerProblemAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerProblemAlertComponent", function() { return ServerProblemAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerProblemAlertComponent = class ServerProblemAlertComponent {
    constructor() { }
    ngOnInit() {
    }
};
ServerProblemAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-server-problem-alert',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./server-problem-alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/server-problem-alert/server-problem-alert.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./server-problem-alert.component.scss */ "./src/app/components/shared/server-problem-alert/server-problem-alert.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServerProblemAlertComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"]
        ],
        entryComponents: [],
        providers: []
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/models/mocks.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/mocks.model.ts ***!
  \***************************************/
/*! exports provided: autocompleteResponseMock, currentConditionResponseMock, fiveDaysCastResponseMock, autoCompleteForWordTel, autoCompleteForWordT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocompleteResponseMock", function() { return autocompleteResponseMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentConditionResponseMock", function() { return currentConditionResponseMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiveDaysCastResponseMock", function() { return fiveDaysCastResponseMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoCompleteForWordTel", function() { return autoCompleteForWordTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoCompleteForWordT", function() { return autoCompleteForWordT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const autocompleteResponseMock = [
    {
        "Version": 1,
        "Key": "308526",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "Madrid",
        "Country": {
            "ID": "ES",
            "LocalizedName": "Spain"
        },
        "AdministrativeArea": {
            "ID": "MD",
            "LocalizedName": "Madrid"
        }
    },
    {
        "Version": 1,
        "Key": "108179",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Madrid",
        "Country": {
            "ID": "CO",
            "LocalizedName": "Colombia"
        },
        "AdministrativeArea": {
            "ID": "CUN",
            "LocalizedName": "Cundinamarca"
        }
    },
    {
        "Version": 1,
        "Key": "262718",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Madridejos",
        "Country": {
            "ID": "PH",
            "LocalizedName": "Philippines"
        },
        "AdministrativeArea": {
            "ID": "CEB",
            "LocalizedName": "Cebu"
        }
    },
    {
        "Version": 1,
        "Key": "303860",
        "Type": "City",
        "Rank": 62,
        "LocalizedName": "Madridejos",
        "Country": {
            "ID": "ES",
            "LocalizedName": "Spain"
        },
        "AdministrativeArea": {
            "ID": "CM",
            "LocalizedName": "Castile-La Mancha"
        }
    },
    {
        "Version": 1,
        "Key": "266174",
        "Type": "City",
        "Rank": 65,
        "LocalizedName": "Madrid",
        "Country": {
            "ID": "PH",
            "LocalizedName": "Philippines"
        },
        "AdministrativeArea": {
            "ID": "SUR",
            "LocalizedName": "Surigao del Sur"
        }
    },
    {
        "Version": 1,
        "Key": "3415106",
        "Type": "City",
        "Rank": 75,
        "LocalizedName": "Madridejos",
        "Country": {
            "ID": "PH",
            "LocalizedName": "Philippines"
        },
        "AdministrativeArea": {
            "ID": "CEB",
            "LocalizedName": "Cebu"
        }
    },
    {
        "Version": 1,
        "Key": "1457495",
        "Type": "City",
        "Rank": 82,
        "LocalizedName": "Madridanos",
        "Country": {
            "ID": "ES",
            "LocalizedName": "Spain"
        },
        "AdministrativeArea": {
            "ID": "CL",
            "LocalizedName": "Castile and Leon"
        }
    },
    {
        "Version": 1,
        "Key": "3387039",
        "Type": "City",
        "Rank": 85,
        "LocalizedName": "Madrid",
        "Country": {
            "ID": "CA",
            "LocalizedName": "Canada"
        },
        "AdministrativeArea": {
            "ID": "SK",
            "LocalizedName": "Saskatchewan"
        }
    },
    {
        "Version": 1,
        "Key": "2328920",
        "Type": "City",
        "Rank": 85,
        "LocalizedName": "Madrid",
        "Country": {
            "ID": "ES",
            "LocalizedName": "Spain"
        },
        "AdministrativeArea": {
            "ID": "AN",
            "LocalizedName": "Andalusia"
        }
    },
    {
        "Version": 1,
        "Key": "237575",
        "Type": "City",
        "Rank": 85,
        "LocalizedName": "Madrid",
        "Country": {
            "ID": "MX",
            "LocalizedName": "Mexico"
        },
        "AdministrativeArea": {
            "ID": "COL",
            "LocalizedName": "Colima"
        }
    }
];
const currentConditionResponseMock = [
    {
        "LocalObservationDateTime": "2021-05-02T03:25:00+07:00",
        "EpochTime": 1619900700,
        "WeatherText": "Some clouds",
        "WeatherIcon": 36,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 24.5,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 76,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us",
        "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us"
    }
];
const fiveDaysCastResponseMock = {
    "Headline": {
        "EffectiveDate": "2021-05-02T07:00:00+07:00",
        "EffectiveEpochDate": 1619913600,
        "Severity": 5,
        "Text": "A thunderstorm Sunday",
        "Category": "thunderstorm",
        "EndDate": "2021-05-02T19:00:00+07:00",
        "EndEpochDate": 1619956800,
        "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/extended-weather-forecast/3431644?lang=en-us",
        "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?lang=en-us"
    },
    "DailyForecasts": [
        {
            "Date": "2021-05-02T07:00:00+07:00",
            "EpochDate": 1619913600,
            "Temperature": {
                "Minimum": {
                    "Value": 74,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 89,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 15,
                "IconPhrase": "Thunderstorms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Night": {
                "Icon": 15,
                "IconPhrase": "Thunderstorms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Moderate"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&lang=en-us"
        },
        {
            "Date": "2021-05-03T07:00:00+07:00",
            "EpochDate": 1620000000,
            "Temperature": {
                "Minimum": {
                    "Value": 74,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 89,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 15,
                "IconPhrase": "Thunderstorms",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 38,
                "IconPhrase": "Mostly cloudy",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&lang=en-us"
        },
        {
            "Date": "2021-05-04T07:00:00+07:00",
            "EpochDate": 1620086400,
            "Temperature": {
                "Minimum": {
                    "Value": 74,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 93,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 7,
                "IconPhrase": "Cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Night": {
                "Icon": 7,
                "IconPhrase": "Cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&lang=en-us"
        },
        {
            "Date": "2021-05-05T07:00:00+07:00",
            "EpochDate": 1620172800,
            "Temperature": {
                "Minimum": {
                    "Value": 74,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 88,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 7,
                "IconPhrase": "Cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 12,
                "IconPhrase": "Showers",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Light"
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&lang=en-us"
        },
        {
            "Date": "2021-05-06T07:00:00+07:00",
            "EpochDate": 1620259200,
            "Temperature": {
                "Minimum": {
                    "Value": 74,
                    "Unit": "F",
                    "UnitType": 18
                },
                "Maximum": {
                    "Value": 89,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "Day": {
                "Icon": 7,
                "IconPhrase": "Cloudy",
                "HasPrecipitation": true,
                "PrecipitationType": "Rain",
                "PrecipitationIntensity": "Heavy"
            },
            "Night": {
                "Icon": 8,
                "IconPhrase": "Dreary",
                "HasPrecipitation": false
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&lang=en-us"
        }
    ]
};
const autoCompleteForWordTel = [
    {
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T03:06:00+03:00",
                "EpochTime": 1620432360,
                "WeatherText": "Clear",
                "WeatherIcon": 33,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 18.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 65,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T08:00:00+03:00",
                "EffectiveEpochDate": 1620536400,
                "Severity": 5,
                "Text": "Possible danger of dehydration and heat stroke while doing strenuous activities Sunday",
                "Category": "heat",
                "EndDate": "2021-05-09T20:00:00+03:00",
                "EndEpochDate": 1620579600,
                "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00+03:00",
                    "EpochDate": 1620446400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 22.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 30.1,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00+03:00",
                    "EpochDate": 1620532800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 22.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.5,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+03:00",
                    "EpochDate": 1620619200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 21,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 27.2,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+03:00",
                    "EpochDate": 1620705600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 20.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 27.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+03:00",
                    "EpochDate": 1620792000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 20.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 26.1,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "3431644",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Telanaipura",
        "Country": {
            "ID": "ID",
            "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
            "ID": "JA",
            "LocalizedName": "Jambi"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T07:10:00+07:00",
                "EpochTime": 1620432600,
                "WeatherText": "Cloudy",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 24.6,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 76,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us",
                "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-11T07:00:00+07:00",
                "EffectiveEpochDate": 1620691200,
                "Severity": 5,
                "Text": "A thunderstorm Tuesday",
                "Category": "thunderstorm",
                "EndDate": "2021-05-11T19:00:00+07:00",
                "EndEpochDate": 1620734400,
                "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/extended-weather-forecast/3431644?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-09T07:00:00+07:00",
                    "EpochDate": 1620518400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 33.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 15,
                        "IconPhrase": "Thunderstorms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+07:00",
                    "EpochDate": 1620604800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 34.2,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 15,
                        "IconPhrase": "Thunderstorms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+07:00",
                    "EpochDate": 1620691200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 30.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 15,
                        "IconPhrase": "Thunderstorms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+07:00",
                    "EpochDate": 1620777600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 23.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 31,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-13T07:00:00+07:00",
                    "EpochDate": 1620864000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 23.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 30.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "300558",
        "Type": "City",
        "Rank": 45,
        "LocalizedName": "Telok Blangah New Town",
        "Country": {
            "ID": "SG",
            "LocalizedName": "Singapore"
        },
        "AdministrativeArea": {
            "ID": "05",
            "LocalizedName": "South West"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T08:15:00+08:00",
                "EpochTime": 1620432900,
                "WeatherText": "Clouds and sun",
                "WeatherIcon": 4,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 82,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/current-weather/300558?lang=en-us",
                "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/current-weather/300558?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T13:00:00+08:00",
                "EffectiveEpochDate": 1620536400,
                "Severity": 5,
                "Text": "A thunderstorm Sunday afternoon",
                "Category": "thunderstorm",
                "EndDate": "2021-05-09T19:00:00+08:00",
                "EndEpochDate": 1620558000,
                "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/extended-weather-forecast/300558?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-09T07:00:00+08:00",
                    "EpochDate": 1620514800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 26.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.7,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 17,
                        "IconPhrase": "Partly sunny w/ t-storms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+08:00",
                    "EpochDate": 1620601200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 26.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 17,
                        "IconPhrase": "Partly sunny w/ t-storms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+08:00",
                    "EpochDate": 1620687600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 26.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 6,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+08:00",
                    "EpochDate": 1620774000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 26.4,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.1,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-13T07:00:00+08:00",
                    "EpochDate": 1620860400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 26.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 36,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=5&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "325876",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Telford",
        "Country": {
            "ID": "GB",
            "LocalizedName": "United Kingdom"
        },
        "AdministrativeArea": {
            "ID": "TFW",
            "LocalizedName": "Telford and Wrekin"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T01:12:00+01:00",
                "EpochTime": 1620432720,
                "WeatherText": "Cloudy",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 5.5,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 42,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/gb/telford/tf3-2/current-weather/325876?lang=en-us",
                "Link": "http://www.accuweather.com/en/gb/telford/tf3-2/current-weather/325876?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T14:00:00+01:00",
                "EffectiveEpochDate": 1620565200,
                "Severity": 5,
                "Text": "Expect showers Sunday afternoon",
                "Category": "rain",
                "EndDate": "2021-05-09T20:00:00+01:00",
                "EndEpochDate": 1620586800,
                "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/extended-weather-forecast/325874?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00+01:00",
                    "EpochDate": 1620453600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 10.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 16.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 18,
                        "IconPhrase": "Rain",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00+01:00",
                    "EpochDate": 1620540000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 8.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 18.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+01:00",
                    "EpochDate": 1620626400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 7.7,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 15.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+01:00",
                    "EpochDate": 1620712800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 6.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 15.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+01:00",
                    "EpochDate": 1620799200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 7.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 14.6,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=5&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "169072",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Telavi",
        "Country": {
            "ID": "GE",
            "LocalizedName": "Georgia"
        },
        "AdministrativeArea": {
            "ID": "KA",
            "LocalizedName": "Kakheti"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T04:11:00+04:00",
                "EpochTime": 1620432660,
                "WeatherText": "Mostly cloudy",
                "WeatherIcon": 38,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 12.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 54,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/current-weather/169072?lang=en-us",
                "Link": "http://www.accuweather.com/en/ge/telavi/169072/current-weather/169072?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T13:00:00+04:00",
                "EffectiveEpochDate": 1620550800,
                "Severity": 3,
                "Text": "Expect showers Sunday afternoon",
                "Category": "rain",
                "EndDate": "2021-05-09T19:00:00+04:00",
                "EndEpochDate": 1620572400,
                "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/extended-weather-forecast/169072?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00+04:00",
                    "EpochDate": 1620442800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 13.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 21.9,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00+04:00",
                    "EpochDate": 1620529200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 6.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 24.1,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 13,
                        "IconPhrase": "Mostly cloudy w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+04:00",
                    "EpochDate": 1620615600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 4.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 13.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 2,
                        "IconPhrase": "Mostly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+04:00",
                    "EpochDate": 1620702000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 5.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 16.2,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+04:00",
                    "EpochDate": 1620788400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 11,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 22.6,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=4&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "230611",
        "Type": "City",
        "Rank": 51,
        "LocalizedName": "Telsiai",
        "Country": {
            "ID": "LT",
            "LocalizedName": "Lithuania"
        },
        "AdministrativeArea": {
            "ID": "TE",
            "LocalizedName": "Telšiai"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T03:18:00+03:00",
                "EpochTime": 1620433080,
                "WeatherText": "Rain and snow",
                "WeatherIcon": 29,
                "HasPrecipitation": true,
                "PrecipitationType": "Mixed",
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 0.9,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 34,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/current-weather/230611?lang=en-us",
                "Link": "http://www.accuweather.com/en/lt/telsiai/230611/current-weather/230611?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T08:00:00+03:00",
                "EffectiveEpochDate": 1620536400,
                "Severity": 3,
                "Text": "Expect showers Sunday",
                "Category": "rain",
                "EndDate": "2021-05-09T20:00:00+03:00",
                "EndEpochDate": 1620579600,
                "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/extended-weather-forecast/230611?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00+03:00",
                    "EpochDate": 1620446400,
                    "Temperature": {
                        "Minimum": {
                            "Value": -0.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 7.2,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00+03:00",
                    "EpochDate": 1620532800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 8.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 12.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+03:00",
                    "EpochDate": 1620619200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 11.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 21.9,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+03:00",
                    "EpochDate": 1620705600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 10,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 22.9,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+03:00",
                    "EpochDate": 1620792000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 22.6,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "2723742",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Telégrafo",
        "Country": {
            "ID": "BR",
            "LocalizedName": "Brazil"
        },
        "AdministrativeArea": {
            "ID": "PA",
            "LocalizedName": "Pará"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-07T21:10:00-03:00",
                "EpochTime": 1620432600,
                "WeatherText": "Clear",
                "WeatherIcon": 33,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 25,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 77,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/br/telegrafo/2723742/current-weather/2723742?lang=en-us",
                "Link": "http://www.accuweather.com/en/br/telegrafo/2723742/current-weather/2723742?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T08:00:00+03:00",
                "EffectiveEpochDate": 1620536400,
                "Severity": 3,
                "Text": "Expect showers Sunday",
                "Category": "rain",
                "EndDate": "2021-05-09T20:00:00+03:00",
                "EndEpochDate": 1620579600,
                "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/extended-weather-forecast/230611?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00+03:00",
                    "EpochDate": 1620446400,
                    "Temperature": {
                        "Minimum": {
                            "Value": -0.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 7.2,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00+03:00",
                    "EpochDate": 1620532800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 8.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 12.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+03:00",
                    "EpochDate": 1620619200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 11.5,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 21.9,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+03:00",
                    "EpochDate": 1620705600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 10,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 22.9,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 33,
                        "IconPhrase": "Clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+03:00",
                    "EpochDate": 1620792000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 22.6,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 1,
                        "IconPhrase": "Sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "186933",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Tela",
        "Country": {
            "ID": "HN",
            "LocalizedName": "Honduras"
        },
        "AdministrativeArea": {
            "ID": "AT",
            "LocalizedName": "Atlántida"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-07T18:20:00-06:00",
                "EpochTime": 1620433200,
                "WeatherText": "Cloudy",
                "WeatherIcon": 7,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": false,
                "Temperature": {
                    "Metric": {
                        "Value": 27.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 82,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/current-weather/186933?lang=en-us",
                "Link": "http://www.accuweather.com/en/hn/tela/186933/current-weather/186933?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-12T07:00:00-06:00",
                "EffectiveEpochDate": 1620824400,
                "Severity": 5,
                "Text": "A thunderstorm Wednesday",
                "Category": "thunderstorm",
                "EndDate": "2021-05-12T19:00:00-06:00",
                "EndEpochDate": 1620867600,
                "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/extended-weather-forecast/186933?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00-06:00",
                    "EpochDate": 1620478800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 22.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 17,
                        "IconPhrase": "Partly sunny w/ t-storms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00-06:00",
                    "EpochDate": 1620565200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 23.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00-06:00",
                    "EpochDate": 1620651600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 23.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00-06:00",
                    "EpochDate": 1620738000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00-06:00",
                    "EpochDate": 1620824400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "3453754",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Telaga Asih",
        "Country": {
            "ID": "ID",
            "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
            "ID": "JB",
            "LocalizedName": "West Java"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T07:25:00+07:00",
                "EpochTime": 1620433500,
                "WeatherText": "Partly sunny",
                "WeatherIcon": 3,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 81,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/id/telaga-asih/3453754/current-weather/3453754?lang=en-us",
                "Link": "http://www.accuweather.com/en/id/telaga-asih/3453754/current-weather/3453754?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-12T07:00:00-06:00",
                "EffectiveEpochDate": 1620824400,
                "Severity": 5,
                "Text": "A thunderstorm Wednesday",
                "Category": "thunderstorm",
                "EndDate": "2021-05-12T19:00:00-06:00",
                "EndEpochDate": 1620867600,
                "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/extended-weather-forecast/186933?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-08T07:00:00-06:00",
                    "EpochDate": 1620478800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 22.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 17,
                        "IconPhrase": "Partly sunny w/ t-storms",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-09T07:00:00-06:00",
                    "EpochDate": 1620565200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 23.1,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00-06:00",
                    "EpochDate": 1620651600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 23.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00-06:00",
                    "EpochDate": 1620738000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00-06:00",
                    "EpochDate": 1620824400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.2,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 32.3,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us"
                }
            ]
        }
    },
    {
        "Version": 1,
        "Key": "3453755",
        "Type": "City",
        "Rank": 55,
        "LocalizedName": "Telagamurni",
        "Country": {
            "ID": "ID",
            "LocalizedName": "Indonesia"
        },
        "AdministrativeArea": {
            "ID": "JB",
            "LocalizedName": "West Java"
        },
        "CurrentConditions": [{
                "LocalObservationDateTime": "2021-05-08T07:25:00+07:00",
                "EpochTime": 1620433500,
                "WeatherText": "Partly sunny",
                "WeatherIcon": 3,
                "HasPrecipitation": false,
                "PrecipitationType": null,
                "IsDayTime": true,
                "Temperature": {
                    "Metric": {
                        "Value": 27.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Imperial": {
                        "Value": 81,
                        "Unit": "F",
                        "UnitType": 18
                    }
                },
                "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/current-weather/3453755?lang=en-us",
                "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/current-weather/3453755?lang=en-us"
            }],
        "FiveDaysForecast": {
            "Headline": {
                "EffectiveDate": "2021-05-09T13:00:00+07:00",
                "EffectiveEpochDate": 1620540000,
                "Severity": 5,
                "Text": "Expect showers Sunday afternoon",
                "Category": "rain",
                "EndDate": "2021-05-09T19:00:00+07:00",
                "EndEpochDate": 1620561600,
                "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/extended-weather-forecast/3453755?unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?unit=c&lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2021-05-09T07:00:00+07:00",
                    "EpochDate": 1620518400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.8,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 34.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=1&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=1&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-10T07:00:00+07:00",
                    "EpochDate": 1620604800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 24.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 35.4,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 6,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=2&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=2&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-11T07:00:00+07:00",
                    "EpochDate": 1620691200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 25.3,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 34.9,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=3&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=3&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-12T07:00:00+07:00",
                    "EpochDate": 1620777600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 25.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 34.8,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 4,
                        "IconPhrase": "Intermittent clouds",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Heavy"
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=4&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=4&unit=c&lang=en-us"
                },
                {
                    "Date": "2021-05-13T07:00:00+07:00",
                    "EpochDate": 1620864000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 25.9,
                            "Unit": "C",
                            "UnitType": 17
                        },
                        "Maximum": {
                            "Value": 34.1,
                            "Unit": "C",
                            "UnitType": 17
                        }
                    },
                    "Day": {
                        "Icon": 7,
                        "IconPhrase": "Cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=5&unit=c&lang=en-us",
                    "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=5&unit=c&lang=en-us"
                }
            ]
        }
    }
];
const autoCompleteForWordT = [
    {
        "Version": 1,
        "Key": "226396",
        "Type": "City",
        "Rank": 10,
        "LocalizedName": "Tokyo",
        "Country": {
            "ID": "JP",
            "LocalizedName": "Japan"
        },
        "AdministrativeArea": {
            "ID": "13",
            "LocalizedName": "Tokyo"
        }
    },
    {
        "Version": 1,
        "Key": "106770",
        "Type": "City",
        "Rank": 11,
        "LocalizedName": "Taiyuan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SX",
            "LocalizedName": "Shanxi"
        }
    },
    {
        "Version": 1,
        "Key": "106780",
        "Type": "City",
        "Rank": 11,
        "LocalizedName": "Tianjin",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "TJ",
            "LocalizedName": "Tianjin"
        }
    },
    {
        "Version": 1,
        "Key": "58491",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tongren",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GZ",
            "LocalizedName": "Guizhou"
        }
    },
    {
        "Version": 1,
        "Key": "102324",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tangshan",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "HE",
            "LocalizedName": "Hebei"
        }
    },
    {
        "Version": 1,
        "Key": "59573",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Taizhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "JS",
            "LocalizedName": "Jiangsu"
        }
    },
    {
        "Version": 1,
        "Key": "60198",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tongliao",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "NM",
            "LocalizedName": "Inner Mongolia"
        }
    },
    {
        "Version": 1,
        "Key": "106571",
        "Type": "City",
        "Rank": 13,
        "LocalizedName": "Tai'an",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "SD",
            "LocalizedName": "Shandong"
        }
    },
    {
        "Version": 1,
        "Key": "58055",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Tianshui",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "GS",
            "LocalizedName": "Gansu"
        }
    },
    {
        "Version": 1,
        "Key": "2333653",
        "Type": "City",
        "Rank": 15,
        "LocalizedName": "Taizhou",
        "Country": {
            "ID": "CN",
            "LocalizedName": "China"
        },
        "AdministrativeArea": {
            "ID": "ZJ",
            "LocalizedName": "Zhejiang"
        }
    }
];


/***/ }),

/***/ "./src/app/models/week-days.ts":
/*!*************************************!*\
  !*** ./src/app/models/week-days.ts ***!
  \*************************************/
/*! exports provided: WeekDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekDays", function() { return WeekDays; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var WeekDays;
(function (WeekDays) {
    WeekDays["SUNDAY"] = "Sunday";
    WeekDays["MONDAY"] = "Monday";
    WeekDays["TUESDAY"] = "Tuesday";
    WeekDays["WEDNESDAY"] = "Wednesday";
    WeekDays["THURSDAY"] = "Thursday";
    WeekDays["FRIDAY"] = "Friday";
    WeekDays["SATURDAY"] = "Saturday";
})(WeekDays || (WeekDays = {}));


/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApiService = class ApiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
        // personal:Qr7KvOTrug3fjehlzXkqZrGa7uopRmoZ
        // dev:VU40pGIVFI5hox6FGadc5GAYXYnaICtZ
        this.apiDevKey = "VU40pGIVFI5hox6FGadc5GAYXYnaICtZ";
        this.apiPersonalKey = "Qr7KvOTrug3fjehlzXkqZrGa7uopRmoZ";
        this.headers.append("Content-Type", "application/json");
    }
    //fetch cities, matching full/parcial name entered by user, name will be autocompleted on server
    getMatchingCities(userInput) {
        let myParams = {
            "apikey": this.apiPersonalKey,
            "q": userInput,
            "language": "en-us"
        };
        const backendUrl = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";
        return this.httpService.get(backendUrl, { params: myParams });
    }
    getCurrentConditionByLocationKey(locationKey) {
        const myParams = {
            "apikey": this.apiPersonalKey,
            "language": "en-us",
            "details": "false"
        };
        const backendUrl = "https://dataservice.accuweather.com/currentconditions/v1/" + locationKey;
        return this.httpService.get(backendUrl, { params: myParams });
    }
    get5DaysCastByLocationKey(locationKey) {
        const myParams = {
            "apikey": this.apiPersonalKey,
            "language": "en-us",
            "details": "false",
            "metric": "true"
        };
        const backendUrl = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey;
        return this.httpService.get(backendUrl, { params: myParams });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_mocks_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/mocks.model */ "./src/app/models/mocks.model.ts");



class DataService {
    constructor() {
        this.searchHistory = new Array();
        this.searchHistoryChanged = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.serverResponds = true;
    }
    addToSearchHistory(city) {
        if (!this.getCityByKey(city.key)) {
            this.searchHistory.push(city);
            //this.searchHistoryChanged.next();
        }
    }
    // will not remove from the history list, just unmark the "isFavorite" on the city
    unmarkCityAsFavorite(city) {
        const index = this.searchHistory.findIndex(element => element.key === city.key);
        if (index != -1) {
            this.searchHistory[index].isFavorite = false;
            //this.searchHistoryChanged.next();
        }
    }
    // will not add the city to array (was added earlear to history array)
    // will only mark it "isFavorite"
    markCityAsFavorite(city) {
        const index = this.searchHistory.findIndex(element => element.key === city.key);
        if (index != -1) {
            this.searchHistory[index].isFavorite = true;
        }
    }
    getSearchHistory() {
        return this.searchHistory.slice(); // slice is to get a copy, while protecting the original data;
    }
    getCityByKey(key) {
        return this.searchHistory.find(element => element.key === key);
    }
    getCurrentConditionsFromMock(key) {
        const city = _models_mocks_model__WEBPACK_IMPORTED_MODULE_2__["autoCompleteForWordTel"].find(element => element.Key === key);
        const currentConditions = city.CurrentConditions;
        return currentConditions;
    }
    getFiveDaysForecastFromMock(key) {
        const city = _models_mocks_model__WEBPACK_IMPORTED_MODULE_2__["autoCompleteForWordTel"].find(element => element.Key === key);
        const currentConditions = city.FiveDaysForecast;
        return currentConditions;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/data/Angular/Int/Herolo/weather-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map