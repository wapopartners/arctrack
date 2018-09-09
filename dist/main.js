(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getTarget = __webpack_require__(6);

var _getTarget2 = _interopRequireDefault(_getTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);
  }

  _createClass(Store, [{
    key: 'set',
    value: function set(_ref) {
      var name = _ref.name,
          location = _ref.location,
          value = _ref.value;

      // if there's a value, set that as the value of object w/ key 'name'
      if (value) {
        this[name] = value;
      } else {
        var loc = location.indexOf('.') !== -1 ? location.split('.') : location;

        this[name] = Array.isArray(loc) ? (0, _getTarget2.default)({
          properties: loc.slice(0, loc.length - 1),
          target: loc.pop()
        }) : window[loc];
      }

      if (!this[name]) {
        throw new Error('Store#set: must provide either a location string or a value');
      }
    }
  }]);

  return Store;
}();

var store = new Store();

exports.default = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(16);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.trackJs = exports.trackDom = undefined;

var _trackDom = __webpack_require__(5);

var _trackDom2 = _interopRequireDefault(_trackDom);

var _trackJs = __webpack_require__(29);

var _trackJs2 = _interopRequireDefault(_trackJs);

var _Store = __webpack_require__(1);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.trackDom = _trackDom2.default;
exports.trackJs = _trackJs2.default;
exports.store = _Store2.default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = function (opts) {
  var dataAttr = opts.dataAttr || 'data-arctrack';
  window.onload = function initTrackDom() {
    if (opts.public) {
      _Store2.default.set({
        name: 'pageData',
        location: typeof opts.public === 'string' ? opts.public : null,
        value: _typeof(opts.public) === 'object' ? opts.public : null
      });

      if (opts.init) {
        opts.init(_Store2.default.pageData);
      }

      if (opts.click) {
        var trackClick = (0, _generateTrackClick2.default)({
          cb: opts.click,
          pageData: _Store2.default.pageData,
          dataAttr: dataAttr
        });
        (0, _delegateEvent2.default)('click', trackClick, '[' + dataAttr + ']');
      }

      if (opts.scroll) {
        var trackScroll = (0, _generateTrackScroll2.default)(opts.scroll)(_Store2.default.pageData);
        window.onscroll = trackScroll;
      }
    }
  };
};

var _Store = __webpack_require__(1);

var _Store2 = _interopRequireDefault(_Store);

var _generateTrackClick = __webpack_require__(7);

var _generateTrackClick2 = _interopRequireDefault(_generateTrackClick);

var _delegateEvent = __webpack_require__(10);

var _delegateEvent2 = _interopRequireDefault(_delegateEvent);

var _generateTrackScroll = __webpack_require__(11);

var _generateTrackScroll2 = _interopRequireDefault(_generateTrackScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getTarget = exports.getTarget = function getTarget(_ref) {
  var _ref$base = _ref.base,
      base = _ref$base === undefined ? window : _ref$base,
      properties = _ref.properties,
      target = _ref.target;

  var prop = properties && properties.length ? properties[0] : null;
  if (base[prop]) {
    return getTarget({
      base: base[prop],
      properties: properties.slice(1, properties.length),
      target: target
    });
  }
  return base[target];
};

exports.default = getTarget;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mineType = __webpack_require__(8);

var _mineType2 = _interopRequireDefault(_mineType);

var _logger = __webpack_require__(9);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var cb = _ref.cb,
      pageData = _ref.pageData,
      dataAttr = _ref.dataAttr;
  return function (_ref2) {
    var target = _ref2.target;

    try {
      cb({
        type: (0, _mineType2.default)(target, dataAttr),
        target: target,
        pageData: pageData
      });
    } catch (err) {
      _logger2.default.defaultError(err);
    }
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, selector) {
  return target.closest("[" + selector + "]").getAttribute(selector);
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: 'defaultError',
    value: function defaultError(msg) {
      console.error('Arctrack failed with the following error: ', msg);
    }
  }, {
    key: 'methodFailed',
    value: function methodFailed(method, msg, callback) {
      var callbackMsg = callback ? 'while trying to execute your callback: ' + callback : '';
      console.error(method + ' failed ' + callbackMsg + ', with the following error', msg);
    }
  }]);

  return Logger;
}();

exports.default = new Logger();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// replacement for $(document).on('click', fn)
function delegateEvent(eventType, fn, matcher) {
  var el = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  el.addEventListener(eventType, function (e) {
    if (!matcher || e.target.matches(matcher) || // firefox
    e.currentTarget.activeElement.matches(matcher) || // chrome
    // safari, check for parentElement fixes bug where document is element clicked on
    e.target.parentElement && e.target.parentElement.matches(matcher)) {
      e.stopPropagation();
      fn(e);
    }
  });
}

