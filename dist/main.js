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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Arctrack__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Arctrack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Arctrack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trackJs_ts__ = __webpack_require__(26);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Arctrack", function() { return __WEBPACK_IMPORTED_MODULE_0__Arctrack___default.a; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "trackJs", function() { return __WEBPACK_IMPORTED_MODULE_1__trackJs_ts__["a"]; });


var store = {};



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(12);

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
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(5);

var _logger2 = _interopRequireDefault(_logger);

var _delegateEvent = __webpack_require__(6);

var _delegateEvent2 = _interopRequireDefault(_delegateEvent);

var _mineType = __webpack_require__(7);

var _mineType2 = _interopRequireDefault(_mineType);

var _ScrollService = __webpack_require__(8);

var _ScrollService2 = _interopRequireDefault(_ScrollService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arctrack = function () {
  function Arctrack(_ref) {
    var _this = this;

    var _ref$name = _ref.name,
        name = _ref$name === undefined ? 'arctrack' : _ref$name,
        opts = _ref.opts;

    _classCallCheck(this, Arctrack);

    this.dataAttr = 'data-' + name;
    window.onload = function () {
      try {
        _this.pageData = window[name];
      } catch (err) {
        _logger2.default.defaultError(err);
      }
      _this.onPageReady(opts);
    };
  }

  _createClass(Arctrack, [{
    key: 'onPageReady',
    value: function onPageReady(opts) {
      if (opts.clickCb) {
        var onClick = this.trackClick(opts.clickCb);
        (0, _delegateEvent2.default)('click', onClick, '[' + this.dataAttr + ']');
      }

      if (opts.scrollCb) {
        var onScroll = this.trackScroll(opts.scrollCb)(this.pageData);
        window.addEventListener('scroll', onScroll);
      }
      if (opts.initCb) opts.initCb(this.pageData);
    }
  }, {
    key: 'trackClick',
    value: function trackClick(cb) {
      var _this2 = this;

      return function (_ref2) {
        var target = _ref2.target;
        var pageData = _this2.pageData,
            dataAttr = _this2.dataAttr;

        var type = (0, _mineType2.default)(target, dataAttr);
        try {
          cb({
            type: type,
            target: target,
            pageData: pageData
          });
        } catch (err) {
          _logger2.default.methodFailed('trackClick', err, cb);
        }
      };
    }
  }, {
    key: 'trackScroll',
    value: function trackScroll(entries) {
      try {
        var scrollerInput = Array.isArray(entries) ? entries : [entries];
        this.scroller = new _ScrollService2.default(scrollerInput);
        return this.scroller.activate();
      } catch (err) {
        _logger2.default.methodFailed('trackScroll', err);
      }
    }
  }]);

  return Arctrack;
}();

exports.default = Arctrack;

/***/ }),
/* 5 */
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
      console.error('Arctrack constructor failed with the following error: ', msg);
    }
  }, {
    key: 'methodFailed',
    value: function methodFailed(method, msg, callback) {
      var callbackMsg = callback ? 'while trying to execute your callback: ' + callback : '';
      console.error('Arctrack#' + method + ' failed ' + callbackMsg + ', with the following error', msg);
    }
  }]);

  return Logger;
}();

exports.default = new Logger();

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, selector) {
  return target.closest("[" + selector + "]").getAttribute(selector);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(9);

var _throttle2 = _interopRequireDefault(_throttle);

var _generateId = __webpack_require__(20);

var _generateId2 = _interopRequireDefault(_generateId);

var _processEntry = __webpack_require__(21);

var _processEntry2 = _interopRequireDefault(_processEntry);

var _processTarget = __webpack_require__(22);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(10),
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    now = __webpack_require__(11),
    toNumber = __webpack_require__(14);

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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    isSymbol = __webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(19);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(3),
    getRawTag = __webpack_require__(17),
    objectToString = __webpack_require__(18);

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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, selector) {
  var name = (0, _camelize2.default)(deDash(selector));
  return { node: target, data: (0, _parseAttributeValue2.default)(target, name) };
};

var _camelize = __webpack_require__(23);

var _camelize2 = _interopRequireDefault(_camelize);

