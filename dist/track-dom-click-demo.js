!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=30)}([function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),a=(r=i)&&r.__esModule?r:{default:r};var u=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"set",value:function(e){var t=e.name,n=e.location,r=e.value;if(r)this[t]=r;else{var o=-1!==n.indexOf(".")?n.split("."):n;this[t]=Array.isArray(o)?(0,a.default)({properties:o.slice(0,o.length-1),target:o.pop()}):window[o]}if(!this[t])throw new Error("Store#set: must provide either a location string or a value")}}]),e}());t.default=u},function(e,t,n){var r=n(16),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t,n){var r=n(2).Symbol;e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.trackJs=t.trackDom=void 0;var r=a(n(5)),o=a(n(29)),i=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}t.trackDom=r.default,t.trackJs=o.default,t.store=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.dataAttr||"data-arctrack";if(e.click){var n=(0,o.default)({cb:e.click,pageData:r.default.pageData,dataAttr:t});(0,i.default)("click",n,"["+t+"]")}if(e.scroll){var u=(0,a.default)(e.scroll)(r.default.pageData);window.onscroll=u}};var r=u(n(1)),o=u(n(7)),i=u(n(10)),a=u(n(11));function u(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.getTarget=function e(t){var n=t.base,r=void 0===n?window:n,o=t.properties,i=t.target,a=o&&o.length?o[0]:null;return r[a]?e({base:r[a],properties:o.slice(1,o.length),target:i}):r[i]};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(8)),o=i(n(9));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.cb,n=e.pageData,i=e.dataAttr;return function(e){var a=e.target;try{t({type:(0,r.default)(a,i),target:a,pageData:n})}catch(e){o.default.defaultError(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return e.closest("["+t+"]").getAttribute(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"defaultError",value:function(e){console.error("Arctrack failed with the following error: ",e)}},{key:"methodFailed",value:function(e,t,n){var r=n?"while trying to execute your callback: "+n:"";console.error(e+" failed "+r+", with the following error",t)}}]),e}();t.default=new o},function(e,t,n){"use strict";e.exports=function(e,t,n){(arguments.length>3&&void 0!==arguments[3]?arguments[3]:document).addEventListener(e,function(e){(!n||e.target.matches(n)||e.currentTarget.activeElement.matches(n)||e.target.parentElement&&e.target.parentElement.matches(n))&&(e.stopPropagation(),t(e))})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(12),i=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new i.default(Array.isArray(e)?e:[e]).activate()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(13)),i=c(n(24)),a=c(n(25)),u=c(n(26));function c(e){return e&&e.__esModule?e:{default:e}}var l=1e3,s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.entries=t,this.throttleSpeed=n,this.testElements=this.testElements.bind(this),this.entryTypes={},this.pendingElements={},this.scrolledElements={},this.scrollStatus={lastY:0,direction:"down"}}return r(e,[{key:"activate",value:function(){var e=this;return this.entries.forEach(function(t){e.registerEntry((0,a.default)(t));for(var n=document.querySelectorAll("[data-"+t.selector+"]"),r=!!t.trackOnceOnly&&t.trackOnceOnly,o=0;o<n.length;o+=1){var u=n[o];e.registerElement({node:u,type:t.type,trackOnceOnly:r,id:(0,i.default)()})}}),function(t){return(0,o.default)(e.testElements.bind(e,t),e.throttleSpeed)}}},{key:"registerEntry",value:function(e){var t=e.load,n=e.shouldLoad,r=e.type,o=e.selector;this.entryTypes[r]={load:t,shouldLoad:n,selector:o}}},{key:"registerElement",value:function(e){var t=e.node,n=e.id,r=e.type,o=e.trackOnceOnly;this.pendingElements[n]={type:r,target:t,trackOnceOnly:o}}},{key:"transferElement",value:function(e){this.scrolledElements[e]=this.pendingElements[e]}},{key:"testElements",value:function(e){var t=this;this.detectScrollDirection(),Object.keys(this.pendingElements).forEach(function(n){var r=t.pendingElements[n],o=r.target,i=r.type,a=r.trackOnceOnly,c=t.entryTypes[i];c.shouldLoad(o,t.scrollStatus.direction)&&(c.load({target:(0,u.default)(o,c.selector),type:i,pageData:e}),a||t.transferElement(n),delete t.pendingElements[n])})}},{key:"handleDirectionChange",value:function(){var e=this.scrolledElements;this.scrolledElements=this.removePendingElements(),Object.assign(this.pendingElements,e)}},{key:"detectScrollDirection",value:function(){var e=window.pageYOffset,t=void 0;(t=e>=this.scrollStatus.lastY?"down":"up")!==this.scrollStatus.direction&&this.handleDirectionChange(),this.scrollStatus.direction=t,this.scrollStatus.lastY=e}},{key:"removePendingElements",value:function(){var e=this,t={};return Object.keys(this.pendingElements).forEach(function(n){t[n]=e.pendingElements[n],delete e.pendingElements[n]}),t}}]),e}();t.default=s},function(e,t,n){var r=n(14),o=n(0),i="Expected a function";e.exports=function(e,t,n){var a=!0,u=!0;if("function"!=typeof e)throw new TypeError(i);return o(n)&&(a="leading"in n?!!n.leading:a,u="trailing"in n?!!n.trailing:u),r(e,t,{leading:a,maxWait:t,trailing:u})}},function(e,t,n){var r=n(0),o=n(15),i=n(18),a="Expected a function",u=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,f,d,p,v,y=0,h=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError(a);function m(t){var n=l,r=s;return l=s=void 0,y=t,d=e.apply(r,n)}function O(e){var n=e-v;return void 0===v||n>=t||n<0||g&&e-y>=f}function w(){var e,n,r=o();if(O(r))return j(r);p=setTimeout(w,(n=t-((e=r)-v),g?c(n,f-(e-y)):n))}function j(e){return p=void 0,b&&l?m(e):(l=s=void 0,d)}function _(){var e,n=o(),r=O(n);if(l=arguments,s=this,v=n,r){if(void 0===p)return y=e=v,p=setTimeout(w,t),h?m(e):d;if(g)return p=setTimeout(w,t),m(v)}return void 0===p&&(p=setTimeout(w,t)),d}return t=i(t)||0,r(n)&&(h=!!n.leading,f=(g="maxWait"in n)?u(i(n.maxWait)||0,t):f,b="trailing"in n?!!n.trailing:b),_.cancel=function(){void 0!==p&&clearTimeout(p),y=0,l=v=s=p=void 0},_.flush=function(){return void 0===p?d:j(o())},_}},function(e,t,n){var r=n(2);e.exports=function(){return r.Date.now()}},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(17))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){var r=n(0),o=n(19),i=NaN,a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return i;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):u.test(e)?i:+e}},function(e,t,n){var r=n(20),o=n(23),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||o(e)&&r(e)==i}},function(e,t,n){var r=n(3),o=n(21),i=n(22),a="[object Null]",u="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?u:a:c&&c in Object(e)?o(e):i(e)}},function(e,t,n){var r=n(3),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,u=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,u),n=e[u];try{e[u]=void 0;var r=!0}catch(e){}var o=a.call(e);return r&&(t?e[u]=n:delete e[u]),o}},function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e="",t=0;t<10;t+=1){var n=Math.floor(24*Math.random());e+=n%2==0?r[n]:n}return e};var r=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=void 0;return t=e.buffer?o(r(e.buffer)):o({top:0,bottom:0}),Object.assign({},{load:e.load,type:e.type,selector:e.selector,shouldLoad:t})};var r=function(e){return e.top?e.bottom?e:Object.assign({},e,{bottom:0}):Object.assign({},e,{top:0})},o=function(e){return function(t,n){var r=t.getBoundingClientRect(),o=e.top,i=e.bottom;return"down"===n&&r.top<=o||"up"===n&&r.bottom>=window.innerHeight+i}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,r.default)(a(t));return{node:e,data:(0,o.default)(e,n)}};var r=i(n(27)),o=i(n(28));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(e){return e.replace(/-/g," ")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,t){return 0===t?e.toLowerCase():e.toUpperCase().replace(/\s+/g,"")})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=Object.assign({},JSON.parse(JSON.stringify(e.dataset))),r=void 0;return Object.keys(n).forEach(function(e){e.indexOf(t)>-1&&(r=n[e])}),r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return function(n,o,i){var a=i.value;return r({},i,{value:function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];try{e({methodName:o,instance:this,eventName:t,args:r})}catch(e){throw new Error("trackJs: failed with the following error: "+e)}return a.apply(this,r)}})}}},function(e,t,n){"use strict";(0,n(4).trackDom)({click:function(e){var t=e.target,n=e.type;console.log("firing analytics for '"+n+"!'"),console.log("And here's the click target:\n",t)}})}])});