module.exports = delegateEvent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollService = __webpack_require__(12);

var _ScrollService2 = _interopRequireDefault(_ScrollService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (entries) {
  return new _ScrollService2.default(Array.isArray(entries) ? entries : [entries]).activate();
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(13);

var _throttle2 = _interopRequireDefault(_throttle);

var _generateId = __webpack_require__(24);

var _generateId2 = _interopRequireDefault(_generateId);

var _processEntry = __webpack_require__(25);

var _processEntry2 = _interopRequireDefault(_processEntry);

var _processTarget = __webpack_require__(26);

var _processTarget2 = _interopRequireDefault(_processTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_THROTTLE_SPEED = 1000;

var ScrollService = function () {
  function ScrollService(entries) {
    var throttleSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THROTTLE_SPEED;

    _classCallCheck(this, ScrollService);

    this.entries = entries;
    this.throttleSpeed = throttleSpeed;
    this.testElements = this.testElements.bind(this);
    this.entryTypes = {};
    this.pendingElements = {};
    this.scrolledElements = {};
    this.scrollStatus = { lastY: 0, direction: 'down' };
  }

  _createClass(ScrollService, [{
    key: 'activate',
    value: function activate() {
      var _this = this;

      this.entries.forEach(function (entry) {
        _this.registerEntry((0, _processEntry2.default)(entry));
        var nodes = document.querySelectorAll('[data-' + entry.selector + ']');
        var trackOnceOnly = entry.trackOnceOnly ? entry.trackOnceOnly : false;
        for (var i = 0; i < nodes.length; i += 1) {
          var node = nodes[i];
          _this.registerElement({
            node: node,
            type: entry.type,
            trackOnceOnly: trackOnceOnly,
            id: (0, _generateId2.default)()
          });
        }
      });
      return function (pageData) {
        return (0, _throttle2.default)(_this.testElements.bind(_this, pageData), _this.throttleSpeed);
      };
    }
  }, {
    key: 'registerEntry',
    value: function registerEntry(_ref) {
      var load = _ref.load,
          shouldLoad = _ref.shouldLoad,
          type = _ref.type,
          selector = _ref.selector;

      this.entryTypes[type] = {
        load: load,
        shouldLoad: shouldLoad,
        selector: selector
      };
    }
  }, {
    key: 'registerElement',
    value: function registerElement(_ref2) {
      var node = _ref2.node,
          id = _ref2.id,
          type = _ref2.type,
          trackOnceOnly = _ref2.trackOnceOnly;

      this.pendingElements[id] = {
        type: type,
        target: node,
        trackOnceOnly: trackOnceOnly
      };
    }
  }, {
    key: 'transferElement',
    value: function transferElement(key) {
      this.scrolledElements[key] = this.pendingElements[key];
    }
  }, {
    key: 'testElements',
    value: function testElements(pageData) {
      var _this2 = this;

      this.detectScrollDirection();
      Object.keys(this.pendingElements).forEach(function (key) {
        var _pendingElements$key = _this2.pendingElements[key],
            target = _pendingElements$key.target,
            type = _pendingElements$key.type,
            trackOnceOnly = _pendingElements$key.trackOnceOnly;

        var entry = _this2.entryTypes[type];
        if (entry.shouldLoad(target, _this2.scrollStatus.direction)) {
          entry.load({
            target: (0, _processTarget2.default)(target, entry.selector),
            type: type,
            pageData: pageData
          });
          if (!trackOnceOnly) _this2.transferElement(key);
          delete _this2.pendingElements[key];
        }
      });
    }
  }, {
    key: 'handleDirectionChange',
    value: function handleDirectionChange() {
      var previouslyScrolled = this.scrolledElements;
      this.scrolledElements = this.removePendingElements();
      Object.assign(this.pendingElements, previouslyScrolled);
    }
  }, {
    key: 'detectScrollDirection',
    value: function detectScrollDirection() {
      var _window = window,
          currentY = _window.pageYOffset;

      var direction = void 0;
      if (currentY >= this.scrollStatus.lastY) {
        direction = 'down';
      } else {
        direction = 'up';
      }

      if (direction !== this.scrollStatus.direction) {
        this.handleDirectionChange();
      }

      this.scrollStatus.direction = direction;
      this.scrollStatus.lastY = currentY;
    }
  }, {
    key: 'removePendingElements',
    value: function removePendingElements() {
      var _this3 = this;

      var result = {};
      Object.keys(this.pendingElements).forEach(function (key) {
        result[key] = _this3.pendingElements[key];
        delete _this3.pendingElements[key];
      });
      return result;
    }
  }]);

  return ScrollService;
}();

exports.default = ScrollService;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(14),
    isObject = __webpack_require__(0);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    now = __webpack_require__(15),
    toNumber = __webpack_require__(18);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    isSymbol = __webpack_require__(19);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(20),
    isObjectLike = __webpack_require__(23);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3),
    getRawTag = __webpack_require__(21),
    objectToString = __webpack_require__(22);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var result = '';
  for (var i = 0; i < 10; i += 1) {
    var random = Math.floor(Math.random() * 24);
    if (random % 2 === 0) {
      result += alph[random];
    } else {
      result += random;
    }
  }
  return result;
};

var alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (entry) {
  var shouldLoad = void 0;
  if (entry.buffer) {
    shouldLoad = generateShouldLoad(processBuffer(entry.buffer));
  } else {
    shouldLoad = generateShouldLoad({ top: 0, bottom: 0 });
  }
  return Object.assign({}, {
    load: entry.load,
    type: entry.type,
    selector: entry.selector,
    shouldLoad: shouldLoad
  });
};

var processBuffer = function processBuffer(buffer) {
  if (!buffer.top) {
    return Object.assign({}, buffer, { top: 0 });
  }

  if (!buffer.bottom) {
    return Object.assign({}, buffer, { bottom: 0 });
  }

  return buffer;
};

var generateShouldLoad = function generateShouldLoad(buffer) {
  return function (node, direction) {
    var rect = node.getBoundingClientRect();
    var top = buffer.top,
        bottom = buffer.bottom;

    return direction === 'down' && rect.top <= top || direction === 'up' && rect.bottom >= window.innerHeight + bottom;
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, selector) {
  var name = (0, _camelize2.default)(deDash(selector));
  return { node: target, data: (0, _parseAttributeValue2.default)(target, name) };
};

var _camelize = __webpack_require__(27);

var _camelize2 = _interopRequireDefault(_camelize);

var _parseAttributeValue = __webpack_require__(28);

var _parseAttributeValue2 = _interopRequireDefault(_parseAttributeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deDash = function deDash(str) {
  return str.replace(/-/g, ' ');
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case#answer-2970667
exports.default = function (str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase().replace(/\s+/g, '');
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseAttributeValue;
/*
  input 'node' [DOM node]: analytics target DOM node
  input 'attrName' [String]: property name of node's 'dataSet'
  element may have data attributes in the form of: data-attrName="foo"
  output [String]: value of data attribute from node 'dataSet'
  */
function parseAttributeValue(node, attrName) {
  // using 'stringify' and 'parse' to address Webkit (iOS) bug
  // https://bugs.webkit.org/show_bug.cgi?id=161454
  var attributes = Object.assign({}, JSON.parse(JSON.stringify(node.dataset)));

  var parsedValue = void 0;
  Object.keys(attributes).forEach(function (key) {
    if (key.indexOf(attrName) > -1) {
      parsedValue = attributes[key];
    }
  });
  return parsedValue;
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (cb, eventName) {
  return function decorate(target, name, descriptor) {
    var oldValue = descriptor.value;
    var value = function value() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      try {
        cb({
          methodName: name,
          instance: this,
          eventName: eventName,
          args: args
        });
      } catch (err) {
        throw new Error("trackJs: failed with the following error: " + err);
      }
      return oldValue.apply(this, args);
    };
    return _extends({}, descriptor, { value: value });
  };
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YTAzMzcwYzI2MjFhZDM5NDFkMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWNrRG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZVRyYWNrQ2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbWluZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RlbGVnYXRlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVUcmFja1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvU2Nyb2xsU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3Byb2Nlc3NFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wcm9jZXNzVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3IvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VBdHRyaWJ1dGVWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhY2tKcy5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIm5hbWUiLCJsb2NhdGlvbiIsInZhbHVlIiwibG9jIiwiaW5kZXhPZiIsInNwbGl0IiwiQXJyYXkiLCJpc0FycmF5IiwicHJvcGVydGllcyIsInNsaWNlIiwibGVuZ3RoIiwidGFyZ2V0IiwicG9wIiwid2luZG93IiwiRXJyb3IiLCJzdG9yZSIsInRyYWNrRG9tIiwidHJhY2tKcyIsIm9wdHMiLCJkYXRhQXR0ciIsIm9ubG9hZCIsImluaXRUcmFja0RvbSIsInB1YmxpYyIsInNldCIsImluaXQiLCJwYWdlRGF0YSIsImNsaWNrIiwidHJhY2tDbGljayIsImNiIiwic2Nyb2xsIiwidHJhY2tTY3JvbGwiLCJvbnNjcm9sbCIsImdldFRhcmdldCIsImJhc2UiLCJwcm9wIiwidHlwZSIsImVyciIsImRlZmF1bHRFcnJvciIsInNlbGVjdG9yIiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsIkxvZ2dlciIsIm1zZyIsImNvbnNvbGUiLCJlcnJvciIsIm1ldGhvZCIsImNhbGxiYWNrIiwiY2FsbGJhY2tNc2ciLCJkZWxlZ2F0ZUV2ZW50IiwiZXZlbnRUeXBlIiwiZm4iLCJtYXRjaGVyIiwiZWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibWF0Y2hlcyIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyaWVzIiwiYWN0aXZhdGUiLCJERUZBVUxUX1RIUk9UVExFX1NQRUVEIiwiU2Nyb2xsU2VydmljZSIsInRocm90dGxlU3BlZWQiLCJ0ZXN0RWxlbWVudHMiLCJiaW5kIiwiZW50cnlUeXBlcyIsInBlbmRpbmdFbGVtZW50cyIsInNjcm9sbGVkRWxlbWVudHMiLCJzY3JvbGxTdGF0dXMiLCJsYXN0WSIsImRpcmVjdGlvbiIsImZvckVhY2giLCJlbnRyeSIsInJlZ2lzdGVyRW50cnkiLCJub2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmFja09uY2VPbmx5IiwiaSIsIm5vZGUiLCJyZWdpc3RlckVsZW1lbnQiLCJpZCIsImxvYWQiLCJzaG91bGRMb2FkIiwia2V5IiwiZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsInRyYW5zZmVyRWxlbWVudCIsInByZXZpb3VzbHlTY3JvbGxlZCIsInJlbW92ZVBlbmRpbmdFbGVtZW50cyIsImFzc2lnbiIsImN1cnJlbnRZIiwicGFnZVlPZmZzZXQiLCJoYW5kbGVEaXJlY3Rpb25DaGFuZ2UiLCJyZXN1bHQiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJhbHBoIiwiYnVmZmVyIiwiZ2VuZXJhdGVTaG91bGRMb2FkIiwicHJvY2Vzc0J1ZmZlciIsInRvcCIsImJvdHRvbSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbm5lckhlaWdodCIsImRlRGFzaCIsImRhdGEiLCJzdHIiLCJyZXBsYWNlIiwibGV0dGVyIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwicGFyc2VBdHRyaWJ1dGVWYWx1ZSIsImF0dHJOYW1lIiwiYXR0cmlidXRlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJwYXJzZWRWYWx1ZSIsImV2ZW50TmFtZSIsImRlY29yYXRlIiwiZGVzY3JpcHRvciIsIm9sZFZhbHVlIiwiYXJncyIsIm1ldGhvZE5hbWUiLCJpbnN0YW5jZSIsImFwcGx5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTs7Ozs7Ozs7SUFFTUEsSzs7Ozs7Ozs4QkFLRDtBQUFBLFVBSERDLElBR0MsUUFIREEsSUFHQztBQUFBLFVBRkRDLFFBRUMsUUFGREEsUUFF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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFh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eUcsc0JBQVlySSxJQURYO0FBRURzSSxvQkFBVSxJQUZUO0FBR0ROLDhCQUhDO0FBSURJO0FBSkMsU0FBSDtBQU1ELE9BUEQsQ0FPRSxPQUFPaEcsR0FBUCxFQUFZO0FBQ1osY0FBTSxJQUFJdEIsS0FBSixnREFBdURzQixHQUF2RCxDQUFOO0FBQ0Q7QUFDRCxhQUFPK0YsU0FBU0ksS0FBVCxDQUFlLElBQWYsRUFBcUJILElBQXJCLENBQVA7QUFDRCxLQVpEO0FBYUEsd0JBQVlGLFVBQVosSUFBd0JoSSxZQUF4QjtBQUNELEdBaEJEO0FBaUJELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZhMDMzNzBjMjYyMWFkMzk0MWQxIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGdldFRhcmdldCBmcm9tICcuL3V0aWwvZ2V0VGFyZ2V0JztcblxuY2xhc3MgU3RvcmUge1xuICBzZXQoe1xuICAgIG5hbWUsXG4gICAgbG9jYXRpb24sXG4gICAgdmFsdWUsXG4gIH0pIHtcbiAgICAvLyBpZiB0aGVyZSdzIGEgdmFsdWUsIHNldCB0aGF0IGFzIHRoZSB2YWx1ZSBvZiBvYmplY3Qgdy8ga2V5ICduYW1lJ1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpc1tuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2MgPVxuICAgICAgICAobG9jYXRpb24uaW5kZXhPZignLicpICE9PSAtMSlcbiAgICAgICAgICA/IGxvY2F0aW9uLnNwbGl0KCcuJylcbiAgICAgICAgICA6IGxvY2F0aW9uO1xuXG4gICAgICB0aGlzW25hbWVdID1cbiAgICAgICAgKEFycmF5LmlzQXJyYXkobG9jKSlcbiAgICAgICAgICA/IGdldFRhcmdldCh7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBsb2Muc2xpY2UoMCwgbG9jLmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgdGFyZ2V0OiBsb2MucG9wKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICA6IHdpbmRvd1tsb2NdO1xuICAgIH1cblxuICAgIGlmICghdGhpc1tuYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9yZSNzZXQ6IG11c3QgcHJvdmlkZSBlaXRoZXIgYSBsb2NhdGlvbiBzdHJpbmcgb3IgYSB2YWx1ZScpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZS5qcyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHRyYWNrRG9tIGZyb20gJy4vdHJhY2tEb20nO1xuaW1wb3J0IHRyYWNrSnMgZnJvbSAnLi90cmFja0pzJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlJztcblxuZXhwb3J0IHtcbiAgdHJhY2tEb20sXG4gIHRyYWNrSnMsXG4gIHN0b3JlLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCBnZW5lcmF0ZVRyYWNrQ2xpY2sgZnJvbSAnLi91dGlsL2dlbmVyYXRlVHJhY2tDbGljayc7XG5pbXBvcnQgZGVsZWdhdGVFdmVudCBmcm9tICcuL3V0aWwvZGVsZWdhdGVFdmVudCc7XG5pbXBvcnQgZ2VuZXJhdGVUcmFja1Njcm9sbCBmcm9tICcuL3V0aWwvZ2VuZXJhdGVUcmFja1Njcm9sbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRzKSB7XG4gIGNvbnN0IGRhdGFBdHRyID0gb3B0cy5kYXRhQXR0ciB8fCAnZGF0YS1hcmN0cmFjayc7XG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiBpbml0VHJhY2tEb20oKSB7XG4gICAgaWYgKG9wdHMucHVibGljKSB7XG4gICAgICBzdG9yZS5zZXQoe1xuICAgICAgICBuYW1lOiAncGFnZURhdGEnLFxuICAgICAgICBsb2NhdGlvbjogKHR5cGVvZiBvcHRzLnB1YmxpYyA9PT0gJ3N0cmluZycpID8gb3B0cy5wdWJsaWMgOiBudWxsLFxuICAgICAgICB2YWx1ZTogKHR5cGVvZiBvcHRzLnB1YmxpYyA9PT0gJ29iamVjdCcpID8gb3B0cy5wdWJsaWMgOiBudWxsLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRzLmluaXQpIHtcbiAgICAgICAgb3B0cy5pbml0KHN0b3JlLnBhZ2VEYXRhKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuY2xpY2spIHtcbiAgICAgICAgY29uc3QgdHJhY2tDbGljayA9IGdlbmVyYXRlVHJhY2tDbGljayh7XG4gICAgICAgICAgY2I6IG9wdHMuY2xpY2ssXG4gICAgICAgICAgcGFnZURhdGE6IHN0b3JlLnBhZ2VEYXRhLFxuICAgICAgICAgIGRhdGFBdHRyLFxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZWdhdGVFdmVudCgnY2xpY2snLCB0cmFja0NsaWNrLCBgWyR7ZGF0YUF0dHJ9XWApO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0cy5zY3JvbGwpIHtcbiAgICAgICAgY29uc3QgdHJhY2tTY3JvbGwgPSBnZW5lcmF0ZVRyYWNrU2Nyb2xsKG9wdHMuc2Nyb2xsKShzdG9yZS5wYWdlRGF0YSk7XG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IHRyYWNrU2Nyb2xsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFja0RvbS5qcyIsImV4cG9ydCBjb25zdCBnZXRUYXJnZXQgPSBmdW5jdGlvbiAoe1xuICBiYXNlID0gd2luZG93LFxuICBwcm9wZXJ0aWVzLFxuICB0YXJnZXQsXG59KSB7XG4gIGNvbnN0IHByb3AgPSBwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMubGVuZ3RoID8gcHJvcGVydGllc1swXSA6IG51bGw7XG4gIGlmIChiYXNlW3Byb3BdKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGdldFRhcmdldCh7XG4gICAgICAgIGJhc2U6IGJhc2VbcHJvcF0sXG4gICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXMuc2xpY2UoMSwgcHJvcGVydGllcy5sZW5ndGgpLFxuICAgICAgICB0YXJnZXQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgcmV0dXJuIGJhc2VbdGFyZ2V0XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFRhcmdldDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2dldFRhcmdldC5qcyIsImltcG9ydCBtaW5lVHlwZSBmcm9tICcuL21pbmVUeXBlJztcbmltcG9ydCBsb2dnZXIgZnJvbSAnLi9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoe1xuICBjYixcbiAgcGFnZURhdGEsXG4gIGRhdGFBdHRyLFxufSkgPT4gKFxuICAoeyB0YXJnZXQgfSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjYih7XG4gICAgICAgIHR5cGU6IG1pbmVUeXBlKHRhcmdldCwgZGF0YUF0dHIpLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHBhZ2VEYXRhLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBsb2dnZXIuZGVmYXVsdEVycm9yKGVycik7XG4gICAgfVxuICB9XG4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZW5lcmF0ZVRyYWNrQ2xpY2suanMiLCJleHBvcnQgZGVmYXVsdCAodGFyZ2V0LCBzZWxlY3RvcikgPT4gdGFyZ2V0LmNsb3Nlc3QoYFske3NlbGVjdG9yfV1gKS5nZXRBdHRyaWJ1dGUoc2VsZWN0b3IpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbWluZVR5cGUuanMiLCJjbGFzcyBMb2dnZXIge1xuICBkZWZhdWx0RXJyb3IobXNnKSB7XG4gICAgY29uc29sZS5lcnJvcignQXJjdHJhY2sgZmFpbGVkIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcjogJywgbXNnKTtcbiAgfVxuICBtZXRob2RGYWlsZWQobWV0aG9kLCBtc2csIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgY2FsbGJhY2tNc2cgPSBjYWxsYmFjayA/IGB3aGlsZSB0cnlpbmcgdG8gZXhlY3V0ZSB5b3VyIGNhbGxiYWNrOiAke2NhbGxiYWNrfWAgOiAnJztcbiAgICBjb25zb2xlLmVycm9yKGAke21ldGhvZH0gZmFpbGVkICR7Y2FsbGJhY2tNc2d9LCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3JgLCBtc2cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBMb2dnZXIoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2xvZ2dlci5qcyIsIi8vIHJlcGxhY2VtZW50IGZvciAkKGRvY3VtZW50KS5vbignY2xpY2snLCBmbilcbmZ1bmN0aW9uIGRlbGVnYXRlRXZlbnQoZXZlbnRUeXBlLCBmbiwgbWF0Y2hlciwgZWwgPSBkb2N1bWVudCkge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGUpID0+IHtcbiAgICBpZiAoIW1hdGNoZXIgfHxcbiAgICAgIGUudGFyZ2V0Lm1hdGNoZXMobWF0Y2hlcikgfHwgLy8gZmlyZWZveFxuICAgICAgZS5jdXJyZW50VGFyZ2V0LmFjdGl2ZUVsZW1lbnQubWF0Y2hlcyhtYXRjaGVyKSB8fCAvLyBjaHJvbWVcbiAgICAgIC8vIHNhZmFyaSwgY2hlY2sgZm9yIHBhcmVudEVsZW1lbnQgZml4ZXMgYnVnIHdoZXJlIGRvY3VtZW50IGlzIGVsZW1lbnQgY2xpY2tlZCBvblxuICAgICAgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5tYXRjaGVzKG1hdGNoZXIpKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGZuKGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVsZWdhdGVFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2RlbGVnYXRlRXZlbnQuanMiLCJpbXBvcnQgU2Nyb2xsU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9TY3JvbGxTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgZW50cmllcyA9PiAoXG4gIG5ldyBTY3JvbGxTZXJ2aWNlKEFycmF5LmlzQXJyYXkoZW50cmllcykgPyBlbnRyaWVzIDogW2VudHJpZXNdKS5hY3RpdmF0ZSgpXG4pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZW5lcmF0ZVRyYWNrU2Nyb2xsLmpzIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuLi91dGlsL2dlbmVyYXRlSWQnO1xuaW1wb3J0IHByb2Nlc3NFbnRyeSBmcm9tICcuLi91dGlsL3Byb2Nlc3NFbnRyeSc7XG5pbXBvcnQgcHJvY2Vzc1RhcmdldCBmcm9tICcuLi91dGlsL3Byb2Nlc3NUYXJnZXQnO1xuXG5jb25zdCBERUZBVUxUX1RIUk9UVExFX1NQRUVEID0gMTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGVudHJpZXMsIHRocm90dGxlU3BlZWQgPSBERUZBVUxUX1RIUk9UVExFX1NQRUVEKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnRocm90dGxlU3BlZWQgPSB0aHJvdHRsZVNwZWVkO1xuICAgIHRoaXMudGVzdEVsZW1lbnRzID0gdGhpcy50ZXN0RWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudHJ5VHlwZXMgPSB7fTtcbiAgICB0aGlzLnBlbmRpbmdFbGVtZW50cyA9IHt9O1xuICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cyA9IHt9O1xuICAgIHRoaXMuc2Nyb2xsU3RhdHVzID0geyBsYXN0WTogMCwgZGlyZWN0aW9uOiAnZG93bicgfTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgdGhpcy5yZWdpc3RlckVudHJ5KHByb2Nlc3NFbnRyeShlbnRyeSkpO1xuICAgICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke2VudHJ5LnNlbGVjdG9yfV1gKTtcbiAgICAgIGNvbnN0IHRyYWNrT25jZU9ubHkgPSBlbnRyeS50cmFja09uY2VPbmx5ID8gZW50cnkudHJhY2tPbmNlT25seSA6IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFbGVtZW50KHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHR5cGU6IGVudHJ5LnR5cGUsXG4gICAgICAgICAgdHJhY2tPbmNlT25seSxcbiAgICAgICAgICBpZDogZ2VuZXJhdGVJZCgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFnZURhdGEgPT4gKFxuICAgICAgdGhyb3R0bGUoXG4gICAgICAgIHRoaXMudGVzdEVsZW1lbnRzLmJpbmQodGhpcywgcGFnZURhdGEpLFxuICAgICAgICB0aGlzLnRocm90dGxlU3BlZWQsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZ2lzdGVyRW50cnkoe1xuICAgIGxvYWQsXG4gICAgc2hvdWxkTG9hZCxcbiAgICB0eXBlLFxuICAgIHNlbGVjdG9yLFxuICB9KSB7XG4gICAgdGhpcy5lbnRyeVR5cGVzW3R5cGVdID0ge1xuICAgICAgbG9hZCxcbiAgICAgIHNob3VsZExvYWQsXG4gICAgICBzZWxlY3RvcixcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXJFbGVtZW50KHtcbiAgICBub2RlLFxuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgdHJhY2tPbmNlT25seSxcbiAgfSkge1xuICAgIHRoaXMucGVuZGluZ0VsZW1lbnRzW2lkXSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICB0YXJnZXQ6IG5vZGUsXG4gICAgICB0cmFja09uY2VPbmx5LFxuICAgIH07XG4gIH1cblxuICB0cmFuc2ZlckVsZW1lbnQoa2V5KSB7XG4gICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzW2tleV0gPSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICB9XG5cbiAgdGVzdEVsZW1lbnRzKHBhZ2VEYXRhKSB7XG4gICAgdGhpcy5kZXRlY3RTY3JvbGxEaXJlY3Rpb24oKTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBlbmRpbmdFbGVtZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdHJhY2tPbmNlT25seSxcbiAgICAgIH0gPSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmVudHJ5VHlwZXNbdHlwZV07XG4gICAgICBpZiAoZW50cnkuc2hvdWxkTG9hZCh0YXJnZXQsIHRoaXMuc2Nyb2xsU3RhdHVzLmRpcmVjdGlvbikpIHtcbiAgICAgICAgZW50cnkubG9hZCh7XG4gICAgICAgICAgdGFyZ2V0OiBwcm9jZXNzVGFyZ2V0KHRhcmdldCwgZW50cnkuc2VsZWN0b3IpLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgcGFnZURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRyYWNrT25jZU9ubHkpIHRoaXMudHJhbnNmZXJFbGVtZW50KGtleSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGlyZWN0aW9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzbHlTY3JvbGxlZCA9IHRoaXMuc2Nyb2xsZWRFbGVtZW50cztcbiAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSB0aGlzLnJlbW92ZVBlbmRpbmdFbGVtZW50cygpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5wZW5kaW5nRWxlbWVudHMsIHByZXZpb3VzbHlTY3JvbGxlZCk7XG4gIH1cblxuICBkZXRlY3RTY3JvbGxEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgeyBwYWdlWU9mZnNldDogY3VycmVudFkgfSA9IHdpbmRvdztcbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGlmIChjdXJyZW50WSA+PSB0aGlzLnNjcm9sbFN0YXR1cy5sYXN0WSkge1xuICAgICAgZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSAndXAnO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09IHRoaXMuc2Nyb2xsU3RhdHVzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5oYW5kbGVEaXJlY3Rpb25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFN0YXR1cy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5zY3JvbGxTdGF0dXMubGFzdFkgPSBjdXJyZW50WTtcbiAgfVxuXG4gIHJlbW92ZVBlbmRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBlbmRpbmdFbGVtZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByZXN1bHRba2V5XSA9IHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9TY3JvbGxTZXJ2aWNlLmpzIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGFscGggPSBbXG4gICdhJyxcbiAgJ2InLFxuICAnYycsXG4gICdkJyxcbiAgJ2UnLFxuICAnZicsXG4gICdnJyxcbiAgJ2gnLFxuICAnaScsXG4gICdqJyxcbiAgJ2snLFxuICAnbCcsXG4gICdtJyxcbiAgJ24nLFxuICAnbycsXG4gICdwJyxcbiAgJ3EnLFxuICAncicsXG4gICdzJyxcbiAgJ3QnLFxuICAndScsXG4gICd2JyxcbiAgJ3cnLFxuICAneCcsXG4gICd5JyxcbiAgJ3onLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI0KTtcbiAgICBpZiAocmFuZG9tICUgMiA9PT0gMCkge1xuICAgICAgcmVzdWx0ICs9IGFscGhbcmFuZG9tXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHJhbmRvbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2VuZXJhdGVJZC5qcyIsImNvbnN0IHByb2Nlc3NCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gIGlmICghYnVmZmVyLnRvcCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBidWZmZXIsIHsgdG9wOiAwIH0pO1xuICB9XG5cbiAgaWYgKCFidWZmZXIuYm90dG9tKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJ1ZmZlciwgeyBib3R0b206IDAgfSk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVyO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTaG91bGRMb2FkID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGJ1ZmZlcjtcbiAgICByZXR1cm4gKGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHJlY3QudG9wIDw9IHRvcCkgfHxcbiAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3VwJyAmJiByZWN0LmJvdHRvbSA+PSAod2luZG93LmlubmVySGVpZ2h0ICsgYm90dG9tKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgbGV0IHNob3VsZExvYWQ7XG4gIGlmIChlbnRyeS5idWZmZXIpIHtcbiAgICBzaG91bGRMb2FkID0gZ2VuZXJhdGVTaG91bGRMb2FkKHByb2Nlc3NCdWZmZXIoZW50cnkuYnVmZmVyKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvdWxkTG9hZCA9IGdlbmVyYXRlU2hvdWxkTG9hZCh7IHRvcDogMCwgYm90dG9tOiAwIH0pO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgIGxvYWQ6IGVudHJ5LmxvYWQsXG4gICAgICB0eXBlOiBlbnRyeS50eXBlLFxuICAgICAgc2VsZWN0b3I6IGVudHJ5LnNlbGVjdG9yLFxuICAgICAgc2hvdWxkTG9hZCxcbiAgICB9LFxuICApO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wcm9jZXNzRW50cnkuanMiLCJpbXBvcnQgY2FtZWxpemUgZnJvbSAnLi4vdmVuZG9yL2NhbWVsaXplJztcbmltcG9ydCBwYXJzZUF0dHJpYnV0ZVZhbHVlIGZyb20gJy4vcGFyc2VBdHRyaWJ1dGVWYWx1ZSc7XG5cbmNvbnN0IGRlRGFzaCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLS9nLCAnICcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYW1lID0gY2FtZWxpemUoZGVEYXNoKHNlbGVjdG9yKSk7XG4gIHJldHVybiB7IG5vZGU6IHRhcmdldCwgZGF0YTogcGFyc2VBdHRyaWJ1dGVWYWx1ZSh0YXJnZXQsIG5hbWUpIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wcm9jZXNzVGFyZ2V0LmpzIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk3MDUyNS9jb252ZXJ0aW5nLWFueS1zdHJpbmctaW50by1jYW1lbC1jYXNlI2Fuc3dlci0yOTcwNjY3XG5leHBvcnQgZGVmYXVsdCBzdHIgPT4gKFxuICBzdHIucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csIChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6IGxldHRlci50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpXG4gICkpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlbmRvci9jYW1lbGl6ZS5qcyIsIi8qXG4gIGlucHV0ICdub2RlJyBbRE9NIG5vZGVdOiBhbmFseXRpY3MgdGFyZ2V0IERPTSBub2RlXG4gIGlucHV0ICdhdHRyTmFtZScgW1N0cmluZ106IHByb3BlcnR5IG5hbWUgb2Ygbm9kZSdzICdkYXRhU2V0J1xuICBlbGVtZW50IG1heSBoYXZlIGRhdGEgYXR0cmlidXRlcyBpbiB0aGUgZm9ybSBvZjogZGF0YS1hdHRyTmFtZT1cImZvb1wiXG4gIG91dHB1dCBbU3RyaW5nXTogdmFsdWUgb2YgZGF0YSBhdHRyaWJ1dGUgZnJvbSBub2RlICdkYXRhU2V0J1xuICAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZShub2RlLCBhdHRyTmFtZSkge1xuICAvLyB1c2luZyAnc3RyaW5naWZ5JyBhbmQgJ3BhcnNlJyB0byBhZGRyZXNzIFdlYmtpdCAoaU9TKSBidWdcbiAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2MTQ1NFxuICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGUuZGF0YXNldCkpLFxuICApO1xuXG4gIGxldCBwYXJzZWRWYWx1ZTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xKSB7XG4gICAgICBwYXJzZWRWYWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkVmFsdWU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3BhcnNlQXR0cmlidXRlVmFsdWUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2IsIGV2ZW50TmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICBtZXRob2ROYW1lOiBuYW1lLFxuICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgICBhcmdzLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYWNrSnM6IGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVzY3JpcHRvciwgdmFsdWUgfTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrSnMuanMiXSwic291cmNlUm9vdCI6IiJ9