var _parseAttributeValue = __webpack_require__(24);

var _parseAttributeValue2 = _interopRequireDefault(_parseAttributeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deDash = function deDash(str) {
  return str.replace(/-/g, ' ');
};

/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_ts__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

/* harmony default export */ __webpack_exports__["a"] = (function (cb) {
    return function decorate(target, name, descriptor) {
        var oldValue = descriptor.value;
        var value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                cb(this, args, __WEBPACK_IMPORTED_MODULE_0__index_ts__["store"].data);
            }
            catch (err) {
                console.error(err);
            }
            return oldValue.apply(this, args);
        };
        return __assign({}, descriptor, { value: value });
    };
});


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZDhkYzNkNWFmZmUyZTYzODQ4ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXJjdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RlbGVnYXRlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbWluZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1Njcm9sbFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wcm9jZXNzRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcHJvY2Vzc1RhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9yL2NhbWVsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlQXR0cmlidXRlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWNrSnMudHMiXSwibmFtZXMiOlsiQXJjdHJhY2siLCJuYW1lIiwib3B0cyIsImRhdGFBdHRyIiwid2luZG93Iiwib25sb2FkIiwicGFnZURhdGEiLCJlcnIiLCJkZWZhdWx0RXJyb3IiLCJvblBhZ2VSZWFkeSIsImNsaWNrQ2IiLCJvbkNsaWNrIiwidHJhY2tDbGljayIsInNjcm9sbENiIiwib25TY3JvbGwiLCJ0cmFja1Njcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Q2IiLCJjYiIsInRhcmdldCIsInR5cGUiLCJtZXRob2RGYWlsZWQiLCJlbnRyaWVzIiwic2Nyb2xsZXJJbnB1dCIsIkFycmF5IiwiaXNBcnJheSIsInNjcm9sbGVyIiwiYWN0aXZhdGUiLCJMb2dnZXIiLCJtc2ciLCJjb25zb2xlIiwiZXJyb3IiLCJtZXRob2QiLCJjYWxsYmFjayIsImNhbGxiYWNrTXNnIiwiZGVsZWdhdGVFdmVudCIsImV2ZW50VHlwZSIsImZuIiwibWF0Y2hlciIsImVsIiwiZG9jdW1lbnQiLCJlIiwibWF0Y2hlcyIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJERUZBVUxUX1RIUk9UVExFX1NQRUVEIiwiU2Nyb2xsU2VydmljZSIsInRocm90dGxlU3BlZWQiLCJ0ZXN0RWxlbWVudHMiLCJiaW5kIiwiZW50cnlUeXBlcyIsInBlbmRpbmdFbGVtZW50cyIsInNjcm9sbGVkRWxlbWVudHMiLCJzY3JvbGxTdGF0dXMiLCJsYXN0WSIsImRpcmVjdGlvbiIsImZvckVhY2giLCJlbnRyeSIsInJlZ2lzdGVyRW50cnkiLCJub2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmFja09uY2VPbmx5IiwiaSIsImxlbmd0aCIsIm5vZGUiLCJyZWdpc3RlckVsZW1lbnQiLCJpZCIsImxvYWQiLCJzaG91bGRMb2FkIiwia2V5IiwiZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsInRyYW5zZmVyRWxlbWVudCIsInByZXZpb3VzbHlTY3JvbGxlZCIsInJlbW92ZVBlbmRpbmdFbGVtZW50cyIsImFzc2lnbiIsImN1cnJlbnRZIiwicGFnZVlPZmZzZXQiLCJoYW5kbGVEaXJlY3Rpb25DaGFuZ2UiLCJyZXN1bHQiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJhbHBoIiwiYnVmZmVyIiwiZ2VuZXJhdGVTaG91bGRMb2FkIiwicHJvY2Vzc0J1ZmZlciIsInRvcCIsImJvdHRvbSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbm5lckhlaWdodCIsImRlRGFzaCIsImRhdGEiLCJzdHIiLCJyZXBsYWNlIiwibGV0dGVyIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwicGFyc2VBdHRyaWJ1dGVWYWx1ZSIsImF0dHJOYW1lIiwiYXR0cmlidXRlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJwYXJzZWRWYWx1ZSIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNB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Ozs7OztBQ3RCQTtBQUNBOztBQUVBOzs7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FB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RGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZkOGRjM2Q1YWZmZTJlNjM4NDhmIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFyY3RyYWNrIGZyb20gJy4vQXJjdHJhY2snO1xuaW1wb3J0IHRyYWNrSnMgZnJvbSAnLi90cmFja0pzLnRzJztcblxuY29uc3Qgc3RvcmUgPSB7fTtcblxuZXhwb3J0IHtcbiAgQXJjdHJhY2ssXG4gIHRyYWNrSnMsXG4gIHN0b3JlLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGxvZ2dlciBmcm9tICcuL3V0aWwvbG9nZ2VyJztcbmltcG9ydCBkZWxlZ2F0ZUV2ZW50IGZyb20gJy4vdXRpbC9kZWxlZ2F0ZUV2ZW50JztcbmltcG9ydCBtaW5lVHlwZSBmcm9tICcuL3V0aWwvbWluZVR5cGUnO1xuaW1wb3J0IFNjcm9sbFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9TY3JvbGxTZXJ2aWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJjdHJhY2sge1xuICBjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnYXJjdHJhY2snLCBvcHRzIH0pIHtcbiAgICB0aGlzLmRhdGFBdHRyID0gYGRhdGEtJHtuYW1lfWA7XG4gICAgd2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMucGFnZURhdGEgPSB3aW5kb3dbbmFtZV07XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgbG9nZ2VyLmRlZmF1bHRFcnJvcihlcnIpO1xuICAgICAgfVxuICAgICAgdGhpcy5vblBhZ2VSZWFkeShvcHRzKTtcbiAgICB9O1xuICB9XG5cbiAgb25QYWdlUmVhZHkob3B0cykge1xuICAgIGlmIChvcHRzLmNsaWNrQ2IpIHtcbiAgICAgIGNvbnN0IG9uQ2xpY2sgPSB0aGlzLnRyYWNrQ2xpY2sob3B0cy5jbGlja0NiKTtcbiAgICAgIGRlbGVnYXRlRXZlbnQoJ2NsaWNrJywgb25DbGljaywgYFske3RoaXMuZGF0YUF0dHJ9XWApO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnNjcm9sbENiKSB7XG4gICAgICBjb25zdCBvblNjcm9sbCA9IHRoaXMudHJhY2tTY3JvbGwob3B0cy5zY3JvbGxDYikodGhpcy5wYWdlRGF0YSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuICAgIH1cbiAgICBpZiAob3B0cy5pbml0Q2IpIG9wdHMuaW5pdENiKHRoaXMucGFnZURhdGEpO1xuICB9XG5cbiAgdHJhY2tDbGljayhjYikge1xuICAgIHJldHVybiAoeyB0YXJnZXQgfSkgPT4ge1xuICAgICAgY29uc3QgeyBwYWdlRGF0YSwgZGF0YUF0dHIgfSA9IHRoaXM7XG4gICAgICBjb25zdCB0eXBlID0gbWluZVR5cGUodGFyZ2V0LCBkYXRhQXR0cik7XG4gICAgICB0cnkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgcGFnZURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZ2dlci5tZXRob2RGYWlsZWQoJ3RyYWNrQ2xpY2snLCBlcnIsIGNiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgdHJhY2tTY3JvbGwoZW50cmllcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzY3JvbGxlcklucHV0ID0gQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc107XG4gICAgICB0aGlzLnNjcm9sbGVyID0gbmV3IFNjcm9sbFNlcnZpY2Uoc2Nyb2xsZXJJbnB1dCk7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxlci5hY3RpdmF0ZSgpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nZ2VyLm1ldGhvZEZhaWxlZCgndHJhY2tTY3JvbGwnLCBlcnIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FyY3RyYWNrLmpzIiwiY2xhc3MgTG9nZ2VyIHtcbiAgZGVmYXVsdEVycm9yKG1zZykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FyY3RyYWNrIGNvbnN0cnVjdG9yIGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3I6ICcsIG1zZyk7XG4gIH1cbiAgbWV0aG9kRmFpbGVkKG1ldGhvZCwgbXNnLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGNhbGxiYWNrTXNnID0gY2FsbGJhY2sgPyBgd2hpbGUgdHJ5aW5nIHRvIGV4ZWN1dGUgeW91ciBjYWxsYmFjazogJHtjYWxsYmFja31gIDogJyc7XG4gICAgY29uc29sZS5lcnJvcihgQXJjdHJhY2sjJHttZXRob2R9IGZhaWxlZCAke2NhbGxiYWNrTXNnfSwgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCwgbXNnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCIvLyByZXBsYWNlbWVudCBmb3IgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZm4pXG5mdW5jdGlvbiBkZWxlZ2F0ZUV2ZW50KGV2ZW50VHlwZSwgZm4sIG1hdGNoZXIsIGVsID0gZG9jdW1lbnQpIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChlKSA9PiB7XG4gICAgaWYgKCFtYXRjaGVyIHx8XG4gICAgICBlLnRhcmdldC5tYXRjaGVzKG1hdGNoZXIpIHx8IC8vIGZpcmVmb3hcbiAgICAgIGUuY3VycmVudFRhcmdldC5hY3RpdmVFbGVtZW50Lm1hdGNoZXMobWF0Y2hlcikgfHwgLy8gY2hyb21lXG4gICAgICAvLyBzYWZhcmksIGNoZWNrIGZvciBwYXJlbnRFbGVtZW50IGZpeGVzIGJ1ZyB3aGVyZSBkb2N1bWVudCBpcyBlbGVtZW50IGNsaWNrZWQgb25cbiAgICAgIChlLnRhcmdldC5wYXJlbnRFbGVtZW50ICYmIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcyhtYXRjaGVyKSkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBmbihlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kZWxlZ2F0ZUV2ZW50LmpzIiwiZXhwb3J0IGRlZmF1bHQgKHRhcmdldCwgc2VsZWN0b3IpID0+IHRhcmdldC5jbG9zZXN0KGBbJHtzZWxlY3Rvcn1dYCkuZ2V0QXR0cmlidXRlKHNlbGVjdG9yKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL21pbmVUeXBlLmpzIiwiaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuLi91dGlsL2dlbmVyYXRlSWQnO1xuaW1wb3J0IHByb2Nlc3NFbnRyeSBmcm9tICcuLi91dGlsL3Byb2Nlc3NFbnRyeSc7XG5pbXBvcnQgcHJvY2Vzc1RhcmdldCBmcm9tICcuLi91dGlsL3Byb2Nlc3NUYXJnZXQnO1xuXG5jb25zdCBERUZBVUxUX1RIUk9UVExFX1NQRUVEID0gMTAwMDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGVudHJpZXMsIHRocm90dGxlU3BlZWQgPSBERUZBVUxUX1RIUk9UVExFX1NQRUVEKSB7XG4gICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcbiAgICB0aGlzLnRocm90dGxlU3BlZWQgPSB0aHJvdHRsZVNwZWVkO1xuICAgIHRoaXMudGVzdEVsZW1lbnRzID0gdGhpcy50ZXN0RWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmVudHJ5VHlwZXMgPSB7fTtcbiAgICB0aGlzLnBlbmRpbmdFbGVtZW50cyA9IHt9O1xuICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cyA9IHt9O1xuICAgIHRoaXMuc2Nyb2xsU3RhdHVzID0geyBsYXN0WTogMCwgZGlyZWN0aW9uOiAnZG93bicgfTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgdGhpcy5yZWdpc3RlckVudHJ5KHByb2Nlc3NFbnRyeShlbnRyeSkpO1xuICAgICAgY29uc3Qgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbZGF0YS0ke2VudHJ5LnNlbGVjdG9yfV1gKTtcbiAgICAgIGNvbnN0IHRyYWNrT25jZU9ubHkgPSBlbnRyeS50cmFja09uY2VPbmx5ID8gZW50cnkudHJhY2tPbmNlT25seSA6IGZhbHNlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFbGVtZW50KHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIHR5cGU6IGVudHJ5LnR5cGUsXG4gICAgICAgICAgdHJhY2tPbmNlT25seSxcbiAgICAgICAgICBpZDogZ2VuZXJhdGVJZCgpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcGFnZURhdGEgPT4gKFxuICAgICAgdGhyb3R0bGUoXG4gICAgICAgIHRoaXMudGVzdEVsZW1lbnRzLmJpbmQodGhpcywgcGFnZURhdGEpLFxuICAgICAgICB0aGlzLnRocm90dGxlU3BlZWQsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZ2lzdGVyRW50cnkoe1xuICAgIGxvYWQsXG4gICAgc2hvdWxkTG9hZCxcbiAgICB0eXBlLFxuICAgIHNlbGVjdG9yLFxuICB9KSB7XG4gICAgdGhpcy5lbnRyeVR5cGVzW3R5cGVdID0ge1xuICAgICAgbG9hZCxcbiAgICAgIHNob3VsZExvYWQsXG4gICAgICBzZWxlY3RvcixcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXJFbGVtZW50KHtcbiAgICBub2RlLFxuICAgIGlkLFxuICAgIHR5cGUsXG4gICAgdHJhY2tPbmNlT25seSxcbiAgfSkge1xuICAgIHRoaXMucGVuZGluZ0VsZW1lbnRzW2lkXSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICB0YXJnZXQ6IG5vZGUsXG4gICAgICB0cmFja09uY2VPbmx5LFxuICAgIH07XG4gIH1cblxuICB0cmFuc2ZlckVsZW1lbnQoa2V5KSB7XG4gICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzW2tleV0gPSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICB9XG5cbiAgdGVzdEVsZW1lbnRzKHBhZ2VEYXRhKSB7XG4gICAgdGhpcy5kZXRlY3RTY3JvbGxEaXJlY3Rpb24oKTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBlbmRpbmdFbGVtZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdHJhY2tPbmNlT25seSxcbiAgICAgIH0gPSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgICAgY29uc3QgZW50cnkgPSB0aGlzLmVudHJ5VHlwZXNbdHlwZV07XG4gICAgICBpZiAoZW50cnkuc2hvdWxkTG9hZCh0YXJnZXQsIHRoaXMuc2Nyb2xsU3RhdHVzLmRpcmVjdGlvbikpIHtcbiAgICAgICAgZW50cnkubG9hZCh7XG4gICAgICAgICAgdGFyZ2V0OiBwcm9jZXNzVGFyZ2V0KHRhcmdldCwgZW50cnkuc2VsZWN0b3IpLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgcGFnZURhdGEsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRyYWNrT25jZU9ubHkpIHRoaXMudHJhbnNmZXJFbGVtZW50KGtleSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGlyZWN0aW9uQ2hhbmdlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzbHlTY3JvbGxlZCA9IHRoaXMuc2Nyb2xsZWRFbGVtZW50cztcbiAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSB0aGlzLnJlbW92ZVBlbmRpbmdFbGVtZW50cygpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5wZW5kaW5nRWxlbWVudHMsIHByZXZpb3VzbHlTY3JvbGxlZCk7XG4gIH1cblxuICBkZXRlY3RTY3JvbGxEaXJlY3Rpb24oKSB7XG4gICAgY29uc3QgeyBwYWdlWU9mZnNldDogY3VycmVudFkgfSA9IHdpbmRvdztcbiAgICBsZXQgZGlyZWN0aW9uO1xuICAgIGlmIChjdXJyZW50WSA+PSB0aGlzLnNjcm9sbFN0YXR1cy5sYXN0WSkge1xuICAgICAgZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXJlY3Rpb24gPSAndXAnO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gIT09IHRoaXMuc2Nyb2xsU3RhdHVzLmRpcmVjdGlvbikge1xuICAgICAgdGhpcy5oYW5kbGVEaXJlY3Rpb25DaGFuZ2UoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFN0YXR1cy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgdGhpcy5zY3JvbGxTdGF0dXMubGFzdFkgPSBjdXJyZW50WTtcbiAgfVxuXG4gIHJlbW92ZVBlbmRpbmdFbGVtZW50cygpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnBlbmRpbmdFbGVtZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICByZXN1bHRba2V5XSA9IHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9TY3JvbGxTZXJ2aWNlLmpzIiwidmFyIGRlYm91bmNlID0gcmVxdWlyZSgnLi9kZWJvdW5jZScpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSB0aHJvdHRsZWQgZnVuY3Rpb24gdGhhdCBvbmx5IGludm9rZXMgYGZ1bmNgIGF0IG1vc3Qgb25jZSBwZXJcbiAqIGV2ZXJ5IGB3YWl0YCBtaWxsaXNlY29uZHMuIFRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgXG4gKiBtZXRob2QgdG8gY2FuY2VsIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvXG4gKiBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS4gUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2BcbiAqIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZSBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGBcbiAqIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZCB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGVcbiAqIHRocm90dGxlZCBmdW5jdGlvbi4gU3Vic2VxdWVudCBjYWxscyB0byB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uIHJldHVybiB0aGVcbiAqIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2AgaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIHRocm90dGxlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy50aHJvdHRsZWAgYW5kIGBfLmRlYm91bmNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHRocm90dGxlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRocm90dGxlIGludm9jYXRpb25zIHRvLlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHRocm90dGxlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgZXhjZXNzaXZlbHkgdXBkYXRpbmcgdGhlIHBvc2l0aW9uIHdoaWxlIHNjcm9sbGluZy5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfLnRocm90dGxlKHVwZGF0ZVBvc2l0aW9uLCAxMDApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHJlbmV3VG9rZW5gIHdoZW4gdGhlIGNsaWNrIGV2ZW50IGlzIGZpcmVkLCBidXQgbm90IG1vcmUgdGhhbiBvbmNlIGV2ZXJ5IDUgbWludXRlcy5cbiAqIHZhciB0aHJvdHRsZWQgPSBfLnRocm90dGxlKHJlbmV3VG9rZW4sIDMwMDAwMCwgeyAndHJhaWxpbmcnOiBmYWxzZSB9KTtcbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCB0aHJvdHRsZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgdGhyb3R0bGVkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCB0aHJvdHRsZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGVhZGluZyA9IHRydWUsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICdsZWFkaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLmxlYWRpbmcgOiBsZWFkaW5nO1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cbiAgcmV0dXJuIGRlYm91bmNlKGZ1bmMsIHdhaXQsIHtcbiAgICAnbGVhZGluZyc6IGxlYWRpbmcsXG4gICAgJ21heFdhaXQnOiB3YWl0LFxuICAgICd0cmFpbGluZyc6IHRyYWlsaW5nXG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgYWxwaCA9IFtcbiAgJ2EnLFxuICAnYicsXG4gICdjJyxcbiAgJ2QnLFxuICAnZScsXG4gICdmJyxcbiAgJ2cnLFxuICAnaCcsXG4gICdpJyxcbiAgJ2onLFxuICAnaycsXG4gICdsJyxcbiAgJ20nLFxuICAnbicsXG4gICdvJyxcbiAgJ3AnLFxuICAncScsXG4gICdyJyxcbiAgJ3MnLFxuICAndCcsXG4gICd1JyxcbiAgJ3YnLFxuICAndycsXG4gICd4JyxcbiAgJ3knLFxuICAneicsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjQpO1xuICAgIGlmIChyYW5kb20gJSAyID09PSAwKSB7XG4gICAgICByZXN1bHQgKz0gYWxwaFtyYW5kb21dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gcmFuZG9tO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZW5lcmF0ZUlkLmpzIiwiY29uc3QgcHJvY2Vzc0J1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgaWYgKCFidWZmZXIudG9wKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJ1ZmZlciwgeyB0b3A6IDAgfSk7XG4gIH1cblxuICBpZiAoIWJ1ZmZlci5ib3R0b20pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYnVmZmVyLCB7IGJvdHRvbTogMCB9KTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVNob3VsZExvYWQgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyB0b3AsIGJvdHRvbSB9ID0gYnVmZmVyO1xuICAgIHJldHVybiAoZGlyZWN0aW9uID09PSAnZG93bicgJiYgcmVjdC50b3AgPD0gdG9wKSB8fFxuICAgICAgICAgICAoZGlyZWN0aW9uID09PSAndXAnICYmIHJlY3QuYm90dG9tID49ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyBib3R0b20pKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbnRyeSkge1xuICBsZXQgc2hvdWxkTG9hZDtcbiAgaWYgKGVudHJ5LmJ1ZmZlcikge1xuICAgIHNob3VsZExvYWQgPSBnZW5lcmF0ZVNob3VsZExvYWQocHJvY2Vzc0J1ZmZlcihlbnRyeS5idWZmZXIpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG91bGRMb2FkID0gZ2VuZXJhdGVTaG91bGRMb2FkKHsgdG9wOiAwLCBib3R0b206IDAgfSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgbG9hZDogZW50cnkubG9hZCxcbiAgICAgIHR5cGU6IGVudHJ5LnR5cGUsXG4gICAgICBzZWxlY3RvcjogZW50cnkuc2VsZWN0b3IsXG4gICAgICBzaG91bGRMb2FkLFxuICAgIH0sXG4gICk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3Byb2Nlc3NFbnRyeS5qcyIsImltcG9ydCBjYW1lbGl6ZSBmcm9tICcuLi92ZW5kb3IvY2FtZWxpemUnO1xuaW1wb3J0IHBhcnNlQXR0cmlidXRlVmFsdWUgZnJvbSAnLi9wYXJzZUF0dHJpYnV0ZVZhbHVlJztcblxuY29uc3QgZGVEYXNoID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tL2csICcgJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hbWUgPSBjYW1lbGl6ZShkZURhc2goc2VsZWN0b3IpKTtcbiAgcmV0dXJuIHsgbm9kZTogdGFyZ2V0LCBkYXRhOiBwYXJzZUF0dHJpYnV0ZVZhbHVlKHRhcmdldCwgbmFtZSkgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3Byb2Nlc3NUYXJnZXQuanMiLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTcwNTI1L2NvbnZlcnRpbmctYW55LXN0cmluZy1pbnRvLWNhbWVsLWNhc2UjYW5zd2VyLTI5NzA2NjdcbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiAoXG4gIHN0ci5yZXBsYWNlKC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZywgKGxldHRlciwgaW5kZXgpID0+IChcbiAgICBpbmRleCA9PT0gMCA/IGxldHRlci50b0xvd2VyQ2FzZSgpIDogbGV0dGVyLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJylcbiAgKSlcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVuZG9yL2NhbWVsaXplLmpzIiwiLypcbiAgaW5wdXQgJ25vZGUnIFtET00gbm9kZV06IGFuYWx5dGljcyB0YXJnZXQgRE9NIG5vZGVcbiAgaW5wdXQgJ2F0dHJOYW1lJyBbU3RyaW5nXTogcHJvcGVydHkgbmFtZSBvZiBub2RlJ3MgJ2RhdGFTZXQnXG4gIGVsZW1lbnQgbWF5IGhhdmUgZGF0YSBhdHRyaWJ1dGVzIGluIHRoZSBmb3JtIG9mOiBkYXRhLWF0dHJOYW1lPVwiZm9vXCJcbiAgb3V0cHV0IFtTdHJpbmddOiB2YWx1ZSBvZiBkYXRhIGF0dHJpYnV0ZSBmcm9tIG5vZGUgJ2RhdGFTZXQnXG4gICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKG5vZGUsIGF0dHJOYW1lKSB7XG4gIC8vIHVzaW5nICdzdHJpbmdpZnknIGFuZCAncGFyc2UnIHRvIGFkZHJlc3MgV2Via2l0IChpT1MpIGJ1Z1xuICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTYxNDU0XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZS5kYXRhc2V0KSksXG4gICk7XG5cbiAgbGV0IHBhcnNlZFZhbHVlO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoa2V5LmluZGV4T2YoYXR0ck5hbWUpID4gLTEpIHtcbiAgICAgIHBhcnNlZFZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWRWYWx1ZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGFyc2VBdHRyaWJ1dGVWYWx1ZS5qcyIsImltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9pbmRleC50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjYikge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKHRoaXMsIGFyZ3MsIHN0b3JlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlc2NyaXB0b3IsIHZhbHVlIH07XG4gIH07XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFja0pzLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==