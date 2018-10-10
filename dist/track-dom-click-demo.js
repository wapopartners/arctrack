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

var freeGlobal = __webpack_require__(15);

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getTarget = __webpack_require__(5);

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
/* 4 */
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

var _Store = __webpack_require__(3);

var _Store2 = _interopRequireDefault(_Store);

var _generateTrackClick = __webpack_require__(6);

var _generateTrackClick2 = _interopRequireDefault(_generateTrackClick);

var _delegateEvent = __webpack_require__(9);

var _delegateEvent2 = _interopRequireDefault(_delegateEvent);

var _generateTrackScroll = __webpack_require__(10);

var _generateTrackScroll2 = _interopRequireDefault(_generateTrackScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mineType = __webpack_require__(7);

var _mineType2 = _interopRequireDefault(_mineType);

var _logger = __webpack_require__(8);

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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScrollService = __webpack_require__(11);

var _ScrollService2 = _interopRequireDefault(_ScrollService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (entries) {
  return new _ScrollService2.default(Array.isArray(entries) ? entries : [entries]).activate();
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throttle = __webpack_require__(12);

var _throttle2 = _interopRequireDefault(_throttle);

var _generateId = __webpack_require__(23);

var _generateId2 = _interopRequireDefault(_generateId);

var _processEntry = __webpack_require__(24);

var _processEntry2 = _interopRequireDefault(_processEntry);

var _processTarget = __webpack_require__(25);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(13),
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    now = __webpack_require__(14),
    toNumber = __webpack_require__(17);

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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(0),
    isSymbol = __webpack_require__(18);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(19),
    isObjectLike = __webpack_require__(22);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    getRawTag = __webpack_require__(20),
    objectToString = __webpack_require__(21);

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
/* 20 */
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
/* 21 */
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, selector) {
  var name = (0, _camelize2.default)(deDash(selector));
  return { node: target, data: (0, _parseAttributeValue2.default)(target, name) };
};

var _camelize = __webpack_require__(26);

var _camelize2 = _interopRequireDefault(_camelize);

var _parseAttributeValue = __webpack_require__(27);

var _parseAttributeValue2 = _interopRequireDefault(_parseAttributeValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deDash = function deDash(str) {
  return str.replace(/-/g, ' ');
};

/***/ }),
/* 26 */
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
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.trackJs = exports.trackDom = undefined;

var _trackDom = __webpack_require__(4);

var _trackDom2 = _interopRequireDefault(_trackDom);

var _trackJs = __webpack_require__(29);

var _trackJs2 = _interopRequireDefault(_trackJs);

var _Store = __webpack_require__(3);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.trackDom = _trackDom2.default;
exports.trackJs = _trackJs2.default;
exports.store = _Store2.default;

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


var _src = __webpack_require__(28);

(0, _src.trackDom)({
  click: function click(_ref) {
    var target = _ref.target,
        type = _ref.type;

    console.log('is this a thing?', target, type);
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4Mjg4YzI4ODIzYzU4NzcxNDc3NiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhY2tEb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlVHJhY2tDbGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9taW5lVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZGVsZWdhdGVFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZVRyYWNrU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9TY3JvbGxTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdGhyb3R0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2dlbmVyYXRlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcHJvY2Vzc0VudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3Byb2Nlc3NUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZlbmRvci9jYW1lbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wYXJzZUF0dHJpYnV0ZVZhbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhY2tKcy5qcyIsIndlYnBhY2s6Ly8vLi9kZW1vL2NvZGUvdHJhY2stZG9tL2NsaWNrL2luZGV4LmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwibmFtZSIsImxvY2F0aW9uIiwidmFsdWUiLCJsb2MiLCJpbmRleE9mIiwic3BsaXQiLCJBcnJheSIsImlzQXJyYXkiLCJwcm9wZXJ0aWVzIiwic2xpY2UiLCJsZW5ndGgiLCJ0YXJnZXQiLCJwb3AiLCJ3aW5kb3ciLCJFcnJvciIsInN0b3JlIiwib3B0cyIsImRhdGFBdHRyIiwiY2xpY2siLCJ0cmFja0NsaWNrIiwiY2IiLCJwYWdlRGF0YSIsInNjcm9sbCIsInRyYWNrU2Nyb2xsIiwib25zY3JvbGwiLCJnZXRUYXJnZXQiLCJiYXNlIiwicHJvcCIsInR5cGUiLCJlcnIiLCJkZWZhdWx0RXJyb3IiLCJzZWxlY3RvciIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJMb2dnZXIiLCJtc2ciLCJjb25zb2xlIiwiZXJyb3IiLCJtZXRob2QiLCJjYWxsYmFjayIsImNhbGxiYWNrTXNnIiwiZGVsZWdhdGVFdmVudCIsImV2ZW50VHlwZSIsImZuIiwibWF0Y2hlciIsImVsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1hdGNoZXMiLCJjdXJyZW50VGFyZ2V0IiwiYWN0aXZlRWxlbWVudCIsInBhcmVudEVsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIiwiZW50cmllcyIsImFjdGl2YXRlIiwiREVGQVVMVF9USFJPVFRMRV9TUEVFRCIsIlNjcm9sbFNlcnZpY2UiLCJ0aHJvdHRsZVNwZWVkIiwidGVzdEVsZW1lbnRzIiwiYmluZCIsImVudHJ5VHlwZXMiLCJwZW5kaW5nRWxlbWVudHMiLCJzY3JvbGxlZEVsZW1lbnRzIiwic2Nyb2xsU3RhdHVzIiwibGFzdFkiLCJkaXJlY3Rpb24iLCJmb3JFYWNoIiwiZW50cnkiLCJyZWdpc3RlckVudHJ5Iiwibm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidHJhY2tPbmNlT25seSIsImkiLCJub2RlIiwicmVnaXN0ZXJFbGVtZW50IiwiaWQiLCJsb2FkIiwic2hvdWxkTG9hZCIsImtleSIsImRldGVjdFNjcm9sbERpcmVjdGlvbiIsIk9iamVjdCIsImtleXMiLCJ0cmFuc2ZlckVsZW1lbnQiLCJwcmV2aW91c2x5U2Nyb2xsZWQiLCJyZW1vdmVQZW5kaW5nRWxlbWVudHMiLCJhc3NpZ24iLCJjdXJyZW50WSIsInBhZ2VZT2Zmc2V0IiwiaGFuZGxlRGlyZWN0aW9uQ2hhbmdlIiwicmVzdWx0IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiYWxwaCIsImJ1ZmZlciIsImdlbmVyYXRlU2hvdWxkTG9hZCIsInByb2Nlc3NCdWZmZXIiLCJ0b3AiLCJib3R0b20iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaW5uZXJIZWlnaHQiLCJkZURhc2giLCJkYXRhIiwic3RyIiwicmVwbGFjZSIsImxldHRlciIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInBhcnNlQXR0cmlidXRlVmFsdWUiLCJhdHRyTmFtZSIsImF0dHJpYnV0ZXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJkYXRhc2V0IiwicGFyc2VkVmFsdWUiLCJ0cmFja0RvbSIsInRyYWNrSnMiLCJldmVudE5hbWUiLCJkZWNvcmF0ZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsImFyZ3MiLCJtZXRob2ROYW1lIiwiaW5zdGFuY2UiLCJhcHBseSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5QkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDUkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBOzs7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QUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSw4Q0FBOEMsa0JBQWtCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzTEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDdEJBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDSEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzdDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7a0JDQ2UsWUFBWTtBQUN6QixNQUFJaUMsU0FBUyxFQUFiO0FBQ0EsT0FBSyxJQUFJakIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxLQUFLLENBQTdCLEVBQWdDO0FBQzlCLFFBQU1rQixTQUFTQyxLQUFLQyxLQUFMLENBQVdELEtBQUtELE1BQUwsS0FBZ0IsRUFBM0IsQ0FBZjtBQUNBLFFBQUlBLFNBQVMsQ0FBVCxLQUFlLENBQW5CLEVBQXNCO0FBQ3BCRCxnQkFBVUksS0FBS0gsTUFBTCxDQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0xELGdCQUFVQyxNQUFWO0FBQ0Q7QUFDRjtBQUNELFNBQU9ELE1BQVA7QUFDRCxDOztBQXhDRCxJQUFNSSxPQUFPLENBQ1gsR0FEVyxFQUVYLEdBRlcsRUFHWCxHQUhXLEVBSVgsR0FKVyxFQUtYLEdBTFcsRUFNWCxHQU5XLEVBT1gsR0FQVyxFQVFYLEdBUlcsRUFTWCxHQVRXLEVBVVgsR0FWVyxFQVdYLEdBWFcsRUFZWCxHQVpXLEVBYVgsR0FiVyxFQWNYLEdBZFcsRUFlWCxHQWZXLEVBZ0JYLEdBaEJXLEVBaUJYLEdBakJXLEVBa0JYLEdBbEJXLEVBbUJYLEdBbkJXLEVBb0JYLEdBcEJXLEVBcUJYLEdBckJXLEVBc0JYLEdBdEJXLEVBdUJYLEdBdkJXLEVBd0JYLEdBeEJXLEVBeUJYLEdBekJXLEVBMEJYLEdBMUJXLENBQWIsQzs7Ozs7Ozs7Ozs7OztrQkNxQmUsVUFBVTFCLEtBQVYsRUFBaUI7QUFDOUIsTUFBSVUsbUJBQUo7QUFDQSxNQUFJVixNQUFNMkIsTUFBVixFQUFrQjtBQUNoQmpCLGlCQUFha0IsbUJBQW1CQyxjQUFjN0IsTUFBTTJCLE1BQXBCLENBQW5CLENBQWI7QUFDRCxHQUZELE1BRU87QUFDTGpCLGlCQUFha0IsbUJBQW1CLEVBQUVFLEtBQUssQ0FBUCxFQUFVQyxRQUFRLENBQWxCLEVBQW5CLENBQWI7QUFDRDtBQUNELFNBQU9sQixPQUFPSyxNQUFQLENBQ0wsRUFESyxFQUVMO0FBQ0VULFVBQU1ULE1BQU1TLElBRGQ7QUFFRW5ELFVBQU0wQyxNQUFNMUMsSUFGZDtBQUdFRyxjQUFVdUMsTUFBTXZDLFFBSGxCO0FBSUVpRDtBQUpGLEdBRkssQ0FBUDtBQVNELEM7O0FBckNELElBQU1tQixnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVVGLE1BQVYsRUFBa0I7QUFDdEMsTUFBSSxDQUFDQSxPQUFPRyxHQUFaLEVBQWlCO0FBQ2YsV0FBT2pCLE9BQU9LLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUyxNQUFsQixFQUEwQixFQUFFRyxLQUFLLENBQVAsRUFBMUIsQ0FBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0gsT0FBT0ksTUFBWixFQUFvQjtBQUNsQixXQUFPbEIsT0FBT0ssTUFBUCxDQUFjLEVBQWQsRUFBa0JTLE1BQWxCLEVBQTBCLEVBQUVJLFFBQVEsQ0FBVixFQUExQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0osTUFBUDtBQUNELENBVkQ7O0FBWUEsSUFBTUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBVUQsTUFBVixFQUFrQjtBQUMzQyxTQUFPLFVBQVVyQixJQUFWLEVBQWdCUixTQUFoQixFQUEyQjtBQUNoQyxRQUFNa0MsT0FBTzFCLEtBQUsyQixxQkFBTCxFQUFiO0FBRGdDLFFBRXhCSCxHQUZ3QixHQUVSSCxNQUZRLENBRXhCRyxHQUZ3QjtBQUFBLFFBRW5CQyxNQUZtQixHQUVSSixNQUZRLENBRW5CSSxNQUZtQjs7QUFHaEMsV0FBUWpDLGNBQWMsTUFBZCxJQUF3QmtDLEtBQUtGLEdBQUwsSUFBWUEsR0FBckMsSUFDQ2hDLGNBQWMsSUFBZCxJQUFzQmtDLEtBQUtELE1BQUwsSUFBZ0J4RixPQUFPMkYsV0FBUCxHQUFxQkgsTUFEbkU7QUFFRCxHQUxEO0FBTUQsQ0FQRCxDOzs7Ozs7Ozs7Ozs7O2tCQ1BlLFVBQVUxRixNQUFWLEVBQWtCb0IsUUFBbEIsRUFBNEI7QUFDekMsTUFBTS9CLE9BQU8sd0JBQVN5RyxPQUFPMUUsUUFBUCxDQUFULENBQWI7QUFDQSxTQUFPLEVBQUU2QyxNQUFNakUsTUFBUixFQUFnQitGLE1BQU0sbUNBQW9CL0YsTUFBcEIsRUFBNEJYLElBQTVCLENBQXRCLEVBQVA7QUFDRCxDOztBQVJEOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU15RyxTQUFTLFNBQVRBLE1BQVM7QUFBQSxTQUFPRSxJQUFJQyxPQUFKLENBQVksSUFBWixFQUFrQixHQUFsQixDQUFQO0FBQUEsQ0FBZixDOzs7Ozs7Ozs7Ozs7O0FDSEE7a0JBQ2U7QUFBQSxTQUNiRCxJQUFJQyxPQUFKLENBQVkscUJBQVosRUFBbUMsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsV0FDakNBLFVBQVUsQ0FBVixHQUFjRCxPQUFPRSxXQUFQLEVBQWQsR0FBcUNGLE9BQU9HLFdBQVAsR0FBcUJKLE9BQXJCLENBQTZCLE1BQTdCLEVBQXFDLEVBQXJDLENBREo7QUFBQSxHQUFuQyxDQURhO0FBQUEsQzs7Ozs7Ozs7Ozs7O2tCQ0tTSyxtQjtBQU54Qjs7Ozs7O0FBTWUsU0FBU0EsbUJBQVQsQ0FBNkJyQyxJQUE3QixFQUFtQ3NDLFFBQW5DLEVBQTZDO0FBQzFEO0FBQ0E7QUFDQSxNQUFNQyxhQUFhaEMsT0FBT0ssTUFBUCxDQUNqQixFQURpQixFQUVqQjRCLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsU0FBTCxDQUFlMUMsS0FBSzJDLE9BQXBCLENBQVgsQ0FGaUIsQ0FBbkI7O0FBS0EsTUFBSUMsb0JBQUo7QUFDQXJDLFNBQU9DLElBQVAsQ0FBWStCLFVBQVosRUFBd0I5QyxPQUF4QixDQUFnQyxVQUFDWSxHQUFELEVBQVM7QUFDdkMsUUFBSUEsSUFBSTdFLE9BQUosQ0FBWThHLFFBQVosSUFBd0IsQ0FBQyxDQUE3QixFQUFnQztBQUM5Qk0sb0JBQWNMLFdBQVdsQyxHQUFYLENBQWQ7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUFPdUMsV0FBUDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDckJEOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O1FBR0VDLFE7UUFDQUMsTztRQUNBM0csSzs7Ozs7Ozs7Ozs7Ozs7O2tCQ1BhLFVBQVVLLEVBQVYsRUFBY3VHLFNBQWQsRUFBeUI7QUFDdEMsU0FBTyxTQUFTQyxRQUFULENBQWtCakgsTUFBbEIsRUFBMEJYLElBQTFCLEVBQWdDNkgsVUFBaEMsRUFBNEM7QUFDakQsUUFBTUMsV0FBV0QsV0FBVzNILEtBQTVCO0FBQ0EsUUFBTUEsUUFBUSxTQUFSQSxLQUFRLEdBQW1CO0FBQUEsd0NBQU42SCxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDL0IsVUFBSTtBQUNGM0csV0FBRztBQUNENEcsc0JBQVloSSxJQURYO0FBRURpSSxvQkFBVSxJQUZUO0FBR0ROLDhCQUhDO0FBSURJO0FBSkMsU0FBSDtBQU1ELE9BUEQsQ0FPRSxPQUFPbEcsR0FBUCxFQUFZO0FBQ1osY0FBTSxJQUFJZixLQUFKLGdEQUF1RGUsR0FBdkQsQ0FBTjtBQUNEO0FBQ0QsYUFBT2lHLFNBQVNJLEtBQVQsQ0FBZSxJQUFmLEVBQXFCSCxJQUFyQixDQUFQO0FBQ0QsS0FaRDtBQWFBLHdCQUFZRixVQUFaLElBQXdCM0gsWUFBeEI7QUFDRCxHQWhCRDtBQWlCRCxDOzs7Ozs7Ozs7QUNsQkQ7O0FBRUEsbUJBQVM7QUFDUGdCLFNBQU8scUJBQTJCO0FBQUEsUUFBaEJQLE1BQWdCLFFBQWhCQSxNQUFnQjtBQUFBLFFBQVJpQixJQUFRLFFBQVJBLElBQVE7O0FBQ2hDUSxZQUFRK0YsR0FBUixDQUFZLGtCQUFaLEVBQWdDeEgsTUFBaEMsRUFBd0NpQixJQUF4QztBQUNEO0FBSE0sQ0FBVCxFIiwiZmlsZSI6InRyYWNrLWRvbS1jbGljay1kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgyODhjMjg4MjNjNTg3NzE0Nzc2IiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gJy4vdXRpbC9nZXRUYXJnZXQnO1xuXG5jbGFzcyBTdG9yZSB7XG4gIHNldCh7XG4gICAgbmFtZSxcbiAgICBsb2NhdGlvbixcbiAgICB2YWx1ZSxcbiAgfSkge1xuICAgIC8vIGlmIHRoZXJlJ3MgYSB2YWx1ZSwgc2V0IHRoYXQgYXMgdGhlIHZhbHVlIG9mIG9iamVjdCB3LyBrZXkgJ25hbWUnXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvYyA9XG4gICAgICAgIChsb2NhdGlvbi5pbmRleE9mKCcuJykgIT09IC0xKVxuICAgICAgICAgID8gbG9jYXRpb24uc3BsaXQoJy4nKVxuICAgICAgICAgIDogbG9jYXRpb247XG5cbiAgICAgIHRoaXNbbmFtZV0gPVxuICAgICAgICAoQXJyYXkuaXNBcnJheShsb2MpKVxuICAgICAgICAgID8gZ2V0VGFyZ2V0KHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGxvYy5zbGljZSgwLCBsb2MubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICB0YXJnZXQ6IGxvYy5wb3AoKSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogd2luZG93W2xvY107XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzW25hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3JlI3NldDogbXVzdCBwcm92aWRlIGVpdGhlciBhIGxvY2F0aW9uIHN0cmluZyBvciBhIHZhbHVlJyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vU3RvcmUnO1xuaW1wb3J0IGdlbmVyYXRlVHJhY2tDbGljayBmcm9tICcuL3V0aWwvZ2VuZXJhdGVUcmFja0NsaWNrJztcbmltcG9ydCBkZWxlZ2F0ZUV2ZW50IGZyb20gJy4vdXRpbC9kZWxlZ2F0ZUV2ZW50JztcbmltcG9ydCBnZW5lcmF0ZVRyYWNrU2Nyb2xsIGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRyYWNrU2Nyb2xsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdHMpIHtcbiAgY29uc3QgZGF0YUF0dHIgPSBvcHRzLmRhdGFBdHRyIHx8ICdkYXRhLWFyY3RyYWNrJztcbiAgaWYgKG9wdHMuY2xpY2spIHtcbiAgICBjb25zdCB0cmFja0NsaWNrID0gZ2VuZXJhdGVUcmFja0NsaWNrKHtcbiAgICAgIGNiOiBvcHRzLmNsaWNrLFxuICAgICAgcGFnZURhdGE6IHN0b3JlLnBhZ2VEYXRhLFxuICAgICAgZGF0YUF0dHIsXG4gICAgfSk7XG4gICAgZGVsZWdhdGVFdmVudCgnY2xpY2snLCB0cmFja0NsaWNrLCBgWyR7ZGF0YUF0dHJ9XWApO1xuICB9XG5cbiAgaWYgKG9wdHMuc2Nyb2xsKSB7XG4gICAgY29uc3QgdHJhY2tTY3JvbGwgPSBnZW5lcmF0ZVRyYWNrU2Nyb2xsKG9wdHMuc2Nyb2xsKShzdG9yZS5wYWdlRGF0YSk7XG4gICAgd2luZG93Lm9uc2Nyb2xsID0gdHJhY2tTY3JvbGw7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrRG9tLmpzIiwiZXhwb3J0IGNvbnN0IGdldFRhcmdldCA9IGZ1bmN0aW9uICh7XG4gIGJhc2UgPSB3aW5kb3csXG4gIHByb3BlcnRpZXMsXG4gIHRhcmdldCxcbn0pIHtcbiAgY29uc3QgcHJvcCA9IHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5sZW5ndGggPyBwcm9wZXJ0aWVzWzBdIDogbnVsbDtcbiAgaWYgKGJhc2VbcHJvcF0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgZ2V0VGFyZ2V0KHtcbiAgICAgICAgYmFzZTogYmFzZVtwcm9wXSxcbiAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllcy5zbGljZSgxLCBwcm9wZXJ0aWVzLmxlbmd0aCksXG4gICAgICAgIHRhcmdldCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZXR1cm4gYmFzZVt0YXJnZXRdO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFyZ2V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2V0VGFyZ2V0LmpzIiwiaW1wb3J0IG1pbmVUeXBlIGZyb20gJy4vbWluZVR5cGUnO1xuaW1wb3J0IGxvZ2dlciBmcm9tICcuL2xvZ2dlcic7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGNiLFxuICBwYWdlRGF0YSxcbiAgZGF0YUF0dHIsXG59KSA9PiAoXG4gICh7IHRhcmdldCB9KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNiKHtcbiAgICAgICAgdHlwZTogbWluZVR5cGUodGFyZ2V0LCBkYXRhQXR0ciksXG4gICAgICAgIHRhcmdldCxcbiAgICAgICAgcGFnZURhdGEsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGxvZ2dlci5kZWZhdWx0RXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2dlbmVyYXRlVHJhY2tDbGljay5qcyIsImV4cG9ydCBkZWZhdWx0ICh0YXJnZXQsIHNlbGVjdG9yKSA9PiB0YXJnZXQuY2xvc2VzdChgWyR7c2VsZWN0b3J9XWApLmdldEF0dHJpYnV0ZShzZWxlY3Rvcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9taW5lVHlwZS5qcyIsImNsYXNzIExvZ2dlciB7XG4gIGRlZmF1bHRFcnJvcihtc2cpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBcmN0cmFjayBmYWlsZWQgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yOiAnLCBtc2cpO1xuICB9XG4gIG1ldGhvZEZhaWxlZChtZXRob2QsIG1zZywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBjYWxsYmFja01zZyA9IGNhbGxiYWNrID8gYHdoaWxlIHRyeWluZyB0byBleGVjdXRlIHlvdXIgY2FsbGJhY2s6ICR7Y2FsbGJhY2t9YCA6ICcnO1xuICAgIGNvbnNvbGUuZXJyb3IoYCR7bWV0aG9kfSBmYWlsZWQgJHtjYWxsYmFja01zZ30sIHdpdGggdGhlIGZvbGxvd2luZyBlcnJvcmAsIG1zZyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IExvZ2dlcigpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvbG9nZ2VyLmpzIiwiLy8gcmVwbGFjZW1lbnQgZm9yICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZuKVxuZnVuY3Rpb24gZGVsZWdhdGVFdmVudChldmVudFR5cGUsIGZuLCBtYXRjaGVyLCBlbCA9IGRvY3VtZW50KSB7XG5cbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIChlKSA9PiB7XG4gICAgaWYgKCFtYXRjaGVyIHx8XG4gICAgICBlLnRhcmdldC5tYXRjaGVzKG1hdGNoZXIpIHx8IC8vIGZpcmVmb3hcbiAgICAgIGUuY3VycmVudFRhcmdldC5hY3RpdmVFbGVtZW50Lm1hdGNoZXMobWF0Y2hlcikgfHwgLy8gY2hyb21lXG4gICAgICAvLyBzYWZhcmksIGNoZWNrIGZvciBwYXJlbnRFbGVtZW50IGZpeGVzIGJ1ZyB3aGVyZSBkb2N1bWVudCBpcyBlbGVtZW50IGNsaWNrZWQgb25cbiAgICAgIChlLnRhcmdldC5wYXJlbnRFbGVtZW50ICYmIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubWF0Y2hlcyhtYXRjaGVyKSkpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBmbihlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGVnYXRlRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9kZWxlZ2F0ZUV2ZW50LmpzIiwiaW1wb3J0IFNjcm9sbFNlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvU2Nyb2xsU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGVudHJpZXMgPT4gKFxuICBuZXcgU2Nyb2xsU2VydmljZShBcnJheS5pc0FycmF5KGVudHJpZXMpID8gZW50cmllcyA6IFtlbnRyaWVzXSkuYWN0aXZhdGUoKVxuKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2VuZXJhdGVUcmFja1Njcm9sbC5qcyIsImltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gvdGhyb3R0bGUnO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi4vdXRpbC9nZW5lcmF0ZUlkJztcbmltcG9ydCBwcm9jZXNzRW50cnkgZnJvbSAnLi4vdXRpbC9wcm9jZXNzRW50cnknO1xuaW1wb3J0IHByb2Nlc3NUYXJnZXQgZnJvbSAnLi4vdXRpbC9wcm9jZXNzVGFyZ2V0JztcblxuY29uc3QgREVGQVVMVF9USFJPVFRMRV9TUEVFRCA9IDEwMDA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihlbnRyaWVzLCB0aHJvdHRsZVNwZWVkID0gREVGQVVMVF9USFJPVFRMRV9TUEVFRCkge1xuICAgIHRoaXMuZW50cmllcyA9IGVudHJpZXM7XG4gICAgdGhpcy50aHJvdHRsZVNwZWVkID0gdGhyb3R0bGVTcGVlZDtcbiAgICB0aGlzLnRlc3RFbGVtZW50cyA9IHRoaXMudGVzdEVsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbnRyeVR5cGVzID0ge307XG4gICAgdGhpcy5wZW5kaW5nRWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHMgPSB7fTtcbiAgICB0aGlzLnNjcm9sbFN0YXR1cyA9IHsgbGFzdFk6IDAsIGRpcmVjdGlvbjogJ2Rvd24nIH07XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIHRoaXMucmVnaXN0ZXJFbnRyeShwcm9jZXNzRW50cnkoZW50cnkpKTtcbiAgICAgIGNvbnN0IG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW2RhdGEtJHtlbnRyeS5zZWxlY3Rvcn1dYCk7XG4gICAgICBjb25zdCB0cmFja09uY2VPbmx5ID0gZW50cnkudHJhY2tPbmNlT25seSA/IGVudHJ5LnRyYWNrT25jZU9ubHkgOiBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbWVudCh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0eXBlOiBlbnRyeS50eXBlLFxuICAgICAgICAgIHRyYWNrT25jZU9ubHksXG4gICAgICAgICAgaWQ6IGdlbmVyYXRlSWQoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhZ2VEYXRhID0+IChcbiAgICAgIHRocm90dGxlKFxuICAgICAgICB0aGlzLnRlc3RFbGVtZW50cy5iaW5kKHRoaXMsIHBhZ2VEYXRhKSxcbiAgICAgICAgdGhpcy50aHJvdHRsZVNwZWVkLFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZWdpc3RlckVudHJ5KHtcbiAgICBsb2FkLFxuICAgIHNob3VsZExvYWQsXG4gICAgdHlwZSxcbiAgICBzZWxlY3RvcixcbiAgfSkge1xuICAgIHRoaXMuZW50cnlUeXBlc1t0eXBlXSA9IHtcbiAgICAgIGxvYWQsXG4gICAgICBzaG91bGRMb2FkLFxuICAgICAgc2VsZWN0b3IsXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyRWxlbWVudCh7XG4gICAgbm9kZSxcbiAgICBpZCxcbiAgICB0eXBlLFxuICAgIHRyYWNrT25jZU9ubHksXG4gIH0pIHtcbiAgICB0aGlzLnBlbmRpbmdFbGVtZW50c1tpZF0gPSB7XG4gICAgICB0eXBlLFxuICAgICAgdGFyZ2V0OiBub2RlLFxuICAgICAgdHJhY2tPbmNlT25seSxcbiAgICB9O1xuICB9XG5cbiAgdHJhbnNmZXJFbGVtZW50KGtleSkge1xuICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50c1trZXldID0gdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgfVxuXG4gIHRlc3RFbGVtZW50cyhwYWdlRGF0YSkge1xuICAgIHRoaXMuZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uKCk7XG4gICAgT2JqZWN0LmtleXModGhpcy5wZW5kaW5nRWxlbWVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRyYWNrT25jZU9ubHksXG4gICAgICB9ID0gdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5lbnRyeVR5cGVzW3R5cGVdO1xuICAgICAgaWYgKGVudHJ5LnNob3VsZExvYWQodGFyZ2V0LCB0aGlzLnNjcm9sbFN0YXR1cy5kaXJlY3Rpb24pKSB7XG4gICAgICAgIGVudHJ5LmxvYWQoe1xuICAgICAgICAgIHRhcmdldDogcHJvY2Vzc1RhcmdldCh0YXJnZXQsIGVudHJ5LnNlbGVjdG9yKSxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICAgIHBhZ2VEYXRhLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF0cmFja09uY2VPbmx5KSB0aGlzLnRyYW5zZmVyRWxlbWVudChrZXkpO1xuICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURpcmVjdGlvbkNoYW5nZSgpIHtcbiAgICBjb25zdCBwcmV2aW91c2x5U2Nyb2xsZWQgPSB0aGlzLnNjcm9sbGVkRWxlbWVudHM7XG4gICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzID0gdGhpcy5yZW1vdmVQZW5kaW5nRWxlbWVudHMoKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMucGVuZGluZ0VsZW1lbnRzLCBwcmV2aW91c2x5U2Nyb2xsZWQpO1xuICB9XG5cbiAgZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uKCkge1xuICAgIGNvbnN0IHsgcGFnZVlPZmZzZXQ6IGN1cnJlbnRZIH0gPSB3aW5kb3c7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBpZiAoY3VycmVudFkgPj0gdGhpcy5zY3JvbGxTdGF0dXMubGFzdFkpIHtcbiAgICAgIGRpcmVjdGlvbiA9ICdkb3duJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGlyZWN0aW9uID0gJ3VwJztcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uICE9PSB0aGlzLnNjcm9sbFN0YXR1cy5kaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuaGFuZGxlRGlyZWN0aW9uQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxTdGF0dXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIHRoaXMuc2Nyb2xsU3RhdHVzLmxhc3RZID0gY3VycmVudFk7XG4gIH1cblxuICByZW1vdmVQZW5kaW5nRWxlbWVudHMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXModGhpcy5wZW5kaW5nRWxlbWVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgcmVzdWx0W2tleV0gPSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmljZXMvU2Nyb2xsU2VydmljZS5qcyIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC90aHJvdHRsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgbm93ID0gcmVxdWlyZSgnLi9ub3cnKSxcbiAgICB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4LFxuICAgIG5hdGl2ZU1pbiA9IE1hdGgubWluO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBkZWJvdW5jZWQgZnVuY3Rpb24gdGhhdCBkZWxheXMgaW52b2tpbmcgYGZ1bmNgIHVudGlsIGFmdGVyIGB3YWl0YFxuICogbWlsbGlzZWNvbmRzIGhhdmUgZWxhcHNlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gd2FzXG4gKiBpbnZva2VkLiBUaGUgZGVib3VuY2VkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYCBtZXRob2QgdG8gY2FuY2VsXG4gKiBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0byBpbW1lZGlhdGVseSBpbnZva2UgdGhlbS5cbiAqIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgIHNob3VsZCBiZSBpbnZva2VkIG9uIHRoZVxuICogbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgIHRpbWVvdXQuIFRoZSBgZnVuY2AgaXMgaW52b2tlZFxuICogd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbi4gU3Vic2VxdWVudFxuICogY2FsbHMgdG8gdGhlIGRlYm91bmNlZCBmdW5jdGlvbiByZXR1cm4gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBgZnVuY2BcbiAqIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8uZGVib3VuY2VgIGFuZCBgXy50aHJvdHRsZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBkZWJvdW5jZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPWZhbHNlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5tYXhXYWl0XVxuICogIFRoZSBtYXhpbXVtIHRpbWUgYGZ1bmNgIGlzIGFsbG93ZWQgdG8gYmUgZGVsYXllZCBiZWZvcmUgaXQncyBpbnZva2VkLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBkZWJvdW5jZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGNvc3RseSBjYWxjdWxhdGlvbnMgd2hpbGUgdGhlIHdpbmRvdyBzaXplIGlzIGluIGZsdXguXG4gKiBqUXVlcnkod2luZG93KS5vbigncmVzaXplJywgXy5kZWJvdW5jZShjYWxjdWxhdGVMYXlvdXQsIDE1MCkpO1xuICpcbiAqIC8vIEludm9rZSBgc2VuZE1haWxgIHdoZW4gY2xpY2tlZCwgZGVib3VuY2luZyBzdWJzZXF1ZW50IGNhbGxzLlxuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIF8uZGVib3VuY2Uoc2VuZE1haWwsIDMwMCwge1xuICogICAnbGVhZGluZyc6IHRydWUsXG4gKiAgICd0cmFpbGluZyc6IGZhbHNlXG4gKiB9KSk7XG4gKlxuICogLy8gRW5zdXJlIGBiYXRjaExvZ2AgaXMgaW52b2tlZCBvbmNlIGFmdGVyIDEgc2Vjb25kIG9mIGRlYm91bmNlZCBjYWxscy5cbiAqIHZhciBkZWJvdW5jZWQgPSBfLmRlYm91bmNlKGJhdGNoTG9nLCAyNTAsIHsgJ21heFdhaXQnOiAxMDAwIH0pO1xuICogdmFyIHNvdXJjZSA9IG5ldyBFdmVudFNvdXJjZSgnL3N0cmVhbScpO1xuICogalF1ZXJ5KHNvdXJjZSkub24oJ21lc3NhZ2UnLCBkZWJvdW5jZWQpO1xuICpcbiAqIC8vIENhbmNlbCB0aGUgdHJhaWxpbmcgZGVib3VuY2VkIGludm9jYXRpb24uXG4gKiBqUXVlcnkod2luZG93KS5vbigncG9wc3RhdGUnLCBkZWJvdW5jZWQuY2FuY2VsKTtcbiAqL1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICB2YXIgbGFzdEFyZ3MsXG4gICAgICBsYXN0VGhpcyxcbiAgICAgIG1heFdhaXQsXG4gICAgICByZXN1bHQsXG4gICAgICB0aW1lcklkLFxuICAgICAgbGFzdENhbGxUaW1lLFxuICAgICAgbGFzdEludm9rZVRpbWUgPSAwLFxuICAgICAgbGVhZGluZyA9IGZhbHNlLFxuICAgICAgbWF4aW5nID0gZmFsc2UsXG4gICAgICB0cmFpbGluZyA9IHRydWU7XG5cbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgd2FpdCA9IHRvTnVtYmVyKHdhaXQpIHx8IDA7XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAhIW9wdGlvbnMubGVhZGluZztcbiAgICBtYXhpbmcgPSAnbWF4V2FpdCcgaW4gb3B0aW9ucztcbiAgICBtYXhXYWl0ID0gbWF4aW5nID8gbmF0aXZlTWF4KHRvTnVtYmVyKG9wdGlvbnMubWF4V2FpdCkgfHwgMCwgd2FpdCkgOiBtYXhXYWl0O1xuICAgIHRyYWlsaW5nID0gJ3RyYWlsaW5nJyBpbiBvcHRpb25zID8gISFvcHRpb25zLnRyYWlsaW5nIDogdHJhaWxpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBpbnZva2VGdW5jKHRpbWUpIHtcbiAgICB2YXIgYXJncyA9IGxhc3RBcmdzLFxuICAgICAgICB0aGlzQXJnID0gbGFzdFRoaXM7XG5cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBsZWFkaW5nRWRnZSh0aW1lKSB7XG4gICAgLy8gUmVzZXQgYW55IGBtYXhXYWl0YCB0aW1lci5cbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgLy8gU3RhcnQgdGhlIHRpbWVyIGZvciB0aGUgdHJhaWxpbmcgZWRnZS5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIC8vIEludm9rZSB0aGUgbGVhZGluZyBlZGdlLlxuICAgIHJldHVybiBsZWFkaW5nID8gaW52b2tlRnVuYyh0aW1lKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWFpbmluZ1dhaXQodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWUsXG4gICAgICAgIHJlc3VsdCA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmcgPyBuYXRpdmVNaW4ocmVzdWx0LCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgYWxwaCA9IFtcbiAgJ2EnLFxuICAnYicsXG4gICdjJyxcbiAgJ2QnLFxuICAnZScsXG4gICdmJyxcbiAgJ2cnLFxuICAnaCcsXG4gICdpJyxcbiAgJ2onLFxuICAnaycsXG4gICdsJyxcbiAgJ20nLFxuICAnbicsXG4gICdvJyxcbiAgJ3AnLFxuICAncScsXG4gICdyJyxcbiAgJ3MnLFxuICAndCcsXG4gICd1JyxcbiAgJ3YnLFxuICAndycsXG4gICd4JyxcbiAgJ3knLFxuICAneicsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjQpO1xuICAgIGlmIChyYW5kb20gJSAyID09PSAwKSB7XG4gICAgICByZXN1bHQgKz0gYWxwaFtyYW5kb21dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gcmFuZG9tO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZW5lcmF0ZUlkLmpzIiwiY29uc3QgcHJvY2Vzc0J1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgaWYgKCFidWZmZXIudG9wKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJ1ZmZlciwgeyB0b3A6IDAgfSk7XG4gIH1cblxuICBpZiAoIWJ1ZmZlci5ib3R0b20pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYnVmZmVyLCB7IGJvdHRvbTogMCB9KTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVNob3VsZExvYWQgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyB0b3AsIGJvdHRvbSB9ID0gYnVmZmVyO1xuICAgIHJldHVybiAoZGlyZWN0aW9uID09PSAnZG93bicgJiYgcmVjdC50b3AgPD0gdG9wKSB8fFxuICAgICAgICAgICAoZGlyZWN0aW9uID09PSAndXAnICYmIHJlY3QuYm90dG9tID49ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyBib3R0b20pKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbnRyeSkge1xuICBsZXQgc2hvdWxkTG9hZDtcbiAgaWYgKGVudHJ5LmJ1ZmZlcikge1xuICAgIHNob3VsZExvYWQgPSBnZW5lcmF0ZVNob3VsZExvYWQocHJvY2Vzc0J1ZmZlcihlbnRyeS5idWZmZXIpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG91bGRMb2FkID0gZ2VuZXJhdGVTaG91bGRMb2FkKHsgdG9wOiAwLCBib3R0b206IDAgfSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgbG9hZDogZW50cnkubG9hZCxcbiAgICAgIHR5cGU6IGVudHJ5LnR5cGUsXG4gICAgICBzZWxlY3RvcjogZW50cnkuc2VsZWN0b3IsXG4gICAgICBzaG91bGRMb2FkLFxuICAgIH0sXG4gICk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3Byb2Nlc3NFbnRyeS5qcyIsImltcG9ydCBjYW1lbGl6ZSBmcm9tICcuLi92ZW5kb3IvY2FtZWxpemUnO1xuaW1wb3J0IHBhcnNlQXR0cmlidXRlVmFsdWUgZnJvbSAnLi9wYXJzZUF0dHJpYnV0ZVZhbHVlJztcblxuY29uc3QgZGVEYXNoID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tL2csICcgJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hbWUgPSBjYW1lbGl6ZShkZURhc2goc2VsZWN0b3IpKTtcbiAgcmV0dXJuIHsgbm9kZTogdGFyZ2V0LCBkYXRhOiBwYXJzZUF0dHJpYnV0ZVZhbHVlKHRhcmdldCwgbmFtZSkgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3Byb2Nlc3NUYXJnZXQuanMiLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTcwNTI1L2NvbnZlcnRpbmctYW55LXN0cmluZy1pbnRvLWNhbWVsLWNhc2UjYW5zd2VyLTI5NzA2NjdcbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiAoXG4gIHN0ci5yZXBsYWNlKC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZywgKGxldHRlciwgaW5kZXgpID0+IChcbiAgICBpbmRleCA9PT0gMCA/IGxldHRlci50b0xvd2VyQ2FzZSgpIDogbGV0dGVyLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJylcbiAgKSlcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVuZG9yL2NhbWVsaXplLmpzIiwiLypcbiAgaW5wdXQgJ25vZGUnIFtET00gbm9kZV06IGFuYWx5dGljcyB0YXJnZXQgRE9NIG5vZGVcbiAgaW5wdXQgJ2F0dHJOYW1lJyBbU3RyaW5nXTogcHJvcGVydHkgbmFtZSBvZiBub2RlJ3MgJ2RhdGFTZXQnXG4gIGVsZW1lbnQgbWF5IGhhdmUgZGF0YSBhdHRyaWJ1dGVzIGluIHRoZSBmb3JtIG9mOiBkYXRhLWF0dHJOYW1lPVwiZm9vXCJcbiAgb3V0cHV0IFtTdHJpbmddOiB2YWx1ZSBvZiBkYXRhIGF0dHJpYnV0ZSBmcm9tIG5vZGUgJ2RhdGFTZXQnXG4gICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKG5vZGUsIGF0dHJOYW1lKSB7XG4gIC8vIHVzaW5nICdzdHJpbmdpZnknIGFuZCAncGFyc2UnIHRvIGFkZHJlc3MgV2Via2l0IChpT1MpIGJ1Z1xuICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTYxNDU0XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZS5kYXRhc2V0KSksXG4gICk7XG5cbiAgbGV0IHBhcnNlZFZhbHVlO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoa2V5LmluZGV4T2YoYXR0ck5hbWUpID4gLTEpIHtcbiAgICAgIHBhcnNlZFZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWRWYWx1ZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGFyc2VBdHRyaWJ1dGVWYWx1ZS5qcyIsImltcG9ydCB0cmFja0RvbSBmcm9tICcuL3RyYWNrRG9tJztcbmltcG9ydCB0cmFja0pzIGZyb20gJy4vdHJhY2tKcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZSc7XG5cbmV4cG9ydCB7XG4gIHRyYWNrRG9tLFxuICB0cmFja0pzLFxuICBzdG9yZSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2IsIGV2ZW50TmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBuYW1lLCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IHZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICBtZXRob2ROYW1lOiBuYW1lLFxuICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgICBhcmdzLFxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHRyYWNrSnM6IGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3I6ICR7ZXJyfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9sZFZhbHVlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgLi4uZGVzY3JpcHRvciwgdmFsdWUgfTtcbiAgfTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RyYWNrSnMuanMiLCJpbXBvcnQgeyB0cmFja0RvbSB9IGZyb20gJy4uLy4uLy4uLy4uL3NyYyc7XG5cbnRyYWNrRG9tKHtcbiAgY2xpY2s6IGZ1bmN0aW9uKHsgdGFyZ2V0LCB0eXBlIH0pIHtcbiAgICBjb25zb2xlLmxvZygnaXMgdGhpcyBhIHRoaW5nPycsIHRhcmdldCwgdHlwZSk7XG4gIH1cbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZW1vL2NvZGUvdHJhY2stZG9tL2NsaWNrL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==