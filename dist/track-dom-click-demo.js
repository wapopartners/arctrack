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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

exports.default = function (opts) {
  var dataAttr = opts.dataAttr || 'data-arctrack';
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

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _src = __webpack_require__(4);

(0, _src.trackDom)({
  click: function click(_ref) {
    var target = _ref.target,
        type = _ref.type;

    console.log('firing analytics for \'' + type + '!\'');
    console.log('And here\'s the click target:\n', target);
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZGFiYjcxOGM1NzhiMTFiNzZmMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYWNrRG9tLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dldFRhcmdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZVRyYWNrQ2xpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbWluZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RlbGVnYXRlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVUcmFja1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvU2Nyb2xsU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3Byb2Nlc3NFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wcm9jZXNzVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3IvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VBdHRyaWJ1dGVWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhY2tKcy5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2NvZGUvdHJhY2stZG9tL2NsaWNrL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwibmFtZSIsImxvY2F0aW9uIiwidmFsdWUiLCJsb2MiLCJpbmRleE9mIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJwcm9wZXJ0aWVzIiwic2xpY2UiLCJsZW5ndGgiLCJ0YXJnZXQiLCJwb3AiLCJ3aW5kb3ciLCJFcnJvciIsInN0b3JlIiwidHJhY2tEb20iLCJ0cmFja0pzIiwib3B0cyIsImRhdGFBdHRyIiwiY2xpY2siLCJ0cmFja0NsaWNrIiwiY2IiLCJwYWdlRGF0YSIsInNjcm9sbCIsInRyYWNrU2Nyb2xsIiwib25zY3JvbGwiLCJnZXRUYXJnZXQiLCJiYXNlIiwicHJvcCIsInR5cGUiLCJlcnIiLCJkZWZhdWx0RXJyb3IiLCJzZWxlY3RvciIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJMb2dnZXIiLCJtc2ciLCJjb25zb2xlIiwiZXJyb3IiLCJtZXRob2QiLCJjYWxsYmFjayIsImNhbGxiYWNrTXNnIiwiZGVsZWdhdGVFdmVudCIsImV2ZW50VHlwZSIsImZuIiwibWF0Y2hlciIsImVsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1hdGNoZXMiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiZW50cmllcyIsImFjdGl2YXRlIiwiREVGQVVMVF9USFJPVFRMRV9TUEVFRCIsIlNjcm9sbFNlcnZpY2UiLCJ0aHJvdHRsZVNwZWVkIiwidGVzdEVsZW1lbnRzIiwiYmluZCIsImVudHJ5VHlwZXMiLCJwZW5kaW5nRWxlbWVudHMiLCJzY3JvbGxlZEVsZW1lbnRzIiwic2Nyb2xsU3RhdHVzIiwibGFzdFkiLCJkaXJlY3Rpb24iLCJmb3JFYWNoIiwiZW50cnkiLCJyZWdpc3RlckVudHJ5Iiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHJhY2tPbmNlT25seSIsImkiLCJub2RlIiwicmVnaXN0ZXJFbGVtZW50IiwiaWQiLCJsb2FkIiwic2hvdWxkTG9hZCIsImtleSIsImRldGVjdFNjcm9sbERpcmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJ0cmFuc2ZlckVsZW1lbnQiLCJwcmV2aW91c2x5U2Nyb2xsZWQiLCJyZW1vdmVQZW5kaW5nRWxlbWVudHMiLCJhc3NpZ24iLCJjdXJyZW50WSIsInBhZ2VZT2Zmc2V0IiwiaGFuZGxlRGlyZWN0aW9uQ2hhbmdlIiwicmVzdWx0IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiYWxwaCIsImJ1ZmZlciIsImdlbmVyYXRlU2hvdWxkTG9hZCIsInByb2Nlc3NCdWZmZXIiLCJ0b3AiLCJib3R0b20iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJIZWlnaHQiLCJkZURhc2giLCJkYXRhIiwic3RyIiwicmVwbGFjZSIsImxldHRlciIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlQXR0cmlidXRlVmFsdWUiLCJhdHRyTmFtZSIsImF0dHJpYnV0ZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwicGFyc2VkVmFsdWUiLCJldmVudE5hbWUiLCJkZWNvcmF0ZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsImFyZ3MiLCJtZXRob2ROYW1lIiwiaW5zdGFuY2UiLCJhcHBseSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Ozs7Ozs7O0lBRU1BLEs7Ozs7Ozs7OEJBS0Q7QUFBQSxVQUhEQyxJQUdDLFFBSERBLElBR0M7QUFBQSxVQUZEQyxRQUVD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Q0E7O0FBRUE7Ozs7Ozs7QUN0QkE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFD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SUFBUSxRQUFSQSxJQUFROztBQUN0QlEsWUFBUTZGLEdBQVIsNkJBQXFDckcsSUFBckM7QUFDQVEsWUFBUTZGLEdBQVIsQ0FBWSxpQ0FBWixFQUErQ3hILE1BQS9DO0FBQ0Q7QUFKTSxDQUFULEUiLCJmaWxlIjoidHJhY2stZG9tLWNsaWNrLWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2RhYmI3MThjNTc4YjExYjc2ZjMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBnZXRUYXJnZXQgZnJvbSAnLi91dGlsL2dldFRhcmdldCc7XG5cbmNsYXNzIFN0b3JlIHtcbiAgc2V0KHtcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICAgIHZhbHVlLFxuICB9KSB7XG4gICAgLy8gaWYgdGhlcmUncyBhIHZhbHVlLCBzZXQgdGhhdCBhcyB0aGUgdmFsdWUgb2Ygb2JqZWN0IHcvIGtleSAnbmFtZSdcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9jID1cbiAgICAgICAgKGxvY2F0aW9uLmluZGV4T2YoJy4nKSAhPT0gLTEpXG4gICAgICAgICAgPyBsb2NhdGlvbi5zcGxpdCgnLicpXG4gICAgICAgICAgOiBsb2NhdGlvbjtcblxuICAgICAgdGhpc1tuYW1lXSA9XG4gICAgICAgIChBcnJheS5pc0FycmF5KGxvYykpXG4gICAgICAgICAgPyBnZXRUYXJnZXQoe1xuICAgICAgICAgICAgcHJvcGVydGllczogbG9jLnNsaWNlKDAsIGxvYy5sZW5ndGggLSAxKSxcbiAgICAgICAgICAgIHRhcmdldDogbG9jLnBvcCgpLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgOiB3aW5kb3dbbG9jXTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXNbbmFtZV0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcmUjc2V0OiBtdXN0IHByb3ZpZGUgZWl0aGVyIGEgbG9jYXRpb24gc3RyaW5nIG9yIGEgdmFsdWUnKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmUuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgdHJhY2tEb20gZnJvbSAnLi90cmFja0RvbSc7XG5pbXBvcnQgdHJhY2tKcyBmcm9tICcuL3RyYWNrSnMnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUnO1xuXG5leHBvcnQge1xuICB0cmFja0RvbSxcbiAgdHJhY2tKcyxcbiAgc3RvcmUsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUnO1xuaW1wb3J0IGdlbmVyYXRlVHJhY2tDbGljayBmcm9tICcuL3V0aWwvZ2VuZXJhdGVUcmFja0NsaWNrJztcbmltcG9ydCBkZWxlZ2F0ZUV2ZW50IGZyb20gJy4vdXRpbC9kZWxlZ2F0ZUV2ZW50JztcbmltcG9ydCBnZW5lcmF0ZVRyYWNrU2Nyb2xsIGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRyYWNrU2Nyb2xsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdHMpIHtcbiAgY29uc3QgZGF0YUF0dHIgPSBvcHRzLmRhdGFBdHRyIHx8ICdkYXRhLWFyY3RyYWNrJztcbiAgaWYgKG9wdHMuY2xpY2spIHtcbiAgICBjb25zdCB0cmFja0NsaWNrID0gZ2VuZXJhdGVUcmFja0NsaWNrKHtcbiAgICAgIGNiOiBvcHRzLmNsaWNrLFxuICAgICAgcGFnZURhdGE6IHN0b3JlLnBhZ2VEYXRhLFxuICAgICAgZGF0YUF0dHIsXG4gICAgfSk7XG4gICAgZGVsZWdhdGVFdmVudCgnY2xpY2snLCB0cmFja0NsaWNrLCBgWyR7ZGF0YUF0dHJ9XWApO1xuICB9XG5cbiAgaWYgKG9wdHMuc2Nyb2xsKSB7XG4gICAgY29uc3QgdHJhY2tTY3JvbGwgPSBnZW5lcmF0ZVRyYWNrU2Nyb2xsKG9wdHMuc2Nyb2xsKShzdG9yZS5wYWdlRGF0YSk7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gdHJhY2tTY3JvbGw7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrRG9tLmpzIiwiZXhwb3J0IGNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uICh7XG4gIGJhc2UgPSB3aW5kb3csXG4gIHByb3BlcnRpZXMsXG4gIHRhcmdldCxcbn0pIHtcbiAgY29uc3QgcHJvcCA9IHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5sZW5ndGggPyBwcm9wZXJ0aWVzWzBdIDogbnVsbDtcbiAgaWYgKGJhc2VbcHJvcF0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0VGFyZ2V0KHtcbiAgICAgICAgYmFzZTogYmFzZVtwcm9wXSxcbiAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllcy5zbGljZSgxLCBwcm9wZXJ0aWVzLmxlbmd0aCksXG4gICAgICAgIHRhcmdldCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gYmFzZVt0YXJnZXRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFyZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2V0VGFyZ2V0LmpzIiwiaW1wb3J0IG1pbmVUeXBlIGZyb20gJy4vbWluZVR5cGUnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGNiLFxuICBwYWdlRGF0YSxcbiAgZGF0YUF0dHIsXG59KSA9PiAoXG4gICh7IHRhcmdldCB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNiKHtcbiAgICAgICAgdHlwZTogbWluZVR5cGUodGFyZ2V0LCBkYXRhQXR0ciksXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcGFnZURhdGEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ2dlci5kZWZhdWx0RXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2dlbmVyYXRlVHJhY2tDbGljay5qcyIsImV4cG9ydCBkZWZhdWx0ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB0YXJnZXQuY2xvc2VzdChgWyR7c2VsZWN0b3J9XWApLmdldEF0dHJpYnV0ZShzZWxlY3Rvcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9taW5lVHlwZS5qcyIsImNsYXNzIExvZ2dlciB7XG4gIGRlZmF1bHRFcnJvcihtc2cpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBcmN0cmFjayBmYWlsZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yOiAnLCBtc2cpO1xuICB9XG4gIG1ldGhvZEZhaWxlZChtZXRob2QsIG1zZywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja01zZyA9IGNhbGxiYWNrID8gYHdoaWxlIHRyeWluZyB0byBleGVjdXRlIHlvdXIgY2FsbGJhY2s6ICR7Y2FsbGJhY2t9YCA6ICcnO1xuICAgIGNvbnNvbGUuZXJyb3IoYCR7bWV0aG9kfSBmYWlsZWQgJHtjYWxsYmFja01zZ30sIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcmAsIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2dlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiLy8gcmVwbGFjZW1lbnQgZm9yICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZuKVxuZnVuY3Rpb24gZGVsZWdhdGVFdmVudChldmVudFR5cGUsIGZuLCBtYXRjaGVyLCBlbCA9IGRvY3VtZW50KSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZSkgPT4ge1xuICAgIGlmICghbWF0Y2hlciB8fFxuICAgICAgZS50YXJnZXQubWF0Y2hlcyhtYXRjaGVyKSB8fCAvLyBmaXJlZm94XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKG1hdGNoZXIpIHx8IC8vIGNocm9tZVxuICAgICAgLy8gc2FmYXJpLCBjaGVjayBmb3IgcGFyZW50RWxlbWVudCBmaXhlcyBidWcgd2hlcmUgZG9jdW1lbnQgaXMgZWxlbWVudCBjbGlja2VkIG9uXG4gICAgICAoZS50YXJnZXQucGFyZW50RWxlbWVudCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMobWF0Y2hlcikpKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZm4oZSk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZUV2ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZGVsZWdhdGVFdmVudC5qcyIsImltcG9ydCBTY3JvbGxTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1Njcm9sbFNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzID0+IChcbiAgbmV3IFNjcm9sbFNlcnZpY2UoQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc10pLmFjdGl2YXRlKClcbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2dlbmVyYXRlVHJhY2tTY3JvbGwuanMiLCJpbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVJZCc7XG5pbXBvcnQgcHJvY2Vzc0VudHJ5IGZyb20gJy4uL3V0aWwvcHJvY2Vzc0VudHJ5JztcbmltcG9ydCBwcm9jZXNzVGFyZ2V0IGZyb20gJy4uL3V0aWwvcHJvY2Vzc1RhcmdldCc7XG5cbmNvbnN0IERFRkFVTFRfVEhST1RUTEVfU1BFRUQgPSAxMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoZW50cmllcywgdGhyb3R0bGVTcGVlZCA9IERFRkFVTFRfVEhST1RUTEVfU1BFRUQpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMudGhyb3R0bGVTcGVlZCA9IHRocm90dGxlU3BlZWQ7XG4gICAgdGhpcy50ZXN0RWxlbWVudHMgPSB0aGlzLnRlc3RFbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW50cnlUeXBlcyA9IHt9O1xuICAgIHRoaXMucGVuZGluZ0VsZW1lbnRzID0ge307XG4gICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzID0ge307XG4gICAgdGhpcy5zY3JvbGxTdGF0dXMgPSB7IGxhc3RZOiAwLCBkaXJlY3Rpb246ICdkb3duJyB9O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5lbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRW50cnkocHJvY2Vzc0VudHJ5KGVudHJ5KSk7XG4gICAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7ZW50cnkuc2VsZWN0b3J9XWApO1xuICAgICAgY29uc3QgdHJhY2tPbmNlT25seSA9IGVudHJ5LnRyYWNrT25jZU9ubHkgPyBlbnRyeS50cmFja09uY2VPbmx5IDogZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckVsZW1lbnQoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgdHlwZTogZW50cnkudHlwZSxcbiAgICAgICAgICB0cmFja09uY2VPbmx5LFxuICAgICAgICAgIGlkOiBnZW5lcmF0ZUlkKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYWdlRGF0YSA9PiAoXG4gICAgICB0aHJvdHRsZShcbiAgICAgICAgdGhpcy50ZXN0RWxlbWVudHMuYmluZCh0aGlzLCBwYWdlRGF0YSksXG4gICAgICAgIHRoaXMudGhyb3R0bGVTcGVlZCxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVnaXN0ZXJFbnRyeSh7XG4gICAgbG9hZCxcbiAgICBzaG91bGRMb2FkLFxuICAgIHR5cGUsXG4gICAgc2VsZWN0b3IsXG4gIH0pIHtcbiAgICB0aGlzLmVudHJ5VHlwZXNbdHlwZV0gPSB7XG4gICAgICBsb2FkLFxuICAgICAgc2hvdWxkTG9hZCxcbiAgICAgIHNlbGVjdG9yLFxuICAgIH07XG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoe1xuICAgIG5vZGUsXG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICB0cmFja09uY2VPbmx5LFxuICB9KSB7XG4gICAgdGhpcy5wZW5kaW5nRWxlbWVudHNbaWRdID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHRhcmdldDogbm9kZSxcbiAgICAgIHRyYWNrT25jZU9ubHksXG4gICAgfTtcbiAgfVxuXG4gIHRyYW5zZmVyRWxlbWVudChrZXkpIHtcbiAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHNba2V5XSA9IHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gIH1cblxuICB0ZXN0RWxlbWVudHMocGFnZURhdGEpIHtcbiAgICB0aGlzLmRldGVjdFNjcm9sbERpcmVjdGlvbigpO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ0VsZW1lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICB0eXBlLFxuICAgICAgICB0cmFja09uY2VPbmx5LFxuICAgICAgfSA9IHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnlUeXBlc1t0eXBlXTtcbiAgICAgIGlmIChlbnRyeS5zaG91bGRMb2FkKHRhcmdldCwgdGhpcy5zY3JvbGxTdGF0dXMuZGlyZWN0aW9uKSkge1xuICAgICAgICBlbnRyeS5sb2FkKHtcbiAgICAgICAgICB0YXJnZXQ6IHByb2Nlc3NUYXJnZXQodGFyZ2V0LCBlbnRyeS5zZWxlY3RvciksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBwYWdlRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdHJhY2tPbmNlT25seSkgdGhpcy50cmFuc2ZlckVsZW1lbnQoa2V5KTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEaXJlY3Rpb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgcHJldmlvdXNseVNjcm9sbGVkID0gdGhpcy5zY3JvbGxlZEVsZW1lbnRzO1xuICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cyA9IHRoaXMucmVtb3ZlUGVuZGluZ0VsZW1lbnRzKCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnBlbmRpbmdFbGVtZW50cywgcHJldmlvdXNseVNjcm9sbGVkKTtcbiAgfVxuXG4gIGRldGVjdFNjcm9sbERpcmVjdGlvbigpIHtcbiAgICBjb25zdCB7IHBhZ2VZT2Zmc2V0OiBjdXJyZW50WSB9ID0gd2luZG93O1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgaWYgKGN1cnJlbnRZID49IHRoaXMuc2Nyb2xsU3RhdHVzLmxhc3RZKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9ICd1cCc7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gdGhpcy5zY3JvbGxTdGF0dXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmhhbmRsZURpcmVjdGlvbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsU3RhdHVzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLnNjcm9sbFN0YXR1cy5sYXN0WSA9IGN1cnJlbnRZO1xuICB9XG5cbiAgcmVtb3ZlUGVuZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ0VsZW1lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHJlc3VsdFtrZXldID0gdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL1Njcm9sbFNlcnZpY2UuanMiLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdGhyb3R0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGFscGggPSBbXG4gICdhJyxcbiAgJ2InLFxuICAnYycsXG4gICdkJyxcbiAgJ2UnLFxuICAnZicsXG4gICdnJyxcbiAgJ2gnLFxuICAnaScsXG4gICdqJyxcbiAgJ2snLFxuICAnbCcsXG4gICdtJyxcbiAgJ24nLFxuICAnbycsXG4gICdwJyxcbiAgJ3EnLFxuICAncicsXG4gICdzJyxcbiAgJ3QnLFxuICAndScsXG4gICd2JyxcbiAgJ3cnLFxuICAneCcsXG4gICd5JyxcbiAgJ3onLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgcmVzdWx0ID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI0KTtcbiAgICBpZiAocmFuZG9tICUgMiA9PT0gMCkge1xuICAgICAgcmVzdWx0ICs9IGFscGhbcmFuZG9tXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IHJhbmRvbTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2VuZXJhdGVJZC5qcyIsImNvbnN0IHByb2Nlc3NCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gIGlmICghYnVmZmVyLnRvcCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBidWZmZXIsIHsgdG9wOiAwIH0pO1xuICB9XG5cbiAgaWYgKCFidWZmZXIuYm90dG9tKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJ1ZmZlciwgeyBib3R0b206IDAgfSk7XG4gIH1cblxuICByZXR1cm4gYnVmZmVyO1xufTtcblxuY29uc3QgZ2VuZXJhdGVTaG91bGRMb2FkID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5vZGUsIGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHsgdG9wLCBib3R0b20gfSA9IGJ1ZmZlcjtcbiAgICByZXR1cm4gKGRpcmVjdGlvbiA9PT0gJ2Rvd24nICYmIHJlY3QudG9wIDw9IHRvcCkgfHxcbiAgICAgICAgICAgKGRpcmVjdGlvbiA9PT0gJ3VwJyAmJiByZWN0LmJvdHRvbSA+PSAod2luZG93LmlubmVySGVpZ2h0ICsgYm90dG9tKSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgbGV0IHNob3VsZExvYWQ7XG4gIGlmIChlbnRyeS5idWZmZXIpIHtcbiAgICBzaG91bGRMb2FkID0gZ2VuZXJhdGVTaG91bGRMb2FkKHByb2Nlc3NCdWZmZXIoZW50cnkuYnVmZmVyKSk7XG4gIH0gZWxzZSB7XG4gICAgc2hvdWxkTG9hZCA9IGdlbmVyYXRlU2hvdWxkTG9hZCh7IHRvcDogMCwgYm90dG9tOiAwIH0pO1xuICB9XG4gIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIHtcbiAgICAgIGxvYWQ6IGVudHJ5LmxvYWQsXG4gICAgICB0eXBlOiBlbnRyeS50eXBlLFxuICAgICAgc2VsZWN0b3I6IGVudHJ5LnNlbGVjdG9yLFxuICAgICAgc2hvdWxkTG9hZCxcbiAgICB9LFxuICApO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wcm9jZXNzRW50cnkuanMiLCJpbXBvcnQgY2FtZWxpemUgZnJvbSAnLi4vdmVuZG9yL2NhbWVsaXplJztcbmltcG9ydCBwYXJzZUF0dHJpYnV0ZVZhbHVlIGZyb20gJy4vcGFyc2VBdHRyaWJ1dGVWYWx1ZSc7XG5cbmNvbnN0IGRlRGFzaCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLS9nLCAnICcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBzZWxlY3Rvcikge1xuICBjb25zdCBuYW1lID0gY2FtZWxpemUoZGVEYXNoKHNlbGVjdG9yKSk7XG4gIHJldHVybiB7IG5vZGU6IHRhcmdldCwgZGF0YTogcGFyc2VBdHRyaWJ1dGVWYWx1ZSh0YXJnZXQsIG5hbWUpIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9wcm9jZXNzVGFyZ2V0LmpzIiwiLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjk3MDUyNS9jb252ZXJ0aW5nLWFueS1zdHJpbmctaW50by1jYW1lbC1jYXNlI2Fuc3dlci0yOTcwNjY3XG5leHBvcnQgZGVmYXVsdCBzdHIgPT4gKFxuICBzdHIucmVwbGFjZSgvKD86Xlxcd3xbQS1aXXxcXGJcXHcpL2csIChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgaW5kZXggPT09IDAgPyBsZXR0ZXIudG9Mb3dlckNhc2UoKSA6IGxldHRlci50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJycpXG4gICkpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZlbmRvci9jYW1lbGl6ZS5qcyIsIi8qXG4gIGlucHV0ICdub2RlJyBbRE9NIG5vZGVdOiBhbmFseXRpY3MgdGFyZ2V0IERPTSBub2RlXG4gIGlucHV0ICdhdHRyTmFtZScgW1N0cmluZ106IHByb3BlcnR5IG5hbWUgb2Ygbm9kZSdzICdkYXRhU2V0J1xuICBlbGVtZW50IG1heSBoYXZlIGRhdGEgYXR0cmlidXRlcyBpbiB0aGUgZm9ybSBvZjogZGF0YS1hdHRyTmFtZT1cImZvb1wiXG4gIG91dHB1dCBbU3RyaW5nXTogdmFsdWUgb2YgZGF0YSBhdHRyaWJ1dGUgZnJvbSBub2RlICdkYXRhU2V0J1xuICAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZShub2RlLCBhdHRyTmFtZSkge1xuICAvLyB1c2luZyAnc3RyaW5naWZ5JyBhbmQgJ3BhcnNlJyB0byBhZGRyZXNzIFdlYmtpdCAoaU9TKSBidWdcbiAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE2MTQ1NFxuICBjb25zdCBhdHRyaWJ1dGVzID0gT2JqZWN0LmFzc2lnbihcbiAgICB7fSxcbiAgICBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGUuZGF0YXNldCkpLFxuICApO1xuXG4gIGxldCBwYXJzZWRWYWx1ZTtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xKSB7XG4gICAgICBwYXJzZWRWYWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcGFyc2VkVmFsdWU7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3BhcnNlQXR0cmlidXRlVmFsdWUuanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2IsIGV2ZW50TmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICBtZXRob2ROYW1lOiBuYW1lLFxuICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgICBhcmdzLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYWNrSnM6IGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVzY3JpcHRvciwgdmFsdWUgfTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrSnMuanMiLCJpbXBvcnQgeyB0cmFja0RvbSB9IGZyb20gJy4uLy4uLy4uLy4uL3NyYyc7XG5cbnRyYWNrRG9tKHtcbiAgY2xpY2soeyB0YXJnZXQsIHR5cGUgfSkge1xuICAgIGNvbnNvbGUubG9nKGBmaXJpbmcgYW5hbHl0aWNzIGZvciAnJHt0eXBlfSEnYCk7XG4gICAgY29uc29sZS5sb2coJ0FuZCBoZXJlXFwncyB0aGUgY2xpY2sgdGFyZ2V0OlxcbicsIHRhcmdldCk7XG4gIH0sXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVtby9jb2RlL3RyYWNrLWRvbS9jbGljay9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=