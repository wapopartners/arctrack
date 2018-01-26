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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var _getTarget = __webpack_require__(7);

var _getTarget2 = _interopRequireDefault(_getTarget);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

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

      var val = void 0;
      if (location) {
        var loc = location.split('.');
        val = (0, _getTarget2.default)({
          properties: loc.slice(0, loc.length - 1),
          target: loc.pop()
        });
      }
      this[name] = val || value;

      if (!this[name]) {
        _logger2.default.methodFailed('Store#set', 'must provide either a location or a value');
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(16);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.trackJs = exports.trackDom = undefined;

var _trackDom = __webpack_require__(6);

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
/* 6 */
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

var _generateTrackClick = __webpack_require__(8);

var _generateTrackClick2 = _interopRequireDefault(_generateTrackClick);

var _delegateEvent = __webpack_require__(10);

var _delegateEvent2 = _interopRequireDefault(_delegateEvent);

var _generateTrackScroll = __webpack_require__(11);

var _generateTrackScroll2 = _interopRequireDefault(_generateTrackScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mineType = __webpack_require__(9);

var _mineType2 = _interopRequireDefault(_mineType);

var _logger = __webpack_require__(2);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (target, selector) {
  return target.closest("[" + selector + "]").getAttribute(selector);
};

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

var root = __webpack_require__(3);

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

var Symbol = __webpack_require__(4),
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

var Symbol = __webpack_require__(4);

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

exports.default = function (cb) {
  return function decorate(target, name, descriptor) {
    var oldValue = descriptor.value;
    var value = function value() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      try {
        cb(this, args, _Store2.default.pageData);
      } catch (err) {
        console.error(err);
      }
      return oldValue.apply(this, args);
    };
    return _extends({}, descriptor, { value: value });
  };
};

var _Store = __webpack_require__(1);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDczNmE0MjUwYjBmNDdmZDRlYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9TdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmFja0RvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZXRUYXJnZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVUcmFja0NsaWNrLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL21pbmVUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2RlbGVnYXRlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvZ2VuZXJhdGVUcmFja1Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvU2Nyb2xsU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3Byb2Nlc3NFbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9wcm9jZXNzVGFyZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy92ZW5kb3IvY2FtZWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGFyc2VBdHRyaWJ1dGVWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhY2tKcy5qcyJdLCJuYW1lcyI6WyJTdG9yZSIsIm5hbWUiLCJsb2NhdGlvbiIsInZhbHVlIiwidmFsIiwibG9jIiwic3BsaXQiLCJwcm9wZXJ0aWVzIiwic2xpY2UiLCJsZW5ndGgiLCJ0YXJnZXQiLCJwb3AiLCJtZXRob2RGYWlsZWQiLCJzdG9yZSIsIkxvZ2dlciIsIm1zZyIsImNvbnNvbGUiLCJlcnJvciIsIm1ldGhvZCIsImNhbGxiYWNrIiwiY2FsbGJhY2tNc2ciLCJ0cmFja0RvbSIsInRyYWNrSnMiLCJvcHRzIiwiZGF0YUF0dHIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJpbml0VHJhY2tEb20iLCJwdWJsaWMiLCJzZXQiLCJpbml0IiwicGFnZURhdGEiLCJjbGljayIsInRyYWNrQ2xpY2siLCJjYiIsInNjcm9sbCIsInRyYWNrU2Nyb2xsIiwib25zY3JvbGwiLCJnZXRUYXJnZXQiLCJiYXNlIiwicHJvcCIsInR5cGUiLCJlcnIiLCJkZWZhdWx0RXJyb3IiLCJzZWxlY3RvciIsImNsb3Nlc3QiLCJnZXRBdHRyaWJ1dGUiLCJkZWxlZ2F0ZUV2ZW50IiwiZXZlbnRUeXBlIiwiZm4iLCJtYXRjaGVyIiwiZWwiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibWF0Y2hlcyIsImN1cnJlbnRUYXJnZXQiLCJhY3RpdmVFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJBcnJheSIsImlzQXJyYXkiLCJlbnRyaWVzIiwiYWN0aXZhdGUiLCJERUZBVUxUX1RIUk9UVExFX1NQRUVEIiwiU2Nyb2xsU2VydmljZSIsInRocm90dGxlU3BlZWQiLCJ0ZXN0RWxlbWVudHMiLCJiaW5kIiwiZW50cnlUeXBlcyIsInBlbmRpbmdFbGVtZW50cyIsInNjcm9sbGVkRWxlbWVudHMiLCJzY3JvbGxTdGF0dXMiLCJsYXN0WSIsImRpcmVjdGlvbiIsImZvckVhY2giLCJlbnRyeSIsInJlZ2lzdGVyRW50cnkiLCJub2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0cmFja09uY2VPbmx5IiwiaSIsIm5vZGUiLCJyZWdpc3RlckVsZW1lbnQiLCJpZCIsImxvYWQiLCJzaG91bGRMb2FkIiwia2V5IiwiZGV0ZWN0U2Nyb2xsRGlyZWN0aW9uIiwiT2JqZWN0Iiwia2V5cyIsInRyYW5zZmVyRWxlbWVudCIsInByZXZpb3VzbHlTY3JvbGxlZCIsInJlbW92ZVBlbmRpbmdFbGVtZW50cyIsImFzc2lnbiIsImN1cnJlbnRZIiwicGFnZVlPZmZzZXQiLCJoYW5kbGVEaXJlY3Rpb25DaGFuZ2UiLCJyZXN1bHQiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJhbHBoIiwiYnVmZmVyIiwiZ2VuZXJhdGVTaG91bGRMb2FkIiwicHJvY2Vzc0J1ZmZlciIsInRvcCIsImJvdHRvbSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpbm5lckhlaWdodCIsImRlRGFzaCIsImRhdGEiLCJzdHIiLCJyZXBsYWNlIiwibGV0dGVyIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwicGFyc2VBdHRyaWJ1dGVWYWx1ZSIsImF0dHJOYW1lIiwiYXR0cmlidXRlcyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRhdGFzZXQiLCJwYXJzZWRWYWx1ZSIsImluZGV4T2YiLCJkZWNvcmF0ZSIsImRlc2NyaXB0b3IiLCJvbGRWYWx1ZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsSzs7Ozs7Ozs4QkFLRDtBQUFBLFVBSERDLElBR0MsUUFIREEsSUFHQztBQUFBLFVBRkRDLFFBRUMsUUFGREEsUUFFQztBQUFBLFVBRERDLEtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBOzs7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDOzs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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QVA7QUFDRCxLQVBEO0FBUUEsd0JBQVlGLFVBQVosSUFBd0JoSSxZQUF4QjtBQUNELEdBWEQ7QUFZRCxDOztBQWZEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMDczNmE0MjUwYjBmNDdmZDRlYSIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBnZXRUYXJnZXQgZnJvbSAnLi91dGlsL2dldFRhcmdldCc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vdXRpbC9sb2dnZXInO1xuXG5jbGFzcyBTdG9yZSB7XG4gIHNldCh7XG4gICAgbmFtZSxcbiAgICBsb2NhdGlvbixcbiAgICB2YWx1ZSxcbiAgfSkge1xuICAgIGxldCB2YWw7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBjb25zdCBsb2MgPSBsb2NhdGlvbi5zcGxpdCgnLicpO1xuICAgICAgdmFsID0gZ2V0VGFyZ2V0KHtcbiAgICAgICAgcHJvcGVydGllczogbG9jLnNsaWNlKDAsIGxvYy5sZW5ndGggLSAxKSxcbiAgICAgICAgdGFyZ2V0OiBsb2MucG9wKCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpc1tuYW1lXSA9IHZhbCB8fCB2YWx1ZTtcblxuICAgIGlmICghdGhpc1tuYW1lXSkge1xuICAgICAgbG9nZ2VyLm1ldGhvZEZhaWxlZCgnU3RvcmUjc2V0JywgJ211c3QgcHJvdmlkZSBlaXRoZXIgYSBsb2NhdGlvbiBvciBhIHZhbHVlJyk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3JlLmpzIiwiY2xhc3MgTG9nZ2VyIHtcbiAgZGVmYXVsdEVycm9yKG1zZykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FyY3RyYWNrIGZhaWxlZCB3aXRoIHRoZSBmb2xsb3dpbmcgZXJyb3I6ICcsIG1zZyk7XG4gIH1cbiAgbWV0aG9kRmFpbGVkKG1ldGhvZCwgbXNnLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGNhbGxiYWNrTXNnID0gY2FsbGJhY2sgPyBgd2hpbGUgdHJ5aW5nIHRvIGV4ZWN1dGUgeW91ciBjYWxsYmFjazogJHtjYWxsYmFja31gIDogJyc7XG4gICAgY29uc29sZS5lcnJvcihgJHttZXRob2R9IGZhaWxlZCAke2NhbGxiYWNrTXNnfSwgd2l0aCB0aGUgZm9sbG93aW5nIGVycm9yYCwgbXNnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9sb2dnZXIuanMiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB0cmFja0RvbSBmcm9tICcuL3RyYWNrRG9tJztcbmltcG9ydCB0cmFja0pzIGZyb20gJy4vdHJhY2tKcyc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZSc7XG5cbmV4cG9ydCB7XG4gIHRyYWNrRG9tLFxuICB0cmFja0pzLFxuICBzdG9yZSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgc3RvcmUgZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgZ2VuZXJhdGVUcmFja0NsaWNrIGZyb20gJy4vdXRpbC9nZW5lcmF0ZVRyYWNrQ2xpY2snO1xuaW1wb3J0IGRlbGVnYXRlRXZlbnQgZnJvbSAnLi91dGlsL2RlbGVnYXRlRXZlbnQnO1xuaW1wb3J0IGdlbmVyYXRlVHJhY2tTY3JvbGwgZnJvbSAnLi91dGlsL2dlbmVyYXRlVHJhY2tTY3JvbGwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0cykge1xuICBjb25zdCBkYXRhQXR0ciA9IG9wdHMuZGF0YUF0dHIgfHwgJ2RhdGEtYXJjdHJhY2snO1xuICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gaW5pdFRyYWNrRG9tKCkge1xuICAgIGlmIChvcHRzLnB1YmxpYykge1xuICAgICAgc3RvcmUuc2V0KHtcbiAgICAgICAgbmFtZTogJ3BhZ2VEYXRhJyxcbiAgICAgICAgbG9jYXRpb246ICh0eXBlb2Ygb3B0cy5wdWJsaWMgPT09ICdzdHJpbmcnKSA/IG9wdHMucHVibGljIDogbnVsbCxcbiAgICAgICAgdmFsdWU6ICh0eXBlb2Ygb3B0cy5wdWJsaWMgPT09ICdvYmplY3QnKSA/IG9wdHMucHVibGljIDogbnVsbCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0cy5pbml0KSB7XG4gICAgICAgIG9wdHMuaW5pdChzdG9yZS5wYWdlRGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRzLmNsaWNrKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrQ2xpY2sgPSBnZW5lcmF0ZVRyYWNrQ2xpY2soe1xuICAgICAgICAgIGNiOiBvcHRzLmNsaWNrLFxuICAgICAgICAgIHBhZ2VEYXRhOiBzdG9yZS5wYWdlRGF0YSxcbiAgICAgICAgICBkYXRhQXR0cixcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGVnYXRlRXZlbnQoJ2NsaWNrJywgdHJhY2tDbGljaywgYFske2RhdGFBdHRyfV1gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMuc2Nyb2xsKSB7XG4gICAgICAgIGNvbnN0IHRyYWNrU2Nyb2xsID0gZ2VuZXJhdGVUcmFja1Njcm9sbChvcHRzLnNjcm9sbCkoc3RvcmUucGFnZURhdGEpO1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSB0cmFja1Njcm9sbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdHJhY2tEb20uanMiLCJleHBvcnQgY29uc3QgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHtcbiAgYmFzZSA9IHdpbmRvdyxcbiAgcHJvcGVydGllcyxcbiAgdGFyZ2V0LFxufSkge1xuICBjb25zdCBwcm9wID0gcHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmxlbmd0aCA/IHByb3BlcnRpZXNbMF0gOiBudWxsO1xuICBpZiAoYmFzZVtwcm9wXSkge1xuICAgIHJldHVybiAoXG4gICAgICBnZXRUYXJnZXQoe1xuICAgICAgICBiYXNlOiBiYXNlW3Byb3BdLFxuICAgICAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLnNsaWNlKDEsIHByb3BlcnRpZXMubGVuZ3RoKSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHJldHVybiBiYXNlW3RhcmdldF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRUYXJnZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZXRUYXJnZXQuanMiLCJpbXBvcnQgbWluZVR5cGUgZnJvbSAnLi9taW5lVHlwZSc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgY2IsXG4gIHBhZ2VEYXRhLFxuICBkYXRhQXR0cixcbn0pID0+IChcbiAgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICB0cnkge1xuICAgICAgY2Ioe1xuICAgICAgICB0eXBlOiBtaW5lVHlwZSh0YXJnZXQsIGRhdGFBdHRyKSxcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICBwYWdlRGF0YSxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgbG9nZ2VyLmRlZmF1bHRFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuKTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZ2VuZXJhdGVUcmFja0NsaWNrLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHRhcmdldCwgc2VsZWN0b3IpID0+IHRhcmdldC5jbG9zZXN0KGBbJHtzZWxlY3Rvcn1dYCkuZ2V0QXR0cmlidXRlKHNlbGVjdG9yKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL21pbmVUeXBlLmpzIiwiLy8gcmVwbGFjZW1lbnQgZm9yICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZuKVxuZnVuY3Rpb24gZGVsZWdhdGVFdmVudChldmVudFR5cGUsIGZuLCBtYXRjaGVyLCBlbCA9IGRvY3VtZW50KSB7XG4gIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAoZSkgPT4ge1xuICAgIGlmICghbWF0Y2hlciB8fFxuICAgICAgZS50YXJnZXQubWF0Y2hlcyhtYXRjaGVyKSB8fCAvLyBmaXJlZm94XG4gICAgICBlLmN1cnJlbnRUYXJnZXQuYWN0aXZlRWxlbWVudC5tYXRjaGVzKG1hdGNoZXIpIHx8IC8vIGNocm9tZVxuICAgICAgLy8gc2FmYXJpLCBjaGVjayBmb3IgcGFyZW50RWxlbWVudCBmaXhlcyBidWcgd2hlcmUgZG9jdW1lbnQgaXMgZWxlbWVudCBjbGlja2VkIG9uXG4gICAgICAoZS50YXJnZXQucGFyZW50RWxlbWVudCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm1hdGNoZXMobWF0Y2hlcikpKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZm4oZSk7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZUV2ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvZGVsZWdhdGVFdmVudC5qcyIsImltcG9ydCBTY3JvbGxTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL1Njcm9sbFNlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBlbnRyaWVzID0+IChcbiAgbmV3IFNjcm9sbFNlcnZpY2UoQXJyYXkuaXNBcnJheShlbnRyaWVzKSA/IGVudHJpZXMgOiBbZW50cmllc10pLmFjdGl2YXRlKClcbik7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2dlbmVyYXRlVHJhY2tTY3JvbGwuanMiLCJpbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4uL3V0aWwvZ2VuZXJhdGVJZCc7XG5pbXBvcnQgcHJvY2Vzc0VudHJ5IGZyb20gJy4uL3V0aWwvcHJvY2Vzc0VudHJ5JztcbmltcG9ydCBwcm9jZXNzVGFyZ2V0IGZyb20gJy4uL3V0aWwvcHJvY2Vzc1RhcmdldCc7XG5cbmNvbnN0IERFRkFVTFRfVEhST1RUTEVfU1BFRUQgPSAxMDAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoZW50cmllcywgdGhyb3R0bGVTcGVlZCA9IERFRkFVTFRfVEhST1RUTEVfU1BFRUQpIHtcbiAgICB0aGlzLmVudHJpZXMgPSBlbnRyaWVzO1xuICAgIHRoaXMudGhyb3R0bGVTcGVlZCA9IHRocm90dGxlU3BlZWQ7XG4gICAgdGhpcy50ZXN0RWxlbWVudHMgPSB0aGlzLnRlc3RFbGVtZW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZW50cnlUeXBlcyA9IHt9O1xuICAgIHRoaXMucGVuZGluZ0VsZW1lbnRzID0ge307XG4gICAgdGhpcy5zY3JvbGxlZEVsZW1lbnRzID0ge307XG4gICAgdGhpcy5zY3JvbGxTdGF0dXMgPSB7IGxhc3RZOiAwLCBkaXJlY3Rpb246ICdkb3duJyB9O1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5lbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICB0aGlzLnJlZ2lzdGVyRW50cnkocHJvY2Vzc0VudHJ5KGVudHJ5KSk7XG4gICAgICBjb25zdCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFtkYXRhLSR7ZW50cnkuc2VsZWN0b3J9XWApO1xuICAgICAgY29uc3QgdHJhY2tPbmNlT25seSA9IGVudHJ5LnRyYWNrT25jZU9ubHkgPyBlbnRyeS50cmFja09uY2VPbmx5IDogZmFsc2U7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckVsZW1lbnQoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgdHlwZTogZW50cnkudHlwZSxcbiAgICAgICAgICB0cmFja09uY2VPbmx5LFxuICAgICAgICAgIGlkOiBnZW5lcmF0ZUlkKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYWdlRGF0YSA9PiAoXG4gICAgICB0aHJvdHRsZShcbiAgICAgICAgdGhpcy50ZXN0RWxlbWVudHMuYmluZCh0aGlzLCBwYWdlRGF0YSksXG4gICAgICAgIHRoaXMudGhyb3R0bGVTcGVlZCxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVnaXN0ZXJFbnRyeSh7XG4gICAgbG9hZCxcbiAgICBzaG91bGRMb2FkLFxuICAgIHR5cGUsXG4gICAgc2VsZWN0b3IsXG4gIH0pIHtcbiAgICB0aGlzLmVudHJ5VHlwZXNbdHlwZV0gPSB7XG4gICAgICBsb2FkLFxuICAgICAgc2hvdWxkTG9hZCxcbiAgICAgIHNlbGVjdG9yLFxuICAgIH07XG4gIH1cblxuICByZWdpc3RlckVsZW1lbnQoe1xuICAgIG5vZGUsXG4gICAgaWQsXG4gICAgdHlwZSxcbiAgICB0cmFja09uY2VPbmx5LFxuICB9KSB7XG4gICAgdGhpcy5wZW5kaW5nRWxlbWVudHNbaWRdID0ge1xuICAgICAgdHlwZSxcbiAgICAgIHRhcmdldDogbm9kZSxcbiAgICAgIHRyYWNrT25jZU9ubHksXG4gICAgfTtcbiAgfVxuXG4gIHRyYW5zZmVyRWxlbWVudChrZXkpIHtcbiAgICB0aGlzLnNjcm9sbGVkRWxlbWVudHNba2V5XSA9IHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gIH1cblxuICB0ZXN0RWxlbWVudHMocGFnZURhdGEpIHtcbiAgICB0aGlzLmRldGVjdFNjcm9sbERpcmVjdGlvbigpO1xuICAgIE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ0VsZW1lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGFyZ2V0LFxuICAgICAgICB0eXBlLFxuICAgICAgICB0cmFja09uY2VPbmx5LFxuICAgICAgfSA9IHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMuZW50cnlUeXBlc1t0eXBlXTtcbiAgICAgIGlmIChlbnRyeS5zaG91bGRMb2FkKHRhcmdldCwgdGhpcy5zY3JvbGxTdGF0dXMuZGlyZWN0aW9uKSkge1xuICAgICAgICBlbnRyeS5sb2FkKHtcbiAgICAgICAgICB0YXJnZXQ6IHByb2Nlc3NUYXJnZXQodGFyZ2V0LCBlbnRyeS5zZWxlY3RvciksXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBwYWdlRGF0YSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghdHJhY2tPbmNlT25seSkgdGhpcy50cmFuc2ZlckVsZW1lbnQoa2V5KTtcbiAgICAgICAgZGVsZXRlIHRoaXMucGVuZGluZ0VsZW1lbnRzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEaXJlY3Rpb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgcHJldmlvdXNseVNjcm9sbGVkID0gdGhpcy5zY3JvbGxlZEVsZW1lbnRzO1xuICAgIHRoaXMuc2Nyb2xsZWRFbGVtZW50cyA9IHRoaXMucmVtb3ZlUGVuZGluZ0VsZW1lbnRzKCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnBlbmRpbmdFbGVtZW50cywgcHJldmlvdXNseVNjcm9sbGVkKTtcbiAgfVxuXG4gIGRldGVjdFNjcm9sbERpcmVjdGlvbigpIHtcbiAgICBjb25zdCB7IHBhZ2VZT2Zmc2V0OiBjdXJyZW50WSB9ID0gd2luZG93O1xuICAgIGxldCBkaXJlY3Rpb247XG4gICAgaWYgKGN1cnJlbnRZID49IHRoaXMuc2Nyb2xsU3RhdHVzLmxhc3RZKSB7XG4gICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpcmVjdGlvbiA9ICd1cCc7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiAhPT0gdGhpcy5zY3JvbGxTdGF0dXMuZGlyZWN0aW9uKSB7XG4gICAgICB0aGlzLmhhbmRsZURpcmVjdGlvbkNoYW5nZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsU3RhdHVzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB0aGlzLnNjcm9sbFN0YXR1cy5sYXN0WSA9IGN1cnJlbnRZO1xuICB9XG5cbiAgcmVtb3ZlUGVuZGluZ0VsZW1lbnRzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMucGVuZGluZ0VsZW1lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHJlc3VsdFtrZXldID0gdGhpcy5wZW5kaW5nRWxlbWVudHNba2V5XTtcbiAgICAgIGRlbGV0ZSB0aGlzLnBlbmRpbmdFbGVtZW50c1trZXldO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL1Njcm9sbFNlcnZpY2UuanMiLCJ2YXIgZGVib3VuY2UgPSByZXF1aXJlKCcuL2RlYm91bmNlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGhyb3R0bGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdGhyb3R0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBub3cgPSByZXF1aXJlKCcuL25vdycpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYm91bmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBub3c7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9OdW1iZXIoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9OdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IEluZmluaXR5XG4gKlxuICogXy50b051bWJlcignMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIE5BTjtcbiAgfVxuICBpZiAoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgdmFyIG90aGVyID0gdHlwZW9mIHZhbHVlLnZhbHVlT2YgPT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gaXNPYmplY3Qob3RoZXIpID8gKG90aGVyICsgJycpIDogb3RoZXI7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogK3ZhbHVlO1xuICB9XG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZVRyaW0sICcnKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgYWxwaCA9IFtcbiAgJ2EnLFxuICAnYicsXG4gICdjJyxcbiAgJ2QnLFxuICAnZScsXG4gICdmJyxcbiAgJ2cnLFxuICAnaCcsXG4gICdpJyxcbiAgJ2onLFxuICAnaycsXG4gICdsJyxcbiAgJ20nLFxuICAnbicsXG4gICdvJyxcbiAgJ3AnLFxuICAncScsXG4gICdyJyxcbiAgJ3MnLFxuICAndCcsXG4gICd1JyxcbiAgJ3YnLFxuICAndycsXG4gICd4JyxcbiAgJ3knLFxuICAneicsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjQpO1xuICAgIGlmIChyYW5kb20gJSAyID09PSAwKSB7XG4gICAgICByZXN1bHQgKz0gYWxwaFtyYW5kb21dO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgKz0gcmFuZG9tO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9nZW5lcmF0ZUlkLmpzIiwiY29uc3QgcHJvY2Vzc0J1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgaWYgKCFidWZmZXIudG9wKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJ1ZmZlciwgeyB0b3A6IDAgfSk7XG4gIH1cblxuICBpZiAoIWJ1ZmZlci5ib3R0b20pIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYnVmZmVyLCB7IGJvdHRvbTogMCB9KTtcbiAgfVxuXG4gIHJldHVybiBidWZmZXI7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVNob3VsZExvYWQgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSwgZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgcmVjdCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeyB0b3AsIGJvdHRvbSB9ID0gYnVmZmVyO1xuICAgIHJldHVybiAoZGlyZWN0aW9uID09PSAnZG93bicgJiYgcmVjdC50b3AgPD0gdG9wKSB8fFxuICAgICAgICAgICAoZGlyZWN0aW9uID09PSAndXAnICYmIHJlY3QuYm90dG9tID49ICh3aW5kb3cuaW5uZXJIZWlnaHQgKyBib3R0b20pKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChlbnRyeSkge1xuICBsZXQgc2hvdWxkTG9hZDtcbiAgaWYgKGVudHJ5LmJ1ZmZlcikge1xuICAgIHNob3VsZExvYWQgPSBnZW5lcmF0ZVNob3VsZExvYWQocHJvY2Vzc0J1ZmZlcihlbnRyeS5idWZmZXIpKTtcbiAgfSBlbHNlIHtcbiAgICBzaG91bGRMb2FkID0gZ2VuZXJhdGVTaG91bGRMb2FkKHsgdG9wOiAwLCBib3R0b206IDAgfSk7XG4gIH1cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgbG9hZDogZW50cnkubG9hZCxcbiAgICAgIHR5cGU6IGVudHJ5LnR5cGUsXG4gICAgICBzZWxlY3RvcjogZW50cnkuc2VsZWN0b3IsXG4gICAgICBzaG91bGRMb2FkLFxuICAgIH0sXG4gICk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3Byb2Nlc3NFbnRyeS5qcyIsImltcG9ydCBjYW1lbGl6ZSBmcm9tICcuLi92ZW5kb3IvY2FtZWxpemUnO1xuaW1wb3J0IHBhcnNlQXR0cmlidXRlVmFsdWUgZnJvbSAnLi9wYXJzZUF0dHJpYnV0ZVZhbHVlJztcblxuY29uc3QgZGVEYXNoID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tL2csICcgJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IG5hbWUgPSBjYW1lbGl6ZShkZURhc2goc2VsZWN0b3IpKTtcbiAgcmV0dXJuIHsgbm9kZTogdGFyZ2V0LCBkYXRhOiBwYXJzZUF0dHJpYnV0ZVZhbHVlKHRhcmdldCwgbmFtZSkgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL3Byb2Nlc3NUYXJnZXQuanMiLCIvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yOTcwNTI1L2NvbnZlcnRpbmctYW55LXN0cmluZy1pbnRvLWNhbWVsLWNhc2UjYW5zd2VyLTI5NzA2NjdcbmV4cG9ydCBkZWZhdWx0IHN0ciA9PiAoXG4gIHN0ci5yZXBsYWNlKC8oPzpeXFx3fFtBLVpdfFxcYlxcdykvZywgKGxldHRlciwgaW5kZXgpID0+IChcbiAgICBpbmRleCA9PT0gMCA/IGxldHRlci50b0xvd2VyQ2FzZSgpIDogbGV0dGVyLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnJylcbiAgKSlcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmVuZG9yL2NhbWVsaXplLmpzIiwiLypcbiAgaW5wdXQgJ25vZGUnIFtET00gbm9kZV06IGFuYWx5dGljcyB0YXJnZXQgRE9NIG5vZGVcbiAgaW5wdXQgJ2F0dHJOYW1lJyBbU3RyaW5nXTogcHJvcGVydHkgbmFtZSBvZiBub2RlJ3MgJ2RhdGFTZXQnXG4gIGVsZW1lbnQgbWF5IGhhdmUgZGF0YSBhdHRyaWJ1dGVzIGluIHRoZSBmb3JtIG9mOiBkYXRhLWF0dHJOYW1lPVwiZm9vXCJcbiAgb3V0cHV0IFtTdHJpbmddOiB2YWx1ZSBvZiBkYXRhIGF0dHJpYnV0ZSBmcm9tIG5vZGUgJ2RhdGFTZXQnXG4gICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKG5vZGUsIGF0dHJOYW1lKSB7XG4gIC8vIHVzaW5nICdzdHJpbmdpZnknIGFuZCAncGFyc2UnIHRvIGFkZHJlc3MgV2Via2l0IChpT1MpIGJ1Z1xuICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTYxNDU0XG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZS5kYXRhc2V0KSksXG4gICk7XG5cbiAgbGV0IHBhcnNlZFZhbHVlO1xuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoa2V5LmluZGV4T2YoYXR0ck5hbWUpID4gLTEpIHtcbiAgICAgIHBhcnNlZFZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBwYXJzZWRWYWx1ZTtcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvcGFyc2VBdHRyaWJ1dGVWYWx1ZS5qcyIsImltcG9ydCBzdG9yZSBmcm9tICcuL1N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNiKSB7XG4gIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0ZSh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgY29uc3QgdmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY2IodGhpcywgYXJncywgc3RvcmUucGFnZURhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvbGRWYWx1ZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICAgIHJldHVybiB7IC4uLmRlc2NyaXB0b3IsIHZhbHVlIH07XG4gIH07XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90cmFja0pzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==