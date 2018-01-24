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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var freeGlobal = __webpack_require__(12);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackJs = exports.Arctrack = undefined;

var _Arctrack = __webpack_require__(4);

var _Arctrack2 = _interopRequireDefault(_Arctrack);

var _trackJs = __webpack_require__(25);

var _trackJs2 = _interopRequireDefault(_trackJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Arctrack = _Arctrack2.default;
exports.trackJs = _trackJs2.default;

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

var root = __webpack_require__(1);

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

var Symbol = __webpack_require__(2),
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

var Symbol = __webpack_require__(2);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cb) {
  return function decorate(target, name, descriptor) {
    var oldValue = descriptor.value;
    // eslint-disable-next-line no-param-reassign
    descriptor.value = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      try {
        cb(this, args);
      } catch (err) {
        console.error(err);
      }
      return oldValue.apply(this, args);
    };
    return descriptor;
  };
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmOWJkZjAxNGI2MGYyOTQ0N2QwZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXJjdHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RlbGVnYXRlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbWluZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1Njcm9sbFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wcm9jZXNzRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcHJvY2Vzc1RhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmVuZG9yL2NhbWVsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BhcnNlQXR0cmlidXRlVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWNrSnMuanMiXSwibmFtZXMiOlsiQXJjdHJhY2siLCJ0cmFja0pzIiwibmFtZSIsIm9wdHMiLCJkYXRhQXR0ciIsIndpbmRvdyIsIm9ubG9hZCIsInBhZ2VEYXRhIiwiZXJyIiwiZGVmYXVsdEVycm9yIiwib25QYWdlUmVhZHkiLCJjbGlja0NiIiwib25DbGljayIsInRyYWNrQ2xpY2siLCJzY3JvbGxDYiIsIm9uU2Nyb2xsIiwidHJhY2tTY3JvbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdENiIiwiY2IiLCJ0YXJnZXQiLCJ0eXBlIiwibWV0aG9kRmFpbGVkIiwiZW50cmllcyIsInNjcm9sbGVySW5wdXQiLCJBcnJheSIsImlzQXJyYXkiLCJzY3JvbGxlciIsImFjdGl2YXRlIiwiTG9nZ2VyIiwibXNnIiwiY29uc29sZSIsImVycm9yIiwibWV0aG9kIiwiY2FsbGJhY2siLCJjYWxsYmFja01zZyIsImRlbGVnYXRlRXZlbnQiLCJldmVudFR5cGUiLCJmbiIsIm1hdGNoZXIiLCJlbCIsImRvY3VtZW50IiwiZSIsIm1hdGNoZXMiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwic2VsZWN0b3IiLCJjbG9zZXN0IiwiZ2V0QXR0cmlidXRlIiwiREVGQVVMVF9USFJPVFRMRV9TUEVFRCIsIlNjcm9sbFNlcnZpY2UiLCJ0aHJvdHRsZVNwZWVkIiwidGVzdEVsZW1lbnRzIiwiYmluZCIsImVudHJ5VHlwZXMiLCJwZW5kaW5nRWxlbWVudHMiLCJzY3JvbGxlZEVsZW1lbnRzIiwic2Nyb2xsU3RhdHVzIiwibGFzdFkiLCJkaXJlY3Rpb24iLCJmb3JFYWNoIiwiZW50cnkiLCJyZWdpc3RlckVudHJ5Iiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHJhY2tPbmNlT25seSIsImkiLCJsZW5ndGgiLCJub2RlIiwicmVnaXN0ZXJFbGVtZW50IiwiaWQiLCJsb2FkIiwic2hvdWxkTG9hZCIsImtleSIsImRldGVjdFNjcm9sbERpcmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJ0cmFuc2ZlckVsZW1lbnQiLCJwcmV2aW91c2x5U2Nyb2xsZWQiLCJyZW1vdmVQZW5kaW5nRWxlbWVudHMiLCJhc3NpZ24iLCJjdXJyZW50WSIsInBhZ2VZT2Zmc2V0IiwiaGFuZGxlRGlyZWN0aW9uQ2hhbmdlIiwicmVzdWx0IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiYWxwaCIsImJ1ZmZlciIsImdlbmVyYXRlU2hvdWxkTG9hZCIsInByb2Nlc3NCdWZmZXIiLCJ0b3AiLCJib3R0b20iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJIZWlnaHQiLCJkZURhc2giLCJkYXRhIiwic3RyIiwicmVwbGFjZSIsImxldHRlciIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlQXR0cmlidXRlVmFsdWUiLCJhdHRyTmFtZSIsImF0dHJpYnV0ZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwicGFyc2VkVmFsdWUiLCJpbmRleE9mIiwiZGVjb3JhdGUiLCJkZXNjcmlwdG9yIiwib2xkVmFsdWUiLCJ2YWx1ZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBOzs7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RUFBbUNzQyxRQUFuQyxFQUE2QztBQUMxRDtBQUNBO0FBQ0EsTUFBTUMsYUFBYWhDLE9BQU9LLE1BQVAsQ0FDakIsRUFEaUIsRUFFakI0QixLQUFLQyxLQUFMLENBQVdELEtBQUtFLFNBQUwsQ0FBZTFDLEtBQUsyQyxPQUFwQixDQUFYLENBRmlCLENBQW5COztBQUtBLE1BQUlDLG9CQUFKO0FBQ0FyQyxTQUFPQyxJQUFQLENBQVkrQixVQUFaLEVBQXdCL0MsT0FBeEIsQ0FBZ0MsVUFBQ2EsR0FBRCxFQUFTO0FBQ3ZDLFFBQUlBLElBQUl3QyxPQUFKLENBQVlQLFFBQVosSUFBd0IsQ0FBQyxDQUE3QixFQUFnQztBQUM5Qk0sb0JBQWNMLFdBQVdsQyxHQUFYLENBQWQ7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUFPdUMsV0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7a0JDckJjLFVBQVVqRyxFQUFWLEVBQWM7QUFDM0IsU0FBTyxTQUFTbUcsUUFBVCxDQUFrQmxHLE1BQWxCLEVBQTBCbEIsSUFBMUIsRUFBZ0NxSCxVQUFoQyxFQUE0QztBQUNqRCxRQUFNQyxXQUFXRCxXQUFXRSxLQUE1QjtBQUNBO0FBQ0FGLGVBQVdFLEtBQVgsR0FBbUIsWUFBbUI7QUFBQSx3Q0FBTkMsSUFBTTtBQUFOQSxZQUFNO0FBQUE7O0FBQ3BDLFVBQUk7QUFDRnZHLFdBQUcsSUFBSCxFQUFTdUcsSUFBVDtBQUNELE9BRkQsQ0FFRSxPQUFPbEgsR0FBUCxFQUFZO0FBQ1p1QixnQkFBUUMsS0FBUixDQUFjeEIsR0FBZDtBQUNEO0FBQ0QsYUFBT2dILFNBQVNHLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRCxJQUFyQixDQUFQO0FBQ0QsS0FQRDtBQVFBLFdBQU9ILFVBQVA7QUFDRCxHQVpEO0FBYUQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjliZGYwMTRiNjBmMjk0NDdkMGUiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcmN0cmFjayBmcm9tICcuL0FyY3RyYWNrJztcbmltcG9ydCB0cmFja0pzIGZyb20gJy4vdHJhY2tKcyc7XG5cbmV4cG9ydCB7XG4gIEFyY3RyYWNrLFxuICB0cmFja0pzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBsb2dnZXIgZnJvbSAnLi91dGlsL2xvZ2dlcic7XG5pbXBvcnQgZGVsZWdhdGVFdmVudCBmcm9tICcuL3V0aWwvZGVsZWdhdGVFdmVudCc7XG5pbXBvcnQgbWluZVR5cGUgZnJvbSAnLi91dGlsL21pbmVUeXBlJztcbmltcG9ydCBTY3JvbGxTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvU2Nyb2xsU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY3RyYWNrIHtcbiAgY29uc3RydWN0b3IoeyBuYW1lID0gJ2FyY3RyYWNrJywgb3B0cyB9KSB7XG4gICAgdGhpcy5kYXRhQXR0ciA9IGBkYXRhLSR7bmFtZX1gO1xuICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnBhZ2VEYXRhID0gd2luZG93W25hbWVdO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGxvZ2dlci5kZWZhdWx0RXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25QYWdlUmVhZHkob3B0cyk7XG4gICAgfTtcbiAgfVxuXG4gIG9uUGFnZVJlYWR5KG9wdHMpIHtcbiAgICBpZiAob3B0cy5jbGlja0NiKSB7XG4gICAgICBjb25zdCBvbkNsaWNrID0gdGhpcy50cmFja0NsaWNrKG9wdHMuY2xpY2tDYik7XG4gICAgICBkZWxlZ2F0ZUV2ZW50KCdjbGljaycsIG9uQ2xpY2ssIGBbJHt0aGlzLmRhdGFBdHRyfV1gKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zY3JvbGxDYikge1xuICAgICAgY29uc3Qgb25TY3JvbGwgPSB0aGlzLnRyYWNrU2Nyb2xsKG9wdHMuc2Nyb2xsQ2IpKHRoaXMucGFnZURhdGEpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcbiAgICB9XG4gICAgaWYgKG9wdHMuaW5pdENiKSBvcHRzLmluaXRDYih0aGlzLnBhZ2VEYXRhKTtcbiAgfVxuXG4gIHRyYWNrQ2xpY2soY2IpIHtcbiAgICByZXR1cm4gKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgIGNvbnN0IHsgcGFnZURhdGEsIGRhdGFBdHRyIH0gPSB0aGlzO1xuICAgICAgY29uc3QgdHlwZSA9IG1pbmVUeXBlKHRhcmdldCwgZGF0YUF0dHIpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgIHBhZ2VEYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBsb2dnZXIubWV0aG9kRmFpbGVkKCd0cmFja0NsaWNrJywgZXJyLCBjYik7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHRyYWNrU2Nyb2xsKGVudHJpZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc2Nyb2xsZXJJbnB1dCA9IEFycmF5LmlzQXJyYXkoZW50cmllcykgPyBlbnRyaWVzIDogW2VudHJpZXNdO1xuICAgICAgdGhpcy5zY3JvbGxlciA9IG5ldyBTY3JvbGxTZXJ2aWNlKHNjcm9sbGVySW5wdXQpO1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsZXIuYWN0aXZhdGUoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ2dlci5tZXRob2RGYWlsZWQoJ3RyYWNrU2Nyb2xsJywgZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BcmN0cmFjay5qcyIsImNsYXNzIExvZ2dlciB7XG4gIGRlZmF1bHRFcnJvcihtc2cpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBcmN0cmFjayBjb25zdHJ1Y3RvciBmYWlsZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yOiAnLCBtc2cpO1xuICB9XG4gIG1ldGhvZEZhaWxlZChtZXRob2QsIG1zZywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja01zZyA9IGNhbGxiYWNrID8gYHdoaWxlIHRyeWluZyB0byBleGVjdXRlIHlvdXIgY2FsbGJhY2s6ICR7Y2FsbGJhY2t9YCA6ICcnO1xuICAgIGNvbnNvbGUuZXJyb3IoYEFyY3RyYWNrIyR7bWV0aG9kfSBmYWlsZWQgJHtjYWxsYmFja01zZ30sIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcmAsIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2dlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiLy8gcmVwbGFjZW1lbnQgZm9yICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZuKVxuZnVuY3Rpb24gZGVsZWdhdGVFdmVudChldmVudFR5cGUsIGZuLCBtYXRjaGVyLCBlbCA9IGRvY3VtZW50KSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZSkgPT4ge1xuICAgIGlmICghbWF0Y2hlciB8fFxuICAgICAgZS50YXJnZXQubWF0Y2hlcyhtYXRjaGVyKSB8fCAvLyBmaXJlZm94XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKG1hdGNoZXIpIHx8IC8vIGNocm9tZVxuICAgICAgLy8gc2FmYXJpLCBjaGVjayBmb3IgcGFyZW50RWxlbWVudCBmaXhlcyBidWcgd2hlcmUgZG9jdW1lbnQgaXMgZWxlbWVudCBjbGlja2VkIG9uXG4gICAgICAoZS50YXJnZXQucGFyZW50RWxlbWVudCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMobWF0Y2hlcikpKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZm4oZSk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZUV2ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZGVsZWdhdGVFdmVudC5qcyIsImV4cG9ydCBkZWZhdWx0ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB0YXJnZXQuY2xvc2VzdChgWyR7c2VsZWN0b3J9XWApLmdldEF0dHJpYnV0ZShzZWxlY3Rvcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9taW5lVHlwZS5qcyIsImltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi4vdXRpbC9nZW5lcmF0ZUlkJztcbmltcG9ydCBwcm9jZXNzRW50cnkgZnJvbSAnLi4vdXRpbC9wcm9jZXNzRW50cnknO1xuaW1wb3J0IHByb2Nlc3NUYXJnZXQgZnJvbSAnLi4vdXRpbC9wcm9jZXNzVGFyZ2V0JztcblxuY29uc3QgREVGQVVMVF9USFJPVFRMRV9TUEVFRCA9IDEwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihlbnRyaWVzLCB0aHJvdHRsZVNwZWVkID0gREVGQVVMVF9USFJPVFRMRV9TUEVFRCkge1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy50aHJvdHRsZVNwZWVkID0gdGhyb3R0bGVTcGVlZDtcbiAgICB0aGlzLnRlc3RFbGVtZW50cyA9IHRoaXMudGVzdEVsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbnRyeVR5cGVzID0ge307XG4gICAgdGhpcy5wZW5kaW5nRWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLnNjcm9sbFN0YXR1cyA9IHsgbGFzdFk6IDAsIGRpcmVjdGlvbjogJ2Rvd24nIH07XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXJFbnRyeShwcm9jZXNzRW50cnkoZW50cnkpKTtcbiAgICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHtlbnRyeS5zZWxlY3Rvcn1dYCk7XG4gICAgICBjb25zdCB0cmFja09uY2VPbmx5ID0gZW50cnkudHJhY2tPbmNlT25seSA/IGVudHJ5LnRyYWNrT25jZU9ubHkgOiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbWVudCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0eXBlOiBlbnRyeS50eXBlLFxuICAgICAgICAgIHRyYWNrT25jZU9ubHksXG4gICAgICAgICAgaWQ6IGdlbmVyYXRlSWQoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhZ2VEYXRhID0+IChcbiAgICAgIHRocm90dGxlKFxuICAgICAgICB0aGlzLnRlc3RFbGVtZW50cy5iaW5kKHRoaXMsIHBhZ2VEYXRhKSxcbiAgICAgICAgdGhpcy50aHJvdHRsZVNwZWVkLFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZWdpc3RlckVudHJ5KHtcbiAgICBsb2FkLFxuICAgIHNob3VsZExvYWQsXG4gICAgdHlwZSxcbiAgICBzZWxlY3RvcixcbiAgfSkge1xuICAgIHRoaXMuZW50cnlUeXBlc1t0eXBlXSA9IHtcbiAgICAgIGxvYWQsXG4gICAgICBzaG91bGRMb2FkLFxuICAgICAgc2VsZWN0b3IsXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyRWxlbWVudCh7XG4gICAgbm9kZSxcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIHRyYWNrT25jZU9ubHksXG4gIH0pIHtcbiAgICB0aGlzLnBlbmRpbmdFbGVtZW50c1tpZF0gPSB7XG4gICAgICB0eXBlLFxuICAgICAgdGFyZ2V0OiBub2RlLFxuICAgICAgdHJhY2tPbmNlT25seSxcbiAgICB9O1xuICB9XG5cbiAgdHJhbnNmZXJFbGVtZW50KGtleSkge1xuICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50c1trZXldID0gdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgfVxuXG4gIHRlc3RFbGVtZW50cyhwYWdlRGF0YSkge1xuICAgIHRoaXMuZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uKCk7XG4gICAgT2JqZWN0LmtleXModGhpcy5wZW5kaW5nRWxlbWVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRyYWNrT25jZU9ubHksXG4gICAgICB9ID0gdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeVR5cGVzW3R5cGVdO1xuICAgICAgaWYgKGVudHJ5LnNob3VsZExvYWQodGFyZ2V0LCB0aGlzLnNjcm9sbFN0YXR1cy5kaXJlY3Rpb24pKSB7XG4gICAgICAgIGVudHJ5LmxvYWQoe1xuICAgICAgICAgIHRhcmdldDogcHJvY2Vzc1RhcmdldCh0YXJnZXQsIGVudHJ5LnNlbGVjdG9yKSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHBhZ2VEYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF0cmFja09uY2VPbmx5KSB0aGlzLnRyYW5zZmVyRWxlbWVudChrZXkpO1xuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURpcmVjdGlvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c2x5U2Nyb2xsZWQgPSB0aGlzLnNjcm9sbGVkRWxlbWVudHM7XG4gICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzID0gdGhpcy5yZW1vdmVQZW5kaW5nRWxlbWVudHMoKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMucGVuZGluZ0VsZW1lbnRzLCBwcmV2aW91c2x5U2Nyb2xsZWQpO1xuICB9XG5cbiAgZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IHsgcGFnZVlPZmZzZXQ6IGN1cnJlbnRZIH0gPSB3aW5kb3c7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBpZiAoY3VycmVudFkgPj0gdGhpcy5zY3JvbGxTdGF0dXMubGFzdFkpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdkb3duJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gJ3VwJztcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSB0aGlzLnNjcm9sbFN0YXR1cy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuaGFuZGxlRGlyZWN0aW9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxTdGF0dXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuc2Nyb2xsU3RhdHVzLmxhc3RZID0gY3VycmVudFk7XG4gIH1cblxuICByZW1vdmVQZW5kaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wZW5kaW5nRWxlbWVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvU2Nyb2xsU2VydmljZS5qcyIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGFscGggPSBbXG4gICdhJyxcbiAgJ2InLFxuICAnYycsXG4gICdkJyxcbiAgJ2UnLFxuICAnZicsXG4gICdnJyxcbiAgJ2gnLFxuICAnaScsXG4gICdqJyxcbiAgJ2snLFxuICAnbCcsXG4gICdtJyxcbiAgJ24nLFxuICAnbycsXG4gICdwJyxcbiAgJ3EnLFxuICAncicsXG4gICdzJyxcbiAgJ3QnLFxuICAndScsXG4gICd2JyxcbiAgJ3cnLFxuICAneCcsXG4gICd5JyxcbiAgJ3onLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI0KTtcbiAgICBpZiAocmFuZG9tICUgMiA9PT0gMCkge1xuICAgICAgcmVzdWx0ICs9IGFscGhbcmFuZG9tXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHJhbmRvbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2VuZXJhdGVJZC5qcyIsImNvbnN0IHByb2Nlc3NCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gIGlmICghYnVmZmVyLnRvcCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBidWZmZXIsIHsgdG9wOiAwIH0pO1xuICB9XG5cbiAgaWYgKCFidWZmZXIuYm90dG9tKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJ1ZmZlciwgeyBib3R0b206IDAgfSk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVyO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTaG91bGRMb2FkID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGJ1ZmZlcjtcbiAgICByZXR1cm4gKGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHJlY3QudG9wIDw9IHRvcCkgfHxcbiAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3VwJyAmJiByZWN0LmJvdHRvbSA+PSAod2luZG93LmlubmVySGVpZ2h0ICsgYm90dG9tKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgbGV0IHNob3VsZExvYWQ7XG4gIGlmIChlbnRyeS5idWZmZXIpIHtcbiAgICBzaG91bGRMb2FkID0gZ2VuZXJhdGVTaG91bGRMb2FkKHByb2Nlc3NCdWZmZXIoZW50cnkuYnVmZmVyKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvdWxkTG9hZCA9IGdlbmVyYXRlU2hvdWxkTG9hZCh7IHRvcDogMCwgYm90dG9tOiAwIH0pO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgIGxvYWQ6IGVudHJ5LmxvYWQsXG4gICAgICB0eXBlOiBlbnRyeS50eXBlLFxuICAgICAgc2VsZWN0b3I6IGVudHJ5LnNlbGVjdG9yLFxuICAgICAgc2hvdWxkTG9hZCxcbiAgICB9LFxuICApO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wcm9jZXNzRW50cnkuanMiLCJpbXBvcnQgY2FtZWxpemUgZnJvbSAnLi4vdmVuZG9yL2NhbWVsaXplJztcbmltcG9ydCBwYXJzZUF0dHJpYnV0ZVZhbHVlIGZyb20gJy4vcGFyc2VBdHRyaWJ1dGVWYWx1ZSc7XG5cbmNvbnN0IGRlRGFzaCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLS9nLCAnICcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYW1lID0gY2FtZWxpemUoZGVEYXNoKHNlbGVjdG9yKSk7XG4gIHJldHVybiB7IG5vZGU6IHRhcmdldCwgZGF0YTogcGFyc2VBdHRyaWJ1dGVWYWx1ZSh0YXJnZXQsIG5hbWUpIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wcm9jZXNzVGFyZ2V0LmpzIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk3MDUyNS9jb252ZXJ0aW5nLWFueS1zdHJpbmctaW50by1jYW1lbC1jYXNlI2Fuc3dlci0yOTcwNjY3XG5leHBvcnQgZGVmYXVsdCBzdHIgPT4gKFxuICBzdHIucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csIChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6IGxldHRlci50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpXG4gICkpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlbmRvci9jYW1lbGl6ZS5qcyIsIi8qXG4gIGlucHV0ICdub2RlJyBbRE9NIG5vZGVdOiBhbmFseXRpY3MgdGFyZ2V0IERPTSBub2RlXG4gIGlucHV0ICdhdHRyTmFtZScgW1N0cmluZ106IHByb3BlcnR5IG5hbWUgb2Ygbm9kZSdzICdkYXRhU2V0J1xuICBlbGVtZW50IG1heSBoYXZlIGRhdGEgYXR0cmlidXRlcyBpbiB0aGUgZm9ybSBvZjogZGF0YS1hdHRyTmFtZT1cImZvb1wiXG4gIG91dHB1dCBbU3RyaW5nXTogdmFsdWUgb2YgZGF0YSBhdHRyaWJ1dGUgZnJvbSBub2RlICdkYXRhU2V0J1xuICAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZShub2RlLCBhdHRyTmFtZSkge1xuICAvLyB1c2luZyAnc3RyaW5naWZ5JyBhbmQgJ3BhcnNlJyB0byBhZGRyZXNzIFdlYmtpdCAoaU9TKSBidWdcbiAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2MTQ1NFxuICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGUuZGF0YXNldCkpLFxuICApO1xuXG4gIGxldCBwYXJzZWRWYWx1ZTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xKSB7XG4gICAgICBwYXJzZWRWYWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkVmFsdWU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3BhcnNlQXR0cmlidXRlVmFsdWUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGRlY29yYXRlKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKHRoaXMsIGFyZ3MpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiBkZXNjcmlwdG9yO1xuICB9O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhY2tKcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=