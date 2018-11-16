/**
 * skylark-utils-collection - The skylark collection utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){function e(t,n){if("."!==t[0])return t;var e=n.split("/"),r=t.split("/");e.pop();for(var i=0;i<r.length;i++)"."!=r[i]&&(".."==r[i]?e.pop():e.push(r[i]));return e.join("/")}var r=n.define,i=n.require,o="function"==typeof r&&r.amd,s=!o&&"undefined"!=typeof exports;if(!o&&!r){var a={};r=n.define=function(t,n,r){"function"==typeof r?(a[t]={factory:r,deps:n.map(function(n){return e(n,t)}),exports:null},i(t)):a[t]=r},i=n.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var e=a[t];if(!e.exports){var r=[];e.deps.forEach(function(t){r.push(i(t))}),e.exports=e.factory.apply(n,r)}return e.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(t(r,i),!o){var u=i("skylark-langx/skylark");s?module.exports=u:n.skylarkjs=u}}(function(t,n){t("skylark-langx/skylark",[],function(){var t={};return t}),t("skylark-utils-collection/collections",["skylark-langx/skylark"],function(t){return t.collections={}}),t("skylark-langx/types",[],function(){function t(t){return t&&t.constructor===Array}function n(t){return!h(t)&&!a(t)&&"number"==typeof t.length&&!s(t)}function e(t){return"boolean"==typeof t}function r(t){return"undefined"!=typeof t}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function o(t){var n;for(n in t)if(null!==t[n])return!1;return!0}function s(t){return"function"==p(t)}function a(t){return t&&t instanceof Node}function u(t){return"number"==typeof t}function c(t){return"object"==p(t)}function l(t){return c(t)&&!f(t)&&Object.getPrototypeOf(t)==Object.prototype}function h(t){return"string"==typeof t}function f(t){return t&&t==t.window}function g(t){if(t){var n=location.protocol+"//"+location.hostname;return location.port&&(n+=":"+location.port),t.startsWith(n)}}var p=function(){var t={};return"Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function(n){t["[object "+n+"]"]=n.toLowerCase()}),function(n){return null==n?String(n):t[toString.call(n)]||"object"}}();return{isArray:t,isArrayLike:n,isBoolean:e,isDefined:r,isDocument:i,isEmptyObject:o,isFunction:s,isHtmlNode:a,isNumber:u,isObject:c,isPlainObject:l,isString:h,isSameOrigin:g,isWindow:f,type:p}}),t("skylark-langx/objects",["./types"],function(t){function n(t,n){return function(e){var r=arguments.length;if(n&&(e=Object(e)),r<2||null==e)return e;for(var i=1;i<r;i++)for(var o=arguments[i],s=t(o),a=s.length,u=0;u<a;u++){var c=s[u];n&&void 0!==e[c]||(e[c]=o[c])}return e}}function e(t){if(!C(t))return[];var n=[];for(var e in t)n.push(e);return n}function r(t,n){var e,r,i,o,s;if(t)if(e=t.length,e===o){for(r in t)if(t.hasOwnProperty(r)&&(s=t[r],n.call(s,r,s)===!1))break}else for(i=0;i<e&&(s=t[i],n.call(s,i,s)!==!1);i++);return this}function i(t){var n,e=x.call(arguments,1);return"boolean"==typeof t&&(n=t,t=e.shift()),0==e.length&&(e=[t],t=this),e.forEach(function(e){h(t,e,n)}),t}function o(t){if(C(t))return[];var n=[];for(var e in t)s(t,e)&&n.push(e);return n}function s(t,n){if(!O(n))return null!=t&&k.call(t,n);for(var e=n.length,r=0;r<e;r++){var i=n[r];if(null==t||!k.call(t,i))return!1;t=t[i]}return!!e}function a(t,n){return m(t,n)}function u(t,n){var e=e(n),r=e.length;if(null==t)return!r;for(var i=Object(t),o=0;o<r;o++){var s=e[o];if(n[s]!==i[s]||!(s in i))return!1}return!0}function c(t,n,e,r){for(var i in n)r&&void 0!==t[i]||(e&&(j(n[i])||O(n[i]))?(j(n[i])&&!j(t[i])&&(t[i]={}),O(n[i])&&!O(t[i])&&(t[i]=[]),c(t[i],n[i],e,r)):void 0!==n[i]&&(t[i]=n[i]));return t}function l(t){var n=x.call(arguments,0),e=n.shift(),r=!1;return I(n[n.length-1])&&(r=n.pop()),{target:e,sources:n,deep:r}}function h(){var t=l.apply(this,arguments);return t.sources.forEach(function(n){c(t.target,n,t.deep,!1)}),t.target}function f(t,n){if(O(t)){var e=t.indexOf(n);e!=-1&&t.splice(e,1)}else if(j(t))for(var r in t)if(t[r]==n){delete t[r];break}return this}function g(t,n,e){O(n)||(n=[n]);var r=n.length;if(!r)return b(e)?e.call(t):e;for(var i=0;i<r;i++){var o=null==t?void 0:t[n[i]];void 0===o&&(o=e,i=r),t=b(o)?o.call(t):o}return t}function p(){var t=l.apply(this,arguments);return t.sources.forEach(function(n){c(t.target,n,t.deep,!0)}),t.target}function d(t){for(var n=_.keys(t),e=n.length,r=Array(e),i=0;i<e;i++)r[i]=t[n[i]];return r}function v(t,n){var e;if(void 0===t||null===t)e=t;else if(n&&t.clone)e=t.clone();else if(O(t)){e=[];for(var r=0;r<t.length;r++)e.push(v(t[r]))}else if(j(t)){e={};for(var i in t)e[i]=v(t[i])}else e=t;return e}var m,y,k=Object.prototype.hasOwnProperty,x=Array.prototype.slice,I=t.isBoolean,b=t.isFunction,C=t.isObject,j=t.isPlainObject,O=t.isArray,w="undefined"!=typeof Symbol?Symbol.prototype:null;return m=function(t,n,e,r){if(t===n)return 0!==t||1/t===1/n;if(null==t||null==n)return!1;if(t!==t)return n!==n;var i=typeof t;return("function"===i||"object"===i||"object"==typeof n)&&y(t,n,e,r)},y=function(t,n,e,r){var i=toString.call(t);if(i!==toString.call(n))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!==+t?+n!==+n:0===+t?1/+t===1/n:+t===+n;case"[object Date]":case"[object Boolean]":return+t===+n;case"[object Symbol]":return w.valueOf.call(t)===w.valueOf.call(n)}var o="[object Array]"===i;if(!o){if("object"!=typeof t||"object"!=typeof n)return!1;var s=t.constructor,a=n.constructor;if(s!==a&&!(b(s)&&s instanceof s&&b(a)&&a instanceof a)&&"constructor"in t&&"constructor"in n)return!1}e=e||[],r=r||[];for(var u=e.length;u--;)if(e[u]===t)return r[u]===n;if(e.push(t),r.push(n),o){if(u=t.length,u!==n.length)return!1;for(;u--;)if(!m(t[u],n[u],e,r))return!1}else{var c,l=Object.keys(t);if(u=l.length,Object.keys(n).length!==u)return!1;for(;u--;)if(c=l[u],void 0===n[c]||!m(t[c],n[c],e,r))return!1}return e.pop(),r.pop(),!0},{allKeys:e,clone:v,defaults:n(e,!0),each:r,extend:i,has:s,isEqual:a,isMatch:u,keys:o,mixin:h,removeItem:f,result:g,safeMixin:p,values:d}}),t("skylark-langx/arrays",["./types","./objects"],function(t,n){function e(t){return u.call(t,function(t){return null!=t})}function r(t){if(c(t)){for(var n=[],e=0;e<t.length;e++){var r=t[e];if(c(r))for(var i=0;i<r.length;i++)n.push(r[i]);else n.push(r)}return n}return t}function i(t,n){if(!n)return-1;var e;if(n.indexOf)return n.indexOf(t);for(e=n.length;e--;)if(n[e]===t)return e;return-1}function o(t,n,e){return c(t)?(e||[]).concat(Array.prototype.slice.call(t,n||0)):[t]}function s(t,n){var e,i,o,s=[];if(c(t))for(i=0;i<t.length;i++)e=n.call(t[i],t[i],i),null!=e&&s.push(e);else for(o in t)e=n.call(t[o],t[o],o),null!=e&&s.push(e);return r(s)}function a(t){return u.call(t,function(n,e){return t.indexOf(n)==e})}var u=Array.prototype.filter,c=t.isArrayLike;return{compact:e,first:function(t,n){return n?t.slice(0,n):t[0]},each:n.each,flatten:r,inArray:i,makeArray:o,map:s,uniq:a}}),t("skylark-langx/klass",["./arrays","./objects","./types"],function(t,n,e){var r=t.uniq,i=n.has,o=n.mixin,s=e.isArray,a=e.isDefined,u=function(){function t(t,n,e){var r=t.prototype,i=t.superclass.prototype,o=e&&e.noOverrided;for(var s in n)if("constructor"!==s){var a=n[s];"function"==typeof n[s]?r[s]=a._constructor||o||"function"!=typeof i[s]?a:function(t,n,e){return function(){var t=this.overrided;this.overrided=e;var r=n.apply(this,arguments);return this.overrided=t,r}}(s,a,i[s]):"object"==typeof a&&null!==a&&a.get?Object.defineProperty(r,s,a):r[s]=a}return t}function n(t,n){var e=[];return n.forEach(function(t){if(i(t,"__mixins__"))throw new Error("nested mixins");for(var n=[];t;)n.unshift(t),t=t.superclass;e=e.concat(n)}),e=r(e),e=e.filter(function(n){for(var e=t;e;){if(n===e)return!1;if(i(e,"__mixins__"))for(var r=e.__mixins__,o=0;o<r.length;o++)if(r[o]===n)return!1;e=e.superclass}return!0}),e.length>0&&e}function e(t,n){for(var e=t,r=0;r<n.length;r++){var i=new Function;i.prototype=Object.create(e.prototype),i.__proto__=e,i.superclass=null,o(i.prototype,n[r].prototype),i.prototype.__mixin__=n[r],e=i}return e}function u(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function c(r,i,o,l){s(i)&&(l=o,o=i,i=null),i=i||Object,a(o)&&!s(o)&&(l=o,o=!1);var h=i;o&&(o=n(h,o)),o&&(h=e(h,o));var f=r.klassName||"",g=new Function("return function "+f+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return g.prototype=Object.create(h.prototype),g.prototype.constructor=g,g.superclass=i,g.__proto__=h,g._constructor||(g._constructor=u),o&&(g.__mixins__=o),g.partial||(g.partial=function(n,e){return t(this,n,e)}),g.inherit||(g.inherit=function(t,n,e){return c(t,this,n,e)}),g.partial(r,l),g}},c=u();return c}),t("skylark-langx/Evented",["./klass","./objects","./types"],function(t,n,e){var r=Array.prototype.slice,i=e.isDefined,o=e.isPlainObject,s=e.isFunction,a=e.isString,u=e.isEmptyObject,c=n.mixin,l=t({on:function(t,n,e,r,i,u){var c=this,l=this._hub||(this._hub={});return o(t)?(i=r,each(t,function(t,r){c.on(t,n,e,r,i,u)}),this):(a(n)||s(r)||(i=r,r=e,e=n,n=void 0),s(e)&&(i=r,r=e,e=null),a(t)&&(t=t.split(/\s/)),t.forEach(function(t){(l[t]||(l[t]=[])).push({fn:r,selector:n,data:e,ctx:i,one:u})}),this)},one:function(t,n,e,r,i){return this.on(t,n,e,r,i,1)},trigger:function(t){if(!this._hub)return this;var n=this;a(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var e=r.call(arguments,1);return e=i(e)?[t].concat(e):[t],[t.type||t.name,"all"].forEach(function(r){var i=n._hub[r];if(i){for(var o=i.length,s=!1,a=0;a<o;a++){var u=i[a];t.data?u.data&&(t.data=c({},u.data,t.data)):t.data=u.data||null,u.fn.apply(u.ctx,e),u.one&&(i[a]=null,s=!0)}s&&(n._hub[r]=compact(i))}}),this},listened:function(t){var n=(this._hub||(this._events={}))[t]||[];return n.length>0},listenTo:function(t,n,e,r){if(!t)return this;a(e)&&(e=this[e]),r?t.one(n,e,this):t.on(n,e,this);for(var i,o=this._listeningTo||(this._listeningTo=[]),s=0;s<o.length;s++)if(o[s].obj==t){i=o[s];break}i||o.push(i={obj:t,events:{}});var u=i.events,c=u[n]=u[n]||[];return c.indexOf(e)==-1&&c.push(e),this},listenToOnce:function(t,n,e){return this.listenTo(t,n,e,1)},off:function(t,n){var e=this._hub||(this._hub={});return a(t)&&(t=t.split(/\s/)),t.forEach(function(t){var r=e[t],i=[];if(r&&n)for(var o=0,s=r.length;o<s;o++)r[o].fn!==n&&r[o].fn._!==n&&i.push(r[o]);i.length?e[t]=i:delete e[t]}),this},unlistenTo:function(t,n,e){var r=this._listeningTo;if(!r)return this;for(var i=0;i<r.length;i++){var o=r[i];if(!t||t==o.obj){var s=o.events;for(var a in s)if(!n||n==a){for(var c=s[a],l=0;l<c.length;l++)e&&e!=c[i]||(o.obj.off(a,c[i],this),c[i]=null);c=s[a]=compact(c),u(c)&&(s[a]=null)}u(s)&&(r[i]=null)}}return r=this._listeningTo=compact(r),u(r)&&(this._listeningTo=null),this}});return l}),t("skylark-utils-collection/Collection",["skylark-langx/Evented","./collections"],function(t,n){var e=n.Collection=Evented.inherit({klassName:"Collection",_clear:function(){throw new Error("Unimplemented API")},clear:function(){return this._clear(),this.trigger("changed:clear"),this},count:function(){for(var t=0,n=this.iterator();!n.hasNext();)t++;return t},forEach:function(t,n){for(var e=this.iterator();!e.hasNext();){var r=e.next();t.call(n||r,r)}return this},iterator:function(){throw new Error("Unimplemented API")},toArray:function(){for(var t=[],n=this.iterator();!n.hasNext();)t.push(n.next());return t}});return e}),t("skylark-utils-collection/List",["skylark-langx/arrays","./collections","./Collection"],function(t,n,e){var r=n.List=e.inherit({klassName:"List",_getInnerItems:function(){return this._items},_clear:function(){this._items=[]},contains:function(t){var n=this._getInnerItems();return n.indexOf(t)>=0},count:function(){var t=this._getInnerItems();return t.length},getAll:function(){return this._getInnerItems()},get:function(t){var n=this._getInnerItems();if(t<0||t>=n.length)throw new Error("Not exist:"+t);return n[t]},getRange:function(t,n){for(var e=this._getInnerItems(),r=[],i=Math.max(t,0);i<n&&!(i>=e.length);i++)r.push(e[i]);return r},indexOf:function(t){var n=this._getInnerItems();return n.indexOf(t)},iterator:function(){var t=0;return{hasNext:function(){return t<this._items.length},next:function(){return this._items[t++]}}},init:function(n){n?this._items=t.makeArray(n):this._items=[]}});return r}),t("skylark-utils-collection/Map",["./collections","./Collection"],function(t,n){var e=t.Map=n.inherit({klassName:"Map",_getInnerItems:function(){return this._items},_clear:function(){this._items=[]},_findKeyByRegExp:function(t,n){var e=this._getInnerItems();return e.filter(function(e){return!!e.match(t)&&(n&&n(e),!0)})},get:function(t,n){if("string"!=typeof t)throw"hash key is not string!";if(!n&&!this.contains(t))throw"hash key is not  existed";var e=this._getInnerItems();return e[t]},iterator:function(){var t=0;return{hasNext:function(){return t<this._items.length},next:function(){var n=this._items[t++];return[this._items[n],n]}}},set:function(t,n){if("string"!=typeof t)throw"hash key is not string!";if(!this.contains(t))throw"hash key is not existed";var e=this._getInnerItems();e.indexOf(t)==-1&&e.push(t);var r=e[key];return r!==n&&(e[key]=n,this.trigger("changed:"+t,{data:{name:t,value:n,oldValue:r}})),this},remove:function(t){if("string"!=typeof t)throw"hash key is not string!";var n=this._getInnerItems(),e=n.indexOf(t);e>=0&&(delete n[t],delete n[e])},findByRegExp:function(t,n){var e=[],r=this;return this._findKeyByRegExp(t,function(t){var i=r.get(t);n&&n(i),e.push(i)}),e},removeByRegExp:function(t){var n=this;this._findKeyByRegExp(t,function(t){n.remove(t)})},toPlain:function(){for(var t=this._getInnerItems(),n=0;n<t.length;n++){var e=t[n];plain[e]=t[e]}return plain},toString:function(t){var n=this._getInnerItems();return n.join(t||",")},init:function(t){var n=this._items=[];for(var e in t)n.push(e),n[e]=t[e]}});return e}),t("skylark-utils-collection/ArrayList",["./collections","./List"],function(t,n){var e=t.ArrayList=n.inherit({klassName:"ArrayList",add:function(t){var n=this._getInnerItems();return n.push(t),this.trigger("changed:add",{data:[{item:t,index:n.length-1,isSingle:!0}]}),this},addRange:function(t){for(var n=this._getInnerItems(),e=t.toArray?t.toArray():t,r=[],i=0;i<e.length;i++)n.push(e[i]),r.push({item:e[i],index:n.length-1});return this.trigger("changed:add",{data:r}),this},clone:function(){return new e({items:this._.items})},insert:function(t,n){var e=this._getInnerItems();if(t<0||t>e.length)throw new Error("invalid parameter!");return e.splice(t,0,n),this.trigger("changed",{data:[{item:n,index:t}]}),this},insertRange:function(t,n){var e=this._getInnerItems(),r=[];if(t<0||t>=e.length)throw new Error("invalid parameter!");for(var i=n.toArray(),o=0;o<i.length-1;o++)e.splice(t+o,0,i[o]),r.push({item:i[o],index:t+o});return this.trigger("changed:insert",{data:r}),this},removeFirstMatch:function(t){for(var n=this._getInnerItems(),e=0,r=n.length;e<r;e++)if(n[e]===t){this.removeAt(e);break}return this},remove:function(t){for(var n=this._getInnerItems(),e=[],r=0,i=n.length;r<i;r++)n[r]===t&&(Array.removeAt(n,r),e.push({item:t,index:r}));return this.trigger("changed:remove",{data:e}),this},removeAt:function(t){var n=this._getInnerItems(),e=n.splice(t,1)[0];return this.trigger("changed:remove",{data:[{item:e,index:t}]}),this},removeRange:function(t,n){for(var e=this._getInnerItems(),r=[],i=t;i<t+n;i++)r.push({item:e[i],index:i});return e.splice(t,n),this.trigger("changed:remove",{data:{removed:r}}),this},setByIndex:function(t,n){var e=this._getInnerItems();if(t<0||t>=e.length)throw new Error(""+i);var r=e[t];return e[i]=n,this.trigger("changed:update",{data:[{item:n,index:t,oldItem:r}]}),this},reset:function(t){var n=this._getInnerItems();n.length=0;for(var e=0;e<t.length;e++)n.push(t[e]);return this.trigger("changed:reset"),this},reverse:function(){var t=this._getInnerItems();return t.reverse(),this.trigger("changed:reverse"),this},sort:function(t){var n=this._getInnerItems();return t?n.sort(t):n.sort(),this.trigger("changed:sort"),this}});return e}),t("skylark-langx/funcs",["./objects","./types"],function(t,n){function e(t){return requestAnimationFrame?requestAnimationFrame(t):setTimeoutout(t),this}function r(){}function i(t,n){var e=2 in arguments&&slice.call(arguments,2);if(a(t)){var r=function(){return t.apply(n,e?e.concat(slice.call(arguments)):arguments)};return r}if(u(n))return e?(e.unshift(t[n],t),i.apply(null,e)):i(t[n],t);throw new TypeError("expected function")}function o(t,n){var e;return function(){var r=this,i=arguments,o=function(){e=null,t.apply(r,i)};e&&clearTimeout(e),e=setTimeout(o,n)}}var s=t.mixin,a=n.isFunction,u=n.isString,c=function(){function t(){}return function(n,e){t.prototype=n;var r=new t;return t.prototype=null,e&&s(r,e),r}}();return{debounce:o,delegate:c,defer:e,noop:r,proxy:i,returnTrue:function(){return!0},returnFalse:function(){return!1}}}),t("skylark-langx/Deferred",["./arrays","./funcs","./objects"],function(t,n,e){"use strict";function r(t,n){var e={state:function(){return n.isResolved()?"resolved":n.isRejected()?"rejected":"pending"},then:function(t,n,r){return r&&this.progress(r),c(Promise.prototype.then.call(this,t&&function(n){return n&&void 0!==n.__ctx__?t.apply(n.__ctx__,n):t(n)},n&&function(t){return t&&void 0!==t.__ctx__?n.apply(t.__ctx__,t):n(t)}),e)},progress:function(t){return n[i].push(t),this}};return e.pipe=e.then,c(t,e)}var i=Symbol?Symbol():"__pglisteners",o=Array.prototype.slice,s=n.proxy,a=t.makeArray,u=e.result,c=e.mixin;c(Promise.prototype,{always:function(t){return this.then(t,t),this},done:function(t){return this.then(t),this},fail:function(t){return this["catch"](t),this}});var l=function(){var t=this,n=this.promise=new Promise(function(n,e){t._resolve=n,t._reject=e});r(n,t),this[i]=[]};return l.prototype.resolve=function(t){var n=o.call(arguments);return this.resolveWith(null,n)},l.prototype.resolveWith=function(t,n){return n=n?a(n):[],n.__ctx__=t,this._resolve(n),this._resolved=!0,this},l.prototype.progress=function(t){try{return this[i].forEach(function(n){return n(t)})}catch(n){this.reject(n)}return this},l.prototype.reject=function(t){var n=o.call(arguments);return this.rejectWith(null,n)},l.prototype.rejectWith=function(t,n){return n=n?a(n):[],n.__ctx__=t,this._reject(n),this._rejected=!0,this},l.prototype.isResolved=function(){return!!this._resolved},l.prototype.isRejected=function(){return!!this._rejected},l.prototype.then=function(t,n,e){var r=u(this,"promise");return r.then(t,n,e)},l.prototype.done=l.prototype.then,l.all=function(t){return r(Promise.all(t))},l.first=function(t){return r(Promise.race(t))},l.when=function(t,n,e,r){var i=t&&"function"==typeof t.then,o=i&&t instanceof Promise;if(!i)return arguments.length>1?n?n(t):t:(new l).resolve(t);if(!o){var a=new l(t.cancel);t.then(s(a.resolve,a),s(a.reject,a),a.progress),t=a.promise}return n||e||r?t.then(n,e,r):t},l.reject=function(t){var n=new l;return n.reject(t),n.promise},l.resolve=function(t){var n=new l;return n.resolve.apply(n,arguments),n.promise},l.immediate=l.resolve,l}),t("skylark-utils-collection/PagedList",["skylark-langx/types","skylark-langx/Deferred","./collections","./Collection"],function(t,n,e,r){var i=e.PagedList=r.inherit({klassName:"PagedList",_options:null,_cachePageData:function(t,n){var e=this._pages,r=this._count,i=(t-1)*this.pageSize+n.length;e[t]=n,this.trigger("changed:cache",{data:{pageNo:t,pageItems:n}}),i>OldLen&&(this._count=i,this.trigger("changed:count",{data:{count:i,oldCount:r}}))},_getPageData:function(t){for(var n=this._getInnerItems(),e=[],r=this.pageSize,i=(t-1)*r,o=n.length,s=0;s<r&&i<o;s++,i++)n[i]&&e.push(n[i]);return e},_laodPageData:function(t){var e=this._options.loadData;return pageSize=this.pageSize,from=(t-1)*pageSize,deferred=new n,self=this,e(from,pageSize).then(function(n){self._cachePageData(t,n),deferred.resolve(n)},function(t){deferred.reject(t)}),deferred.promise},pageSize:{get:function(){return this._pageSize}},totalCount:{get:function(){return this._options&&(this._endless._options||1/0)}},totalPageCount:{get:function(){return Math.ceil(this.totalCount/this.pageSize)}},count:{get:function(){return this._count}},pageCount:{get:function(){return Math.ceil(this.count/this.pageSize)}},hasMore:function(){return this.count<this.totalCount},loadMore:function(){return this._laodPageData(this.pageCount)},getPage:function(t,n){return this._getPageData(t)},fetchPage:function(t){var e=this._getPageData(t);return e?n.when(items):this._laodPageData(t)},init:function(t,n){this._pages={},this._count=0,this._options=n}});return i}),t("skylark-utils-collection/Queue",["./collections","./List"],function(t,n){var e=t.Queue=n.inherit({klassName:"Queue",clone:function(t){var n=this._getInnerItems();return new e({items:n})},dequeue:function(){var t=this._getInnerItems(),n=t.shift();return this.trigger("changed:dequeue",{data:n}),n},enqueue:function(t){var n=this._getInnerItems();return n.push(t),this.trigger("changed:enqueue",{data:t}),this}});return e}),t("skylark-utils-collection/Set",["skylark-langx/arrays","./collections","./Collection"],function(t,n,e){var r=n.Set=e.inherit({klassName:"Set",clone:function(){return new r({items:this._.items})},difference:function(t){for(var n=[],e=this._getInnerItems(),i=0;i<e.length;i++){var o=e[i];t.contains(o)||n.push(o)}return new r(n)},exclude:function(t){var n=this._.items,e=n.indexOf(t);e>=0&&(n.splice(e,1),this.trigger("changed:exclude",{data:[t]}))},include:function(t){var n=this._.items;n.indexOf(t)<0&&(n.push(t),this.trigger("changed:include",{data:[t]}))},iterator:function(){var t=0;return{hasNext:function(){return t<this._items.length},next:function(){return this._items[t++]}}},intersection:function(t){for(var n=[],e=this._getInnerItems(),i=0;i<e.length;i++){var o=e[i];t.contains(o)&&n.push(o)}return new r(n)},isSubSet:function(t){for(var n=this._getInnerItems(),e=0;e<n.length;e++){var r=n[e];if(!t.contains(r))return!1}return!0},isSuperSet:function(t){return t.isSubSet(this)},union:function(t,n){for(var e=n.clone(),r=this._getInnerItems(),i=0;i<r.length;i++)e.include(r[i]);return e},init:function(n){n?this._items=t.makeArray(n):this._items=[]}});return r}),t("skylark-utils-collection/Stack",["./collections","./List"],function(t,n){var e=t.Stack=n.inhert({klassName:"Stack",clone:function(){var t=this._getInnerItems();return new e(t)},peek:function(){var t=this._getInnerItems(),n=t.length-1;return n>-1?t[n]:null},pop:function(){var t=this._getInnerItems(),n=null;return t.length>0&&(n=t.pop(),this.trigger("changed:pop",{data:n})),n},push:function(t){var n=this._getInnerItems();return n.push(t),this.trigger("changed:push",{data:t}),this}});return e}),t("skylark-utils-collection/TreeItem",["skylark-langx/arrays","skylark-langx/Evented","./collections"],function(t,n,e){var r=e.TreeItem=n.inherit({klassName:"TreeItem",_internalChildren:function(n){var e=this._.children;return n?t.makeArray(e):e},_checkPublicOperation:function(t){return!0},_internalSetParent:function(t){this._.parent=t},_internalAddChild:function(t,n){var e=this._internalCreateItem(t),r=this._internalChildren();return r&&(void 0===n?r.push(e):r.insert(n,e)),e._internalSetParent(this),e},_internalRemoveChildAt:function(t){var n=this._internalChildren(),e=n.splice(t,1);e._internalSetParent(null)},_internalClearChildren:function(){var t=this._internalChildren();if(t){for(var n=0;n<t.length;n++)t[n]._internalSetParent(null);t.length=0}},_internalCreateItem:function(t){var n=this.root,e=n?n.createItem(t):t;return e},name:{get:function(){return this._.name}},data:{get:function(){return this._.data}},children:{type:Array,getter:function(){return this._internalChildren(!0)}},firstChild:{get:function(){var t=this._internalChildren();return t&&t[0]}},fullPath:{get:function(){for(var t=this.name,n=this.parent;n;)t=n.name+"/"+t,n=n.parent;return t}},lastChild:{get:function(){var t=this._internalChildren();return t&&t[t.length-1]}},lastDescendants:{get:function(){for(var t=this.lastChild,n=t.lastChild;n;)t=n,n=t.lastChild;return t}},level:{get:function(){for(var t=0,n=this.parent;n;)t++,n=n.parent;return t}},next:{get:function(){var t=this.firstChild;if(!t)for(var n=this,e=n.parent;e&&!(t=e.getNextChild(n));)n=e,e=n.parent;return t}},nextSibling:{get:function(){var t=this.parent;return t&&t.getNextChild(this)}},parent:{get:function(){return this._.parent}},prev:{get:function(){var t,n=this.prevSibling;return n?(t=n.lastDescendants,t||(t=n)):t=this.parent,t}},prevSibling:{get:function(){var t=this.parent;return t&&t.getPrevChild(this)}},root:{get:function(){for(var t=this;t.parent;)t=t.parent;return t}},prependChild:function(t){return this.addChild(t,0)},addChild:function(t,n){this._checkPublicOperation("addChild");var e=this._internalAddChild(t,n);return this.trigger("changed:addChild",{data:[{item:e,index:n,isSingle:!0}]}),this},appendChild:function(t){return this.addChild(this)},canHaveChildren:function(){var t=this._internalChildren();return void 0!==t},childrenCount:function(){var t=this._internalChildren();return t?t.length:0},clearChildren:function(){return this._checkPublicOperation("clearChildren"),this._internalClearChildren(),this.trigger("changed:clearChildren"),this},getChildAt:function(t){var n=this._internalChildren();return n[t]},getChildren:function(){return this.children},getPrevChild:function(t){var n=this._internalChildren(),e=n.indexOf(t);return e>0?n[e-1]:null},getNextChild:function(t){var n=this._internalChildren(),e=n.indexOf(t);return e>=0&&e<n.length-1?n[e+1]:null},hasChildren:function(){var t=this._internalChildren();return t&&t.length>0},indexOfChild:function(t){var n=this._internalChildren();return n.indexOf(t)},insertChild:function(t,n){return this.addChild(item,n)},parents:function(){for(var t=[],n=this.parent;n;)t.push(n),n=n.parent;return t},remove:function(){var t=this.parent;t&&t.removeChild(this)},removeChild:function(t){var n=this.indexOfChild(t);if(n>-1)return this.removeChildAt(n)},removeChildAt:function(t){this._checkPublicOperation("removeChild"),this._internalRemoveChildAt(t),this.trigger("changed:removeChild",{data:[{item:item,index:t}]})},init:function(t){var n=this._={};n.data=t,n.name=t.name,n.children=[]}});return r}),t("skylark-utils-collection/Tree",["./collections","./Collection","./ArrayList","./TreeItem"],function(t,n,e,r){var i=t.Tree=n.inherit({createItem:function(t){return new i.TreeItem(t)},items:{get:function(){return this.toArray()}},iterator:function(){var t=this.firstItem();return{hasNext:function(){return t},next:function(){if(t){var n=t;return t=n.next,n}}}},count:function(){var t=0;return this.forEach(function(n){t+=1}),t},firstItem:function(){var t=this._.children;return t&&t.length?t[0]:null},lastItem:function(){var t=function(n,e){var r=n.children;return r&&r.length?t(r[r.length-1],!1):e?null:n};return t(item,!0)},init:function(){this._.children=[]}});return i.TreeItem=r,i}),t("skylark-utils-collection/main",["./collections","./Collection","./List","./Map","./ArrayList","./PagedList","./Queue","./Set","./Stack","./Tree","./TreeItem"],function(t){return t}),t("skylark-utils-collection",["skylark-utils-collection/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-utils-collection-all.js.map
