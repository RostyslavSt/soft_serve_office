/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import View from "./views/view.jsx";
// import ActionCreator from "./data/actions.js";
// import Dispatcher from "./data/dispatcher.js";
// import React from "react";
// import ReactDOM from "react-dom";

// import Store from "./data/store.js";

function updateState(state, action) {
    if (action.type === 'increment') {
        return this.state + action.amount;
    } else if (action.type === 'decrement') {
        return this.state - action.amount;
    } else return state;
}

var incrementAction = { type: 'increment', amount: 1 };
var decrementAction = { type: 'decrement', amount: 3 };

var Store = function () {
    function Store(updateState, state) {
        _classCallCheck(this, Store);

        this._state = state;
        this._updateState = updateState;
        this._callbacks = [];
    }

    _createClass(Store, [{
        key: 'update',
        value: function update(action) {
            this._state = this._updateState(this._state, action);
            this._callbacks.forEach(function (callback) {
                return callback();
            });
        }
    }, {
        key: 'subscribe',
        value: function subscribe(callback) {
            var _this = this;

            this._callbacks.push(callback);
            return function () {
                return _this._callbacks = _this._callbacks.filter(function (cd) {
                    return cd !== callback;
                });
            };
        }
    }, {
        key: 'state',
        get: function get() {
            return this._state;
        }
    }]);

    return Store;
}();

var store = new Store(updateState, 0);
// console.log()

console.log(store.state);
var unsubscribe = store.subscribe(function () {
    return console.log('State changed 1', store.state);
});
store.subscribe(function () {
    return console.log('State changed 2', store.state);
});

store.update(incrementAction);
unsubscribe();
store.update(decrementAction);
store.update({});

// ReactDOM.render(
//     <View store={store} />,
//     document.querySelector(".root")
// )

/***/ })
/******/ ]);