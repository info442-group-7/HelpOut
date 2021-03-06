'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var i = _interopDefault(require('@firebase/app'));
var util = require('@firebase/util');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays$1() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays$1(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError('Invalid value assigned to `logLevel`');
            }
            this._logLevel = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays$1([this, LogLevel.ERROR], args));
    };
    return Logger;
}());

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function";
        }
        else
            return "null";
    else if ("function" == b && "undefined" == typeof a.call)
        return "object";
    return b;
}
function da(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length; }
function m(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ea(a) { return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha); }
var fa = "closure_uid_" + (1E9 * Math.random() >>> 0), ha = 0;
function ia(a, b, c) { return a.call.apply(a.bind, arguments); }
function ja(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function n(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? n = ia : n = ja; return n.apply(null, arguments); }
function ka(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
var q = Date.now || function () { return +new Date; };
function r(a, b) { function c() { } c.prototype = b.prototype; a.M = b.prototype; a.prototype = new c; a.prototype.constructor = a; }
function t() { this.j = this.j; this.i = this.i; }
var la = 0;
t.prototype.j = !1;
t.prototype.da = function () { if (!this.j && (this.j = !0, this.C(), 0 != la)) {
    var a = ea(this);
} };
t.prototype.C = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var na = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, oa = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function pa(a) { a: {
    var b = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function ra(a) { return Array.prototype.concat.apply([], arguments); }
function sa(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function wa(a) { return /^[\s\xa0]*$/.test(a); }
var xa = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function u(a, b) { return -1 != a.indexOf(b); }
function ya(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var v;
a: {
    var za = k.navigator;
    if (za) {
        var Aa = za.userAgent;
        if (Aa) {
            v = Aa;
            break a;
        }
    }
    v = "";
}
function Ba(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ca(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ea(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Da.length; f++)
        c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Fa(a) { Fa[" "](a); return a; }
Fa[" "] = aa;
function Ga(a, b) { var c = Ha; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ia = u(v, "Opera"), w = u(v, "Trident") || u(v, "MSIE"), Ja = u(v, "Edge"), Ka = Ja || w, La = u(v, "Gecko") && !(u(v.toLowerCase(), "webkit") && !u(v, "Edge")) && !(u(v, "Trident") || u(v, "MSIE")) && !u(v, "Edge"), Ma = u(v.toLowerCase(), "webkit") && !u(v, "Edge");
function Na() { var a = k.document; return a ? a.documentMode : void 0; }
var Oa;
a: {
    var Pa = "", Qa = function () { var a = v; if (La)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ja)
        return /Edge\/([\d\.]+)/.exec(a); if (w)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ma)
        return /WebKit\/(\S+)/.exec(a); if (Ia)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Qa && (Pa = Qa ? Qa[1] : "");
    if (w) {
        var Ra = Na();
        if (null != Ra && Ra > parseFloat(Pa)) {
            Oa = String(Ra);
            break a;
        }
    }
    Oa = Pa;
}
var Ha = {};
function Sa(a) { return Ga(a, function () { {
    var b = 0;
    var e = xa(String(Oa)).split("."), f = xa(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var l = 0; 0 == b && l < h; l++) {
        var c = e[l] || "", d = f[l] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ya(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ya(0 == c[2].length, 0 == d[2].length) || ya(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ta;
if (k.document && w) {
    var Ua = Na();
    Ta = Ua ? Ua : parseInt(Oa, 10) || void 0;
}
else
    Ta = void 0;
var Va = Ta;
var Wa = !w || 9 <= Number(Va), Xa = w && !Sa("9"), Ya = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function x(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
x.prototype.b = function () { this.defaultPrevented = !0; };
function y(a, b) {
    x.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (La) {
                a: {
                    try {
                        Fa(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Za[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(y, x);
var Za = { 2: "touch", 3: "pen", 4: "mouse" };
y.prototype.b = function () { y.M.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Xa)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), $a = 0;
function ab(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.aa = e; this.key = ++$a; this.V = this.X = !1; }
function bb(a) { a.V = !0; a.listener = null; a.proxy = null; a.src = null; a.aa = null; }
function cb(a) { this.src = a; this.a = {}; this.b = 0; }
cb.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = db(a, b, d, e); -1 < h ? (b = a[h], c || (b.X = !1)) : (b = new ab(b, this.src, f, !!d, e), b.X = c, a.push(b)); return b; };
function eb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = na(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (bb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function db(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.V && f.listener == b && f.capture == !!c && f.aa == d)
        return e;
} return -1; }
var fb = "closure_lm_" + (1E6 * Math.random() | 0), gb = {};
function ib(a, b, c, d, e) { if (d && d.once)
    return jb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ib(a, b[f], c, d, e);
    return null;
} c = kb(c); return a && a[A] ? a.ra(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !1, d, e); }
function lb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = m(e) ? !!e.capture : !!e;
    if (h && !Wa)
        return null;
    var l = mb(a);
    l || (a[fb] = l = new cb(a));
    c = l.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = nb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Ya || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(ob(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function nb() { var a = pb, b = Wa ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function jb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        jb(a, b[f], c, d, e);
    return null;
} c = kb(c); return a && a[A] ? a.sa(b, c, m(d) ? !!d.capture : !!d, e) : lb(a, b, c, !0, d, e); }
function qb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        qb(a, b[f], c, d, e);
else
    (d = m(d) ? !!d.capture : !!d, c = kb(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = db(f, c, d, e), -1 < c && (bb(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = mb(a)) && (b = a.a[b.toString()], a = -1, b && (a = db(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c)); }
function rb(a) { if ("number" !== typeof a && a && !a.V) {
    var b = a.src;
    if (b && b[A])
        eb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(ob(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = mb(b)) ? (eb(c, a), 0 == c.b && (c.src = null, b[fb] = null)) : bb(a);
    }
} }
function ob(a) { return a in gb ? gb[a] : gb[a] = "on" + a; }
function sb(a, b) { var c = a.listener, d = a.aa || a.src; a.X && rb(a); return c.call(d, b); }
function pb(a, b) { if (a.V)
    return !0; if (!Wa) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new y(b, this);
    return sb(a, b);
} return sb(a, new y(b, this)); }
function mb(a) { a = a[fb]; return a instanceof cb ? a : null; }
var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function kb(a) { if ("function" == ba(a))
    return a; a[tb] || (a[tb] = function (b) { return a.handleEvent(b); }); return a[tb]; }
function B() { t.call(this); this.c = new cb(this); this.J = this; this.A = null; }
r(B, t);
B.prototype[A] = !0;
g = B.prototype;
g.addEventListener = function (a, b, c, d) { ib(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { qb(this, a, b, c, d); };
g.dispatchEvent = function (a) { var b, c = this.A; if (c)
    for (b = []; c; c = c.A)
        b.push(c); c = this.J; var d = a.type || a; if ("string" === typeof a)
    a = new x(a, c);
else if (a instanceof x)
    a.target = a.target || c;
else {
    var e = a;
    a = new x(d, c);
    Ea(a, e);
} e = !0; if (b)
    for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
    } h = a.a = c; e = ub(h, d, !0, a) && e; e = ub(h, d, !1, a) && e; if (b)
    for (f = 0; f < b.length; f++)
        h = a.a = b[f], e = ub(h, d, !1, a) && e; return e; };
g.C = function () { B.M.C.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            bb(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.A = null; };
g.ra = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.sa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function ub(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.V && h.capture == c) {
        var l = h.listener, p = h.aa || h.src;
        h.X && eb(a.c, h);
        e = !1 !== l.call(p, d) && e;
    }
} return e && !d.defaultPrevented; }
var vb = k.JSON.stringify;
function wb() { this.b = this.a = null; }
var yb = new /** @class */ (function () {
    function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new xb; }, function (a) { a.reset(); }, 100);
wb.prototype.add = function (a, b) { var c = yb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function zb() { var a = Ab, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function xb() { this.next = this.b = this.a = null; }
xb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
xb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Bb(a) { k.setTimeout(function () { throw a; }, 0); }
function Cb(a, b) { Db || Eb(); Fb || (Db(), Fb = !0); Ab.add(a, b); }
var Db;
function Eb() { var a = k.Promise.resolve(void 0); Db = function () { a.then(Gb); }; }
var Fb = !1, Ab = new wb;
function Gb() { for (var a; a = zb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Bb(c);
    }
    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
} Fb = !1; }
function Hb(a, b) { B.call(this); this.b = a || 1; this.a = b || k; this.f = n(this.Ua, this); this.g = q(); }
r(Hb, B);
g = Hb.prototype;
g.Z = !1;
g.L = null;
g.Ua = function () { if (this.Z) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - a) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.Z && (Ib(this), this.start()));
} };
g.start = function () { this.Z = !0; this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Ib(a) { a.Z = !1; a.L && (a.a.clearTimeout(a.L), a.L = null); }
g.C = function () { Hb.M.C.call(this); Ib(this); delete this.a; };
function Jb(a, b, c) { if ("function" == ba(a))
    c && (a = n(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = n(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Kb(a, b, c) { t.call(this); this.f = null != c ? n(a, c) : a; this.c = b; this.b = n(this.Pa, this); this.a = []; }
r(Kb, t);
g = Kb.prototype;
g.ba = !1;
g.T = null;
g.Ia = function (a) { this.a = arguments; this.T ? this.ba = !0 : Lb(this); };
g.C = function () { Kb.M.C.call(this); this.T && (k.clearTimeout(this.T), this.T = null, this.ba = !1, this.a = []); };
g.Pa = function () { this.T = null; this.ba && (this.ba = !1, Lb(this)); };
function Lb(a) { a.T = Jb(a.b, a.c); a.f.apply(null, a.a); }
function C(a) { t.call(this); this.b = a; this.a = {}; }
r(C, t);
var Mb = [];
function Nb(a, b, c, d) { Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb); for (var e = 0; e < c.length; e++) {
    var f = ib(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Ob(a) { Ba(a.a, function (b, c) { this.a.hasOwnProperty(c) && rb(b); }, a); a.a = {}; }
C.prototype.C = function () { C.M.C.call(this); Ob(this); };
C.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Pb() { }
var Qb = null;
function Rb() { return Qb = Qb || new B; }
function Sb(a) { x.call(this, "serverreachability", a); }
r(Sb, x);
function E(a) { var b = Rb(); b.dispatchEvent(new Sb(b, a)); }
function Tb(a) { x.call(this, "statevent", a); }
r(Tb, x);
function F(a) { var b = Rb(); b.dispatchEvent(new Tb(b, a)); }
function Ub(a) { x.call(this, "timingevent", a); }
r(Ub, x);
function Vb(a, b) { if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Wb = { NO_ERROR: 0, Va: 1, bb: 2, ab: 3, Ya: 4, $a: 5, cb: 6, za: 7, TIMEOUT: 8, gb: 9 };
var Xb = { Xa: "complete", kb: "success", Aa: "error", za: "abort", ib: "ready", jb: "readystatechange", TIMEOUT: "timeout", eb: "incrementaldata", hb: "progress", Za: "downloadprogress", lb: "uploadprogress" };
function Yb() { }
Yb.prototype.a = null;
function Zb(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function $b() { }
var G = { OPEN: "a", Wa: "b", Aa: "c", fb: "d" };
function ac() { x.call(this, "d"); }
r(ac, x);
function bc() { x.call(this, "c"); }
r(bc, x);
var cc;
function dc() { }
r(dc, Yb);
cc = new dc;
function H(a, b, c) { this.g = a; this.W = b; this.U = c || 1; this.G = new C(this); this.N = ec; a = Ka ? 125 : void 0; this.O = new Hb(a); this.m = null; this.b = !1; this.j = this.A = this.f = this.B = this.s = this.P = this.h = null; this.i = []; this.a = null; this.w = 0; this.c = this.v = null; this.H = -1; this.l = !1; this.J = 0; this.D = null; this.o = this.R = this.F = !1; }
var ec = 45E3, fc = {}, gc = {};
g = H.prototype;
g.setTimeout = function (a) { this.N = a; };
function hc(a, b, c) { a.B = 1; a.f = ic(I(b)); a.j = c; a.F = !0; jc(a, null); }
function jc(a, b) { a.s = q(); J(a); a.A = I(a.f); var c = a.A, d = a.U; Array.isArray(d) || (d = [String(d)]); kc(c.b, "t", d); a.w = 0; a.a = lc(a.g, a.g.w ? b : null); 0 < a.J && (a.D = new Kb(n(a.ya, a, a.a), a.J)); Nb(a.G, a.a, "readystatechange", a.Sa); b = a.m ? Ca(a.m) : {}; a.j ? (a.v || (a.v = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.$(a.A, a.v, a.j, b)) : (a.v = "GET", a.a.$(a.A, a.v, null, b)); E(1); }
g.Sa = function (a) { a = a.target; var b = this.D; b && 3 == K(a) ? b.Ia() : this.ya(a); };
g.ya = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = K(this.a), c = this.a.qa(), d = this.a.S();
                if (!(3 > b || 3 == b && !Ka && !this.a.Y())) {
                    this.l || 4 != b || 7 == c || (8 == c || 0 >= d ? E(3) : E(2));
                    mc(this);
                    var e = this.a.S();
                    this.H = e;
                    var f = this.a.Y();
                    if (this.b = 200 == e) {
                        if (this.R && !this.o) {
                            b: {
                                if (this.a) {
                                    var h, l = this.a;
                                    if ((h = l.a ? l.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !wa(h)) {
                                        var p = h;
                                        break b;
                                    }
                                }
                                p = null;
                            }
                            if (p)
                                this.o = !0, nc(this, p);
                            else {
                                this.b = !1;
                                this.c = 3;
                                F(12);
                                L(this);
                                pc(this);
                                break a;
                            }
                        }
                        this.F ? (qc(this, b, f), Ka && this.b && 3 == b && (Nb(this.G, this.O, "tick", this.Ra), this.O.start())) : nc(this, f);
                        4 == b && L(this);
                        this.b && !this.l && (4 == b ? rc(this.g, this) : (this.b = !1, J(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.c = 3, F(12)) : (this.c = 0, F(13)), L(this), pc(this);
                }
            }
    }
    catch (D) { }
    finally { }
};
function qc(a, b, c) { for (var d = !0; !a.l && a.w < c.length;) {
    var e = tc(a, c);
    if (e == gc) {
        4 == b && (a.c = 4, F(14), d = !1);
        break;
    }
    else if (e == fc) {
        a.c = 4;
        F(15);
        d = !1;
        break;
    }
    else
        nc(a, e);
} 4 == b && 0 == c.length && (a.c = 1, F(16), d = !1); a.b = a.b && d; d || (L(a), pc(a)); }
g.Ra = function () { if (this.a) {
    var a = K(this.a), b = this.a.Y();
    this.w < b.length && (mc(this), qc(this, a, b), this.b && 4 != a && J(this));
} };
function tc(a, b) { var c = a.w, d = b.indexOf("\n", c); if (-1 == d)
    return gc; c = Number(b.substring(c, d)); if (isNaN(c))
    return fc; d += 1; if (d + c > b.length)
    return gc; b = b.substr(d, c); a.w = d + c; return b; }
g.cancel = function () { this.l = !0; L(this); };
function J(a) { a.P = q() + a.N; uc(a, a.N); }
function uc(a, b) { if (null != a.h)
    throw Error("WatchDog timer not null"); a.h = Vb(n(a.Qa, a), b); }
function mc(a) { a.h && (k.clearTimeout(a.h), a.h = null); }
g.Qa = function () { this.h = null; var a = q(); 0 <= a - this.P ? (2 != this.B && (E(3), F(17)), L(this), this.c = 2, pc(this)) : uc(this, this.P - a); };
function pc(a) { 0 == a.g.u || a.l || rc(a.g, a); }
function L(a) { mc(a); var b = a.D; b && "function" == typeof b.da && b.da(); a.D = null; Ib(a.O); Ob(a.G); a.a && (b = a.a, a.a = null, b.abort(), b.da()); }
function nc(a, b) {
    try {
        var c = a.g;
        if (0 != c.u && (c.a == a || vc(c.b, a)))
            if (c.A = a.H, !a.o && vc(c.b, a) && 3 == c.u) {
                try {
                    var d = c.ja.a.parse(b);
                }
                catch (oc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.i) {
                                if (c.a)
                                    if (c.a.s + 3E3 < a.s)
                                        wc(c), c.a.cancel(), c.a = null;
                                    else
                                        break a;
                                xc(c);
                                F(18);
                            }
                        }
                    else
                        c.ia = e[1], 0 < c.ia - c.G && 37500 > e[2] && c.U && 0 == c.m && !c.l && (c.l = Vb(n(c.Na, c), 6E3));
                    if (1 >= yc(c.b) && c.O) {
                        try {
                            c.O();
                        }
                        catch (oc) { }
                        c.O = void 0;
                    }
                }
                else
                    M(c, 11);
            }
            else if ((a.o || c.a == a) && wc(c), !wa(b))
                for (b = d = c.ja.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.G = e[0], e = e[1], 2 == c.u)
                        if ("c" == e[0]) {
                            c.B = e[1];
                            c.R = e[2];
                            var f = e[3];
                            null != f && (c.oa = f);
                            var h = e[5];
                            null != h && "number" === typeof h && 0 < h && (c.D = 1.5 * h);
                            var l = c, p = a.a;
                            if (p) {
                                var D = p.a ? p.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (D) {
                                    var z = l.b;
                                    !z.a && (u(D, "spdy") || u(D, "quic") || u(D, "h2")) && (z.f = z.g, z.a = new Set, z.b && (zc(z, z.b), z.b = null));
                                }
                                if (l.s) {
                                    var ta = p.a ? p.a.getResponseHeader("X-HTTP-Session-Id") : null;
                                    ta && (l.ha = ta, N(l.v, l.s, ta));
                                }
                            }
                            c.u = 3;
                            c.c && c.c.na();
                            l = c;
                            var ua = a;
                            l.ea = Ac(l, l.w ? l.R : null, l.P);
                            if (ua.o) {
                                Bc(l.b, ua);
                                var va = ua, sc = l.D;
                                sc && va.setTimeout(sc);
                                va.h && (mc(va), J(va));
                                l.a = ua;
                            }
                            else
                                Cc(l);
                            0 < c.f.length && Dc(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || M(c, 7);
                    else
                        3 == c.u && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? M(c, 7) : Ec(c) : "noop" != e[0] && c.c && c.c.ma(e), c.m = 0);
        E(4);
    }
    catch (oc) { }
}
function Fc(a) { if (a.I && "function" == typeof a.I)
    return a.I(); if ("string" === typeof a)
    return a.split(""); if (da(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Gc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (da(a) || "string" === typeof a)
    oa(a, b, void 0);
else {
    if (a.K && "function" == typeof a.K)
        var c = a.K();
    else if (a.I && "function" == typeof a.I)
        c = void 0;
    else if (da(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Fc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function O(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof O)
        for (c = a.K(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = O.prototype;
g.I = function () { Hc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.K = function () { Hc(this); return this.a.concat(); };
function Hc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        P(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], P(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return P(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { P(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.K(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function P(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Ic = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Jc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function Q(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof Q) {
    this.a = void 0 !== b ? b : a.a;
    Kc(this, a.f);
    this.j = a.j;
    Lc(this, a.c);
    Mc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new R;
    c.c = b.c;
    b.a && (c.a = new O(b.a), c.b = b.b);
    Nc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Ic)) ? (this.a = !!b, Kc(this, c[1] || "", !0), this.j = S(c[2] || ""), Lc(this, c[3] || "", !0), Mc(this, c[4]), this.g = S(c[5] || "", !0), Nc(this, c[6] || "", !0), this.i = S(c[7] || "")) : (this.a = !!b, this.b = new R(null, this.a)); }
Q.prototype.toString = function () { var a = [], b = this.f; b && a.push(T(b, Oc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(T(b, Oc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(T(c, "/" == c.charAt(0) ? Pc : Qc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", T(c, Rc)); return a.join(""); };
function I(a) { return new Q(a); }
function Kc(a, b, c) { a.f = c ? S(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Lc(a, b, c) { a.c = c ? S(b, !0) : b; }
function Mc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Nc(a, b, c) { b instanceof R ? (a.b = b, Sc(a.b, a.a)) : (c || (b = T(b, Tc)), a.b = new R(b, a.a)); }
function N(a, b, c) { a.b.set(b, c); }
function ic(a) { N(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function Uc(a) { return a instanceof Q ? I(a) : new Q(a, void 0); }
function Vc(a, b, c, d) { var e = new Q(null, void 0); a && Kc(e, a); b && Lc(e, b); c && Mc(e, c); d && (e.g = d); return e; }
function S(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function T(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, Wc), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function Wc(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Oc = /[#\/\?@]/g, Qc = /[#\?:]/g, Pc = /[#\?]/g, Tc = /[#\?@]/g, Rc = /#/g;
function R(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function U(a) { a.a || (a.a = new O, a.b = 0, a.c && Jc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = R.prototype;
g.add = function (a, b) { U(this); this.c = null; a = V(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function Xc(a, b) { U(a); b = V(a, b); P(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, P(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Hc(a))); }
function Yc(a, b) { U(a); b = V(a, b); return P(a.a.b, b); }
g.forEach = function (a, b) { U(this); this.a.forEach(function (c, d) { oa(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.K = function () { U(this); for (var a = this.a.I(), b = this.a.K(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.I = function (a) { U(this); var b = []; if ("string" === typeof a)
    Yc(this, a) && (b = ra(b, this.a.get(V(this, a))));
else {
    a = this.a.I();
    for (var c = 0; c < a.length; c++)
        b = ra(b, a[c]);
} return b; };
g.set = function (a, b) { U(this); this.c = null; a = V(this, a); Yc(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.I(a); return 0 < a.length ? String(a[0]) : b; };
function kc(a, b, c) { Xc(a, b); 0 < c.length && (a.c = null, a.a.set(V(a, b), sa(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.K(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.I(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function V(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function Sc(a, b) { b && !a.f && (U(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (Xc(this, d), kc(this, e, c)); }, a)); a.f = b; }
function Zc(a, b) { this.b = a; this.a = b; }
function $c(a) { this.g = a || ad; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ca && k.ca.ua && k.ca.ua() && k.ca.ua().mb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var ad = 10;
function bd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function yc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function vc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function zc(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Bc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
$c.prototype.cancel = function () {
    var e_1, _a;
    this.c = cd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function cd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.i);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.i);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return sa(a.c);
}
function dd() { }
dd.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
dd.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function ed() { this.a = new dd; }
function fd(a, b, c) { var d = c || ""; try {
    Gc(a, function (e, f) { var h = e; m(e) && (h = vb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function gd(a, b) { var c = new Pb; if (k.Image) {
    var d = new Image;
    d.onload = ka(hd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(hd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(hd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(hd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function hd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var id = k.JSON.parse;
function W(a) { B.call(this); this.headers = new O; this.G = a || null; this.b = !1; this.s = this.a = null; this.D = ""; this.h = 0; this.f = ""; this.g = this.w = this.l = this.v = !1; this.o = 0; this.m = null; this.H = jd; this.B = this.F = !1; }
r(W, B);
var jd = "", kd = /^https?$/i, ld = ["POST", "PUT"];
g = W.prototype;
g.$ = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.D = a;
    this.f = "";
    this.h = 0;
    this.v = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.G ? Zb(this.G) : Zb(cc);
    this.a.onreadystatechange = n(this.va, this);
    try {
        this.w = !0, this.a.open(b, String(a), !0), this.w = !1;
    }
    catch (f) {
        md(this, f);
        return;
    }
    a = c || "";
    var e = new O(this.headers);
    d && Gc(d, function (f, h) { e.set(h, f); });
    d = pa(e.K());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        na(ld, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.H && (this.a.responseType = this.H);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        nd(this), 0 < this.o && ((this.B = od(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = n(this.ta, this)) : this.m = Jb(this.ta, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        md(this, f);
    }
};
function od(a) { return w && Sa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function qa(a) { return "content-type" == a.toLowerCase(); }
g.ta = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)); };
function md(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; pd(a); qd(a); }
function pd(a) { a.v || (a.v = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), qd(this)); };
g.C = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), qd(this, !0)); W.M.C.call(this); };
g.va = function () { this.j || (this.w || this.l || this.g ? rd(this) : this.Oa()); };
g.Oa = function () { rd(this); };
function rd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != K(a) || 2 != a.S()))
        if (a.l && 4 == K(a))
            Jb(a.va, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == K(a)) {
            a.b = !1;
            try {
                var b = a.S();
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default: c = !1;
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.D).match(Ic)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1);
                        }
                        e = !kd.test(f ? f.toLowerCase() : "");
                    }
                    d = e;
                }
                if (d)
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.h = 6;
                    try {
                        var l = 2 < K(a) ? a.a.statusText : "";
                    }
                    catch (p) {
                        l = "";
                    }
                    a.f = l + " [" + a.S() + "]";
                    pd(a);
                }
            }
            finally {
                qd(a);
            }
        }
}
function qd(a, b) { if (a.a) {
    nd(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function nd(a) { a.a && a.B && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function K(a) { return a.a ? a.a.readyState : 0; }
g.S = function () { try {
    return 2 < K(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.Y = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Ja = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return id(b);
} };
g.qa = function () { return this.h; };
g.Ma = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function sd(a) { var b = ""; Ba(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function td(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = sd(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : N(a, b, c)); }
function X(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function ud(a) {
    this.f = [];
    this.R = this.ea = this.v = this.P = this.a = this.ha = this.s = this.N = this.h = this.F = this.j = null;
    this.Fa = this.H = 0;
    this.Ca = X("failFast", !1, a);
    this.U = this.l = this.i = this.g = this.c = null;
    this.W = !0;
    this.A = this.ia = this.G = -1;
    this.J = this.m = this.o = 0;
    this.Ba = X("baseRetryDelayMs", 5E3, a);
    this.Ga = X("retryDelaySeedMs", 1E4, a);
    this.Da = X("forwardChannelMaxRetries", 2, a);
    this.ga = X("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Ea = a && a.nb || void 0;
    this.D = void 0;
    this.w = a && a.supportsCrossDomainXhr || !1;
    this.B = "";
    this.b = new $c(a && a.concurrentRequestLimit);
    this.ja = new ed;
    this.fa = a && a.fastHandshake || !1;
    a && a.forceLongPolling && (this.W = !1);
    this.O = void 0;
}
g = ud.prototype;
g.oa = 8;
g.u = 1;
function Ec(a) { vd(a); if (3 == a.u) {
    var b = a.H++, c = I(a.v);
    N(c, "SID", a.B);
    N(c, "RID", b);
    N(c, "TYPE", "terminate");
    wd(a, c);
    b = new H(a, b, void 0);
    b.B = 2;
    b.f = ic(I(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.f.toString(), ""));
    !c && k.Image && ((new Image).src = b.f, c = !0);
    c || (b.a = lc(b.g, null), b.a.$(b.f));
    b.s = q();
    J(b);
} xd(a); }
function vd(a) { a.a && (a.a.cancel(), a.a = null); a.i && (k.clearTimeout(a.i), a.i = null); wc(a); a.b.cancel(); a.g && ("number" === typeof a.g && k.clearTimeout(a.g), a.g = null); }
function yd(a, b) { a.f.push(new Zc(a.Fa++, b)); 3 == a.u && Dc(a); }
function Dc(a) { bd(a.b) || a.g || (a.g = !0, Cb(a.xa, a), a.o = 0); }
function zd(a, b) { if (yc(a.b) >= a.b.f - (a.g ? 1 : 0))
    return !1; if (a.g)
    return a.f = b.i.concat(a.f), !0; if (1 == a.u || 2 == a.u || a.o >= (a.Ca ? 0 : a.Da))
    return !1; a.g = Vb(n(a.xa, a, b), Ad(a, a.o)); a.o++; return !0; }
g.xa = function (a) {
    if (this.g)
        if (this.g = null, 1 == this.u) {
            if (!a) {
                this.H = Math.floor(1E5 * Math.random());
                a = this.H++;
                var b = new H(this, a, void 0), c = this.j;
                this.F && (c ? (c = Ca(c), Ea(c, this.F)) : c = this.F);
                null === this.h && (b.m = c);
                var d;
                if (this.fa)
                    a: {
                        for (var e = d = 0; e < this.f.length; e++) {
                            b: {
                                var f = this.f[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.f.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Bd(this, b, d);
                e = I(this.v);
                N(e, "RID", a);
                N(e, "CVER", 22);
                this.s && N(e, "X-HTTP-Session-Id", this.s);
                wd(this, e);
                this.h && c && td(e, this.h, c);
                zc(this.b, b);
                this.fa ? (N(e, "$req", d), N(e, "SID", "null"), b.R = !0, hc(b, e, null)) : hc(b, e, d);
                this.u = 2;
            }
        }
        else
            3 == this.u && (a ? Cd(this, a) : 0 == this.f.length || bd(this.b) || Cd(this));
};
function Cd(a, b) { var c; b ? c = b.W : c = a.H++; var d = I(a.v); N(d, "SID", a.B); N(d, "RID", c); N(d, "AID", a.G); wd(a, d); a.h && a.j && td(d, a.h, a.j); c = new H(a, c, a.o + 1); null === a.h && (c.m = a.j); b && (a.f = b.i.concat(a.f)); b = Bd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ga) + Math.round(.5 * a.ga * Math.random())); zc(a.b, c); hc(c, d, b); }
function wd(a, b) { a.c && Gc({}, function (c, d) { N(b, d, c); }); }
function Bd(a, b, c) { c = Math.min(a.f.length, c); var d = a.c ? n(a.c.Ha, a.c, a) : null; a: for (var e = a.f, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var l = !0, p = 0; p < c; p++) {
        var D = e[p].b, z = e[p].a;
        D -= f;
        if (0 > D)
            f = Math.max(0, e[p].b - 100), l = !1;
        else
            try {
                fd(z, h, "req" + D + "_");
            }
            catch (ta) {
                d && d(z);
            }
    }
    if (l) {
        d = h.join("&");
        break a;
    }
} a = a.f.splice(0, c); b.i = a; return d; }
function Cc(a) { a.a || a.i || (a.J = 1, Cb(a.wa, a), a.m = 0); }
function xc(a) { if (a.a || a.i || 3 <= a.m)
    return !1; a.J++; a.i = Vb(n(a.wa, a), Ad(a, a.m)); a.m++; return !0; }
g.wa = function () { this.i = null; this.a = new H(this, "rpc", this.J); null === this.h && (this.a.m = this.j); this.a.J = 0; var a = I(this.ea); N(a, "RID", "rpc"); N(a, "SID", this.B); N(a, "CI", this.U ? "0" : "1"); N(a, "AID", this.G); wd(this, a); N(a, "TYPE", "xmlhttp"); this.h && this.j && td(a, this.h, this.j); this.D && this.a.setTimeout(this.D); var b = this.a, c = this.R; b.B = 1; b.f = ic(I(a)); b.j = null; b.F = !0; jc(b, c); };
g.Na = function () { null != this.l && (this.l = null, this.a.cancel(), this.a = null, xc(this), F(19)); };
function wc(a) { null != a.l && (k.clearTimeout(a.l), a.l = null); }
function rc(a, b) { var c = null; if (a.a == b) {
    wc(a);
    a.a = null;
    var d = 2;
}
else if (vc(a.b, b))
    c = b.i, Bc(a.b, b), d = 1;
else
    return; a.A = b.H; if (0 != a.u)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.s;
            var e = a.o;
            d = Rb();
            d.dispatchEvent(new Ub(d, c, b, e));
            Dc(a);
        }
        else
            Cc(a);
    else if (e = b.c, 3 == e || 0 == e && 0 < a.A || !(1 == d && zd(a, b) || 2 == d && xc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                M(a, 5);
                break;
            case 4:
                M(a, 10);
                break;
            case 3:
                M(a, 6);
                break;
            default: M(a, 2);
        } }
function Ad(a, b) { var c = a.Ba + Math.floor(Math.random() * a.Ga); a.c || (c *= 2); return c * b; }
function M(a, b) { if (2 == b) {
    var c = null;
    a.c && (c = null);
    var d = n(a.Ta, a);
    c || (c = new Q("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Kc(c, "https"), ic(c));
    gd(c.toString(), d);
}
else
    F(2); a.u = 0; a.c && a.c.la(b); xd(a); vd(a); }
g.Ta = function (a) { a ? F(2) : F(1); };
function xd(a) { a.u = 0; a.A = -1; if (a.c) {
    if (0 != cd(a.b).length || 0 != a.f.length)
        a.b.c.length = 0, sa(a.f), a.f.length = 0;
    a.c.ka();
} }
function Ac(a, b, c) { var d = Uc(c); if ("" != d.c)
    b && Lc(d, b + "." + d.c), Mc(d, d.h);
else {
    var e = k.location;
    d = Vc(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.N && Ba(a.N, function (f, h) { N(d, h, f); }); b = a.s; c = a.ha; b && c && N(d, b, c); N(d, "VER", a.oa); wd(a, d); return d; }
function lc(a, b) { if (b && !a.w)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new W(a.Ea); b.F = a.w; return b; }
function Dd() { }
g = Dd.prototype;
g.na = function () { };
g.ma = function () { };
g.la = function () { };
g.ka = function () { };
g.Ha = function () { };
function Ed() { if (w && !(10 <= Number(Va)))
    throw Error("Environmental error: no available transport."); }
Ed.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    B.call(this);
    this.a = new ud(b);
    this.l = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.j = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.pa && (a ? a["X-WebChannel-Client-Profile"] = b.pa : a = { "X-WebChannel-Client-Profile": b.pa });
    this.a.F =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !wa(a) && (this.a.h = a);
    this.h = b && b.supportsCrossDomainXhr || !1;
    this.g = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !wa(b) && (this.a.s = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, B);
g = Y.prototype;
g.addEventListener = function (a, b, c, d) { Y.M.addEventListener.call(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { Y.M.removeEventListener.call(this, a, b, c, d); };
g.Ka = function () { this.a.c = this.f; this.h && (this.a.w = !0); var a = this.a, b = this.l, c = this.b || void 0; F(0); a.P = b; a.N = c || {}; a.U = a.W; a.v = Ac(a, null, a.P); Dc(a); };
g.close = function () { Ec(this.a); };
g.La = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    yd(this.a, b);
}
else
    this.g ? (b = {}, b.__data__ = vb(a), yd(this.a, b)) : yd(this.a, a); };
g.C = function () { this.a.c = null; delete this.f; Ec(this.a); delete this.a; Y.M.C.call(this); };
function Fd(a) { ac.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Fd, ac);
function Gd() { bc.call(this); this.status = 1; }
r(Gd, bc);
function Z(a) { this.a = a; }
r(Z, Dd);
Z.prototype.na = function () { this.a.dispatchEvent("a"); };
Z.prototype.ma = function (a) { this.a.dispatchEvent(new Fd(a)); };
Z.prototype.la = function (a) { this.a.dispatchEvent(new Gd(a)); };
Z.prototype.ka = function () { this.a.dispatchEvent("b"); }; /*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Ed.prototype.createWebChannel = Ed.prototype.a;
Y.prototype.send = Y.prototype.La;
Y.prototype.open = Y.prototype.Ka;
Y.prototype.close = Y.prototype.close;
Wb.NO_ERROR = 0;
Wb.TIMEOUT = 8;
Wb.HTTP_ERROR = 6;
Xb.COMPLETE = "complete";
$b.EventType = G;
G.OPEN = "a";
G.CLOSE = "b";
G.ERROR = "c";
G.MESSAGE = "d";
B.prototype.listen = B.prototype.ra;
W.prototype.listenOnce = W.prototype.sa;
W.prototype.getLastError = W.prototype.Ma;
W.prototype.getLastErrorCode = W.prototype.qa;
W.prototype.getStatus = W.prototype.S;
W.prototype.getResponseJson = W.prototype.Ja;
W.prototype.getResponseText = W.prototype.Y;
W.prototype.send = W.prototype.$;
var esm = { createWebChannelTransport: function () { return new Ed; }, ErrorCode: Wb, EventType: Xb, WebChannel: $b, XhrIo: W };
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The semver (www.semver.org) version of the SDK. */ var w$1 = i.SDK_VERSION, b = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.t = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.s = function() {
        return this.t() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/** A user with a null UID. */ b.UNAUTHENTICATED = new b(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
b.i = new b("google-credentials-uid"), b.h = new b("first-party-uid");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E$1 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, A$1 = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return __extends(n, e), n;
}(Error), I$1 = function(t, e) {
    this.user = e, this.type = "OAuth", this.o = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.o.Authorization = "Bearer " + t;
}, N$1 = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.u = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.l = function() {}, t.prototype._ = function(t) {
        this.u = t, 
        // Fire with initial user.
        t(b.UNAUTHENTICATED);
    }, t.prototype.T = function() {
        this.u = null;
    }, t;
}(), T$1 = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.m = null, 
        /** Tracks the current User. */
        this.currentUser = b.UNAUTHENTICATED, this.I = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.R = 0, 
        /** The listener registered with setChangeListener(). */
        this.u = null, this.forceRefresh = !1, this.m = function() {
            e.R++, e.currentUser = e.A(), e.I = !0, e.u && e.u(e.currentUser);
        }, this.R = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.m) : (
        // if auth is not available, invoke tokenListener once with null token
        this.m(null), t.get().then((function(t) {
            e.auth = t, e.m && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.m);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.R, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            if (t.R !== e) throw new A$1(E$1.ABORTED, "getToken aborted due to token change.");
            return n ? (ke("string" == typeof n.accessToken), new I$1(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.l = function() {
        this.forceRefresh = !0;
    }, t.prototype._ = function(t) {
        this.u = t, 
        // Fire the initial event
        this.I && t(this.currentUser);
    }, t.prototype.T = function() {
        this.auth && this.auth.removeAuthTokenListener(this.m), this.m = null, this.u = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.A = function() {
        var t = this.auth && this.auth.getUid();
        return ke(null === t || "string" == typeof t), new b(t);
    }, t;
}(), _ = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e, this.type = "FirstParty", this.user = b.h;
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.V
            }, e = this.P.auth.p([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !0,
        configurable: !0
    }), t;
}(), R$1 = /** @class */ function() {
    function t(t, e) {
        this.P = t, this.V = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new _(this.P, this.V));
    }, t.prototype._ = function(t) {
        // Fire with initial uid.
        t(b.h);
    }, t.prototype.T = function() {}, t.prototype.l = function() {}, t;
}(), D = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new A$1(E$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new A$1(E$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new A$1(E$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new A$1(E$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.g = function(t) {
        return this.seconds === t.seconds ? Le(this.nanoseconds, t.nanoseconds) : Le(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), k$1 = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.v = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new D(0, 0));
    }, t.prototype.S = function(t) {
        return this.timestamp.g(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.C = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.D = function() {
        return this.timestamp;
    }, t;
}(), V$1 = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && De(), void 0 === n ? n = t.length - e : n > t.length - e && De(), 
        this.segments = t, this.offset = e, this.F = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.F;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.N(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.$(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.L = function(t) {
        return t = void 0 === t ? 1 : t, this.$(this.segments, this.offset + t, this.length - t);
    }, t.prototype.k = function() {
        return this.$(this.segments, this.offset, this.length - 1);
    }, t.prototype.O = function() {
        return this.segments[this.offset];
    }, t.prototype.q = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.M = function() {
        return 0 === this.length;
    }, t.prototype.B = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.U = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.W = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.N = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), S$1 = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.j = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.W().join("/");
    }, n.prototype.toString = function() {
        return this.j();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.G = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n;
}(V$1);

/**
 * An error class used for Firestore-generated errors. Ideally we should be
 * using FirebaseError, but integrating with it is overly arduous at the moment,
 * so we define our own compatible error class (with a `name` of 'FirebaseError'
 * and compatible `code` and `message` fields.)
 */ S$1.H = new S$1([]);

var L$1 = /^[_a-zA-Z][_a-zA-Z0-9]*$/, M$1 = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.$ = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.K = function(t) {
        return L$1.test(t);
    }, n.prototype.j = function() {
        return this.W().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.K(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.j();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.Y = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.X = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.J = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new A$1(E$1.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new A$1(E$1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new A$1(E$1.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n;
}(V$1);

/** A dot-separated path for navigating sub-objects within a document. */ M$1.H = new M$1([]);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var U$1 = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.Z = function(e) {
        return new t(S$1.G(e).L(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.tt = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === S$1.N(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.N = function(t, e) {
        return S$1.N(t.path, e.path);
    }, t.et = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.st = function(e) {
        return new t(new S$1(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function q$1(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function O$1(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function P$1(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ U$1.EMPTY = new U$1(new S$1([]));

var C$1 = /** @class */ function() {
    function t(t) {
        this.it = t;
    }
    return t.fromBase64String = function(e) {
        return new t(Ee.nt().atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return Ee.nt().btoa(this.it);
    }, t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.it);
    }, t.prototype.rt = function() {
        return 2 * this.it.length;
    }, t.prototype.S = function(t) {
        return Le(this.it, t.it);
    }, t.prototype.isEqual = function(t) {
        return this.it === t.it;
    }, t;
}();

function F$1(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function x$1(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function j(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function G$1(t) {
    var e = Z$1(t.mapValue.fields.__local_write_time__.timestampValue);
    return new D(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
C$1.ht = new C$1("");

var B$1 = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function z(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? j(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : De();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Q$1(t, e) {
    var n = z(t);
    if (n !== z(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return G$1(t).isEqual(G$1(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = Z$1(t.timestampValue), r = Z$1(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return K$1(t.bytesValue).isEqual(K$1(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return X$1(t.geoPointValue.latitude) === X$1(e.geoPointValue.latitude) && X$1(t.geoPointValue.longitude) === X$1(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return X$1(t.integerValue) === X$1(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = X$1(t.doubleValue), r = X$1(e.doubleValue);
                return n === r ? x$1(n) === x$1(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Me(t.arrayValue.values || [], e.arrayValue.values || [], Q$1);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (q$1(n) !== q$1(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Q$1(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return De();
    }
}

function W$1(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Q$1(t, e);
    }));
}

function J$1(t, e) {
    var n = z(t), r = z(e);
    if (n !== r) return Le(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return Le(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = X$1(t.integerValue || t.doubleValue), r = X$1(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return H$1(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return H$1(G$1(t), G$1(e));

      case 5 /* StringValue */ :
        return Le(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = K$1(t), r = K$1(e);
            return n.S(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = Le(n[i], r[i]);
                if (0 !== o) return o;
            }
            return Le(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = Le(X$1(t.latitude), X$1(e.latitude));
            return 0 !== n ? n : Le(X$1(t.longitude), X$1(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = J$1(n[i], r[i]);
                if (o) return o;
            }
            return Le(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = Le(r[s], o[s]);
                if (0 !== u) return u;
                var a = J$1(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return Le(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw De();
    }
}

function H$1(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return Le(t, e);
    var n = Z$1(t), r = Z$1(e), i = Le(n.seconds, r.seconds);
    return 0 !== i ? i : Le(n.nanos, r.nanos);
}

function Y$1(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = Z$1(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? K$1(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        U$1.Z(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : De();
        var n, r;
    }(t);
}

function Z$1(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (ke(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = B$1.exec(t);
        if (ke(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: X$1(t.seconds),
        nanos: X$1(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function X$1(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function K$1(t) {
    return "string" == typeof t ? C$1.fromBase64String(t) : C$1.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function $(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.j()
    };
}

/** Returns true if `value` is an IntegerValue . */ function tt(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function et(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function nt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function rt(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function it(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Transforms a value into a server-generated timestamp. */ var ot = /** @class */ function() {
    function t() {}
    return t.prototype.ot = function(t, e) {
        return function(t, e) {
            var n = {
                fields: {
                    __type__: {
                        stringValue: "server_timestamp"
                    },
                    __local_write_time__: {
                        timestampValue: {
                            seconds: t.seconds,
                            nanos: t.nanoseconds
                        }
                    }
                }
            };
            return e && (n.fields.__previous_value__ = e), {
                mapValue: n
            };
        }(e, t);
    }, t.prototype.at = function(t, e) {
        return e;
    }, t.prototype.ut = function(t) {
        return null;
        // Server timestamps are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t;
    }, t;
}();

ot.instance = new ot;

/** Transforms an array value via a union operation. */
var st = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.ot = function(t, e) {
        return this.apply(t);
    }, t.prototype.at = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = ht(t), n = function(t) {
            e.some((function(e) {
                return Q$1(e, t);
            })) || e.push(t);
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.ut = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Me(this.elements, e.elements, Q$1);
    }, t;
}(), ut = /** @class */ function() {
    function t(t) {
        this.elements = t;
    }
    return t.prototype.ot = function(t, e) {
        return this.apply(t);
    }, t.prototype.at = function(t, e) {
        // The server just sends null as the transform result for array operations,
        // so we have to calculate a result the same as we do for local
        // applications.
        return this.apply(t);
    }, t.prototype.apply = function(t) {
        for (var e = ht(t), n = function(t) {
            e = e.filter((function(e) {
                return !Q$1(e, t);
            }));
        }, r = 0, i = this.elements; r < i.length; r++) {
            n(i[r]);
        }
        return {
            arrayValue: {
                values: e
            }
        };
    }, t.prototype.ut = function(t) {
        return null;
        // Array transforms are idempotent and don't require a base value.
        }, t.prototype.isEqual = function(e) {
        return e instanceof t && Me(this.elements, e.elements, Q$1);
    }, t;
}(), at = /** @class */ function() {
    function t(t, e) {
        this.serializer = t, this.ct = e;
    }
    return t.prototype.ot = function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = this.ut(t), r = this.asNumber(n) + this.asNumber(this.ct);
        return tt(n) && tt(this.ct) ? this.serializer.lt(r) : this.serializer._t(r);
    }, t.prototype.at = function(t, e) {
        return e;
    }, 
    /**
     * Inspects the provided value, returning the provided value if it is already
     * a NumberValue, otherwise returning a coerced value of 0.
     */
    t.prototype.ut = function(t) {
        return tt(e = t) || function(t) {
            return !!t && "doubleValue" in t;
        }(e) ? t : {
            integerValue: 0
        };
        var e;
    }, t.prototype.isEqual = function(e) {
        return e instanceof t && Q$1(this.ct, e.ct);
    }, t.prototype.asNumber = function(t) {
        return X$1(t.integerValue || t.doubleValue);
    }, t;
}();

/** Transforms an array value via a remove operation. */ function ht(t) {
    return et(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var ct = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(M$1.N)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.ft = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].B(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return Me(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), ft = /** @class */ function() {
    function t(t, e) {
        this.field = t, this.transform = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.field.isEqual(t.field) && this.transform.isEqual(t.transform);
    }, t;
}(), lt = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, pt = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.dt = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "wt", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Returns true if the preconditions is valid for the given document
     * (or null if no document is available).
     */
    t.prototype.Tt = function(t) {
        return void 0 !== this.updateTime ? t instanceof _t && t.version.isEqual(this.updateTime) : void 0 === this.exists || this.exists === t instanceof _t;
    }, t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}(), dt = /** @class */ function() {
    function t() {}
    return t.prototype.Et = function(t) {}, 
    /**
     * Returns the version from the given document for use as the result of a
     * mutation. Mutations are defined to return the version of the base document
     * only if it is an existing document. Deleted and unknown documents have a
     * post-mutation version of SnapshotVersion.min().
     */
    t.It = function(t) {
        return t instanceof _t ? t.version : k$1.min();
    }, t;
}(), yt = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Rt = r, i.type = 0 /* Set */ , 
        i;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        this.Et(t);
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        var n = e.version;
        return new _t(this.key, n, this.value, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        if (this.Et(t), !this.Rt.Tt(t)) return t;
        var r = dt.It(t);
        return new _t(this.key, r, this.value, {
            At: !0
        });
    }, n.prototype.Pt = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.Rt.isEqual(t.Rt);
    }, n;
}(dt), vt = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.Vt = r, o.Rt = i, o.type = 1 /* Patch */ , 
        o;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        if (this.Et(t), !this.Rt.Tt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Dt(this.key, e.version);
        var n = this.pt(t);
        return new _t(this.key, e.version, n, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        if (this.Et(t), !this.Rt.Tt(t)) return t;
        var r = dt.It(t), i = this.pt(t);
        return new _t(this.key, r, i, {
            At: !0
        });
    }, n.prototype.Pt = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Vt.isEqual(t.Vt) && this.Rt.isEqual(t.Rt);
    }, 
    /**
     * Patches the data of document if available or creates a new document. Note
     * that this does not check whether or not the precondition of this patch
     * holds.
     */
    n.prototype.pt = function(t) {
        var e;
        return e = t instanceof _t ? t.data() : bt.empty(), this.yt(e);
    }, n.prototype.yt = function(t) {
        var e = this, n = new Et(t);
        return this.Vt.fields.forEach((function(t) {
            if (!t.M()) {
                var r = e.data.field(t);
                null !== r ? n.set(t, r) : n.delete(t);
            }
        })), n.gt();
    }, n;
}(dt), mt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Rt = pt.exists(!0), r;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        if (this.Et(t), ke(null != e.transformResults), !this.Rt.Tt(t)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Dt(this.key, e.version);
        var n = this.bt(t), r = this.vt(t, e.transformResults), i = e.version, o = this.St(n.data(), r);
        return new _t(this.key, i, o, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        if (this.Et(t), !this.Rt.Tt(t)) return t;
        var r = this.bt(t), i = this.Ct(n, t, e), o = this.St(r.data(), i);
        return new _t(this.key, r.version, o, {
            At: !0
        });
    }, n.prototype.Pt = function(t) {
        for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) {
            var i = r[n], o = t instanceof _t ? t.field(i.field) : void 0, s = i.transform.ut(o || null);
            null != s && (e = null == e ? (new Et).set(i.field, s) : e.set(i.field, s));
        }
        return e ? e.gt() : null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && Me(this.fieldTransforms, t.fieldTransforms, (function(t, e) {
            return t.isEqual(e);
        })) && this.Rt.isEqual(t.Rt);
    }, 
    /**
     * Asserts that the given MaybeDocument is actually a Document and verifies
     * that it matches the key for this mutation. Since we only support
     * transformations with precondition exists this method is guaranteed to be
     * safe.
     */
    n.prototype.bt = function(t) {
        return t;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use after a
     * TransformMutation has been acknowledged by the server.
     *
     * @param baseDoc The document prior to applying this mutation batch.
     * @param serverTransformResults The transform results received by the server.
     * @return The transform results list.
     */
    n.prototype.vt = function(t, e) {
        var n = [];
        ke(this.fieldTransforms.length === e.length);
        for (var r = 0; r < e.length; r++) {
            var i = this.fieldTransforms[r], o = i.transform, s = null;
            t instanceof _t && (s = t.field(i.field)), n.push(o.at(s, e[r]));
        }
        return n;
    }, 
    /**
     * Creates a list of "transform results" (a transform result is a field value
     * representing the result of applying a transform) for use when applying a
     * TransformMutation locally.
     *
     * @param localWriteTime The local time of the transform mutation (used to
     *     generate ServerTimestampValues).
     * @param maybeDoc The current state of the document after applying all
     *     previous mutations.
     * @param baseDoc The document prior to applying this mutation batch.
     * @return The transform results list.
     */
    n.prototype.Ct = function(t, e, n) {
        for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) {
            var s = o[i], u = s.transform, a = null;
            e instanceof _t && (a = e.field(s.field)), null === a && n instanceof _t && (
            // If the current document does not contain a value for the mutated
            // field, use the value that existed before applying this mutation
            // batch. This solves an edge case where a PatchMutation clears the
            // values in a nested map before the TransformMutation is applied.
            a = n.field(s.field)), r.push(u.ot(a, t));
        }
        return r;
    }, n.prototype.St = function(t, e) {
        for (var n = new Et(t), r = 0; r < this.fieldTransforms.length; r++) {
            var i = this.fieldTransforms[r].field;
            n.set(i, e[r]);
        }
        return n.gt();
    }, n;
}(dt), gt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Rt = n, r.type = 3 /* Delete */ , r;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return this.Et(t), new Rt(this.key, e.version, {
            hasCommittedMutations: !0
        });
    }, n.prototype.ot = function(t, e, n) {
        return this.Et(t), this.Rt.Tt(t) ? new Rt(this.key, k$1.min()) : t;
    }, n.prototype.Pt = function(t) {
        return null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
    }, n;
}(dt), wt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Rt = n, r.type = 4 /* Verify */ , r;
    }
    return __extends(n, e), n.prototype.at = function(t, e) {
        De();
    }, n.prototype.ot = function(t, e, n) {
        De();
    }, n.prototype.Pt = function(t) {
        De();
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.Rt.isEqual(t.Rt);
    }, n;
}(dt), bt = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.M()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!it(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.q()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Q$1(this.proto, t.proto);
    }, t;
}(), Et = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = bt.empty()), this.Dt = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ft = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Nt(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Nt(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Nt = function(t, e) {
        for (var n = this.Ft, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === z(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.q(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.gt = function() {
        var t = this.$t(M$1.H, this.Ft);
        return null != t ? new bt(t) : this.Dt;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.EMPTY_PATH to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.$t = function(t, e) {
        var n = this, r = !1, i = this.Dt.field(t), o = it(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.$t(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/** A field path and the TransformOperation to perform upon it. */
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function At(t) {
    var e = [];
    return O$1(t.fields || {}, (function(t, n) {
        var r = new M$1([ t ]);
        if (it(n)) {
            var i = At(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new ct(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var It, Nt, Tt = function(t, e) {
    this.key = t, this.version = e;
}, _t = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).Lt = r, o.At = !!i.At, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return __extends(n, e), n.prototype.field = function(t) {
        return this.Lt.field(t);
    }, n.prototype.data = function() {
        return this.Lt;
    }, n.prototype.kt = function() {
        return this.Lt.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.At === t.At && this.hasCommittedMutations === t.hasCommittedMutations && this.Lt.isEqual(t.Lt);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.Lt.toString() + ", {hasLocalMutations: " + this.At + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.At || this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n;
}(Tt), Rt = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Tt), Dt = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Tt), kt = /** @class */ function() {
    /**
     * Initializes a Target with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     *
     * NOTE: you should always construct `Target` from `Query.toTarget` instead of
     * using this constructor, because `Query` provides an implicit `orderBy`
     * property.
     */
    function t(t, e, n, r, i, o, s) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
        this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
        this.startAt = o, this.endAt = s, this.Ot = null;
    }
    return t.prototype.canonicalId = function() {
        if (null === this.Ot) {
            var t = this.path.j();
            null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:", 
            t += this.filters.map((function(t) {
                return t.canonicalId();
            })).join(","), t += "|ob:", t += this.orderBy.map((function(t) {
                return t.canonicalId();
            })).join(","), F$1(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", 
            t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), 
            this.Ot = t;
        }
        return this.Ot;
    }, t.prototype.toString = function() {
        var t = this.path.j();
        return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 
        this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), 
        F$1(this.limit) || (t += ", limit: " + this.limit), this.orderBy.length > 0 && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), 
        this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), 
        "Target(" + t + ")";
    }, t.prototype.isEqual = function(t) {
        if (this.limit !== t.limit) return !1;
        if (this.orderBy.length !== t.orderBy.length) return !1;
        for (var e = 0; e < this.orderBy.length; e++) if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1;
        if (this.filters.length !== t.filters.length) return !1;
        for (var n = 0; n < this.filters.length; n++) if (!this.filters[n].isEqual(t.filters[n])) return !1;
        return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt);
    }, t.prototype.qt = function() {
        return U$1.et(this.path) && null === this.collectionGroup && 0 === this.filters.length;
    }, t;
}(), Vt = /** @class */ function() {
    /**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
    function t(t, e, n, r, i, o /* First */ , s, u) {
        void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
        void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
        void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.Mt = n, 
        this.filters = r, this.limit = i, this.xt = o, this.startAt = s, this.endAt = u, 
        this.Bt = null, 
        // The corresponding `Target` of this `Query` instance.
        this.Ut = null, this.startAt && this.Qt(this.startAt), this.endAt && this.Qt(this.endAt);
    }
    return t.Wt = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "orderBy", {
        get: function() {
            if (null === this.Bt) {
                this.Bt = [];
                var t = this.jt(), e = this.Gt();
                if (null !== t && null === e) 
                // In order to implicitly add key ordering, we must also add the
                // inequality filter field for it to be a valid query.
                // Note that the default inequality field and key ordering is ascending.
                t.Y() || this.Bt.push(new Ct(t)), this.Bt.push(new Ct(M$1.X(), "asc" /* ASCENDING */)); else {
                    for (var n = !1, r = 0, i = this.Mt; r < i.length; r++) {
                        var o = i[r];
                        this.Bt.push(o), o.field.Y() && (n = !0);
                    }
                    if (!n) {
                        // The order of the implicit key ordering always matches the last
                        // explicit order by
                        var s = this.Mt.length > 0 ? this.Mt[this.Mt.length - 1].dir : "asc" /* ASCENDING */;
                        this.Bt.push(new Ct(M$1.X(), s));
                    }
                }
            }
            return this.Bt;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Ht = function(e) {
        var n = this.filters.concat([ e ]);
        return new t(this.path, this.collectionGroup, this.Mt.slice(), n, this.limit, this.xt, this.startAt, this.endAt);
    }, t.prototype.Kt = function(e) {
        // TODO(dimond): validate that orderBy does not list the same key twice.
        var n = this.Mt.concat([ e ]);
        return new t(this.path, this.collectionGroup, n, this.filters.slice(), this.limit, this.xt, this.startAt, this.endAt);
    }, t.prototype.zt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), e, "F" /* First */ , this.startAt, this.endAt);
    }, t.prototype.Yt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), e, "L" /* Last */ , this.startAt, this.endAt);
    }, t.prototype.Xt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), this.limit, this.xt, e, this.endAt);
    }, t.prototype.Jt = function(e) {
        return new t(this.path, this.collectionGroup, this.Mt.slice(), this.filters.slice(), this.limit, this.xt, this.startAt, e);
    }, 
    /**
     * Helper to convert a collection group query into a collection query at a
     * specific path. This is used when executing collection group queries, since
     * we have to split the query into a set of collection queries at multiple
     * paths.
     */
    t.prototype.Zt = function(e) {
        return new t(e, 
        /*collectionGroup=*/ null, this.Mt.slice(), this.filters.slice(), this.limit, this.xt, this.startAt, this.endAt);
    }, 
    /**
     * Returns true if this query does not specify any query constraints that
     * could remove results.
     */
    t.prototype.te = function() {
        return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.Mt.length || 1 === this.Mt.length && this.Mt[0].field.Y());
    }, 
    // TODO(b/29183165): This is used to get a unique string from a query to, for
    // example, use as a dictionary key, but the implementation is subject to
    // collisions. Make it collision-free.
    t.prototype.canonicalId = function() {
        return this.ee().canonicalId() + "|lt:" + this.xt;
    }, t.prototype.toString = function() {
        return "Query(target=" + this.ee().toString() + "; limitType=" + this.xt + ")";
    }, t.prototype.isEqual = function(t) {
        return this.ee().isEqual(t.ee()) && this.xt === t.xt;
    }, t.prototype.se = function(t, e) {
        for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) {
            var o = i[r], s = o.compare(t, e);
            if (0 !== s) return s;
            n = n || o.field.Y();
        }
        return 0;
    }, t.prototype.matches = function(t) {
        return this.ie(t) && this.ne(t) && this.re(t) && this.he(t);
    }, t.prototype.oe = function() {
        return !F$1(this.limit) && "F" /* First */ === this.xt;
    }, t.prototype.ae = function() {
        return !F$1(this.limit) && "L" /* Last */ === this.xt;
    }, t.prototype.Gt = function() {
        return this.Mt.length > 0 ? this.Mt[0].field : null;
    }, t.prototype.jt = function() {
        for (var t = 0, e = this.filters; t < e.length; t++) {
            var n = e[t];
            if (n instanceof St && n.ue()) return n.field;
        }
        return null;
    }, 
    // Checks if any of the provided Operators are included in the query and
    // returns the first one that is, or null if none are.
    t.prototype.ce = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            var r = n[e];
            if (r instanceof St && t.indexOf(r.op) >= 0) return r.op;
        }
        return null;
    }, t.prototype.qt = function() {
        return this.ee().qt();
    }, t.prototype.le = function() {
        return null !== this.collectionGroup;
    }, 
    /**
     * Converts this `Query` instance to it's corresponding `Target`
     * representation.
     */
    t.prototype.ee = function() {
        if (!this.Ut) if ("F" /* First */ === this.xt) this.Ut = new kt(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt); else {
            for (
            // Flip the orderBy directions since we want the last results
            var t = [], e = 0, n = this.orderBy; e < n.length; e++) {
                var r = n[e], i = "desc" /* DESCENDING */ === r.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
                t.push(new Ct(r.field, i));
            }
            // We need to swap the cursors to match the now-flipped query ordering.
                        var o = this.endAt ? new Pt(this.endAt.position, !this.endAt.before) : null, s = this.startAt ? new Pt(this.startAt.position, !this.startAt.before) : null;
            // Now return as a LimitType.First query.
                        this.Ut = new kt(this.path, this.collectionGroup, t, this.filters, this.limit, o, s);
        }
        return this.Ut;
    }, t.prototype.ie = function(t) {
        var e = t.key.path;
        return null !== this.collectionGroup ? t.key.tt(this.collectionGroup) && this.path.B(e) : U$1.et(this.path) ? this.path.isEqual(e) : this.path.U(e);
    }, 
    /**
     * A document must have a value for every ordering clause in order to show up
     * in the results.
     */
    t.prototype.ne = function(t) {
        for (var e = 0, n = this.Mt; e < n.length; e++) {
            var r = n[e];
            // order by key always matches
                        if (!r.field.Y() && null === t.field(r.field)) return !1;
        }
        return !0;
    }, t.prototype.re = function(t) {
        for (var e = 0, n = this.filters; e < n.length; e++) {
            if (!n[e].matches(t)) return !1;
        }
        return !0;
    }, 
    /**
     * Makes sure a document is within the bounds, if provided.
     */
    t.prototype.he = function(t) {
        return !(this.startAt && !this.startAt._e(this.orderBy, t) || this.endAt && this.endAt._e(this.orderBy, t));
    }, t.prototype.Qt = function(t) {}, t;
}(), St = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return __extends(n, e), n.create = function(t, e, r) {
        if (t.Y()) return "in" /* IN */ === e ? new Mt(t, r) : new Lt(t, e, r);
        if (nt(r)) {
            if ("==" /* EQUAL */ !== e) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (rt(r)) {
            if ("==" /* EQUAL */ !== e) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new Ut(t, r) : "in" /* IN */ === e ? new qt(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new Ot(t, r) : new n(t, e, r);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Only compare types with matching backend order (such as double and int).
                return null !== e && z(this.value) === z(e) && this.fe(J$1(e, this.value));
    }, n.prototype.fe = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return De();
        }
    }, n.prototype.ue = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ ].indexOf(this.op) >= 0;
    }, n.prototype.canonicalId = function() {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return this.field.j() + this.op.toString() + Y$1(this.value);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.op === t.op && this.field.isEqual(t.field) && Q$1(this.value, t.value);
    }, n.prototype.toString = function() {
        return this.field.j() + " " + this.op + " " + Y$1(this.value);
    }, n;
}((function() {})), Lt = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = U$1.Z(r.referenceValue), i;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = U$1.N(t.key, this.key);
        return this.fe(e);
    }, n;
}(St), Mt = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = (n.arrayValue.values || []).map((function(t) {
            return U$1.Z(t.referenceValue);
        })), r;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(St), Ut = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return et(e) && W$1(e.arrayValue, this.value);
    }, n;
}(St), qt = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && W$1(this.value.arrayValue, e);
    }, n;
}(St), Ot = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return __extends(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!et(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return W$1(e.value.arrayValue, t);
        }));
    }, n;
}(St), Pt = /** @class */ function() {
    function t(t, e) {
        this.position = t, this.before = e;
    }
    return t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return (this.before ? "b" : "a") + ":" + this.position.map((function(t) {
            return Y$1(t);
        })).join(",");
    }, 
    /**
     * Returns true if a document sorts before a bound using the provided sort
     * order.
     */
    t.prototype._e = function(t, e) {
        for (var n = 0, r = 0; r < this.position.length; r++) {
            var i = t[r], o = this.position[r];
            if (n = i.field.Y() ? U$1.N(U$1.Z(o.referenceValue), e.key) : J$1(o, e.field(i.field)), 
            "desc" /* DESCENDING */ === i.dir && (n *= -1), 0 !== n) break;
        }
        return this.before ? n <= 0 : n < 0;
    }, t.prototype.isEqual = function(t) {
        if (null === t) return !1;
        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
        for (var e = 0; e < this.position.length; e++) if (!Q$1(this.position[e], t.position[e])) return !1;
        return !0;
    }, t;
}(), Ct = /** @class */ function() {
    function t(t, e) {
        this.field = t, void 0 === e && (e = "asc" /* ASCENDING */), this.dir = e, this.de = t.Y();
    }
    return t.prototype.compare = function(t, e) {
        var n = this.de ? U$1.N(t.key, e.key) : function(t, e, n) {
            var r = e.field(t), i = n.field(t);
            return null !== r && null !== i ? J$1(r, i) : De();
        }(this.field, t, e);
        switch (this.dir) {
          case "asc" /* ASCENDING */ :
            return n;

          case "desc" /* DESCENDING */ :
            return -1 * n;

          default:
            return De();
        }
    }, t.prototype.canonicalId = function() {
        // TODO(b/29183165): Make this collision robust.
        return this.field.j() + this.dir.toString();
    }, t.prototype.toString = function() {
        return this.field.j() + " (" + this.dir + ")";
    }, t.prototype.isEqual = function(t) {
        return this.dir === t.dir && this.field.isEqual(t.field);
    }, t;
}(), Ft = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = k$1.min()), void 0 === o && (o = k$1.min()), void 0 === s && (s = C$1.ht), 
        this.target = t, this.targetId = e, this.we = n, this.sequenceNumber = r, this.Te = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.Ee = function(e) {
        return new t(this.target, this.targetId, this.we, e, this.Te, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.me = function(e, n) {
        return new t(this.target, this.targetId, this.we, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.Ie = function(e) {
        return new t(this.target, this.targetId, this.we, this.sequenceNumber, this.Te, e, this.resumeToken);
    }, t;
}(), xt = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function jt(t) {
    switch (t) {
      case E$1.OK:
        return De();

      case E$1.CANCELLED:
      case E$1.UNKNOWN:
      case E$1.DEADLINE_EXCEEDED:
      case E$1.RESOURCE_EXHAUSTED:
      case E$1.INTERNAL:
      case E$1.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case E$1.UNAUTHENTICATED:
        return !1;

      case E$1.INVALID_ARGUMENT:
      case E$1.NOT_FOUND:
      case E$1.ALREADY_EXISTS:
      case E$1.PERMISSION_DENIED:
      case E$1.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case E$1.ABORTED:
      case E$1.OUT_OF_RANGE:
      case E$1.UNIMPLEMENTED:
      case E$1.DATA_LOSS:
        return !0;

      default:
        return De();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function Gt(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return _e("GRPC error has no .code"), E$1.UNKNOWN;
    switch (t) {
      case It.OK:
        return E$1.OK;

      case It.CANCELLED:
        return E$1.CANCELLED;

      case It.UNKNOWN:
        return E$1.UNKNOWN;

      case It.DEADLINE_EXCEEDED:
        return E$1.DEADLINE_EXCEEDED;

      case It.RESOURCE_EXHAUSTED:
        return E$1.RESOURCE_EXHAUSTED;

      case It.INTERNAL:
        return E$1.INTERNAL;

      case It.UNAVAILABLE:
        return E$1.UNAVAILABLE;

      case It.UNAUTHENTICATED:
        return E$1.UNAUTHENTICATED;

      case It.INVALID_ARGUMENT:
        return E$1.INVALID_ARGUMENT;

      case It.NOT_FOUND:
        return E$1.NOT_FOUND;

      case It.ALREADY_EXISTS:
        return E$1.ALREADY_EXISTS;

      case It.PERMISSION_DENIED:
        return E$1.PERMISSION_DENIED;

      case It.FAILED_PRECONDITION:
        return E$1.FAILED_PRECONDITION;

      case It.ABORTED:
        return E$1.ABORTED;

      case It.OUT_OF_RANGE:
        return E$1.OUT_OF_RANGE;

      case It.UNIMPLEMENTED:
        return E$1.UNIMPLEMENTED;

      case It.DATA_LOSS:
        return E$1.DATA_LOSS;

      default:
        return De();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Nt = It || (It = {}))[Nt.OK = 0] = "OK", Nt[Nt.CANCELLED = 1] = "CANCELLED", 
Nt[Nt.UNKNOWN = 2] = "UNKNOWN", Nt[Nt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Nt[Nt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Nt[Nt.NOT_FOUND = 5] = "NOT_FOUND", 
Nt[Nt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Nt[Nt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Nt[Nt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Nt[Nt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Nt[Nt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Nt[Nt.ABORTED = 10] = "ABORTED", 
Nt[Nt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Nt[Nt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Nt[Nt.INTERNAL = 13] = "INTERNAL", Nt[Nt.UNAVAILABLE = 14] = "UNAVAILABLE", Nt[Nt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var Bt = /** @class */ function() {
    function t(t, e) {
        this.N = t, this.root = e || Qt.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.Re = function(e, n) {
        return new t(this.N, this.root.Re(e, n, this.N).Ae(null, null, Qt.Pe, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.N, this.root.remove(e, this.N).Ae(null, null, Qt.Pe, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.M(); ) {
            var n = this.N(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.M(); ) {
            var r = this.N(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.M = function() {
        return this.root.M();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.Ve = function() {
        return this.root.Ve();
    }, 
    // Returns the maximum key in the map.
    t.prototype.pe = function() {
        return this.root.pe();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ye = function(t) {
        return this.root.ye(t);
    }, t.prototype.forEach = function(t) {
        this.ye((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ye((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ge = function(t) {
        return this.root.ge(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.be = function() {
        return new zt(this.root, null, this.N, !1);
    }, t.prototype.ve = function(t) {
        return new zt(this.root, t, this.N, !1);
    }, t.prototype.Se = function() {
        return new zt(this.root, null, this.N, !0);
    }, t.prototype.Ce = function(t) {
        return new zt(this.root, t, this.N, !0);
    }, t;
}(), zt = /** @class */ function() {
    function t(t, e, n, r) {
        this.De = r, this.Fe = [];
        for (var i = 1; !t.M(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.De ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Fe.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Fe.push(t), t = this.De ? t.right : t.left;
        }
    }
    return t.prototype.Ne = function() {
        var t = this.Fe.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.De) for (t = t.left; !t.M(); ) this.Fe.push(t), t = t.right; else for (t = t.right; !t.M(); ) this.Fe.push(t), 
        t = t.left;
        return e;
    }, t.prototype.$e = function() {
        return this.Fe.length > 0;
    }, t.prototype.Le = function() {
        if (0 === this.Fe.length) return null;
        var t = this.Fe[this.Fe.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), Qt = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.Ae = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.M = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ye = function(t) {
        return this.left.ye(t) || t(this.key, this.value) || this.right.ye(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ge = function(t) {
        return this.right.ge(t) || t(this.key, this.value) || this.left.ge(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.M() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Ve = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.pe = function() {
        return this.right.M() ? this.key : this.right.pe();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.Re = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.Ae(null, null, null, r.left.Re(t, e, n), null) : 0 === i ? r.Ae(null, e, null, null, null) : r.Ae(null, null, null, null, r.right.Re(t, e, n))).ke();
    }, t.prototype.Oe = function() {
        if (this.left.M()) return t.EMPTY;
        var e = this;
        return e.left.qe() || e.left.left.qe() || (e = e.Me()), (e = e.Ae(null, null, null, e.left.Oe(), null)).ke();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.M() || i.left.qe() || i.left.left.qe() || (i = i.Me()), 
        i = i.Ae(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.qe() && (i = i.xe()), i.right.M() || i.right.qe() || i.right.left.qe() || (i = i.Be()), 
            0 === n(e, i.key)) {
                if (i.right.M()) return t.EMPTY;
                r = i.right.min(), i = i.Ae(r.key, r.value, null, null, i.right.Oe());
            }
            i = i.Ae(null, null, null, null, i.right.remove(e, n));
        }
        return i.ke();
    }, t.prototype.qe = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.ke = function() {
        var t = this;
        return t.right.qe() && !t.left.qe() && (t = t.Ue()), t.left.qe() && t.left.left.qe() && (t = t.xe()), 
        t.left.qe() && t.right.qe() && (t = t.Qe()), t;
    }, t.prototype.Me = function() {
        var t = this.Qe();
        return t.right.left.qe() && (t = (t = (t = t.Ae(null, null, null, null, t.right.xe())).Ue()).Qe()), 
        t;
    }, t.prototype.Be = function() {
        var t = this.Qe();
        return t.left.left.qe() && (t = (t = t.xe()).Qe()), t;
    }, t.prototype.Ue = function() {
        var e = this.Ae(null, null, t.RED, null, this.right.left);
        return this.right.Ae(null, null, this.color, e, null);
    }, t.prototype.xe = function() {
        var e = this.Ae(null, null, t.RED, this.left.right, null);
        return this.left.Ae(null, null, this.color, null, e);
    }, t.prototype.Qe = function() {
        var t = this.left.Ae(null, null, !this.left.color, null, null), e = this.right.Ae(null, null, !this.right.color, null, null);
        return this.Ae(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.We = function() {
        var t = this.je();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.je = function() {
        if (this.qe() && this.left.qe()) throw De();
        if (this.right.qe()) throw De();
        var t = this.left.je();
        if (t !== this.right.je()) throw De();
        return t + (this.qe() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Qt.EMPTY = null, Qt.RED = !0, Qt.Pe = !1, 
// end LLRBEmptyNode
Qt.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw De();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw De();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw De();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw De();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw De();
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.Ae = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.Re = function(t, e, n) {
        return new Qt(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.M = function() {
        return !0;
    }, t.prototype.ye = function(t) {
        return !1;
    }, t.prototype.ge = function(t) {
        return !1;
    }, t.prototype.Ve = function() {
        return null;
    }, t.prototype.pe = function() {
        return null;
    }, t.prototype.qe = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.We = function() {
        return !0;
    }, t.prototype.je = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var Wt = /** @class */ function() {
    function t(t) {
        this.N = t, this.data = new Bt(this.N);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.Ve();
    }, t.prototype.last = function() {
        return this.data.pe();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ye((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Ge = function(t, e) {
        for (var n = this.data.ve(t[0]); n.$e(); ) {
            var r = n.Ne();
            if (this.N(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.He = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ve(e) : this.data.be(); n.$e(); ) if (!t(n.Ne().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Ke = function(t) {
        var e = this.data.ve(t);
        return e.$e() ? e.Ne().key : null;
    }, t.prototype.be = function() {
        return new Jt(this.data.be());
    }, t.prototype.ve = function(t) {
        return new Jt(this.data.ve(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.Ae(this.data.remove(t).Re(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.Ae(this.data.remove(t)) : this;
    }, t.prototype.M = function() {
        return this.data.M();
    }, t.prototype.ze = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.be(), r = e.data.be(); n.$e(); ) {
            var i = n.Ne().key, o = r.Ne().key;
            if (0 !== this.N(i, o)) return !1;
        }
        return !0;
    }, t.prototype.W = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.Ae = function(e) {
        var n = new t(this.N);
        return n.data = e, n;
    }, t;
}(), Jt = /** @class */ function() {
    function t(t) {
        this.Ye = t;
    }
    return t.prototype.Ne = function() {
        return this.Ye.Ne().key;
    }, t.prototype.$e = function() {
        return this.Ye.$e();
    }, t;
}(), Ht = new Bt(U$1.N);

function Yt() {
    return Ht;
}

function Zt() {
    return Yt();
}

var Xt = new Bt(U$1.N);

function Kt() {
    return Xt;
}

var $t = new Bt(U$1.N);

function te() {
    return $t;
}

var ee = new Wt(U$1.N);

function ne() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = ee, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var re = new Wt(Le);

function ie() {
    return re;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var oe = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.N = t ? function(e, n) {
            return t(e, n) || U$1.N(e.key, n.key);
        } : function(t, e) {
            return U$1.N(t.key, e.key);
        }, this.Xe = Kt(), this.Je = new Bt(this.N)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.Ze = function(e) {
        return new t(e.N);
    }, t.prototype.has = function(t) {
        return null != this.Xe.get(t);
    }, t.prototype.get = function(t) {
        return this.Xe.get(t);
    }, t.prototype.first = function() {
        return this.Je.Ve();
    }, t.prototype.last = function() {
        return this.Je.pe();
    }, t.prototype.M = function() {
        return this.Je.M();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Xe.get(t);
        return e ? this.Je.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Je.size;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Je.ye((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.Ae(e.Xe.Re(t.key, t), e.Je.Re(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.Ae(this.Xe.remove(t), this.Je.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Je.be(), r = e.Je.be(); n.$e(); ) {
            var i = n.Ne().key, o = r.Ne().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.Ae = function(e, n) {
        var r = new t;
        return r.N = this.N, r.Xe = e, r.Je = n, r;
    }, t;
}(), se = /** @class */ function() {
    function t() {
        this.ts = new Bt(U$1.N);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.ts.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.ts = this.ts.Re(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.ts = this.ts.Re(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.ts = this.ts.Re(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.ts = this.ts.Re(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.ts = this.ts.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.ts = this.ts.Re(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.ts = this.ts.Re(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        De() : this.ts = this.ts.Re(e, t);
    }, t.prototype.es = function() {
        var t = [];
        return this.ts.ye((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), ue = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.ss = n, this.docChanges = r, this.ns = i, this.fromCache = o, 
        this.rs = s, this.hs = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.os = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, oe.Ze(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.ns.M();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.rs === t.rs && this.ns.isEqual(t.ns) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.ss.isEqual(t.ss))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), ae = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.Te = t, this.as = e, this.us = n, this.cs = r, this.ls = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t._s = function(e, n) {
        var r = new Map;
        return r.set(e, he.fs(e, n)), new t(k$1.min(), r, ie(), Yt(), ne());
    }, t;
}(), he = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.ds = e, this.ws = n, this.Ts = r, this.Es = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.fs = function(e, n) {
        return new t(C$1.ht, n, ne(), ne(), ne());
    }, t;
}(), ce = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.ms = t, this.removedTargetIds = e, this.key = n, this.Is = r;
}, fe = function(t, e) {
    this.targetId = t, this.Rs = e;
}, le = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = C$1.ht), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, pe = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.As = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.Ps = ve(), 
        /** See public getters for explanations of these fields. */
        this.Vs = C$1.ht, this.ps = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.ys = !0;
    }
    return Object.defineProperty(t.prototype, "ds", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.ps;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.Vs;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "gs", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.As;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "bs", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.ys;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.vs = function(t) {
        t.rt() > 0 && (this.ys = !0, this.Vs = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.Ss = function() {
        var t = ne(), e = ne(), n = ne();
        return this.Ps.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                De();
            }
        })), new he(this.Vs, this.ps, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.Cs = function() {
        this.ys = !1, this.Ps = ve();
    }, t.prototype.Ds = function(t, e) {
        this.ys = !0, this.Ps = this.Ps.Re(t, e);
    }, t.prototype.Fs = function(t) {
        this.ys = !0, this.Ps = this.Ps.remove(t);
    }, t.prototype.Ns = function() {
        this.As += 1;
    }, t.prototype.$s = function() {
        this.As -= 1;
    }, t.prototype.Ls = function() {
        this.ys = !0, this.ps = !0;
    }, t;
}(), de = /** @class */ function() {
    function t(t) {
        this.ks = t, 
        /** The internal state of all tracked targets. */
        this.Os = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.qs = Yt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.Ms = ye(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.xs = new Wt(Le)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.Bs = function(t) {
        for (var e = 0, n = t.ms; e < n.length; e++) {
            var r = n[e];
            t.Is instanceof _t ? this.Us(r, t.Is) : t.Is instanceof Rt && this.Qs(r, t.key, t.Is);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.Qs(s, t.key, t.Is);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Ws = function(t) {
        var e = this;
        this.js(t, (function(n) {
            var r = e.Gs(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Hs(n) && r.vs(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.$s(), r.gs || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.Cs(), r.vs(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.$s(), r.gs || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Hs(n) && (r.Ls(), r.vs(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Hs(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Ks(n), r.vs(t.resumeToken));
                break;

              default:
                De();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.js = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Os.forEach((function(t, r) {
            n.Hs(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.zs = function(t) {
        var e = t.targetId, n = t.Rs.count, r = this.Ys(e);
        if (r) {
            var i = r.target;
            if (i.qt()) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new U$1(i.path);
                this.Qs(e, o, new Rt(o, k$1.min()));
            } else ke(1 === n); else this.Xs(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Ks(e), this.xs = this.xs.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Js = function(t) {
        var e = this, n = new Map;
        this.Os.forEach((function(r, i) {
            var o = e.Ys(i);
            if (o) {
                if (r.ds && o.target.qt()) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new U$1(o.target.path);
                    null !== e.qs.get(s) || e.Zs(i, s) || e.Qs(i, s, new Rt(s, t));
                }
                r.bs && (n.set(i, r.Ss()), r.Cs());
            }
        }));
        var r = ne();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.Ms.forEach((function(t, n) {
            var i = !0;
            n.He((function(t) {
                var n = e.Ys(t);
                return !n || 2 /* LimboResolution */ === n.we || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new ae(t, n, this.xs, this.qs, r);
        return this.qs = Yt(), this.Ms = ye(), this.xs = new Wt(Le), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.Us = function(t, e) {
        if (this.Hs(t)) {
            var n = this.Zs(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Gs(t).Ds(e.key, n), this.qs = this.qs.Re(e.key, e), this.Ms = this.Ms.Re(e.key, this.ti(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.Qs = function(t, e, n) {
        if (this.Hs(t)) {
            var r = this.Gs(t);
            this.Zs(t, e) ? r.Ds(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Fs(e), this.Ms = this.Ms.Re(e, this.ti(e).delete(t)), n && (this.qs = this.qs.Re(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Os.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.Xs = function(t) {
        var e = this.Gs(t).Ss();
        return this.ks.ei(t).size + e.ws.size - e.Es.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Ns = function(t) {
        this.Gs(t).Ns();
    }, t.prototype.Gs = function(t) {
        var e = this.Os.get(t);
        return e || (e = new pe, this.Os.set(t, e)), e;
    }, t.prototype.ti = function(t) {
        var e = this.Ms.get(t);
        return e || (e = new Wt(Le), this.Ms = this.Ms.Re(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Hs = function(t) {
        var e = null !== this.Ys(t);
        return e || Te("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.Ys = function(t) {
        var e = this.Os.get(t);
        return e && e.gs ? null : this.ks.si(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Ks = function(t) {
        var e = this;
        this.Os.set(t, new pe), this.ks.ei(t).forEach((function(n) {
            e.Qs(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Zs = function(t, e) {
        return this.ks.ei(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function ye() {
    return new Bt(U$1.N);
}

function ve() {
    return new Bt(U$1.N);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var me = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, ge = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, we = /** @class */ function() {
    function t(t, e) {
        this.ii = t, this.options = e;
    }
    return t.prototype.ni = function(t) {
        var e = void 0 === t.code ? E$1.UNKNOWN : Gt(t.code);
        return new A$1(e, t.message || "");
    }, 
    /**
     * Returns a value for a number (or null) that's appropriate to put into
     * a google.protobuf.Int32Value proto.
     * DO NOT USE THIS FOR ANYTHING ELSE.
     * This method cheats. It's typed as returning "number" because that's what
     * our generated proto interfaces say Int32Value must be. But GRPC actually
     * expects a { value: <number> } struct.
     */
    t.prototype.ri = function(t) {
        return this.options.hi || F$1(t) ? t : {
            value: t
        };
    }, 
    /**
     * Returns a number (or null) from a google.protobuf.Int32Value proto.
     */
    t.prototype.oi = function(t) {
        var e;
        return F$1(e = "object" == typeof t ? t.value : t) ? null : e;
    }, 
    /**
     * Returns an IntegerValue for `value`.
     */
    t.prototype.lt = function(t) {
        return {
            integerValue: "" + t
        };
    }, 
    /**
     * Returns an DoubleValue for `value` that is encoded based the serializer's
     * `useProto3Json` setting.
     */
    t.prototype._t = function(t) {
        if (this.options.hi) {
            if (isNaN(t)) return {
                doubleValue: "NaN"
            };
            if (t === 1 / 0) return {
                doubleValue: "Infinity"
            };
            if (t === -1 / 0) return {
                doubleValue: "-Infinity"
            };
        }
        return {
            doubleValue: x$1(t) ? "-0" : t
        };
    }, 
    /**
     * Returns a value for a number that's appropriate to put into a proto.
     * The return value is an IntegerValue if it can safely represent the value,
     * otherwise a DoubleValue is returned.
     */
    t.prototype.ai = function(t) {
        return function(t) {
            return "number" == typeof t && Number.isInteger(t) && !x$1(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
        }(t) ? this.lt(t) : this._t(t);
    }, 
    /**
     * Returns a value for a Date that's appropriate to put into a proto.
     */
    t.prototype.D = function(t) {
        return this.options.hi ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
            seconds: "" + t.seconds,
            nanos: t.nanoseconds
        };
    }, t.prototype.v = function(t) {
        var e = Z$1(t);
        return new D(e.seconds, e.nanos);
    }, 
    /**
     * Returns a value for bytes that's appropriate to put in a proto.
     *
     * Visible for testing.
     */
    t.prototype.ui = function(t) {
        return this.options.hi ? t.toBase64() : t.toUint8Array();
    }, 
    /**
     * Returns a ByteString based on the proto string value.
     */
    t.prototype.ci = function(t) {
        return this.options.hi ? (ke(void 0 === t || "string" == typeof t), C$1.fromBase64String(t || "")) : (ke(void 0 === t || t instanceof Uint8Array), 
        C$1.fromUint8Array(t || new Uint8Array));
    }, t.prototype.toVersion = function(t) {
        return this.D(t.D());
    }, t.prototype.fromVersion = function(t) {
        return ke(!!t), k$1.v(this.v(t));
    }, t.prototype.li = function(t, e) {
        return this._i(e || this.ii).child("documents").child(t).j();
    }, t.prototype.fi = function(t) {
        var e = S$1.G(t);
        return ke(be(e)), e;
    }, t.prototype.di = function(t) {
        return this.li(t.path);
    }, t.prototype.Z = function(t) {
        var e = this.fi(t);
        return ke(e.get(1) === this.ii.projectId), ke(!e.get(3) && !this.ii.database || e.get(3) === this.ii.database), 
        new U$1(this.wi(e));
    }, t.prototype.Ti = function(t) {
        return this.li(t);
    }, t.prototype.Ei = function(t) {
        var e = this.fi(t);
        // In v1beta1 queries for collections at the root did not have a trailing
        // "/documents". In v1 all resource paths contain "/documents". Preserve the
        // ability to read the v1beta1 form for compatibility with queries persisted
        // in the local target cache.
                return 4 === e.length ? S$1.H : this.wi(e);
    }, Object.defineProperty(t.prototype, "mi", {
        get: function() {
            return new S$1([ "projects", this.ii.projectId, "databases", this.ii.database ]).j();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype._i = function(t) {
        return new S$1([ "projects", t.projectId, "databases", t.database ]);
    }, t.prototype.wi = function(t) {
        return ke(t.length > 4 && "documents" === t.get(4)), t.L(5);
    }, 
    /** Creates an api.Document from key and fields (but no create/update time) */ t.prototype.Ii = function(t, e) {
        return {
            name: this.di(t),
            fields: e.proto.mapValue.fields
        };
    }, t.prototype.Ri = function(t) {
        return {
            name: this.di(t.key),
            fields: t.kt().mapValue.fields,
            updateTime: this.D(t.version.D())
        };
    }, t.prototype.Ai = function(t, e) {
        var n = this.Z(t.name), r = this.fromVersion(t.updateTime), i = new bt({
            mapValue: {
                fields: t.fields
            }
        });
        return new _t(n, r, i, {
            hasCommittedMutations: !!e
        });
    }, t.prototype.Pi = function(t) {
        ke(!!t.found), t.found.name, t.found.updateTime;
        var e = this.Z(t.found.name), n = this.fromVersion(t.found.updateTime), r = new bt({
            mapValue: {
                fields: t.found.fields
            }
        });
        return new _t(e, n, r, {});
    }, t.prototype.Vi = function(t) {
        ke(!!t.missing), ke(!!t.readTime);
        var e = this.Z(t.missing), n = this.fromVersion(t.readTime);
        return new Rt(e, n);
    }, t.prototype.pi = function(t) {
        return "found" in t ? this.Pi(t) : "missing" in t ? this.Vi(t) : De();
    }, t.prototype.yi = function(t) {
        var e;
        if ("targetChange" in t) {
            t.targetChange;
            // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
            // if unset
            var n = this.gi(t.targetChange.targetChangeType || "NO_CHANGE"), r = t.targetChange.targetIds || [], i = this.ci(t.targetChange.resumeToken), o = t.targetChange.cause, s = o && this.ni(o);
            e = new le(n, r, i, s || null);
        } else if ("documentChange" in t) {
            t.documentChange;
            var u = t.documentChange;
            u.document, u.document.name, u.document.updateTime;
            var a = this.Z(u.document.name), h = this.fromVersion(u.document.updateTime), c = new bt({
                mapValue: {
                    fields: u.document.fields
                }
            }), f = new _t(a, h, c, {}), l = u.targetIds || [], p = u.removedTargetIds || [];
            e = new ce(l, p, f.key, f);
        } else if ("documentDelete" in t) {
            t.documentDelete;
            var d = t.documentDelete;
            d.document;
            var y = this.Z(d.document), v = d.readTime ? this.fromVersion(d.readTime) : k$1.min(), m = new Rt(y, v), g = d.removedTargetIds || [];
            e = new ce([], g, m.key, m);
        } else if ("documentRemove" in t) {
            t.documentRemove;
            var w = t.documentRemove;
            w.document;
            var b = this.Z(w.document), E = w.removedTargetIds || [];
            e = new ce([], E, b, null);
        } else {
            if (!("filter" in t)) return De();
            t.filter;
            var A = t.filter;
            A.targetId;
            var I = A.count || 0, N = new xt(I), T = A.targetId;
            e = new fe(T, N);
        }
        return e;
    }, t.prototype.gi = function(t) {
        return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : De();
    }, t.prototype.bi = function(t) {
        // We have only reached a consistent snapshot for the entire stream if there
        // is a read_time set and it applies to all targets (i.e. the list of
        // targets is empty). The backend is guaranteed to send such responses.
        if (!("targetChange" in t)) return k$1.min();
        var e = t.targetChange;
        return e.targetIds && e.targetIds.length ? k$1.min() : e.readTime ? this.fromVersion(e.readTime) : k$1.min();
    }, t.prototype.vi = function(t) {
        var e, n = this;
        if (t instanceof yt) e = {
            update: this.Ii(t.key, t.value)
        }; else if (t instanceof gt) e = {
            delete: this.di(t.key)
        }; else if (t instanceof vt) e = {
            update: this.Ii(t.key, t.data),
            updateMask: this.Si(t.Vt)
        }; else if (t instanceof mt) e = {
            transform: {
                document: this.di(t.key),
                fieldTransforms: t.fieldTransforms.map((function(t) {
                    return n.Ci(t);
                }))
            }
        }; else {
            if (!(t instanceof wt)) return De();
            e = {
                verify: this.di(t.key)
            };
        }
        return t.Rt.wt || (e.currentDocument = this.Di(t.Rt)), e;
    }, t.prototype.Fi = function(t) {
        var e = this, n = t.currentDocument ? this.Ni(t.currentDocument) : pt.dt();
        if (t.update) {
            t.update.name;
            var r = this.Z(t.update.name), i = new bt({
                mapValue: {
                    fields: t.update.fields
                }
            });
            if (t.updateMask) {
                var o = this.$i(t.updateMask);
                return new vt(r, i, o, n);
            }
            return new yt(r, i, n);
        }
        if (t.delete) {
            var s = this.Z(t.delete);
            return new gt(s, n);
        }
        if (t.transform) {
            var u = this.Z(t.transform.document), a = t.transform.fieldTransforms.map((function(t) {
                return e.Li(t);
            }));
            return ke(!0 === n.exists), new mt(u, a);
        }
        if (t.verify) {
            var h = this.Z(t.verify);
            return new wt(h, n);
        }
        return De();
    }, t.prototype.Di = function(t) {
        return void 0 !== t.updateTime ? {
            updateTime: this.toVersion(t.updateTime)
        } : void 0 !== t.exists ? {
            exists: t.exists
        } : De();
    }, t.prototype.Ni = function(t) {
        return void 0 !== t.updateTime ? pt.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? pt.exists(t.exists) : pt.dt();
    }, t.prototype.ki = function(t, e) {
        // NOTE: Deletes don't have an updateTime.
        var n = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
        n.isEqual(k$1.min()) && (
        // The Firestore Emulator currently returns an update time of 0 for
        // deletes of non-existing documents (rather than null). This breaks the
        // test "get deleted doc while offline with source=cache" as NoDocuments
        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
        // TODO(#2149): Remove this when Emulator is fixed
        n = this.fromVersion(e));
        var r = null;
        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
        new lt(n, r);
    }, t.prototype.Oi = function(t, e) {
        var n = this;
        return t && t.length > 0 ? (ke(void 0 !== e), t.map((function(t) {
            return n.ki(t, e);
        }))) : [];
    }, t.prototype.Ci = function(t) {
        var e = t.transform;
        if (e instanceof ot) return {
            fieldPath: t.field.j(),
            setToServerValue: "REQUEST_TIME"
        };
        if (e instanceof st) return {
            fieldPath: t.field.j(),
            appendMissingElements: {
                values: e.elements
            }
        };
        if (e instanceof ut) return {
            fieldPath: t.field.j(),
            removeAllFromArray: {
                values: e.elements
            }
        };
        if (e instanceof at) return {
            fieldPath: t.field.j(),
            increment: e.ct
        };
        throw De();
    }, t.prototype.Li = function(t) {
        var e = null;
        if ("setToServerValue" in t) ke("REQUEST_TIME" === t.setToServerValue), e = ot.instance; else if ("appendMissingElements" in t) {
            var n = t.appendMissingElements.values || [];
            e = new st(n);
        } else if ("removeAllFromArray" in t) {
            var r = t.removeAllFromArray.values || [];
            e = new ut(r);
        } else "increment" in t ? e = new at(this, t.increment) : De();
        var i = M$1.J(t.fieldPath);
        return new ft(i, e);
    }, t.prototype.qi = function(t) {
        return {
            documents: [ this.Ti(t.path) ]
        };
    }, t.prototype.Mi = function(t) {
        ke(1 === t.documents.length);
        var e = t.documents[0];
        return Vt.Wt(this.Ei(e)).ee();
    }, t.prototype.xi = function(t) {
        // Dissect the path into parent, collectionId, and optional key filter.
        var e = {
            structuredQuery: {}
        }, n = t.path;
        null !== t.collectionGroup ? (e.parent = this.Ti(n), e.structuredQuery.from = [ {
            collectionId: t.collectionGroup,
            allDescendants: !0
        } ]) : (e.parent = this.Ti(n.k()), e.structuredQuery.from = [ {
            collectionId: n.q()
        } ]);
        var r = this.Bi(t.filters);
        r && (e.structuredQuery.where = r);
        var i = this.Ui(t.orderBy);
        i && (e.structuredQuery.orderBy = i);
        var o = this.ri(t.limit);
        return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.Qi(t.startAt)), 
        t.endAt && (e.structuredQuery.endAt = this.Qi(t.endAt)), e;
    }, t.prototype.Wi = function(t) {
        var e = this.Ei(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            ke(1 === r);
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = this.ji(n.where));
        var u = [];
        n.orderBy && (u = this.Gi(n.orderBy));
        var a = null;
        n.limit && (a = this.oi(n.limit));
        var h = null;
        n.startAt && (h = this.Hi(n.startAt));
        var c = null;
        return n.endAt && (c = this.Hi(n.endAt)), new Vt(e, i, u, s, a, "F" /* First */ , h, c).ee();
    }, t.prototype.Ki = function(t) {
        var e = this.zi(t.we);
        return null == e ? null : {
            "goog-listen-tags": e
        };
    }, t.prototype.zi = function(t) {
        switch (t) {
          case 0 /* Listen */ :
            return null;

          case 1 /* ExistenceFilterMismatch */ :
            return "existence-filter-mismatch";

          case 2 /* LimboResolution */ :
            return "limbo-document";

          default:
            return De();
        }
    }, t.prototype.ee = function(t) {
        var e, n = t.target;
        return (e = n.qt() ? {
            documents: this.qi(n)
        } : {
            query: this.xi(n)
        }).targetId = t.targetId, t.resumeToken.rt() > 0 && (e.resumeToken = this.ui(t.resumeToken)), 
        e;
    }, t.prototype.Bi = function(t) {
        var e = this;
        if (0 !== t.length) {
            var n = t.map((function(t) {
                return t instanceof St ? e.Yi(t) : De();
            }));
            return 1 === n.length ? n[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: n
                }
            };
        }
    }, t.prototype.ji = function(t) {
        var e = this;
        return t ? void 0 !== t.unaryFilter ? [ this.Xi(t) ] : void 0 !== t.fieldFilter ? [ this.Ji(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
            return e.ji(t);
        })).reduce((function(t, e) {
            return t.concat(e);
        })) : De() : [];
    }, t.prototype.Ui = function(t) {
        var e = this;
        if (0 !== t.length) return t.map((function(t) {
            return e.Zi(t);
        }));
    }, t.prototype.Gi = function(t) {
        var e = this;
        return t.map((function(t) {
            return e.tn(t);
        }));
    }, t.prototype.Qi = function(t) {
        return {
            before: t.before,
            values: t.position
        };
    }, t.prototype.Hi = function(t) {
        var e = !!t.before, n = t.values || [];
        return new Pt(n, e);
    }, 
    // visible for testing
    t.prototype.en = function(t) {
        return me[t];
    }, 
    // visible for testing
    t.prototype.sn = function(t) {
        switch (t) {
          case "ASCENDING":
            return "asc" /* ASCENDING */;

          case "DESCENDING":
            return "desc" /* DESCENDING */;

          default:
            return;
        }
    }, 
    // visible for testing
    t.prototype.nn = function(t) {
        return ge[t];
    }, t.prototype.rn = function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return De();
        }
    }, t.prototype.hn = function(t) {
        return {
            fieldPath: t.j()
        };
    }, t.prototype.on = function(t) {
        return M$1.J(t.fieldPath);
    }, 
    // visible for testing
    t.prototype.Zi = function(t) {
        return {
            field: this.hn(t.field),
            direction: this.en(t.dir)
        };
    }, t.prototype.tn = function(t) {
        return new Ct(this.on(t.field), this.sn(t.direction));
    }, t.prototype.Ji = function(t) {
        return St.create(this.on(t.fieldFilter.field), this.rn(t.fieldFilter.op), t.fieldFilter.value);
    }, 
    // visible for testing
    t.prototype.Yi = function(t) {
        if ("==" /* EQUAL */ === t.op) {
            if (rt(t.value)) return {
                unaryFilter: {
                    field: this.hn(t.field),
                    op: "IS_NAN"
                }
            };
            if (nt(t.value)) return {
                unaryFilter: {
                    field: this.hn(t.field),
                    op: "IS_NULL"
                }
            };
        }
        return {
            fieldFilter: {
                field: this.hn(t.field),
                op: this.nn(t.op),
                value: t.value
            }
        };
    }, t.prototype.Xi = function(t) {
        switch (t.unaryFilter.op) {
          case "IS_NAN":
            var e = this.on(t.unaryFilter.field);
            return St.create(e, "==" /* EQUAL */ , {
                doubleValue: NaN
            });

          case "IS_NULL":
            var n = this.on(t.unaryFilter.field);
            return St.create(n, "==" /* EQUAL */ , {
                nullValue: "NULL_VALUE"
            });

          case "OPERATOR_UNSPECIFIED":
          default:
            return De();
        }
    }, t.prototype.Si = function(t) {
        var e = [];
        return t.fields.forEach((function(t) {
            return e.push(t.j());
        })), {
            fieldPaths: e
        };
    }, t.prototype.$i = function(t) {
        var e = t.fieldPaths || [];
        return new ct(e.map((function(t) {
            return M$1.J(t);
        })));
    }, t;
}();

/**
 * Generates JsonObject values for the Datastore API suitable for sending to
 * either GRPC stub methods or via the JSON/HTTP REST API.
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */ function be(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides singleton helpers where setup code can inject a platform at runtime.
 * setPlatform needs to be set before Firestore is used and must be set exactly
 * once.
 */ var Ee = /** @class */ function() {
    function t() {}
    return t.an = function(e) {
        t.platform && De(), t.platform = e;
    }, t.nt = function() {
        return t.platform || De(), t.platform;
    }, t;
}(), Ae = new Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function Ie() {
    return Ae.logLevel;
}

function Ne(t) {
    Ae.logLevel = t;
}

function Te(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Ae.logLevel <= LogLevel.DEBUG) {
        var i = e.map(Re);
        Ae.debug.apply(Ae, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
    }
}

function _e(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    if (Ae.logLevel <= LogLevel.ERROR) {
        var i = e.map(Re);
        Ae.error.apply(Ae, __spreadArrays([ "Firestore (" + w$1 + "): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function Re(t) {
    if ("string" == typeof t) return t;
    var e = Ee.nt();
    try {
        return e.un(t);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function De(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (" + w$1 + ") INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw _e(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function ke(t, e) {
    t || De();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function Ve(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Se = /** @class */ function() {
    function t() {}
    return t.cn = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = Ee.nt().ln(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function Le(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Me(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ue = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.ii = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, qe = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "_n", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.S = function(t) {
        return Le(this.projectId, t.projectId) || Le(this.database, t.database);
    }, t;
}(), Oe = /** @class */ function() {
    function t(t) {
        this.fn = t, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.dn = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.fn(t), n = this.dn[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (s.isEqual(t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.fn(t), r = this.dn[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (r[i][0].isEqual(t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.dn[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.fn(t), n = this.dn[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.dn[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        O$1(this.dn, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.M = function() {
        return P$1(this.dn);
    }, t;
}(), Pe = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.wn = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.at = function(t, e, n) {
        for (var r = n.Tn, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            if (o.key.isEqual(t)) {
                var s = r[i];
                e = o.at(e, s);
            }
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.ot = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = i.ot(e, e, this.wn));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = a.ot(e, o, this.wn));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.En = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.ot(r.key, t.get(r.key));
            i && (n = n.Re(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), ne());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Me(this.mutations, t.mutations, (function(t, e) {
            return t.isEqual(e);
        })) && Me(this.baseMutations, t.baseMutations, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), Ce = /** @class */ function() {
    function t(t, e, n, r, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    i) {
        this.batch = t, this.mn = e, this.Tn = n, this.streamToken = r, this.In = i
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r, i) {
        ke(e.mutations.length === r.length);
        for (var o = te(), s = e.mutations, u = 0; u < s.length; u++) o = o.Re(s[u].key, r[u].version);
        return new t(e, n, r, i, o);
    }, t;
}(), Fe = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Rn = null, this.An = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.Pn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Vn = !1, t((function(t) {
            e.Pn = !0, e.result = t, e.Rn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Rn(t);
        }), (function(t) {
            e.Pn = !0, e.error = t, e.An && e.An(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Vn && De(), this.Vn = !0, this.Pn ? this.error ? this.pn(n, this.error) : this.yn(e, this.result) : new t((function(t, i) {
            r.Rn = function(n) {
                r.yn(e, n).next(t, i);
            }, r.An = function(e) {
                r.pn(n, e).next(t, i);
            };
        }));
    }, t.prototype.gn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.bn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.yn = function(e, n) {
        return e ? this.bn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.pn = function(e, n) {
        return e ? this.bn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.vn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Sn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.vn(r);
    }, t;
}(), xe = /** @class */ function() {
    function t(t, e, n) {
        this.Cn = t, this.Dn = e, this.Fn = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Nn = function(t, e) {
        var n = this;
        return this.Dn.$n(t, e).next((function(r) {
            return n.Ln(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Ln = function(t, e, n) {
        return this.Cn.kn(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].ot(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.On = function(t, e, n) {
        var r = Zt();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].ot(t, e);
            }
            r = r.Re(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.qn = function(t, e) {
        var n = this;
        return this.Cn.getEntries(t, e).next((function(e) {
            return n.Mn(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Mn = function(t, e) {
        var n = this;
        return this.Dn.xn(t, e).next((function(r) {
            var i = n.On(t, e, r), o = Yt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Rt(t, k$1.min())), o = o.Re(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Bn = function(t, e, n) {
        return e.qt() ? this.Un(t, e.path) : e.le() ? this.Qn(t, e, n) : this.Wn(t, e, n);
    }, t.prototype.Un = function(t, e) {
        // Just do a simple document lookup.
        return this.Nn(t, new U$1(e)).next((function(t) {
            var e = Kt();
            return t instanceof _t && (e = e.Re(t.key, t)), e;
        }));
    }, t.prototype.Qn = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = Kt();
        return this.Fn.jn(t, i).next((function(s) {
            return Fe.forEach(s, (function(s) {
                var u = e.Zt(s.child(i));
                return r.Wn(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.Re(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.Wn = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.Cn.Bn(t, e, n).next((function(n) {
            return r = n, o.Dn.Gn(t, e);
        })).next((function(e) {
            return i = e, o.Hn(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], h = a.key, c = r.get(h), f = a.ot(c, c, o.wn);
                    r = f instanceof _t ? r.Re(h, f) : r.remove(h);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                e.matches(n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Hn = function(t, e, n) {
        for (var r = ne(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof vt && null === n.get(a.key) && (r = r.add(a.key));
        }
        var h = n;
        return this.Cn.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof _t && (h = h.Re(t, e));
            })), h;
        }));
    }, t;
}(), je = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.Kn = n, this.zn = r;
    }
    return t.Yn = function(e, n) {
        for (var r = ne(), i = ne(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), Ge = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.Xn = function(t) {
            return n.Jn(t);
        }, this.Zn = function(t) {
            return e.tr(t);
        });
    }
    return t.prototype.Jn = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.Zn && this.Zn(t), t;
    }, t;
}();

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */ Ge.er = -1;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Be = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, ze = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.sr = t, this.ir = e, this.nr = n, this.rr = r, this.hr = i, this.or = 0, this.ar = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.ur = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.or = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.cr = function() {
        this.or = this.hr;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.lr = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.or + this._r()), r = Math.max(0, Date.now() - this.ur), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && Te("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.or + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.ar = this.sr.dr(this.ir, i, (function() {
            return e.ur = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.or *= this.rr, this.or < this.nr && (this.or = this.nr), this.or > this.hr && (this.or = this.hr);
    }, t.prototype.cancel = function() {
        null !== this.ar && (this.ar.cancel(), this.ar = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype._r = function() {
        return (Math.random() - .5) * this.or;
    }, t;
}(), Qe = /** @class */ function() {
    function t() {
        this.wr = new We;
    }
    return t.prototype.Tr = function(t, e) {
        return this.wr.add(e), Fe.resolve();
    }, t.prototype.jn = function(t, e) {
        return Fe.resolve(this.wr.getEntries(e));
    }, t;
}(), We = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.q(), n = t.k(), r = this.index[e] || new Wt(S$1.N), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.q(), n = t.k(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new Wt(S$1.N)).W();
    }, t;
}(), Je = /** @class */ function() {
    function t(t) {
        this.Er = t;
    }
    return t.prototype.next = function() {
        return this.Er += 2, this.Er;
    }, t.mr = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Ir = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function He(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 */ var Ye = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.Rr = t, this.ir = e, this.Ar = n, this.op = r, this.Pr = i, this.Vr = new Be, 
        this.then = this.Vr.promise.then.bind(this.Vr.promise), this.catch = this.Vr.promise.catch.bind(this.Vr.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Vr.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.pr = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.yr = setTimeout((function() {
            return e.gr();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.br = function() {
        return this.gr();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.yr && (this.clearTimeout(), this.Vr.reject(new A$1(E$1.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.gr = function() {
        var t = this;
        this.Rr.vr((function() {
            return null !== t.yr ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Vr.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.yr && (this.Pr(this), clearTimeout(this.yr), this.yr = null);
    }, t;
}(), Ze = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.Sr = Promise.resolve(), 
        // The last retryable operation. Retryable operation are run in order and
        // retried with backoff.
        this.Cr = Promise.resolve(), 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Dr = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Fr = [], 
        // visible for testing
        this.Nr = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.$r = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Lr = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.kr = new ze(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.Or = function() {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            t.qr("async_queue_retry" /* AsyncQueueRetry */);
        };
        var e = Ee.nt().window;
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Or);
    }
    return Object.defineProperty(t.prototype, "Mr", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Dr;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.vr = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    t.prototype.xr = function(t) {
        this.Br(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Ur(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue.
     */
    t.prototype.Qr = function(t) {
        return this.Br(), this.Ur(t);
    }, 
    /**
     * Adds a new operation to the queue and initialize the shut down of this queue.
     * Returns a promise that will be resolved when the promise returned by the new
     * operation is (with its value).
     * Once this method is called, the only possible way to request running an operation
     * is through `enqueueAndForgetEvenAfterShutdown`.
     */
    t.prototype.Wr = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Br(), this.Dr ? [ 3 /*break*/ , 2 ] : (this.Dr = !0, (e = Ee.nt().window) && e.removeEventListener("visibilitychange", this.Or), 
                    [ 4 /*yield*/ , this.Qr(t) ]);

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    t.prototype.enqueue = function(t) {
        return this.Br(), this.Dr ? new Promise((function(t) {})) : this.Ur(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    t.prototype.jr = function(t) {
        var r = this;
        this.Br(), this.Dr || (this.Cr = this.Cr.then((function() {
            var i = new Be, o = function() {
                return __awaiter(r, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , t() ];

                          case 1:
                            return n.sent(), i.resolve(), this.kr.reset(), [ 3 /*break*/ , 3 ];

                          case 2:
                            if (!He(e = n.sent())) throw i.resolve(), e;
                            // Failure will be handled by AsyncQueue
                                                        return Te("AsyncQueue", "Operation failed with retryable error: " + e), 
                            this.kr.lr(o), [ 3 /*break*/ , 3 ];

                          case 3:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            };
            return r.vr(o), i.promise;
        })));
    }, t.prototype.Ur = function(t) {
        var e = this, n = this.Sr.then((function() {
            return e.$r = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Nr = t, e.$r = !1, _e("INTERNAL UNHANDLED ERROR: ", t.stack || t.message || ""), 
                t;
            })).then((function(t) {
                return e.$r = !1, t;
            }));
        }));
        return this.Sr = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned CancelablePromise can be used to cancel
     * the operation prior to its running.
     */
    t.prototype.dr = function(t, e, n) {
        var r = this;
        this.Br(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Lr.indexOf(t) > -1 && (e = 0);
        var i = Ye.pr(this, t, e, n, (function(t) {
            return r.Gr(t);
        }));
        return this.Fr.push(i), i;
    }, t.prototype.Br = function() {
        this.Nr && De();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    t.prototype.Hr = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Kr = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Sr ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Sr) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.zr = function(t) {
        for (var e = 0, n = this.Fr; e < n.length; e++) {
            if (n[e].ir === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Throws if no such operation exists. Pass TimerId.All to run
     *  all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.qr = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Kr().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Fr.sort((function(t, e) {
                return t.Ar - e.Ar;
            }));
            for (var n = 0, r = e.Fr; n < r.length; n++) {
                var i = r[n];
                if (i.br(), "all" /* All */ !== t && i.ir === t) break;
            }
            return e.Kr();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Yr = function(t) {
        this.Lr.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.Gr = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Fr.indexOf(t);
        this.Fr.splice(e, 1);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function Xe(t, e) {
    if (_e("AsyncQueue", e + ": " + t), He(t)) return new A$1(E$1.UNAVAILABLE, e + ": " + t);
    throw t;
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ke = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.Xr = t, this.Jr = e, this.Zr = n;
    }
    return t.th = function(e) {
        return new t(e, t.eh, t.sh);
    }, t;
}();

Ke.ih = -1, Ke.nh = 1048576, Ke.rh = 41943040, Ke.eh = 10, Ke.sh = 1e3, Ke.hh = new Ke(Ke.rh, Ke.eh, Ke.sh), 
Ke.DISABLED = new Ke(Ke.ih, 0, 0);

/**
 * Local storage in the Firestore client. Coordinates persistence components
 * like the mutation queue and remote document cache to present a
 * latency-compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine.
 * Writes from the client are put into a queue as provisional Mutations until
 * they are processed by the RemoteStore and confirmed as having been written
 * to the server.
 *
 * The local store provides the local version of documents that have been
 * modified locally. It maintains the constraint:
 *
 *   LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously
 * acknowledged or rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the
 * applyChangeBatch method. It will be some version of a server-provided
 * document OR will be a server-provided document PLUS acknowledged mutations:
 *
 *   RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a
 * server base version, since it has LocalMutations added to it pending getting
 * an authoritative copy from the server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to
 * revert a LocalMutation that has already been applied to the LocalDocument
 * (typically done by replaying all remaining LocalMutations to the
 * RemoteDocument to re-apply).
 *
 * The LocalStore is responsible for the garbage collection of the documents it
 * contains. For now, it every doc referenced by a view, the mutation queue, or
 * the RemoteStore.
 *
 * It also maintains the persistence of mapping queries to resume tokens and
 * target ids. It needs to know this data about queries to properly know what
 * docs it would be allowed to garbage collect.
 *
 * The LocalStore must be able to efficiently execute queries against its local
 * cache of the documents, to provide the initial set of results before any
 * remote changes have been received.
 *
 * Note: In TypeScript, most methods return Promises since the implementation
 * may rely on fetching data from IndexedDB which is async.
 * These Promises will only be rejected on an I/O error or other internal
 * (unexpected) failure (e.g. failed assert) and always represent an
 * unrecoverable error (should be caught / reported by the async_queue).
 */
var $e = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.oh = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.ah = new Bt(Le), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.uh = new Oe((function(t) {
            return t.canonicalId();
        })), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.lh = k$1.min(), this.Dn = t._h(n), this.fh = t.dh(), this.wh = t.Th(), this.Eh = new xe(this.fh, this.Dn, this.persistence.mh()), 
        this.oh.Ih(this.Eh)
        /** Starts the LocalStore. */;
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, 
    /**
     * Tells the LocalStore that the currently authenticated user has changed.
     *
     * In response the local store switches the mutation queue to the new user and
     * returns any resulting document changes.
     */
    // PORTING NOTE: Android and iOS only return the documents affected by the
    // change.
    t.prototype.Rh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = this.Dn, r = this.Eh, [ 4 /*yield*/ , this.persistence.runTransaction("Handle user change", "readonly", (function(n) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var i;
                        return o.Dn.Ah(n).next((function(s) {
                            return i = s, e = o.persistence._h(t), 
                            // Recreate our LocalDocumentsView using the new
                            // MutationQueue.
                            r = new xe(o.fh, e, o.persistence.mh()), e.Ah(n);
                        })).next((function(t) {
                            for (var e = [], o = [], s = ne(), u = 0, a = i
                            // Union the old/new changed keys.
                            ; u < a.length; u++) {
                                var h = a[u];
                                e.push(h.batchId);
                                for (var c = 0, f = h.mutations; c < f.length; c++) {
                                    var l = f[c];
                                    s = s.add(l.key);
                                }
                            }
                            for (var p = 0, d = t; p < d.length; p++) {
                                var y = d[p];
                                o.push(y.batchId);
                                for (var v = 0, m = y.mutations; v < m.length; v++) {
                                    var g = m[v];
                                    s = s.add(g.key);
                                }
                            }
                            // Return the set of all (potentially) changed documents and the list
                            // of mutation batch IDs that were affected by change.
                                                        return r.qn(n, s).next((function(t) {
                                return {
                                    Ph: t,
                                    Vh: e,
                                    ph: o
                                };
                            }));
                        }));
                    })) ];

                  case 1:
                    return i = n.sent(), [ 2 /*return*/ , (this.Dn = e, this.Eh = r, this.oh.Ih(this.Eh), 
                    i) ];
                }
            }));
        }));
    }, 
    /* Accept locally generated Mutations and commit them to storage. */ t.prototype.yh = function(t) {
        var e, n = this, r = D.now(), i = t.reduce((function(t, e) {
            return t.add(e.key);
        }), ne());
        return this.persistence.runTransaction("Locally write mutations", "readwrite", (function(o) {
            return n.Eh.qn(o, i).next((function(i) {
                e = i;
                for (
                // For non-idempotent mutations (such as `FieldValue.increment()`),
                // we record the base state in a separate patch mutation. This is
                // later used to guarantee consistent values and prevents flicker
                // even if the backend sends us an update that already includes our
                // transform.
                var s = [], u = 0, a = t; u < a.length; u++) {
                    var h = a[u], c = h.Pt(e.get(h.key));
                    null != c && 
                    // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new vt(h.key, c, At(c.proto.mapValue), pt.exists(!0)));
                }
                return n.Dn.gh(o, r, s, t);
            }));
        })).then((function(t) {
            var n = t.En(e);
            return {
                batchId: t.batchId,
                bh: n
            };
        }));
    }, 
    /**
     * Acknowledge the given batch.
     *
     * On the happy path when a batch is acknowledged, the local store will
     *
     *  + remove the batch from the mutation queue;
     *  + apply the changes to the remote document cache;
     *  + recalculate the latency compensated view implied by those changes (there
     *    may be mutations in the queue that affect the documents but haven't been
     *    acknowledged yet); and
     *  + give the changed documents back the sync engine
     *
     * @returns The resulting (modified) documents.
     */
    t.prototype.vh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(n) {
            var r = t.batch.keys(), i = e.fh.Sh({
                Ch: !0
            });
            return e.Dn.vh(n, t.batch, t.streamToken).next((function() {
                return e.Dh(n, t, i);
            })).next((function() {
                return i.apply(n);
            })).next((function() {
                return e.Dn.Fh(n);
            })).next((function() {
                return e.Eh.qn(n, r);
            }));
        }));
    }, 
    /**
     * Remove mutations from the MutationQueue for the specified batch;
     * LocalDocuments will be recalculated.
     *
     * @returns The resulting modified documents.
     */
    t.prototype.Nh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Reject batch", "readwrite-primary", (function(n) {
            var r;
            return e.Dn.$h(n, t).next((function(t) {
                return ke(null !== t), r = t.keys(), e.Dn.Lh(n, t);
            })).next((function() {
                return e.Dn.Fh(n);
            })).next((function() {
                return e.Eh.qn(n, r);
            }));
        }));
    }, 
    /**
     * Returns the largest (latest) batch id in mutation queue that is pending server response.
     * Returns `BATCHID_UNKNOWN` if the queue is empty.
     */
    t.prototype.kh = function() {
        var t = this;
        return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(e) {
            return t.Dn.kh(e);
        }));
    }, 
    /** Returns the last recorded stream token for the current user. */ t.prototype.Oh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last stream token", "readonly", (function(e) {
            return t.Dn.Oh(e);
        }));
    }, 
    /**
     * Sets the stream token for the current user without acknowledging any
     * mutation batch. This is usually only useful after a stream handshake or in
     * response to an error that requires clearing the stream token.
     */
    t.prototype.qh = function(t) {
        var e = this;
        return this.persistence.runTransaction("Set last stream token", "readwrite-primary", (function(n) {
            return e.Dn.qh(n, t);
        }));
    }, 
    /**
     * Returns the last consistent snapshot processed (used by the RemoteStore to
     * determine whether to buffer incoming snapshots from the backend).
     */
    t.prototype.Mh = function() {
        var t = this;
        return this.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
            return t.wh.Mh(e);
        }));
    }, 
    /**
     * Update the "ground-state" (remote) documents. We assume that the remote
     * event reflects any write batches that have been acknowledged or rejected
     * (i.e. we do not re-apply local mutations to updates from this event).
     *
     * LocalDocuments are re-calculated if there are remaining mutations in the
     * queue.
     */
    t.prototype.xh = function(e) {
        var n = this, r = e.Te, i = this.ah;
        return this.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(o) {
            var s = n.fh.Sh({
                Ch: !0
            });
            // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                        i = n.ah;
            var u = [];
            e.as.forEach((function(e, s) {
                var a = i.get(s);
                if (a) {
                    // Only update the remote keys if the target is still active. This
                    // ensures that we can persist the updated target data along with
                    // the updated assignment.
                    u.push(n.wh.Bh(o, e.Es, s).next((function() {
                        return n.wh.Uh(o, e.ws, s);
                    })));
                    var h = e.resumeToken;
                    // Update the resume token if the change includes one.
                                        if (h.rt() > 0) {
                        var c = a.me(h, r).Ee(o.Qh);
                        i = i.Re(s, c), 
                        // Update the target data if there are target changes (or if
                        // sufficient time has passed since the last update).
                        t.Wh(a, c, e) && u.push(n.wh.jh(o, c));
                    }
                }
            }));
            var a = Yt(), h = ne();
            // HACK: The only reason we allow a null snapshot version is so that we
            // can synthesize remote events when we get permission denied errors while
            // trying to resolve the state of a locally cached document that is in
            // limbo.
                        if (e.cs.forEach((function(t, e) {
                h = h.add(t);
            })), 
            // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
            // documents in advance in a single call.
            u.push(s.getEntries(o, h).next((function(t) {
                e.cs.forEach((function(i, h) {
                    var c = t.get(i);
                    // Note: The order of the steps below is important, since we want
                    // to ensure that rejected limbo resolutions (which fabricate
                    // NoDocuments with SnapshotVersion.min()) never add documents to
                    // cache.
                                        h instanceof Rt && h.version.isEqual(k$1.min()) ? (
                    // NoDocuments with SnapshotVersion.min() are used in manufactured
                    // events. We remove these documents from cache since we lost
                    // access.
                    s.Gh(i, r), a = a.Re(i, h)) : null == c || h.version.S(c.version) > 0 || 0 === h.version.S(c.version) && c.hasPendingWrites ? (s.Hh(h, r), 
                    a = a.Re(i, h)) : Te("LocalStore", "Ignoring outdated watch update for ", i, ". Current version:", c.version, " Watch version:", h.version), 
                    e.ls.has(i) && u.push(n.persistence.zh.Kh(o, i));
                }));
            }))), !r.isEqual(k$1.min())) {
                var c = n.wh.Mh(o).next((function(t) {
                    return n.wh.Yh(o, o.Qh, r);
                }));
                u.push(c);
            }
            return Fe.vn(u).next((function() {
                return s.apply(o);
            })).next((function() {
                return n.Eh.Mn(o, a);
            }));
        })).then((function(t) {
            return n.ah = i, t;
        }));
    }, 
    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
    t.Wh = function(t, e, n) {
        // Always persist target data if we don't already have a resume token.
        return ke(e.resumeToken.rt() > 0), 0 === t.resumeToken.rt() || (e.Te.C() - t.Te.C() >= this.Xh || n.ws.size + n.Ts.size + n.Es.size > 0);
        // Don't allow resume token changes to be buffered indefinitely. This
        // allows us to be reasonably up-to-date after a crash and avoids needing
        // to loop over all active queries on shutdown. Especially in the browser
        // we may not get time to do anything interesting while the current tab is
        // closing.
        }, 
    /**
     * Notify local store of the changed views to locally pin documents.
     */
    t.prototype.Jh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u, a, h, c = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(e) {
                        return Fe.forEach(t, (function(t) {
                            return Fe.forEach(t.Kn, (function(n) {
                                return c.persistence.zh.Zh(e, t.targetId, n);
                            })).next((function() {
                                return Fe.forEach(t.zn, (function(n) {
                                    return c.persistence.zh.to(e, t.targetId, n);
                                }));
                            }));
                        }));
                    })) ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 3 ];

                  case 2:
                    if (!He(e = n.sent())) throw e;
                    // If `notifyLocalViewChanges` fails, we did not advance the sequence
                    // number for the documents that were included in this transaction.
                    // This might trigger them to be deleted earlier than they otherwise
                    // would have, but it should not invalidate the integrity of the data.
                                        return Te("LocalStore", "Failed to update sequence numbers: " + e), 
                    [ 3 /*break*/ , 3 ];

                  case 3:
                    for (r = 0, i = t; r < i.length; r++) o = i[r], s = o.targetId, o.fromCache || (u = this.ah.get(s), 
                    a = u.Te, h = u.Ie(a), 
                    // Advance the last limbo free snapshot version
                    this.ah = this.ah.Re(s, h));
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Gets the mutation batch after the passed in batchId in the mutation queue
     * or null if empty.
     * @param afterBatchId If provided, the batch to search after.
     * @returns The next mutation or null if there wasn't one.
     */
    t.prototype.eo = function(t) {
        var e = this;
        return this.persistence.runTransaction("Get next mutation batch", "readonly", (function(n) {
            return void 0 === t && (t = -1), e.Dn.so(n, t);
        }));
    }, 
    /**
     * Read the current value of a Document with a given key or null if not
     * found - used for testing.
     */
    t.prototype.io = function(t) {
        var e = this;
        return this.persistence.runTransaction("read document", "readonly", (function(n) {
            return e.Eh.Nn(n, t);
        }));
    }, 
    /**
     * Assigns the given target an internal ID so that its results can be pinned so
     * they don't get GC'd. A target must be allocated in the local store before
     * the store can be used to manage its view.
     *
     * Allocating an already allocated `Target` will return the existing `TargetData`
     * for that `Target`.
     */
    t.prototype.no = function(t) {
        var e = this;
        return this.persistence.runTransaction("Allocate target", "readwrite", (function(n) {
            var r;
            return e.wh.ro(n, t).next((function(i) {
                return i ? (
                // This target has been listened to previously, so reuse the
                // previous targetID.
                // TODO(mcg): freshen last accessed date?
                r = i, Fe.resolve(r)) : e.wh.ho(n).next((function(i) {
                    return r = new Ft(t, i, 0 /* Listen */ , n.Qh), e.wh.oo(n, r).next((function() {
                        return r;
                    }));
                }));
            }));
        })).then((function(n) {
            return null === e.ah.get(n.targetId) && (e.ah = e.ah.Re(n.targetId, n), e.uh.set(t, n.targetId)), 
            n;
        }));
    }, 
    /**
     * Returns the TargetData as seen by the LocalStore, including updates that may
     * have not yet been persisted to the TargetCache.
     */
    // Visible for testing.
    t.prototype.ro = function(t, e) {
        var n = this.uh.get(e);
        return void 0 !== n ? Fe.resolve(this.ah.get(n)) : this.wh.ro(t, e);
    }, 
    /**
     * Unpin all the documents associated with the given target. If
     * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
     * directly removes the associated target data from the target cache.
     *
     * Releasing a non-existing `Target` is a no-op.
     */
    // PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
    t.prototype.ao = function(t, e) {
        var n = this, r = this.ah.get(t), i = e ? "readwrite" : "readwrite-primary";
        return this.persistence.runTransaction("Release target", i, (function(t) {
            return e ? Fe.resolve() : n.persistence.zh.removeTarget(t, r);
        })).then((function() {
            n.ah = n.ah.remove(t), n.uh.delete(r.target);
        }));
    }, 
    /**
     * Runs the specified query against the local store and returns the results,
     * potentially taking advantage of query data from previous executions (such
     * as the set of remote keys).
     *
     * @param usePreviousResults Whether results from previous executions can
     * be used to optimize this query execution.
     */
    t.prototype.uo = function(t, e) {
        var n = this, r = k$1.min(), i = ne();
        return this.persistence.runTransaction("Execute query", "readonly", (function(o) {
            return n.ro(o, t.ee()).next((function(t) {
                if (t) return r = t.lastLimboFreeSnapshotVersion, n.wh.co(o, t.targetId).next((function(t) {
                    i = t;
                }));
            })).next((function() {
                return n.oh.Bn(o, t, e ? r : k$1.min(), e ? i : ne());
            })).next((function(t) {
                return {
                    documents: t,
                    lo: i
                };
            }));
        }));
    }, t.prototype.Dh = function(t, e, n) {
        var r = this, i = e.batch, o = i.keys(), s = Fe.resolve();
        return o.forEach((function(r) {
            s = s.next((function() {
                return n.kn(t, r);
            })).next((function(t) {
                var o = t, s = e.In.get(r);
                ke(null !== s), (!o || o.version.S(s) < 0) && ((o = i.at(r, o, e)) && 
                // We use the commitVersion as the readTime rather than the
                // document's updateTime since the updateTime is not advanced
                // for updates that do not modify the underlying document.
                n.Hh(o, e.mn));
            }));
        })), s.next((function() {
            return r.Dn.Lh(t, i);
        }));
    }, t.prototype._o = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.fo(n, e.ah);
        }));
    }, t;
}();

/**
 * The maximum time to leave a resume token buffered without writing it out.
 * This value is arbitrary: it's long enough to avoid several writes
 * (possibly indefinitely if updates come more frequently than this) but
 * short enough that restarting after crashing will still have a pretty
 * recent resume token.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function tn(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            if (t.code !== E$1.FAILED_PRECONDITION || "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !== t.message) throw t;
            return Te("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ $e.Xh = 3e8;

var en = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.do = new Wt(nn.wo), 
        // A set of outstanding references to a document sorted by target id.
        this.To = new Wt(nn.Eo)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.M = function() {
        return this.do.M();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.Zh = function(t, e) {
        var n = new nn(t, e);
        this.do = this.do.add(n), this.To = this.To.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.mo = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Zh(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.to = function(t, e) {
        this.Io(new nn(t, e));
    }, t.prototype.Ro = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.to(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Ao = function(t) {
        var e = this, n = U$1.EMPTY, r = new nn(n, t), i = new nn(n, t + 1), o = [];
        return this.To.Ge([ r, i ], (function(t) {
            e.Io(t), o.push(t.key);
        })), o;
    }, t.prototype.Po = function() {
        var t = this;
        this.do.forEach((function(e) {
            return t.Io(e);
        }));
    }, t.prototype.Io = function(t) {
        this.do = this.do.delete(t), this.To = this.To.delete(t);
    }, t.prototype.Vo = function(t) {
        var e = U$1.EMPTY, n = new nn(e, t), r = new nn(e, t + 1), i = ne();
        return this.To.Ge([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.po = function(t) {
        var e = new nn(t, 0), n = this.do.Ke(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), nn = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.yo = e
        /** Compare by key then by ID */;
    }
    return t.wo = function(t, e) {
        return U$1.N(t.key, e.key) || Le(t.yo, e.yo);
    }, 
    /** Compare by ID then by key */ t.Eo = function(t, e) {
        return Le(t.yo, e.yo) || U$1.N(t.key, e.key);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function rn(t, e) {
    if (0 !== e.length) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + En(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function on(t, e, n) {
    if (e.length !== n) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires " + En(n, "argument") + ", but was called with " + En(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function sn(t, e, n) {
    if (e.length < n) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires at least " + En(n, "argument") + ", but was called with " + En(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function un(t, e, n, r) {
    if (e.length < n || e.length > r) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + En(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function an(t, e, n, r) {
    pn(t, e, bn(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function hn(t, e, n, r) {
    void 0 !== r && an(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function cn(t, e, n, r) {
    pn(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function fn(t, e, n, r) {
    void 0 !== r && cn(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function ln(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var a = u[s];
            if (a === r) return;
            o.push(yn(a));
        }
        var h = yn(r);
        throw new A$1(E$1.INVALID_ARGUMENT, "Invalid value " + h + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */
/** Helper to validate the type of a provided input. */ function pn(t, e, n, r) {
    if (!("object" === e ? dn(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = yn(r);
        throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function dn(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function yn(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : De();
}

function vn(t, e, n) {
    if (void 0 === n) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + bn(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function mn(t, e, n) {
    O$1(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new A$1(E$1.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function gn(t, e, n, r) {
    var i = yn(r);
    return new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + bn(n) + " argument to be a " + e + ", but it was: " + i);
}

function wn(t, e, n) {
    if (n <= 0) throw new A$1(E$1.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + bn(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function bn(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function En(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function An() {
    if ("undefined" == typeof Uint8Array) throw new A$1(E$1.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function In() {
    if (!Ee.nt().bo) throw new A$1(E$1.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var Nn = /** @class */ function() {
    function t(t) {
        In(), this.vo = t;
    }
    return t.fromBase64String = function(e) {
        on("Blob.fromBase64String", arguments, 1), an("Blob.fromBase64String", "string", 1, e), 
        In();
        try {
            return new t(C$1.fromBase64String(e));
        } catch (e) {
            throw new A$1(E$1.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        if (on("Blob.fromUint8Array", arguments, 1), An(), !(e instanceof Uint8Array)) throw gn("Blob.fromUint8Array", "Uint8Array", 1, e);
        return new t(C$1.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return on("Blob.toBase64", arguments, 0), In(), this.vo.toBase64();
    }, t.prototype.toUint8Array = function() {
        return on("Blob.toUint8Array", arguments, 0), An(), this.vo.toUint8Array();
    }, t.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.vo.isEqual(t.vo);
    }, t;
}(), Tn = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        !function(t, e, n, r) {
            if (!(e instanceof Array) || e.length < 1) throw new A$1(E$1.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + En(1, "element") + ".");
        }(0, t);
        for (var n = 0; n < t.length; ++n) if (an("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.So = new M$1(t);
    }
    return t.documentId = function() {
        return t.Co;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw gn("isEqual", "FieldPath", 1, e);
        return this.So.isEqual(e.So);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A FieldPath refers to a field in a document. The path may consist of a single
 * field name (referring to a top-level field in the document), or a list of
 * field names (referring to a nested field in the document).
 */
/**
 * Internal Note: The backend doesn't technically support querying by
 * document ID. Instead it queries by the entire document name (full path
 * included), but in the cases we currently support documentId(), the net
 * effect is the same.
 */
Tn.Co = new Tn(M$1.X().j());

/**
 * Matches any characters in a field path string that are reserved.
 */
var _n = new RegExp("[~\\*/\\[\\]]"), Rn = function(t) {
    this.Do = t;
}, Dn = /** @class */ function(e) {
    function n() {
        return e.call(this, "FieldValue.delete") || this;
    }
    return __extends(n, e), n.prototype.Ci = function(t) {
        if (2 /* MergeSet */ !== t.Fo) throw 1 /* Update */ === t.Fo ? t.No("FieldValue.delete() can only appear at the top level of your update data") : t.No("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Vt.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Rn), kn = /** @class */ function(e) {
    function n() {
        return e.call(this, "FieldValue.serverTimestamp") || this;
    }
    return __extends(n, e), n.prototype.Ci = function(t) {
        return new ft(t.path, ot.instance);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(Rn), Vn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, "FieldValue.arrayUnion") || this).$o = t, n;
    }
    return __extends(n, e), n.prototype.Ci = function(t) {
        // Although array transforms are used with writes, the actual elements
        // being uniomed or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var e = new Cn({
            Fo: 3 /* Argument */ ,
            methodName: this.Do,
            Lo: !0
        }, t.ii, t.serializer), n = this.$o.map((function(t) {
            return xn(t, e);
        })), r = new st(n);
        return new ft(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Rn), Sn = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, "FieldValue.arrayRemove") || this).$o = t, n;
    }
    return __extends(n, e), n.prototype.Ci = function(t) {
        // Although array transforms are used with writes, the actual elements
        // being unioned or removed are not considered writes since they cannot
        // contain any FieldValue sentinels, etc.
        var e = new Cn({
            Fo: 3 /* Argument */ ,
            methodName: this.Do,
            Lo: !0
        }, t.ii, t.serializer), n = this.$o.map((function(t) {
            return xn(t, e);
        })), r = new ut(n);
        return new ft(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Rn), Ln = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, "FieldValue.increment") || this).ko = t, n;
    }
    return __extends(n, e), n.prototype.Ci = function(t) {
        var e = new Cn({
            Fo: 3 /* Argument */ ,
            methodName: this.Do
        }, t.ii, t.serializer), n = xn(this.ko, e), r = new at(t.serializer, n);
        return new ft(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(Rn), Mn = /** @class */ function() {
    function t(t, e) {
        if (on("GeoPoint", arguments, 2), an("GeoPoint", "number", 1, t), an("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new A$1(E$1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new A$1(E$1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.Oo = t, this.qo = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.Oo;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.qo;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.Oo === t.Oo && this.qo === t.qo;
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.g = function(t) {
        return Le(this.Oo, t.Oo) || Le(this.qo, t.qo);
    }, t;
}(), Un = /^__.*__$/, qn = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Vt = e, this.fieldTransforms = n;
    }
    return t.prototype.Mo = function(t, e) {
        var n = [];
        return null !== this.Vt ? n.push(new vt(t, this.data, this.Vt, e)) : n.push(new yt(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new mt(t, this.fieldTransforms)), n;
    }, t;
}(), On = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Vt = e, this.fieldTransforms = n;
    }
    return t.prototype.Mo = function(t, e) {
        var n = [ new vt(t, this.data, this.Vt, e) ];
        return this.fieldTransforms.length > 0 && n.push(new mt(t, this.fieldTransforms)), 
        n;
    }, t;
}();

/**
 * Parses a field path string into a FieldPath, treating dots as separators.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An opaque base class for FieldValue sentinel objects in our public API,
 * with public static methods for creating said sentinel objects.
 */ function Pn(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw De();
    }
}

/** A "context" object passed around while parsing user data. */ var Cn = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i) {
        this.settings = t, this.ii = e, this.serializer = n, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === r && this.xo(), this.fieldTransforms = r || [], this.Vt = i || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Fo", {
        get: function() {
            return this.settings.Fo;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.Bo = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.ii, this.serializer, this.fieldTransforms, this.Vt);
    }, t.prototype.Uo = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Bo({
            path: n,
            Lo: !1
        });
        return r.Qo(t), r;
    }, t.prototype.Wo = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.Bo({
            path: n,
            Lo: !1
        });
        return r.xo(), r;
    }, t.prototype.jo = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.Bo({
            path: void 0,
            Lo: !0
        });
    }, t.prototype.No = function(t) {
        var e = !this.path || this.path.M() ? "" : " (found in field " + this.path.toString() + ")";
        return new A$1(E$1.INVALID_ARGUMENT, "Function " + this.settings.methodName + "() called with invalid data. " + t + e);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Vt.find((function(e) {
            return t.B(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.B(e.field);
        }));
    }, t.prototype.xo = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.Qo(this.path.get(t));
    }, t.prototype.Qo = function(t) {
        if (0 === t.length) throw this.No("Document fields must not be empty");
        if (Pn(this.Fo) && Un.test(t)) throw this.No('Document fields cannot begin and end with "__"');
    }, t;
}(), Fn = /** @class */ function() {
    function t(t, e) {
        this.ii = t, this.serializer = e || Ee.nt().Go(t)
        /** Parse document data from a non-merge set() call. */;
    }
    return t.prototype.Ho = function(t, e) {
        var n = this.Ko(0 /* Set */ , t);
        Bn("Data must be an object, but it was:", n, e);
        var r = jn(e, n);
        return new qn(new bt(r), 
        /* fieldMask= */ null, n.fieldTransforms);
    }, 
    /** Parse document data from a set() call with '{merge:true}'. */ t.prototype.zo = function(t, e, n) {
        var r = this.Ko(2 /* MergeSet */ , t);
        Bn("Data must be an object, but it was:", r, e);
        var i, o, s = jn(e, r);
        if (n) {
            for (var u = [], a = 0, h = n; a < h.length; a++) {
                var c = h[a], f = void 0;
                if (c instanceof Tn) f = c.So; else {
                    if ("string" != typeof c) throw De();
                    f = Qn(t, c);
                }
                if (!r.contains(f)) throw new A$1(E$1.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                Wn(u, f) || u.push(f);
            }
            i = new ct(u), o = r.fieldTransforms.filter((function(t) {
                return i.ft(t.field);
            }));
        } else i = new ct(r.Vt), o = r.fieldTransforms;
        return new qn(new bt(s), i, o);
    }, 
    /** Parse update data from an update() call. */ t.prototype.Yo = function(t, e) {
        var n = this.Ko(1 /* Update */ , t);
        Bn("Data must be an object, but it was:", n, e);
        var r = [], i = new Et;
        O$1(e, (function(e, o) {
            var s = Qn(t, e), u = n.Wo(s);
            if (o instanceof Dn) 
            // Add it to the field mask, but don't add anything to updateData.
            r.push(s); else {
                var a = xn(o, u);
                null != a && (r.push(s), i.set(s, a));
            }
        }));
        var o = new ct(r);
        return new On(i.gt(), o, n.fieldTransforms);
    }, 
    /** Parse update data from a list of field/value arguments. */ t.prototype.Xo = function(t, e, n, r) {
        var i = this.Ko(1 /* Update */ , t), o = [ zn(t, e) ], s = [ n ];
        if (r.length % 2 != 0) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
        for (var u = 0; u < r.length; u += 2) o.push(zn(t, r[u])), s.push(r[u + 1]);
        // We iterate in reverse order to pick the last value for a field if the
        // user specified the field multiple times.
        for (var a = [], h = new Et, c = o.length - 1; c >= 0; --c) if (!Wn(a, o[c])) {
            var f = o[c], l = s[c], p = i.Wo(f);
            if (l instanceof Dn) 
            // Add it to the field mask, but don't add anything to updateData.
            a.push(f); else {
                var d = xn(l, p);
                null != d && (a.push(f), h.set(f, d));
            }
        }
        var y = new ct(a);
        return new On(h.gt(), y, i.fieldTransforms);
    }, 
    /** Creates a new top-level parse context. */ t.prototype.Ko = function(t, e) {
        return new Cn({
            Fo: t,
            methodName: e,
            path: M$1.H,
            Lo: !1
        }, this.ii, this.serializer);
    }, 
    /**
     * Parse a "query value" (e.g. value in a where filter or a value in a cursor
     * bound).
     *
     * @param allowArrays Whether the query value is an array that may directly
     * contain additional arrays (e.g. the operand of an `in` query).
     */
    t.prototype.Jo = function(t, e, n) {
        return void 0 === n && (n = !1), xn(e, this.Ko(n ? 4 /* ArrayArgument */ : 3 /* Argument */ , t));
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */
function xn(t, e) {
    if (Gn(t)) return Bn("Unsupported field value:", e, t), jn(t, e);
    if (t instanceof Rn) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Pn(e.Fo)) throw e.No(t.Do + "() can only be used with update() and set()");
        if (null === e.path) throw e.No(t.Do + "() is not currently supported inside arrays");
        var n = t.Ci(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Vt.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.Lo && 4 /* ArrayArgument */ !== e.Fo) throw e.No("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = xn(o[i], e.jo(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return e.serializer.ai(t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = D.fromDate(t);
            return {
                timestampValue: e.serializer.D(n)
            };
        }
        if (t instanceof D) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new D(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: e.serializer.D(r)
            };
        }
        if (t instanceof Mn) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Nn) return {
            bytesValue: e.serializer.ui(t)
        };
        if (t instanceof kr) {
            var i = e.ii, o = t.firestore.Zo;
            if (!o.isEqual(i)) throw e.No("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: e.serializer.li(t.ta.path, t.firestore.Zo)
            };
        }
        throw e.No("Unsupported field value: " + yn(t));
    }(t, e);
}

function jn(t, e) {
    var n = {};
    return P$1(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Vt.push(e.path) : O$1(t, (function(t, r) {
        var i = xn(r, e.Uo(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Gn(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof D || t instanceof Mn || t instanceof Nn || t instanceof kr || t instanceof Rn);
}

function Bn(t, e, n) {
    if (!Gn(n) || !dn(n)) {
        var r = yn(n);
        throw "an object" === r ? e.No(t + " a custom object") : e.No(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function zn(t, e) {
    if (e instanceof Tn) return e.So;
    if ("string" == typeof e) return Qn(t, e);
    throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.");
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 */ function Qn(t, e) {
    try {
        return function(t) {
            if (t.search(_n) >= 0) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (Tn.bind.apply(Tn, __spreadArrays([ void 0 ], t.split("."))));
            } catch (e) {
                throw new A$1(E$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(e).So;
    } catch (e) {
        var n = (i = e) instanceof Error ? i.message : i.toString();
        throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Wn(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ var Jn = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.sr = t, this.ea = n, this.sa = r, this.ia = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.na = 0, this.ra = null, this.stream = null, this.kr = new ze(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.ha = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.oa = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.aa();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.ha() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.ua = function() {
        this.state = 0 /* Initial */ , this.kr.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.ca = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.oa() && null === this.ra && (this.ra = this.sr.dr(this.ea, 6e4, (function() {
            return t.la();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype._a = function(t) {
        this.fa(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.la = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.oa() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.fa = function() {
        this.ra && (this.ra.cancel(), this.ra = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    t.prototype.close = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.fa(), this.kr.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.na++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.kr.reset() : r && r.code === E$1.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    _e(r.toString()), _e("Using maximum backoff delay to prevent overloading the backend."), 
                    this.kr.cr()) : r && r.code === E$1.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.ia.l(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.da(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.wa(r) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return e.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.da = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Ta(this.na), n = this.na;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.ia.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.na === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Ea(e);
        }), (function(n) {
            e((function() {
                var e = new A$1(E$1.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.ma(e);
            }));
        }));
    }, t.prototype.Ea = function(t) {
        var e = this, n = this.Ta(this.na);
        this.stream = this.Ia(t), this.stream.Ra((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Ra();
            }));
        })), this.stream.wa((function(t) {
            n((function() {
                return e.ma(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.aa = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.kr.lr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.ma = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return Te("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.Ta = function(t) {
        var e = this;
        return function(n) {
            e.sr.vr((function() {
                return e.na === t ? n() : (Te("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Hn = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return __extends(n, e), n.prototype.Ia = function(t) {
        return this.sa.Aa("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.kr.reset();
        var e = this.serializer.yi(t), n = this.serializer.bi(t);
        return this.listener.Pa(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.Va = function(t) {
        var e = {};
        e.database = this.serializer.mi, e.addTarget = this.serializer.ee(t);
        var n = this.serializer.Ki(t);
        n && (e.labels = n), this._a(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.pa = function(t) {
        var e = {};
        e.database = this.serializer.mi, e.removeTarget = t, this._a(e);
    }, n;
}(Jn), Yn = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.ya = !1, 
        /**
             * The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             *
             * PersistentWriteStream manages propagating this value from responses to the
             * next request.
             */
        s.lastStreamToken = C$1.ht, s;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "ga", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.ya;
        },
        enumerable: !0,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.ya = !1, e.prototype.start.call(this);
    }, n.prototype.da = function() {
        this.ya && this.ba([]);
    }, n.prototype.Ia = function(t) {
        return this.sa.Aa("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        ke(!!t.streamToken), this.lastStreamToken = this.serializer.ci(t.streamToken), this.ya) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.kr.reset();
            var e = this.serializer.Oi(t.writeResults, t.commitTime), n = this.serializer.fromVersion(t.commitTime);
            return this.listener.va(n, e);
        }
        // The first response is always the handshake response
                return ke(!t.writeResults || 0 === t.writeResults.length), this.ya = !0, 
        this.listener.Sa();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.Ca = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = this.serializer.mi, this._a(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.ba = function(t) {
        var e = this, n = {
            streamToken: this.serializer.ui(this.lastStreamToken),
            writes: t.map((function(t) {
                return e.serializer.vi(t);
            }))
        };
        this._a(n);
    }, n;
}(Jn), Zn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).sa = t, i.credentials = n, i.serializer = r, i;
    }
    /** Gets an auth token and invokes the provided RPC. */    return __extends(n, e), n.prototype.Fa = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.sa.Fa(t, e, r);
        })).catch((function(t) {
            throw t.code === E$1.UNAUTHENTICATED && n.credentials.l(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.Na = function(t, e) {
        var n = this;
        return this.credentials.getToken().then((function(r) {
            return n.sa.Na(t, e, r);
        })).catch((function(t) {
            throw t.code === E$1.UNAUTHENTICATED && n.credentials.l(), t;
        }));
    }, n;
}((function() {
    // Make sure that the structural type of `Datastore` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.Da = void 0;
})), Xn = /** @class */ function() {
    function t(t) {
        this.$a = t, 
        // The version of each document that was read during this transaction.
        this.La = te(), this.mutations = [], this.ka = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Oa = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.qa = new Set;
    }
    return t.prototype.Ma = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    if (this.xa(), this.mutations.length > 0) throw new A$1(E$1.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o, s, u;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = Ve(t), i = {
                                        database: e.serializer.mi,
                                        documents: r.map((function(t) {
                                            return e.serializer.di(t);
                                        }))
                                    }, [ 4 /*yield*/ , e.Na("BatchGetDocuments", i) ];

                                  case 1:
                                    return o = n.sent(), s = new Map, o.forEach((function(t) {
                                        var n = e.serializer.pi(t);
                                        s.set(n.key.toString(), n);
                                    })), u = [], [ 2 /*return*/ , (r.forEach((function(t) {
                                        var e = s.get(t.toString());
                                        ke(!!e), u.push(e);
                                    })), u) ];
                                }
                            }));
                        }));
                    }(this.$a, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((r = o.sent()).forEach((function(t) {
                        t instanceof Rt || t instanceof _t ? i.Ba(t) : De();
                    })), r) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.Mo(t, this.Rt(t))), this.qa.add(t);
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.Mo(t, this.Ua(t)));
        } catch (t) {
            this.Oa = t;
        }
        this.qa.add(t);
    }, t.prototype.delete = function(t) {
        this.write([ new gt(t, this.Rt(t)) ]), this.qa.add(t);
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.xa(), this.Oa) throw this.Oa;
                    return t = this.La, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t = t.remove(e.key);
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, e) {
                        r.mutations.push(new wt(t, r.Rt(t)));
                    })), [ 4 /*yield*/ , function(t, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var e, i, o;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = Ve(t), i = {
                                        database: e.serializer.mi,
                                        writes: r.map((function(t) {
                                            return e.serializer.vi(t);
                                        }))
                                    }, [ 4 /*yield*/ , e.Fa("Commit", i) ];

                                  case 1:
                                    return o = n.sent(), [ 2 /*return*/ , e.serializer.Oi(o.writeResults, o.commitTime) ];
                                }
                            }));
                        }));
                    }(this.$a, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return i.sent(), this.ka = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ba = function(t) {
        var e;
        if (t instanceof _t) e = t.version; else {
            if (!(t instanceof Rt)) throw De();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = k$1.min();
        }
        var n = this.La.get(t.key);
        if (null !== n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new A$1(E$1.ABORTED, "Document version changed between two reads.");
        } else this.La = this.La.Re(t.key, e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.Rt = function(t) {
        var e = this.La.get(t);
        return !this.qa.has(t) && e ? pt.updateTime(e) : pt.dt();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.Ua = function(t) {
        var e = this.La.get(t);
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.qa.has(t) && e) {
            if (e.isEqual(k$1.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new A$1(E$1.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return pt.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return pt.exists(!0);
    }, t.prototype.write = function(t) {
        this.xa(), this.mutations = this.mutations.concat(t);
    }, t.prototype.xa = function() {}, t;
}(), Kn = /** @class */ function() {
    function t(t, e) {
        this.Rr = t, this.Qa = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Wa = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.ja = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Ga = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Ha = function() {
        var t = this;
        0 === this.Wa && (this.Ka("Unknown" /* Unknown */), this.ja = this.Rr.dr("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.ja = null, t.za("Backend didn't respond within 10 seconds."), t.Ka("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Ya = function(t) {
        "Online" /* Online */ === this.state ? this.Ka("Unknown" /* Unknown */) : (this.Wa++, 
        this.Wa >= 1 && (this.Xa(), this.za("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Ka("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Xa(), this.Wa = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Ga = !1), this.Ka(t);
    }, t.prototype.Ka = function(t) {
        t !== this.state && (this.state = t, this.Qa(t));
    }, t.prototype.za = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Ga ? (_e(e), this.Ga = !1) : Te("OnlineStateTracker", e);
    }, t.prototype.Xa = function() {
        null !== this.ja && (this.ja.cancel(), this.ja = null);
    }, t;
}(), $n = /** @class */ function() {
    function t(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    t, 
    /** The client-side proxy for interacting with the backend. */
    r, i, o, s) {
        var u = this;
        this.Ja = t, this.$a = r, this.Rr = i, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.Za = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.tu = new Map, this.eu = null, 
        /**
             * Set to true by enableNetwork() and false by disableNetwork() and indicates
             * the user-preferred network state.
             */
        this.networkEnabled = !1, this.isPrimary = !1, 
        /**
             * When set to `true`, the network was taken offline due to an IndexedDB
             * failure. The state is flipped to `false` when access becomes available
             * again.
             */
        this.su = !1, this.iu = s, this.iu.nu((function(t) {
            i.vr((function() {
                return __awaiter(u, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return this.ru() ? (Te("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , this.hu() ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.ou = new Kn(i, o), 
        // Create streams (but note they're not started yet).
        this.au = function(t, e, n) {
            var r = Ve(t);
            return new Hn(e, r.sa, r.credentials, r.serializer, n);
        }(this.$a, i, {
            Ra: this.uu.bind(this),
            wa: this.cu.bind(this),
            Pa: this.lu.bind(this)
        }), this._u = function(t, e, n) {
            var r = Ve(t);
            return new Yn(e, r.sa, r.credentials, r.serializer, n);
        }(this.$a, i, {
            Ra: this.fu.bind(this),
            wa: this.du.bind(this),
            Sa: this.wu.bind(this),
            va: this.va.bind(this)
        });
    }
    /**
     * Starts up the remote store, creating streams, restoring state from
     * LocalStore, etc.
     */    return t.prototype.start = function() {
        return this.enableNetwork();
    }, 
    /** Re-enables the network. Idempotent. */ t.prototype.enableNetwork = function() {
        return this.networkEnabled = !0, this.Tu();
    }, t.prototype.Tu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.ru() ? (t = this._u, [ 4 /*yield*/ , this.Ja.Oh() ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return t.lastStreamToken = e.sent(), this.Eu() ? this.mu() : this.ou.set("Unknown" /* Unknown */), 
                    [ 4 /*yield*/ , this.Iu() ];

                  case 2:
                    // This will start the write stream if necessary.
                    e.sent(), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Temporarily disables the network. The network can be re-enabled using
     * enableNetwork().
     */
    t.prototype.disableNetwork = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Ru() ];

                  case 1:
                    return t.sent(), 
                    // Set the OnlineState to Offline so get()s return from cache, etc.
                    this.ou.set("Offline" /* Offline */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Ru = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this._u.stop() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.au.stop() ];

                  case 2:
                    return t.sent(), this.Za.length > 0 && (Te("RemoteStore", "Stopping write stream with " + this.Za.length + " pending writes"), 
                    this.Za = []), this.Au(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Pu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return Te("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, 
                    [ 4 /*yield*/ , this.Ru() ];

                  case 1:
                    return t.sent(), this.iu.Pu(), 
                    // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                    // triggering spurious listener events with cached data, etc.
                    this.ou.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Starts new listen for the given target. Uses resume token if provided. It
     * is a no-op if the target of given `TargetData` is already being listened to.
     */
    t.prototype.listen = function(t) {
        this.tu.has(t.targetId) || (
        // Mark this as something the client is currently listening for.
        this.tu.set(t.targetId, t), this.Eu() ? 
        // The listen will be sent in onWatchStreamOpen
        this.mu() : this.au.oa() && this.Vu(t));
    }, 
    /**
     * Removes the listen from server. It is a no-op if the given target id is
     * not being listened to.
     */
    t.prototype.pu = function(t) {
        this.tu.delete(t), this.au.oa() && this.yu(t), 0 === this.tu.size && (this.au.oa() ? this.au.ca() : this.ru() && 
        // Revert to OnlineState.Unknown if the watch stream is not open and we
        // have no listeners, since without any listens to send we cannot
        // confirm if the stream is healthy and upgrade to OnlineState.Online.
        this.ou.set("Unknown" /* Unknown */));
    }, 
    /** {@link TargetMetadataProvider.getTargetDataForTarget} */ t.prototype.si = function(t) {
        return this.tu.get(t) || null;
    }, 
    /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */ t.prototype.ei = function(t) {
        return this.gu.ei(t);
    }, 
    /**
     * We need to increment the the expected number of pending responses we're due
     * from watch so we wait for the ack to process any messages from this target.
     */
    t.prototype.Vu = function(t) {
        this.eu.Ns(t.targetId), this.au.Va(t);
    }, 
    /**
     * We need to increment the expected number of pending responses we're due
     * from watch so we wait for the removal on the server before we process any
     * messages from this target.
     */
    t.prototype.yu = function(t) {
        this.eu.Ns(t), this.au.pa(t);
    }, t.prototype.mu = function() {
        this.eu = new de(this), this.au.start(), this.ou.Ha();
    }, 
    /**
     * Returns whether the watch stream should be started because it's necessary
     * and has not yet been started.
     */
    t.prototype.Eu = function() {
        return this.ru() && !this.au.ha() && this.tu.size > 0;
    }, t.prototype.ru = function() {
        return !this.su && this.isPrimary && this.networkEnabled;
    }, t.prototype.Au = function() {
        this.eu = null;
    }, t.prototype.uu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(e) {
                return this.tu.forEach((function(e, n) {
                    t.Vu(e);
                })), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.cu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return this.Au(), 
                // If we still need the watch stream, retry the connection.
                this.Eu() ? (this.ou.Ya(t), this.mu()) : 
                // No need to restart watch stream because there are no active targets.
                // The online state is set to unknown because there is no active attempt
                // at establishing a connection
                this.ou.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.lu = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.ou.set("Online" /* Online */), !(t instanceof le && 2 /* Removed */ === t.state && t.cause)) 
                    // Mark the client as online since we got a message from the server
                    return [ 3 /*break*/ , 6 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , this.bu(t) ];

                  case 2:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 3:
                    return e = n.sent(), Te("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), e), 
                    [ 4 /*yield*/ , this.vu(e) ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 5:
                    return [ 3 /*break*/ , 13 ];

                  case 6:
                    if (t instanceof ce ? this.eu.Bs(t) : t instanceof fe ? this.eu.zs(t) : this.eu.Ws(t), 
                    r.isEqual(k$1.min())) return [ 3 /*break*/ , 13 ];
                    n.label = 7;

                  case 7:
                    return n.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , this.Ja.Mh() ];

                  case 8:
                    return i = n.sent(), r.S(i) >= 0 ? [ 4 /*yield*/ , this.Su(r) ] : [ 3 /*break*/ , 10 ];

                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                                      case 9:
                    // We have received a target change with a global snapshot if the snapshot
                    // version is not equal to SnapshotVersion.min().
                    n.sent(), n.label = 10;

                  case 10:
                    return [ 3 /*break*/ , 13 ];

                  case 11:
                    return Te("RemoteStore", "Failed to raise snapshot:", o = n.sent()), [ 4 /*yield*/ , this.vu(o) ];

                  case 12:
                    return n.sent(), [ 3 /*break*/ , 13 ];

                  case 13:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Recovery logic for IndexedDB errors that takes the network offline until
     * IndexedDb probing succeeds. Retries are scheduled with backoff using
     * `enqueueRetryable()`.
     */
    t.prototype.vu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (!He(t)) throw t;
                    // Disable network and raise offline snapshots
                    return this.su = !0, [ 4 /*yield*/ , this.Ru() ];

                  case 1:
                    // Disable network and raise offline snapshots
                    return i.sent(), this.ou.set("Offline" /* Offline */), 
                    // Probe IndexedDB periodically and re-enable network
                    this.Rr.jr((function() {
                        return __awaiter(r, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    // Issue a simple read operation to determine if IndexedDB recovered.
                                    // Ideally, we would expose a health check directly on SimpleDb, but
                                    // RemoteStore only has access to persistence through LocalStore.
                                    return Te("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , this.Ja.Mh() ];

                                  case 1:
                                    // Issue a simple read operation to determine if IndexedDB recovered.
                                    // Ideally, we would expose a health check directly on SimpleDb, but
                                    // RemoteStore only has access to persistence through LocalStore.
                                    return t.sent(), this.su = !1, [ 4 /*yield*/ , this.Tu() ];

                                  case 2:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes a batch of changes from the Datastore, repackages them as a
     * RemoteEvent, and passes that on to the listener, which is typically the
     * SyncEngine.
     */
    t.prototype.Su = function(t) {
        var e = this, n = this.eu.Js(t);
        // Update in-memory resume tokens. LocalStore will update the
        // persistent view of these when applying the completed RemoteEvent.
        // Finally raise remote event
        return n.as.forEach((function(n, r) {
            if (n.resumeToken.rt() > 0) {
                var i = e.tu.get(r);
                // A watched target might have been removed already.
                                i && e.tu.set(r, i.me(n.resumeToken, t));
            }
        })), 
        // Re-establish listens for the targets that have been invalidated by
        // existence filter mismatches.
        n.us.forEach((function(t) {
            var n = e.tu.get(t);
            if (n) {
                // Clear the resume token for the target, since we're in a known mismatch
                // state.
                e.tu.set(t, n.me(C$1.ht, n.Te)), 
                // Cause a hard reset by unwatching and rewatching immediately, but
                // deliberately don't send a resume token so that we get a full update.
                e.yu(t);
                // Mark the target we send as being on behalf of an existence filter
                // mismatch, but don't actually retain that in listenTargets. This ensures
                // that we flag the first re-listen this way without impacting future
                // listens of this target (that might happen e.g. on reconnect).
                var r = new Ft(n.target, t, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                e.Vu(r);
            }
        })), this.gu.xh(n);
    }, 
    /** Handles an error on a target */ t.prototype.bu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    e = t.cause, r = 0, i = t.targetIds, n.label = 1;

                  case 1:
                    return r < i.length ? (o = i[r], this.tu.has(o) ? [ 4 /*yield*/ , this.gu.Cu(o, e) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                  case 2:
                    n.sent(), this.tu.delete(o), this.eu.removeTarget(o), n.label = 3;

                  case 3:
                    n.label = 4;

                  case 4:
                    return r++, [ 3 /*break*/ , 1 ];

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Attempts to fill our write pipeline with writes from the LocalStore.
     *
     * Called internally to bootstrap or refill the write pipeline and by
     * SyncEngine whenever there are new mutations to process.
     *
     * Starts the write stream if necessary.
     */
    t.prototype.Iu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Du() ? (t = this.Za.length > 0 ? this.Za[this.Za.length - 1].batchId : -1, 
                    [ 4 /*yield*/ , this.Ja.eo(t) ]) : [ 3 /*break*/ , 5 ];

                  case 1:
                    return null !== (e = n.sent()) ? [ 3 /*break*/ , 2 ] : (0 === this.Za.length && this._u.ca(), 
                    [ 3 /*break*/ , 4 ]);

                  case 2:
                    return this.Fu(e), [ 4 /*yield*/ , this.Iu() ];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    n.label = 5;

                  case 5:
                    return this.Nu() && this.$u(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns true if we can add to the write pipeline (i.e. the network is
     * enabled and the write pipeline is not full).
     */
    t.prototype.Du = function() {
        return this.ru() && this.Za.length < 10;
    }, 
    // For testing
    t.prototype.Lu = function() {
        return this.Za.length;
    }, 
    /**
     * Queues additional writes to be sent to the write stream, sending them
     * immediately if the write stream is established.
     */
    t.prototype.Fu = function(t) {
        this.Za.push(t), this._u.oa() && this._u.ga && this._u.ba(t.mutations);
    }, t.prototype.Nu = function() {
        return this.ru() && !this._u.ha() && this.Za.length > 0;
    }, t.prototype.$u = function() {
        this._u.start();
    }, t.prototype.fu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this._u.Ca(), [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.wu = function() {
        var t = this;
        // Record the stream token.
                return this.Ja.qh(this._u.lastStreamToken).then((function() {
            // Send the write pipeline now that the stream is established.
            for (var e = 0, n = t.Za; e < n.length; e++) {
                var r = n[e];
                t._u.ba(r.mutations);
            }
        })).catch(tn);
    }, t.prototype.va = function(t, e) {
        var n = this, r = this.Za.shift(), i = Ce.from(r, t, e, this._u.lastStreamToken);
        return this.gu.ku(i).then((function() {
            return n.Iu();
        }));
    }, t.prototype.du = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return t && this.Za.length > 0 ? this._u.ga ? [ 4 /*yield*/ , this.Ou(t) ] : [ 3 /*break*/ , 2 ] : [ 3 /*break*/ , 5 ];

                  case 1:
                    // This error affects the actual write.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    // If there was an error before the handshake has finished, it's
                    // possible that the server is unable to process the stream token
                    // we're sending. (Perhaps it's too old?)
                    return [ 4 /*yield*/ , this.qu(t) ];

                  case 3:
                    // If there was an error before the handshake has finished, it's
                    // possible that the server is unable to process the stream token
                    // we're sending. (Perhaps it's too old?)
                    e.sent(), e.label = 4;

                  case 4:
                    // The write stream might have been started by refilling the write
                    // pipeline for failed writes
                    this.Nu() && this.$u(), e.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.qu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                // Reset the token if it's a permanent error, signaling the write stream is
                // no longer valid. Note that the handshake does not count as a write: see
                // comments on isPermanentWriteError for details.
                return jt(t.code) ? [ 2 /*return*/ , (Te("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this._u.lastStreamToken), 
                this._u.lastStreamToken = C$1.ht, this.Ja.qh(C$1.ht).catch(tn)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Ou = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                // Only handle permanent errors here. If it's transient, just let the retry
                // logic kick in.
                return jt(r = t.code) && r !== E$1.ABORTED ? (e = this.Za.shift(), [ 2 /*return*/ , (this._u.ua(), 
                this.gu.Mu(e.batchId, t).then((function() {
                    return i.Iu();
                }))) ]) : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.xu = function() {
        return new Xn(this.$a);
    }, t.prototype.hu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.networkEnabled = !1, [ 4 /*yield*/ , this.Ru() ];

                  case 1:
                    return t.sent(), this.ou.set("Unknown" /* Unknown */), [ 4 /*yield*/ , this.enableNetwork() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Bu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.ru() ? (
                    // Tear down and re-create our network streams. This will ensure we get a fresh auth token
                    // for the new user and re-fill the write pipeline with new mutations from the LocalStore
                    // (since mutations are per-user).
                    Te("RemoteStore", "RemoteStore restarting streams for new credential"), [ 4 /*yield*/ , this.hu() ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Toggles the network state when the client gains or loses its primary lease.
     */
    t.prototype.Uu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.isPrimary = t, t && this.networkEnabled ? [ 4 /*yield*/ , this.enableNetwork() ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), [ 3 /*break*/ , 5 ];

                  case 2:
                    return (e = t) ? [ 3 /*break*/ , 4 ] : [ 4 /*yield*/ , this.Ru() ];

                  case 3:
                    n.sent(), e = this.ou.set("Unknown" /* Unknown */), n.label = 4;

                  case 4:
                    n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), tr = /** @class */ function() {
    function t() {
        this.activeTargetIds = ie();
    }
    return t.prototype.Qu = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.Wu = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.ju = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.W(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), er = /** @class */ function() {
    function t() {
        this.Gu = new tr, this.Hu = {}, this.gu = null, this.Qa = null, this.Xn = null;
    }
    return t.prototype.Ku = function(t) {
        // No op.
    }, t.prototype.zu = function(t, e, n) {
        // No op.
    }, t.prototype.Yu = function(t) {
        return this.Gu.Qu(t), this.Hu[t] || "not-current";
    }, t.prototype.Xu = function(t, e, n) {
        this.Hu[t] = e;
    }, t.prototype.Ju = function(t) {
        this.Gu.Wu(t);
    }, t.prototype.Zu = function(t) {
        return this.Gu.activeTargetIds.has(t);
    }, t.prototype.tc = function(t) {
        delete this.Hu[t];
    }, t.prototype.ec = function() {
        return this.Gu.activeTargetIds;
    }, t.prototype.sc = function(t) {
        return this.Gu.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.Gu = new tr, Promise.resolve();
    }, t.prototype.Rh = function(t, e, n) {
        // No op.
    }, t.prototype.ic = function(t) {
        // No op.
    }, t.prototype.Pu = function() {}, t.prototype.tr = function(t) {}, t;
}(), nr = function(t) {
    this.key = t;
}, rr = function(t) {
    this.key = t;
}, ir = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.nc = e, this.rc = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.ds = !1, 
        /** Documents in the view but not in the remote target */
        this.hc = ne(), 
        /** Document Keys that have local changes */
        this.ns = ne(), this.oc = new oe(t.se.bind(t));
    }
    return Object.defineProperty(t.prototype, "ac", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.nc;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.uc = function(t, e) {
        var n = this, r = e ? e.cc : new se, i = e ? e.oc : this.oc, o = e ? e.ns : this.ns, s = i, u = !1, a = this.query.oe() && i.size === this.query.limit ? i.last() : null, h = this.query.ae() && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ye((function(t, e) {
            var c = i.get(t), f = e instanceof _t ? e : null;
            f && (f = n.query.matches(f) ? f : null);
            var l = !!c && n.ns.has(c.key), p = !!f && (f.At || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.ns.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            c && f ? c.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.lc(c, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.query.se(f, a) > 0 || h && n.query.se(f, h) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !c && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : c && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: c
            }), d = !0, (a || h) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), this.query.oe() || this.query.ae()) for (;s.size > this.query.limit; ) {
            var c = this.query.oe() ? s.last() : s.first();
            s = s.delete(c.key), o = o.delete(c.key), r.track({
                type: 1 /* Removed */ ,
                doc: c
            });
        }
        return {
            oc: s,
            cc: r,
            _c: u,
            ns: o
        };
    }, t.prototype.lc = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.At && e.hasCommittedMutations && !e.At;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.fc = function(t, e, n) {
        var r = this, i = this.oc;
        this.oc = t.oc, this.ns = t.ns;
        // Sort changes based on type and query comparator
        var o = t.cc.es();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return De();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.query.se(t.doc, e.doc);
        })), this.dc(n);
        var s = e ? this.wc() : [], u = 0 === this.hc.size && this.ds ? 1 /* Synced */ : 0 /* Local */ , a = u !== this.rc;
        return this.rc = u, 0 !== o.length || a ? {
            snapshot: new ue(this.query, t.oc, i, o, t.ns, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            Tc: s
        } : {
            Tc: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Ec = function(t) {
        return this.ds && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.ds = !1, this.fc({
            oc: this.oc,
            cc: new se,
            ns: this.ns,
            _c: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Tc: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.mc = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.nc.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.oc.has(t) && !this.oc.get(t).At;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.dc = function(t) {
        var e = this;
        t && (t.ws.forEach((function(t) {
            return e.nc = e.nc.add(t);
        })), t.Ts.forEach((function(t) {})), t.Es.forEach((function(t) {
            return e.nc = e.nc.delete(t);
        })), this.ds = t.ds);
    }, t.prototype.wc = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.ds) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.hc;
        this.hc = ne(), this.oc.forEach((function(e) {
            t.mc(e.key) && (t.hc = t.hc.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.hc.has(e) || n.push(new rr(e));
        })), this.hc.forEach((function(t) {
            e.has(t) || n.push(new nr(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Ic = function(t) {
        this.nc = t.lo, this.hc = ne();
        var e = this.uc(t.documents);
        return this.fc(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Rc = function() {
        return ue.os(this.query, this.oc, this.ns, 0 /* Local */ === this.rc);
    }, t;
}(), or = /** @class */ function() {
    function t(t, e, n, r) {
        this.Rr = t, this.Ac = e, this.updateFunction = n, this.Vr = r, this.Pc = 5, this.kr = new ze(this.Rr, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.Vc = function() {
        this.pc();
    }, t.prototype.pc = function() {
        var t = this;
        this.kr.lr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, e, r = this;
                return __generator(this, (function(n) {
                    return t = this.Ac.xu(), (e = this.yc(t)) && e.then((function(e) {
                        r.Rr.vr((function() {
                            return t.commit().then((function() {
                                r.Vr.resolve(e);
                            })).catch((function(t) {
                                r.gc(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.gc(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.yc = function(t) {
        try {
            var e = this.updateFunction(t);
            return !F$1(e) && e.catch && e.then ? e : (this.Vr.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Vr.reject(t), null;
        }
    }, t.prototype.gc = function(t) {
        var e = this;
        this.Pc > 0 && this.bc(t) ? (this.Pc -= 1, this.Rr.vr((function() {
            return e.pc(), Promise.resolve();
        }))) : this.Vr.reject(t);
    }, t.prototype.bc = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !jt(e);
        }
        return !1;
    }, t;
}(), sr = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, ur = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.vc = !1;
}, ar = /** @class */ function() {
    function t(t, e, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    n, r, i) {
        this.Ja = t, this.Ac = e, this.Sc = n, this.currentUser = r, this.Cc = i, this.Dc = null, 
        this.Fc = new Oe((function(t) {
            return t.canonicalId();
        })), this.Nc = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.$c = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Lc = new Bt(U$1.N), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.kc = new Map, this.Oc = new en, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.qc = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Mc = new Map, this.xc = Je.Ir(), this.onlineState = "Unknown" /* Unknown */;
    }
    return Object.defineProperty(t.prototype, "Bc", {
        get: function() {
            return !0;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /** Subscribes to SyncEngine notifications. Has to be called exactly once. */ t.prototype.subscribe = function(t) {
        this.Dc = t;
    }, 
    /**
     * Initiates the new listen, resolves promise when listen enqueued to the
     * server. All the subsequent view snapshots or errors are sent to the
     * subscribed handlers. Returns the initial snapshot.
     */
    t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Uc("listen()"), (i = this.Fc.get(t)) ? (
                    // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                    // already exists when EventManager calls us for the first time. This
                    // happens when the primary tab is already listening to this query on
                    // behalf of another tab and the user of the primary also starts listening
                    // to the query. EventManager will not have an assigned target ID in this
                    // case and calls `listen` to obtain this ID.
                    e = i.targetId, this.Sc.Yu(e), r = i.view.Rc(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , this.Ja.no(t.ee()) ];

                  case 2:
                    return o = n.sent(), s = this.Sc.Yu(o.targetId), e = o.targetId, [ 4 /*yield*/ , this.Qc(t, e, "current" === s) ];

                  case 3:
                    r = n.sent(), this.Bc && this.Ac.listen(o), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ , r ];
                }
            }));
        }));
    }, 
    /**
     * Registers a view for a previously unknown query and computes its initial
     * snapshot.
     */
    t.prototype.Qc = function(t, r, i) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, o, s, u, a, h;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.Ja.uo(t, 
                    /* usePreviousResults= */ !0) ];

                  case 1:
                    return e = n.sent(), o = new ir(t, e.lo), s = o.uc(e.documents), u = he.fs(r, i && "Offline" /* Offline */ !== this.onlineState), 
                    a = o.fc(s, 
                    /* updateLimboDocuments= */ this.Bc, u), this.Wc(r, a.Tc), h = new sr(t, r, o), 
                    [ 2 /*return*/ , (this.Fc.set(t, h), this.Nc.has(r) ? this.Nc.get(r).push(t) : this.Nc.set(r, [ t ]), 
                    a.snapshot) ];
                }
            }));
        }));
    }, 
    /** Stops listening to the query. */ t.prototype.pu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Only clean up the query view and target if this is the only query mapped
                    // to the target.
                    return this.Uc("unlisten()"), e = this.Fc.get(t), (r = this.Nc.get(e.targetId)).length > 1 ? [ 2 /*return*/ , (this.Nc.set(e.targetId, r.filter((function(e) {
                        return !e.isEqual(t);
                    }))), void this.Fc.delete(t)) ] : this.Bc ? (
                    // We need to remove the local query target first to allow us to verify
                    // whether any other client is still interested in this target.
                    this.Sc.Ju(e.targetId), this.Sc.sc(e.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , this.Ja.ao(e.targetId, /*keepPersistedTargetData=*/ !1).then((function() {
                        i.Sc.tc(e.targetId), i.Ac.pu(e.targetId), i.jc(e.targetId);
                    })).catch(tn) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    n.sent(), n.label = 2;

                  case 2:
                    return [ 3 /*break*/ , 5 ];

                  case 3:
                    return this.jc(e.targetId), [ 4 /*yield*/ , this.Ja.ao(e.targetId, 
                    /*keepPersistedTargetData=*/ !0) ];

                  case 4:
                    n.sent(), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Initiates the write of local mutation batch which involves adding the
     * writes to the mutation queue, notifying the remote store about new
     * mutations and raising events for any changes this write caused.
     *
     * The promise returned by this call is resolved when the above steps
     * have completed, *not* when the write was acked by the backend. The
     * userCallback is resolved once the write was acked/rejected by the
     * backend (or failed locally for any other reason).
     */
    t.prototype.write = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Uc("write()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , this.Ja.yh(t) ];

                  case 2:
                    return e = n.sent(), this.Sc.Ku(e.batchId), this.Gc(e.batchId, r), [ 4 /*yield*/ , this.Hc(e.bh) ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.Ac.Iu() ];

                  case 4:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 5:
                    return i = n.sent(), o = Xe(i, "Failed to persist write"), r.reject(o), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     *
     * The Deferred input is resolved when the transaction is fully committed.
     */
    t.prototype.runTransaction = function(t, e, n) {
        new or(t, this.Ac, e, n).Vc();
    }, t.prototype.xh = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Uc("applyRemoteEvent()"), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Ja.xh(t) ];

                  case 2:
                    return e = n.sent(), 
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    t.as.forEach((function(t, e) {
                        var n = r.kc.get(e);
                        n && (
                        // Since this is a limbo resolution lookup, it's for a single document
                        // and it could be added, modified, or removed, but not a combination.
                        ke(t.ws.size + t.Ts.size + t.Es.size <= 1), t.ws.size > 0 ? n.vc = !0 : t.Ts.size > 0 ? ke(n.vc) : t.Es.size > 0 && (ke(n.vc), 
                        n.vc = !1));
                    })), [ 4 /*yield*/ , this.Hc(e, t) ];

                  case 3:
                    // Update `receivedDocument` as appropriate for any limbo targets.
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , tn(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Applies an OnlineState change to the sync engine and notifies any views of
     * the change.
     */
    t.prototype.Ec = function(t, e) {
        this.Uc("applyOnlineStateChange()");
        var n = [];
        this.Fc.forEach((function(e, r) {
            var i = r.view.Ec(t);
            i.snapshot && n.push(i.snapshot);
        })), this.Dc.Kc(t), this.Dc.Pa(n), this.onlineState = t;
    }, t.prototype.Cu = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s, u, a = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Uc("rejectListens()"), 
                    // PORTING NOTE: Multi-tab only.
                    this.Sc.Xu(t, "rejected", r), e = this.kc.get(t), (i = e && e.key) ? (o = (o = new Bt(U$1.N)).Re(i, new Rt(i, k$1.min())), 
                    s = ne().add(i), u = new ae(k$1.min(), 
                    /* targetChanges= */ new Map, 
                    /* targetMismatches= */ new Wt(Le), o, s), [ 4 /*yield*/ , this.xh(u) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    return n.sent(), 
                    // Since this query failed, we won't want to manually unlisten to it.
                    // We only remove it from bookkeeping after we successfully applied the
                    // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                    // this query when the RemoteStore restarts the Watch stream, which should
                    // re-trigger the target failure.
                    this.Lc = this.Lc.remove(i), this.kc.delete(t), this.zc(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , this.Ja.ao(t, /* keepPersistedTargetData */ !1).then((function() {
                        return a.jc(t, r);
                    })).catch(tn) ];

                  case 3:
                    n.sent(), n.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.ku = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Uc("applySuccessfulWrite()"), e = t.batch.batchId, 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught
                    // up), so we raise user callbacks first so that they consistently happen
                    // before listen events.
                    this.Yc(e, /*error=*/ null), this.Xc(e), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Ja.vh(t) ];

                  case 2:
                    return r = n.sent(), this.Sc.zu(e, "acknowledged"), [ 4 /*yield*/ , this.Hc(r) ];

                  case 3:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , tn(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Mu = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Uc("rejectFailedWrite()"), 
                    // The local store may or may not be able to apply the write result and
                    // raise events immediately (depending on whether the watcher is caught up),
                    // so we raise user callbacks first so that they consistently happen before
                    // listen events.
                    this.Yc(t, r), this.Xc(t), n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , this.Ja.Nh(t) ];

                  case 2:
                    return e = n.sent(), this.Sc.zu(t, "rejected", r), [ 4 /*yield*/ , this.Hc(e) ];

                  case 3:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 4:
                    return [ 4 /*yield*/ , tn(n.sent()) ];

                  case 5:
                    return n.sent(), [ 3 /*break*/ , 6 ];

                  case 6:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Registers a user callback that resolves when all pending mutations at the moment of calling
     * are acknowledged .
     */
    t.prototype.Jc = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    this.Ac.ru() || Te("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Ja.kh() ];

                  case 2:
                    return -1 === (e = n.sent()) ? [ 2 /*return*/ , void t.resolve() ] : ((r = this.Mc.get(e) || []).push(t), 
                    this.Mc.set(e, r), [ 3 /*break*/ , 4 ]);

                  case 3:
                    return i = n.sent(), o = Xe(i, "Initialization of waitForPendingWrites() operation failed"), 
                    t.reject(o), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
     * if there are any.
     */
    t.prototype.Xc = function(t) {
        (this.Mc.get(t) || []).forEach((function(t) {
            t.resolve();
        })), this.Mc.delete(t);
    }, 
    /** Reject all outstanding callbacks waiting for pending writes to complete. */ t.prototype.Zc = function(t) {
        this.Mc.forEach((function(e) {
            e.forEach((function(e) {
                e.reject(new A$1(E$1.CANCELLED, t));
            }));
        })), this.Mc.clear();
    }, t.prototype.Gc = function(t, e) {
        var n = this.qc[this.currentUser.s()];
        n || (n = new Bt(Le)), n = n.Re(t, e), this.qc[this.currentUser.s()] = n;
    }, 
    /**
     * Resolves or rejects the user callback for the given batch and then discards
     * it.
     */
    t.prototype.Yc = function(t, e) {
        var n = this.qc[this.currentUser.s()];
        // NOTE: Mutations restored from persistence won't have callbacks, so it's
        // okay for there to be no callback for this ID.
                if (n) {
            var r = n.get(t);
            r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.qc[this.currentUser.s()] = n;
        }
    }, t.prototype.jc = function(t, e) {
        var n = this;
        void 0 === e && (e = null), this.Sc.Ju(t);
        for (var r = 0, i = this.Nc.get(t); r < i.length; r++) {
            var o = i[r];
            this.Fc.delete(o), e && this.Dc.tl(o, e);
        }
        this.Nc.delete(t), this.Bc && this.Oc.Ao(t).forEach((function(t) {
            n.Oc.po(t) || 
            // We removed the last reference for this key
            n.el(t);
        }));
    }, t.prototype.el = function(t) {
        // It's possible that the target already got removed because the query failed. In that case,
        // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
        var e = this.Lc.get(t);
        null !== e && (this.Ac.pu(e), this.Lc = this.Lc.remove(t), this.kc.delete(e), this.zc());
    }, t.prototype.Wc = function(t, e) {
        for (var n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i instanceof nr ? (this.Oc.Zh(i.key, t), this.sl(i)) : i instanceof rr ? (Te("SyncEngine", "Document no longer in limbo: " + i.key), 
            this.Oc.to(i.key, t), this.Oc.po(i.key) || 
            // We removed the last reference for this key
            this.el(i.key)) : De();
        }
    }, t.prototype.sl = function(t) {
        var e = t.key;
        this.Lc.get(e) || (Te("SyncEngine", "New document in limbo: " + e), this.$c.push(e), 
        this.zc());
    }, 
    /**
     * Starts listens for documents in limbo that are enqueued for resolution,
     * subject to a maximum number of concurrent resolutions.
     *
     * Without bounding the number of concurrent resolutions, the server can fail
     * with "resource exhausted" errors which can lead to pathological client
     * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
     */
    t.prototype.zc = function() {
        for (;this.$c.length > 0 && this.Lc.size < this.Cc; ) {
            var t = this.$c.shift(), e = this.xc.next();
            this.kc.set(e, new ur(t)), this.Lc = this.Lc.Re(t, e), this.Ac.listen(new Ft(Vt.Wt(t.path).ee(), e, 2 /* LimboResolution */ , Ge.er));
        }
    }, 
    // Visible for testing
    t.prototype.il = function() {
        return this.Lc;
    }, 
    // Visible for testing
    t.prototype.nl = function() {
        return this.$c;
    }, t.prototype.Hc = function(t, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, i, o, s = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = [], i = [], o = [], this.Fc.forEach((function(n, u) {
                        o.push(Promise.resolve().then((function() {
                            var e = u.view.uc(t);
                            return e._c ? s.Ja.uo(u.query, /* usePreviousResults= */ !1).then((function(t) {
                                var n = t.documents;
                                return u.view.uc(n, e);
                            })) : e;
                            // The query has a limit and some docs were removed, so we need
                            // to re-run the query against the local store to make sure we
                            // didn't lose any good docs that had been past the limit.
                                                })).then((function(t) {
                            var n = r && r.as.get(u.targetId), o = u.view.fc(t, 
                            /* updateLimboDocuments= */ s.Bc, n);
                            if (s.Wc(u.targetId, o.Tc), o.snapshot) {
                                s.Bc && s.Sc.Xu(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), e.push(o.snapshot);
                                var a = je.Yn(u.targetId, o.snapshot);
                                i.push(a);
                            }
                        })));
                    })), [ 4 /*yield*/ , Promise.all(o) ];

                  case 1:
                    return n.sent(), this.Dc.Pa(e), [ 4 /*yield*/ , this.Ja.Jh(i) ];

                  case 2:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Uc = function(t) {}, t.prototype.Bu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return e = !this.currentUser.isEqual(t), this.currentUser = t, e ? (
                    // Fails tasks waiting for pending writes requested by previous user.
                    this.Zc("'waitForPendingWrites' promise is rejected due to a user change."), [ 4 /*yield*/ , this.Ja.Rh(t) ]) : [ 3 /*break*/ , 3 ];

                  case 1:
                    return r = n.sent(), 
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    this.Sc.Rh(t, r.Vh, r.ph), [ 4 /*yield*/ , this.Hc(r.Ph) ];

                  case 2:
                    // TODO(b/114226417): Consider calling this only in the primary tab.
                    n.sent(), n.label = 3;

                  case 3:
                    return [ 4 /*yield*/ , this.Ac.Bu() ];

                  case 4:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.enableNetwork = function() {
        return this.Ac.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.Ac.disableNetwork();
    }, t.prototype.ei = function(t) {
        var e = this.kc.get(t);
        if (e && e.vc) return ne().add(e.key);
        var n = ne(), r = this.Nc.get(t);
        if (!r) return n;
        for (var i = 0, o = r; i < o.length; i++) {
            var s = o[i], u = this.Fc.get(s);
            n = n.ze(u.view.ac);
        }
        return n;
    }, t;
}(), hr = function() {
    this.rl = void 0, this.hl = [];
}, cr = /** @class */ function() {
    function t(t) {
        this.gu = t, this.ol = new Oe((function(t) {
            return t.canonicalId();
        })), this.onlineState = "Unknown" /* Unknown */ , this.al = new Set, this.gu.subscribe(this);
    }
    return t.prototype.listen = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o, s, u;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (e = t.query, r = !1, (i = this.ol.get(e)) || (r = !0, i = new hr), !r) return [ 3 /*break*/ , 4 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), o = i, [ 4 /*yield*/ , this.gu.listen(e) ];

                  case 2:
                    return o.rl = n.sent(), [ 3 /*break*/ , 4 ];

                  case 3:
                    return s = n.sent(), u = Xe(s, "Initialization of query '" + t.query + "' failed"), 
                    [ 2 /*return*/ , void t.onError(u) ];

                  case 4:
                    return this.ol.set(e, i), i.hl.push(t), 
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    t.Ec(this.onlineState), i.rl && t.ul(i.rl) && this.cl(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.pu = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, r, i, o;
            return __generator(this, (function(n) {
                return e = t.query, r = !1, (i = this.ol.get(e)) && (o = i.hl.indexOf(t)) >= 0 && (i.hl.splice(o, 1), 
                r = 0 === i.hl.length), r ? [ 2 /*return*/ , (this.ol.delete(e), this.gu.pu(e)) ] : [ 2 /*return*/ ];
            }));
        }));
    }, t.prototype.Pa = function(t) {
        for (var e = !1, n = 0, r = t; n < r.length; n++) {
            var i = r[n], o = i.query, s = this.ol.get(o);
            if (s) {
                for (var u = 0, a = s.hl; u < a.length; u++) {
                    a[u].ul(i) && (e = !0);
                }
                s.rl = i;
            }
        }
        e && this.cl();
    }, t.prototype.tl = function(t, e) {
        var n = this.ol.get(t);
        if (n) for (var r = 0, i = n.hl; r < i.length; r++) {
            i[r].onError(e);
        }
        // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
        // after an error.
                this.ol.delete(t);
    }, t.prototype.Kc = function(t) {
        this.onlineState = t;
        var e = !1;
        this.ol.forEach((function(n, r) {
            for (var i = 0, o = r.hl; i < o.length; i++) {
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                o[i].Ec(t) && (e = !0);
            }
        })), e && this.cl();
    }, t.prototype.ll = function(t) {
        this.al.add(t), 
        // Immediately fire an initial event, indicating all existing listeners
        // are in-sync.
        t.next();
    }, t.prototype._l = function(t) {
        this.al.delete(t);
    }, 
    // Call all global snapshot listeners that have been set.
    t.prototype.cl = function() {
        this.al.forEach((function(t) {
            t.next();
        }));
    }, t;
}(), fr = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.fl = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.dl = !1, this.wl = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.ul = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new ue(t.query, t.docs, t.ss, e, t.ns, t.fromCache, t.rs, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.dl ? this.Tl(t) && (this.fl.next(t), o = !0) : this.El(t, this.onlineState) && (this.ml(t), 
        o = !0), this.wl = t, o;
    }, t.prototype.onError = function(t) {
        this.fl.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Ec = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.wl && !this.dl && this.El(this.wl, t) && (this.ml(this.wl), e = !0), 
        e;
    }, t.prototype.El = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.Il && n || t.docs.M() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Tl = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.wl && this.wl.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.rs && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.ml = function(t) {
        t = ue.os(t.query, t.docs, t.ns, t.fromCache), this.dl = !0, this.fl.next(t);
    }, t;
}(), lr = /** @class */ function() {
    function t() {}
    return t.prototype.Ih = function(t) {
        this.Rl = t;
    }, t.prototype.Bn = function(t, e, n, r) {
        var i = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return e.te() || n.isEqual(k$1.min()) ? this.Al(t, e) : this.Rl.qn(t, r).next((function(o) {
            var u = i.Pl(e, o);
            return (e.oe() || e.ae()) && i._c(e.xt, u, r, n) ? i.Al(t, e) : (Ie() <= LogLevel.DEBUG && Te("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), e.toString()), 
            i.Rl.Bn(t, e, n).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.Re(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Pl = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Wt((function(e, n) {
            return t.se(e, n);
        }));
        return e.forEach((function(e, r) {
            r instanceof _t && t.matches(r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype._c = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.S(r) > 0);
    }, t.prototype.Al = function(t, e) {
        return Ie() <= LogLevel.DEBUG && Te("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), 
        this.Rl.Bn(t, e, k$1.min());
    }, t;
}(), pr = /** @class */ function() {
    function t(t, e) {
        this.Fn = t, this.zh = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.Dn = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Vl = 1, 
        /** The last received stream token from the server, used to acknowledge which
             * responses the client has processed. Stream tokens are opaque checkpoint
             * markers whose only real value is their inclusion in the next request.
             */
        this.lastStreamToken = C$1.ht, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.pl = new Wt(nn.wo);
    }
    return t.prototype.yl = function(t) {
        return Fe.resolve(0 === this.Dn.length);
    }, t.prototype.vh = function(t, e, n) {
        var r = e.batchId, i = this.gl(r, "acknowledged");
        return ke(0 === i), 
        // Verify that the batch in the queue is the one to be acknowledged.
        this.Dn[i], this.lastStreamToken = n, Fe.resolve();
    }, t.prototype.Oh = function(t) {
        return Fe.resolve(this.lastStreamToken);
    }, t.prototype.qh = function(t, e) {
        return this.lastStreamToken = e, Fe.resolve();
    }, t.prototype.gh = function(t, e, n, r) {
        var i = this.Vl;
        this.Vl++, this.Dn.length > 0 && this.Dn[this.Dn.length - 1];
        var o = new Pe(i, e, n, r);
        this.Dn.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.pl = this.pl.add(new nn(a.key, i)), this.Fn.Tr(t, a.key.path.k());
        }
        return Fe.resolve(o);
    }, t.prototype.$h = function(t, e) {
        return Fe.resolve(this.bl(e));
    }, t.prototype.so = function(t, e) {
        var n = e + 1, r = this.vl(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return Fe.resolve(this.Dn.length > i ? this.Dn[i] : null);
    }, t.prototype.kh = function() {
        return Fe.resolve(0 === this.Dn.length ? -1 : this.Vl - 1);
    }, t.prototype.Ah = function(t) {
        return Fe.resolve(this.Dn.slice());
    }, t.prototype.$n = function(t, e) {
        var n = this, r = new nn(e, 0), i = new nn(e, Number.POSITIVE_INFINITY), o = [];
        return this.pl.Ge([ r, i ], (function(t) {
            var e = n.bl(t.yo);
            o.push(e);
        })), Fe.resolve(o);
    }, t.prototype.xn = function(t, e) {
        var n = this, r = new Wt(Le);
        return e.forEach((function(t) {
            var e = new nn(t, 0), i = new nn(t, Number.POSITIVE_INFINITY);
            n.pl.Ge([ e, i ], (function(t) {
                r = r.add(t.yo);
            }));
        })), Fe.resolve(this.Sl(r));
    }, t.prototype.Gn = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                U$1.et(i) || (i = i.child(""));
        var o = new nn(new U$1(i), 0), s = new Wt(Le);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.pl.He((function(t) {
            var e = t.key.path;
            return !!n.B(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.yo)), !0);
        }), o), Fe.resolve(this.Sl(s));
    }, t.prototype.Sl = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.bl(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Lh = function(t, e) {
        var n = this;
        ke(0 === this.gl(e.batchId, "removed")), this.Dn.shift();
        var r = this.pl;
        return Fe.forEach(e.mutations, (function(i) {
            var o = new nn(i.key, e.batchId);
            return r = r.delete(o), n.zh.Cl(t, i.key);
        })).next((function() {
            n.pl = r;
        }));
    }, t.prototype.Dl = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.po = function(t, e) {
        var n = new nn(e, 0), r = this.pl.Ke(n);
        return Fe.resolve(e.isEqual(r && r.key));
    }, t.prototype.Fh = function(t) {
        return this.Dn.length, Fe.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.gl = function(t, e) {
        return this.vl(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.vl = function(t) {
        return 0 === this.Dn.length ? 0 : t - this.Dn[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.bl = function(t) {
        var e = this.vl(t);
        return e < 0 || e >= this.Dn.length ? null : this.Dn[e];
    }, t;
}(), dr = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.Fn = t, this.Fl = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new Bt(U$1.N), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Hh = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.Fl(e);
        return this.docs = this.docs.Re(r, {
            Nl: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.Fn.Tr(t, r.path.k());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Gh = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.kn = function(t, e) {
        var n = this.docs.get(e);
        return Fe.resolve(n ? n.Nl : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = Zt();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.Re(t, e ? e.Nl : null);
        })), Fe.resolve(r);
    }, t.prototype.Bn = function(t, e, n) {
        for (var r = Kt(), i = new U$1(e.path.child("")), o = this.docs.ve(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.$e(); ) {
            var s = o.Ne(), u = s.key, a = s.value, h = a.Nl, c = a.readTime;
            if (!e.path.B(u.path)) break;
            c.S(n) <= 0 || h instanceof _t && e.matches(h) && (r = r.Re(h.key, h));
        }
        return Fe.resolve(r);
    }, t.prototype.$l = function(t, e) {
        return Fe.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Sh = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.Ll(this);
    }, t.prototype.kl = function(t) {
        return Fe.resolve(this.size);
    }, t;
}();

/**
 * A PersistentStream that implements the Listen RPC.
 *
 * Once the Listen stream has called the onOpen() listener, any number of
 * listen() and unlisten() calls can be made to control what changes will be
 * sent from the server for ListenResponses.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
dr.Ll = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Ul = t, n;
    }
    return __extends(n, e), n.prototype.fc = function(t) {
        var e = this, n = [];
        return this.bh.forEach((function(r, i) {
            i ? n.push(e.Ul.Hh(t, i, e.readTime)) : e.Ul.Gh(r);
        })), Fe.vn(n);
    }, n.prototype.xl = function(t, e) {
        return this.Ul.kn(t, e);
    }, n.prototype.Bl = function(t, e) {
        return this.Ul.getEntries(t, e);
    }, n;
}(/** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.bh = new Oe((function(t) {
            return t.toString();
        })), this.Ol = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.ql;
        },
        set: function(t) {
            this.ql = t;
        },
        enumerable: !0,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Hh = function(t, e) {
        this.Ml(), this.readTime = e, this.bh.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Gh = function(t, e) {
        this.Ml(), e && (this.readTime = e), this.bh.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.kn = function(t, e) {
        this.Ml();
        var n = this.bh.get(e);
        return void 0 !== n ? Fe.resolve(n) : this.xl(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.Bl(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Ml(), this.Ol = !0, this.fc(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Ml = function() {}, 
    t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yr = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.Ql = new Oe((function(t) {
            return t.canonicalId();
        })), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = k$1.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.Wl = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.jl = new en, this.targetCount = 0, this.Gl = Je.mr();
    }
    return t.prototype.js = function(t, e) {
        return this.Ql.forEach((function(t, n) {
            return e(n);
        })), Fe.resolve();
    }, t.prototype.Mh = function(t) {
        return Fe.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Hl = function(t) {
        return Fe.resolve(this.Wl);
    }, t.prototype.ho = function(t) {
        return this.highestTargetId = this.Gl.next(), Fe.resolve(this.highestTargetId);
    }, t.prototype.Yh = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.Wl && (this.Wl = e), 
        Fe.resolve();
    }, t.prototype.Kl = function(t) {
        this.Ql.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.Gl = new Je(e), this.highestTargetId = e), t.sequenceNumber > this.Wl && (this.Wl = t.sequenceNumber);
    }, t.prototype.oo = function(t, e) {
        return this.Kl(e), this.targetCount += 1, Fe.resolve();
    }, t.prototype.jh = function(t, e) {
        return this.Kl(e), Fe.resolve();
    }, t.prototype.zl = function(t, e) {
        return this.Ql.delete(e.target), this.jl.Ao(e.targetId), this.targetCount -= 1, 
        Fe.resolve();
    }, t.prototype.Yl = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.Ql.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Ql.delete(s), o.push(r.Xl(t, u.targetId)), 
            i++);
        })), Fe.vn(o).next((function() {
            return i;
        }));
    }, t.prototype.Jl = function(t) {
        return Fe.resolve(this.targetCount);
    }, t.prototype.ro = function(t, e) {
        var n = this.Ql.get(e) || null;
        return Fe.resolve(n);
    }, t.prototype.Uh = function(t, e, n) {
        return this.jl.mo(e, n), Fe.resolve();
    }, t.prototype.Bh = function(t, e, n) {
        this.jl.Ro(e, n);
        var r = this.persistence.zh, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Cl(t, e));
        })), Fe.vn(i);
    }, t.prototype.Xl = function(t, e) {
        return this.jl.Ao(e), Fe.resolve();
    }, t.prototype.co = function(t, e) {
        var n = this.jl.Vo(e);
        return Fe.resolve(n);
    }, t.prototype.po = function(t, e) {
        return Fe.resolve(this.jl.po(e));
    }, t;
}(), vr = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this.Zl = {}, this.t_ = new Ge(0), this.e_ = !1, this.e_ = !0, this.zh = t(this), 
        this.wh = new yr(this), this.Fn = new Qe, this.Cn = new dr(this.Fn, (function(t) {
            return e.zh.s_(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Pu = function() {
        // No durable state to ensure is closed on shutdown.
        return this.e_ = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "i_", {
        get: function() {
            return this.e_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.n_ = function() {
        // No op.
    }, t.prototype.mh = function() {
        return this.Fn;
    }, t.prototype._h = function(t) {
        var e = this.Zl[t.s()];
        return e || (e = new pr(this.Fn, this.zh), this.Zl[t.s()] = e), e;
    }, t.prototype.Th = function() {
        return this.wh;
    }, t.prototype.dh = function() {
        return this.Cn;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        Te("MemoryPersistence", "Starting transaction:", t);
        var i = new mr(this.t_.next());
        return this.zh.r_(), n(i).next((function(t) {
            return r.zh.h_(i).next((function() {
                return t;
            }));
        })).gn().then((function(t) {
            return i.o_(), t;
        }));
    }, t.prototype.a_ = function(t, e) {
        return Fe.Sn(Object.values(this.Zl).map((function(n) {
            return function() {
                return n.po(t, e);
            };
        })));
    }, t;
}(), mr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Qh = t, n;
    }
    /**
     * A base class representing a persistence transaction, encapsulating both the
     * transaction's sequence numbers as well as a list of onCommitted listeners.
     *
     * When you call Persistence.runTransaction(), it will create a transaction and
     * pass it to your callback. You then pass it to any method that operates
     * on persistence.
     */
    return __extends(n, e), n;
}(/** @class */ function() {
    function t() {
        this.u_ = [];
    }
    return t.prototype.c_ = function(t) {
        this.u_.push(t);
    }, t.prototype.o_ = function() {
        this.u_.forEach((function(t) {
            return t();
        }));
    }, t;
}()), gr = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.l_ = new en, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.__ = null;
    }
    return t.f_ = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "d_", {
        get: function() {
            if (this.__) return this.__;
            throw De();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.Zh = function(t, e, n) {
        return this.l_.Zh(n, e), this.d_.delete(n), Fe.resolve();
    }, t.prototype.to = function(t, e, n) {
        return this.l_.to(n, e), this.d_.add(n), Fe.resolve();
    }, t.prototype.Cl = function(t, e) {
        return this.d_.add(e), Fe.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.l_.Ao(e.targetId).forEach((function(t) {
            return n.d_.add(t);
        }));
        var r = this.persistence.Th();
        return r.co(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.d_.add(t);
            }));
        })).next((function() {
            return r.zl(t, e);
        }));
    }, t.prototype.r_ = function() {
        this.__ = new Set;
    }, t.prototype.h_ = function(t) {
        var e = this, n = this.persistence.dh().Sh();
        // Remove newly orphaned documents.
                return Fe.forEach(this.d_, (function(r) {
            return e.w_(t, r).next((function(t) {
                t || n.Gh(r);
            }));
        })).next((function() {
            return e.__ = null, n.apply(t);
        }));
    }, t.prototype.Kh = function(t, e) {
        var n = this;
        return this.w_(t, e).next((function(t) {
            t ? n.d_.delete(e) : n.d_.add(e);
        }));
    }, t.prototype.s_ = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.w_ = function(t, e) {
        var n = this;
        return Fe.Sn([ function() {
            return Fe.resolve(n.l_.po(e));
        }, function() {
            return n.persistence.Th().po(t, e);
        }, function() {
            return n.persistence.a_(t, e);
        } ]);
    }, t;
}(), wr = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.Sc = this.T_(t), this.persistence = this.E_(t), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return n.sent(), this.m_ = this.I_(t), this.Ja = this.R_(t), this.Ac = this.A_(t), 
                    this.gu = this.P_(t), this.V_ = this.p_(t), this.Sc.Qa = function(t) {
                        return e.gu.Ec(t, 1 /* SharedClientState */);
                    }, this.Ac.gu = this.gu, [ 4 /*yield*/ , this.Ja.start() ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.Sc.start() ];

                  case 3:
                    return n.sent(), [ 4 /*yield*/ , this.Ac.start() ];

                  case 4:
                    return n.sent(), [ 4 /*yield*/ , this.Ac.Uu(this.gu.Bc) ];

                  case 5:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.p_ = function(t) {
        return new cr(this.gu);
    }, t.prototype.I_ = function(t) {
        return null;
    }, t.prototype.R_ = function(t) {
        return new $e(this.persistence, new lr, t.y_);
    }, t.prototype.E_ = function(t) {
        return new vr(gr.f_);
    }, t.prototype.A_ = function(t) {
        var e = this;
        return new $n(this.Ja, t.$a, t.Rr, (function(t) {
            return e.gu.Ec(t, 0 /* RemoteStore */);
        }), t.platform.g_());
    }, t.prototype.T_ = function(t) {
        return new er;
    }, t.prototype.P_ = function(t) {
        return new ar(this.Ja, this.Ac, this.Sc, t.y_, t.Cc);
    }, t.prototype.clearPersistence = function(t) {
        throw new A$1(E$1.FAILED_PRECONDITION, "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.");
    }, t;
}(), br = /** @class */ function() {
    function t(t, e, n, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    r) {
        this.platform = t, this.b_ = e, this.credentials = n, this.Rr = r, this.clientId = Se.cn()
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param componentProvider Provider that returns all core components.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return t.prototype.start = function(t, e) {
        var n = this;
        this.v_();
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        var r = new Be, i = new Be, o = !1;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
                // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials._((function(s) {
            if (!o) return o = !0, Te("FirestoreClient", "Initializing. user=", s.uid), n.S_(t, e, s, i).then(r.resolve, r.reject);
            n.Rr.vr((function() {
                return n.Bu(s);
            }));
        })), 
        // Block the async queue until initialization is done
        this.Rr.vr((function() {
            return r.promise;
        })), i.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ t.prototype.enableNetwork = function() {
        var t = this;
        return this.v_(), this.Rr.enqueue((function() {
            return t.gu.enableNetwork();
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param componentProvider The provider that provides all core componennts
     *     for IndexedDB or memory-backed persistence
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    t.prototype.S_ = function(t, r, i, o) {
        return __awaiter(this, void 0, void 0, (function() {
            var s, u, a, h, c = this;
            return __generator(this, (function(f) {
                switch (f.label) {
                  case 0:
                    return f.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , this.platform.C_(this.b_) ];

                  case 1:
                    return s = f.sent(), u = this.platform.Go(this.b_.ii), a = function(t, e, n) {
                        return new Zn(t, e, n);
                    }(s, this.credentials, u), [ 4 /*yield*/ , t.initialize({
                        Rr: this.Rr,
                        b_: this.b_,
                        platform: this.platform,
                        $a: a,
                        clientId: this.clientId,
                        y_: i,
                        Cc: 100,
                        D_: r
                    }) ];

                  case 2:
                    return f.sent(), this.persistence = t.persistence, this.Sc = t.Sc, this.Ja = t.Ja, 
                    this.Ac = t.Ac, this.gu = t.gu, this.m_ = t.m_, this.F_ = t.V_, 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.n_((function() {
                        return __awaiter(c, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), o.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (h = f.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    o.reject(h), !this.N_(h)) throw h;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + h), 
                    this.S_(new wr, {
                        L_: !1
                    }, i, o)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    t.prototype.N_ = function(t) {
        return "FirebaseError" === t.name ? t.code === E$1.FAILED_PRECONDITION || t.code === E$1.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.v_ = function() {
        if (this.Rr.Mr) throw new A$1(E$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.Bu = function(t) {
        return this.Rr.Hr(), Te("FirestoreClient", "Credential Changed. Current user: " + t.uid), 
        this.gu.Bu(t);
    }, 
    /** Disables the network connection. Pending operations will not complete. */ t.prototype.disableNetwork = function() {
        var t = this;
        return this.v_(), this.Rr.enqueue((function() {
            return t.gu.disableNetwork();
        }));
    }, t.prototype.terminate = function() {
        var t = this;
        return this.Rr.Wr((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return this.m_ && this.m_.stop(), [ 4 /*yield*/ , this.Ac.Pu() ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Sc.Pu() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.Pu() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.T(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    t.prototype.waitForPendingWrites = function() {
        var t = this;
        this.v_();
        var e = new Be;
        return this.Rr.vr((function() {
            return t.gu.Jc(e);
        })), e.promise;
    }, t.prototype.listen = function(t, e, n) {
        var r = this;
        this.v_();
        var i = new fr(t, e, n);
        return this.Rr.vr((function() {
            return r.F_.listen(i);
        })), i;
    }, t.prototype.pu = function(t) {
        var e = this;
        // Checks for termination but does not raise error, allowing unlisten after
        // termination to be a no-op.
                this.k_ || this.Rr.vr((function() {
            return e.F_.pu(t);
        }));
    }, t.prototype.O_ = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.v_(), r = new Be, [ 4 /*yield*/ , this.Rr.enqueue((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            var e, i, o;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.Ja.io(t) ];

                                  case 1:
                                    return (e = n.sent()) instanceof _t ? r.resolve(e) : e instanceof Rt ? r.resolve(null) : r.reject(new A$1(E$1.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                    [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return i = n.sent(), o = Xe(i, "Failed to get document '" + t + " from cache"), 
                                    r.reject(o), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (o.sent(), r.promise) ];
                }
            }));
        }));
    }, t.prototype.q_ = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return this.v_(), r = new Be, [ 4 /*yield*/ , this.Rr.enqueue((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            var e, i, o, s, u, a;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return n.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.Ja.uo(t, 
                                    /* usePreviousResults= */ !0) ];

                                  case 1:
                                    return e = n.sent(), i = new ir(t, e.lo), o = i.uc(e.documents), s = i.fc(o, 
                                    /* updateLimboDocuments= */ !1), r.resolve(s.snapshot), [ 3 /*break*/ , 3 ];

                                  case 2:
                                    return u = n.sent(), a = Xe(u, "Failed to execute query '" + t + " against cache"), 
                                    r.reject(a), [ 3 /*break*/ , 3 ];

                                  case 3:
                                    return [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 1:
                    return [ 2 /*return*/ , (o.sent(), r.promise) ];
                }
            }));
        }));
    }, t.prototype.write = function(t) {
        var e = this;
        this.v_();
        var n = new Be;
        return this.Rr.vr((function() {
            return e.gu.write(t, n);
        })), n.promise;
    }, t.prototype.ii = function() {
        return this.b_.ii;
    }, t.prototype.ll = function(t) {
        var e = this;
        this.v_(), this.Rr.vr((function() {
            return e.F_.ll(t), Promise.resolve();
        }));
    }, t.prototype._l = function(t) {
        var e = this;
        // Checks for shutdown but does not raise error, allowing remove after
        // shutdown to be a no-op.
                this.k_ || this.Rr.vr((function() {
            return e.F_._l(t), Promise.resolve();
        }));
    }, Object.defineProperty(t.prototype, "k_", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.Rr.Mr;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.transaction = function(t) {
        var e = this;
        this.v_();
        var n = new Be;
        return this.Rr.vr((function() {
            return e.gu.runTransaction(e.Rr, t, n), Promise.resolve();
        })), n.promise;
    }, t;
}(), Er = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.M_(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.M_(this.observer.error, t);
    }, t.prototype.x_ = function() {
        this.muted = !0;
    }, t.prototype.M_ = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ar(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Ir = /** @class */ function() {
    function t(t, e, n, r) {
        this.firestore = t, this.timestampsInSnapshots = e, this.B_ = n, this.converter = r;
    }
    return t.prototype.U_ = function(t) {
        switch (z(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return X$1(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.Q_(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.W_(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return new Nn(K$1(t.bytesValue));

          case 7 /* RefValue */ :
            return this.j_(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.G_(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.H_(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.K_(t.mapValue);

          default:
            throw De();
        }
    }, t.prototype.K_ = function(t) {
        var e = this, n = {};
        return O$1(t.fields || {}, (function(t, r) {
            n[t] = e.U_(r);
        })), n;
    }, t.prototype.G_ = function(t) {
        return new Mn(X$1(t.latitude), X$1(t.longitude));
    }, t.prototype.H_ = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.U_(t);
        }));
    }, t.prototype.W_ = function(t) {
        switch (this.B_) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return j(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.U_(e);

          case "estimate":
            return this.Q_(G$1(t));

          default:
            return null;
        }
    }, t.prototype.Q_ = function(t) {
        var e = Z$1(t), n = new D(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.j_ = function(t) {
        var e = S$1.G(t);
        ke(be(e));
        var n = new qe(e.get(1), e.get(3)), r = new U$1(e.L(5));
        return n.isEqual(this.firestore.Zo) || 
        // TODO(b/64130202): Somehow support foreign references.
        _e("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.firestore.Zo.projectId + "/" + this.firestore.Zo.database + ") instead."), 
        new kr(r, this.firestore, this.converter);
    }, t;
}(), Nr = Ke.ih, Tr = /** @class */ function() {
    function t(t) {
        var e, n;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new A$1(E$1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else cn("settings", "non-empty string", "host", t.host), this.host = t.host, fn("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (mn("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling" ]), 
        fn("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        fn("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? _e("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && _e("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        fn("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = Ke.rh; else {
            if (t.cacheSizeBytes !== Nr && t.cacheSizeBytes < Ke.nh) throw new A$1(E$1.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + Ke.nh);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        fn("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling;
    }, t;
}(), _r = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function t(r, i, o) {
        var s = this;
        if (void 0 === o && (o = new wr), this.z_ = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.Y_ = new Ze, this.INTERNAL = {
            delete: function() {
                return __awaiter(s, void 0, void 0, (function() {
                    return __generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.X_(), [ 4 /*yield*/ , this.J_.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof r.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var u = r;
            this.z_ = u, this.Zo = t.Z_(u), this.tf = u.name, this.ef = new T$1(i);
        } else {
            var a = r;
            if (!a.projectId) throw new A$1(E$1.INVALID_ARGUMENT, "Must provide projectId");
            this.Zo = new qe(a.projectId, a.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.tf = "[DEFAULT]", this.ef = new N$1;
        }
        this.sf = o, this.if = new Tr({}), this.nf = new Fn(this.Zo);
    }
    return t.prototype.settings = function(t) {
        on("Firestore.settings", arguments, 1), an("Firestore.settings", "object", 1, t);
        var e = new Tr(t);
        if (this.J_ && !this.if.isEqual(e)) throw new A$1(E$1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.if = e, void 0 !== e.credentials && (this.ef = function(t) {
            if (!t) return new N$1;
            switch (t.type) {
              case "gapi":
                var e = t.rf;
                // Make sure this really is a Gapi client.
                                return ke(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new R$1(e, t.V || "0");

              case "provider":
                return t.rf;

              default:
                throw new A$1(E$1.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, t.prototype.enableNetwork = function() {
        return this.X_(), this.J_.enableNetwork();
    }, t.prototype.disableNetwork = function() {
        return this.X_(), this.J_.disableNetwork();
    }, t.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.J_) throw new A$1(E$1.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1;
        return t && (void 0 !== t.experimentalTabSynchronization && _e("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n), 
        this.hf(this.sf, {
            L_: !0,
            cacheSizeBytes: this.if.cacheSizeBytes,
            synchronizeTabs: r
        });
    }, t.prototype.clearPersistence = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, r = this;
            return __generator(this, (function(i) {
                if (void 0 !== this.J_ && !this.J_.k_) throw new A$1(E$1.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized.");
                return t = new Be, [ 2 /*return*/ , (this.Y_.xr((function() {
                    return __awaiter(r, void 0, void 0, (function() {
                        var e, r;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return n.trys.push([ 0, 2, , 3 ]), e = this.af(), [ 4 /*yield*/ , this.sf.clearPersistence(e) ];

                              case 1:
                                return n.sent(), t.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return r = n.sent(), t.reject(r), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), t.promise) ];
            }));
        }));
    }, t.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(t.prototype, "uf", {
        get: function() {
            return this.X_(), this.J_.k_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.waitForPendingWrites = function() {
        return this.X_(), this.J_.waitForPendingWrites();
    }, t.prototype.onSnapshotsInSync = function(t) {
        if (this.X_(), Ar(t)) return this.cf(t);
        an("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.cf(e);
    }, t.prototype.cf = function(t) {
        var e = this, n = new Er({
            next: function() {
                t.next && t.next();
            },
            error: function(t) {
                throw De();
            }
        });
        return this.J_.ll(n), function() {
            n.x_(), e.J_._l(n);
        };
    }, t.prototype.X_ = function() {
        return this.J_ || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.hf(new wr, {
            L_: !1
        }), this.J_;
    }, t.prototype.af = function() {
        return new Ue(this.Zo, this.tf, this.if.host, this.if.ssl, this.if.forceLongPolling);
    }, t.prototype.hf = function(t, e) {
        var n = this.af();
        return this.J_ = new br(Ee.nt(), n, this.ef, this.Y_), this.J_.start(t, e);
    }, t.Z_ = function(t) {
        if (e = t.options, !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new A$1(E$1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
        /**
 * Helper function to prevent instantiation through the constructor.
 *
 * This method creates a new constructor that throws when it's invoked.
 * The prototype of that constructor is then set to the prototype of the hidden
 * "class" to expose all the prototype methods and allow for instanceof
 * checks.
 *
 * To also make all the static methods available, all properties of the
 * original constructor are copied to the new constructor.
 */        if (!n || "string" != typeof n) throw new A$1(E$1.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new qe(n);
    }, Object.defineProperty(t.prototype, "app", {
        get: function() {
            if (!this.z_) throw new A$1(E$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.z_;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        return on("Firestore.collection", arguments, 1), an("Firestore.collection", "non-empty string", 1, t), 
        this.X_(), new qr(S$1.G(t), this);
    }, t.prototype.doc = function(t) {
        return on("Firestore.doc", arguments, 1), an("Firestore.doc", "non-empty string", 1, t), 
        this.X_(), kr.lf(S$1.G(t), this);
    }, t.prototype.collectionGroup = function(t) {
        if (on("Firestore.collectionGroup", arguments, 1), an("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.X_(), new Mr(new Vt(S$1.H, t), this);
    }, t.prototype.runTransaction = function(t) {
        var e = this;
        return on("Firestore.runTransaction", arguments, 1), an("Firestore.runTransaction", "function", 1, t), 
        this.X_().transaction((function(n) {
            return t(new Rr(e, n));
        }));
    }, t.prototype.batch = function() {
        return this.X_(), new Dr(this);
    }, Object.defineProperty(t, "logLevel", {
        get: function() {
            switch (Ie()) {
              case LogLevel.DEBUG:
                return "debug";

              case LogLevel.SILENT:
                return "silent";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !0,
        configurable: !0
    }), t.setLogLevel = function(t) {
        switch (on("Firestore.setLogLevel", arguments, 1), an("Firestore.setLogLevel", "non-empty string", 1, t), 
        t) {
          case "debug":
            Ne(LogLevel.DEBUG);
            break;

          case "error":
            Ne(LogLevel.ERROR);
            break;

          case "silent":
            Ne(LogLevel.SILENT);
            break;

          default:
            throw new A$1(E$1.INVALID_ARGUMENT, "Invalid log level: " + t);
        }
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    t.prototype._f = function() {
        return this.if.timestampsInSnapshots;
    }, t;
}(), Rr = /** @class */ function() {
    function t(t, e) {
        this.ff = t, this.df = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        on("Transaction.get", arguments, 1);
        var n = Fr("Transaction.get", t, this.ff);
        return this.df.Ma([ n.ta ]).then((function(t) {
            if (!t || 1 !== t.length) return De();
            var r = t[0];
            if (r instanceof Rt) return new Sr(e.ff, n.ta, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.wf);
            if (r instanceof _t) return new Sr(e.ff, n.ta, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.wf);
            throw De();
        }));
    }, t.prototype.set = function(t, e, n) {
        un("Transaction.set", arguments, 2, 3);
        var r = Fr("Transaction.set", t, this.ff);
        n = Or("Transaction.set", n);
        var i = jr(r.wf, e, "Transaction.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.ff.nf.zo(s, o, n.mergeFields) : this.ff.nf.Ho(s, o);
        return this.df.set(r.ta, u), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof Tn ? (sn("Transaction.update", arguments, 3), 
        r = Fr("Transaction.update", t, this.ff), i = this.ff.nf.Xo("Transaction.update", e, n, o)) : (on("Transaction.update", arguments, 2), 
        r = Fr("Transaction.update", t, this.ff), i = this.ff.nf.Yo("Transaction.update", e)), 
        this.df.update(r.ta, i), this;
    }, t.prototype.delete = function(t) {
        on("Transaction.delete", arguments, 1);
        var e = Fr("Transaction.delete", t, this.ff);
        return this.df.delete(e.ta), this;
    }, t;
}(), Dr = /** @class */ function() {
    function t(t) {
        this.ff = t, this.Tf = [], this.Ef = !1;
    }
    return t.prototype.set = function(t, e, n) {
        un("WriteBatch.set", arguments, 2, 3), this.mf();
        var r = Fr("WriteBatch.set", t, this.ff);
        n = Or("WriteBatch.set", n);
        var i = jr(r.wf, e, "WriteBatch.set"), o = i[0], s = i[1], u = n.merge || n.mergeFields ? this.ff.nf.zo(s, o, n.mergeFields) : this.ff.nf.Ho(s, o);
        return this.Tf = this.Tf.concat(u.Mo(r.ta, pt.dt())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.mf(), "string" == typeof e || e instanceof Tn ? (sn("WriteBatch.update", arguments, 3), 
        r = Fr("WriteBatch.update", t, this.ff), i = this.ff.nf.Xo("WriteBatch.update", e, n, o)) : (on("WriteBatch.update", arguments, 2), 
        r = Fr("WriteBatch.update", t, this.ff), i = this.ff.nf.Yo("WriteBatch.update", e)), 
        this.Tf = this.Tf.concat(i.Mo(r.ta, pt.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        on("WriteBatch.delete", arguments, 1), this.mf();
        var e = Fr("WriteBatch.delete", t, this.ff);
        return this.Tf = this.Tf.concat(new gt(e.ta, pt.dt())), this;
    }, t.prototype.commit = function() {
        return this.mf(), this.Ef = !0, this.Tf.length > 0 ? this.ff.X_().write(this.Tf) : Promise.resolve();
    }, t.prototype.mf = function() {
        if (this.Ef) throw new A$1(E$1.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), kr = /** @class */ function() {
    function t(t, e, n) {
        this.ta = t, this.firestore = e, this.wf = n, this.J_ = this.firestore.X_();
    }
    return t.lf = function(e, n, r) {
        if (e.length % 2 != 0) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.j() + " has " + e.length);
        return new t(new U$1(e), n, r);
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.ta.path.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        get: function() {
            return new qr(this.ta.path.k(), this.firestore, this.wf);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.ta.path.j();
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.collection = function(t) {
        if (on("DocumentReference.collection", arguments, 1), an("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new A$1(E$1.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = S$1.G(t);
        return new qr(this.ta.path.child(e), this.firestore);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw gn("isEqual", "DocumentReference", 1, e);
        return this.firestore === e.firestore && this.ta.isEqual(e.ta) && this.wf === e.wf;
    }, t.prototype.set = function(t, e) {
        un("DocumentReference.set", arguments, 1, 2), e = Or("DocumentReference.set", e);
        var n = jr(this.wf, t, "DocumentReference.set"), r = n[0], i = n[1], o = e.merge || e.mergeFields ? this.firestore.nf.zo(i, r, e.mergeFields) : this.firestore.nf.Ho(i, r);
        return this.J_.write(o.Mo(this.ta, pt.dt()));
    }, t.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof Tn ? (sn("DocumentReference.update", arguments, 2), 
        n = this.firestore.nf.Xo("DocumentReference.update", t, e, r)) : (on("DocumentReference.update", arguments, 1), 
        n = this.firestore.nf.Yo("DocumentReference.update", t)), this.J_.write(n.Mo(this.ta, pt.exists(!0)));
    }, t.prototype.delete = function() {
        return on("DocumentReference.delete", arguments, 0), this.J_.write([ new gt(this.ta, pt.dt()) ]);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        un("DocumentReference.onSnapshot", arguments, 1, 4);
        var n, r = {
            includeMetadataChanges: !1
        }, i = 0;
        "object" != typeof t[i] || Ar(t[i]) || (mn("DocumentReference.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        fn("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++);
        var o = {
            includeMetadataChanges: r.includeMetadataChanges
        };
        return Ar(t[i]) ? n = t[i] : (an("DocumentReference.onSnapshot", "function", i, t[i]), 
        hn("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), hn("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), 
        n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.If(o, n);
    }, t.prototype.If = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Er({
            next: function(t) {
                if (e.next) {
                    var r = t.docs.get(n.ta);
                    e.next(new Sr(n.firestore, n.ta, r, t.fromCache, t.hasPendingWrites, n.wf));
                }
            },
            error: r
        }), o = this.J_.listen(Vt.Wt(this.ta.path), i, t);
        return function() {
            i.x_(), n.J_.pu(o);
        };
    }, t.prototype.get = function(t) {
        var e = this;
        return un("DocumentReference.get", arguments, 0, 1), Cr("DocumentReference.get", t), 
        new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.X_().O_(e.ta).then((function(t) {
                n(new Sr(e.firestore, e.ta, t, 
                /*fromCache=*/ !0, t instanceof _t && t.At, e.wf));
            }), r) : e.Rf(n, r, t);
        }));
    }, t.prototype.Rf = function(t, e, n) {
        var r = this.If({
            includeMetadataChanges: !0,
            Il: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), !i.exists && i.metadata.fromCache ? 
                // TODO(dimond): If we're online and the document doesn't
                // exist then we resolve with a doc.exists set to false. If
                // we're offline however, we reject the Promise in this
                // case. Two options: 1) Cache the negative response from
                // the server so we can deliver that even when you're
                // offline 2) Actually reject the Promise in the online case
                // if the document doesn't exist.
                e(new A$1(E$1.UNAVAILABLE, "Failed to get document because the client is offline.")) : i.exists && i.metadata.fromCache && n && "server" === n.source ? e(new A$1(E$1.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : t(i);
            },
            error: e
        });
    }, t.prototype.withConverter = function(e) {
        return new t(this.ta, this.firestore, e);
    }, t;
}(), Vr = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Sr = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.ff = t, this.ta = e, this.Af = n, this.Pf = r, this.Vf = i, this.wf = o;
    }
    return t.prototype.data = function(t) {
        if (un("DocumentSnapshot.data", arguments, 0, 1), t = Pr("DocumentSnapshot.data", t), 
        this.Af) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.wf) {
                var e = new Lr(this.ff, this.ta, this.Af, this.Pf, this.Vf);
                return this.wf.fromFirestore(e, t);
            }
            return new Ir(this.ff, this.ff._f(), t.serverTimestamps, 
            /* converter= */ void 0).U_(this.Af.kt());
        }
    }, t.prototype.get = function(t, e) {
        if (un("DocumentSnapshot.get", arguments, 1, 2), e = Pr("DocumentSnapshot.get", e), 
        this.Af) {
            var n = this.Af.data().field(zn("DocumentSnapshot.get", t));
            if (null !== n) return new Ir(this.ff, this.ff._f(), e.serverTimestamps, this.wf).U_(n);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.ta.path.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new kr(this.ta, this.ff, this.wf);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.Af;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new Vr(this.Vf, this.Pf);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw gn("isEqual", "DocumentSnapshot", 1, e);
        return this.ff === e.ff && this.Pf === e.Pf && this.ta.isEqual(e.ta) && (null === this.Af ? null === e.Af : this.Af.isEqual(e.Af)) && this.wf === e.wf;
    }, t;
}(), Lr = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return __extends(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(Sr), Mr = /** @class */ function() {
    function t(t, e, n) {
        this.pf = t, this.firestore = e, this.wf = n;
    }
    return t.prototype.where = function(e, n, r) {
        on("Query.where", arguments, 3), vn("Query.where", 3, r);
        // Enumerated from the WhereFilterOp type in index.d.ts.
        var i, o = function(t, e, n, r) {
            if (!e.some((function(t) {
                return t === r;
            }))) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid value " + yn(r) + " provided to function Query.where() for its " + bn(2) + " argument. Acceptable values: " + e.join(", "));
            return r;
        }(0, [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 0, n), s = zn("Query.where", e);
        if (s.Y()) {
            if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
            if ("in" /* IN */ === o) {
                this.yf(r, o);
                for (var u = [], a = 0, h = r; a < h.length; a++) {
                    var c = h[a];
                    u.push(this.gf(c));
                }
                i = {
                    arrayValue: {
                        values: u
                    }
                };
            } else i = this.gf(r);
        } else "in" /* IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || this.yf(r, o), 
        i = this.firestore.nf.Jo("Query.where", r, 
        // We only allow nested arrays for IN queries.
        /** allowArrays = */ "in" /* IN */ === o);
        var f = St.create(s, o, i);
        return this.bf(f), new t(this.pf.Ht(f), this.firestore, this.wf);
    }, t.prototype.orderBy = function(e, n) {
        var r;
        if (un("Query.orderBy", arguments, 1, 2), hn("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = "asc" /* ASCENDING */; else {
            if ("desc" !== n) throw new A$1(E$1.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        if (null !== this.pf.startAt) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
        if (null !== this.pf.endAt) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
        var i = zn("Query.orderBy", e), o = new Ct(i, r);
        return this.vf(o), new t(this.pf.Kt(o), this.firestore, this.wf);
    }, t.prototype.limit = function(e) {
        return on("Query.limit", arguments, 1), an("Query.limit", "number", 1, e), wn("Query.limit", 1, e), 
        new t(this.pf.zt(e), this.firestore, this.wf);
    }, t.prototype.limitToLast = function(e) {
        return on("Query.limitToLast", arguments, 1), an("Query.limitToLast", "number", 1, e), 
        wn("Query.limitToLast", 1, e), new t(this.pf.Yt(e), this.firestore, this.wf);
    }, t.prototype.startAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        sn("Query.startAt", arguments, 1);
        var i = this.Sf("Query.startAt", e, n, 
        /*before=*/ !0);
        return new t(this.pf.Xt(i), this.firestore, this.wf);
    }, t.prototype.startAfter = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        sn("Query.startAfter", arguments, 1);
        var i = this.Sf("Query.startAfter", e, n, 
        /*before=*/ !1);
        return new t(this.pf.Xt(i), this.firestore, this.wf);
    }, t.prototype.endBefore = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        sn("Query.endBefore", arguments, 1);
        var i = this.Sf("Query.endBefore", e, n, 
        /*before=*/ !0);
        return new t(this.pf.Jt(i), this.firestore, this.wf);
    }, t.prototype.endAt = function(e) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        sn("Query.endAt", arguments, 1);
        var i = this.Sf("Query.endAt", e, n, 
        /*before=*/ !1);
        return new t(this.pf.Jt(i), this.firestore, this.wf);
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw gn("isEqual", "Query", 1, e);
        return this.firestore === e.firestore && this.pf.isEqual(e.pf);
    }, t.prototype.withConverter = function(e) {
        return new t(this.pf, this.firestore, e);
    }, 
    /** Helper function to create a bound from a document or fields */ t.prototype.Sf = function(t, e, n, r) {
        if (vn(t, 1, e), e instanceof Sr) {
            if (n.length > 0) throw new A$1(E$1.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
            var i = e;
            if (!i.exists) throw new A$1(E$1.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
            return this.Cf(i.Af, r);
        }
        var o = [ e ].concat(n);
        return this.Df(t, o, r);
    }, 
    /**
     * Create a Bound from a query and a document.
     *
     * Note that the Bound will always include the key of the document
     * and so only the provided document will compare equal to the returned
     * position.
     *
     * Will throw if the document does not contain all fields of the order by
     * of the query or if any of the fields in the order by are an uncommitted
     * server timestamp.
     */
    t.prototype.Cf = function(t, e) {
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var n = [], r = 0, i = this.pf.orderBy; r < i.length; r++) {
            var o = i[r];
            if (o.field.Y()) n.push($(this.firestore.Zo, t.key)); else {
                var s = t.field(o.field);
                if (j(s)) throw new A$1(E$1.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + o.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === s) {
                    var u = o.field.j();
                    throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.");
                }
                n.push(s);
            }
        }
        return new Pt(n, e);
    }, 
    /**
     * Converts a list of field values to a Bound for the given query.
     */
    t.prototype.Df = function(t, e, n) {
        // Use explicit order by's because it has to match the query the user made
        var r = this.pf.Mt;
        if (e.length > r.length) throw new A$1(E$1.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (r[o].field.Y()) {
                if ("string" != typeof s) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s);
                if (!this.pf.le() && -1 !== s.indexOf("/")) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash.");
                var u = this.pf.path.child(S$1.G(s));
                if (!U$1.et(u)) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + u + "' is not because it contains an odd number of segments.");
                var a = new U$1(u);
                i.push($(this.firestore.Zo, a));
            } else {
                var h = this.firestore.nf.Jo(t, s);
                i.push(h);
            }
        }
        return new Pt(i, n);
    }, t.prototype.onSnapshot = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        un("Query.onSnapshot", arguments, 1, 4);
        var n, r = {}, i = 0;
        return "object" != typeof t[i] || Ar(t[i]) || (mn("Query.onSnapshot", r = t[i], [ "includeMetadataChanges" ]), 
        fn("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), 
        i++), Ar(t[i]) ? n = t[i] : (an("Query.onSnapshot", "function", i, t[i]), hn("Query.onSnapshot", "function", i + 1, t[i + 1]), 
        hn("Query.onSnapshot", "function", i + 2, t[i + 2]), n = {
            next: t[i],
            error: t[i + 1],
            complete: t[i + 2]
        }), this.Ff(this.pf), this.If(r, n);
    }, t.prototype.If = function(t, e) {
        var n = this, r = function(t) {
            console.error("Uncaught Error in onSnapshot:", t);
        };
        e.error && (r = e.error.bind(e));
        var i = new Er({
            next: function(t) {
                e.next && e.next(new Ur(n.firestore, n.pf, t, n.wf));
            },
            error: r
        }), o = this.firestore.X_(), s = o.listen(this.pf, i, t);
        return function() {
            i.x_(), o.pu(s);
        };
    }, t.prototype.Ff = function(t) {
        if (t.ae() && 0 === t.Mt.length) throw new A$1(E$1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
    }, t.prototype.get = function(t) {
        var e = this;
        return un("Query.get", arguments, 0, 1), Cr("Query.get", t), this.Ff(this.pf), new Promise((function(n, r) {
            t && "cache" === t.source ? e.firestore.X_().q_(e.pf).then((function(t) {
                n(new Ur(e.firestore, e.pf, t, e.wf));
            }), r) : e.Rf(n, r, t);
        }));
    }, t.prototype.Rf = function(t, e, n) {
        var r = this.If({
            includeMetadataChanges: !0,
            Il: !0
        }, {
            next: function(i) {
                // Remove query first before passing event to user to avoid
                // user actions affecting the now stale query.
                r(), i.metadata.fromCache && n && "server" === n.source ? e(new A$1(E$1.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : t(i);
            },
            error: e
        });
    }, 
    /**
     * Parses the given documentIdValue into a ReferenceValue, throwing
     * appropriate errors if the value is anything other than a DocumentReference
     * or String, or if the string is malformed.
     */
    t.prototype.gf = function(t) {
        if ("string" == typeof t) {
            if ("" === t) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
            if (!this.pf.le() && -1 !== t.indexOf("/")) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character.");
            var e = this.pf.path.child(S$1.G(t));
            if (!U$1.et(e)) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ").");
            return $(this.firestore.Zo, new U$1(e));
        }
        if (t instanceof kr) {
            var n = t;
            return $(this.firestore.Zo, n.ta);
        }
        throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + yn(t) + ".");
    }, 
    /**
     * Validates that the value passed into a disjunctrive filter satisfies all
     * array requirements.
     */
    t.prototype.yf = function(t, e) {
        if (!Array.isArray(t) || 0 === t.length) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
        if (t.length > 10) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
        if (t.indexOf(null) >= 0) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }, t.prototype.bf = function(t) {
        if (t instanceof St) {
            var e = [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], n = [ "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], r = e.indexOf(t.op) >= 0, i = n.indexOf(t.op) >= 0;
            if (t.ue()) {
                var o = this.pf.jt();
                if (null !== o && !o.isEqual(t.field)) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'");
                var s = this.pf.Gt();
                null !== s && this.Nf(t.field, s);
            } else if (i || r) {
                // You can have at most 1 disjunctive filter and 1 array filter. Check if
                // the new filter conflicts with an existing one.
                var u = null;
                if (i && (u = this.pf.ce(n)), null === u && r && (u = this.pf.ce(e)), null != u) 
                // We special case when it's a duplicate op to give a slightly clearer error message.
                throw u === t.op ? new A$1(E$1.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new A$1(E$1.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + u.toString() + "' filters.");
            }
        }
    }, t.prototype.vf = function(t) {
        if (null === this.pf.Gt()) {
            // This is the first order by. It must match any inequality.
            var e = this.pf.jt();
            null !== e && this.Nf(e, t.field);
        }
    }, t.prototype.Nf = function(t, e) {
        if (!e.isEqual(t)) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.");
    }, t;
}(), Ur = /** @class */ function() {
    function t(t, e, n, r) {
        this.ff = t, this.$f = e, this.Lf = n, this.wf = r, this.kf = null, this.Of = null, 
        this.metadata = new Vr(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Lf.docs.M();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Lf.docs.size;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        un("QuerySnapshot.forEach", arguments, 1, 2), an("QuerySnapshot.forEach", "function", 1, t), 
        this.Lf.docs.forEach((function(r) {
            t.call(e, n.qf(r));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new Mr(this.$f, this.ff, this.wf);
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (mn("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), fn("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.Lf.hs) throw new A$1(E$1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.kf && this.Of === e || (this.kf = 
        /**
     * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
     *
     * Exported for testing.
     */
        function(t, e, n, r) {
            if (n.ss.M()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var i = 0;
                return n.docChanges.map((function(e) {
                    var o = new Lr(t, e.doc.key, e.doc, n.fromCache, n.ns.has(e.doc.key), r);
                    return e.doc, {
                        type: "added",
                        doc: o,
                        oldIndex: -1,
                        newIndex: i++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var o = n.ss;
            return n.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var i = new Lr(t, e.doc.key, e.doc, n.fromCache, n.ns.has(e.doc.key), r), s = -1, u = -1;
                return 0 /* Added */ !== e.type && (s = o.indexOf(e.doc.key), o = o.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (u = (o = o.add(e.doc)).indexOf(e.doc.key)), {
                    type: xr(e.type),
                    doc: i,
                    oldIndex: s,
                    newIndex: u
                };
            }));
        }(this.ff, e, this.Lf, this.wf), this.Of = e), this.kf;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw gn("isEqual", "QuerySnapshot", 1, e);
        return this.ff === e.ff && this.$f.isEqual(e.$f) && this.Lf.isEqual(e.Lf) && this.wf === e.wf;
    }, t.prototype.qf = function(t) {
        return new Lr(this.ff, t.key, t, this.metadata.fromCache, this.Lf.ns.has(t.key), this.wf);
    }, t;
}(), qr = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, Vt.Wt(t), n, r) || this).Mf = t, t.length % 2 != 1) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.j() + " has " + t.length);
        return i;
    }
    return __extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.pf.path.q();
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.pf.path.k();
            return t.M() ? null : new kr(new U$1(t), this.firestore);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.pf.path.j();
        },
        enumerable: !0,
        configurable: !0
    }), n.prototype.doc = function(t) {
        if (un("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = Se.cn()), an("CollectionReference.doc", "non-empty string", 1, t), 
        "" === t) throw new A$1(E$1.INVALID_ARGUMENT, "Document path must be a non-empty string");
        var e = S$1.G(t);
        return kr.lf(this.pf.path.child(e), this.firestore, this.wf);
    }, n.prototype.add = function(t) {
        on("CollectionReference.add", arguments, 1), an("CollectionReference.add", "object", 1, this.wf ? this.wf.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Mf, this.firestore, t);
    }, n;
}(Mr);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function Or(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (mn(t, e, [ "merge", "mergeFields" ]), fn(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + yn(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new A$1(E$1.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + yn(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof Tn;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new A$1(E$1.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function Pr(t, e) {
    return void 0 === e ? {} : (mn(t, e, [ "serverTimestamps" ]), ln(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function Cr(t, e) {
    hn(t, "object", 1, e), e && (mn(t, e, [ "source" ]), ln(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function Fr(t, e, n) {
    if (e instanceof kr) {
        if (e.firestore !== n) throw new A$1(E$1.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw gn(t, "DocumentReference", 1, e);
}

function xr(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return De();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function jr(t, e, n) {
    var r;
    return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [ r, n ];
}

function Gr(t, e) {
    function n() {
        var t = "This constructor is private.";
        throw e && (t += " ", t += e), new A$1(E$1.INVALID_ARGUMENT, t);
    }
    // Make sure instanceof checks work and all methods are exposed on the public
    // constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return n.prototype = t.prototype, 
    // Copy any static methods/members
    Object.assign(n, t), n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Public instance that disallows construction at runtime. Note that this still
// allows instanceof checks.
var Br = Gr(_r, "Use firebase.firestore() instead."), zr = Gr(Rr, "Use firebase.firestore().runTransaction() instead."), Qr = Gr(Dr, "Use firebase.firestore().batch() instead."), Wr = Gr(kr, "Use firebase.firestore().doc() instead."), Jr = Gr(Sr), Hr = Gr(Lr), Yr = Gr(Mr), Zr = Gr(Ur), Xr = Gr(qr, "Use firebase.firestore().collection() instead."), Kr = Gr(/** @class */ function() {
    function t() {}
    return t.delete = function() {
        return rn("FieldValue.delete", arguments), new Dn;
    }, t.serverTimestamp = function() {
        return rn("FieldValue.serverTimestamp", arguments), new kn;
    }, t.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return sn("FieldValue.arrayUnion", arguments, 1), new Vn(t);
    }, t.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we need access to the Firestore instance.
                return sn("FieldValue.arrayRemove", arguments, 1), new Sn(t);
    }, t.increment = function(t) {
        return an("FieldValue.increment", "number", 1, t), on("FieldValue.increment", arguments, 1), 
        new Ln(t);
    }, t.prototype.isEqual = function(t) {
        return this === t;
    }, t;
}(), "Use FieldValue.<field>() instead."), $r = Gr(Nn, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."), ti = {
    Firestore: Br,
    GeoPoint: Mn,
    Timestamp: D,
    Blob: $r,
    Transaction: zr,
    WriteBatch: Qr,
    DocumentReference: Wr,
    DocumentSnapshot: Jr,
    Query: Yr,
    QueryDocumentSnapshot: Hr,
    QuerySnapshot: Zr,
    CollectionReference: Xr,
    FieldPath: Tn,
    FieldValue: Kr,
    setLogLevel: _r.setLogLevel,
    CACHE_SIZE_UNLIMITED: Nr
}, ei = /** @class */ function() {
    function t() {}
    return t.prototype.nu = function(t) {
        // No-op.
    }, t.prototype.Pu = function() {
        // No-op.
    }, t;
}(), ni = /** @class */ function() {
    function t() {
        var t = this;
        this.xf = function() {
            return t.Bf();
        }, this.Uf = function() {
            return t.Qf();
        }, this.Wf = [], this.jf();
    }
    return t.prototype.nu = function(t) {
        this.Wf.push(t);
    }, t.prototype.Pu = function() {
        window.removeEventListener("online", this.xf), window.removeEventListener("offline", this.Uf);
    }, t.prototype.jf = function() {
        window.addEventListener("online", this.xf), window.addEventListener("offline", this.Uf);
    }, t.prototype.Bf = function() {
        Te("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Wf; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.Qf = function() {
        Te("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Wf; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Gf = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), ri = /** @class */ function() {
    function t(t) {
        this.Hf = t.Hf, this.Kf = t.Kf;
    }
    return t.prototype.Ra = function(t) {
        this.zf = t;
    }, t.prototype.wa = function(t) {
        this.Yf = t;
    }, t.prototype.onMessage = function(t) {
        this.Xf = t;
    }, t.prototype.close = function() {
        this.Kf();
    }, t.prototype.send = function(t) {
        this.Hf(t);
    }, t.prototype.Jf = function() {
        this.zf();
    }, t.prototype.Zf = function(t) {
        this.Yf(t);
    }, t.prototype.td = function(t) {
        this.Xf(t);
    }, t;
}(), ii = {
    BatchGetDocuments: "batchGet",
    Commit: "commit"
}, oi = "gl-js/ fire/" + w$1, si = /** @class */ function() {
    function t(t) {
        this.ii = t.ii;
        var e = t.ssl ? "https" : "http";
        this.ed = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling;
    }
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */    return t.prototype.sd = function(t, e) {
        if (e) for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
        t["X-Goog-Api-Client"] = oi;
    }, t.prototype.Fa = function(t, e, n) {
        var r = this, i = this.nd(t);
        return new Promise((function(o, s) {
            var u = new esm_5;
            u.listenOnce(esm_3.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case esm_2.NO_ERROR:
                        var e = u.getResponseJson();
                        Te("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case esm_2.TIMEOUT:
                        Te("Connection", 'RPC "' + t + '" timed out'), s(new A$1(E$1.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case esm_2.HTTP_ERROR:
                        var n = u.getStatus();
                        if (Te("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var i = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(E$1).indexOf(e) >= 0 ? e : E$1.UNKNOWN;
                                }(r.status);
                                s(new A$1(i, r.message));
                            } else s(new A$1(E$1.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        Te("Connection", 'RPC "' + t + '" failed'), s(new A$1(E$1.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        De();
                    }
                } finally {
                    Te("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            // The database field is already encoded in URL. Specifying it again in
            // the body is not necessary in production, and will cause duplicate field
            // errors in the Firestore Emulator. Let's remove it.
            var a = Object.assign({}, e);
            delete a.database;
            var h = JSON.stringify(a);
            Te("Connection", "XHR sending: ", i + " " + h);
            // Content-Type: text/plain will avoid preflight requests which might
            // mess with CORS and redirects by proxies. If we add custom headers
            // we will need to change this code to potentially use the
            // $httpOverwrite parameter supported by ESF to avoid
            // triggering preflight requests.
            var c = {
                "Content-Type": "text/plain"
            };
            r.sd(c, n), u.send(i, "POST", h, c, 15);
        }));
    }, t.prototype.Na = function(t, e, n) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Fa(t, e, n);
    }, t.prototype.Aa = function(t, e) {
        var n = [ this.ed, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], r = esm_1(), i = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.ii.projectId + "/databases/" + this.ii.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.sd(i.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        util.isMobileCordova() || util.isReactNative() || util.isElectron() || util.isIE() || util.isUWP() || util.isBrowserExtension() || (i.httpHeadersOverwriteParam = "$httpHeaders");
        var o = n.join("");
        Te("Connection", "Creating WebChannel: " + o + " " + i);
        var s = r.createWebChannel(o, i), p = !1, d = !1, y = new ri({
            Hf: function(t) {
                d ? Te("Connection", "Not sending because WebChannel is closed:", t) : (p || (Te("Connection", "Opening WebChannel transport."), 
                s.open(), p = !0), Te("Connection", "WebChannel sending:", t), s.send(t));
            },
            Kf: function() {
                return s.close();
            }
        }), v = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            s.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return v(esm_4.EventType.OPEN, (function() {
            d || Te("Connection", "WebChannel transport opened.");
        })), v(esm_4.EventType.CLOSE, (function() {
            d || (d = !0, Te("Connection", "WebChannel transport closed"), y.Zf());
        })), v(esm_4.EventType.ERROR, (function(t) {
            d || (d = !0, Te("Connection", "WebChannel transport errored:", t), y.Zf(new A$1(E$1.UNAVAILABLE, "The operation could not be completed")));
        })), v(esm_4.EventType.MESSAGE, (function(t) {
            var e;
            if (!d) {
                var n = t.data[0];
                ke(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    Te("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, u = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = It[t];
                        if (void 0 !== e) return Gt(e);
                    }(o), a = i.message;
                    void 0 === u && (u = E$1.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    d = !0, y.Zf(new A$1(u, a)), s.close();
                } else Te("Connection", "WebChannel received:", n), y.td(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            y.Jf();
        }), 0), y;
    }, 
    // visible for testing
    t.prototype.nd = function(t) {
        var e = ii[t];
        return this.ed + "/v1/projects/" + this.ii.projectId + "/databases/" + this.ii.database + "/documents:" + e;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the memory-only Firestore build with the components framework.
 */
function ui(t) {
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
    !function(t, e) {
        t.INTERNAL.registerComponent(new Component("firestore", (function(t) {
            return function(t, e) {
                return new _r(t, e, new wr);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, ti)));
    }(t), t.registerVersion("@firebase/firestore", "1.14.5");
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Implements the Platform API for browsers and some browser-like environments
// (including ReactNative).
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This code needs to run before Firestore is used. This can be achieved in
 * several ways:
 *   1) Through the JSCompiler compiling this code and then (automatically)
 *      executing it before exporting the Firestore symbols.
 *   2) Through importing this module first in a Firestore main module
 */
Ee.an(new (/** @class */ function() {
    function t() {
        this.bo = "undefined" != typeof atob;
    }
    return Object.defineProperty(t.prototype, "document", {
        get: function() {
            // `document` is not always available, e.g. in ReactNative and WebWorkers.
            // eslint-disable-next-line no-restricted-globals
            return "undefined" != typeof document ? document : null;
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(t.prototype, "window", {
        get: function() {
            // `window` is not always available, e.g. in ReactNative and WebWorkers.
            // eslint-disable-next-line no-restricted-globals
            return "undefined" != typeof window ? window : null;
        },
        enumerable: !0,
        configurable: !0
    }), t.prototype.C_ = function(t) {
        return Promise.resolve(new si(t));
    }, t.prototype.g_ = function() {
        return ni.Gf() ? new ni : new ei;
    }, t.prototype.Go = function(t) {
        return new we(t, {
            hi: !0
        });
    }, t.prototype.un = function(t) {
        return JSON.stringify(t);
    }, t.prototype.atob = function(t) {
        return atob(t);
    }, t.prototype.btoa = function(t) {
        return btoa(t);
    }, t.prototype.ln = function(t) {
        // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
        var e = 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
        if (e) e.getRandomValues(n); else 
        // Falls back to Math.random
        for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
        return n;
    }, t;
}())), ui(i);
//# sourceMappingURL=index.node.cjs.js.map
