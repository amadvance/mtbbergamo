/* @preserve
 * Leaflet 1.3.4, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++ei,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?ii(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}function _(t,i){return t.replace(ni,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-ri));return ri=i+e,window.setTimeout(t,e)}function f(t,i,n){if(!n||ai!==m)return ai.call(window,e(t,i));t.call(i)}function g(t){t&&hi.call(window,t)}function v(){}function y(t){if("undefined"!=typeof L&&L&&L.Mixin){t=oi(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:oi(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:oi(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function S(t,i,e,n){if(oi(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function Z(t,i,e,n){return new S(t,i,e,n)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?Ji?"z":"x":""}return h||"M0 0"}function A(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function B(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function I(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(te,n,!1):"touchmove"===i?t.removeEventListener(ie,n,!1):"touchend"===i&&(t.removeEventListener(ee,n,!1),t.removeEventListener(ne,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(oe.indexOf(t.target.tagName)<0))return;Pt(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(te,o,!1),re||(document.documentElement.addEventListener(te,R,!0),document.documentElement.addEventListener(ie,N,!0),document.documentElement.addEventListener(ee,D,!0),document.documentElement.addEventListener(ne,D,!0),re=!0)}function R(t){se[t.pointerId]=t,ae++}function N(t){se[t.pointerId]&&(se[t.pointerId]=t)}function D(t){delete se[t.pointerId],ae--}function j(t,i){t.touches=[];for(var e in se)t.touches.push(se[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(ie,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ee,n,!1),t.addEventListener(ne,n,!1)}function F(t,i,e){function n(t){var i;if(Vi){if(!bi||"mouse"===t.pointerType)return;i=ae}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(Vi){if(!bi||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[le+he+e]=n,t[le+ue+e]=o,t[le+"dblclick"+e]=i,t.addEventListener(he,n,!1),t.addEventListener(ue,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[le+he+i],n=t[le+ue+i],o=t[le+"dblclick"+i];return t.removeEventListener(he,e,!1),t.removeEventListener(ue,n,!1),bi||t.removeEventListener("dblclick",o,!1),this}function V(t){return"string"==typeof t?document.getElementById(t):t}function q(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function G(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function K(t){var i=t.parentNode;i&&i.removeChild(t)}function Y(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function X(t){var i=t.parentNode;i.lastChild!==t&&i.appendChild(t)}function J(t){var i=t.parentNode;i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function $(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=et(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function Q(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!$(t,i)){var s=et(t);it(t,(s?s+" ":"")+i)}}function tt(t,i){void 0!==t.classList?t.classList.remove(i):it(t,h((" "+et(t)+" ").replace(" "+i+" "," ")))}function it(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function et(t){return void 0===t.className.baseVal?t.className:t.className.baseVal}function nt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&ot(t,i)}function ot(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function st(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function rt(t,i,e){var n=i||new x(0,0);t.style[ce]=(Ri?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function at(t,i){t._leaflet_pos=i,ji?rt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function ht(t){return t._leaflet_pos||new x(0,0)}function ut(){mt(window,"dragstart",Pt)}function lt(){ft(window,"dragstart",Pt)}function ct(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(_t(),me=t,fe=t.style.outline,t.style.outline="none",mt(window,"keydown",_t))}function _t(){me&&(me.style.outline=fe,me=void 0,fe=void 0,ft(window,"keydown",_t))}function dt(t){do{t=t.parentNode}while(!(t.offsetWidth&&t.offsetHeight||t===document.body));return t}function pt(t){var i=t.getBoundingClientRect();return{x:i.width/t.offsetWidth||1,y:i.height/t.offsetHeight||1,boundingClientRect:i}}function mt(t,i,e,n){if("object"==typeof i)for(var o in i)gt(t,o,i[o],e);else for(var s=0,r=(i=u(i)).length;s<r;s++)gt(t,i[s],e,n);return this}function ft(t,i,e,n){if("object"==typeof i)for(var o in i)vt(t,o,i[o],e);else if(i)for(var s=0,r=(i=u(i)).length;s<r;s++)vt(t,i[s],e,n);else{for(var a in t[ye])vt(t,a,t[ye][a]);delete t[ye]}return this}function gt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[ye]&&t[ye][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;Vi&&0===i.indexOf("touch")?B(t,i,r,s):!qi||"dblclick"!==i||!F||Vi&&Ei?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,Ct(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&zi&&(r=function(t){St(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[ye]=t[ye]||{},t[ye][s]=r}function vt(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[ye]&&t[ye][s];if(!r)return this;Vi&&0===i.indexOf("touch")?I(t,i,s):!qi||"dblclick"!==i||!U||Vi&&Ei?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r):U(t,s),t[ye][s]=null}function yt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,Mt(t),this}function xt(t){return gt(t,"mousewheel",yt),this}function wt(t){return mt(t,"mousedown touchstart dblclick",yt),gt(t,"click",zt),this}function Pt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Lt(t){return Pt(t),yt(t),this}function bt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=pt(i),n=e.boundingClientRect;return new x((t.clientX-n.left)/e.x-i.clientLeft,(t.clientY-n.top)/e.y-i.clientTop)}function Tt(t){return bi?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/xe:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function zt(t){we[t.type]=!0}function Mt(t){var i=we[t.type];return we[t.type]=!1,i}function Ct(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function St(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=ge&&e-ge;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Lt(t):(ge=e,i(t))}function Zt(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=Bt(t,e),t=kt(t,e)}function Et(t,i,e){return Math.sqrt(Dt(t,i,e,!0))}function kt(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,At(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}function At(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)(a=Dt(t[r],t[n],t[o],!0))>h&&(s=r,h=a);h>e&&(i[s]=1,At(t,i,e,n,s),At(t,i,e,s,o))}function Bt(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Nt(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function It(t,i,e,n,o){var s,r,a,h=n?ke:Rt(t,e),u=Rt(i,e);for(ke=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=Rt(r=Ot(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function Ot(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Rt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Nt(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Dt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&((o=((t.x-s)*a+(t.y-r)*h)/u)>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function jt(t){return!oi(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Wt(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),jt(t)}function Ht(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Rt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)):(h._code&l&&((c=Ot(h,a,l,i,e))._code=Rt(c,i),n.push(c)),n.push(a));t=n}return t}function Ft(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ut;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new $e(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new $e(e));return new Ke(h);case"LineString":case"MultiLineString":return n=Vt(a,"LineString"===r.type?0:1,l),new nn(n,i);case"Polygon":case"MultiPolygon":return n=Vt(a,"Polygon"===r.type?1:2,l),new on(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Ft({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new Ke(h);default:throw new Error("Invalid GeoJSON object.")}}function Ut(t){return new M(t[1],t[0],t[2])}function Vt(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Vt(t[s],i-1,e):(e||Ut)(t[s]),o.push(n);return o}function qt(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function Gt(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Gt(t[s],i-1,e,n):qt(t[s],n));return!i&&e&&o.push(o[0]),o}function Kt(t,e){return t.feature?i({},t.feature,{geometry:e}):Yt(e)}function Yt(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function Xt(t,i){return new sn(t,i)}function Jt(t,i){return new mn(t,i)}function $t(t){return Xi?new vn(t):null}function Qt(t){return Ji||$i?new Pn(t):null}var ti=Object.freeze;Object.freeze=function(t){return t};var ii=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),ei=0,ni=/\{ *([\w_-]+) *\}/g,oi=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},si="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",ri=0,ai=window.requestAnimationFrame||p("RequestAnimationFrame")||m,hi=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},ui=(Object.freeze||Object)({freeze:ti,extend:i,create:ii,bind:e,lastId:ei,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:oi,indexOf:d,emptyImageUrl:si,requestFn:ai,cancelFn:hi,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=ii(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(ii(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var li={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=r;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};li.addEventListener=li.on,li.removeEventListener=li.clearAllEventListeners=li.off,li.addOneTimeEventListener=li.once,li.fireEvent=li.fire,li.hasEventListeners=li.listens;var ci=v.extend(li),_i=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=_i(this.x),this.y=_i(this.y),this},distanceTo:function(t){var i=(t=w(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=w(t)).x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof x?w(t):b(t))instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){return!!t&&(t=C(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return pi.distance(this,C(t))},wrap:function(){return pi.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var di={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new P(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng;return new M(this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new T(new M(s.lat-n,s.lng-o),new M(r.lat-n,r.lng-o))}},pi=i({},di,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),mi={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};S.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var fi,gi,vi,yi=i({},pi,{code:"EPSG:3857",projection:mi,transformation:function(){var t=.5/(Math.PI*mi.R);return Z(t,.5,-t,.5)}()}),xi=i({},yi,{code:"EPSG:900913"}),wi=document.documentElement.style,Pi="ActiveXObject"in window,Li=Pi&&!document.addEventListener,bi="msLaunchUri"in navigator&&!("documentMode"in document),Ti=A("webkit"),zi=A("android"),Mi=A("android 2")||A("android 3"),Ci=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Si=zi&&A("Google")&&Ci<537&&!("AudioNode"in window),Zi=!!window.opera,Ei=A("chrome"),ki=A("gecko")&&!Ti&&!Zi&&!Pi,Ai=!Ei&&A("safari"),Bi=A("phantom"),Ii="OTransition"in wi,Oi=0===navigator.platform.indexOf("Win"),Ri=Pi&&"transition"in wi,Ni="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Mi,Di="MozPerspective"in wi,ji=!window.L_DISABLE_3D&&(Ri||Ni||Di)&&!Ii&&!Bi,Wi="undefined"!=typeof orientation||A("mobile"),Hi=Wi&&Ti,Fi=Wi&&Ni,Ui=!window.PointerEvent&&window.MSPointerEvent,Vi=!(!window.PointerEvent&&!Ui),qi=!window.L_NO_TOUCH&&(Vi||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),Gi=Wi&&Zi,Ki=Wi&&ki,Yi=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Xi=!!document.createElement("canvas").getContext,Ji=!(!document.createElementNS||!E("svg").createSVGRect),$i=!Ji&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),Qi=(Object.freeze||Object)({ie:Pi,ielt9:Li,edge:bi,webkit:Ti,android:zi,android23:Mi,androidStock:Si,opera:Zi,chrome:Ei,gecko:ki,safari:Ai,phantom:Bi,opera12:Ii,win:Oi,ie3d:Ri,webkit3d:Ni,gecko3d:Di,any3d:ji,mobile:Wi,mobileWebkit:Hi,mobileWebkit3d:Fi,msPointer:Ui,pointer:Vi,touch:qi,mobileOpera:Gi,mobileGecko:Ki,retina:Yi,canvas:Xi,svg:Ji,vml:$i}),te=Ui?"MSPointerDown":"pointerdown",ie=Ui?"MSPointerMove":"pointermove",ee=Ui?"MSPointerUp":"pointerup",ne=Ui?"MSPointerCancel":"pointercancel",oe=["INPUT","SELECT","OPTION"],se={},re=!1,ae=0,he=Ui?"MSPointerDown":Vi?"pointerdown":"touchstart",ue=Ui?"MSPointerUp":Vi?"pointerup":"touchend",le="_leaflet_",ce=st(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),_e=st(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),de="webkitTransition"===_e||"OTransition"===_e?_e+"End":"transitionend";if("onselectstart"in document)fi=function(){mt(window,"selectstart",Pt)},gi=function(){ft(window,"selectstart",Pt)};else{var pe=st(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);fi=function(){if(pe){var t=document.documentElement.style;vi=t[pe],t[pe]="none"}},gi=function(){pe&&(document.documentElement.style[pe]=vi,vi=void 0)}}var me,fe,ge,ve=(Object.freeze||Object)({TRANSFORM:ce,TRANSITION:_e,TRANSITION_END:de,get:V,getStyle:q,create:G,remove:K,empty:Y,toFront:X,toBack:J,hasClass:$,addClass:Q,removeClass:tt,setClass:it,getClass:et,setOpacity:nt,testProp:st,setTransform:rt,setPosition:at,getPosition:ht,disableTextSelection:fi,enableTextSelection:gi,disableImageDrag:ut,enableImageDrag:lt,preventOutline:ct,restoreOutline:_t,getSizedParentNode:dt,getScale:pt}),ye="_leaflet_events",xe=Oi&&Ei?2*window.devicePixelRatio:ki?window.devicePixelRatio:1,we={},Pe=(Object.freeze||Object)({on:mt,off:ft,stopPropagation:yt,disableScrollPropagation:xt,disableClickPropagation:wt,preventDefault:Pt,stop:Lt,getMousePosition:bt,getWheelDelta:Tt,fakeStop:zt,skipped:Mt,isExternalTarget:Ct,addListener:mt,removeListener:ft}),Le=ci.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=ht(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),at(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),be=ci.extend({options:{crs:yi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=_e&&ji&&!Gi&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),mt(this._proxy,de,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(ji?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof x?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=z(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Le,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){Q(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=(g*g-m*m+(t?-1:1)*x*x*v*v)/(2*(t?g:m)*x*v),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-P)/b,n=u(e)*L;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(!1===(e=e||{}).animate||!ji)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),P=Date.now(),L=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*L*.8;return this._moveStart(!0,e.noMoveStart),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=z(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new M(t.coords.latitude,t.coords.longitude),e=i.toBounds(2*t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),K(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(g(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)K(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=G("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=ji?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(C(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return bt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=V(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");mt(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&ji,Q(t,"leaflet-container"+(qi?" leaflet-touch":"")+(Yi?" leaflet-retina":"")+(Li?" leaflet-oldie":"")+(Ai?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=q(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),at(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Q(t.markerPane,"leaflet-zoom-hide"),Q(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){at(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){at(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?ft:mt;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),ji&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if((e=this._targets[n(r)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!Ct(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!Ct(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!Mt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||ct(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&Pt(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.getLatLng&&(!s._radius||s._radius<=10);r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||!1===n[h].options.bubblingMouseEvents&&-1!==d(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return ht(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new x(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=ji?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){tt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=G("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=ce,e=this._proxy.style[i];rt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();rt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){K(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,Q(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&tt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Te=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return Q(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(K(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),ze=function(t){return new Te(t)};be.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=G("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=G("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)K(this._controlCorners[t]);K(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Me=Te.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Te.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){Q(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(Q(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):tt(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return tt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=G("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),wt(i),xt(i);var n=this._form=G("form",t+"-list");e&&(this._map.on("click",this.collapse,this),zi||mt(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=G("a",t+"-toggle",i);o.href="#",o.title="Layers",qi?(mt(o,"click",Lt),mt(o,"click",this.expand,this)):mt(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=G("div",t+"-base",n),this._separator=G("div",t+"-separator",n),this._overlaysList=G("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:n}),this.options.sortLayers&&this._layers.sort(e(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Y(this._baseLayersList),Y(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),mt(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");return e.appendChild(r),r.appendChild(i),r.appendChild(s),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;s>=0;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),Ce=Te.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=G("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=G("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),wt(s),mt(s,"click",Lt),mt(s,"click",o,this),mt(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";tt(this._zoomInButton,i),tt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&Q(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&Q(this._zoomInButton,i)}});be.mergeOptions({zoomControl:!0}),be.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ce,this.addControl(this.zoomControl))});var Se=Te.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i=G("div","leaflet-control-scale"),e=this.options;return this._addScales(e,"leaflet-control-scale-line",i),t.on(e.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=G("div",i,e)),t.imperial&&(this._iScale=G("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),Ze=Te.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=G("div","leaflet-control-attribution"),wt(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});be.mergeOptions({attributionControl:!0}),be.addInitHook(function(){this.options.attributionControl&&(new Ze).addTo(this)});Te.Layers=Me,Te.Zoom=Ce,Te.Scale=Se,Te.Attribution=Ze,ze.layers=function(t,i,e){return new Me(t,i,e)},ze.zoom=function(t){return new Ce(t)},ze.scale=function(t){return new Se(t)},ze.attribution=function(t){return new Ze(t)};var Ee=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ee.addTo=function(t,i){return t.addHandler(i,this),this};var ke,Ae={Events:li},Be=qi?"touchstart mousedown":"mousedown",Ie={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Oe={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Re=ci.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(mt(this._dragStartTarget,Be,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Re._dragging===this&&this.finishDrag(),ft(this._dragStartTarget,Be,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!$(this._element,"leaflet-zoom-anim")&&!(Re._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Re._dragging=this,this._preventOutline&&ct(this._element),ut(),fi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t,e=dt(this._element);this._startPoint=new x(i.clientX,i.clientY),this._parentScale=pt(e),mt(document,Oe[t.type],this._onMove,this),mt(document,Ie[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY)._subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||(e.x/=this._parentScale.x,e.y/=this._parentScale.y,Pt(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=ht(this._element).subtract(e),Q(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Q(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),at(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){tt(document.body,"leaflet-dragging"),this._lastTarget&&(tt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Oe)ft(document,Oe[t],this._onMove,this),ft(document,Ie[t],this._onUp,this);lt(),gi(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Re._dragging=!1}}),Ne=(Object.freeze||Object)({simplify:Zt,pointToSegmentDistance:Et,closestPointOnSegment:function(t,i,e){return Dt(t,i,e)},clipSegment:It,_getEdgeIntersection:Ot,_getBitCode:Rt,_sqClosestPointOnSegment:Dt,isFlat:jt,_flat:Wt}),De=(Object.freeze||Object)({clipPolygon:Ht}),je={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},We={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new M(a*e,t.x*e/n)}},He=(Object.freeze||Object)({LonLat:je,Mercator:We,SphericalMercator:mi}),Fe=i({},pi,{code:"EPSG:3395",projection:We,transformation:function(){var t=.5/(Math.PI*We.R);return Z(t,.5,-t,.5)}()}),Ue=i({},pi,{code:"EPSG:4326",projection:je,transformation:Z(1/180,1,-1/180,.5)}),Ve=i({},di,{projection:je,transformation:Z(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});di.Earth=pi,di.EPSG3395=Fe,di.EPSG3857=yi,di.EPSG900913=xi,di.EPSG4326=Ue,di.Simple=Ve;var qe=ci.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});be.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?oi(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ge=qe.extend({initialize:function(t,i){l(this,i),this._layers={};var e,n;if(t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),Ke=Ge.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ge.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ge.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ye=v.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return Yi&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Xe=Ye.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Xe.imagePath||(Xe.imagePath=this._detectIconPath()),(this.options.imagePath||Xe.imagePath)+Ye.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=G("div","leaflet-default-icon-path",document.body),i=q(t,"background-image")||q(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Je=Ee.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Re(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Q(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&tt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=ht(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=b(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=w((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),at(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=f(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(g(this._panRequest),this._panRequest=f(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=ht(i._icon),o=i._map.layerPointToLatLng(n);e&&at(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){g(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),$e=qe.extend({options:{icon:new Xe,interactive:!0,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),Q(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(Q(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),K(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&K(this._shadow),this._shadow=null},_setPos:function(t){at(this._icon,t),this._shadow&&at(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(Q(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Je)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Je(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;nt(this._icon,t),this._shadow&&nt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Qe=qe.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),tn=Qe.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Qe.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),en=tn.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Qe.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===pi.distance){var o=Math.PI/180,s=this._mRadius/pi.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),nn=Qe.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Dt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),(n+=e)>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return jt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=jt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=It(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Zt(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&Et(t,a[o],a[n])<=h)return!0;return!1}});nn._flat=Wt;var on=nn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=nn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){nn.prototype._setLatLngs.call(this,t),jt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return jt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=Ht(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||nn.prototype._containsPoint.call(this,t,!0)}}),sn=Ke.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=oi(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Ft(t,s);return r?(r.feature=Yt(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),rn={toGeoJSON:function(t){return Kt(this,{type:"Point",coordinates:qt(this.getLatLng(),t)})}};$e.include(rn),en.include(rn),tn.include(rn),nn.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=Gt(this._latlngs,i?1:0,!1,t);return Kt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),on.include({toGeoJSON:function(t){var i=!jt(this._latlngs),e=i&&!jt(this._latlngs[0]),n=Gt(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),Kt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ge.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),Kt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=Yt(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?Kt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var an=Xt,hn=qe.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Q(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){K(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&X(this._image),this},bringToBack:function(){return this._map&&J(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=z(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:G("img");Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),this.options.className&&Q(i,this.options.className),i.onselectstart=r,i.onmousemove=r,i.onload=e(this.fire,this,"load"),i.onerror=e(this._overlayOnError,this,"error"),(this.options.crossOrigin||""===this.options.crossOrigin)&&(i.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;rt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();at(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),un=hn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:G("video");if(Q(i,"leaflet-image-layer"),this._zoomAnimated&&Q(i,"leaflet-zoom-animated"),i.onselectstart=r,i.onmousemove=r,i.onloadeddata=e(this.fire,this,"load"),t){for(var n=i.getElementsByTagName("source"),o=[],s=0;s<n.length;s++)o.push(n[s].src);this._url=n.length>0?o:[i.src]}else{oi(this._url)||(this._url=[this._url]),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var a=0;a<this._url.length;a++){var h=G("source");h.src=this._url[a],i.appendChild(h)}}}}),ln=qe.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&nt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(nt(this._container,0),this._removeTimeout=setTimeout(e(K,void 0,this._container),200)):K(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&X(this._container),this},bringToBack:function(){return this._map&&J(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?at(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),cn=ln.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){ln.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Qe||this._source.on("preclick",yt))},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Qe||this._source.off("preclick",yt))},getEvents:function(){var t=ln.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=G("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=G("div",t+"-content-wrapper",i);if(this._contentNode=G("div",t+"-content",e),wt(e),xt(this._contentNode),mt(e,"contextmenu",yt),this._tipContainer=G("div",t+"-tip-container",i),this._tip=G("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=G("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",mt(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(i.height=o+"px",Q(t,"leaflet-popup-scrolled")):tt(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();at(this._container,i.add(e))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,i=parseInt(q(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(ht(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Lt(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});be.mergeOptions({closePopupOnClick:!0}),be.include({openPopup:function(t,i,e){return t instanceof cn||(t=new cn(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),qe.include({bindPopup:function(t,i){return t instanceof cn?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new cn(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Lt(t),i instanceof Qe?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var _n=ln.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){ln.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){ln.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=ln.prototype.getEvents.call(this);return qi&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=G("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),tt(e,"leaflet-tooltip-right"),tt(e,"leaflet-tooltip-left"),tt(e,"leaflet-tooltip-top"),tt(e,"leaflet-tooltip-bottom"),Q(e,"leaflet-tooltip-"+s),at(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&nt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});be.include({openTooltip:function(t,i,e){return t instanceof _n||(t=new _n(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),qe.include({bindTooltip:function(t,i){return t instanceof _n?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new _n(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),qi&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof qe||(i=t,t=this),t instanceof Ke)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(Q(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(tt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var dn=Ye.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Ye.Default=Xe;var pn=qe.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Wi,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),K(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(X(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(J(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Li){nt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);nt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=G("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(K(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=G("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)K(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();ji?rt(t.el,o,n):at(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new T(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(K(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){Q(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Li&&this.options.opacity<1&&nt(t,this.options.opacity),zi&&!Mi&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),at(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(nt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(Q(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Li||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),mn=pn.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=l(this,i)).detectRetina&&Yi&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),zi||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return mt(n,"load",e(this._tileOnLoad,this,i,n)),mt(n,"error",e(this._tileOnError,this,i,n)),(this.options.crossOrigin||""===this.options.crossOrigin)&&(n.crossOrigin=!0===this.options.crossOrigin?"":this.options.crossOrigin),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Yi?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Li?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=r,i.onerror=r,i.complete||(i.src=si,K(i),delete this._tiles[t]))},_removeTile:function(t){var i=this._tiles[t];if(i)return Si||i.el.setAttribute("src",si),pn.prototype._removeTile.call(this,t)},_tileReady:function(t,i,e){if(this._map&&(!e||e.getAttribute("src")!==si))return pn.prototype._tileReady.call(this,t,i,e)}}),fn=mn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var s=(e=l(this,e)).detectRetina&&Yi?2:1,r=this.getTileSize();n.width=r.x*s,n.height=r.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,mn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=b(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(this._wmsVersion>=1.3&&this._crs===Ue?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=mn.prototype.getTileUrl.call(this,t);return a+c(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});mn.WMS=fn,Jt.wms=function(t,i){return new fn(t,i)};var gn=qe.extend({options:{padding:.1,tolerance:0},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&Q(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=ht(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);ji?rt(this._container,a,e):at(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),vn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){gn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");mt(t,"mousemove",o(this._onMouseMove,32,this),this),mt(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),mt(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){g(this._redrawRequest),delete this._ctx,K(this._container),ft(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){this._redrawBounds=null;for(var t in this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},gn.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Yi?2:1;at(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Yi&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){gn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,o=i.prev;e?e.prev=o:this._drawLast=o,o?o.next=e:this._drawFirst=e,delete this._drawnLayers[t._leaflet_id],delete t._order,delete this._layers[n(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if("string"==typeof t.options.dashArray){var i,e=t.options.dashArray.split(/[, ]+/),n=[];for(i=0;i<e.length;i++)n.push(Number(e[i]));t.options._dashArray=n}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(zt(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(tt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(Q(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order,e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))},_bringToBack:function(t){var i=t._order,e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}),yn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),xn={_initContainer:function(){this._container=G("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(gn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=yn("shape");Q(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=yn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;K(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=yn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=oi(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=yn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){X(t._container)},_bringToBack:function(t){J(t._container)}},wn=$i?yn:E,Pn=gn.extend({getEvents:function(){var t=gn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=wn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=wn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){K(this._container),ft(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){gn.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),at(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=wn("path");t.options.className&&Q(i,t.options.className),t.options.interactive&&Q(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){K(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){X(t._path)},_bringToBack:function(t){J(t._path)}});$i&&Pn.include(xn),be.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=this._createRenderer({pane:t}),this._paneRenderers[t]=i),i},_createRenderer:function(t){return this.options.preferCanvas&&$t(t)||Qt(t)}});var Ln=on.extend({initialize:function(t,i){on.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});Pn.create=wn,Pn.pointsToPath=k,sn.geometryToLayer=Ft,sn.coordsToLatLng=Ut,sn.coordsToLatLngs=Vt,sn.latLngToCoords=qt,sn.latLngsToCoords=Gt,sn.getFeature=Kt,sn.asFeature=Yt,be.mergeOptions({boxZoom:!0});var bn=Ee.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){mt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ft(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){K(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),fi(),ut(),this._startPoint=this._map.mouseEventToContainerPoint(t),mt(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=G("div","leaflet-zoom-box",this._container),Q(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();at(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(K(this._box),tt(this._container,"leaflet-crosshair")),gi(),lt(),ft(document,{contextmenu:Lt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});be.addInitHook("addHandler","boxZoom",bn),be.mergeOptions({doubleClickZoom:!0});var Tn=Ee.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});be.addInitHook("addHandler","doubleClickZoom",Tn),be.mergeOptions({dragging:!0,inertia:!Mi,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var zn=Ee.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Re(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}Q(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){tt(this._map._container,"leaflet-grab"),tt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});be.addInitHook("addHandler","dragging",zn),be.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Mn=Ee.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),mt(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ft(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){mt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ft(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys)n._panAnim&&n._panAnim._inProgress||(i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds));else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Lt(t)}}});be.addInitHook("addHandler","keyboard",Mn),be.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Cn=Ee.extend({addHooks:function(){mt(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ft(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=Tt(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Lt(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});be.addInitHook("addHandler","scrollWheelZoom",Cn),be.mergeOptions({tap:!0,tapTolerance:15});var Sn=Ee.extend({addHooks:function(){mt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ft(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(Pt(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&Q(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),mt(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),ft(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&tt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});qi&&!Vi&&be.addInitHook("addHandler","tap",Sn),be.mergeOptions({touchZoom:qi&&!Mi,bounceAtZoomLimits:!0});var Zn=Ee.extend({addHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),mt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){tt(this._map._container,"leaflet-touch-zoom"),ft(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),mt(document,"touchmove",this._onTouchMove,this),mt(document,"touchend",this._onTouchEnd,this),Pt(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),Pt(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),ft(document,"touchmove",this._onTouchMove),ft(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});be.addInitHook("addHandler","touchZoom",Zn),be.BoxZoom=bn,be.DoubleClickZoom=Tn,be.Drag=zn,be.Keyboard=Mn,be.ScrollWheelZoom=Cn,be.Tap=Sn,be.TouchZoom=Zn,Object.freeze=ti,t.version="1.3.4",t.Control=Te,t.control=ze,t.Browser=Qi,t.Evented=ci,t.Mixin=Ae,t.Util=ui,t.Class=v,t.Handler=Ee,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=Pe,t.DomUtil=ve,t.PosAnimation=Le,t.Draggable=Re,t.LineUtil=Ne,t.PolyUtil=De,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=S,t.transformation=Z,t.Projection=He,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=di,t.GeoJSON=sn,t.geoJSON=Xt,t.geoJson=an,t.Layer=qe,t.LayerGroup=Ge,t.layerGroup=function(t,i){return new Ge(t,i)},t.FeatureGroup=Ke,t.featureGroup=function(t){return new Ke(t)},t.ImageOverlay=hn,t.imageOverlay=function(t,i,e){return new hn(t,i,e)},t.VideoOverlay=un,t.videoOverlay=function(t,i,e){return new un(t,i,e)},t.DivOverlay=ln,t.Popup=cn,t.popup=function(t,i){return new cn(t,i)},t.Tooltip=_n,t.tooltip=function(t,i){return new _n(t,i)},t.Icon=Ye,t.icon=function(t){return new Ye(t)},t.DivIcon=dn,t.divIcon=function(t){return new dn(t)},t.Marker=$e,t.marker=function(t,i){return new $e(t,i)},t.TileLayer=mn,t.tileLayer=Jt,t.GridLayer=pn,t.gridLayer=function(t){return new pn(t)},t.SVG=Pn,t.svg=Qt,t.Renderer=gn,t.Canvas=vn,t.canvas=$t,t.Path=Qe,t.CircleMarker=tn,t.circleMarker=function(t,i){return new tn(t,i)},t.Circle=en,t.circle=function(t,i,e){return new en(t,i,e)},t.Polyline=nn,t.polyline=function(t,i){return new nn(t,i)},t.Polygon=on,t.polygon=function(t,i){return new on(t,i)},t.Rectangle=Ln,t.rectangle=function(t,i){return new Ln(t,i)},t.Map=be,t.map=function(t,i){return new be(t,i)};var En=window.L;t.noConflict=function(){return window.L=En,this},window.L=t});/*
 (c) 2017, iosphere GmbH
 Leaflet.hotline, a Leaflet plugin for drawing gradients along polylines.
 https://github.com/iosphere/Leaflet.hotline/
*/

(function (root, plugin) {
	/**
	 * UMD wrapper.
	 * When used directly in the Browser it expects Leaflet to be globally
	 * available as `L`. The plugin then adds itself to Leaflet.
	 * When used as a CommonJS module (e.g. with browserify) only the plugin
	 * factory gets exported, so one hast to call the factory manually and pass
	 * Leaflet as the only parameter.
	 * @see {@link https://github.com/umdjs/umd}
	 */
	if (typeof define === 'function' && define.amd) {
		define(['leaflet'], plugin);
	} else if (typeof exports === 'object') {
		module.exports = plugin;
	} else {
		plugin(root.L);
	}
}(this, function (L) {
	// Plugin is already added to Leaflet
	if (L.Hotline) {
		return L;
	}

	/**
	 * Core renderer.
	 * @constructor
	 * @param {HTMLElement | string} canvas - &lt;canvas> element or its id
	 * to initialize the instance on.
	 */
	var Hotline = function (canvas) {
		if (!(this instanceof Hotline)) { return new Hotline(canvas); }

		var defaultPalette = {
			0.0: 'green',
			0.5: 'yellow',
			1.0: 'red'
		};

		this._canvas = canvas = typeof canvas === 'string'
			? document.getElementById(canvas)
			: canvas;

		this._ctx = canvas.getContext('2d');
		this._width = canvas.width;
		this._height = canvas.height;

		this._weight = 5;
		this._outlineWidth = 1;
		this._outlineColor = 'black';

		this._min = 0;
		this._max = 1;

		this._data = [];

		this.palette(defaultPalette);
	};

	Hotline.prototype = {
		/**
		 * Sets the width of the canvas. Used when clearing the canvas.
		 * @param {number} width - Width of the canvas.
		 */
		width: function (width) {
			this._width = width;
			return this;
		},

		/**
		 * Sets the height of the canvas. Used when clearing the canvas.
		 * @param {number} height - Height of the canvas.
		 */
		height: function (height) {
			this._height = height;
			return this;
		},

		/**
		 * Sets the weight of the path.
		 * @param {number} weight - Weight of the path in px.
		 */
		weight: function (weight) {
			this._weight = weight;
			return this;
		},

		/**
		 * Sets the width of the outline around the path.
		 * @param {number} outlineWidth - Width of the outline in px.
		 */
		outlineWidth: function (outlineWidth) {
			this._outlineWidth = outlineWidth;
			return this;
		},

		/**
		 * Sets the color of the outline around the path.
		 * @param {string} outlineColor - A CSS color value.
		 */
		outlineColor: function (outlineColor) {
			this._outlineColor = outlineColor;
			return this;
		},

		/**
		 * Sets the palette gradient.
		 * @param {Object.<number, string>} palette  - Gradient definition.
		 * e.g. { 0.0: 'white', 1.0: 'black' }
		 */
		palette: function (palette) {
			var canvas = document.createElement('canvas'),
					ctx = canvas.getContext('2d'),
					gradient = ctx.createLinearGradient(0, 0, 0, 256);

			canvas.width = 1;
			canvas.height = 256;

			for (var i in palette) {
				gradient.addColorStop(i, palette[i]);
			}

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, 1, 256);

			this._palette = ctx.getImageData(0, 0, 1, 256).data;

			return this;
		},

		/**
		 * Sets the value used at the start of the palette gradient.
		 * @param {number} min
		 */
		min: function (min) {
			this._min = min;
			return this;
		},

		/**
		 * Sets the value used at the end of the palette gradient.
		 * @param {number} max
		 */
		max: function (max) {
			this._max = max;
			return this;
		},

		/**
		 * A path to rander as a hotline.
		 * @typedef Array.<{x:number, y:number, z:number}> Path - Array of x, y and z coordinates.
		 */

		/**
		 * Sets the data that gets drawn on the canvas.
		 * @param {(Path|Path[])} data - A single path or an array of paths.
		 */
		data: function (data) {
			this._data = data;
			return this;
		},

		/**
		 * Adds a path to the list of paths.
		 * @param {Path} path
		 */
		add: function (path) {
			this._data.push(path);
			return this;
		},

		/**
		 * Draws the currently set paths.
		 */
		draw: function () {
			var ctx = this._ctx;

			ctx.globalCompositeOperation = 'source-over';
			ctx.lineCap = 'round';

			this._drawOutline(ctx);
			this._drawHotline(ctx);

			return this;
		},

		/**
		 * Gets the RGB values of a given z value of the current palette.
		 * @param {number} value - Value to get the color for, should be between min and max.
		 * @returns {Array.<number>} The RGB values as an array [r, g, b]
		 */
		getRGBForValue: function (value) {
			var valueRelative = Math.min(Math.max((value - this._min) / (this._max - this._min), 0), 0.999);
			var paletteIndex = Math.floor(valueRelative * 256) * 4;

			return [
				this._palette[paletteIndex],
				this._palette[paletteIndex + 1],
				this._palette[paletteIndex + 2]
			];
		},

		/**
		 * Draws the outline of the graphs.
		 * @private
		 */
		_drawOutline: function (ctx) {
			var i, j, dataLength, path, pathLength, pointStart, pointEnd;

			if (this._outlineWidth) {
				for (i = 0, dataLength = this._data.length; i < dataLength; i++) {
					path = this._data[i];
					ctx.lineWidth = this._weight + 2 * this._outlineWidth;

					for (j = 1, pathLength = path.length; j < pathLength; j++) {
						pointStart = path[j - 1];
						pointEnd = path[j];

						ctx.strokeStyle = this._outlineColor;
						ctx.beginPath();
						ctx.moveTo(pointStart.x, pointStart.y);
						ctx.lineTo(pointEnd.x, pointEnd.y);
						ctx.stroke();
					}
				}
			}
		},

		/**
		 * Draws the color encoded hotline of the graphs.
		 * @private
		 */
		_drawHotline: function (ctx) {
			var i, j, dataLength, path, pathLength, pointStart, pointEnd,
					gradient, gradientStartRGB, gradientEndRGB;

			ctx.lineWidth = this._weight;

			for (i = 0, dataLength = this._data.length; i < dataLength; i++) {
				path = this._data[i];

				for (j = 1, pathLength = path.length; j < pathLength; j++) {
					pointStart = path[j - 1];
					pointEnd = path[j];

					// Create a gradient for each segment, pick start end end colors from palette gradient
					gradient = ctx.createLinearGradient(pointStart.x, pointStart.y, pointEnd.x, pointEnd.y);
					gradientStartRGB = this.getRGBForValue(pointStart.z);
					gradientEndRGB = this.getRGBForValue(pointEnd.z);
					gradient.addColorStop(0, 'rgb(' + gradientStartRGB.join(',') + ')');
					gradient.addColorStop(1, 'rgb(' + gradientEndRGB.join(',') + ')');

					ctx.strokeStyle = gradient;
					ctx.beginPath();
					ctx.moveTo(pointStart.x, pointStart.y);
					ctx.lineTo(pointEnd.x, pointEnd.y);
					ctx.stroke();
				}
			}
		}
	};


	var Renderer = L.Canvas.extend({
		_initContainer: function () {
			L.Canvas.prototype._initContainer.call(this);
			this._hotline = new Hotline(this._container);
		},

		_update: function () {
			L.Canvas.prototype._update.call(this);
			this._hotline.width(this._container.width);
			this._hotline.height(this._container.height);
		},

		_updatePoly: function (layer) {
			if (!this._drawing) { return; }

			var parts = layer._parts;

			if (!parts.length) { return; }

			this._updateOptions(layer);

			this._hotline
				.data(parts)
				.draw();
		},

		_updateOptions: function (layer) {
			if (layer.options.min != null) {
				this._hotline.min(layer.options.min);
			}
			if (layer.options.max != null) {
				this._hotline.max(layer.options.max);
			}
			if (layer.options.weight != null) {
				this._hotline.weight(layer.options.weight);
			}
			if (layer.options.outlineWidth != null) {
				this._hotline.outlineWidth(layer.options.outlineWidth);
			}
			if (layer.options.outlineColor != null) {
				this._hotline.outlineColor(layer.options.outlineColor);
			}
			if (layer.options.palette) {
				this._hotline.palette(layer.options.palette);
			}
		}
	});

	var renderer = function (options) {
		return L.Browser.canvas ? new Renderer(options) : null;
	};


	var Util = {
		/**
		 * This is just a copy of the original Leaflet version that support a third z coordinate.
		 * @see {@link http://leafletjs.com/reference.html#lineutil-clipsegment|Leaflet}
		 */
		clipSegment: function (a, b, bounds, useLastCode, round) {
			var codeA = useLastCode ? this._lastCode : L.LineUtil._getBitCode(a, bounds),
					codeB = L.LineUtil._getBitCode(b, bounds),
					codeOut, p, newCode;

			// save 2nd code to avoid calculating it on the next segment
			this._lastCode = codeB;

			while (true) {
				// if a,b is inside the clip window (trivial accept)
				if (!(codeA | codeB)) {
					return [a, b];
				// if a,b is outside the clip window (trivial reject)
				} else if (codeA & codeB) {
					return false;
				// other cases
				} else {
					codeOut = codeA || codeB;
					p = L.LineUtil._getEdgeIntersection(a, b, codeOut, bounds, round);
					newCode = L.LineUtil._getBitCode(p, bounds);

					if (codeOut === codeA) {
						p.z = a.z;
						a = p;
						codeA = newCode;
					} else {
						p.z = b.z;
						b = p;
						codeB = newCode;
					}
				}
			}
		}
	};


	L.Hotline = L.Polyline.extend({
		statics: {
			Renderer: Renderer,
			renderer: renderer
		},

		options: {
			renderer: renderer(),
			min: 0,
			max: 1,
			palette: {
				0.0: 'green',
				0.5: 'yellow',
				1.0: 'red'
			},
			weight: 5,
			outlineColor: 'black',
			outlineWidth: 1
		},

		getRGBForValue: function (value) {
			return this._renderer._hotline.getRGBForValue(value);
		},

		/**
		 * Just like the Leaflet version, but with support for a z coordinate.
		 */
		_projectLatlngs: function (latlngs, result, projectedBounds) {
			var flat = latlngs[0] instanceof L.LatLng,
					len = latlngs.length,
					i, ring;

			if (flat) {
				ring = [];
				for (i = 0; i < len; i++) {
					ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
					// Add the altitude of the latLng as the z coordinate to the point
					ring[i].z = latlngs[i].alt;
					projectedBounds.extend(ring[i]);
				}
				result.push(ring);
			} else {
				for (i = 0; i < len; i++) {
					this._projectLatlngs(latlngs[i], result, projectedBounds);
				}
			}
		},

		/**
		 * Just like the Leaflet version, but uses `Util.clipSegment()`.
		 */
		_clipPoints: function () {
			if (this.options.noClip) {
				this._parts = this._rings;
				return;
			}

			this._parts = [];

			var parts = this._parts,
					bounds = this._renderer._bounds,
					i, j, k, len, len2, segment, points;

			for (i = 0, k = 0, len = this._rings.length; i < len; i++) {
				points = this._rings[i];

				for (j = 0, len2 = points.length; j < len2 - 1; j++) {
					segment = Util.clipSegment(points[j], points[j + 1], bounds, j, true);

					if (!segment) { continue; }

					parts[k] = parts[k] || [];
					parts[k].push(segment[0]);

					// if segment goes out of screen, or it's the last one, it's the end of the line part
					if ((segment[1] !== points[j + 1]) || (j === len2 - 2)) {
						parts[k].push(segment[1]);
						k++;
					}
				}
			}
		},

		_clickTolerance: function () {
			return this.options.weight / 2 + this.options.outlineWidth + (L.Browser.touch ? 10 : 0);
		}
	});

	L.hotline = function (latlngs, options) {
		return new L.Hotline(latlngs, options);
	};

	L.hotline_force_renderer = function (force_renderer, latlngs, options) {
		return new L.Hotline(latlngs,
		{
			renderer: force_renderer,
			min: -100,
			max: 100,
			palette: {
				0.0: 'black',
				0.10: 'black', // -80%
				0.20: 'magenta', // -60%
				0.30: 'blue', // -40%
				0.40: 'cyan', // -20%
				0.50: 'green', // 0%
				0.55: 'yellow', // 10%
				0.60: 'red', // 20%
				0.65: 'white', // 30%
				1.0: 'white'
			},
			weight: 7,
			outlineColor: 'black',
			outlineWidth: 1
		}
		);
	};

	L.hotline_create_new_renderer = function () {
		return renderer();
	}

	return L;
}));
/**
 * Copyright (C) 2011-2012 Pavel Shramov
 * Copyright (C) 2013-2017 Maxime Petazzoni <maxime.petazzoni@bulix.org>
 * All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * Thanks to Pavel Shramov who provided the initial implementation and Leaflet
 * integration. Original code was at https://github.com/shramov/leaflet-plugins.
 *
 * It was then cleaned-up and modified to record and make available more
 * information about the GPX track while it is being parsed so that the result
 * can be used to display additional information about the track that is
 * rendered on the Leaflet map.
 */

var L = L || require('leaflet');

var _MAX_POINT_INTERVAL_MS = 15000;
var _SECOND_IN_MILLIS = 1000;
var _MINUTE_IN_MILLIS = 60 * _SECOND_IN_MILLIS;
var _HOUR_IN_MILLIS = 60 * _MINUTE_IN_MILLIS;
var _DAY_IN_MILLIS = 24 * _HOUR_IN_MILLIS;

var _GPX_STYLE_NS = 'http://www.topografix.com/GPX/gpx_style/0/2';

var _DEFAULT_MARKER_OPTS = {
  startIconUrl: 'pin-icon-start.png',
  endIconUrl: 'pin-icon-end.png',
  shadowUrl: 'pin-shadow.png',
  wptIcons: [],
  wptIconUrls : {
    '': 'pin-icon-wpt.png',
  },
  pointMatchers: [],
  iconSize: [33, 50],
  shadowSize: [50, 50],
  iconAnchor: [16, 45],
  shadowAnchor: [16, 47],
  clickable: false
};
var _DEFAULT_POLYLINE_OPTS = {
  color: 'blue',
  weight: 5
};
var _DEFAULT_GPX_OPTS = {
  parseElements: ['track', 'route', 'waypoint']
};
L.GPX = L.FeatureGroup.extend({
  initialize: function(gpx, options) {
    options.max_point_interval = options.max_point_interval || _MAX_POINT_INTERVAL_MS;
    options.marker_options = this._merge_objs(
      _DEFAULT_MARKER_OPTS,
      options.marker_options || {});
    options.polyline_options = options.polyline_options || {};
    options.gpx_options = this._merge_objs(
      _DEFAULT_GPX_OPTS,
      options.gpx_options || {});

    L.Util.setOptions(this, options);

    // Base icon class for track pins.
    L.GPXTrackIcon = L.Icon.extend({ options: options.marker_options });

    this._gpx = gpx;
    this._layers = {};
    this._init_info();

    if (gpx) {
      this._parse(gpx, options, this.options.async);
    }
  },

  get_duration_string: function(duration, hidems) {
    var s = '';

    if (duration >= _DAY_IN_MILLIS) {
      s += Math.floor(duration / _DAY_IN_MILLIS) + 'd ';
      duration = duration % _DAY_IN_MILLIS;
    }

    if (duration >= _HOUR_IN_MILLIS) {
      s += Math.floor(duration / _HOUR_IN_MILLIS) + ':';
      duration = duration % _HOUR_IN_MILLIS;
    }

    var mins = Math.floor(duration / _MINUTE_IN_MILLIS);
    duration = duration % _MINUTE_IN_MILLIS;
    if (mins < 10) s += '0';
    s += mins + '\'';

    var secs = Math.floor(duration / _SECOND_IN_MILLIS);
    duration = duration % _SECOND_IN_MILLIS;
    if (secs < 10) s += '0';
    s += secs;

    if (!hidems && duration > 0) s += '.' + Math.round(Math.floor(duration)*1000)/1000;
    else s += '"';

    return s;
  },

  get_duration_string_iso: function(duration, hidems) {
    var s = this.get_duration_string(duration, hidems);
    return s.replace("'",':').replace('"','');
  },

  // Public methods
  to_miles:            function(v) { return v / 1.60934; },
  to_ft:               function(v) { return v * 3.28084; },
  m_to_km:             function(v) { return v / 1000; },
  m_to_mi:             function(v) { return v / 1609.34; },

  get_name:            function() { return this._info.name; },
  get_desc:            function() { return this._info.desc; },
  get_author:          function() { return this._info.author; },
  get_copyright:       function() { return this._info.copyright; },
  get_distance:        function() { return this._info.length; },
  get_distance_imp:    function() { return this.to_miles(this.m_to_km(this.get_distance())); },

  get_start_time:      function() { return this._info.duration.start; },
  get_end_time:        function() { return this._info.duration.end; },
  get_moving_time:     function() { return this._info.duration.moving; },
  get_total_time:      function() { return this._info.duration.total; },

  get_moving_pace:     function() { return this.get_moving_time() / this.m_to_km(this.get_distance()); },
  get_moving_pace_imp: function() { return this.get_moving_time() / this.get_distance_imp(); },

  get_moving_speed:    function() { return this.m_to_km(this.get_distance()) / (this.get_moving_time() / (3600 * 1000)) ; },
  get_moving_speed_imp:function() { return this.to_miles(this.m_to_km(this.get_distance())) / (this.get_moving_time() / (3600 * 1000)) ; },

  get_total_speed:     function() { return this.m_to_km(this.get_distance()) / (this.get_total_time() / (3600 * 1000)); },
  get_total_speed_imp: function() { return this.to_miles(this.m_to_km(this.get_distance())) / (this.get_total_time() / (3600 * 1000)); },

  get_elevation_gain:     function() { return this._info.elevation.gain; },
  get_elevation_loss:     function() { return this._info.elevation.loss; },
  get_elevation_gain_imp: function() { return this.to_ft(this.get_elevation_gain()); },
  get_elevation_loss_imp: function() { return this.to_ft(this.get_elevation_loss()); },
  get_elevation_data:     function() {
    var _this = this;
    return this._info.elevation._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' m'; });
      });
  },
  get_elevation_data_imp: function() {
    var _this = this;
    return this._info.elevation._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, _this.to_ft,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' ft'; });
      });
  },
  get_elevation_max:      function() { return this._info.elevation.max; },
  get_elevation_min:      function() { return this._info.elevation.min; },
  get_elevation_max_imp:  function() { return this.to_ft(this.get_elevation_max()); },
  get_elevation_min_imp:  function() { return this.to_ft(this.get_elevation_min()); },

  get_average_hr:         function() { return this._info.hr.avg; },
  get_average_temp:         function() { return this._info.atemp.avg; },
  get_average_cadence:         function() { return this._info.cad.avg; },
  get_heartrate_data:     function() {
    var _this = this;
    return this._info.hr._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' bpm'; });
      });
  },
  get_heartrate_data_imp: function() {
    var _this = this;
    return this._info.hr._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, null,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' bpm'; });
      });
  },
  get_cadence_data:     function() {
    var _this = this;
    return this._info.cad._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' rpm'; });
      });
  },
  get_temp_data:     function() {
    var _this = this;
    return this._info.atemp._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_km, null,
        function(a, b) { return a.toFixed(2) + ' km, ' + b.toFixed(0) + ' degrees'; });
      });
  },
  get_cadence_data_imp:     function() {
    var _this = this;
    return this._info.cad._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, null,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' rpm'; });
      });
  },
  get_temp_data_imp:     function() {
    var _this = this;
    return this._info.atemp._points.map(
      function(p) { return _this._prepare_data_point(p, _this.m_to_mi, null,
        function(a, b) { return a.toFixed(2) + ' mi, ' + b.toFixed(0) + ' degrees'; });
      });
  },

  reload: function() {
    this._init_info();
    this.clearLayers();
    this._parse(this._gpx, this.options, this.options.async);
  },

  // Private methods
  _merge_objs: function(a, b) {
    var _ = {};
    for (var attr in a) { _[attr] = a[attr]; }
    for (var attr in b) { _[attr] = b[attr]; }
    return _;
  },

  _prepare_data_point: function(p, trans1, trans2, trans_tooltip) {
    var r = [trans1 && trans1(p[0]) || p[0], trans2 && trans2(p[1]) || p[1]];
    r.push(trans_tooltip && trans_tooltip(r[0], r[1]) || (r[0] + ': ' + r[1]));
    return r;
  },

  _init_info: function() {
    this._info = {
      name: null,
      length: 0.0,
      elevation: {gain: 0.0, loss: 0.0, max: 0.0, min: Infinity, _points: []},
      hr: {avg: 0, _total: 0, _points: []},
      duration: {start: null, end: null, moving: 0, total: 0},
      atemp: {avg: 0, _total: 0, _points: []},
      cad: {avg: 0, _total: 0, _points: []}
    };
  },

  _load_xml: function(url, cb, options, async) {
    if (async == undefined) async = this.options.async;
    if (options == undefined) options = this.options;

    var req = new window.XMLHttpRequest();
    req.open('GET', url, async);
    try {
      req.overrideMimeType('text/xml'); // unsupported by IE
    } catch(e) {}
    req.onreadystatechange = function() {
      if (req.readyState != 4) return;
      if(req.status == 200) cb(req.responseXML, options);
    };
    req.send(null);
  },

  _parse: function(input, options, async) {
    var _this = this;
    var cb = function(gpx, options) {
      var layers = _this._parse_gpx_data(gpx, options);
      if (!layers) return;
      _this.addLayer(layers);
      _this.fire('loaded', { layers: layers, element: gpx });
    }
    if (input.substr(0,1)==='<') { // direct XML has to start with a <
      var parser = new DOMParser();
      if (async) {
        setTimeout(function() {
          cb(parser.parseFromString(input, "text/xml"), options);
        });
      } else {
        cb(parser.parseFromString(input, "text/xml"), options);
      }
    } else {
      this._load_xml(input, cb, options, async);
    }
  },

  _parse_gpx_data: function(xml, options) {
    var i, t, l, el, layers = [];
    var tags = [];

    var parseElements = options.gpx_options.parseElements;
    if (parseElements.indexOf('route') > -1) {
      tags.push(['rte','rtept']);
    }
    if (parseElements.indexOf('track') > -1) {
      tags.push(['trkseg','trkpt']);
    }

    var name = xml.getElementsByTagName('name');
    if (name.length > 0) {
      this._info.name = name[0].textContent;
    }
    var desc = xml.getElementsByTagName('desc');
    if (desc.length > 0) {
      this._info.desc = desc[0].textContent;
    }
    var author = xml.getElementsByTagName('author');
    if (author.length > 0) {
      this._info.author = author[0].textContent;
    }
    var copyright = xml.getElementsByTagName('copyright');
    if (copyright.length > 0) {
      this._info.copyright = copyright[0].textContent;
    }

    for (t = 0; t < tags.length; t++) {
      el = xml.getElementsByTagName(tags[t][0]);
      for (i = 0; i < el.length; i++) {
        var trackLayers = this._parse_trkseg(el[i], options, tags[t][1]);
        for (l = 0; l < trackLayers.length; l++) {
          layers.push(trackLayers[l]);
        }
      }
    }

    this._info.hr.avg = Math.round(this._info.hr._total / this._info.hr._points.length);
    this._info.cad.avg = Math.round(this._info.cad._total / this._info.cad._points.length);
    this._info.atemp.avg = Math.round(this._info.atemp._total / this._info.atemp._points.length);

    // parse waypoints and add markers for each of them
    if (parseElements.indexOf('waypoint') > -1) {
      el = xml.getElementsByTagName('wpt');
      for (i = 0; i < el.length; i++) {
        var ll = new L.LatLng(
            el[i].getAttribute('lat'),
            el[i].getAttribute('lon'));

        var nameEl = el[i].getElementsByTagName('name');
        var name = '';
        if (nameEl.length > 0) {
          name = nameEl[0].textContent;
        }

        var descEl = el[i].getElementsByTagName('desc');
        var desc = '';
        if (descEl.length > 0) {
          desc = descEl[0].textContent;
        }

        var symEl = el[i].getElementsByTagName('sym');
        var symKey = '';
        if (symEl.length > 0) {
          symKey = symEl[0].textContent;
        }

        /*
         * Add waypoint marker based on the waypoint symbol key.
         *
         * First look for a configured icon for that symKey. If not found, look
         * for a configured icon URL for that symKey and build an icon from it.
         * Otherwise, fall back to the default icon if one was configured, or
         * finally to the default icon URL.
         */
        var wptIcons = options.marker_options.wptIcons;
        var wptIconUrls = options.marker_options.wptIconUrls;
        var symIcon;
        if (wptIcons && wptIcons[symKey]) {
          symIcon = wptIcons[symKey];
        } else if (wptIconUrls && wptIconUrls[symKey]) {
          symIcon = new L.GPXTrackIcon({iconUrl: wptIconUrls[symKey]});
        } else if (wptIcons && wptIcons['']) {
          symIcon = wptIcons[''];
        } else if (wptIconUrls && wptIconUrls['']) {
          symIcon = new L.GPXTrackIcon({iconUrl: wptIconUrls['']});
        } else {
          console.log('No icon or icon URL configured for symbol type "' + symKey
            + '", and no fallback configured; ignoring waypoint.');
          continue;
        }

        var marker = new L.Marker(ll, {
          clickable: options.marker_options.clickable,
          title: name,
          icon: symIcon
        });
        marker.bindPopup("<b>" + name + "</b>" + (desc.length > 0 ? '<br>' + desc : '')).openPopup();
        this.fire('addpoint', { point: marker, point_type: 'waypoint', element: el[i] });
        layers.push(marker);
      }
    }

    if (layers.length > 1) {
       return new L.FeatureGroup(layers);
    } else if (layers.length == 1) {
      return layers[0];
    }
  },

  _parse_trkseg: function(line, options, tag) {
    var el = line.getElementsByTagName(tag);
    if (!el.length) return [];

    var coords = [];
    var markers = [];
    var layers = [];
    var delta = [];
    var last_ll = null;
    var last_ele = null;
    var last_time = null;

    // preprocess all the points to compute a centered slope
    for (var i = 0; i < el.length; i++) {
        var ll = new L.LatLng(el[i].getAttribute('lat'),el[i].getAttribute('lon'));

        var elevation = 0; // elevation (always positive)
        var distance_h = 0; // planar movement (always positive)
        var delta_v = 0; // delta vertical movement (signed)
        var distance_tot = 0; // total movement (always positive)
        var point_time = 0; // absolute time of the point (milliseconds)
        var elapsed_time = 0; // elapsed time from the previous point (milliseconds)

        _ = el[i].getElementsByTagName('time');
        if (_.length > 0) {
            point_time = new Date(Date.parse(_[0].textContent));
        } else {
            point_time = new Date('1970-01-01T00:00:00');
        }

        _ = el[i].getElementsByTagName('ele');
        if (_.length > 0) {
            elevation = parseFloat(_[0].textContent);
        }

        // avoid issues for points missing elevation info
        if (elevation == 0 && last_ele != null) {
            elevation = last_ele;
        }

        if (last_ll != null) {
            // compute the distance from the previous point
            distance_h = this._dist2d(last_ll, ll);
            delta_v = elevation - last_ele;
            distance_tot = Math.sqrt(Math.pow(distance_h, 2) + Math.pow(Math.abs(delta_v), 2));
            elapsed_time = Math.abs(point_time - last_time);
        }

        // store in the delta vector
        delta.push({distance_h:distance_h, ele:elevation, delta_v:delta_v, distance_tot:distance_tot, point_time:point_time, elapsed_time:elapsed_time});

        last_ll = ll;
        last_ele = elevation;
        last_time = point_time;
    }

    // filter elevation with a median filter
    for (var i = 2; i + 2 < el.length; i++) {
        var ele_vect = [];

        ele_vect.push(delta[i-2].ele);
        ele_vect.push(delta[i-1].ele);
        ele_vect.push(delta[i].ele);
        ele_vect.push(delta[i+1].ele);
        ele_vect.push(delta[i+2].ele);

        ele_vect.sort();

        delta[i].ele = ele_vect[2];
        delta[i].delta_v = delta[i].ele - delta[i-1].ele;
    }

    last_ll = null;
    last_ele = null;
    last_time = null;

    // reprocess all the points
    for (var i = 0; i < el.length; i++) {
      var _, ll = new L.LatLng(
        el[i].getAttribute('lat'),
        el[i].getAttribute('lon'));
      ll.meta = { time: null, ele: null, hr: null, cad: null, atemp: null };

      // already computed fields
      ll.meta.ele = delta[i].ele;
      ll.meta.time = delta[i].point_time;

      _ = el[i].getElementsByTagName('name');
      if (_.length > 0) {
        var name = _[0].textContent;
        var ptMatchers = options.marker_options.pointMatchers || [];

        for (var j = 0; j < ptMatchers.length; j++) {
          if (ptMatchers[j].regex.test(name)) {
            markers.push({ label: name, coords: ll, icon: ptMatchers[j].icon, element: el[i] });
            break;
          }
        }
      }
      _ = el[i].getElementsByTagNameNS('*', 'hr');
      if (_.length > 0) {
        ll.meta.hr = parseInt(_[0].textContent);
        this._info.hr._points.push([this._info.length, ll.meta.hr]);
        this._info.hr._total += ll.meta.hr;
      }

      _ = el[i].getElementsByTagNameNS('*', 'cad');
      if (_.length > 0) {
        ll.meta.cad = parseInt(_[0].textContent);
        this._info.cad._points.push([this._info.length, ll.meta.cad]);
        this._info.cad._total += ll.meta.cad;
      }

      _ = el[i].getElementsByTagNameNS('*', 'atemp');
      if (_.length > 0) {
        ll.meta.atemp = parseInt(_[0].textContent);
        this._info.atemp._points.push([this._info.length, ll.meta.atemp]);
        this._info.atemp._total += ll.meta.atemp;
      }

      if (ll.meta.ele > this._info.elevation.max) {
        this._info.elevation.max = ll.meta.ele;
      }

      if (ll.meta.ele < this._info.elevation.min) {
        this._info.elevation.min = ll.meta.ele;
      }

      this._info.elevation._points.push([this._info.length, ll.meta.ele]);
      this._info.duration.end = ll.meta.time;

      if (last_ll != null) {
        var delta_v = delta[i].delta_v; // delta vertical movement (signed)
        var distance_tot = delta[i].distance_tot; // total movement (always positive)
        var elapsed_time = delta[i].elapsed_time; // elapsed time from the previous point (milliseconds)

        // compute the slope of a segment of 30 meters centered on the current point
        var segment_limit = 30.0; // segment

        // previous half segment
        var segment_dh = 0.0;
        var segment_dv = 0.0;
        var segment_sum = segment_limit / 2;
        var prev_i = i; // previous position starting from current point
        for (var j = 0; segment_sum > 0.0; j++) {
            // early exit
            if (prev_i <= 0 || j > 40)
                break;
            // add the previous point
            segment_dh += delta[prev_i].distance_h;
            segment_dv += delta[prev_i].delta_v;
            segment_sum -= delta[prev_i].distance_tot;
            --prev_i;
        }

        // following half segment
        segment_sum = segment_limit / 2;
        var next_i = i + 1; // next position
        for (var j = 0; segment_sum > 0.0; j++) {
            // early exit
            if (next_i >= el.length || j > 40)
                break;
            // add the following point
            segment_dh += delta[next_i].distance_h;
            segment_dv += delta[next_i].delta_v;
            segment_sum -= delta[next_i].distance_tot;
            ++next_i;
        }

        // store the slope in the "alt" field
        try {
          ll.alt = Math.floor(segment_dv / segment_dh * 100);
        } catch (err) {
          ll.alt = last_ll.alt; // for division by 0
        }

        // increase the distance
        this._info.length += distance_tot;

        // increase the elevation
        if (delta_v > 0) {
          this._info.elevation.gain += delta_v;
        } else {
          this._info.elevation.loss -= delta_v;
        }

        // increase the duration (milliseconds)
        this._info.duration.total += elapsed_time;


        // compute the speed if the elapsed time is big (meter/sec)
        var speed_ms = 0;
        if (elapsed_time >= options.max_point_interval) {
          speed_ms = distance_tot * 1000.0 / elapsed_time;
        }

        // increase the moving time (milliseconds). 1ms is 3.6km/h
        if (elapsed_time < options.max_point_interval || speed_ms > 1) {
          this._info.duration.moving += elapsed_time;
        }
      } else {
        // setup the initial point
        ll.alt = 0.0;
        if (this._info.duration.start == null) {
          this._info.duration.start = ll.meta.time;
        }
      }

      last_ll = ll;
      coords.push(ll);
    }

    // check for gpx_style styling extension
    var polyline_options = this._merge_objs(_DEFAULT_POLYLINE_OPTS, {});
    var e = line.getElementsByTagNameNS(_GPX_STYLE_NS, 'line');
    if (e.length > 0) {
      var _ = e[0].getElementsByTagName('color');
      if (_.length > 0) polyline_options.color = '#' + _[0].textContent;
      var _ = e[0].getElementsByTagName('opacity');
      if (_.length > 0) polyline_options.opacity = _[0].textContent;
      var _ = e[0].getElementsByTagName('weight');
      if (_.length > 0) polyline_options.weight = _[0].textContent;
      var _ = e[0].getElementsByTagName('linecap');
      if (_.length > 0) polyline_options.lineCap = _[0].textContent;
    }

    // add track
    var l;
    if (options.polyline_options.slope) {
      if (options.polyline_options.force_renderer != null)
        l = new L.hotline_force_renderer(options.polyline_options.force_renderer, coords, this._merge_objs(polyline_options, options.polyline_options));
      else
        l = new L.hotline(coords, this._merge_objs(polyline_options, options.polyline_options));
    } else
      l = new L.Polyline(coords, this._merge_objs(polyline_options, options.polyline_options));
    this.fire('addline', { line: l, element: line });
    layers.push(l);

    if (options.marker_options.startIcon || options.marker_options.startIconUrl) {
      // add start pin
      var marker = new L.Marker(coords[0], {
        clickable: options.marker_options.clickable,
        icon: options.marker_options.startIcon || new L.GPXTrackIcon({iconUrl: options.marker_options.startIconUrl})
      });
      this.fire('addpoint', { point: marker, point_type: 'start', element: el[0] });
      layers.push(marker);
    }

    if (options.marker_options.endIcon || options.marker_options.endIconUrl) {
      // add end pin
      var marker = new L.Marker(coords[coords.length-1], {
        clickable: options.marker_options.clickable,
        icon: options.marker_options.endIcon || new L.GPXTrackIcon({iconUrl: options.marker_options.endIconUrl})
      });
      this.fire('addpoint', { point: marker, point_type: 'end', element: el[el.length-1] });
      layers.push(marker);
    }

    // add named markers
    for (var i = 0; i < markers.length; i++) {
      var marker = new L.Marker(markers[i].coords, {
        clickable: options.marker_options.clickable,
        title: markers[i].label,
        icon: markers[i].icon
      });
      this.fire('addpoint', { point: marker, point_type: 'label', element: markers[i].element });
      layers.push(marker);
    }

    return layers;
  },

  /*
   * From http://www.movable-type.co.uk/scripts/latlong.html
   * This uses the 'haversine' formula to calculate the great-circle distance between two
   * points - that is, the shortest distance over the earth's surface - giving an
   * 'as-the-crow-flies' distance between the points
   * (ignoring any hills they fly over, of course!).
   */
  _dist2d: function(a, b) {
    var R = 6371000; /* earth radius */
    var dLat = this._deg2rad(b.lat - a.lat);
    var dLon = this._deg2rad(b.lng - a.lng);
    var r = Math.sin(dLat/2) * Math.sin(dLat/2)
          + Math.cos(this._deg2rad(a.lat)) * Math.cos(this._deg2rad(b.lat)) * Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1-r));
    var d = R * c;
    return d;
  },

  _dist3d: function(a, b) {
    var planar = this._dist2d(a, b);
    var height = Math.abs(b.meta.ele - a.meta.ele);
    return Math.sqrt(Math.pow(planar, 2) + Math.pow(height, 2));
  },

  _deg2rad: function(deg) {
    return deg * Math.PI / 180;
  }
});

if (typeof module === 'object' && typeof module.exports === 'object') {
  module.exports = L;
} else if (typeof define === 'function' && define.amd) {
  define(L);
}
(function () {

L.Control.FullScreen = L.Control.extend({
	options: {
		position: 'topleft',
		title: 'Full Screen',
		titleCancel: 'Exit Full Screen',
		forceSeparateButton: false,
		forcePseudoFullscreen: false,
		fullscreenElement: false
	},
	
	onAdd: function (map) {
		var className = 'leaflet-control-zoom-fullscreen', container, content = '';
		
		if (map.zoomControl && !this.options.forceSeparateButton) {
			container = map.zoomControl._container;
		} else {
			container = L.DomUtil.create('div', 'leaflet-bar');
		}
		
		if (this.options.content) {
			content = this.options.content;
		} else {
			className += ' fullscreen-icon';
		}

		this._createButton(this.options.title, className, content, container, this.toggleFullScreen, this);

		this._map.on('enterFullscreen exitFullscreen', this._toggleTitle, this);

		return container;
	},
	
	_createButton: function (title, className, content, container, fn, context) {
		this.link = L.DomUtil.create('a', className, container);
		this.link.href = '#';
		this.link.title = title;
		this.link.innerHTML = content;

		L.DomEvent
			.addListener(this.link, 'click', L.DomEvent.stopPropagation)
			.addListener(this.link, 'click', L.DomEvent.preventDefault)
			.addListener(this.link, 'click', fn, context);
		
		L.DomEvent
			.addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
			.addListener(container, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
			.addListener(container, fullScreenApi.fullScreenEventName, this._handleFullscreenChange, context);
		
		L.DomEvent
			.addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.stopPropagation)
			.addListener(document, fullScreenApi.fullScreenEventName, L.DomEvent.preventDefault)
			.addListener(document, fullScreenApi.fullScreenEventName, this._handleFullscreenChange, context);

		return this.link;
	},
	
	toggleFullScreen: function () {
		var map = this._map;
		map._exitFired = false;
		if (map._isFullscreen) {
			if (fullScreenApi.supportsFullScreen && !this.options.forcePseudoFullscreen) {
				fullScreenApi.cancelFullScreen();
			} else {
				L.DomUtil.removeClass(this.options.fullscreenElement ? this.options.fullscreenElement : map._container, 'leaflet-pseudo-fullscreen');
			}
			map.fire('exitFullscreen');
			map._exitFired = true;
			map._isFullscreen = false;
		}
		else {
			if (fullScreenApi.supportsFullScreen && !this.options.forcePseudoFullscreen) {
				fullScreenApi.requestFullScreen(this.options.fullscreenElement ? this.options.fullscreenElement : map._container);
			} else {
				L.DomUtil.addClass(this.options.fullscreenElement ? this.options.fullscreenElement : map._container, 'leaflet-pseudo-fullscreen');
			}
			map.fire('enterFullscreen');
			map._isFullscreen = true;
		}
	},
	
	_toggleTitle: function () {
		this.link.title = this._map._isFullscreen ? this.options.title : this.options.titleCancel;
	},
	
	_handleFullscreenChange: function () {
		var map = this._map;
		map.invalidateSize();
		if (!fullScreenApi.isFullScreen() && !map._exitFired) {
			map.fire('exitFullscreen');
			map._exitFired = true;
			map._isFullscreen = false;
		}
	}
});

L.Map.addInitHook(function () {
	if (this.options.fullscreenControl) {
		this.fullscreenControl = L.control.fullscreen(this.options.fullscreenControlOptions);
		this.addControl(this.fullscreenControl);
	}
});

L.control.fullscreen = function (options) {
	return new L.Control.FullScreen(options);
};

/* 
Native FullScreen JavaScript API
-------------
Assumes Mozilla naming conventions instead of W3C for now

source : http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/

*/

	var 
		fullScreenApi = { 
			supportsFullScreen: false,
			isFullScreen: function () { return false; }, 
			requestFullScreen: function () {}, 
			cancelFullScreen: function () {},
			fullScreenEventName: '',
			prefix: ''
		},
		browserPrefixes = 'webkit moz o ms khtml'.split(' ');
	
	// check for native support
	if (typeof document.exitFullscreen !== 'undefined') {
		fullScreenApi.supportsFullScreen = true;
	} else {
		// check for fullscreen support by vendor prefix
		for (var i = 0, il = browserPrefixes.length; i < il; i++) {
			fullScreenApi.prefix = browserPrefixes[i];
			if (typeof document[fullScreenApi.prefix + 'CancelFullScreen'] !== 'undefined') {
				fullScreenApi.supportsFullScreen = true;
				break;
			}
		}
		if (typeof document['msExitFullscreen'] !== 'undefined') {
			fullScreenApi.prefix = 'ms';
			fullScreenApi.supportsFullScreen = true;
		}
	}
	
	// update methods to do something useful
	if (fullScreenApi.supportsFullScreen) {
		if (fullScreenApi.prefix === 'ms') {
			fullScreenApi.fullScreenEventName = 'MSFullscreenChange';
		} else {
			fullScreenApi.fullScreenEventName = fullScreenApi.prefix + 'fullscreenchange';
		}
		fullScreenApi.isFullScreen = function () {
			switch (this.prefix) {
				case '':
					return document.fullscreen;
				case 'webkit':
					return document.webkitIsFullScreen;
				case 'ms':
					return document.msFullscreenElement;
				default:
					return document[this.prefix + 'FullScreen'];
			}
		};
		fullScreenApi.requestFullScreen = function (el) {
			switch (this.prefix) {
				case '':
					return el.requestFullscreen();
				case 'ms':
					return el.msRequestFullscreen();
				default:
					return el[this.prefix + 'RequestFullScreen']();
			}
		};
		fullScreenApi.cancelFullScreen = function () {
			switch (this.prefix) {
				case '':
					return document.exitFullscreen();
				case 'ms':
					return document.msExitFullscreen();
				default:
					return document[this.prefix + 'CancelFullScreen']();
			}
		};
	}

	// jQuery plugin
	if (typeof jQuery !== 'undefined') {
		jQuery.fn.requestFullScreen = function () {
			return this.each(function () {
				var el = jQuery(this);
				if (fullScreenApi.supportsFullScreen) {
					fullScreenApi.requestFullScreen(el);
				}
			});
		};
	}

	// export api
	window.fullScreenApi = fullScreenApi;
})();
(function (window, document, undefined) {
    L.Control.Custom = L.Control.extend({
        version: '1.0.1',
        options: {
            position: 'topright',
            id: '',
            title: '',
            classes: '',
            content: '',
            style: {},
            datas: {},
            events: {},
        },
        container: null,
        onAdd: function (map) {
            this.container = L.DomUtil.create('div');
            this.container.id = this.options.id;
            this.container.title = this.options.title;
            this.container.className = this.options.classes;
            this.container.innerHTML = this.options.content;

            for (var option in this.options.style)
            {
                this.container.style[option] = this.options.style[option];
            }

            for (var data in this.options.datas)
            {
                this.container.dataset[data] = this.options.datas[data];
            }


            /* Prevent click events propagation to map */
            L.DomEvent.disableClickPropagation(this.container);

            /* Prevent right click event propagation to map */
            L.DomEvent.on(this.container, 'contextmenu', function (ev)
            {
                L.DomEvent.stopPropagation(ev);
            });

            /* Prevent scroll events propagation to map when cursor on the div */
            L.DomEvent.disableScrollPropagation(this.container);

            for (var event in this.options.events)
            {
                L.DomEvent.on(this.container, event, this.options.events[event], this.container);
            }

            return this.container;
        },

        onRemove: function (map) {
            for (var event in this.options.events)
            {
                L.DomEvent.off(this.container, event, this.options.events[event], this.container);
            }
        },
    });

    L.control.custom = function (options) {
        return new L.Control.Custom(options);
    };

}(window, document));/*
 * MTB Bergamo (c) by Andrea Mazzoleni 2022
 *
 * MTB Bergamo is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 */

/*
\u00E0 a
\u00E8 e
\u00EC i
\u00F2 o
\u00F9 u
*/

var TRACKS = [
//
// COLLI DI BERGAMO
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: '712 Nord', kind: 'down', file: 'Colli_712Nord.gpx', link: '2019/03/roccolone-nord', elevation_gain: 2, elevation_loss: 56 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: '712 Sud', kind: 'down', file: 'Colli_712Sud.gpx', link: '2019/01/roccolone-sud', elevation_gain: 0, elevation_loss: 63 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: '713 / Partigiano', kind: 'down', file: 'Colli_713Partigiano.gpx', link: '2019/03/roccolone-nord', elevation_gain: 0, elevation_loss: 93 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: 'Roccolone Nord', kind: 'down', file: 'Colli_RoccoloneNord.gpx', link: '2019/03/roccolone-nord', elevation_gain: 0, elevation_loss: 71 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'colli', name: '910 / Alpini', kind: 'down', file: 'Colli_910.gpx', link: '2018/12/910', elevation_gain: 8, elevation_loss: 151 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Gussa Est', kind: 'down', file: 'Colli_GussaEst.gpx', link: '2019/01/monte-gussa', elevation_gain: 2, elevation_loss: 60 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Gussa Nord', kind: 'down', file: 'Colli_GussaNord.gpx', link: '2019/01/monte-gussa', elevation_gain: 0, elevation_loss: 121 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Gussa Ovest', kind: 'down', file: 'Colli_GussaOvest.gpx', link: '2019/01/monte-gussa', elevation_gain: 0, elevation_loss: 60 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'colli,gussa', name: 'Gussa Sud', kind: 'down', file: 'Colli_GussaSud.gpx', link: '2019/01/monte-gussa', elevation_gain: 0, elevation_loss: 53 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: 'ExPistino', kind: 'down', file: 'Colli_ExPistino.gpx', link: '2019/03/roccolone-nord', elevation_gain: 0, elevation_loss: 82 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Pistino Downhill', kind: 'down', file: 'Colli_PistinoDownhill.gpx', link: '2019/03/pistino-downhill', elevation_gain: 0, elevation_loss: 41 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'colli', name: 'Roccolone', kind: 'down', file: 'Colli_Roccolone.gpx', link: '2018/12/roccolone', elevation_gain: 20, elevation_loss: 130 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Roccolone Sud', kind: 'down', file: 'Colli_RoccoloneSud.gpx', link: '2019/01/roccolone-sud', elevation_gain: 0, elevation_loss: 72 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Gradoni', kind: 'down', file: 'Colli_Gradoni.gpx', link: '2019/01/roccolone-sud', elevation_gain: 0, elevation_loss: 33 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'colli,allegrezza', name: 'Allegrezza', kind: 'down', file: 'Colli_Allegrezza.gpx', link: '2018/12/allegrezza', elevation_gain: 0, elevation_loss: 31 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,allegrezza', name: 'Allegrezza Sud', kind: 'down', file: 'Colli_AllegrezzaSud.gpx', link: '2018/12/allegrezza', elevation_gain: 18, elevation_loss: 47 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_sud', name: 'Torre', kind: 'down', file: 'Colli_Torre.gpx', link: '2019/01/roccolone-sud', elevation_gain: 2, elevation_loss: 109 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord', name: 'Fogna', kind: 'down', file: 'Colli_Fogna.gpx', link: '2024/10/fogna', elevation_gain: 0, elevation_loss: 80 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli', name: 'Salita da Astino', kind: 'up', file: 'Colli_SalitaAstino.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 100, elevation_loss: 13 },
// removed as vietata
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Salita al Monte Gussa', kind: 'up', file: 'Colli_SalitaGussaSud.gpx', link: '2019/01/monte-gussa', elevation_gain: 76, elevation_loss: 5 },
*/
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,gussa', name: 'Salita al Monte Gussa', kind: 'up', file: 'Colli_SalitaGussaEst_EBIKE.gpx', link: '2019/01/monte-gussa', elevation_gain: 72, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli', name: 'Salita dalla Madonna del Bosco', kind: 'up', file: 'Colli_SalitaMadonnaDelBosco.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 203, elevation_loss: 13 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord,roccolone_sud', name: 'Salita dal Roccolone', kind: 'up', file: 'Colli_SalitaRoccolone.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 117, elevation_loss: 15 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'colli,roccolone_nord,roccolone_sud', name: 'Salita al Colle Roccolone', kind: 'up', file: 'Colli_SalitaCimaRoccolone.gpx', link: '2018/12/salite-colli-bergamo', elevation_gain: 15, elevation_loss: 0 },

//
// BERGAMO
//
{ vote: 3, rate: 0, rate_max: 1, cycle: 0, zone: 'colli', name: 'Giro Parco del Brembo', kind: 'trek', file: 'Bergamo_GiroParcoDelBrembo.gpx', link: '2024/04/brembo', elevation_gain: 160, elevation_loss: 129 },
{ vote: 3, rate: 0, rate_max: 1, cycle: 0, zone: 'colli', name: 'Giro del Romanico', kind: 'trek', file: 'Bergamo_GiroDelRomanico.gpx', link: '2024/04/romanico', elevation_gain: 120, elevation_loss: 125 },

//
// MARESANA E SORISOLE
//
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Albanesi / 532, San Rocco', kind: 'down', file: 'Maresana_Albanesi.gpx', link: '2019/02/532', elevation_gain: 0, elevation_loss: 243 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 1, zone: 'maresana', name: 'Vertigo / 604', kind: 'down', file: 'Maresana_604.gpx', link: '2018/11/604', elevation_gain: 0, elevation_loss: 328 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Bruna', kind: 'down', file: 'Maresana_Bruna.gpx', link: '2018/11/bruna', elevation_gain: 15, elevation_loss: 321 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'maresana', name: 'FarWest', kind: 'down', file: 'Maresana_FarWest.gpx', link: '2018/11/farwest', elevation_gain: 5, elevation_loss: 324 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Cowboy', kind: 'down', file: 'Maresana_Cowboy.gpx', link: '2023/02/cowboy', elevation_gain: 0, elevation_loss: 268 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Apache', kind: 'down', file: 'Maresana_Apache.gpx', link: '2023/03/apache', elevation_gain: 5, elevation_loss: 267 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Calvarola / Filoncino / 401', kind: 'down', file: 'Maresana_Filoncino.gpx', link: '2018/11/401-filoncino', elevation_gain: 2, elevation_loss: 301 },
{ vote: 2, rate: 2, rate_max: 2, cycle: 0, zone: 'maresana', name: 'Calvarola 2', kind: 'down', file: 'Maresana_Calvarola2.gpx', elevation_gain: 0, elevation_loss: 140 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Filone Easy', kind: 'down', file: 'Maresana_FiloneEasy.gpx', link: '2018/11/filone-easy', elevation_gain: 2, elevation_loss: 174 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Colle Alto, Magnati', kind: 'down', file: 'Maresana_ColleAltoMagnati.gpx', link: '2021/03/colle-alto-magnati', elevation_gain: 0, elevation_loss: 186 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Filone / Agostini / 533', kind: 'down', file: 'Maresana_Filone.gpx', link: '2018/11/533-filone', elevation_gain: 0, elevation_loss: 209 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Colle Alto, Tremana', kind: 'down', file: 'Maresana_Tremana.gpx', link: '2020/12/colle-alto-tremana', elevation_gain: 0, elevation_loss: 247 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Scabla', kind: 'down', file: 'Maresana_Scabla.gpx', link: '2021/04/scabla', elevation_gain: 0, elevation_loss: 150 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Veloce / Illegale / 533', kind: 'down', file: 'Maresana_Illegale.gpx', link: '2018/11/533-illegale', elevation_gain: 0, elevation_loss: 119 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Rosciano', kind: 'down', file: 'Maresana_Rosciano.gpx', link: '2018/11/rosciano', elevation_gain: 0, elevation_loss: 159 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'maresana', name: 'San Rocco / 402', kind: 'down', file: 'Maresana_SanRocco.gpx', link: '2018/11/402-san-rocco', elevation_gain: 85, elevation_loss: 181 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Tornantini / 409', kind: 'down', file: 'Maresana_Tornantini.gpx', link: '2018/11/tornantini', elevation_gain: 0, elevation_loss: 169 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana, legnaia', name: 'Legnaia', kind: 'down', file: 'Maresana_Legnaia.gpx', link: '2018/11/legnaia', elevation_gain: 0, elevation_loss: 289 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'legnaia', name: 'Legnaia Sud', kind: 'down', file: 'Maresana_LegnaiaSud.gpx', link: '2018/11/legnaia', elevation_gain: 10, elevation_loss: 337 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Birondina', kind: 'down', file: 'Maresana_Birondina.gpx', link: '2019/02/birondina', elevation_gain: 5, elevation_loss: 259 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana, bassa_seriana', name: '532A, Olera', kind: 'down', file: 'Maresana_532A_Olera.gpx', link: '2019/03/532a-olera', elevation_gain: 4, elevation_loss: 235 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Flying Dutchman', kind: 'down', file: 'Maresana_FlyingDutchman.gpx', link: '2019/01/flying-dutchman', elevation_gain: 0, elevation_loss: 193 },
{ vote: 3, rate: 1, rate_max: 3, cycle: 0, zone: 'maresana', name: 'Gaito', kind: 'down', file: 'Maresana_Gaito.gpx', link: '2021/03/gaito', elevation_gain: 1, elevation_loss: 199 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole, pisgiu_dh', name: 'Pista DH', kind: 'down', file: 'Sorisole_PistaDH.gpx', link: '2018/12/pista-downhill', elevation_gain: 3, elevation_loss: 308 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 0, zone: 'sorisole, pisgiu_dh', name: 'Pista DH Hard', kind: 'down', file: 'Sorisole_PistaDHHard.gpx', link: '2018/12/pista-downhill', elevation_gain: 1, elevation_loss: 288 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'maresana, sorisole, 229', name: 'Catene / 229', kind: 'down', file: 'Sorisole_Catene229.gpx', link: '2018/12/229', elevation_gain: 0, elevation_loss: 328 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: '229', name: 'Premerlino, 229', kind: 'down', file: 'Sorisole_Premerlino229.gpx', link: '2018/12/229', elevation_gain: 0, elevation_loss: 180 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole, galusu', name: 'Galus\u00F9 Ovest', kind: 'down', file: 'Sorisole_GalusuOvest.gpx', link: '2018/12/galusu', elevation_gain: 0, elevation_loss: 81 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole, galusu', name: 'Galus\u00F9 Sud', kind: 'down', file: 'Sorisole_GalusuSud.gpx', link: '2018/12/galusu', elevation_gain: 0, elevation_loss: 75 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'sorisole, galusu', name: 'Galus\u00F9', kind: 'down', file: 'Sorisole_Galusu.gpx', link: '2018/12/galusu', elevation_gain: 0, elevation_loss: 178 },
{ vote: 4, rate: 1, rate_max: 3, cycle: 0, zone: 'sorisole', name: 'Canto Alto, 507, Prati Parini, 113, Sedrina', kind: 'down', file: 'Sorisole_CantoAltoPratiPariniSedrina.gpx', link: '2019/06/canto-alto-prati-parini-sedrina', elevation_gain: 24, elevation_loss: 825 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'sorisole', name: 'Canto Alto, 220, Forcella di Cambl\u00EC, 113, Pisgiu, Sorisole', kind: 'down', file: 'Sorisole_CantoAlto220Sorisole.gpx', link: '2019/06/canto-alto-forcella-di-cambli-pisgiu', elevation_gain: 32, elevation_loss: 854 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Sorisole, Pistino Scuola MTB', kind: 'down', file: 'Sorisole_SorisolePistinoScuolaMTB.gpx', link: '2019/06/pistino-scuola-mtb-sorisole', elevation_gain: 20, elevation_loss: 122 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 0, zone: 'sorisole', name: 'Canto Alto, Canto Basso, Catene, Pista DH', kind: 'down', file: 'Sorisole_CantoAltoBassoCatenePistaDH.gpx', link: '2023/04/canto-alto-catene-dh', elevation_gain: 214, elevation_loss: 1048 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'sorisole, giongo', name: 'Giongo', kind: 'down', file: 'Sorisole_Giongo.gpx', link: '2023/04/giongo', elevation_gain: 4, elevation_loss: 100 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'sorisole, giongo', name: 'Valle del Giongo, Monte Bastia', kind: 'down', file: 'Sorisole_ValleGiongoMonteBastia.gpx', link: '2023/04/giongo', elevation_gain: 399, elevation_loss: 745 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'sorisole', name: 'Canto Alto, Forcellino, 220, Pista DH', kind: 'down', file: 'Sorisole_CantoAltoForcellino220PistaDH.gpx', link: '2023/05/canto-alto-forcellino', elevation_gain: 123, elevation_loss: 957 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Forcellino, Forcella di Rua, Giongo Hard', kind: 'down', file: 'Sorisole_ForcellinoForcellaDiRuaGiongoHard.gpx', link: '2024/04/giongo-hard', elevation_gain: 313, elevation_loss: 949 },

// unlisted as used only for connection in sorisole
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Sorisole, Ponteranica Alta', kind: 'down', file: 'Sorisole_SorisolePonteranicaAlta.gpx', elevation_gain: 2, elevation_loss: 54 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Ranica, Monte Zuccone', kind: 'up', file: 'Maresana_SalitaRanicaZuccone_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 437, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Ponteranica, Croce di Ranica', kind: 'up', file: 'Maresana_SalitaPonteranica.gpx', link: '2018/11/salite-maresana', elevation_gain: 446, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Colle Alto', kind: 'up', file: 'Maresana_SalitaColleAlto_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 44, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana, sorisole', name: 'Salita Ponteranica Alta', kind: 'up', file: 'Maresana_SalitaPonteranicaAlta.gpx', link: '2018/11/salite-maresana', elevation_gain: 304, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Salita Olera', kind: 'up', file: 'Maresana_SalitaOlera.gpx', link: '2018/11/salite-maresana', elevation_gain: 196, elevation_loss: 33 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana, 229', name: 'Trasferimento Ca Del Lacc, Forcella Del Sorriso', kind: 'up', file: 'Maresana_CaDelLaccForcellaDelSorriso.gpx', link: '2018/11/salite-maresana', elevation_gain: 97, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana, sorisole, 229', name: 'Trasferimento Premerlino, Ponteranica Alta', kind: 'up', file: 'Maresana_PremerlinoPonteranicaAlta.gpx', link: '2018/11/salite-maresana', elevation_gain: 55, elevation_loss: 87 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'maresana', name: 'Trasferimento Castello della Moretta, Maresana', kind: 'up', file: 'Maresana_MorettaMaresana.gpx', link: '2018/11/salite-maresana', elevation_gain: 17, elevation_loss: 40 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Forcella di Rua', kind: 'up', file: 'Sorisole_SalitaForcellaDiRua.gpx', link: '2019/06/salite-sorisole', elevation_gain: 369, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'pisgiu_dh', name: 'Salita Pontesecco, Pista DH', kind: 'up', file: 'Sorisole_SalitaPonteseccoPistaDH.gpx', link: '2019/06/salite-sorisole', elevation_gain: 376, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'galusu', name: 'Salita Pontesecco, Galus\u00F9', kind: 'up', file: 'Sorisole_SalitaPonteseccoGalusu_EBIKE.gpx', link: '2018/12/galusu', elevation_gain: 445, elevation_loss: 8 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Galus\u00F9', kind: 'up', file: 'Sorisole_SalitaGalusu_EBIKE.gpx', link: '2019/06/salite-sorisole', elevation_gain: 80, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'sorisole', name: 'Salita Sedrina, Prati Parini, Canto Alto', kind: 'up', file: 'Sorisole_SalitaSedrinaCantoAlto_EBIKE.gpx', link: '2023/04/canto-alto-catene-dh', elevation_gain: 902, elevation_loss: 74 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'sorisole', name: 'Salita Ponti di Sedrina, Cava, Canto Alto', kind: 'up', file: 'Sorisole_SalitaPontiSedrinaCavaCantoAlto_EBIKE.gpx', link: '2023/05/canto-alto-forcellino', elevation_gain: 1068, elevation_loss: 209 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "10 minuti Canto Basso, 30 minuti Canto Alto", zone: 'sorisole', name: 'Salita Ponteranica, Canto Alto', kind: 'up', file: 'Sorisole_SalitaPonteranicaCantoAlto.gpx', link: '2019/06/canto-alto-forcella-di-cambli-pisgiu', elevation_gain: 880, elevation_loss: 41 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "5 minuti Canto Basso, 30 minuti Canto Alto", zone: 'sorisole', name: 'Salita Nese, Canto Basso, Canto Alto', kind: 'up', file: 'Sorisole_SalitaNeseCantoAlto.gpx', link: '2019/06/canto-alto-prati-parini-sedrina', elevation_gain: 884, elevation_loss: 32 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole, giongo', name: 'Salita Petosino, Forcella di Rua', kind: 'up', file: 'Sorisole_SalitaPetosinoForcellaDiRua_EBIKE.gpx', link: '2023/04/giongo', elevation_gain: 355, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'sorisole', name: 'Salita Petosino, Ca del Latte, Forcellino', kind: 'up', file: 'Sorisole_SalitaPetosinoForcellaSorrisoForcellino_EBIKE.gpx', link: '2024/04/giongo-hard', elevation_gain: 707, elevation_loss: 107 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Ranica, Pozza del Colle', kind: 'up', file: 'Maresana_SalitaRanicaPozzaDelColle_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 422, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'legnaia', name: 'Salita Legnaia, Ca Del Lac', kind: 'up', file: 'Maresana_SalitaLegnaiaCaDelLac_EBIKE.gpx', link: '2018/11/salite-maresana', elevation_gain: 366, elevation_loss: 75 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 30, zone: '', name: 'Salita Canto Basso, Canto Alto', kind: 'up', file: 'Sorisole_SalitaCantoBassoCantoAlto.gpx', link: '2019/06/salite-sorisole', elevation_gain: 246, elevation_loss: 7 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '229', name: 'Trasferimento da Catene al Pisgi\u00F9', kind: 'up', file: 'Sorisole_CatenePisgiu_EBIKE.gpx', link: '2019/06/salite-sorisole', elevation_gain: 98, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Trasferimento alla Pista Downhill', kind: 'up', file: 'Sorisole_203.gpx', link: '2019/06/salite-sorisole', elevation_gain: 39, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 10, zone: '', name: 'Salita Forcella del Sorriso, Canto Basso', kind: 'up', file: 'Sorisole_SalitaForcellaDelSorrisoCantoBasso.gpx', link: '2019/06/salite-sorisole', elevation_gain: 147, elevation_loss: 3 },

//
// IMAGNA NORD
//
// downhill
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'imagna', name: 'Vetta Resegone, Brumano', kind: 'down', file: 'Imagna_ResegoneBrumano.gpx', link: '2021/09/vetta-resegone', elevation_gain: 7, elevation_loss: 936 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'locatello', name: 'Bustoseta, Selino', kind: 'down', file: 'Imagna_BustosetaSelino.gpx', link: '2019/07/locatello', elevation_gain: 1, elevation_loss: 150 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'locatello', name: 'Buonanome, Selino', kind: 'down', file: 'Imagna_BuonanomeSelino.gpx', link: '2019/07/locatello', elevation_gain: 2, elevation_loss: 132 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'locatello', name: 'Coegia, Selino', kind: 'down', file: 'Imagna_CoegiaSelino.gpx', link: '2019/07/locatello', elevation_gain: 3, elevation_loss: 134 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Passo Porta, 586, Ca Piatone, Ca Prospero, Selino', kind: 'down', file: 'Imagna_PassoPorta586CaPiatoneCaProsperoSelino.gpx', link: '2019/06/passo-porta', elevation_gain: 129, elevation_loss: 796 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna', name: 'Cascine Zucchero, Pramagnone, Ponte Vanzarolo, Ca Piatone, Campi, Selino', kind: 'down', file: 'Imagna_PramagnoneCaPiatoneCampiSelino.gpx', link: '2019/07/pramagnone', elevation_gain: 16, elevation_loss: 702 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, rota', name: 'Rota d\'Imagna, Fucine, Selino', kind: 'down', file: 'Imagna_RotaFucineSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 11, elevation_loss: 261 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'rota', name: 'Rota d\'Imagna, CaProspero, Selino', kind: 'down', file: 'Imagna_RotaCaProsperoSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 3, elevation_loss: 250 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'rota', name: 'Ca Piatone, Campi, Selino', kind: 'down', file: 'Imagna_CaPiatoneCampiSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 8, elevation_loss: 333 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'vanzarolo', name: 'Ponte Vanzarolo, CaPiatone', kind: 'down', file: 'Imagna_VanzaroloCaPiatone.gpx', link: '2019/07/vanzarolo', elevation_gain: 6, elevation_loss: 81 },
{ vote: 1, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna, vanzarolo', name: 'Ponte Vanzarolo, Chignolo', kind: 'down', file: 'Imagna_VanzaroloChignolo.gpx', link: '2019/07/vanzarolo', elevation_gain: 6, elevation_loss: 214 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, vanzarolo', name: 'Ca Piatone, Chignolo', kind: 'down', file: 'Imagna_CaPiatoneChignolo.gpx', link: '2019/07/vanzarolo', elevation_gain: 31, elevation_loss: 165 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, rota', name: 'Ca Piatone, Foppe, Selino', kind: 'down', file: 'Imagna_CaPiatoneFoppeSelino.gpx', link: '2019/06/rota-imagna', elevation_gain: 10, elevation_loss: 342 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: '', name: 'Frontale, Foppe, Enel', kind: 'down', file: 'Imagna_FrontaleFoppeEnel.gpx', link: '2019/06/rota-imagna', elevation_gain: 2, elevation_loss: 146 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'vanzarolo', name: 'Chignolo, Frontale, Foppe, Enel', kind: 'down', file: 'Imagna_ChignoloFrontaleFoppeEnel.gpx', link: '2019/07/vanzarolo', elevation_gain: 53, elevation_loss: 155 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'vanzarolo', name: 'Chignolo, Enel', kind: 'down', file: 'Imagna_ChignoloEnel.gpx', link: '2019/07/vanzarolo', elevation_gain: 0, elevation_loss: 96 },
{ vote: 3, rate: 2, rate_max: 3, cycle: "1 minuto nella salita ai Canti", zone: 'imagna,canti', name: 'Zuc De Valmana, Canti, 579A, Tre Faggi, Fuipiano', kind: 'down', file: 'Imagna_ZucDeValmanaCanti579ATreFaggiFuipiano.gpx', link: '2020/02/canti', elevation_gain: 189, elevation_loss: 687 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'canti', name: 'Canti, Freeride, Tre Faggi', kind: 'down', file: 'Imagna_CantiFreerideTreFaggi.gpx', link: '2020/02/canti', elevation_gain: 96, elevation_loss: 259 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 3, zone: 'canti', name: 'Canti, 571, Tre Faggi', kind: 'down', file: 'Imagna_Canti571TreFaggi.gpx', link: '2020/02/canti', elevation_gain: 30, elevation_loss: 179 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 1, zone: 'imagna', name: 'Passo del Palio, Orso, Pagafone, Coegia', kind: 'down', file: 'Imagna_PassoPalioOrsoPagafoneCoegia.gpx', link: '2020/06/orso', elevation_gain: 110, elevation_loss: 1045 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna,costa_del_palio', name: 'Costa del Palio, Forcella di Valmana, 579B, Fuipiano', kind: 'down', file: 'Imagna_CostaDelPalio579B_EBIKE.gpx', link: '2019/04/costa-del-palio-fuipiano', elevation_gain: 150, elevation_loss: 446 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna,costa_del_palio', name: 'Passo di Valbona, 579B, Prati, Fuipiano', kind: 'down', file: 'Imagna_PassoValbona579BPrati.gpx', link: '2019/04/costa-del-palio-fuipiano', elevation_gain: 32, elevation_loss: 432 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 1, zone: 'imagna', name: 'Passo Porta, 575, Valsecca, Scuderia, Mazzoleni, Selino', kind: 'down', file: 'Imagna_PassoPorta575ValseccaMazzoleniSelino.gpx', link: '2019/07/passo-porta-575-valsecca', elevation_gain: 230, elevation_loss: 911 },
{ vote: 3, rate: 2, rate_max: 4, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 580, Disdiroli, Selino', kind: 'down', file: 'Imagna_TreFaggi580DisdiroliSelino.gpx', link: '2019/06/tre-faggi-580-disdiroli-selino', elevation_gain: 2, elevation_loss: 965 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 571, Selino Alto, Selino', kind: 'down', file: 'Imagna_TreFaggi571SelinoAlto.gpx', link: '2020/05/tre-faggi-571-selino-alto', elevation_gain: 49, elevation_loss: 1032 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 592E, Valle Brunone', kind: 'down', file: 'Imagna_TreFaggi592EBrunone.gpx', link: '2020/07/tre-faggi-valle-brunone', elevation_gain: 88, elevation_loss: 1120 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Tre Faggi, 581, Locatello, Selino', kind: 'down', file: 'Imagna_TreFaggi581Locatello.gpx', link: '2020/05/tre-faggi-581-locatello', elevation_gain: 29, elevation_loss: 1009 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Tre Faggi, Traverso Ovest, Fuipiano. Coegia, Selino', kind: 'down', file: 'Imagna_TreFaggiTraversoFuipianoCoegia.gpx', link: '2020/02/tre-faggi-traverso-ovest', elevation_gain: 63, elevation_loss: 1056 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Passo di Valbona, Sbarra di Brumano', kind: 'down', file: 'Imagna_PassoValbonaSbarra.gpx', link: '2019/05/zuc-de-valmana', elevation_gain: 0, elevation_loss: 285 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Passo del Palio, Sbarra di Brumano', kind: 'down', file: 'Imagna_PassoPalioSbarra.gpx', link: '2019/05/zuc-de-valmana', elevation_gain: 0, elevation_loss: 221 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Zuc de Valmana, Cresta, Passo del Palio', kind: 'down', file: 'Imagna_ZucDeValmanaCrestaPassoPalio.gpx', link: '2019/05/zuc-de-valmana', elevation_gain: 66, elevation_loss: 248 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 4, zone: 'imagna, taleggio', name: 'Passo del Palio, Selvano, Sorgente Enna, Piazzoli, Fuipiano', kind: 'down', file: 'Imagna_PalioSelvanoEnnaPiazzoliGrasselloFuipiano.gpx', link: '2022/04/sorgenti-enna', elevation_gain: 921, elevation_loss: 1200 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, taleggio', name: 'Passo del Palio, Foo di Valmana, Selvano, Morterone, Fuipiano', kind: 'down', file: 'Imagna_PalioFooValmanaSelvanoMorteroneFuipiano.gpx', link: '2022/04/foo-di-valmana', elevation_gain: 601, elevation_loss: 948 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, taleggio', name: 'Passo del Palio, Grandi Alberi, Morterone, Fuipiano', kind: 'down', file: 'Imagna_PalioGrandiAlberiFuipiano.gpx', link: '2022/03/grandi-alberi', elevation_gain: 594, elevation_loss: 966 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Forbesette, Morterone', kind: 'down', file: 'Imagna_PassoPalioForbesetteMorterone.gpx', link: '2020/12/morterone', elevation_gain: 67, elevation_loss: 321 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Forbesette, Morterone Nord', kind: 'down', file: 'Imagna_PassoPalioForbesetteMorteroneNord.gpx', link: '2020/12/morterone', elevation_gain: 104, elevation_loss: 339 },
{ vote: 3, rate: 1, rate_max: 3, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Passo del Palio, Freeride, Morterone', kind: 'down', file: 'Imagna_PassoPalioFreerideMorterone.gpx', link: '2020/12/morterone', elevation_gain: 1, elevation_loss: 286 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 45, zone: 'imagna', name: 'Anello del Resegone', kind: 'down', file: 'Imagna_AnelloResegone.gpx', link: '2020/08/anello-resegone', elevation_gain: 819, elevation_loss: 1021 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, taleggio', name: 'Passo del Palio, Forcella di Olino, Morterone, Fuipiano', kind: 'down', file: 'Imagna_ForcellaDiOlino.gpx', link: '2024/02/forcella-di-olino', elevation_gain: 662, elevation_loss: 968 },

// trek
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna', name: 'Sentiero della Cultura Casearia', kind: 'trek', file: 'Imagna_SentieroDellaCulturaCasearia_EBIKE.gpx', link: '2022/10/corna-casere', elevation_gain: 712, elevation_loss: 711 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 7, zone: 'imagna', name: 'Sentiero dei Giganti', kind: 'trek', file: 'Imagna_SentieroDeiGiganti_EBIKE.gpx', link: '2022/11/giganti', elevation_gain: 1336, elevation_loss: 1249 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 7, zone: 'imagna', name: 'Anello delle Contrade', kind: 'trek', file: 'Imagna_AnelloContrade_EBIKE.gpx', link: '2023/01/anello-contrade', elevation_gain: 830, elevation_loss: 802 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna', name: 'Antiche Tracce', kind: 'trek', file: 'Imagna_AnticheTracce_EBIKE.gpx', link: '2022/12/antiche-tracce', elevation_gain: 987, elevation_loss: 991 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 2, zone: 'imagna', name: 'Sentiero dei Ponti', kind: 'trek', file: 'Imagna_SentieroDeiPonti_EBIKE.gpx', link: '2022/11/ponti', elevation_gain: 321, elevation_loss: 317 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 3, zone: 'imagna', name: 'Sentiero del Castagno', kind: 'trek', file: 'Imagna_SentieroDelCastagno_EBIKE.gpx', link: '2022/12/castagno', elevation_gain: 300, elevation_loss: 284 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 2, zone: 'imagna', name: 'Sentiero dei Roccoli, dell\'Acqua e dei Borghi', kind: 'trek', file: 'Imagna_SentieroRoccoliAcquaBorghi.gpx', link: '2023/04/roncola-comunali', elevation_gain: 669, elevation_loss: 672 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: "45 minuti, ultimi 400m di dislivello a spalla", zone: 'imagna', name: 'Salita Stanga di Brumano, Vetta Resegone', kind: 'up', file: 'Imagna_SalitaBrumanoResegone.gpx', link: '2021/09/vetta-resegone', elevation_gain: 1000, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita dal Passo del Palio allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaPassoPalioZucDeValmana_EBIKE.gpx', link: '2020/02/canti', elevation_gain: 198, elevation_loss: 25 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Trasferimento dal Rifugio Resegone al Passo Porta', kind: 'up', file: 'Imagna_RifResegonePassoPorta.gpx', link: '2018/12/salite-imagna', elevation_gain: 42, elevation_loss: 184 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Trasferimento da Valsecca a Rota Imagna e a Locatello', kind: 'up', file: 'Imagna_ValseccaRotaLocatello.gpx', link: '2018/12/salite-imagna', elevation_gain: 142, elevation_loss: 258 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Brumano ai Pra d\'Alet', kind: 'up', file: 'Imagna_SalitaBrumanoPraDAlet_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 161, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Salita dalla Sbarra di Brumano al Palio', kind: 'up', file: 'Imagna_SalitaSbarraPalio_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 249, elevation_loss: 25 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Selino a Fuipiano e ai Tre Faggi', kind: 'up', file: 'Imagna_SalitaSelinoFuipianoTreFaggi.gpx', link: '2020/05/tre-faggi-571-selino-alto', elevation_gain: 957, elevation_loss: 8 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, taleggio, costa_del_palio', name: 'Salita (nuova) da Fuipiano, Capione al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCapionePalio_EBIKE.gpx', link: '2022/04/sorgenti-enna', elevation_gain: 363, elevation_loss: 39 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, taleggio', name: 'Salita (nuova) da Fuipiano al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCimaPalio_EBIKE.gpx', link: '2022/03/grandi-alberi', elevation_gain: 415, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'costa_del_palio', name: 'Salita dalla Sbarra di Brumano al Palio', kind: 'up', file: 'Imagna_SalitaSbarraPalio.gpx', link: '2018/12/salite-imagna', elevation_gain: 242, elevation_loss: 20 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'zuc_de_valmana,canti', name: 'Salita dalla Sbarra di Brumano allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaSbarraPalioZucDeValmana_EBIKE.gpx', link: '2020/02/canti', elevation_gain: 452, elevation_loss: 50 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, morterone, taleggio', name: 'Salita da Morterone al Passo del Palio', kind: 'up', file: 'Imagna_SalitaMorteronePassoPalio_EBIKE.gpx', link: '2020/12/morterone', elevation_gain: 279, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'imagna', name: 'Salita Selino, Ca Prospero, Chignolo, Brumano, Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaSelinoCaProsperoChignoloCascineZucchero_EBIKE.gpx', link: '2019/06/passo-porta', elevation_gain: 920, elevation_loss: 199 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita Selino, Campi, Brumano, Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaSelinoCampiCascineZucchero_EBIKE.gpx', link: '2019/07/passo-porta-575-valsecca', elevation_gain: 674, elevation_loss: 33 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita Ponte Giurino, Selino, Tre Faggi', kind: 'up', file: 'Imagna_SalitaPonteGiurinoTreFaggi_EBIKE.gpx', link: '2020/07/tre-faggi-valle-brunone', elevation_gain: 1276, elevation_loss: 110 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Arnosto, Passo del Palio', kind: 'up', file: 'Imagna_SalitaArnostoPalio_EBIKE.gpx', link: '2024/02/forcella-di-olino', elevation_gain: 374, elevation_loss: 48 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita (nuova) da Fuipiano, Capione al Palio', kind: 'up', file: 'Imagna_SalitaFuipianoCapioneCimaPalio_EBIKE.gpx', link: '2022/04/foo-di-valmana', elevation_gain: 426, elevation_loss: 39 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Brumano alle Cascine Zucchero', kind: 'up', file: 'Imagna_SalitaBrumanoCascineZucchero_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 179, elevation_loss: 0 },

// unlisted
{ vote: 3, rate: 2, rate_max: 3, cycle: 2, zone: '', name: 'Galzaniga, Orso, Chignolo, Ex Centrale Enel, Coegia, Selino', kind: 'down', file: 'Imagna_GalzanigaOrsoChignoloEnelCoegiaSelino.gpx', link: '2019/07/orso', elevation_gain: 41, elevation_loss: 676 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: '', name: 'Otto di Pagafone', kind: 'down', file: 'Imagna_PagafoneOtto.gpx', link: '2020/03/otto-pagafone', elevation_gain: 163, elevation_loss: 601 },

// removed on request of the owner
/*
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna,costa_del_palio', name: 'Passo del Palio, 571 Basso, 579, Fuipiano', kind: 'down', file: 'Imagna_PassoPalio571Basso579Fuipiano.gpx', link: '2019/04/costa-del-palio-fuipiano', elevation_gain: 113, elevation_loss: 443 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna,zuc_de_valmana', name: 'Salita da Fuipiano allo Zuc De Valmana', kind: 'up', file: 'Imagna_SalitaZucDeValmana_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 502, elevation_loss: 1 },
*/

//
// IMAGNA SUD
//
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, imagna, valcava', name: 'Linzone, 571, Roncola, 571, Almenno', kind: 'down', file: 'Imagna_Linzone571Roncola571Almenno.gpx', link: '2018/11/linzone-roncola', elevation_gain: 26, elevation_loss: 1050 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, valcava', name: 'Valcava, 572, Selino', kind: 'down', file: 'Imagna_Valcava572Selino.gpx', link: '2020/07/valcava-cornabusa-selino', elevation_gain: 37, elevation_loss: 950 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Forcella Alta, 573, Selino', kind: 'down', file: 'Imagna_ForcellaAlta573Selino.gpx', link: '2019/06/forcella-alta-573-selino', elevation_gain: 47, elevation_loss: 912 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Forcella Alta, 574, Valsecca, Selino', kind: 'down', file: 'Imagna_ForcellaAlta574Selino.gpx', link: '2020/11/forcella-alta-574-valsecca', elevation_gain: 86, elevation_loss: 955 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'imagna, valcava', name: 'Forcella Alta, Rizzolo, Selino', kind: 'down', file: 'Imagna_ForcellaAltaRizzolo.gpx', link: '2020/08/forcella-alta-rizzolo-selino', elevation_gain: 40, elevation_loss: 911 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Valcava, Roncola Alta, Ponte Giurino', kind: 'down', file: 'Imagna_ValcavaPonteGiurino.gpx', link: '2020/08/valcava-roncola-alta-ponte-giurino', elevation_gain: 61, elevation_loss: 1020 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'imagna, valcava', name: 'Linzone, Roncola Alta, Amagno', kind: 'down', file: 'Imagna_LinzoneRoncolaAltaAmagno.gpx', link: '2020/11/linzone-roncola-alta-amagno', elevation_gain: 8, elevation_loss: 969 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, imagna, valcava, roncola', name: 'Roncola, Barlino', kind: 'down', file: 'Imagna_RoncolaBarlino.gpx', link: '2019/04/roncola', elevation_gain: 0, elevation_loss: 450 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'roncola', name: 'Roncola, 571, Almenno', kind: 'down', file: 'Imagna_Roncola571Almenno.gpx', link: '2019/04/roncola', elevation_gain: 20, elevation_loss: 533 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava, roncola', name: 'Roncola, CaLiger, Almenno', kind: 'down', file: 'Imagna_RoncolaCaLigerAlmenno.gpx', link: '2019/04/roncola', elevation_gain: 29, elevation_loss: 553 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, valcava, roncola', name: 'Roncola, CaLiger, Cava di Strozza', kind: 'down', file: 'Imagna_RoncolaCava.gpx', link: '2019/04/roncola', elevation_gain: 11, elevation_loss: 562 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'roncola', name: 'Salita da Almenno a Roncola', kind: 'up', file: 'Imagna_SalitaRoncola.gpx', link: '2019/04/roncola', elevation_gain: 535, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, imagna, valcava', name: 'Salita da Valcava al Linzone', kind: 'up', file: 'Martino_ValcavaLinzone.gpx', link: '2018/12/salite-imagna', elevation_gain: 86, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Amagno al Linzone', kind: 'up', file: 'Imagna_SalitaAmagnoValcavaLinzone_EBIKE.gpx', link: '2020/11/linzone-roncola-alta-amagno', elevation_gain: 1028, elevation_loss: 69 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Trasferimento Ponte Giurino, Selino', kind: 'up', file: 'Imagna_PonteGiurinoSelino_EBIKE.gpx', link: '2018/12/salite-imagna', elevation_gain: 124, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Ciclabile Valle Imagna', kind: 'up', file: 'Imagna_CiclabileValleImagna.gpx', link: '2018/12/salite-imagna', elevation_gain: 390, elevation_loss: 170 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Selino alla Forcella Alta', kind: 'up', file: 'Imagna_SalitaSelinoForcellaAlta_EBIKE.gpx', link: 'forcella-alta-574-valsecca', elevation_gain: 862, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Salita da Almenno a Costa Imagna e Valcava', kind: 'up', file: 'Imagna_SalitaAlmennoCostaValcava.gpx', link: '2018/12/salite-imagna', elevation_gain: 1076, elevation_loss: 49 },

//
// UBIONE
//
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna', name: 'Passo del Canto, Capizzone', kind: 'down', file: 'Imagna_PassoCantoCapizzone.gpx', link: '2020/09/passo-canto-capizzone', elevation_gain: 67, elevation_loss: 516 },
{ vote: 3, rate: 2, rate_max: 4, cycle: "1 minuto nel tratto iniziale con passaggi a piedi", zone: 'imagna, ubione', name: 'Ubione, 571, Belved\u00EC, Clanezzo', kind: 'down', file: 'Imagna_Ubione571.gpx', link: '2020/08/ubione-571', elevation_gain: 1, elevation_loss: 559 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'imagna, ubione', name: 'Roccoli Passata, Costa Cavallina', kind: 'down', file: 'Imagna_CostaCavallina.gpx', link: '2019/09/costa-cavallina', elevation_gain: 19, elevation_loss: 435 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Sopracorna', kind: 'down', file: 'Imagna_FinalSopracorna.gpx', link: '2020/05/sopracorna', elevation_gain: 28, elevation_loss: 459 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Postiera', kind: 'down', file: 'Imagna_Postiera.gpx', link: '2020/05/sopracorna', elevation_gain: 16, elevation_loss: 437 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Postiera', kind: 'down', file: 'Imagna_FinalPostiera.gpx', link: '2020/05/sopracorna', elevation_gain: 15, elevation_loss: 455 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione, sopracorna', name: 'Roccoli Passata, Final, Valle Mori', kind: 'down', file: 'Imagna_FinalValleMori.gpx', link: '2020/05/sopracorna', elevation_gain: 16, elevation_loss: 427 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Corna Marcia, Coyote Scamburtit, Ca Bonor\u00E8', kind: 'down', file: 'Imagna_CoyoteScamburtit.gpx', link: '2019/09/coyote-scamburtit', elevation_gain: 19, elevation_loss: 702 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Monte Ubiale, Ubiale', kind: 'down', file: 'Imagna_MonteUbialeClanezzo.gpx', link: '2023/05/monte-ubiale', elevation_gain: 85, elevation_loss: 756 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 0, zone: 'imagna, ubione', name: 'Fiori, Sopracorna', kind: 'down', file: 'Imagna_FioriSopracorna.gpx', link: '2024/07/fiori', elevation_gain: 18, elevation_loss: 522 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Salita ciclabile del Chito, Corna Marcia', kind: 'up', file: 'Imagna_SalitaChitoBottaCornaMarcia_EBIKE.gpx', link: '2019/09/coyote-scamburtit', elevation_gain: 806, elevation_loss: 136 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'imagna, ubione', name: 'Salita ciclabile del Chito, Roccoli Passata', kind: 'up', file: 'Imagna_SalitaChitoCeresolaCantoPassata_EBIKE.gpx', link: '2019/09/costa-cavallina', elevation_gain: 694, elevation_loss: 309 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "22 minuti con ultimi 100m di dislivello a spalla", zone: 'imagna, ubione', name: 'Salita Clanezzo, Monte Ubione', kind: 'up', file: 'Imagna_SalitaClanezzoUbione.gpx', link: '2020/08/ubione-571', elevation_gain: 582, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'imagna, ubione', name: 'Salita Clanezzo, Passo del Canto, Monte Ubiale', kind: 'up', file: 'Imagna_SalitaClanezzoMonteUbiale_EBIKE.gpx', link: '2023/05/monte-ubiale', elevation_gain: 871, elevation_loss: 241 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'ubione, sopracorna', name: 'Salita Clanezzo, Roccoli Passata', kind: 'up', file: 'Imagna_SalitaClanezzoRoccoliPassata_EBIKE.gpx', link: '2020/05/sopracorna', elevation_gain: 475, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'ubione', name: 'Salita diretta ciclabile del Chito, Passo del Canto', kind: 'up', file: 'Imagna_SalitaChitoCantoDiretta_EBIKE.gpx', link: '2020/09/passo-canto-capizzone', elevation_gain: 513, elevation_loss: 53 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'ubione', name: 'Salita Clanezzo, Roccoli Passata, Fiori', kind: 'up', file: 'Imagna_SalitaClanezzoFiori_EBIKE.gpx', link: '2024/07/fiori', elevation_gain: 520, elevation_loss: 3 },

//
// SAN MARTINO
//
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Roncola, San Rocco', kind: 'down', file: 'Martino_RoncolaSanRocco.gpx', link: '2019/04/roncola', elevation_gain: 0, elevation_loss: 332 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Baita, Camutaglio, Longa, Golf', kind: 'down', file: 'Martino_BaitaCamutaglioLongaGolf.gpx', link: '2019/04/roncola', elevation_gain: 147, elevation_loss: 630 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Prabacioc, San Rocco', kind: 'down', file: 'Martino_PrabaciocSanRocco.gpx', link: '2019/04/roncola', elevation_gain: 0, elevation_loss: 305 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Pedrino DH, Faggeta, Perlupario', kind: 'down', file: 'Martino_PedrinoDHFaggetaPerlupario.gpx', link: '2019/04/colle-pedrino', elevation_gain: 12, elevation_loss: 385 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Ciacallo, Burligo', kind: 'down', file: 'Martino_Ciacallo.gpx', link: '2019/04/colle-pedrino', elevation_gain: 0, elevation_loss: 183 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Pedrino, Ca Muracca, Forcella di Burligo', kind: 'down', file: 'Martino_PedrinoMuraccaForcella.gpx', link: '2019/04/colle-pedrino', elevation_gain: 1, elevation_loss: 218 },
{ vote: 1, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Pedrino, Cavatori', kind: 'down', file: 'Martino_PedrinoCavatori.gpx', link: '2019/04/colle-pedrino', elevation_gain: 0, elevation_loss: 109 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'pedrino', name: '807 / Palestra', kind: 'down', file: 'Martino_807Palestra.gpx', link: '2019/04/colle-pedrino', elevation_gain: 0, elevation_loss: 147 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'pedrino', name: 'Mulattiera', kind: 'down', file: 'Martino_PedrinoMulattieraOpreno.gpx', link: '2019/04/colle-pedrino', elevation_gain: 1, elevation_loss: 239 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava, piacca', name: 'Linzone, Monte Piacca, Baita, Spino, Palazzago', kind: 'down', file: 'Martino_LinzonePiaccaBaitaSpinoPalazzago.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo', elevation_gain: 49, elevation_loss: 1008 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava, piacca', name: 'Linzone, Monte Piacca, Col Pedrino, Palestra / 807, Burligo', kind: 'down', file: 'Martino_LinzonePiaccaColPedrinoPalestraBurligo.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo', elevation_gain: 83, elevation_loss: 960 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'martino, valcava', name: 'Monte Linzone, Giallo-Blu Ovest, Dusnale', kind: 'down', file: 'Martino_LinzoneGialloBluOvest.gpx', link: '2025/05/giallo-blu-ovest', elevation_gain: 116, elevation_loss: 970 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, valcava', name: 'Antenne Valcava, Funivia, Coldara, Col Fopa, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaFuniviaColFopaBurligo.gpx', link: '2019/01/funivia-coldara-colle-pedrino-opreno', elevation_gain: 76, elevation_loss: 962 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 1, zone: 'martino, valcava', name: 'Antenne Valcava, Cava, Col Pedrino, Burligo', kind: 'down', file: 'Martino_AntenneValcavaCavaPedrinoBurligo.gpx', link: '2021/12/antenne-cava', elevation_gain: 16, elevation_loss: 913 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Crinale dei colli di Palazzago', kind: 'down', file: 'Martino_ColliPalazzago_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 177, elevation_loss: 494 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Cadimaggio, Acqua, Borghetto', kind: 'down', file: 'Martino_CrinaleCadimaggioAcquaBorghetto.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 25, elevation_loss: 143 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Monte Valmora, Borghetto', kind: 'down', file: 'Martino_CrinaleMonteValmoraBorghetto.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 43, elevation_loss: 139 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Picco Alto, Palazzago', kind: 'down', file: 'Martino_CrinalePiccoAltoPalazzago.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 14, elevation_loss: 148 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, crinale', name: 'Pracerito, Ca Zucchetti', kind: 'down', file: 'Martino_CrinalePraceritoCaZucchetti.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 31, elevation_loss: 228 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Pracerito, Fomorone', kind: 'down', file: 'Martino_CrinalePraceritoFomorone.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 2, elevation_loss: 194 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Ca Maggio, Borghetto', kind: 'down', file: 'Martino_CrinaleBorghetto.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 0, elevation_loss: 108 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Gronfaleggio, Bressanone, Bund\u00E8', kind: 'down', file: 'Martino_GronfaleggioBressanoneBunde.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 22, elevation_loss: 264 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Gronfaleggio, Colle dei Frati, Pontida', kind: 'down', file: 'Martino_GronfaleggioColleDeiFratiPontida.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 18, elevation_loss: 233 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Valcava, 823, Colle di Sogno, Corna Martinella, Classica', kind: 'down', file: 'Martino_Valcava823SognoMartinellaClassica.gpx', link: '2018/12/valcava-colle-di-sogno-corna-martinella', elevation_gain: 125, elevation_loss: 892 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, valcava', name: 'Valcava, 821, Torre de Busi', kind: 'down', file: 'Martino_Valcava821Busi.gpx', link: '2019/12/valcava-821-busi', elevation_gain: 3, elevation_loss: 982 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 817 Direttissima, Carenno', kind: 'down', file: 'Martino_ForcellaAlta817Carenno.gpx', link: '2018/12/forcella-alta-817-carenno', elevation_gain: 1, elevation_loss: 664 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 815 Muerte, Carenno', kind: 'down', file: 'Martino_ForcellaAlta815Carenno.gpx', link: '2019/01/forcella-alta-815-carenno', elevation_gain: 5, elevation_loss: 658 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 812, Carenno', kind: 'down', file: 'Martino_ForcellaAlta812Carenno.gpx', link: '2019/01/forcella-alta-812-carenno', elevation_gain: 29, elevation_loss: 691 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 811, Carenno', kind: 'down', file: 'Martino_ForcellaAlta811Carenno.gpx', link: '2020/01/forcella-alta-811-carenno', elevation_gain: 33, elevation_loss: 707 },
{ vote: 2, rate: 3, rate_max: 4, cycle: 0, zone: 'martino, valcava', name: 'Forcella Alta, 802, Carenno', kind: 'down', file: 'Martino_ForcellaAlta802Carenno.gpx', link: '2020/06/forcella-alta-802-carenno', elevation_gain: 21, elevation_loss: 665 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Convento Pertus, Erve, Saina, Somasca', kind: 'down', file: 'Martino_ConventoPertusErveSainaSomasca_EBIKE.gpx', link: '2020/07/convento-pertus-erve-saina-somasca', elevation_gain: 195, elevation_loss: 1051 },
{ vote: 3, rate: 4, rate_max: 0, cycle: 6, zone: 'martino, valcava', name: 'Convento Pertus, Nesolio, Madonna del Corno', kind: 'down', file: 'Martino_ConventoPertusNesolioCorno.gpx', link: '2021/06/nesolio', elevation_gain: 51, elevation_loss: 724 },
{ vote: 1, rate: 4, rate_max: 0, cycle: 11, zone: 'martino, valcava', name: 'Convento Pertus, Pian Munik, Madonna del Corno', kind: 'down', file: 'Martino_ConventoPertusMunikCorno.gpx', link: '2021/07/munik', elevation_gain: 116, elevation_loss: 765 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava, tesoro', name: 'Monte Tesoro, Direttissima, Colle Di Sogno, Corna Martinella, Cristai Super Flow, Torre de Busi', kind: 'down', file: 'Martino_TesoroDirSognoMartinellaCristaiSuperFlow.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 31, elevation_loss: 1018 },
{ vote: 1, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, sogno', name: 'Colle Di Sogno, 819, Torre de Busi', kind: 'down', file: 'Martino_ColleDiSogno819.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 40, elevation_loss: 541 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'martino, sogno', name: 'Colle Di Sogno, 823, Torre de Busi', kind: 'down', file: 'Martino_ColleDiSogno823.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 10, elevation_loss: 507 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, sogno', name: 'Colle Di Sogno, Corna Martinella, Explo', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaExplo.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 53, elevation_loss: 245 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'sogno', name: 'Colle Di Sogno, 811, Carenno', kind: 'down', file: 'Martino_ColleDiSogno811.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 1, elevation_loss: 326 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'tesoro', name: 'Colle Di Sogno, Carenno', kind: 'down', file: 'Martino_ColleDiSognoCarenno.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 31, elevation_loss: 360 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'sogno', name: 'Colle Di Sogno, Corna Martinella, Nord', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaNord.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 109, elevation_loss: 307 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'sogno', name: 'Colle Di Sogno, Corna Martinella, Sud', kind: 'down', file: 'Martino_ColleDiSognoCornaMartinellaSud.gpx', link: '2019/12/colle-di-sogno', elevation_gain: 14, elevation_loss: 212 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, martinella', name: 'Corna Martinella, 822, 801A', kind: 'down', file: 'Martino_CornaMartinella822801A.gpx', link: '2020/01/corna-martinella', elevation_gain: 8, elevation_loss: 358 },
{ vote: 5, rate: 1, rate_max: 3, cycle: 0, zone: 'martinella', name: 'Corna Martinella, Classica', kind: 'down', file: 'Martino_CornaMartinellaClassica.gpx', link: '2020/01/corna-martinella', elevation_gain: 22, elevation_loss: 344 },
{ vote: 5, rate: 1, rate_max: 3, cycle: 0, zone: 'martinella', name: 'Corna Martinella, Cristai Super Flow', kind: 'down', file: 'Martino_CornaMartinellaCristaiSuperFlow.gpx', link: '2020/01/corna-martinella', elevation_gain: 12, elevation_loss: 332 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, martinella', name: 'Santa Margherita, Pistino', kind: 'down', file: 'Martino_MargheritaPistino.gpx', link: '2020/01/corna-martinella', elevation_gain: 0, elevation_loss: 242 },
{ vote: 2, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, coldara', name: 'Coldara, PizzoPec, Torre de Busi', kind: 'down', file: 'Martino_ColdaraPizzoPec.gpx', link: '2020/01/coldara', elevation_gain: 4, elevation_loss: 488 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, coldara', name: 'Coldara, San Marco, Torre de Busi', kind: 'down', file: 'Martino_ColdaraSanMarco.gpx', link: '2020/01/coldara', elevation_gain: 30, elevation_loss: 510 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, coldara', name: 'Coldara, Val Bratta, Torre de Busi', kind: 'down', file: 'Martino_ColdaraValBratta.gpx', link: '2020/01/coldara', elevation_gain: 20, elevation_loss: 505 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'coldara', name: 'Coldara, Col Fopa, Opreno', kind: 'down', file: 'Martino_ColdaraColFopaOpreno.gpx', link: '2020/01/coldara', elevation_gain: 20, elevation_loss: 401 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'martino, valcava, pedrino', name: 'Kavast\u00F2poi (Cavatappi)', kind: 'down', file: 'Martino_Kavastopoi.gpx', link: '2023/02/kavastopoi', elevation_gain: 5, elevation_loss: 583 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'martino, valcava', name: 'Sommaskio Trail', kind: 'down', file: 'Martino_SommaskioTrail.gpx', link: '2023/04/valcavastopoi', elevation_gain: 59, elevation_loss: 947 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Linzone, Monte Piacca, Cava Col Pedrino, Ca Muracca, Burligo', kind: 'down', file: 'Martino_LinzoneAlbenzaCavaBurligo.gpx', link: '2023/10/linzone-cava-pedrino', elevation_gain: 3, elevation_loss: 844 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'martino, valcava', name: 'Valcava, Vekkia Miniera, Burligo', kind: 'down', file: 'Martino_ValcavaVekkiaMiniera.gpx', link: '2025/02/vekkia-miniera', elevation_gain: 58, elevation_loss: 946 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Cava, Faidello DH, Opreno, Burligo', kind: 'down', file: 'Martino_FaidelloDH.gpx', link: '2025/02/faidello', elevation_gain: 55, elevation_loss: 529 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'martino, valcava', name: 'Antenne Valcava, Zuccherone, Faidello, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaZuccheroneFaidelloBurligo.gpx', link: '2025/04/zuccherone-faidello', elevation_gain: 72, elevation_loss: 935 },

// unlisted
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: '', name: 'Antenne Valcava, Zuccherone, Coldara, Colle Pedrino, Opreno, Burligo', kind: 'down', file: 'Martino_AntenneValcavaZuccheroneColPedrinoBurligo.gpx', link: '2019/03/zuccherone-coldara-col-fopa-opreno', elevation_gain: 74, elevation_loss: 986 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Trasferimento da Roncola alla Baita', kind: 'up', file: 'Martino_RoncolaBaita.gpx', link: '2019/04/roncola', elevation_gain: 86, elevation_loss: 120 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, roncola', name: 'Salita da Palazzago al Monte Piacca', kind: 'up', file: 'Martino_SalitaPalazzagoMontePiacca_EBIKE.gpx', link: '2021/06/monte-piacca-dusnale', elevation_gain: 711, elevation_loss: 27 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Borghetto', kind: 'up', file: 'Martino_SalitaCrinaleBorghetto_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 110, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Ca Zucchetti', kind: 'up', file: 'Martino_SalitaCrinaleCaZucchetti_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 185, elevation_loss: 9 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Palazzago', kind: 'up', file: 'Martino_SalitaCrinalePalazzago_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 123, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita al Crinale da Burligo localit\u00E0 Acqua', kind: 'up', file: 'Martino_SalitaAcquaCrinale_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 79, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita a Gronfaleggio da CaZucchetti', kind: 'up', file: 'Martino_SalitaCaZuchettiGronfaleggio_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 106, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, crinale', name: 'Salita a Gronfaleggio da Celana', kind: 'up', file: 'Martino_SalitaCelanaGronfaleggio_EBIKE.gpx', link: '2020/10/colli-di-palazzago', elevation_gain: 100, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita Madonna del Corno, Oneta, Convento del Pertus', kind: 'up', file: 'Martino_SalitaCornoOnetaConventoPertus_EBIKE.gpx', link: '2021/07/munik', elevation_gain: 776, elevation_loss: 130 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, martinella', name: 'Salita Torre de Busi a Santa Margherita', kind: 'up', file: 'Martino_SalitaBusiMargherita_EBIKE.gpx', link: '2020/01/corna-martinella', elevation_gain: 248, elevation_loss: 40 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, tesoro', name: 'Salita da Torre De Busi a Valcava', kind: 'up', file: 'Martino_SalitaBusiValcava_EBIKE.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 950, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Carenno alla Forcella Alta', kind: 'up', file: 'Martino_SalitaCarennoForcellaAlta.gpx', link: '2018/12/forcella-alta-817-carenno', elevation_gain: 684, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Somasca al Convento del Pertus', kind: 'up', file: 'Martino_SalitaSomascaCarennoConventoPertus_EBIKE.gpx', link: '2020/07/convento-pertus-erve-saina-somasca', elevation_gain: 898, elevation_loss: 42 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, martinella', name: 'Salita da Carenno alla Corna Martinella', kind: 'up', file: 'Martino_SalitaCarenno819CornaMartinella_EBIKE.gpx', link: '2020/01/corna-martinella', elevation_gain: 152, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita dalla Forcella Alta al Monte Tesoro', kind: 'up', file: 'Martino_SalitaForcellaAltaMonteTesoro.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 124, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, tesoro', name: 'Salita dal Passo di Valcava al Monte Tesoro', kind: 'up', file: 'Martino_SalitaValcavaTesoro_EBIKE.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 189, elevation_loss: 106 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Torre De Busi a Carenno', kind: 'up', file: 'Martino_SalitaBusiCarenno.gpx', link: '2018/12/salite-san-martino', elevation_gain: 311, elevation_loss: 80 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava, martinella', name: 'Salita da Torre De Busi alla Corna Martinella', kind: 'up', file: 'Martino_SalitaBusiCornaMartinella_EBIKE.gpx', link: '2020/01/corna-martinella', elevation_gain: 427, elevation_loss: 86 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita da Palazzago alla Cava', kind: 'up', file: 'Martino_SalitaPalazzagoCava.gpx', link: '2018/12/salite-san-martino', elevation_gain: 987, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'martino, valcava', name: 'Salita Busi, Opreno, Burligo, Valcava', kind: 'up', file: 'Martino_SalitaBusiOprenoBurligoValcava_EBIKE.gpx', link: '2019/12/valcava-821-busi', elevation_gain: 1182, elevation_loss: 204 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'pedrino', name: 'Salita da Burligo a Colle Pedrino', kind: 'up', file: 'Martino_SalitaBurligoCollePedrino.gpx', link: '2019/04/colle-pedrino', elevation_gain: 282, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'pedrino', name: 'Salita Perlupario, Cava di Valcava', kind: 'up', file: 'Martino_SalitaPerluparioCava_EBIKE.gpx', link: '2019/04/colle-pedrino', elevation_gain: 735, elevation_loss: 109 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'piacca', name: 'Salita da Burligo al Monte Linzone', kind: 'up', file: 'Martino_SalitaBurligoCavaLinzone.gpx', link: '2018/11/linzone-monte-piacca-baita-burligo', elevation_gain: 905, elevation_loss: 9 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'tesoro', name: 'Salita da Carenno alla Forcella Alta', kind: 'up', file: 'Martino_SalitaCarennoForcellaAlta_EBIKE.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 669, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'tesoro', name: 'Salita dalla Forcella Alta al Monte Tesoro', kind: 'up', file: 'Martino_SalitaForcellaAltaMonteTesoro_EBIKE.gpx', link: '2018/12/monte-tesoro-direttissima-colle-di', elevation_gain: 123, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Burligo alle antenne di Valcava', kind: 'up', file: 'Martino_SalitaBurligoCavaAntenneValcava_EBIKE.gpx', link: '2019/01/funivia-coldara-colle-pedrino-opreno', elevation_gain: 906, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Madonna del Corno, Convento del Pertus', kind: 'up', file: 'Martino_SalitaCornoConventoPertus_EBIKE.gpx', link: '2021/06/nesolio', elevation_gain: 753, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Almenno al Monte Linzone', kind: 'up', file: 'Martino_SalitaAlmennoPalazzagoLinzone_EBIKE.gpx', link: '2018/11/linzone-roncola', elevation_gain: 1188, elevation_loss: 137 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Burligo, Cava', kind: 'up', file: 'Martino_SalitaBurligoCava_EBIKE.gpx', link: '2025/02/faidello', elevation_gain: 508, elevation_loss: 0 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: '', name: 'Monte Piacca, Dusnale', kind: 'down', file: 'Martino_PiaccaDusnale.gpx', link: '2021/06/monte-piacca-dusnale', elevation_gain: 24, elevation_loss: 636 },

//
// MONTE CANTO
//
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'canto', name: 'La Frana', kind: 'down', file: 'Canto_Frana.gpx', link: '2023/04/frana', elevation_gain: 0, elevation_loss: 288 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'canto', name: 'Crocione, California 2', kind: 'down', file: 'Canto_CrocioneCalifornia2.gpx', link: '2023/04/crocione-california-2', elevation_gain: 12, elevation_loss: 405 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'canto', name: 'Tronchi, Canyon', kind: 'down', file: 'Canto_Canyon.gpx', link: '2021/05/canyon', elevation_gain: 1, elevation_loss: 324 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'canto', name: 'Traliccio', kind: 'down', file: 'Canto_Traliccio.gpx', link: '2021/05/traliccio', elevation_gain: 0, elevation_loss: 303 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Radici, Genestaro / Scorbutico', kind: 'down', file: 'Canto_RadiciGenestaro.gpx', link: '2020/03/radici-genestaro', elevation_gain: 5, elevation_loss: 203 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Crocione, Guendalina', kind: 'down', file: 'Canto_CrocioneGuendalina.gpx', link: '2020/02/crocione-guendalina', elevation_gain: 45, elevation_loss: 432 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'canto', name: 'Biglietto da Visita', kind: 'down', file: 'Canto_BigliettoDaVisita.gpx', link: '2020/02/biglietto-da-visita', elevation_gain: 87, elevation_loss: 454 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Kompressor', kind: 'down', file: 'Canto_Kompressor.gpx', link: '2019/02/kompressor', elevation_gain: 23, elevation_loss: 343 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'canto', name: 'Borderline', kind: 'down', file: 'Canto_Borderline.gpx', link: '2023/02/borderline', elevation_gain: 13, elevation_loss: 385 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'canto', name: 'Pietra Sant Alberto', kind: 'down', file: 'Canto_PietraSAlberto.gpx', link: '2020/03/pietra-santalberto', elevation_gain: 12, elevation_loss: 150 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'canto, rocce', name: 'Rocce / Muschio e Lame Rotanti', kind: 'down', file: 'Canto_RocceLameRotanti.gpx', link: '2019/02/rocce-muschio', elevation_gain: 17, elevation_loss: 296 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'canto', name: 'Scalette', kind: 'down', file: 'Canto_Scalette.gpx', link: '2019/02/scalette', elevation_gain: 8, elevation_loss: 316 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'canto', name: 'Uccellaia 1 e 2', kind: 'down', file: 'Canto_Uccellaia1E2.gpx', link: '2019/02/uccellaia', elevation_gain: 22, elevation_loss: 399 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'canto', name: 'Zandona', kind: 'down', file: 'Canto_Zandona.gpx', link: '2019/02/zandona', elevation_gain: 5, elevation_loss: 75 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'canto', name: 'Porcile, San Giovanni', kind: 'down', file: 'Canto_PorcileSanGiovanni.gpx', link: '2020/03/porcile-san-giovanni', elevation_gain: 35, elevation_loss: 395 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'canto, bob', name: 'Bob', kind: 'down', file: 'Canto_Bob.gpx', link: '2023/02/bob', elevation_gain: 40, elevation_loss: 312 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'canto', name: 'California', kind: 'down', file: 'Canto_California.gpx', link: '2023/02/california', elevation_gain: 28, elevation_loss: 373 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'canto, grezia', name: 'Grezia', kind: 'down', file: 'Canto_Grezia.gpx', link: '2023/02/grezia', elevation_gain: 23, elevation_loss: 298 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto, bob, grezia, rocce', name: 'Salita Sotto il Monte, Santa Barbara', kind: 'up', file: 'Canto_SalitaSottoIlMonte.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 373, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Somasca, Pontida', kind: 'up', file: 'Canto_SalitaSomascaPontida_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 75, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Ruderi, Monte Canto', kind: 'up', file: 'Canto_SalitaMonteCanto.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 81, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Pontida, Santa Barbara', kind: 'up', file: 'Canto_SalitaPontida.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 313, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Pontida, GEP, Santa Barbara', kind: 'up', file: 'Canto_SalitaPontidaGEP_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 350, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Somasca, Monte Albano', kind: 'up', file: 'Canto_SalitaSomasca_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 211, elevation_loss: 18 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Ambivere, Monte Albano', kind: 'up', file: 'Canto_SalitaAmbivere.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 245, elevation_loss: 20 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto', name: 'Salita Fontanella, Santa Barbara', kind: 'up', file: 'Canto_SalitaFontanella.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 192, elevation_loss: 35 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'canto, bob, grezia, rocce', name: 'Cross, Trasferimento Roncarro-Caneve', kind: 'up', file: 'Canto_Cross_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 53, elevation_loss: 85 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Sotto il Monte', kind: 'up', file: 'Canto_SalitaSottoIlMonte_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 379, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Ruderi, Crocione', kind: 'up', file: 'Canto_SalitaCrocione_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 58, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Pontida, Santa Barbara', kind: 'up', file: 'Canto_SalitaPontida_EBIKE.gpx', link: '2019/02/salite-monte-canto', elevation_gain: 352, elevation_loss: 0 },

// unlisted
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: '', name: 'GEP', kind: 'down', file: 'Canto_GEP.gpx', link: '2021/05/gep', elevation_gain: 0, elevation_loss: 304 },

//
// BASSA SERIANA
//
// nord
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Canto Basso, 533, Forcella del Sorriso', kind: 'down', file: 'Seriana_CantoBassoForcellaSorriso.gpx', link: '2019/03/canto-basso-533-forcella-del-sorriso', elevation_gain: 3, elevation_loss: 143 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Val del Luio, Alzano', kind: 'down', file: 'Seriana_LonnoLuio.gpx', link: '2019/04/lonno', elevation_gain: 0, elevation_loss: 402 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, 523, Gazzaniga', kind: 'down', file: 'Seriana_Poieto523Gazzaniga.gpx', link: '2023/09/poieto-gazzaniga', elevation_gain: 8, elevation_loss: 944 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, Slayer Lane, Vertova', kind: 'down', file: 'Seriana_PoietoSlayerVertova.gpx', link: '2023/09/slayer', elevation_gain: 26, elevation_loss: 935 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 3, zone: 'bassa_seriana', name: 'C\u00E0 Donadoni, 524, Vertova', kind: 'down', file: 'Seriana_Donadoni524Vertova.gpx', link: '2023/09/donadoni', elevation_gain: 285, elevation_loss: 1049 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 2, zone: 'bassa_seriana', name: 'Monte Poieto, 516, Val Vertova', kind: 'down', file: 'Seriana_Poieto516ValVertova.gpx', link: '2023/09/poieto-516', elevation_gain: 113, elevation_loss: 1023 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Pizzo di Lonno, Monte Ganda, Sentiero delle Corne, Alzano Sopra', kind: 'down', file: 'Seriana_PizzoDiLonnoMonteGandaSentieroDelleCorne.gpx', link: '2019/04/lonno', elevation_gain: 34, elevation_loss: 510 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Pizzo di Lonno, Brumano, Val Nesa', kind: 'down', file: 'Seriana_PizzoDiLonnoValNesa.gpx', elevation_gain: 79, elevation_loss: 560 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Percorso Vita, Valbona', kind: 'down', file: 'Seriana_LonnoPercorsoVita.gpx', link: '2019/04/lonno', elevation_gain: 10, elevation_loss: 400 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Percorso Vita, Luio', kind: 'down', file: 'Seriana_LonnoPercorsoVitaLuio.gpx', link: '2019/04/lonno', elevation_gain: 4, elevation_loss: 417 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Lonno, Colle Bastia, Percorso Vita, Viana', kind: 'down', file: 'Seriana_LonnoColleBastia.gpx', link: '2019/04/lonno', elevation_gain: 26, elevation_loss: 448 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salmezza, Lonno, Percorso Vita', kind: 'down', file: 'Seriana_SalmezzaLonnoVita.gpx', link: '2024/06/salmezza-vita', elevation_gain: 14, elevation_loss: 738 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salmezza, 533, Forcella di Nese', kind: 'down', file: 'Seriana_Salmezza533ForcellaNese.gpx', link: '2019/05/salmezza-533-forcella-di-nese', elevation_gain: 118, elevation_loss: 312 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 2, zone: 'bassa_seriana', name: 'Salmezza, Baita GAP, Lonno', kind: 'down', file: 'Seriana_SalmezzaBaitaGAPLonno.gpx', link: '2019/05/salmezza-gap-lonno', elevation_gain: 26, elevation_loss: 376 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Forcella di Nese, 531, Nese', kind: 'down', file: 'Seriana_ForcellaNese531Nese.gpx', link: '2019/05/forcella-di-nese-531-nese', elevation_gain: 7, elevation_loss: 586 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 1, zone: 'bassa_seriana, valtrusa', name: 'Selvino, 535, Lonno', kind: 'down', file: 'Seriana_535Lonno.gpx', link: '2019/05/monte-valtrusa', elevation_gain: 61, elevation_loss: 227 },
{ vote: 2, rate: 2, rate_max: 0, cycle: "3 minuti la salita al Valtrusa", zone: 'bassa_seriana, valtrusa', name: 'Selvino, 535, Monte Valtrusa, Lonno', kind: 'down', file: 'Seriana_535Valtrusa.gpx', link: '2019/05/monte-valtrusa', elevation_gain: 174, elevation_loss: 348 },
// removed on request by CAI Albino
/*
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, 550 / Mulattiera, Albino', kind: 'down', file: 'Seriana_550MulattieraAlbino.gpx', link: '2019/03/550-mulattiera', elevation_gain: 4, elevation_loss: 615 },
*/
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Trevasco, Nembro', kind: 'down', file: 'Seriana_Trevasco.gpx', link: '2019/04/trevasco', elevation_gain: 105, elevation_loss: 737 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Trevasco Est, Nembro', kind: 'down', file: 'Seriana_TrevascoEst.gpx', link: '2024/05/trevasco-est', elevation_gain: 84, elevation_loss: 710 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Monte Purito, Monte Cereto, Nembro', kind: 'down', file: 'Seriana_PuritoCereto.gpx', link: '2019/04/purito-cereto', elevation_gain: 50, elevation_loss: 860 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 1, zone: 'bassa_seriana', name: 'Selvino, Ama, Trote, Albino', kind: 'down', file: 'Seriana_Trote.gpx', link: '2019/03/trote', elevation_gain: 25, elevation_loss: 612 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Selvino, Ama, Nigromo, Vertical, Albino', kind: 'down', file: 'Seriana_NigromoVertical.gpx', link: '2021/04/nigromo-vertical', elevation_gain: 27, elevation_loss: 649 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Canto Basso, 540A, Olera', kind: 'down', file: 'Seriana_540A.gpx', link: '2019/03/canto-basso-540a-olera', elevation_gain: 4, elevation_loss: 367 },
{ vote: 1, rate: 1, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Olera, 532, Burro, 531, Nese', kind: 'down', file: 'Seriana_Olera532Burro531Nese.gpx', link: '2019/03/olera-532-burro-531-nese', elevation_gain: 69, elevation_loss: 238 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Ganda, 520, Gazzaniga', kind: 'down', file: 'Seriana_Ganda520.gpx', link: '2019/03/520', elevation_gain: 0, elevation_loss: 691 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Ganda, 520 DH On Fire, Gazzaniga', kind: 'down', file: 'Seriana_Ganda520DH.gpx', link: '2019/03/520', elevation_gain: 0, elevation_loss: 681 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Ganda, 521, Gazzaniga', kind: 'down', file: 'Seriana_Ganda521.gpx', link: '2019/05/521', elevation_gain: 5, elevation_loss: 693 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Pista Downhill Poieto', kind: 'down', file: 'Seriana_PoietoDH.gpx', link: '2019/03/poieto-dh', elevation_gain: 1, elevation_loss: 317 },
{ vote: 3, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Nembro Trail', kind: 'down', file: 'Seriana_NembroTrail.gpx', link: '2019/05/nembro-trail', elevation_gain: 11, elevation_loss: 8 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, Ganda, Camocco, Albino', kind: 'down', file: 'Seriana_PoietoGandaCamoccoAlbino.gpx', link: '2022/11/camocco', elevation_gain: 32, elevation_loss: 1039 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 5, zone: 'bassa_seriana', name: 'Monte Poieto, Cornagera, Pradale, Valgua', kind: 'down', file: 'Seriana_PoietoCornageraPradaleValgua.gpx', link: '2022/12/cornagera', elevation_gain: 73, elevation_loss: 1088 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Rena, Bomba Trail, Albino', kind: 'down', file: 'Seriana_RenaBombaAlbino.gpx', link: '2022/12/rena-bomba', elevation_gain: 17, elevation_loss: 825 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Poieto, Amora, Petello', kind: 'down', file: 'Seriana_PoeitoAmoraAlbino.gpx', link: '2023/01/amora', elevation_gain: 34, elevation_loss: 1053 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Tribulina di Ganda, 522, Gazzaniga', kind: 'down', file: 'Seriana_TribulinaGanda522Gazzaniga.gpx', link: '2023/01/522', elevation_gain: 43, elevation_loss: 742 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Rena, Croce San Luigi, Desenzano', kind: 'down', file: 'Seriana_RenaLuigiDesenzano.gpx', link: '2023/01/luigi', elevation_gain: 107, elevation_loss: 927 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Plazza, Gazzaniga', kind: 'down', file: 'Seriana_PlazzaGazzaniga.gpx', link: '2025/05/plazza', elevation_gain: 72, elevation_loss: 779 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Trasferimento dalla Forcella di Nese al Canto Basso', kind: 'up', file: 'Seriana_ForcellaNese533BCantoBasso.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 88, elevation_loss: 57 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Monte di Nese al Canto Basso', kind: 'up', file: 'Seriana_SalitaMonteDiNeseCantoBasso.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 78, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Selvino a Salmezza', kind: 'up', file: 'Seriana_SalitaSalmezza.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 152, elevation_loss: 8 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Selvino al Monte Purito', kind: 'up', file: 'Seriana_SalitaPurito_EBIKE.gpx', link: '2019/04/purito-cereto', elevation_gain: 184, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana,lonno', name: 'Salita da Alzano a Lonno', kind: 'up', file: 'Seriana_SalitaAlzanoPizzoDiLonno_EBIKE.gpx', link: '2019/04/lonno', elevation_gain: 509, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Nembro a Selvino', kind: 'up', file: 'Seriana_SalitaNembroSelvino.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 608, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Trasferimento da Selvino a Ganda', kind: 'up', file: 'Seriana_SalitaSelvinoGanda.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 86, elevation_loss: 35 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita dalla Forcella al Monte Cavallo', kind: 'up', file: 'Seriana_SalitaMonteCavallo.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 106, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Nese alla Forcella', kind: 'up', file: 'Seriana_SalitaNeseForcella.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 586, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Albino, Col du Bates, Ganda, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAlbinoBatesGandaPoieto_EBIKE.gpx', link: '2022/11/camocco', elevation_gain: 1059, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Albino, Col du Bates, Monte Rena', kind: 'up', file: 'Seriana_SalitaAlbinoBatesGandaRena_EBIKE.gpx', link: '2022/12/rena-bomba', elevation_gain: 857, elevation_loss: 44 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Aviatico, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAviaticoPoeito_EBIKE.gpx', link: '2023/01/amora', elevation_gain: 329, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Aviatico, Forca, Monte Poieto', kind: 'up', file: 'Seriana_SalitaAviaticoForcaPoieto_EBIKE.gpx', link: '2023/01/amora', elevation_gain: 434, elevation_loss: 43 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Mer\u00E0, Tribulina di Ganda', kind: 'up', file: 'Seriana_SalitaGazzanigaMeraGanda_EBIKE.gpx', link: '2023/01/522', elevation_gain: 801, elevation_loss: 52 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Val del Gr\u00F9, Monte Poieto', kind: 'up', file: 'Seriana_SalitaGazzanigaGruPoieto_EBIKE.gpx', link: '2023/09/poieto-gazzaniga', elevation_gain: 1060, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Vertova, Val del Gr\u00F9, C\u00E0 Donadoni', kind: 'up', file: 'Seriana_SalitaVertovaGruDonadoni_EBIKE.gpx', link: '2023/09/donadoni', elevation_gain: 980, elevation_loss: 144 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Vertova, Val del Gr\u00F9, Monte Poieto', kind: 'up', file: 'Seriana_SalitaVertovaGruPoieto_EBIKE.gpx', link: '2023/09/poieto-516', elevation_gain: 1016, elevation_loss: 88 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Ganda', kind: 'up', file: 'Seriana_SalitaGazzanigaGanda_EBIKE.gpx', link: '2019/05/521', elevation_gain: 720, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Gazzaniga, Coldre, Val del Gru', kind: 'up', file: 'Seriana_SalitaGazzanigaColdreGru_EBIKE.gpx', link: '2025/05/plazza', elevation_gain: 800, elevation_loss: 78 },

// trek
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana', name: 'Anello del Misma', kind: 'trek', file: 'Seriana_AnelloDelMisma_EBIKE.gpx', link: '2024/09/anello-misma', elevation_gain: 867, elevation_loss: 862 },

// sud
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Ciclabile Valle Seriana', kind: 'up', file: 'Seriana_CiclabileValleSeriana.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 145, elevation_loss: 32 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Ciclovia delle Rogge', kind: 'up', file: 'Seriana_CicloviaDelleRogge.gpx', link: '2019/03/salite-valle-seriana', elevation_gain: 49, elevation_loss: 16 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Pradale, Costa Sorgenti, Cornale', kind: 'down', file: 'Seriana_PradaleCostaSorgenti.gpx', link: '2021/03/pradale-costa-sorgenti', elevation_gain: 4, elevation_loss: 409 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Pradale, Val Coler, Rinnovata', kind: 'down', file: 'Seriana_PradaleColerRinnovata.gpx', link: '2021/03/pradale-val-coler-rinnovata', elevation_gain: 59, elevation_loss: 453 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana, misma', name: 'Misma, Pradale', kind: 'down', file: 'Seriana_MismaPradale.gpx', link: '2020/05/misma', elevation_gain: 18, elevation_loss: 855 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana, misma', name: 'Misma, Pratolina', kind: 'down', file: 'Seriana_MismaPratolina.gpx', link: '2021/03/misma-pratolina', elevation_gain: 117, elevation_loss: 972 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Val Coler, Sant Antonio', kind: 'down', file: 'Seriana_ColerSantAntonio.gpx', link: '2021/06/val-coler-sant-antonio', elevation_gain: 2, elevation_loss: 331 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'bassa_seriana', name: 'Val Coler, Vertical', kind: 'down', file: 'Seriana_ColerVertical.gpx', link: '2021/04/val-coler-vertical', elevation_gain: 0, elevation_loss: 332 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Val Coler, Biroli, Cornale', kind: 'down', file: 'Seriana_ColerBiroliCornale.gpx', link: '2021/04/val-coler-biroli-cornale', elevation_gain: 13, elevation_loss: 316 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Carezzola', kind: 'down', file: 'Seriana_BastiaCarezzola.gpx', link: '2021/04/scanzorosciate', elevation_gain: 1, elevation_loss: 121 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Carezzola 2', kind: 'down', file: 'Seriana_BastiaCarezzola2.gpx', link: '2021/04/scanzorosciate', elevation_gain: 2, elevation_loss: 121 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Centrale', kind: 'down', file: 'Seriana_BastiaCentrale.gpx', link: '2021/04/scanzorosciate', elevation_gain: 2, elevation_loss: 155 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Fola', kind: 'down', file: 'Seriana_BastiaFola.gpx', link: '2021/04/scanzorosciate', elevation_gain: 0, elevation_loss: 146 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Gianino', kind: 'down', file: 'Seriana_BastiaGianino.gpx', link: '2021/04/scanzorosciate', elevation_gain: 0, elevation_loss: 108 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Bastia, Valbona', kind: 'down', file: 'Seriana_BastiaValbona.gpx', link: '2021/04/scanzorosciate', elevation_gain: 0, elevation_loss: 97 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Prati Moletti, Cene', kind: 'down', file: 'Seriana_MonteAltinoPratiMolettiCene.gpx', link: '2024/11/altino', elevation_gain: 94, elevation_loss: 721 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Canfer, Cene', kind: 'down', file: 'Seriana_MonteAltinoCanfer.gpx', link: '2024/11/altino-canfer', elevation_gain: 133, elevation_loss: 773 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Vall Alta, Cene', kind: 'down', file: 'Seriana_MonteAltinoVallAlta.gpx', link: '2024/12/altino-vallalta', elevation_gain: 48, elevation_loss: 686 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Dossello, Cene', kind: 'down', file: 'Seriana_MonteAltinoDosselloCene.gpx', link: '2024/12/altino-dossello', elevation_gain: 71, elevation_loss: 720 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Grumelduro, Cene', kind: 'down', file: 'Seriana_MonteAltinoGrumelduro.gpx', link: '2025/01/altino-grumelduro', elevation_gain: 107, elevation_loss: 739 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Altino, Abbazia', kind: 'down', file: 'Seriana_MonteAltinoAbbazia.gpx', link: '2025/01/altino-abbazia', elevation_gain: 56, elevation_loss: 658 },
{ vote: 5, rate: 1, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Beio DH, Cene', kind: 'down', file: 'Seriana_MonteBeioDHCene.gpx', link: '2025/02/beio-dh', elevation_gain: 32, elevation_loss: 369 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_seriana', name: 'Monte Bue, Monte Croce, Monte Beio, Cene', kind: 'down', file: 'Seriana_MonteBueCroceBeioCene_EBIKE.gpx', link: '2025/03/bo-croce-beio', elevation_gain: 1089, elevation_loss: 1002 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Pier, Rolling Stones, Val Rossa', kind: 'down', file: 'Seriana_MontePierRollingStonesValRossa.gpx', link: '2025/03/rolling-stones', elevation_gain: 109, elevation_loss: 757 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Monte Pier, Bretei Peia, Monte Beio', kind: 'down', file: 'Seriana_MontePierBreteiPeiaSanRoccoCavalliCene.gpx', link: '2025/03/bretei-cavalli', elevation_gain: 177, elevation_loss: 813 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Morosini, Ripetitori, Monte Misma', kind: 'up', file: 'Seriana_SalitaMismaRipetitori_EBIKE.gpx', link: '2021/04/misma-santa-maria-cenate-sopra', elevation_gain: 839, elevation_loss: 13 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 6, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Forcella, Monte Misma', kind: 'up', file: 'Seriana_SalitaForcellaMisma_EBIKE.gpx', link: '2021/03/misma-pratolina', elevation_gain: 886, elevation_loss: 40 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana, misma', name: 'Salita da Pradalunga, Forcella, Ripetitori, Monte Misma', kind: 'up', file: 'Seriana_SalitaForcellaRipetitoriMisma_EBIKE.gpx', link: '2021/04/misma-santa-maria-cenate-sopra', elevation_gain: 873, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Salita al Monte Bastia', kind: 'up', file: 'Seriana_SalitaBastia_EBIKE.gpx', link: '2021/04/scanzorosciate', elevation_gain: 198, elevation_loss: 50 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Salita alla Forcella del Cagnolo, Moette', kind: 'up', file: 'Seriana_SalitaCagnoloMoette_EBIKE.gpx', link: '2021/04/scanzorosciate', elevation_gain: 183, elevation_loss: 49 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana, bastia', name: 'Salita alla Via Pomarolo', kind: 'up', file: 'Seriana_SalitaPomarolo_EBIKE.gpx', link: '2021/04/scanzorosciate', elevation_gain: 177, elevation_loss: 7 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita alla Val Coler', kind: 'up', file: 'Seriana_SalitaTribulinaColer_EBIKE.gpx', link: '2021/04/val-coler-vertical', elevation_gain: 334, elevation_loss: 28 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita da Cornale, Pradale', kind: 'up', file: 'Seriana_SalitaCornalePradale_EBIKE.gpx', link: '2021/03/pradale-costa-sorgenti', elevation_gain: 381, elevation_loss: 51 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Cene, Monte Altino', kind: 'up', file: 'Seriana_SalitaCeneMonteAltino_EBIKE.gpx', link: '2024/11/altino', elevation_gain: 706, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Cene, Santuario di Altino, Periplo e cima Monte Altino', kind: 'up', file: 'Seriana_SalitaCenePeriploCimaMonteAltino_EBIKE.gpx', link: '2024/12/altino-dossello', elevation_gain: 787, elevation_loss: 147 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Abbazia, Prati Moletti, Santuario di Altino, Monte Altino', kind: 'up', file: 'Seriana_AbbaziaMolettiMonteAltino_EBIKE.gpx', link: '2025/01/altino-abbazia', elevation_gain: 722, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_seriana', name: 'Salita Cene, Monte Beio', kind: 'up', file: 'Seriana_SalitaCeneMonteBeio_EBIKE.gpx', link: '2025/02/beio-dh', elevation_gain: 411, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_seriana', name: 'Salita Cene, Monte Bue, Monte Croce, Monte Pier', kind: 'up', file: 'Seriana_SalitaCeneMonteBueCrocePier_EBIKE.gpx', link: '2025/03/rolling-stones', elevation_gain: 829, elevation_loss: 166 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Ganda al Monte Poieto', kind: 'up', file: 'Seriana_SalitaGandaPoieto.gpx', link: '2019/03/poieto-dh', elevation_gain: 293, elevation_loss: 11 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Nembro, Salmezza', kind: 'up', file: 'Seriana_SalitaNembroSalmezza_EBIKE.gpx', link: '2024/06/salmezza-vita', elevation_gain: 780, elevation_loss: 9 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Nembro, Selvino, Pista da Sci', kind: 'up', file: 'Seriana_SalitaNembroSelvinoPista_EBIKE.gpx', link: '2019/04/trevasco', elevation_gain: 655, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Cene, Santuario di Altino, Monte Altino', kind: 'up', file: 'Seriana_SalitaCeneSantuarioMonteAltino_EBIKE.gpx', link: '2024/11/altino-canfer', elevation_gain: 700, elevation_loss: 0 },

//
// MEDIA SERIANA (oltre Gazzaniga)
//
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Forcella Vaccaro, 240, Parre', kind: 'down', file: 'Seriana_ForcellaVaccaro240Parre.gpx', link: '2021/11/vaccaro-forcella', elevation_gain: 1, elevation_loss: 1084 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Passo di Bliben, 529 Easy, Vertova', kind: 'down', file: 'Seriana_Bliben529EasyVertova.gpx', link: '2021/12/529-easy', elevation_gain: 32, elevation_loss: 914 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Baita Garda, Dasla, 528 Special, Vertova', kind: 'down', file: 'Seriana_GardaDasla528SpecialVertova.gpx', link: '2021/12/528-special', elevation_gain: 40, elevation_loss: 836 },
{ vote: 3, rate: 1, rate_max: 3, cycle: 0, zone: 'media_seriana', name: 'Tisa, 518, Bondo, Ponte Nossa', kind: 'down', file: 'Seriana_Tisa518BondoPonteNossa.gpx', link: '2022/01/monte-tisa-518-bondo', elevation_gain: 22, elevation_loss: 893 },
{ vote: 3, rate: 4, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Passo di Bliben, 529 Hard, Vertova', kind: 'down', file: 'Seriana_Bliben529HardVertova.gpx', link: '2022/01/529-hard', elevation_gain: 16, elevation_loss: 892 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, 530', name: '530 George', kind: 'down', file: 'Seriana_530George.gpx', link: '2023/03/530-george', elevation_gain: 7, elevation_loss: 774 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, 530', name: '530 Original', kind: 'down', file: 'Seriana_530Original.gpx', link: '2023/03/530-george', elevation_gain: 7, elevation_loss: 773 },
{ vote: 5, rate: 3, rate_max: 4, cycle: 0, zone: 'media_seriana', name: 'Cima Vaccaro Freeride', kind: 'down', file: 'Seriana_CimaVaccaroFreeRide.gpx', link: '2023/03/cima-vaccaro-freeride', elevation_gain: 13, elevation_loss: 1352 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana', name: 'Colle di Zambla, Madonna del Frassino', kind: 'down', file: 'Seriana_ColleDiZamblaFrassinoSantuarioSantissimo.gpx', link: '2024/11/frassino', elevation_gain: 171, elevation_loss: 924 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Capanna Ilaria, Alpe Fogarolo, San Lucio, Clusone', kind: 'down', file: 'Seriana_CapannaIlariaAlpeFogaroloSanLucioClusone.gpx', elevation_gain: 182, elevation_loss: 990 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'media_seriana', name: 'Capanna Ilaria, San Lucio, Vogno', kind: 'down', file: 'Seriana_CapannaIlariaSanLucioVogno.gpx', link: '2025/08/vogno-ilaria', elevation_gain: 54, elevation_loss: 913 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana', name: 'Alpe Fogarolo, Via Sandrera, Vogno', kind: 'down', file: 'Seriana_AlpeFogaroloViaSandreraVogno.gpx', link: '2025/08/sandrera', elevation_gain: 14, elevation_loss: 773 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Parre, Rifugio Vaccaro, Forcella', kind: 'up', file: 'Seriana_SalitaParreVaccaroForcella_EBIKE.gpx', link: '2021/11/vaccaro-forcella', elevation_gain: 1209, elevation_loss: 101 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Vertova, Passo di Bliben', kind: 'up', file: 'Seriana_SalitaVertovaDaslaBliben_EBIKE.gpx', link: '2021/12/529-easy', elevation_gain: 913, elevation_loss: 31 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Vertova, Bondo, Cavlera, Baita Garda', kind: 'up', file: 'Seriana_SalitaVertovaBondoCavleraGarda_EBIKE.gpx', link: '2021/12/528-special', elevation_gain: 864, elevation_loss: 74 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'media_seriana', name: 'Salita Ponte Nossa, Barbata, Cima di Tisa', kind: 'up', file: 'Seriana_SalitaPonteNossaBarbataTisa_EBIKE.gpx', link: '2022/01/monte-tisa-518-bondo', elevation_gain: 910, elevation_loss: 24 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 23, zone: 'media_seriana', name: 'Salita Parre, Cima Vaccaro', kind: 'up', file: 'Seriana_SalitaCimaVaccaro_EBIKE.gpx', link: '2023/03/cima-vaccaro-freeride', elevation_gain: 1368, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Santuario Santissimo, Colle di Zambla', kind: 'up', file: 'Seriana_SalitaSantuarioSantissimoColleDiZambla_EBIKE.gpx', link: '2024/11/frassino', elevation_gain: 824, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'media_seriana', name: 'Salita Clusone, Capanna Ilaria', kind: 'up', file: 'Seriana_SalitaClusoneCapannaIlaria_EBIKE.gpx', elevation_gain: 878, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'media_seriana', name: 'Salita Vogno, Alpe Fogarolo, Capanna Ilaria', kind: 'up', file: 'Seriana_SalitaVognoAlpeFogaroloCapannaIlaria_EBIKE.gpx', link: '2025/08/vogno-ilaria', elevation_gain: 971, elevation_loss: 83 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana', name: 'Salita Vogno, Succo Martino, Prat di Ciese, Alpe Fogarolo', kind: 'up', file: 'Seriana_SalitaVognoSuccoMartinoPratDiCieseAlpeFogarolo_EBIKE.gpx', link: '2025/08/sandrera', elevation_gain: 850, elevation_loss: 42 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '530', name: 'Salita Vertova, Rifugio Cavlera', kind: 'up', file: 'Seriana_SalitaVertovaCavlera_EBIKE.gpx', link: '2023/03/530-george', elevation_gain: 773, elevation_loss: 5 },

//
// GANDINO
//
{ vote: 5, rate: 1, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Pizzo Formico, Monte Farno, 543, Casnigo', kind: 'down', file: 'Gandino_FormicoFarno543Casnigo.gpx', link: '2022/01/formico-543-casnigo', elevation_gain: 22, elevation_loss: 1146 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Pizzo Formico, Rifugio Parafulmine, Groaro, Gandino', kind: 'down', file: 'Gandino_FormicoParafulmineGroaroGandino.gpx', link: '2022/01/pizzo-formico-groaro', elevation_gain: 124, elevation_loss: 1225 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Giro Val Gandino, Rifugio Parafulmine, Malga Lunga, Monte Sparavera', kind: 'down', file: 'Gandino_ParafulmineMalgaLungaSparavera547Gandino.gpx', link: '2022/01/giro-val-gandino', elevation_gain: 278, elevation_loss: 1294 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Monte Sparavera, Leffe', kind: 'down', file: 'Gandino_SparaveraLeffe.gpx', link: '2022/02/leffe-malga-lunga', elevation_gain: 30, elevation_loss: 958 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Rifugio Parafulmine, Guazza, Monte Farno, Pizzo di Casnigo', kind: 'down', file: 'Gandino_ParafulmineGuazzaFarnoPizzoCasnigo.gpx', link: '2025/06/parafulmine-pizzo-casnigo', elevation_gain: 101, elevation_loss: 1094 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'media_seriana, gandino', name: 'Monte Farno, Cirano, Barzizza', kind: 'down', file: 'Gandino_MonteFarnoCiranoBarzizza.gpx', link: '2025/06/farno-cirano', elevation_gain: 165, elevation_loss: 830 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Monte Farno, Valle Gaggio', kind: 'down', file: 'Gandino_MonteFarnoValleGaggio.gpx', link: '2025/07/farno-gaggio', elevation_gain: 37, elevation_loss: 723 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: "6 minuti con ultimi 30m dislivello a spinta", zone: 'media_seriana, gandino', name: 'Salita Casnigo, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaCasnigoFarnoFormico_EBIKE.gpx', link: '2022/01/formico-543-casnigo', elevation_gain: 1146, elevation_loss: 17 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "6 minuti con ultimi 30m dislivello a spinta", zone: 'media_seriana, gandino', name: 'Salita Gandino, Monte Farno, Pizzo Formico', kind: 'up', file: 'Gandino_SalitaGandinoFarnoFormico_EBIKE.gpx', link: '2022/01/pizzo-formico-groaro', elevation_gain: 1110, elevation_loss: 12 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Gandino, Monte Farno, Rifugio Parafulmine', kind: 'up', file: 'Gandino_SalitaGandinoFarnoParafulmine_EBIKE.gpx', link: '2022/01/giro-val-gandino', elevation_gain: 1056, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Leffe, Malga Lunga, Monte Sparavera', kind: 'up', file: 'Gandino_SalitaLeffeMalgaLungaSparevera_EBIKE.gpx', link: '2022/02/leffe-malga-lunga', elevation_gain: 1058, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Casnigo, Erbia, Monte Farno, Rifugio Parafulmine', kind: 'up', file: 'Gandino_SalitaCasnigoErbiaFarnoParafulmine_EBIKE.gpx', link: '2025/06/parafulmine-pizzo-casnigo', elevation_gain: 1163, elevation_loss: 150 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'media_seriana, gandino', name: 'Salita Casnigo, Monte Farno', kind: 'up', file: 'Gandino_SalitaCasnigoMonteFarno_EBIKE.gpx', link: '2025/07/farno-gaggio', elevation_gain: 766, elevation_loss: 24 },

//
// VALSASSINA
//
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'valsassina', name: 'Arvaggio 2000, Piani di Artavaggio, Vasca, Moggio', kind: 'down', file: 'Valsassina_CazzanigaArtavaggioVascaNeve.gpx', link: '2020/01/artavaggio', elevation_gain: 80, elevation_loss: 1073 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'valsassina', name: 'Salita Moggio, Piani di Artavaggio, Artavaggio 2000', kind: 'up', file: 'Valsassina_MoggioArtavaggioCazzaniga.gpx', link: '2020/01/artavaggio', elevation_gain: 1027, elevation_loss: 33 },

//
// TALEGGIO
//
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'taleggio', name: 'Piani di Artavaggio, Rifugio Gherardi, Ponte Becco', kind: 'down', file: 'Taleggio_ArtavaggioGherardiPonteBecco.gpx', link: '2022/03/artavaggio-gherardi-becco', elevation_gain: 238, elevation_loss: 1284 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Sella, Corno Zuccone, Reggetto, Sottochiesa', kind: 'down', file: 'Taleggio_SellaZucconeReggettoSottochiesa.gpx', link:'2022/04/corno-zuccone', elevation_gain: 22, elevation_loss: 756 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 3, zone: 'taleggio', name: 'Passo Grialeggio, Baita Canvervo, Cantiglio, Ponte Becco', kind: 'down', file: 'Taleggio_GrialeggioCancervoCantiglioBecco.gpx', link: '2022/05/grialeggio-ponte-becco', elevation_gain: 84, elevation_loss: 1366 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 4, zone: 'taleggio', name: 'Canti, Tre Faggi, Corna Bianca, Peghera', kind: 'down', file: 'Taleggio_CantiTreFaggiCornaBiancaPeghera.gpx', link: '2022/05/canti-tre-faggi-corna-bianca', elevation_gain: 103, elevation_loss: 829 },
{ vote: 2, rate: 2, rate_max: 4, cycle: 0, zone: 'taleggio', name: 'Canti, Peghera', kind: 'down', file: 'Taleggio_CantiPeghera.gpx', link: '2022/08/canti-peghera', elevation_gain: 4, elevation_loss: 713 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Pizzo Baciamorti, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_BaciamortiSottochiesa.gpx', link: '2022/05/baciamorti', elevation_gain: 72, elevation_loss: 1266 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'taleggio', name: 'Piani di Artavaggio, Reggetto, Sottochiesa', kind: 'down', file: 'Taleggio_ArtavaggioReggettoSottochiesa.gpx', link: '2022/09/artavaggio-reggetto', elevation_gain: 33, elevation_loss: 907 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'taleggio', name: 'Pizzo Baciamorti, Bocchetta di Regadur, Ridugio Gherardi, Sottochiesa', kind: 'down', file: 'Taleggio_BaciamortiRegadurGherardiSottochiesa.gpx', link: '2022/09/baciamorti-antiorario', elevation_gain: 90, elevation_loss: 1348 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Cima di Piazzo, Bocchetta di Regadur, Ridugio Gherardi, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_CimaPiazzoNicolaRegadurGherardiFraggioSottochiesa.gpx', link: '2022/10/cima-di-piazzo', elevation_gain: 136, elevation_loss: 1440 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Corno Zuccone, Fraggio, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaZucconeSudFraggioSottochiesa.gpx', link: '2022/10/corno-zuccone-sud', elevation_gain: 176, elevation_loss: 1296 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Corno Zuccone, 151B, Reggetto, Pizzino, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaArtavaggioZuccone151BPizzinoSottochiesa.gpx', link: '2022/10/corno-zuccone-151b', elevation_gain: 158, elevation_loss: 1270 },
{ vote: 4, rate: 2, rate_max: 0, cycle: "dipende dalla neve", zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Fraggio, Sottochiesa (INVERNALE)', kind: 'down', file: 'Taleggio_NicolaArtavaggioFraggioSottochiesaInvernale.gpx', link: '2023/01/nicola-neve', elevation_gain: 30, elevation_loss: 1182 },
{ vote: 4, rate: 2, rate_max: 0, cycle: "dipende dalla neve", zone: 'taleggio', name: 'Rifugio Nicola, Piani di Artavaggio, Reggetto, Sottochiesa (INVERNALE)', kind: 'down', file: 'Taleggio_NicolaArtavaggioReggettoSottochiesaInvernale.gpx', link: '2024/02/nicola-reggetto-neve', elevation_gain: 44, elevation_loss: 1164 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita, Ponte Becco, Sottochiesa, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaBeccoSottochiesaArtavaggio_EBIKE.gpx', link: '2022/03/artavaggio-gherardi-becco', elevation_gain: 1070, elevation_loss: 22 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Reggetto, Avolasio, Sella', kind: 'up', file: 'Taleggio_SalitaSottochiesaReggettoAvolasioSella_EBIKE.gpx', link:'2022/04/corno-zuccone', elevation_gain: 963, elevation_loss: 246 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'taleggio, brembana', name: 'Salita San Giovanni Bianco, Pianca, Passo Grialeggio', kind: 'up', file: 'Taleggio_SalitaSGBiancoPiancaGrialeggio_EBIKE.gpx', link: '2022/05/grialeggio-ponte-becco', elevation_gain: 1276, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'taleggio, brembana', name: 'Salita Peghera, Ponte Senesi, Vedeseta, Bocca del Grassello, Canti', kind: 'up', file: 'Taleggio_SalitaPegheraVedesetaCanti_EBIKE.gpx', link: '2022/05/canti-tre-faggi-corna-bianca', elevation_gain: 1075, elevation_loss: 325 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 10, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Piani di Artavaggio, Pizzo Baciamorti', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioBaciamorti_EBIKE.gpx', link: '2022/05/baciamorti', elevation_gain: 1338, elevation_loss: 128 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Rifugio Gherardi, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaSottochiesaGherardiArtavaggio_EBIKE.gpx', link: '2022/09/artavaggio-reggetto', elevation_gain: 1115, elevation_loss: 197 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 18, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Quindicina, Passo e Pizzo Baciamorti', kind: 'up', file: 'Taleggio_SalitaSottochiesaQuindicinaBaciamorti_EBIKE.gpx', link: '2022/09/baciamorti-antiorario', elevation_gain: 1303, elevation_loss: 44 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola, Cima di Piazzo', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicolaCimaPiazzo_EBIKE.gpx', link: '2022/10/cima-di-piazzo', elevation_gain: 1333, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'taleggio, brembana', name: 'Salita Sottochiesa, Culmine di San Pietro, Piani di Artavaggio, Rifugio Nicola (INVERNALE)', kind: 'up', file: 'Taleggio_SalitaSottochiesaSanPietroArtavaggioNicolaInvernale_EBIKE.gpx', link: '2023/01/nicola-neve', elevation_gain: 1331, elevation_loss: 209 },

// overlapping
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: '', name: 'Rifugio Nicola, Bocchetta di Redagur, Rifugio Gherardi, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_NicolaGherardiFraggioSottochiesa.gpx', link: '2022/03/nicola-regadur-gherardi', elevation_gain: 154, elevation_loss: 1295 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicola_EBIKE.gpx', link: '2022/03/nicola-regadur-gherardi', elevation_gain: 1141, elevation_loss: 21 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: '', name: 'Piani di Artavaggio, Fraggio, Sottochiesa', kind: 'down', file: 'Taleggio_ArtavaggioFraggioSottochiesa.gpx', link: '2022/04/artagaggio-fraggio', elevation_gain: 77, elevation_loss: 978 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Avolasio, Piani di Artavaggio', kind: 'up', file: 'Taleggio_SalitaSottochiesaAvolasioArtavaggio_EBIKE.gpx', link: '2022/04/artagaggio-fraggio', elevation_gain: 1065, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Rifugio Gherardi, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaGherardiArtavaggioNicola_EBIKE.gpx', link: '2022/10/corno-zuccone-sud', elevation_gain: 1368, elevation_loss: 196 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicola_EBIKE.gpx', link: '2022/10/corno-zuccone-151b', elevation_gain: 1141, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Sottochiesa, Piani di Artavaggio, Rifugio Nicola (INVERNALE)', kind: 'up', file: 'Taleggio_SalitaSottochiesaArtavaggioNicolaInvernale_EBIKE.gpx', link: '2024/02/nicola-reggetto-neve', elevation_gain: 1193, elevation_loss: 21 },

// trek
{ vote: 5, rate: 0, rate_max: 1, cycle: 0, zone: 'taleggio', name: 'Epic Tour Val Taleggio', kind: 'trek', file: 'Taleggio_AnelloTaleggio_EBIKE.gpx', link: '2024/03/epic-tour-taleggio', elevation_gain: 1831, elevation_loss: 1819 },

//
// BREMBILLA
//
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Tre Faggi, Blello, Brembilla', kind: 'down', file: 'Brembilla_TreFaggiBlelloBrembilla.gpx', link: '2021/07/tre-faggi-blello-brembilla', elevation_gain: 11, elevation_loss: 953 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Piazzacava, Gerosa, Foppa, Brembilla', kind: 'down', file: 'Brembilla_PiazzacavaFoppaBrembilla.gpx', link: '2021/07/piazzacava-gerosa-foppa', elevation_gain: 105, elevation_loss: 808 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Piane, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroPianeBrembilla.gpx', link: '2021/07/pizzo-cerro-piane-brembilla', elevation_gain: 18, elevation_loss: 857 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Fienili, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroFieniliBrembilla.gpx', link: '2021/08/pizzo-cerro-fienili-brembilla', elevation_gain: 32, elevation_loss: 867 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 3, zone: 'bassa_brembana, brembilla', name: 'Pizzo Cerro, Cavaglia, Brembilla', kind: 'down', file: 'Brembilla_PizzoCerroCavaglia.gpx', link: '2021/07/pizzo-cerro-cavaglia-brembilla', elevation_gain: 37, elevation_loss: 868 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Forcella di Berbenno, Ripe, Brembilla', kind: 'down', file: 'Brembilla_BerbennoRipeBrembilla.gpx', link: '2021/09/ripe', elevation_gain: 2, elevation_loss: 335 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Berbenno CAT, Lera, Brembilla', kind: 'down', file: 'Brembilla_BerbennoLeraBrembilla.gpx', link: '2021/09/lera', elevation_gain: 8, elevation_loss: 335 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Catremerio, Truca, Brembilla', kind: 'down', file: 'Brembana_CatremerioTruca.gpx', link: '2020/11/catremerio-truca-brembilla', elevation_gain: 14, elevation_loss: 587 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Passo Mercante del Ferro, Forcella di Bura, Brembilla', kind: 'down', file: 'Brembana_PassoMercanteDelFerroBuraBrembilla.gpx', link: '2021/08/monte-foldone-e-sornadello', elevation_gain: 27, elevation_loss: 1129 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Corna Marcia, Laxolo, Brembilla', kind: 'down', file: 'Brembilla_CornaMarciaLaxoloBrembilla.gpx', link: '2023/05/corna-marcia-laxolo', elevation_gain: 5, elevation_loss: 647 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Zuccone dell\'Arco, Rifugio GESP, 592A, Brembilla', kind: 'down', file: 'Brembilla_ZucconeArcoGESPSAntonio592ABrembilla.gpx', link: '2024/01/zuccone-arco', elevation_gain: 96, elevation_loss: 914 },
{ vote: 3, rate: 2, rate_max: 4, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Monte Zucco, Pernice, Zogno', kind: 'down', file: 'Brembana_ZuccoPerniceZogno.gpx', link: '2024/03/monte-zucco', elevation_gain: 9, elevation_loss: 909 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Piazzacava', kind: 'up', file: 'Brembilla_SalitaBrembillaPiazzacava_EBIKE.gpx', link: '2021/07/piazzacava-gerosa-foppa', elevation_gain: 890, elevation_loss: 149 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Tre Faggi', kind: 'up', file: 'Brembilla_SalitaBrembillaTreFaggi_EBIKE.gpx', link: '2021/07/tre-faggi-blello-brembilla', elevation_gain: 993, elevation_loss: 21 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Crosnello, Pizzo Cerro', kind: 'up', file: 'Brembilla_SalitaBrembillaCrosnelloPizzoCerro_EBIKE.gpx', link: '2021/07/pizzo-cerro-piane-brembilla', elevation_gain: 894, elevation_loss: 49 },
{ vote: 0, rate: 0, rate_max: 0, cycle: "35 minuti, 200m dislivello a spinta", zone: 'bassa_brembana, brembilla', name: 'Salita Catremerio, Passo del Mercante del Ferro', kind: 'up', file: 'Brembana_SalitaCatremerioPassoMercanteDelFerro_EBIKE.gpx', link: '2021/08/monte-foldone-e-sornadello', elevation_gain: 1265, elevation_loss: 143 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Berbenno CAT', kind: 'up', file: 'Brembilla_SalitaBrembillaCAT_EBIKE.gpx', link: '2021/09/lera', elevation_gain: 420, elevation_loss: 45 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Forcella di Berbenno', kind: 'up', file: 'Brembilla_SalitaBrembillaForcellaBerbenno_EBIKE.gpx', link: '2021/09/ripe', elevation_gain: 387, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Castignola, S. Antonio Abbandonato, Strada Taverna, Catremerio', kind: 'up', file: 'Brembilla_SalitaCastignolaSAntonioTavernaCatremerio_EBIKE.gpx', link: '2020/11/catremerio-truca-brembilla', elevation_gain: 693, elevation_loss: 66 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Colle di Berbenno, Corna Marcia', kind: 'up', file: 'Brembilla_SalitaBrembillaCornaMarcia_EBIKE.gpx', link: '2023/05/corna-marcia-laxolo', elevation_gain: 624, elevation_loss: 37 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'bassa_brembana, brembilla', name: 'Salita Brembilla, Catremerio, Zuccone dell\'Arco', kind: 'up', file: 'Brembilla_SalitaBrembillaCatremerioZucconeArco_EBIKE.gpx', link: '2024/01/zuccone-arco', elevation_gain: 990, elevation_loss: 61 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 13, zone: 'bassa_brembana, brembilla', name: 'Salita Zogno, Catremerio, Monte Zucco', kind: 'up', file: 'Brembana_SalitaZognoCatremerioZucco_EBIKE.gpx', link: '2024/03/monte-zucco', elevation_gain: 1114, elevation_loss: 193 },

// unlisted
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: '', name: 'Passo del Canto, Laxolo, Brembilla', kind: 'down', file: 'Brembilla_CantoLaxoloBrembilla.gpx', link: '2021/11/laxolo', elevation_gain: 1, elevation_loss: 461 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita dal Colle di Berbenno al Passo del Canto', kind: 'up', file: 'Brembilla_SalitaColleBerbennoCanto_EBIKE.gpx', link: '2021/11/laxolo', elevation_gain: 137, elevation_loss: 8 },

//
// BASSA BREMBANA
//
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'S. Antonio Abbandonato, Casarielli, Zogno', kind: 'down', file: 'Brembana_SAntonioCasarielli.gpx', link: '2020/07/casarielli', elevation_gain: 12, elevation_loss: 674 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'S. Antonio Abbandonato, Strada Taverna, Ponti', kind: 'down', file: 'Brembana_SAntonioTaverna.gpx', link: '2020/07/strada-taverna', elevation_gain: 6, elevation_loss: 669 },
{ vote: 2, rate: 2, rate_max: 4, cycle: 0, zone: 'bassa_brembana', name: 'Ca del C\u00E8co, Sonzogno, Pernice, Zogno', kind: 'down', file: 'Brembana_CecoSonzognoPerniceZogno.gpx', link: '2021/06/ceco-sonzogno-pernice', elevation_gain: 31, elevation_loss: 790 },
{ vote: 2, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: '505A, Zogno', kind: 'down', file: 'Brembana_505AZogno.gpx', link: '2021/06/ceco-sonzogno-pernice', elevation_gain: 0, elevation_loss: 387 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Crosnello, Sussia, Vettarola', kind: 'down', file: 'Brembana_CrosnelloSussiaVettarola.gpx', link: '2020/08/crosnello-sussia-vettarola-san', elevation_gain: 107, elevation_loss: 854 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo di Spino, San Pellegrino', kind: 'down', file: 'Brembana_PizzoSpinoSanPellegrino.gpx', link: '2020/11/pizzo-spino', elevation_gain: 59, elevation_loss: 668 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Forcella di Spettino, Molini, San Gallo, San Pellegrino', kind: 'down', file: 'Brembana_ForcellaSpettinoMoliniSanGallo.gpx', link: '2021/02/forcella-di-spettino-molini', elevation_gain: 205, elevation_loss: 890 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 1, zone: 'bassa_brembana', name: 'Periplo del Monte Gioco', kind: 'down', file: 'Brembana_PeriploMonteGioco_EBIKE.gpx', link: '2021/02/periplo-monte-gioco', elevation_gain: 477, elevation_loss: 1017 },
{ vote: 5, rate: 4, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Valcumina', kind: 'down', file: 'Brembana_Valcumina.gpx', link: '2021/05/valcumina', elevation_gain: 4, elevation_loss: 625 },
{ vote: 1, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana, frasnito', name: 'Sussia Alta, Frasnito, San Pellegrino', kind: 'down', file: 'Brembana_SussiaFrasnito.gpx', link: '2021/03/sussia-frasnito', elevation_gain: 12, elevation_loss: 701 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana, frasnito', name: 'Vetta, Frasnito', kind: 'down', file: 'Brembana_VettaFrasnito.gpx', link: '2021/03/sussia-frasnito', elevation_gain: 0, elevation_loss: 128 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Monte Molinasco, San Giovanni Bianco', kind: 'down', file: 'Brembana_MolinascoSanGiovanniBianco.gpx', link: '2021/03/monte-molinasco', elevation_gain: 61, elevation_loss: 819 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, pradai', name: 'Panchina Gigante, Pradai, Frasnadello', kind: 'down', file: 'Brembana_PanchinaGigantePradaiFrasnadello.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello', elevation_gain: 323, elevation_loss: 1010 },
{ vote: 2, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana, pradai', name: 'Campel, Cresta, Frasnadello', kind: 'down', file: 'Brembana_CampelCrestaFrasnadello.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello', elevation_gain: 45, elevation_loss: 207 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Monte Vaccareggio, Camerata Cornello', kind: 'down', file: 'Brembana_VaccareggioCamerataCornello.gpx', link: '2023/08/vaccareggio', elevation_gain: 80, elevation_loss: 1078 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Monte Vaccareggio, San Pietro, San Giovanni Bianco', kind: 'down', file: 'Brembana_VaccareggioSanPietroSanGiovanniBianco.gpx', link: '2023/10/vaccareggio-bianco', elevation_gain: 63, elevation_loss: 1088 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Monte Vaccareggio, S.S. Trinit\u00E0, San Giovanni Bianco', kind: 'down', file: 'Brembana_VaccareggioTrinitaSanGiovanniBianco.gpx', link: '2023/11/vaccareggio-trinita', elevation_gain: 82, elevation_loss: 1133 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 3, zone: 'bassa_brembana', name: 'Monte Castello, Mosche, Ambria, Zogno', kind: 'down', file: 'Brembana_MonteCastelloMoscheZogno.gpx', link: '2023/11/castello-mosche', elevation_gain: 160, elevation_loss: 934 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Monte Castello, Passata, Endenna, Zogno', kind: 'down', file: 'Brembana_MonteCastelloPassataEndennaZogno.gpx', link: '2023/11/giro-castello', elevation_gain: 73, elevation_loss: 848 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Monte Castello, Val Pagana, Strada Birocciabile', kind: 'down', file: 'Brembana_MonteCastelloValPaganaBirocciabile.gpx', link: '2023/11/pagana-birocciabile', elevation_gain: 80, elevation_loss: 840 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Stalla Fopp, Poscante, Zogno', kind: 'down', file: 'Brembana_StallaFoppPoscante.gpx', link: '2024/04/poscante-back', elevation_gain: 70, elevation_loss: 910 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Canto Basso, Poscante, Zogno', kind: 'down', file: 'Brembana_CantoBassoPoscanteZogno.gpx', link: '2024/05/canto-basso-poscante', elevation_gain: 61, elevation_loss: 614 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 5, zone: 'bassa_brembana', name: 'Canto Alto, 507A, Zogno', kind: 'down', file: 'Brembana_CantoAlto507AZogno.gpx', link: '2024/06/canto-alto-507a', elevation_gain: 10, elevation_loss: 788 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo di Spino, Pregaroldi, Ambria', kind: 'down', file: 'Brembana_PizzoSpinoPregaroldiAmbria.gpx', link: '2024/06/spino-ambria', elevation_gain: 38, elevation_loss: 637 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo Grande, Bocchetta Ronco, San Giovanni Bianco', kind: 'down', file: 'Brembana_PizzoGrandeBocchettaRoncoSanGiovanniBianco.gpx', link: '2024/07/pizzo-grande', elevation_gain: 50, elevation_loss: 1156 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'bassa_brembana', name: 'Pizzo Rabbioso, Pagliaro, Algua', kind: 'down', file: 'Brembana_PizzoRabbiosoPagliaroAlgua.gpx', link: '2024/07/rabbioso', elevation_gain: 10, elevation_loss: 700 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 5, zone: 'bassa_brembana', name: 'Monte Sornadello, Monte Foldone, Bocchetta Ronco, CinguaDH', kind: 'down', file: 'Brembana_SornadelloFoldoneBocchettaRoncoCinguaDH.gpx', link: '2024/08/sornadello', elevation_gain: 130, elevation_loss: 1201 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Era, Pianca, Cornello Dei Tasso', kind: 'down', file: 'Brembana_EraPiancaCornelloDeiTasso.gpx', link: '2025/06/era-pianca', elevation_gain: 308, elevation_loss: 881 },

// trek
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'bassa_brembana', name: 'Vie del Passato', kind: 'trek', file: 'Brembana_VieDelPassato.gpx', link: '2023/08/passato', elevation_gain: 1141, elevation_loss: 1111 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita da S. Antonio Abbandonato a Ca del C\u00E8co', kind: 'up', file: 'Brembana_SalitaSantAntonioCeco_EBIKE.gpx', link: '2021/06/ceco-sonzogno-pernice', elevation_gain: 145, elevation_loss: 20 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, pradai', name: 'Salita da Spettino alla Panchina Gigante', kind: 'up', file: 'Brembana_SalitaSpettinoPanchinaGigante_EBIKE.gpx', link: '2021/06/panchina-gigante-pradai-frasnadello', elevation_gain: 232, elevation_loss: 38 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da Zogno a S. Antonio Abbandonato', kind: 'up', file: 'Brembana_SalitaZognoSAntonio_EBIKE.gpx', link: '2020/07/casarielli', elevation_gain: 652, elevation_loss: 2 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 8, zone: 'bassa_brembana', name: 'Salita da San Pellegrino al Pizzo di Spino', kind: 'up', file: 'Brembana_SalitaSantaCrocePizzoSpino_EBIKE.gpx', link: '2020/11/pizzo-spino', elevation_gain: 738, elevation_loss: 161 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 5, zone: 'bassa_brembana', name: 'Salita Ambria, Frerola, Pizzo di Spino', kind: 'up', file: 'Brembana_SalitaAmbriaPizzoSpino_EBIKE.gpx', link: '2024/06/spino-ambria', elevation_gain: 910, elevation_loss: 295 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da San Pellegrino alla Forcella di Spettino', kind: 'up', file: 'Brembana_SalitaForcellaSpettino_EBIKE.gpx', link: '2021/02/forcella-di-spettino-molini', elevation_gain: 728, elevation_loss: 10 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana, frasnito', name: 'Salita da San Pellegrino a Frasnito e Sussia', kind: 'up', file: 'Brembana_SalitaFrasnitoSussia_EBIKE.gpx', link: '2021/03/sussia-frasnito', elevation_gain: 710, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'bassa_brembana', name: 'Salita da San Giovanni Bianco al Monte Molinasco', kind: 'up', file: 'Brembana_SalitaMolinasco_EBIKE.gpx', link: '2021/03/monte-molinasco', elevation_gain: 776, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'bassa_brembana', name: 'Salita Camerata Cornello, Monte Vaccareggio', kind: 'up', file: 'Brembana_SalitaCamerataCornelloVaccareggio_EBIKE.gpx', link: '2023/08/vaccareggio', elevation_gain: 1083, elevation_loss: 61 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'bassa_brembana', name: 'Salita San Giovanni Bianco, S. S. Trinit\u00E0, Monte Vaccareggio', kind: 'up', file: 'Brembana_SalitaSanGiovanniBiancoVaccareggio_EBIKE.gpx', link: '2023/10/vaccareggio-bianco', elevation_gain: 1122, elevation_loss: 74 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da Zogno al Monte Castello diretta', kind: 'up', file: 'Brembana_SalitaZognoMonteCastello_EBIKE.gpx', link: '2023/11/castello-mosche', elevation_gain: 733, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita da Zogno al Monte Castello con periplo', kind: 'up', file: 'Brembana_SalitaZognoGiroMonteCastello_EBIKE.gpx', link: '2023/11/giro-castello', elevation_gain: 905, elevation_loss: 125 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Zogno, Valico di Salmezza, Stalla Fopp', kind: 'up', file: 'Brembana_SalitaZognoStallaFopp_EBIKE.gpx', link: '2024/04/poscante-back', elevation_gain: 897, elevation_loss: 43 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Zogno, Valico di Salmezza, Stalla Fopp', kind: 'up', file: 'Brembana_SalitaZognoPoscanteCantoBasso_EBIKE.gpx', link: '2024/05/canto-basso-poscante', elevation_gain: 652, elevation_loss: 54 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Zogno, Prati Parini, Canto Alto', kind: 'up', file: 'Brembana_SalitaZognoPariniCantoAlto_EBIKE.gpx', link: '2024/06/canto-alto-507a', elevation_gain: 885, elevation_loss: 84 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita San Giovanni Bianco. Bocchetta Roco, Pizzo Grande', kind: 'up', file: 'Brembana_SalitaSanGiovanniBiancoBocchettaRoncoPizzoGrande_EBIKE.gpx', link: '2024/07/pizzo-grande', elevation_gain: 1210, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita Algua, Bracca, Frerola, Pizzo Rabbioso', kind: 'up', file: 'Brembana_SalitaAlguaPizzoRabbioso_EBIKE.gpx', link: '2024/07/rabbioso', elevation_gain: 782, elevation_loss: 68 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'bassa_brembana', name: 'Salita San Giovanni Bianco. Bocchetta Roco, Passo Mercante del Ferro, Monte Sornadello', kind: 'up', file: 'Brembana_SalitaSanGiovanniBiancoPassoMercanteFerroSornadello_EBIKE.gpx', link: '2024/08/sornadello', elevation_gain: 1155, elevation_loss: 70 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'bassa_brembana', name: 'Salita Camerata Cornello, Era', kind: 'up', file: 'Brembana_SalitaCamerataCornelloEra_EBIKE.gpx', link: '2025/06/era-pianca', elevation_gain: 637, elevation_loss: 3 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: '', name: 'Salita da Salvarizza alla Forcella della Valcumina', kind: 'up', file: 'Brembana_SalvarizzaForcellaValcumina_EBIKE.gpx', link: '2021/05/valcumina', elevation_gain: 772, elevation_loss: 115 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da San Pellegrino a Salvarizza', kind: 'up', file: 'Brembana_SalitaSalvarizza_EBIKE.gpx', link: '2021/02/periplo-monte-gioco', elevation_gain: 666, elevation_loss: 0 },

// unlisted
{ vote: 2, rate: 3, rate_max: 0, cycle: 3, zone: '', name: 'Monte Castello, Algua, Zogno', kind: 'down', file: 'Brembana_MonteCastelloAlguaZogno.gpx', link: '2021/06/monte-castello', elevation_gain: 359, elevation_loss: 1099 },

//
// SERINA
//
{ vote: 5, rate: 2, rate_max: 3, cycle: 1, zone: 'serina, brembana', name: 'Cima di Grem, Cresta, Zambla Alta', kind: 'down', file: 'Serina_CimaGremCrestaZambla.gpx', link: '2022/11/cima-di-grem', elevation_gain: 54, elevation_loss: 877 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 4, zone: 'serina, brembana', name: 'Capanna 2000, Sentiero dei Fiori, Val Vedra', kind: 'down', file: 'Serina_Capanna2000VedraOltreIlColle.gpx', link: '2022/11/val-vedra', elevation_gain: 357, elevation_loss: 1291 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'serina, brembana', name: 'Zambla, Oltre il Colle, Serina', kind: 'down', file: 'Serina_ZamblaAltaOltreIlColleSerina.gpx', link: '2023/06/anello-serina-zambla', elevation_gain: 456, elevation_loss: 968 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 3, zone: 'serina, brembana', name: 'Anello Serina, Corone, Cornalba, Serina', kind: 'down', file: 'Serina_AnelloSerinaCoroneCornalbaErasmo_EBIKE.gpx', link: '2023/06/anello-serina-erasmo', elevation_gain: 1078, elevation_loss: 1048 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Monte Vaccareggio, Via Mercatorum, Serina', kind: 'down', file: 'Serina_VaccareggioMercatorumSerina.gpx', link: '2023/06/vaccareggio', elevation_gain: 89, elevation_loss: 793 },
{ vote: 4, rate: 4, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Rifugio Monte Alben, Sentiero Tre Valloni', kind: 'down', file: 'Serina_RifugioAlbenTreValloniBagnella.gpx', link: '2023/07/alben-tre-valloni', elevation_gain: 70, elevation_loss: 938 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 1, zone: 'serina, brembana', name: 'Rifugio Monte Alben, Sentiero Panoramico', kind: 'down', file: 'Serina_RifugioAlbenPanoramicoCornalbaBolzagna.gpx', link: '2023/06/alben-panoramico', elevation_gain: 23, elevation_loss: 866 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'serina, brembana', name: 'Monte Suchello, Passo Barbata, Val del Ferro, Ambriola', kind: 'down', file: 'Serina_SuchelloBarbataFerroAmbriola.gpx', link: '2023/07/suchello', elevation_gain: 139, elevation_loss: 1111 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 1, zone: 'serina, brembana', name: 'Monte Vaccareggio, Valpiana, Serina', kind: 'down', file: 'Serina_VaccareggioValpianaSerina.gpx', link: '2023/07/vaccareggio-valpiana', elevation_gain: 133, elevation_loss: 827 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 3, zone: 'serina, brembana', name: 'Bocchetta di Grem, Bivacco Telini, Rifugio Grem, Zambla Alta', kind: 'down', file: 'Serina_BocchettaGremTeliniZambla.gpx', link: '2023/07/telini', elevation_gain: 199, elevation_loss: 959 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'serina, brembana', name: 'Forcellino, Trafficanti, Via Mercatorum, Algua', kind: 'down', file: 'Serina_ForcellinoTrafficantiMercatorumAlgua.gpx', link: '2023/10/trafficanti-mercatorum', elevation_gain: 53, elevation_loss: 841 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Valico di Salmezza, Perello, Rigosa', kind: 'down', file: 'Serina_ValicoSalmezzaPerelloRigosa.gpx', link: '2023/12/perello', elevation_gain: 61, elevation_loss: 511 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Monte Castello, Sambusita, Molino', kind: 'down', file: 'Serina_MonteCastelloSambusitaMolino.gpx', link: '2024/08/sambusita', elevation_gain: 7, elevation_loss: 501 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 1, zone: 'serina, brembana', name: 'Capanna 2000, Zambla Alta', kind: 'down', file: 'Serina_Capanna2000Zambla.gpx', link: '2024/09/capana-2000-zambla', elevation_gain: 95, elevation_loss: 818 },
{ vote: 5, rate: 3, rate_max: 3, cycle: 0, zone: 'serina, brembana', name: 'Capanna 2000, Cattedrale Vegetale, Oltre il colle', kind: 'down', file: 'Serina_Capanna2000CattedraleVegetaleOltreIlColle.gpx', link: '2024/09/capanna-2000-oltreilcolle', elevation_gain: 204, elevation_loss: 1119 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 2, zone: 'serina, brembana', name: 'Baita Zuccone, Plassa, Oltre il colle', kind: 'down', file: 'Serina_BaitaZucconePlassaOltreIlColle.gpx', link: '2024/11/zuccone-plassa', elevation_gain: 214, elevation_loss: 970 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 12, zone: 'serina, brembana', name: 'Salita Zambla Alta, Plassa, Capanna 2000, Cima di Grem', kind: 'up', file: 'Serina_SalitaZamblaPlassaCapanna200CimaGrem_EBIKE.gpx', link: '2022/11/cima-di-grem', elevation_gain: 1178, elevation_loss: 353 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Oltre il Colle, Capanna 2000', kind: 'up', file: 'Serina_SalitaOltreIlColleCapanna2000_EBIKE.gpx', link: '2022/11/val-vedra', elevation_gain: 1035, elevation_loss: 89 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Serina, Conca d\'Alben, Zambla', kind: 'up', file: 'Serina_SalitaSerinaConcaAlbenZambla_EBIKE.gpx', link: '2023/06/anello-serina-zambla', elevation_gain: 700, elevation_loss: 169 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'serina, brembana', name: 'Salita Serina, Valpiana, Monte Vaccareggio', kind: 'up', file: 'Serina_SalitaSerinaValpianaVaccareggio_EBIKE.gpx', link: '2023/06/vaccareggio', elevation_gain: 852, elevation_loss: 124 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 24, zone: 'serina, brembana', name: 'Salita Serina, Valpiana, Passo Sappl\u00EC, Rifugio Monte Alben', kind: 'up', file: 'Serina_SalitaValpianaSappliRifugioAlben-EBIKE.gpx', link: '2023/07/alben-tre-valloni', elevation_gain: 1024, elevation_loss: 116 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 11, zone: 'serina, brembana', name: 'Salita Serina, Cornalba, Sentiero Panoramico, Rifugio Monte Alben', kind: 'up', file: 'Serina_SalitaBagnellaCornalbaPanoramicoRifugioAlben-EBIKE.gpx', link: '2023/06/alben-panoramico', elevation_gain: 916, elevation_loss: 47 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 7, zone: 'serina, brembana', name: 'Salita Ambriola, Tassone, Monte Suchello', kind: 'up', file: 'Serina_AmbriolaSuchello_EBIKE.gpx', link: '2023/07/suchello', elevation_gain: 1052, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'serina, brembana', name: 'Salita Serina, Via Mercatorum, Monte Vaccareggio', kind: 'up', file: 'Serina_SalitaSerinaMercatorumVaccareggio_EBIKE.gpx', link: '2023/07/vaccareggio-valpiana', elevation_gain: 833, elevation_loss: 80 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'serina, brembana', name: 'Salita Zambla Alta, Plassa, Bocchetta di Grem', kind: 'up', file: 'Serina_SalitaZamblaPlassaBocchettaGrem_EBIKE.gpx', link: '2023/07/telini', elevation_gain: 978, elevation_loss: 208 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 2, zone: 'serina, brembana', name: 'Salita Algua, Ambriola, Via Mercatorum, Aviatico, Forca di Aviatico, Forcellino', kind: 'up', file: 'Serina_SalitaAlguaMercatorumAviaticoForcellino_EBIKE.gpx', link: '2023/10/trafficanti-mercatorum', elevation_gain: 884, elevation_loss: 92 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Rigosa, Molino, Monte Castello, Valico di Salmezza', kind: 'up', file: 'Serina_SalitaRigosaMonteCastelloValicoSalmezza_EBIKE.gpx', link: '2023/12/perello', elevation_gain: 720, elevation_loss: 265 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Molino, Rigosa, Selvino, Perello, Monte Castello', kind: 'up', file: 'Serina_SalitaMolinoPerelloMonteCastello_EBIKE.gpx', link: '2024/08/sambusita', elevation_gain: 715, elevation_loss: 190 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'serina, brembana', name: 'Salita Oltre il Colle, Plassa, Baita Zuccone', kind: 'up', file: 'Serina_SalitaOltreIlCollePlassaBaitaZuccone_EBIKE.gpx', link: '2024/11/zuccone-plassa', elevation_gain: 933, elevation_loss: 113 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Zambla Alta, Plassa, Capanna 2000', kind: 'up', file: 'Serina_SalitaZamblaCapanna2000_EBIKE.gpx', link: '2024/09/capana-2000-zambla', elevation_gain: 883, elevation_loss: 98 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Oltre il Colle, Zambla Bassa, Plassa, Capanna 2000', kind: 'up', file: 'Serina_SalitaOltreIlColleZamblaBassaCapanna2000_EBIKE.gpx', link: '2024/09/capanna-2000-oltreilcolle', elevation_gain: 1082, elevation_loss: 156 },

//
// ALTA BREMBANA
//
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Terza dell\'Avaro', kind: 'down', file: 'Brembana_AvaroTerza.gpx', link: '2020/08/terza-avaro', elevation_gain: 118, elevation_loss: 1212 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Piani dell\' Avaro, Monte Disner', kind: 'down', file: 'Brembana_AvaroDisner.gpx', link: '2021/09/avaro-disner', elevation_gain: 76, elevation_loss: 1193 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Monte Torcola, Piazza Brembana', kind: 'down', file: 'Brembana_TorcolaPiazzaBrembana.gpx', link: '2020/09/monte-torcola-piazza-brembana', elevation_gain: 20, elevation_loss: 1193 },
{ vote: 5, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Monte Torcola, Bolli Arancio, Piazzolo', kind: 'down', file: 'Brembana_TorcolaBolliArancioPiazzolo.gpx', link: '2020/09/rifugio-torcole-bolli-arancio-piazzolo', elevation_gain: 20, elevation_loss: 1162 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Passo San Marco, 113, via del Ferro', kind: 'down', file: 'Brembana_SanMarco113Ferro.gpx', link: '2020/09/passo-san-marco-113-via-del-ferro', elevation_gain: 110, elevation_loss: 1481 },
{ vote: 4, rate: 2, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Val Terzera, Piazzatorre', kind: 'down', file: 'Brembana_TerzeraPiazzatorre.gpx', link: '2023/08/terzera', elevation_gain: 112, elevation_loss: 974 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Baita Campo, 127, Olmo al Brembo', kind: 'down', file: 'Brembana_BaitaCampoOlmo.gpx', link: '2020/09/baita-campo-olmo-al-brembo', elevation_gain: 40, elevation_loss: 909 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'alta_brembana', name: 'Enzo Ronzoni (Ornica, Caprile)', kind: 'down', file: 'Brembana_EnzoRonzoni.gpx', link: '2021/10/enzo-ronzoni', elevation_gain: 1001, elevation_loss: 1002 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 0, zone: 'alta_brembana', name: 'Pizzo Badile, Piazzatorre', kind: 'down', file: 'Brembana_PizzoBadilePiazzatorre.gpx', link: '2021/08/pizzo-badile', elevation_gain: 31, elevation_loss: 1100 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Monte Mincucco, Diga di Valmora, Cantedoldo, Averara', kind: 'down', file: 'Brembana_MincuccoDigaValMoraCantedoldoAverara.gpx', link: '2022/07/mincuccocantedoldo', elevation_gain: 251, elevation_loss: 1570 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Laghetti di Ponteranica, Diga di Valmora, Caprile, Santa Brigida', kind: 'down', file: 'Brembana_PonteranicaDigaValmoraCaprileSantaBrigida.gpx', link: '2022/07/ponteranica-valmora', elevation_gain: 66, elevation_loss: 1348 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Piani dell\'Avaro, Corna Rossa', kind: 'down', file: 'Brembana_AvaroCornaRossa.gpx', link: '2021/11/corna-rossa', elevation_gain: 107, elevation_loss: 1240 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 1, zone: 'alta_brembana', name: 'Valle d\'Inferno', kind: 'down', file: 'Brembana_ValInferno.gpx', link: '2021/10/val-dinferno', elevation_gain: 770, elevation_loss: 1147 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 18, zone: 'alta_brembana', name: 'Passo Selletta, Rifugio Calvi, Sentiero Estivo, Carona', kind: 'down', file: 'Brembana_SellettaCalviEstivoCarona.gpx', link: '2022/07/selletta-calvi-estivo', elevation_gain: 194, elevation_loss: 1476 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 1, zone: 'alta_brembana', name: 'Cima di Lemma, Passo Tartano, Prato Marino, Valleve', kind: 'down', file: 'Brembana_CimaLemmaPassoTartanoPratoMarinoValleve.gpx', link: '2022/07/cima-lemma-tartano', elevation_gain: 19, elevation_loss: 1198 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 2, zone: 'alta_brembana', name: 'Cresta Monte Chierico, Val Sambuzza, Carona', kind: 'down', file: 'Brembana_ChiericoSambuzzaCarona.gpx', link: '2022/07/carisole-sambuzza', elevation_gain: 14, elevation_loss: 1014 },
{ vote: 4, rate: 3, rate_max: 4, cycle: 2, zone: 'alta_brembana', name: 'Cima Montebello, Passo Dordona, Valleve', kind: 'down', file: 'Brembana_CimaMontebelloPassoDordonaValleve.gpx', link: '2022/08/valcervia-dordona', elevation_gain: 92, elevation_loss: 1299 },
{ vote: 5, rate: 4, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Lago Colombo, 212, Branzi', kind: 'down', file: 'Brembana_Colombo212Branzi.gpx', link: '2022/08/colombo-212', elevation_gain: 17, elevation_loss: 1192 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Cima Montebello, Lago Moro, Rifugio Mirtillo, Carona', kind: 'down', file: 'Brembana_CimaMontebelloLagoMoroMirtilloCarona.gpx', link: '2022/08/lago-moro', elevation_gain: 96, elevation_loss: 1361 },
{ vote: 5, rate: 1, rate_max: 2, cycle: 0, zone: 'alta_brembana', name: 'Porta delle Cornacchie, Piccarelli, Lenna', kind: 'down', file: 'Brembana_CornacchiePiccarelliLenna.gpx', link: '2022/09/cornacchie', elevation_gain: 58, elevation_loss: 752 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Baite di Mezzeno, Passo del Vendulo, Piccarelli, Lenna', kind: 'down', file: 'Brembana_MezzenoVenduloPiccarelliLenna.gpx', link: '2022/09/mezzeno', elevation_gain: 105, elevation_loss: 1185 },
{ vote: 1, rate: 3, rate_max: 5, cycle: 10, zone: 'alta_brembana', name: 'Monte Torcola, 126, Moio de Calvi', kind: 'down', file: 'Brembana_Torcola126Moio.gpx', link: '2021/11/monte-torcola-126-moio-de-calvi', elevation_gain: 4, elevation_loss: 1217 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Passo San Marco, Via Priula', kind: 'down', file: 'Brembana_SanMarcoViaPriula.gpx', link: '2021/11/via-priula', elevation_gain: 5, elevation_loss: 1187 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Monte Torcola, Piazzolo, Piazzatorre', kind: 'down', file: 'Brembana_TolcolaPiazzoloPiazzatorre.gpx', link: '2023/08/piazzolo', elevation_gain: 314, elevation_loss: 1246 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Forcolino di Torcola, Branzi, Moio de Calvi', kind: 'down', file: 'Brembana_ForcolinoBranziMoio.gpx', link: '2023/10/forcolino', elevation_gain: 13, elevation_loss: 1231 },
{ vote: 3, rate: 2, rate_max: 5, cycle: 5, zone: 'alta_brembana', name: '125, Pusdosso, Moio de Calvi', kind: 'down', file: 'Brembana_125PusdossoMoio.gpx', link: '2023/10/pusdosso', elevation_gain: 4, elevation_loss: 1083 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'alta_brembana', name: 'Passo San Simone, Costa Piana, Madonna delle Nevi', kind: 'down', file: 'Brembana_PassoSanSimoneCostaPiana.gpx', link: '2025/07/terzera-passo-san-simone', elevation_gain: 80, elevation_loss: 741 },
{ vote: 3, rate: 3, rate_max: 4, cycle: 3, zone: 'alta_brembana', name: 'Rifugio Balicco, Madonna delle Nevi', kind: 'down', file: 'Brembana_BaliccoMadonnaDelleNevi.gpx', link: '2025/07/balicco', elevation_gain: 1, elevation_loss: 643 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 4, zone: 'alta_brembana', name: 'Forcella Rossa, Baita Piedivalle, Casera Siltri, Madonna delle Nevi', kind: 'down', file: 'Brembana_ForcellaRossaPiedivalleCavizzolaSiltri.gpx', link: '2025/08/forcella-rossa-piedivalle-casera-siltri', elevation_gain: 85, elevation_loss: 807 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 1, zone: 'alta_brembana', name: 'Passo Vallone, Baita Piedivalle, Casera Cavizzola, Casera Siltri, Passo San Simone, San Simone', kind: 'down', file: 'Brembana_PassoValloneCavizzolaSiltriPassoSanSimoneSanSimone.gpx', elevation_gain: 328, elevation_loss: 851 },

// climb
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita da Piazza Brembana al Monte Torcola', kind: 'up', file: 'Brembana_SalitaPiazzaBrembanaTorcola_EBIKE.gpx', link: '2020/09/monte-torcola-piazza-brembana', elevation_gain: 1231, elevation_loss: 30 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita da Olmo al Brembo al Passo San Marco', kind: 'up', file: 'Brembana_SalitaOlmoSanMarco_EBIKE.gpx', link: '2020/09/passo-san-marco-113-via-del-ferro', elevation_gain: 1367, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita da Olmo al Brembo al Monte Torcola', kind: 'up', file: 'Brembana_SalitaOlmoPiazzatorreTorcola_EBIKE.gpx', link: '2020/09/rifugio-torcole-bolli-arancio-piazzolo', elevation_gain: 1165, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita alla Baita Campo', kind: 'up', file: 'Brembana_SalitaBaitaCampo_EBIKE.gpx', link: '2020/09/baita-campo-olmo-al-brembo', elevation_gain: 963, elevation_loss: 4 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Piazzatorre, Via Priula, Val Terzera', kind: 'up', file: 'Brembana_SalitaPiazzatorePriulaTerzera_EBIKE.gpx', link: '2023/08/terzera', elevation_gain: 1072, elevation_loss: 202 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 4, zone: 'alta_brembana', name: 'Salita Piazzatorre, Forcolino, Pizzo Badile', kind: 'up', file: 'Brembana_SalitaPiazzatorreForcolinoPizzoBadile_EBIKE.gpx', link: '2021/08/pizzo-badile', elevation_gain: 1323, elevation_loss: 190 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 8, zone: 'alta_brembana', name: 'Salita Averara, Piani dell\'Avaro, Monte Mincucco', kind: 'up', file: 'Brembana_SalitaAveraraAvaroMincucco_EBIKE.gpx', link: '2022/07/mincuccocantedoldo', elevation_gain: 1447, elevation_loss: 92 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 6, zone: 'alta_brembana', name: 'Salita Santa Brigida, Piani dell\'Avaro, Monte Mincucco', kind: 'up', file: 'Brembana_SalitaSantaBrigidaAvaroPonteranica_EBIKE.gpx', link: '2022/07/ponteranica-valmora', elevation_gain: 1416, elevation_loss: 44 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Mezzoldo, Via Priula, Passo San Marco', kind: 'up', file: 'Brembana_SalitaViaPriulaSanMarco_EBIKE.gpx', link: '2021/11/via-priula', elevation_gain: 1205, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 34, zone: 'alta_brembana', name: 'Salita Carona, Rifugio Longo, Lago del Diavolo, Passo Selletta', kind: 'up', file: 'Brembana_SalitaCaronaLongoDiavoloSelletta_EBIKE.gpx', link: '2022/07/selletta-calvi-estivo', elevation_gain: 1365, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 33, zone: 'alta_brembana', name: 'Salita Valleve, San Simone, Passo di Lemma, Cima di Lemma', kind: 'up', file: 'Brembana_SalitaValleveSanSimoneCimaLemma_EBIKE.gpx', link: '2022/07/cima-lemma-tartano', elevation_gain: 1270, elevation_loss: 24 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 8, zone: 'alta_brembana', name: 'Carona, Val Carisole, Lago di Carisole, Cresta Monte Chierico', kind: 'up', file: 'Brembana_SalitaCaronaCarisoleChierico_EBIKE.gpx', link: '2022/07/carisole-sambuzza', elevation_gain: 1135, elevation_loss: 85 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 14, zone: 'alta_brembana', name: 'Salita Valleve, Lago Moro, Passo Valcervia, Cima Montebello', kind: 'up', file: 'Brembana_SalitaValleveLagoMoroCimaMontebello_EBIKE.gpx', link: '2022/08/valcervia-dordona', elevation_gain: 1219, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 24, zone: 'alta_brembana', name: 'Salita Branzi, Carona, Laghi Gemelli, Lago Colombo', kind: 'up', file: 'Brembana_BranziCaronaGemelliColombo_EBIKE.gpx', link: '2022/08/colombo-212', elevation_gain: 1492, elevation_loss: 311 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 12, zone: 'alta_brembana', name: 'Salita Carona, Lago Moro, Cima Montebello', kind: 'up', file: 'Brembana_SalitaCaronaLagoMoroCimaMontenbello_EBIKE.gpx', link: '2022/08/lago-moro', elevation_gain: 1305, elevation_loss: 24 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Lenna, Roncobello, Mezzeno', kind: 'up', file: 'Brembana_SalitaLennaRoncobelloMezzeno_EBIKE.gpx', link: '2022/09/mezzeno', elevation_gain: 1184, elevation_loss: 47 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'alta_brembana', name: 'Salita Lenna, Valsecca, Strada Piana, Porta delle Cornacchie', kind: 'up', file: 'Brembana_SalitaLennaValseccaPianaCornacchie_EBIKE.gpx', link: '2022/09/cornacchie', elevation_gain: 804, elevation_loss: 83 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'alta_brembana', name: 'Salita Madonna delle Nevi, Val Terzera, Passo San Simone', kind: 'up', file: 'Brembana_SalitaValTerzeraPassoSanSimone_EBIKE.gpx', link: '2025/07/terzera-passo-san-simone', elevation_gain: 727, elevation_loss: 5 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 10, zone: 'alta_brembana', name: 'Salita Madonna delle Nevi, Tornante 9, Rifugio Balicco', kind: 'up', file: 'Brembana_SalitaMadonnaDelleNeviTornante9Balicco_EBIKE.gpx', link: '2025/07/balicco', elevation_gain: 768, elevation_loss: 35 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 10, zone: 'alta_brembana', name: 'Salita Madonna delle Nevi, Passo San Simone, Forcella Rossa', kind: 'up', file: 'Brembana_SalitaMadonnaDelleNeviForcellaRossa_EBIKE.gpx', link: '2025/08/forcella-rossa-piedivalle-casera-siltri', elevation_gain: 825, elevation_loss: 98 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'alta_brembana', name: 'Salita San Simone, Passo di Lemma, Passo Vallone', kind: 'up', file: 'Brembana_SalitaSanSimonePassoLemmaPassoVallone_EBIKE.gpx', elevation_gain: 554, elevation_loss: 0 },

// unlisted
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: '', name: 'Lago Moro, Rifugio Mirtillo, Carona', kind: 'down', file: 'Brembana_LagoMoroCarona.gpx', link: '2021/10/lago-moro', elevation_gain: 117, elevation_loss: 1508 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Branzi, Foppolo, Lago Moro', kind: 'up', file: 'Brembana_SalitaFoppoloLagoMoro_EBIKE.gpx', link: '2021/10/lago-moro', elevation_gain: 1390, elevation_loss: 0 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 2, zone: '', name: 'Incrocio 101, Acqua Nera, Diga Valmora, Caprile', kind: 'down', file: 'Brembana_Incrocio101AcquaNeraDigaValmoraCaprile.gpx', link: '2021/10/101-valmora', elevation_gain: 116, elevation_loss: 1280 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: '', name: 'Salita Santa Brigida, Piani dell\'Avaro, Incrocio 101', kind: 'up', file: 'Brembana_SalitaSantaBrigidaAvaroIncrocio101_EBIKE.gpx', link: '2021/10/101-valmora', elevation_gain: 1201, elevation_loss: 34 },

// overlapping
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita da Olmo al Brembo ai Piani dell\'Avaro', kind: 'up', file: 'Brembana_SalitaOlmoAvaro_EBIKE.gpx', link: '2020/08/terza-avaro', elevation_gain: 1098, elevation_loss: 3 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Santa Brigida, Colle Maddalena', kind: 'up', file: 'Brembana_SalitaSantaBrigidaColleMaddalena_EBIKE.gpx', link: '2021/10/val-dinferno', elevation_gain: 420, elevation_loss: 0 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: '', name: 'Salita Moio de Calvi, Torcola, Forcolino di Torcola', kind: 'up', file: 'Brembana_SalitaMoioForcolino_EBIKE.gpx', link: '2023/10/forcolino', elevation_gain: 1413, elevation_loss: 167 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: '', name: 'Salita Moio de Calvi, Pista da sci di Torcola, 125', kind: 'up', file: 'Brembana_SalitaMoioPistaTorcola125_EBIKE.gpx', link: '2023/10/pusdosso', elevation_gain: 1215, elevation_loss: 76 },

//
// CAVALLINA
//
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Percorso Vita', kind: 'down', file: 'Cavallina_ArgonPercorsoVita.gpx', link: '2021/05/argon', elevation_gain: 7, elevation_loss: 157 },
{ vote: 2, rate: 1, rate_max: 3, cycle: 0, zone: 'cavallina, argon', name: 'Pietria dell\'Eremo', kind: 'down', file: 'Cavallina_ArgonPietraiaEremo.gpx', link: '2021/05/argon', elevation_gain: 7, elevation_loss: 223 },
{ vote: 3, rate: 1, rate_max: 2, cycle: 0, zone: 'cavallina, argon', name: 'San Giorgio, Valle d\'Albano', kind: 'down', file: 'Cavallina_ArgonSanGiorgioValleAlbano.gpx', link: '2021/05/argon', elevation_gain: 63, elevation_loss: 278 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Valle d\'Albano', kind: 'down', file: 'Cavallina_ArgonValleAlbano.gpx', link: '2021/05/argon', elevation_gain: 6, elevation_loss: 222 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'cavallina, argon', name: 'Sentiero della Luna', kind: 'down', file: 'Cavallina_ArgonSentieroDellaLuna.gpx', link: '2021/05/argon', elevation_gain: 37, elevation_loss: 249 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Vertical', kind: 'down', file: 'Cavallina_ArgonVertical.gpx', link: '2021/05/argon', elevation_gain: 0, elevation_loss: 211 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Welcome to the Jungle', kind: 'down', file: 'Cavallina_ArgonWelcomeToTheJungle.gpx', link: '2021/05/argon', elevation_gain: 27, elevation_loss: 173 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Salita al Colle di Pasta e Monte d\'Argon', kind: 'up', file: 'Cavallina_ArgonSalitaPastaArgon_EBIKE.gpx', link: '2021/05/argon', elevation_gain: 220, elevation_loss: 18 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Salita al Colle di Pasta', kind: 'up', file: 'Cavallina_ArgonSalitaPasta_EBIKE.gpx', link: '2021/05/argon', elevation_gain: 171, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, argon', name: 'Salita al Monte d\'Argon', kind: 'up', file: 'Cavallina_ArgonSalitaMonteArgon_EBIKE.gpx', link: '2021/05/argon', elevation_gain: 220, elevation_loss: 0 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 1, zone: 'cavallina, misma', name: 'Misma, Santa Maria, Cenate', kind: 'down', file: 'Cavallina_MismaCenate.gpx', link: '2021/04/misma-santa-maria-cenate-sopra', elevation_gain: 7, elevation_loss: 805 },
{ vote: 5, rate: 2, rate_max: 3, cycle: 0, zone: 'cavallina, misma', name: 'Corna Clima, Sant\'Ambrogio', kind: 'down', file: 'Cavallina_CornaClimaSantAmbrogio.gpx', link: '2021/05/sant-ambrogio', elevation_gain: 22, elevation_loss: 559 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: 'cavallina, misma', name: 'Corna Clima, Mirabile', kind: 'down', file: 'Cavallina_CornaClimaMirabileVallese.gpx', link: '2022/03/mirabile', elevation_gain: 6, elevation_loss: 497 },
{ vote: 4, rate: 2, rate_max: 3, cycle: 0, zone: 'cavallina', name: 'Faisecco, Prati Alti, 611, Luzzana', kind: 'down', file: 'Cavallina_FaiseccoPratiAlti611Luzzana.gpx', link: '2022/03/pranza-luzzana', elevation_gain: 140, elevation_loss: 852 },
{ vote: 2, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi 1', kind: 'down', file: 'Cavallina_Minardi1.gpx', link: '2022/03/minardi', elevation_gain: 0, elevation_loss: 31 },
{ vote: 4, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi 2', kind: 'down', file: 'Cavallina_Minardi2.gpx', link: '2022/03/minardi', elevation_gain: 7, elevation_loss: 71 },
{ vote: 4, rate: 1, rate_max: 2, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi 3', kind: 'down', file: 'Cavallina_Minardi3.gpx', link: '2022/03/minardi', elevation_gain: 0, elevation_loss: 77 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Pistino Minardi Muro', kind: 'down', file: 'Cavallina_MinardiMuro.gpx', link: '2022/03/minardi', elevation_gain: 0, elevation_loss: 75 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, minardi', name: 'Salita a Minardi', kind: 'up', file: 'Cavallina_SalitaMinardi_EBIKE.gpx', link: '2022/03/minardi', elevation_gain: 108, elevation_loss: 22 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Prati Alti, 611A, Luzzana', kind: 'down', file: 'Cavallina_PratiAlti611AEntratico.gpx', link: '2022/04/prati-alti-luzzana', elevation_gain: 11, elevation_loss: 522 },
{ vote: 5, rate: 2, rate_max: 0, cycle: 0, zone: '', name: 'Corna Clima, Mirabile, Entratico', kind: 'down', file: 'Cavallina_CornaClimaMirabileEntratico.gpx', link: '2022/03/mirabile', elevation_gain: 88, elevation_loss: 665 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, misma', name: 'Valpredina, Cenate Sopra', kind: 'down', file: 'Cavallina_ValpredinaCenateSopra.gpx', link: '2021/05/valpredina', elevation_gain: 6, elevation_loss: 436 },
{ vote: 3, rate: 1, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Anello Zandobbio', kind: 'down', file: 'Cavallina_AnelloZandobbio_EBIKE.gpx', link: '2023/05/anello-zandobbio', elevation_gain: 631, elevation_loss: 590 },

{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita da Entratico alla Corna Clima', kind: 'up', file: 'Cavallina_SalitaEntraticoCornaClima_EBIKE.gpx', link: '2022/03/mirabile', elevation_gain: 680, elevation_loss: 99 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita da Entratico ai Prati Alti ', kind: 'up', file: 'Cavallina_SalitaEntraticoLuzzanaPratiAlti_EBIKE.gpx', link: '2022/04/prati-alti-luzzana', elevation_gain: 518, elevation_loss: 1 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, misma', name: 'Salita da Tribulina alla Corna Clima', kind: 'up', file: 'Cavallina_SalitaTribuliaCornaClima_EBIKE.gpx', link: '2021/05/sant-ambrogio', elevation_gain: 594, elevation_loss: 80 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Grione, 618, Endine Gaiano', kind: 'down', file: 'Cavallina_Grione618Endine.gpx', link: '2022/02/monte-grione', elevation_gain: 4, elevation_loss: 1015 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Malga Lunga, 563, Sovere, Endine Gaiano', kind: 'down', file: 'Cavallina_MalgaLonga563SovereEndine.gpx', link: '2022/02/malga-lunga-563', elevation_gain: 261, elevation_loss: 1144 },
{ vote: 4, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Ballerino, Cummia, Colognola, Borgo di Terzo', kind: 'down', file: 'Cavallina_BallerinoCummiaColognola.gpx', link: '2022/03/colli-san-fermo-cummia-colognola', elevation_gain: 102, elevation_loss: 1085 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Gremalto, Val Torrezzo, Colognola, Borgo di Terzo', kind: 'down', file: 'Cavallina_GremaltoTorrezzoColognola.gpx', link: '2022/06/val-torrezzo', elevation_gain: 235, elevation_loss: 1248 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Sicolo, Endine Gaiano', kind: 'down', file: 'Cavallina_SicoloEndine.gpx', link: '2022/04/monte-sicolo', elevation_gain: 4, elevation_loss: 887 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 1, zone: 'cavallina', name: 'Monte Torrezzo, Endine Gaiano', kind: 'down', file: 'Cavallina_TorrezzoEndine.gpx', link: '2022/04/monte-torrezzo', elevation_gain: 15, elevation_loss: 939 },
{ vote: 2, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Monte Boario, Solto Collina', kind: 'down', file: 'Cavallina_BoarioSoltoCollina.gpx', link: '2022/05/monte-boario', elevation_gain: 17, elevation_loss: 785 },
{ vote: 3, rate: 2, rate_max: 4, cycle: 0, zone: 'cavallina', name: 'Monte Pranz\u00E0, Cesul\u00EC, Casazza', kind: 'down', file: 'Cavallina_PranzaCesuliCasazza.gpx', link: '2022/05/pranza-cesuli-casazza', elevation_gain: 17, elevation_loss: 716 },
{ vote: 3, rate: 2, rate_max: 3, cycle: 0, zone: 'cavallina', name: 'Monte Colombina, Forcellino di Bossico, Bossico, Sovere', kind: 'down', file: 'Cavallina_ColombinaForcellinoBossicoSovere.gpx', link: '2022/06/monte-colombina', elevation_gain: 196, elevation_loss: 1255 },
{ vote: 3, rate: 2, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Valico di San Fermo, Buca del Corno, Zandobbio', kind: 'down', file: 'Cavallina_SanFermoCornoZandobbio.gpx', link: '2022/06/buca-del-corno', elevation_gain: 306, elevation_loss: 1070 },

{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'cavallina', name: 'Salita Casazza, Colle Gallo, Monte Pranz\u00E0', kind: 'up', file: 'Cavallina_SalitaCasazzaPranza_EBIKE.gpx', link: '2022/05/pranza-cesuli-casazza', elevation_gain: 718, elevation_loss: 14 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Forcella di Ranzanico, Monte Grione', kind: 'up', file: 'Cavallina_SalitaEndineForcellaGrione_EBIKE.gpx', link: '2022/02/monte-grione', elevation_gain: 1165, elevation_loss: 42 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Forcella di Ranzanico, Malga Lunga', kind: 'up', file: 'Cavallina_SalitaEndineForcellaMalgaLunga_EBIKE.gpx', link: '2022/02/malga-lunga-563', elevation_gain: 1064, elevation_loss: 146 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Forcella di Ranzanico, 618, Ranzanico', kind: 'down', file: 'Cavallina_Forcella618Ranzanico.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 1, elevation_loss: 432 },
{ vote: 3, rate: 3, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Forcella di Ranzanico, Sorgenti Bondo, Ranzanico', kind: 'down', file: 'Cavallina_ForcellaSorgenteRanzanico.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 6, elevation_loss: 398 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Salita Spinone al Lago, Forcella di Ranzanico', kind: 'up', file: 'Cavallina_SalitaSpinoneForcellaRanzanico_EBIKE.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 645, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina, ranzanico', name: 'Collegamento Ranzanico, Spinone al Lago', kind: 'up', file: 'Cavallina_CollegamentoRanzanicoSpinone_EBIKE.gpx', link: '2022/02/doppietta-ranzanico', elevation_gain: 180, elevation_loss: 405 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Entratico, Casazza, Colle Gallo, Faisecco', kind: 'up', file: 'Cavallina_SalitaEntraticoCasazzaFaisecco_EBIKE.gpx', link: '2022/03/pranza-luzzana', elevation_gain: 762, elevation_loss: 36 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Borgo di Terzo, 615, Colle di San Fermo, Monte Ballerino', kind: 'up', file: 'Cavallina_SalitaTerzo615SanFermoBallerino_EBIKE.gpx', link: '2022/03/colli-san-fermo-cummia-colognola', elevation_gain: 1174, elevation_loss: 197 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Borgo di Terzo, Grone, Colle di San Fermo, Monte Gremalto', kind: 'up', file: 'Cavallina_SalitaTerzoGroneSanFermoGremalto_EBIKE.gpx', link: '2022/06/val-torrezzo', elevation_gain: 1043, elevation_loss: 55 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Fonteno, Monte Sicolo', kind: 'up', file: 'Cavallina_SalitaEndineSicolo_EBIKE.gpx', link: '2022/04/monte-sicolo', elevation_gain: 1017, elevation_loss: 127 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Endine Gaiano, Fonteno, Monte Torrezzo', kind: 'up', file: 'Cavallina_SalitaEndineTorrezzo_EBIKE.gpx', link: '2022/04/monte-torrezzo', elevation_gain: 1110, elevation_loss: 170 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 1, zone: 'cavallina', name: 'Salita Solto Collina, Fonteno, Monte Boario', kind: 'up', file: 'Cavallina_SalitaSoltoCollinaBoario_EBIKE.gpx', link: '2022/05/monte-boario', elevation_gain: 812, elevation_loss: 23 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 3, zone: 'cavallina', name: 'Salita Sovere, Falecchio, Monte Colombia', kind: 'up', file: 'Cavallina_SalitaSovereFalecchioColombina_EBILE.gpx', link: '2022/06/monte-colombina', elevation_gain: 1305, elevation_loss: 208 },
{ vote: 0, rate: 0, rate_max: 0, cycle: 0, zone: 'cavallina', name: 'Salita Zandobbio, Grone, Valico San Fermo', kind: 'up', file: 'Cavallina_SalitaZandobbioGroneSanFermo_EBIKE.gpx', link: '2022/06/buca-del-corno', elevation_gain: 827, elevation_loss: 41 },
];
var RENAME = {
"A_ArgonPercorsoVita_REC.gpx" : "Cavallina_ArgonPercorsoVita.gpx",
"A_ArgonPietraiaEremo_REC.gpx" : "Cavallina_ArgonPietraiaEremo.gpx",
"A_ArgonSalitaMonteArgon_EBIKE.gpx" : "Cavallina_ArgonSalitaMonteArgon_EBIKE.gpx",
"A_ArgonSalitaPastaArgon_EBIKE.gpx" : "Cavallina_ArgonSalitaPastaArgon_EBIKE.gpx",
"A_ArgonSalitaPasta_EBIKE.gpx" : "Cavallina_ArgonSalitaPasta_EBIKE.gpx",
"A_ArgonSanGiorgioValleAlbano_REC.gpx" : "Cavallina_ArgonSanGiorgioValleAlbano.gpx",
"A_ArgonSentieroDellaLuna_REC.gpx" : "Cavallina_ArgonSentieroDellaLuna.gpx",
"A_ArgonValleAlbano_REC.gpx" : "Cavallina_ArgonValleAlbano.gpx",
"A_ArgonVertical_REC.gpx" : "Cavallina_ArgonVertical.gpx",
"A_ArgonWelcomeToTheJungle_REC.gpx" : "Cavallina_ArgonWelcomeToTheJungle.gpx",
"A_MismaCenate_REC.gpx" : "Cavallina_MismaCenate.gpx",
"A_PratiAltiSantAmbrogio_REC.gpx" : "Cavallina_PratiAltiSantAmbrogio.gpx",
"A_SalitaTribuliaPratiAlti_EBIKE.gpx" : "Cavallina_SalitaTribuliaPratiAlti_EBIKE.gpx",
"A_ValpredinaCenateSopra_REC.gpx" : "Cavallina_ValpredinaCenateSopra.gpx",
"B_505AZogno_REC.gpx" : "Brembana_505AZogno.gpx",
"B_AvaroTerza_REC.gpx" : "Brembana_AvaroTerza.gpx",
"B_BaitaCampoOlmo_REC.gpx" : "Brembana_BaitaCampoOlmo.gpx",
"B_BerbennoRipe_REC.gpx" : "Brembilla_BerbennoRipeBrembilla.gpx",
"B_CampelCrestaFrasnadello_REC.gpx" : "Brembana_CampelCrestaFrasnadello.gpx",
"B_CatremerioTruca_REC.gpx" : "Brembana_CatremerioTruca.gpx",
"B_CecoSonzognoPerniceZogno_REC.gpx" : "Brembana_CecoSonzognoPerniceZogno.gpx",
"B_CrosnelloSussiaVettarola_REC.gpx" : "Brembana_CrosnelloSussiaVettarola.gpx",
"B_ForcellaSpettinoMolini_REC.gpx" : "Brembana_ForcellaSpettinoMolini.gpx",
"B_MolinascoSanGiovanniBianco_REC.gpx" : "Brembana_MolinascoSanGiovanniBianco.gpx",
"B_MonteCastelloAlguaZogno_REC.gpx" : "Brembana_MonteCastelloAlguaZogno.gpx",
"B_PanchinaGigantePradaiFrasnadello_REC.gpx" : "Brembana_PanchinaGigantePradaiFrasnadello.gpx",
"B_PeriploMonteGioco_EBIKE.gpx" : "Brembana_PeriploMonteGioco_EBIKE.gpx",
"B_PiazzacavaFoppaBrembilla_REC.gpx" : "Brembilla_PiazzacavaFoppaBrembilla.gpx",
"B_PizzoCerroCavaglia_REC.gpx" : "Brembilla_PizzoCerroCavaglia.gpx",
"B_PizzoCerroFieniliBrembilla_REC.gpx" : "Brembilla_PizzoCerroFieniliBrembilla.gpx",
"B_PizzoCerroPianeBrembilla_REC.gpx" : "Brembilla_PizzoCerroPianeBrembilla.gpx",
"B_PizzoSpinoSanPellegrino_REC.gpx" : "Brembana_PizzoSpinoSanPellegrino.gpx",
"B_SAntonioCasarielli_REC.gpx" : "Brembana_SAntonioCasarielli.gpx",
"B_SAntonioTaverna_REC.gpx" : "Brembana_SAntonioTaverna.gpx",
"B_SalitaAvaro_EBIKE.gpx" : "Brembana_SalitaOlmoAvaro_EBIKE.gpx",
"B_SalitaBaitaCampo_EBIKE.gpx" : "Brembana_SalitaBaitaCampo_EBIKE.gpx",
"B_SalitaBrembillaBerbenno_EBIKE.gpx" : "Brembilla_SalitaBrembillaBerbenno_EBIKE.gpx",
"B_SalitaBrembillaCastignolaSAntonio_EBIKE.gpx" : "Brembilla_SalitaBrembillaCastignolaSAntonio_EBIKE.gpx",
"B_SalitaBrembillaCrosnelloPizzoCerro_EBIKE.gpx" : "Brembilla_SalitaBrembillaCrosnelloPizzoCerro_EBIKE.gpx",
"B_SalitaBrembillaPiazzacava_EBIKE.gpx" : "Brembilla_SalitaBrembillaPiazzacava_EBIKE.gpx",
"B_SalitaBrembillaPizzoCerro_EBIKE.gpx" : "Brembilla_SalitaBrembillaPizzoCerro_EBIKE.gpx",
"B_SalitaBrembillaTreFaggi_EBIKE.gpx" : "Brembilla_SalitaBrembillaTreFaggi_EBIKE.gpx",
"B_SalitaForcellaSpettino_EBIKE.gpx" : "Brembana_SalitaForcellaSpettino_EBIKE.gpx",
"B_SalitaFrasnitoSussia_EBIKE.gpx" : "Brembana_SalitaFrasnitoSussia_EBIKE.gpx",
"B_SalitaMolinasco_EBIKE.gpx" : "Brembana_SalitaMolinasco_EBIKE.gpx",
"B_SalitaOlmoPiazzatorreTorcola_EBIKE.gpx" : "Brembana_SalitaOlmoPiazzatorreTorcola_EBIKE.gpx",
"B_SalitaPiazzaBrembanaTorcola_EBIKE.gpx" : "Brembana_SalitaPiazzaBrembanaTorcola_EBIKE.gpx",
"B_SalitaSAntonioCrosnello_EBIKE.gpx" : "Brembana_SalitaSAntonioCrosnello_EBIKE.gpx",
"B_SalitaSalvarizza_EBIKE.gpx" : "Brembana_SalitaSalvarizza_EBIKE.gpx",
"B_SalitaSanMarco_EBIKE.gpx" : "Brembana_SalitaSanMarco_EBIKE.gpx",
"B_SalitaSantAntonioCeco_EBIKE.gpx" : "Brembana_SalitaSantAntonioCeco_EBIKE.gpx",
"B_SalitaSantaCrocePizzoSpino_EBIKE.gpx" : "Brembana_SalitaSantaCrocePizzoSpino_EBIKE.gpx",
"B_SalitaSpettinoPanchinaGigante_EBIKE.gpx" : "Brembana_SalitaSpettinoPanchinaGigante_EBIKE.gpx",
"B_SalitaZognoMonteCastello_EBIKE.gpx" : "Brembana_SalitaZognoMonteCastello_EBIKE.gpx",
"B_SalitaZognoSAntonio_EBIKE.gpx" : "Brembana_SalitaZognoSAntonio_EBIKE.gpx",
"B_SalvarizzaForcellaValcumina_EBIKE.gpx" : "Brembana_SalvarizzaForcellaValcumina_EBIKE.gpx",
"B_SanMarco113Ferro_REC.gpx" : "Brembana_SanMarco113Ferro.gpx",
"B_SussiaFrasnito_REC.gpx" : "Brembana_SussiaFrasnito.gpx",
"B_TorcolaBolliArancioPiazzolo_REC.gpx" : "Brembana_TorcolaBolliArancioPiazzolo.gpx",
"B_TorcolaPiazzaBrembana_REC.gpx" : "Brembana_TorcolaPiazzaBrembana.gpx",
"B_TreFaggiBlelloBrembilla_REC.gpx" : "Brembilla_TreFaggiBlelloBrembilla.gpx",
"B_Valcumina_REC.gpx" : "Brembana_Valcumina.gpx",
"B_VettaFrasnito_REC.gpx" : "Brembana_VettaFrasnito.gpx",
"C_BigliettoDaVisita_REC.gpx" : "Canto_BigliettoDaVisita.gpx",
"C_Canyon_REC.gpx" : "Canto_Canyon.gpx",
"C_CrocioneGuendalina_REC.gpx" : "Canto_CrocioneGuendalina.gpx",
"C_GEP_REC.gpx" : "Canto_GEP.gpx",
"C_Guendalina_REC.gpx" : "Canto_Guendalina.gpx",
"C_Kompressor_REC.gpx" : "Canto_Kompressor.gpx",
"C_PietraSAlberto_REC.gpx" : "Canto_PietraSAlberto.gpx",
"C_PorcileSanGiovanni_REC.gpx" : "Canto_PorcileSanGiovanni.gpx",
"C_RadiciGenestaro_REC.gpx" : "Canto_RadiciGenestaro.gpx",
"C_Rocce_REC.gpx" : "Canto_Rocce.gpx",
"C_SalitaAmbivere_REC.gpx" : "Canto_SalitaAmbivere.gpx",
"C_SalitaCrocione_EBIKE.gpx" : "Canto_SalitaCrocione_EBIKE.gpx",
"C_SalitaFontanella_REC.gpx" : "Canto_SalitaFontanella.gpx",
"C_SalitaMonteCanto_REC.gpx" : "Canto_SalitaMonteCanto.gpx",
"C_SalitaPontida_EBIKE.gpx" : "Canto_SalitaPontida_EBIKE.gpx",
"C_SalitaPontida_REC.gpx" : "Canto_SalitaPontida.gpx",
"C_SalitaSomascaPontida_EBIKE.gpx" : "Canto_SalitaSomascaPontida_EBIKE.gpx",
"C_SalitaSomasca_EBIKE.gpx" : "Canto_SalitaSomasca_EBIKE.gpx",
"C_SalitaSottoIlMonte_EBIKE.gpx" : "Canto_SalitaSottoIlMonte_EBIKE.gpx",
"C_SalitaSottoIlMonte_REC.gpx" : "Canto_SalitaSottoIlMonte.gpx",
"C_Scalette_REC.gpx" : "Canto_Scalette.gpx",
"C_Traliccio_REC.gpx" : "Canto_Traliccio.gpx",
"C_Uccellaia1E2_REC.gpx" : "Canto_Uccellaia1E2.gpx",
"C_Zandona_REC.gpx" : "Canto_Zandona.gpx",
"GA_PizzoFormicoMonteFarno_REC.gpx" : "Gandino_PizzoFormicoMonteFarno.gpx",
"GA_SalitaGandinoRifugioParafulmine_EBIKE.gpx" : "Gandino_SalitaGandinoRifugioParafulmine_EBIKE.gpx",
"GA_SalitaRifugioParafulminePizzoFormico_EBIKE.gpx" : "Gandino_SalitaRifugioParafulminePizzoFormico_EBIKE.gpx",
"I_AnelloResegone_REC.gpx" : "Imagna_AnelloResegone.gpx",
"I_BuonanomeSelino_REC.gpx" : "Imagna_BuonanomeSelino.gpx",
"I_BustosetaSelino_REC.gpx" : "Imagna_BustosetaSelino.gpx",
"I_CaPiatoneCampiSelino_REC.gpx" : "Imagna_CaPiatoneCampiSelino.gpx",
"I_CaPiatoneChignolo_REC.gpx" : "Imagna_CaPiatoneChignolo.gpx",
"I_CaPiatoneFoppeSelino_REC.gpx" : "Imagna_CaPiatoneFoppeSelino.gpx",
"I_Canti571TreFaggi_REC.gpx" : "Imagna_Canti571TreFaggi.gpx",
"I_CantiFreerideTreFaggi_REC.gpx" : "Imagna_CantiFreerideTreFaggi.gpx",
"I_CascineZuccheroPramagnoneVanzaroloCaPiatoneCampiSelino_REC.gpx" : "Imagna_CascineZuccheroPramagnoneVanzaroloCaPiatoneCampiSelino.gpx",
"I_CaselloFuipianoNeverolaCoegia_REC.gpx" : "Imagna_CaselloFuipianoNeverolaCoegia.gpx",
"I_ChignoloEnel_REC.gpx" : "Imagna_ChignoloEnel.gpx",
"I_ChignoloFrontaleFoppeEnel_REC.gpx" : "Imagna_ChignoloFrontaleFoppeEnel.gpx",
"I_CiclabileValleImagna_REC.gpx" : "Imagna_CiclabileValleImagna.gpx",
"I_CoegiaSelino_REC.gpx" : "Imagna_CoegiaSelino.gpx",
"I_CollettoBrumanoRifResegoneBrumano_REC.gpx" : "Imagna_CollettoBrumanoRifResegoneBrumano.gpx",
"I_CostaCavallina_REC.gpx" : "Imagna_CostaCavallina.gpx",
"I_CostaDelPalio579B_EBIKE.gpx" : "Imagna_CostaDelPalio579B_EBIKE.gpx",
"I_CoyoteScamburtit_REC.gpx" : "Imagna_CoyoteScamburtit.gpx",
"I_FinalPostiera_REC.gpx" : "Imagna_FinalPostiera.gpx",
"I_FinalSopracorna_REC.gpx" : "Imagna_FinalSopracorna.gpx",
"I_FinalValleMori_REC.gpx" : "Imagna_FinalValleMori.gpx",
"I_ForcellaAlta573Selino_REC.gpx" : "Imagna_ForcellaAlta573Selino.gpx",
"I_ForcellaAlta574Selino_REC.gpx" : "Imagna_ForcellaAlta574Selino.gpx",
"I_ForcellaAltaRizzolo_REC.gpx" : "Imagna_ForcellaAltaRizzolo.gpx",
"I_ForcellaValmanaFreeride_REC.gpx" : "Imagna_ForcellaValmanaFreeride.gpx",
"I_FrontaleFoppeEnel_REC.gpx" : "Imagna_FrontaleFoppeEnel.gpx",
"I_FuipianoVarianteNeve_REC.gpx" : "Imagna_FuipianoVarianteNeve.gpx",
"I_GalzanigaOrsoChignoloEnelCoegiaSelino_REC.gpx" : "Imagna_GalzanigaOrsoChignoloEnelCoegiaSelino.gpx",
"I_Linzone571Roncola571Almenno_REC.gpx" : "Imagna_Linzone571Roncola571Almenno.gpx",
"I_LinzoneRoncolaAltaAmagno_REC.gpx" : "Imagna_LinzoneRoncolaAltaAmagno.gpx",
"I_PagafoneOtto_REC.gpx" : "Imagna_PagafoneOtto.gpx",
"I_PassoCantoCapizzone_REC.gpx" : "Imagna_PassoCantoCapizzone.gpx",
"I_PassoPalio571Basso579Fuipiano_REC.gpx" : "Imagna_PassoPalio571Basso579Fuipiano.gpx",
"I_PassoPalioBocchettaRifResegone_EBIKE.gpx" : "Imagna_PassoPalioBocchettaRifResegone_EBIKE.gpx",
"I_PassoPalioForbesetteMorterone_REC.gpx" : "Imagna_PassoPalioForbesetteMorterone.gpx",
"I_PassoPalioFreerideMorterone_REC.gpx" : "Imagna_PassoPalioFreerideMorterone.gpx",
"I_PassoPalioOrsoPagafoneCoegia_REC.gpx" : "Imagna_PassoPalioOrsoPagafoneCoegia.gpx",
"I_PassoPalioSbarra_REC.gpx" : "Imagna_PassoPalioSbarra.gpx",
"I_PassoPorta575ValseccaScuderiaMazzoleniSelino_REC.gpx" : "Imagna_PassoPorta575ValseccaScuderiaMazzoleniSelino.gpx",
"I_PassoPorta586CaPiatoneCaProsperoSelino_REC.gpx" : "Imagna_PassoPorta586CaPiatoneCaProsperoSelino.gpx",
"I_PassoValbona579BPrati_REC.gpx" : "Imagna_PassoValbona579BPrati.gpx",
"I_PassoValbonaSbarra_REC.gpx" : "Imagna_PassoValbonaSbarra.gpx",
"I_PonteGiurinoSelino_EBIKE.gpx" : "Imagna_PonteGiurinoSelino_EBIKE.gpx",
"I_Postiera_REC.gpx" : "Imagna_Postiera.gpx",
"I_ResegoneGrandeFaggio_REC.gpx" : "Imagna_ResegoneGrandeFaggio.gpx",
"I_RifResegonePassoPorta_REC.gpx" : "Imagna_RifResegonePassoPorta.gpx",
"I_Roncola571Almenno_REC.gpx" : "Imagna_Roncola571Almenno.gpx",
"I_RoncolaBarlino_REC.gpx" : "Imagna_RoncolaBarlino.gpx",
"I_RoncolaCaLigerAlmenno_REC.gpx" : "Imagna_RoncolaCaLigerAlmenno.gpx",
"I_RoncolaCava_REC.gpx" : "Imagna_RoncolaCava.gpx",
"I_RoncolaSelino_REC.gpx" : "Imagna_RoncolaSelino.gpx",
"I_RotaCaProsperoSelino_REC.gpx" : "Imagna_RotaCaProsperoSelino.gpx",
"I_RotaFucineSelino_REC.gpx" : "Imagna_RotaFucineSelino.gpx",
"I_SalitaAlmennoCostaValcava_REC.gpx" : "Imagna_SalitaAlmennoCostaValcava.gpx",
"I_SalitaAlmennoRoncolaValcava_REC.gpx" : "Imagna_SalitaAlmennoRoncolaValcava.gpx",
"I_SalitaAmagnoValcavaLinzone_EBIKE.gpx" : "Imagna_SalitaAmagnoValcavaLinzone_EBIKE.gpx",
"I_SalitaBrumanoCascineZucchero_EBIKE.gpx" : "Imagna_SalitaBrumanoCascineZucchero_EBIKE.gpx",
"I_SalitaBrumanoPassoPorta_EBIKE.gpx" : "Imagna_SalitaBrumanoPassoPorta_EBIKE.gpx",
"I_SalitaBrumanoPraDAlet_EBIKE.gpx" : "Imagna_SalitaBrumanoPraDAlet_EBIKE.gpx",
"I_SalitaChitoBottaCornaMarcia_EBIKE.gpx" : "Imagna_SalitaChitoBottaCornaMarcia_EBIKE.gpx",
"I_SalitaChitoCantoDiretta_EBIKE.gpx" : "Imagna_SalitaChitoCantoDiretta_EBIKE.gpx",
"I_SalitaChitoCeresolaCantoPassata_EBIKE.gpx" : "Imagna_SalitaChitoCeresolaCantoPassata_EBIKE.gpx",
"I_SalitaClanezzoRoccoliPassata_EBIKE.gpx" : "Imagna_SalitaClanezzoRoccoliPassata_EBIKE.gpx",
"I_SalitaClanezzoUbione_REC.gpx" : "Imagna_SalitaClanezzoUbione.gpx",
"I_SalitaMorteronePassoPalio_EBIKE.gpx" : "Imagna_SalitaMorteronePassoPalio_EBIKE.gpx",
"I_SalitaPalioForbesetteCollettoBrumano_EBIKE.gpx" : "Imagna_SalitaPalioForbesetteCollettoBrumano_EBIKE.gpx",
"I_SalitaPalioResegone_REC.gpx" : "Imagna_SalitaPalioResegone.gpx",
"I_SalitaPassoPalioZucDeValmana_EBIKE.gpx" : "Imagna_SalitaPassoPalioZucDeValmana_EBIKE.gpx",
"I_SalitaRoncola_REC.gpx" : "Imagna_SalitaRoncola.gpx",
"I_SalitaSbarraPalioZucDeValmana_EBIKE.gpx" : "Imagna_SalitaSbarraPalioZucDeValmana_EBIKE.gpx",
"I_SalitaSbarraPalio_EBIKE.gpx" : "Imagna_SalitaSbarraPalio_EBIKE.gpx",
"I_SalitaSbarraPalio_REC.gpx" : "Imagna_SalitaSbarraPalio.gpx",
"I_SalitaSelinoForcellaAlta_EBIKE.gpx" : "Imagna_SalitaSelinoForcellaAlta_EBIKE.gpx",
"I_SalitaSelinoFuipianoTreFaggi_REC.gpx" : "Imagna_SalitaSelinoFuipianoTreFaggi.gpx",
"I_SalitaTreFaggi_REC.gpx" : "Imagna_SalitaTreFaggi.gpx",
"I_SalitaZucDeValmana_EBIKE.gpx" : "Imagna_SalitaZucDeValmana_EBIKE.gpx",
"I_TreFaggi571SelinoAlto_REC.gpx" : "Imagna_TreFaggi571SelinoAlto.gpx",
"I_TreFaggi580DisdiroliSelino_REC.gpx" : "Imagna_TreFaggi580DisdiroliSelino.gpx",
"I_TreFaggi581Locatello_REC.gpx" : "Imagna_TreFaggi581Locatello.gpx",
"I_TreFaggi592EBrunone_REC.gpx" : "Imagna_TreFaggi592EBrunone.gpx",
"I_TreFaggiTraversoFuipianoCoegia_REC.gpx" : "Imagna_TreFaggiTraversoFuipianoCoegia.gpx",
"I_Ubione571_REC.gpx" : "Imagna_Ubione571.gpx",
"I_Valcava572Selino_REC.gpx" : "Imagna_Valcava572Selino.gpx",
"I_ValcavaPonteGiurino_REC.gpx" : "Imagna_ValcavaPonteGiurino.gpx",
"I_ValseccaFonti_REC.gpx" : "Imagna_ValseccaFonti.gpx",
"I_ValseccaRotaLocatello_REC.gpx" : "Imagna_ValseccaRotaLocatello.gpx",
"I_ValseccaScuderiaMazzoleniSelino_REC.gpx" : "Imagna_ValseccaScuderiaMazzoleniSelino.gpx",
"I_VanzaroloCaPiatone_REC.gpx" : "Imagna_VanzaroloCaPiatone.gpx",
"I_VanzaroloChignolo_REC.gpx" : "Imagna_VanzaroloChignolo.gpx",
"I_ZucDeValmanaCanti579ATreFaggiFuipiano_REC.gpx" : "Imagna_ZucDeValmanaCanti579ATreFaggiFuipiano.gpx",
"I_ZucDeValmanaCrestaPassoPalio_REC.gpx" : "Imagna_ZucDeValmanaCrestaPassoPalio.gpx",
"M_532A_Olera_REC.gpx" : "Maresana_532A_Olera.gpx",
"M_532_REC.gpx" : "Maresana_532.gpx",
"M_604_REC.gpx" : "Maresana_604.gpx",
"M_Birondina_REC.gpx" : "Maresana_Birondina.gpx",
"M_Bruna_REC.gpx" : "Maresana_Bruna.gpx",
"M_CaDelLaccForcellaDelSorriso_REC.gpx" : "Maresana_CaDelLaccForcellaDelSorriso.gpx",
"M_Calvarola2_REC.gpx" : "Maresana_Calvarola2.gpx",
"M_ColleAltoMagnati_REC.gpx" : "Maresana_ColleAltoMagnati.gpx",
"M_FarWest_REC.gpx" : "Maresana_FarWest.gpx",
"M_Filoncino_REC.gpx" : "Maresana_Filoncino.gpx",
"M_FiloneEasy_REC.gpx" : "Maresana_FiloneEasy.gpx",
"M_Filone_REC.gpx" : "Maresana_Filone.gpx",
"M_FlyingDutchman_REC.gpx" : "Maresana_FlyingDutchman.gpx",
"M_Gaito_REC.gpx" : "Maresana_Gaito.gpx",
"M_Illegale_REC.gpx" : "Maresana_Illegale.gpx",
"M_LegnaiaSud_VAR.gpx" : "Maresana_LegnaiaSud_VAR.gpx",
"M_Legnaia_REC.gpx" : "Maresana_Legnaia.gpx",
"M_LucaWest_REC.gpx" : "Maresana_LucaWest.gpx",
"M_MorettaMaresana_REC.gpx" : "Maresana_MorettaMaresana.gpx",
"M_Pighet.gpx" : "Maresana_Pighet.gpx",
"M_PremerlinoPonteranicaAlta_REC.gpx" : "Maresana_PremerlinoPonteranicaAlta.gpx",
"M_Rosciano_REC.gpx" : "Maresana_Rosciano.gpx",
"M_SalitaColleAlto_EBIKE.gpx" : "Maresana_SalitaColleAlto_EBIKE.gpx",
"M_SalitaOlera_REC.gpx" : "Maresana_SalitaOlera.gpx",
"M_SalitaPonteranicaAlta_REC.gpx" : "Maresana_SalitaPonteranicaAlta.gpx",
"M_SalitaPonteranica_REC.gpx" : "Maresana_SalitaPonteranica.gpx",
"M_SalitaRanica_REC.gpx" : "Maresana_SalitaRanica.gpx",
"M_SanRocco_REC.gpx" : "Maresana_SanRocco.gpx",
"M_Scabla_REC.gpx" : "Maresana_Scabla.gpx",
"M_Tornantini_REC.gpx" : "Maresana_Tornantini.gpx",
"M_Tremana_REC.gpx" : "Maresana_Tremana.gpx",
"N_807Palestra_REC.gpx" : "Martino_807Palestra.gpx",
"N_AntenneValcavaFuniviaColFopaBurligo_REC.gpx" : "Martino_AntenneValcavaFuniviaColFopaBurligo.gpx",
"N_AntenneValcavaZuccheroneColPedrinoBurligo_REC.gpx" : "Martino_AntenneValcavaZuccheroneColPedrinoBurligo.gpx",
"N_BaitaCamutaglioLongaGolf_REC.gpx" : "Martino_BaitaCamutaglioLongaGolf.gpx",
"N_Ciacallo_REC.gpx" : "Martino_Ciacallo.gpx",
"N_ColdaraColFopaOpreno_REC.gpx" : "Martino_ColdaraColFopaOpreno.gpx",
"N_ColdaraPizzoPec_REC.gpx" : "Martino_ColdaraPizzoPec.gpx",
"N_ColdaraSanMarco_REC.gpx" : "Martino_ColdaraSanMarco.gpx",
"N_ColdaraValBratta_REC.gpx" : "Martino_ColdaraValBratta.gpx",
"N_ColleDiSogno811_REC.gpx" : "Martino_ColleDiSogno811.gpx",
"N_ColleDiSogno819_REC.gpx" : "Martino_ColleDiSogno819.gpx",
"N_ColleDiSogno823_REC.gpx" : "Martino_ColleDiSogno823.gpx",
"N_ColleDiSognoCarenno_REC.gpx" : "Martino_ColleDiSognoCarenno.gpx",
"N_ColleDiSognoCornaMartinellaExplo_REC.gpx" : "Martino_ColleDiSognoCornaMartinellaExplo.gpx",
"N_ColleDiSognoCornaMartinellaNord_REC.gpx" : "Martino_ColleDiSognoCornaMartinellaNord.gpx",
"N_ColleDiSognoCornaMartinellaSud_REC.gpx" : "Martino_ColleDiSognoCornaMartinellaSud.gpx",
"N_ColliPalazzago_EBIKE.gpx" : "Martino_ColliPalazzago_EBIKE.gpx",
"N_ConventoPertusErveSainaSomasca_EBIKE.gpx" : "Martino_ConventoPertusErveSainaSomasca_EBIKE.gpx",
"N_ConventoPertusMunikCorno_REC.gpx" : "Martino_ConventoPertusMunikCorno.gpx",
"N_ConventoPertusNesolioCorno_REC.gpx" : "Martino_ConventoPertusNesolioCorno.gpx",
"N_CornaMartinella822801A_REC.gpx" : "Martino_CornaMartinella822801A.gpx",
"N_CornaMartinellaClassica_REC.gpx" : "Martino_CornaMartinellaClassica.gpx",
"N_CornaMartinellaCristaiSuperFlow_REC.gpx" : "Martino_CornaMartinellaCristaiSuperFlow.gpx",
"N_CrinaleBorghetto_REC.gpx" : "Martino_CrinaleBorghetto.gpx",
"N_CrinaleCadimaggioAcquaBorghetto_REC.gpx" : "Martino_CrinaleCadimaggioAcquaBorghetto.gpx",
"N_CrinaleMonteValmoraBorghetto_REC.gpx" : "Martino_CrinaleMonteValmoraBorghetto.gpx",
"N_CrinalePiccoAltoPalazzago_REC.gpx" : "Martino_CrinalePiccoAltoPalazzago.gpx",
"N_CrinalePraceritoCaZucchetti_REC.gpx" : "Martino_CrinalePraceritoCaZucchetti.gpx",
"N_CrinalePraceritoFomorone_REC.gpx" : "Martino_CrinalePraceritoFomorone.gpx",
"N_FiloneEasy_REC.gpx" : "Martino_FiloneEasy.gpx",
"N_ForcellaAlta802Carenno_REC.gpx" : "Martino_ForcellaAlta802Carenno.gpx",
"N_ForcellaAlta811Carenno_REC.gpx" : "Martino_ForcellaAlta811Carenno.gpx",
"N_ForcellaAlta812Carenno_REC.gpx" : "Martino_ForcellaAlta812Carenno.gpx",
"N_ForcellaAlta815Carenno_REC.gpx" : "Martino_ForcellaAlta815Carenno.gpx",
"N_ForcellaAlta817Carenno_REC.gpx" : "Martino_ForcellaAlta817Carenno.gpx",
"N_GronfaleggioBressanoneBunde_REC.gpx" : "Martino_GronfaleggioBressanoneBunde.gpx",
"N_GronfaleggioColleDeiFratiPontida_REC.gpx" : "Martino_GronfaleggioColleDeiFratiPontida.gpx",
"N_LinzonePiaccaBaitaSpinoPalazzago_REC.gpx" : "Martino_LinzonePiaccaBaitaSpinoPalazzago.gpx",
"N_LinzonePiaccaColPedrinoPalestraBurligo_REC.gpx" : "Martino_LinzonePiaccaColPedrinoPalestraBurligo.gpx",
"N_OprenoBurligo_REC.gpx" : "Martino_OprenoBurligo.gpx",
"N_PedrinoCavatori_REC.gpx" : "Martino_PedrinoCavatori.gpx",
"N_PedrinoDHFaggetaPerlupario_REC.gpx" : "Martino_PedrinoDHFaggetaPerlupario.gpx",
"N_PedrinoMulattieraOpreno_REC.gpx" : "Martino_PedrinoMulattieraOpreno.gpx",
"N_PedrinoMuraccaForcella_REC.gpx" : "Martino_PedrinoMuraccaForcella.gpx",
"N_PiaccaDusnale_REC.gpx" : "Martino_PiaccaDusnale.gpx",
"N_PrabaciocSanRocco_REC.gpx" : "Martino_PrabaciocSanRocco.gpx",
"N_RoncolaBaita_REC.gpx" : "Martino_RoncolaBaita.gpx",
"N_RoncolaSanRocco_REC.gpx" : "Martino_RoncolaSanRocco.gpx",
"N_SalitaAcquaCrinale_EBIKE.gpx" : "Martino_SalitaAcquaCrinale_EBIKE.gpx",
"N_SalitaAlmennoPalazzagoLinzone_EBIKE.gpx" : "Martino_SalitaAlmennoPalazzagoLinzone_EBIKE.gpx",
"N_SalitaBurligoCavaAntenneValcava_EBIKE.gpx" : "Martino_SalitaBurligoCavaAntenneValcava_EBIKE.gpx",
"N_SalitaBurligoCavaLinzone_REC.gpx" : "Martino_SalitaBurligoCavaLinzone.gpx",
"N_SalitaBurligoCollePedrino_REC.gpx" : "Martino_SalitaBurligoCollePedrino.gpx",
"N_SalitaBusiCarenno_REC.gpx" : "Martino_SalitaBusiCarenno.gpx",
"N_SalitaBusiCornaMartinella_EBIKE.gpx" : "Martino_SalitaBusiCornaMartinella_EBIKE.gpx",
"N_SalitaBusiOpreno_EBIKE.gpx" : "Martino_SalitaBusiOpreno_EBIKE.gpx",
"N_SalitaBusiValcava_EBIKE.gpx" : "Martino_SalitaBusiValcava_EBIKE.gpx",
"N_SalitaCaZuchettiGronfaleggio_EBIKE.gpx" : "Martino_SalitaCaZuchettiGronfaleggio_EBIKE.gpx",
"N_SalitaCarenno819CornaMartinella_EBIKE.gpx" : "Martino_SalitaCarenno819CornaMartinella_EBIKE.gpx",
"N_SalitaCarennoForcellaAlta_EBIKE.gpx" : "Martino_SalitaCarennoForcellaAlta_EBIKE.gpx",
"N_SalitaCarennoForcellaAlta_REC.gpx" : "Martino_SalitaCarennoForcellaAlta.gpx",
"N_SalitaCelanaGronfaleggio_EBIKE.gpx" : "Martino_SalitaCelanaGronfaleggio_EBIKE.gpx",
"N_SalitaCornoConventoPertus_EBIKE.gpx" : "Martino_SalitaCornoConventoPertus_EBIKE.gpx",
"N_SalitaCornoOnetaConventoPertus_EBIKE.gpx" : "Martino_SalitaCornoOnetaConventoPertus_EBIKE.gpx",
"N_SalitaCrinaleBorghetto_EBIKE.gpx" : "Martino_SalitaCrinaleBorghetto_EBIKE.gpx",
"N_SalitaCrinaleCaZucchetti_EBIKE.gpx" : "Martino_SalitaCrinaleCaZucchetti_EBIKE.gpx",
"N_SalitaCrinalePalazzago_EBIKE.gpx" : "Martino_SalitaCrinalePalazzago_EBIKE.gpx",
"N_SalitaForcellaAltaMonteTesoro_EBIKE.gpx" : "Martino_SalitaForcellaAltaMonteTesoro_EBIKE.gpx",
"N_SalitaForcellaAltaMonteTesoro_REC.gpx" : "Martino_SalitaForcellaAltaMonteTesoro.gpx",
"N_SalitaPalazzagoCava_REC.gpx" : "Martino_SalitaPalazzagoCava.gpx",
"N_SalitaPalazzagoMontePiacca_EBIKE.gpx" : "Martino_SalitaPalazzagoMontePiacca_EBIKE.gpx",
"N_SalitaSomascaCarennoConventoPertus_EBIKE.gpx" : "Martino_SalitaSomascaCarennoConventoPertus_EBIKE.gpx",
"N_SalitaValcavaTesoro_EBIKE.gpx" : "Martino_SalitaValcavaTesoro_EBIKE.gpx",
"N_TesoroDirSognoMartinellaCristaiSuperFlow_REC.gpx" : "Martino_TesoroDirSognoMartinellaCristaiSuperFlow.gpx",
"N_Valcava821Busi_REC.gpx" : "Martino_Valcava821Busi.gpx",
"N_Valcava823SognoMartinellaClassica_REC.gpx" : "Martino_Valcava823SognoMartinellaClassica.gpx",
"N_ValcavaLinzone_REC.gpx" : "Martino_ValcavaLinzone.gpx",
"PC_712Nord_REC.gpx" : "Colli_712Nord.gpx",
"PC_712Roccolo_REC.gpx" : "Colli_712Roccolo.gpx",
"PC_712Sud_REC.gpx" : "Colli_712Sud.gpx",
"PC_713Partigiano_REC.gpx" : "Colli_713Partigiano.gpx",
"PC_910_REC.gpx" : "Colli_910.gpx",
"PC_AllegrezzaSud_REC.gpx" : "Colli_AllegrezzaSud.gpx",
"PC_Allegrezza_REC.gpx" : "Colli_Allegrezza.gpx",
"PC_ExPistino_REC.gpx" : "Colli_ExPistino.gpx",
"PC_Gradoni_REC.gpx" : "Colli_Gradoni.gpx",
"PC_GussaEst_REC.gpx" : "Colli_GussaEst.gpx",
"PC_GussaNord_REC.gpx" : "Colli_GussaNord.gpx",
"PC_GussaOvest_REC.gpx" : "Colli_GussaOvest.gpx",
"PC_GussaSud_REC.gpx" : "Colli_GussaSud.gpx",
"PC_PistinoDownhill_REC.gpx" : "Colli_PistinoDownhill.gpx",
"PC_RoccoloneNord_REC.gpx" : "Colli_RoccoloneNord.gpx",
"PC_RoccoloneSud_REC.gpx" : "Colli_RoccoloneSud.gpx",
"PC_Roccolone_REC.gpx" : "Colli_Roccolone.gpx",
"PC_SalitaAstino_REC.gpx" : "Colli_SalitaAstino.gpx",
"PC_SalitaCimaRoccolone_REC.gpx" : "Colli_SalitaCimaRoccolone.gpx",
"PC_SalitaGussa_REC.gpx" : "Colli_SalitaGussa.gpx",
"PC_SalitaMadonnaDelBosco_REC.gpx" : "Colli_SalitaMadonnaDelBosco.gpx",
"PC_SalitaRoccolone_REC.gpx" : "Colli_SalitaRoccolone.gpx",
"PC_Torre_REC.gpx" : "Colli_Torre.gpx",
"SA_CazzanigaArtavaggioVascaNeve_REC.gpx" : "Valsassina_CazzanigaArtavaggioVascaNeve.gpx",
"SA_MoggioArtavaggioCazzaniga_REC.gpx" : "Valsassina_MoggioArtavaggioCazzaniga.gpx",
"SR_203_REC.gpx" : "Sorisole_203.gpx",
"SR_229_Premerlino_REC.gpx" : "Sorisole_229_Premerlino.gpx",
"SR_229_REC.gpx" : "Sorisole_229.gpx",
"SR_Bacino_REC.gpx" : "Sorisole_Bacino.gpx",
"SR_CantoAlto220113Sorisole_REC.gpx" : "Sorisole_CantoAlto220113Sorisole.gpx",
"SR_CantoAltoPratiPariniSedrina_REC.gpx" : "Sorisole_CantoAltoPratiPariniSedrina.gpx",
"SR_CatenePisgiu_EBIKE.gpx" : "Sorisole_CatenePisgiu_EBIKE.gpx",
"SR_GalusuOvest_REC.gpx" : "Sorisole_GalusuOvest.gpx",
"SR_GalusuSud_REC.gpx" : "Sorisole_GalusuSud.gpx",
"SR_Galusu_REC.gpx" : "Sorisole_Galusu.gpx",
"SR_Giongo_REC.gpx" : "Sorisole_Giongo.gpx",
"SR_PistaDHHard_REC.gpx" : "Sorisole_PistaDHHard.gpx",
"SR_PistaDH_REC.gpx" : "Sorisole_PistaDH.gpx",
"SR_SalitaCantoBassoCantoAlto_REC.gpx" : "Sorisole_SalitaCantoBassoCantoAlto.gpx",
"SR_SalitaForcellaDelSorrisoCantoBasso_REC.gpx" : "Sorisole_SalitaForcellaDelSorrisoCantoBasso.gpx",
"SR_SalitaForcellaDiRua_REC.gpx" : "Sorisole_SalitaForcellaDiRua.gpx",
"SR_SalitaGalusu_EBIKE.gpx" : "Sorisole_SalitaGalusu_EBIKE.gpx",
"SR_SalitaGiongo_REC.gpx" : "Sorisole_SalitaGiongo.gpx",
"SR_SalitaPonteseccoGalusu_EBIKE.gpx" : "Sorisole_SalitaPonteseccoGalusu_EBIKE.gpx",
"SR_SalitaPonteseccoPistaDH_REC.gpx" : "Sorisole_SalitaPonteseccoPistaDH.gpx",
"SR_SorisolePistinoScuolaMTB_REC.gpx" : "Sorisole_SorisolePistinoScuolaMTB.gpx",
"SR_SorisolePonteranicaAlta_REC.gpx" : "Sorisole_SorisolePonteranicaAlta.gpx",
"S_534Salmezza_REC.gpx" : "Seriana_534Salmezza.gpx",
"S_535Lonno_REC.gpx" : "Seriana_535Lonno.gpx",
"S_535Valtrusa_REC.gpx" : "Seriana_535Valtrusa.gpx",
"S_540A_REC.gpx" : "Seriana_540A.gpx",
"S_550MulattieraAlbino_REC.gpx" : "Seriana_550MulattieraAlbino.gpx",
"S_BastiaCarezzola2_REC.gpx" : "Seriana_BastiaCarezzola2.gpx",
"S_BastiaCarezzola_REC.gpx" : "Seriana_BastiaCarezzola.gpx",
"S_BastiaCentrale_REC.gpx" : "Seriana_BastiaCentrale.gpx",
"S_BastiaFola_REC.gpx" : "Seriana_BastiaFola.gpx",
"S_BastiaGianino_REC.gpx" : "Seriana_BastiaGianino.gpx",
"S_BastiaValbona_REC.gpx" : "Seriana_BastiaValbona.gpx",
"S_CantoBassoForcellaSorriso_REC.gpx" : "Seriana_CantoBassoForcellaSorriso.gpx",
"S_Cavlera528_REC.gpx" : "Seriana_Cavlera528.gpx",
"S_CiclabileValleSeriana_REC.gpx" : "Seriana_CiclabileValleSeriana.gpx",
"S_CicloviaDelleRogge_REC.gpx" : "Seriana_CicloviaDelleRogge.gpx",
"S_ColerBiroliCornale_REC.gpx" : "Seriana_ColerBiroliCornale.gpx",
"S_ColerSantAntonio_REC.gpx" : "Seriana_ColerSantAntonio.gpx",
"S_ColerVertical_REC.gpx" : "Seriana_ColerVertical.gpx",
"S_ForcellaNese531Nese_REC.gpx" : "Seriana_ForcellaNese531Nese.gpx",
"S_ForcellaNese533BCantoBasso_REC.gpx" : "Seriana_ForcellaNese533BCantoBasso.gpx",
"S_Ganda520_REC.gpx" : "Seriana_Ganda520.gpx",
"S_Ganda521_REC.gpx" : "Seriana_Ganda521.gpx",
"S_LonnoColleBastia_REC.gpx" : "Seriana_LonnoColleBastia.gpx",
"S_LonnoLuio_REC.gpx" : "Seriana_LonnoLuio.gpx",
"S_LonnoPercorsoVitaLuio_REC.gpx" : "Seriana_LonnoPercorsoVitaLuio.gpx",
"S_LonnoPercorsoVita_REC.gpx" : "Seriana_LonnoPercorsoVita.gpx",
"S_LonnoPizzoMonteGanda_REC.gpx" : "Seriana_LonnoPizzoMonteGanda.gpx",
"S_MismaPradale_REC.gpx" : "Seriana_MismaPradale.gpx",
"S_MismaPratolina_REC.gpx" : "Seriana_MismaPratolina.gpx",
"S_MonteCavallo_REC.gpx" : "Seriana_MonteCavallo.gpx",
"S_NembroTrail_REC.gpx" : "Seriana_NembroTrail.gpx",
"S_NigromoVertical_REC.gpx" : "Seriana_NigromoVertical.gpx",
"S_Olera532Burro531Nese_REC.gpx" : "Seriana_Olera532Burro531Nese.gpx",
"S_Poieto523Gazzaniga_REC.gpx" : "Seriana_Poieto523Gazzaniga.gpx",
"S_PoietoDH_REC.gpx" : "Seriana_PoietoDH.gpx",
"S_PradaleColerRinnovata_REC.gpx" : "Seriana_PradaleColerRinnovata.gpx",
"S_PradaleCostaSorgenti_REC.gpx" : "Seriana_PradaleCostaSorgenti.gpx",
"S_PuritoCereto_REC.gpx" : "Seriana_PuritoCereto.gpx",
"S_SalitaAviaticoForcaPoieto_EBIKE.gpx" : "Seriana_SalitaAviaticoForcaPoieto_EBIKE.gpx",
"S_SalitaBastia_EBIKE.gpx" : "Seriana_SalitaBastia_EBIKE.gpx",
"S_SalitaCavlera_REC.gpx" : "Seriana_SalitaCavlera.gpx",
"S_SalitaCornalePradale_EBIKE.gpx" : "Seriana_SalitaCornalePradale_EBIKE.gpx",
"S_SalitaForcellaMisma_EBIKE.gpx" : "Seriana_SalitaForcellaMisma_EBIKE.gpx",
"S_SalitaForcellaRipetitoriMisma_EBIKE.gpx" : "Seriana_SalitaForcellaRipetitoriMisma_EBIKE.gpx",
"S_SalitaGandaPoieto_REC.gpx" : "Seriana_SalitaGandaPoieto.gpx",
"S_SalitaLonno_REC.gpx" : "Seriana_SalitaLonno.gpx",
"S_SalitaMisma511_REC.gpx" : "Seriana_SalitaMisma511.gpx",
"S_SalitaMismaRipetitori_EBIKE.gpx" : "Seriana_SalitaMismaRipetitori_EBIKE.gpx",
"S_SalitaMonteCavallo_REC.gpx" : "Seriana_SalitaMonteCavallo.gpx",
"S_SalitaMonteDiNeseCantoBasso_REC.gpx" : "Seriana_SalitaMonteDiNeseCantoBasso.gpx",
"S_SalitaNembroSelvino_REC.gpx" : "Seriana_SalitaNembroSelvino.gpx",
"S_SalitaNeseForcella_REC.gpx" : "Seriana_SalitaNeseForcella.gpx",
"S_SalitaPurito_EBIKE.gpx" : "Seriana_SalitaPurito_EBIKE.gpx",
"S_SalitaSalmezza_REC.gpx" : "Seriana_SalitaSalmezza.gpx",
"S_SalitaSelvinoGanda_REC.gpx" : "Seriana_SalitaSelvinoGanda.gpx",
"S_SalitaTribulinaColer_EBIKE.gpx" : "Seriana_SalitaTribulinaColer_EBIKE.gpx",
"S_Salmezza533ForcellaNese_REC.gpx" : "Seriana_Salmezza533ForcellaNese.gpx",
"S_SalmezzaBaitaGAPLonno_REC.gpx" : "Seriana_SalmezzaBaitaGAPLonno.gpx",
"S_Trevasco_REC.gpx" : "Seriana_Trevasco.gpx",
"S_Trote_REC.gpx" : "Seriana_Trote.gpx"
};

var CHARGING = [
    { lat:45.9886866, lng:9.7133109, brand:"" },
    { lat:45.9903851, lng:9.6807333, brand:"" },
    { lat:45.731991, lng:9.5659171, brand:"Pradella Sistemi Srl" },
    { lat:45.6772, lng:9.8274, brand:"Pradella Sistemi srl" },
    { lat:45.63045, lng:9.76233, brand:"Pradella Sistemi srl" },
    { lat:45.7716, lng:9.90811, brand:"Pradella Sistemi srl" },
    { lat:45.6498, lng:9.5562, brand:"Pradella Sistemi srl" },
    { lat:45.8737, lng:9.9043, brand:"Pradella Sistemi srl" },
    { lat:45.71644, lng:9.54542, brand:"Pradella Sistemi srl" },
    { lat:45.5807817, lng:9.7062128, brand:"Pradella Sistemi srl" },
    { lat:45.8827833, lng:10.0944306, brand:"Pradella Sistemi srl" },
    { lat:45.7202262, lng:9.9003081, brand:"Pradella Sistemi srl" },
    { lat:45.62506, lng:9.76216, brand:"Pradella Sistemi srl" },
    { lat:45.61603, lng:9.76072, brand:"Pradella Sistemi srl" },
    { lat:45.677083, lng:9.829611, brand:"Pradella Sistemi srl" },
    { lat:45.888412, lng:9.95503, brand:"Pradella Sistemi srl" },
    { lat:45.88866, lng:9.94467, brand:"Pradella Sistemi srl" },
    { lat:45.890714, lng:9.985157, brand:"Pradella Sistemi srl" },
    { lat:45.9326778, lng:10.0294417, brand:"Pradella Sistemi srl" },
    { lat:45.91197, lng:10.04398, brand:"Pradella Sistemi srl" },
    { lat:45.7146874, lng:9.7404786, brand:"Pradella Sistemi srl" },
    { lat:45.7089768, lng:9.7600517, brand:"Pradella Sistemi srl" },
    { lat:45.69644, lng:9.70185, brand:"Pradella Sistemi srl" },
    { lat:45.998794, lng:9.758908, brand:"Pradella Sistemi srl" },
    { lat:45.8305606, lng:9.7428085, brand:"Pradella Sistemi srl" },
    { lat:45.7161, lng:9.8797, brand:"Pradella Sistemi srl" },
    { lat:45.714472, lng:9.88025, brand:"Pradella Sistemi srl" },
    { lat:45.5815, lng:9.5956, brand:"Pradella Sistemi srl" },
    { lat:45.61888, lng:9.772, brand:"Pradella Sistemi srl" },
    { lat:45.73078, lng:9.72886, brand:"Pradella Sistemi srl" },
    { lat:45.866886, lng:9.996144, brand:"Pradella Sistemi srl" },
    { lat:45.7214, lng:9.55083, brand:"Pradella Sistemi srl" },
    { lat:45.7175903, lng:9.7785845, brand:"Pradella Sistemi srl" },
    { lat:45.8924, lng:9.5669, brand:"Pradella Sistemi srl" },
    { lat:45.7910467, lng:9.8322378, brand:"Pradella Sistemi srl" },
    { lat:45.7263, lng:9.52643, brand:"Pradella Sistemi srl" },
    { lat:45.689, lng:9.567889, brand:"Pradella Sistemi srl" },
    { lat:45.7391644, lng:10.0388107, brand:"Pradella Sistemi srl" },
    { lat:45.8179427, lng:9.910798, brand:"Pradella Sistemi srl" },
    { lat:45.8120467, lng:9.9004475, brand:"Pradella Sistemi srl" },
    { lat:45.9531019, lng:9.6979439, brand:"Pradella Sistemi srl" },
    { lat:45.58712, lng:9.60096, brand:"Pradella Sistemi srl" },
    { lat:45.5275, lng:9.7324, brand:"Pradella Sistemi srl" },
    { lat:45.900863, lng:9.653873, brand:"Pradella Sistemi srl" },
    { lat:45.8967636, lng:9.6572962, brand:"Pradella Sistemi srl" },
    { lat:45.9767802, lng:10.1022016, brand:"Pradella Sistemi srl" },
    { lat:45.9718216, lng:9.7046421, brand:"Pradella Sistemi srl" },
    { lat:45.8759371, lng:9.4816529, brand:"Pradella Sistemi srl" },
    { lat:45.92917, lng:10.09673, brand:"Pradella Sistemi srl" },
    { lat:45.9748587, lng:10.0721286, brand:"Pradella Sistemi srl" },
    { lat:45.656167, lng:9.500806, brand:"Pradella Sistemi srl" },
    { lat:45.88504, lng:9.931027, brand:"Pradella Sistemi srl" },
    { lat:46.004939, lng:9.760356, brand:"Pradella Sistemi srl" },
    { lat:45.7885857, lng:9.9814482, brand:"Pradella Sistemi srl" },
    { lat:45.8270075, lng:9.7349094, brand:"Pradella Sistemi srl" },
    { lat:45.77338, lng:9.91818, brand:"Pradella Sistemi srl" },
    { lat:45.73439, lng:9.72453, brand:"Pradella Sistemi srl" },
    { lat:45.9888274, lng:9.7133697, brand:"Pradella Sistemi srl" },
    { lat:45.7321, lng:9.5659, brand:"Pradella Sistemi srl" },
    { lat:45.6245809, lng:9.6243591, brand:"Pradella Sistemi srl" },
    { lat:45.79476, lng:9.82938, brand:"Pradella Sistemi srl" },
    { lat:45.692111, lng:9.569778, brand:"Pradella Sistemi srl" },
    { lat:45.8328432, lng:9.89939, brand:"Pradella Sistemi srl" },
    { lat:45.9491054, lng:9.7026111, brand:"Pradella Sistemi srl" },
    { lat:45.8756, lng:9.4905, brand:"Pradella Sistemi srl" },
    { lat:45.8784866, lng:9.4849207, brand:"Pradella Sistemi srl" },
    { lat:45.6461, lng:9.5472, brand:"Pradella Sistemi srl" },
    { lat:45.6978, lng:9.6989, brand:"Pradella Sistemi srl" },
    { lat:45.7684, lng:9.7143, brand:"Pradella Sistemi srl" },
    { lat:45.8116451, lng:9.9031754, brand:"Pradella Sistemi srl" },
    { lat:45.7903, lng:9.9653, brand:"Pradella Sistemi srl" },
    { lat:45.9742248, lng:10.0806882, brand:"Pradella Sistemi srl" },
    { lat:45.890095, lng:10.011462, brand:"Pradella Sistemi srl" },
    { lat:45.6621, lng:9.9277, brand:"Pradella Sistemi srl" },
    { lat:45.5845, lng:9.601, brand:"Pradella Sistemi srl" },
    { lat:45.7258152, lng:9.8938624, brand:"Pradella Sistemi srl" },
    { lat:45.7966869, lng:9.8348134, brand:"Pradella Sistemi srl" },
    { lat:45.7164, lng:9.8817, brand:"Pradella Sistemi srl" },
    { lat:45.8057, lng:9.82319, brand:"Pradella Sistemi srl" },
    { lat:45.988835, lng:9.631324, brand:"Pradella Sistemi srl" },
    { lat:45.7786636, lng:9.9430027, brand:"Pradella Sistemi srl" },
    { lat:45.7201049, lng:9.5490284, brand:"Pradella Sistemi srl" },
    { lat:45.80132, lng:9.83063, brand:"Pradella Sistemi srl" },
    { lat:45.79651, lng:9.83631, brand:"Pradella Sistemi srl" },
    { lat:45.9519136, lng:9.6988114, brand:"Pradella Sistemi srl" },
    { lat:45.873449, lng:9.4816879, brand:"Pradella Sistemi srl" },
    { lat:45.8713, lng:9.5137, brand:"Pradella Sistemi srl" },
    { lat:45.9485, lng:10.1043, brand:"Pradella Sistemi srl" },
    { lat:45.7345, lng:9.568, brand:"Pradella Sistemi srl" },
    { lat:45.926305, lng:9.648908, brand:"Pradella Sistemi srl" },
    { lat:45.718093, lng:9.9031703, brand:"Pradella Sistemi srl" },
    { lat:45.880001, lng:9.92098, brand:"Pradella Sistemi srl" },
    { lat:45.71922, lng:9.557985, brand:"Pradella Sistemi srl" },
    { lat:45.8917634, lng:9.9430978, brand:"Pradella Sistemi srl" },
    { lat:45.7072182, lng:9.7566023, brand:"Pradella Sistemi srl" },
    { lat:45.7027969, lng:9.7382126, brand:"Pradella Sistemi srl" },
    { lat:45.7096176, lng:9.7274923, brand:"Pradella Sistemi srl" },
    { lat:45.72436, lng:9.89754, brand:"Pradella Sistemi srl" },
    { lat:45.7335091, lng:9.9057589, brand:"Pradella Sistemi srl" },
    { lat:45.72578, lng:9.89386, brand:"Pradella Sistemi srl" },
    { lat:45.88528, lng:9.94828, brand:"Pradella Sistemi srl" },
    { lat:45.8907338, lng:9.9449812, brand:"Pradella Sistemi srl" },
    { lat:45.7193031, lng:9.760375, brand:"Pradella Sistemi srl" },
    { lat:45.787833, lng:9.997667, brand:"Pradella Sistemi srl" },
    { lat:45.718886, lng:9.9013571, brand:"Pradella Sistemi srl" },
    { lat:45.7891617, lng:9.9876442, brand:"Pradella Sistemi srl" },
    { lat:45.73308, lng:9.95503, brand:"Pradella Sistemi srl" },
    { lat:45.7181, lng:9.8767, brand:"Pradella Sistemi srl" },
    { lat:45.705612, lng:9.546349, brand:"Pradella Sistemi srl" },
    { lat:45.72789, lng:9.90543, brand:"Pradella Sistemi srl" },
    { lat:45.6886501, lng:9.4708275, brand:"Pradella Sistemi srl" },
    { lat:45.7121086, lng:9.7315588, brand:"Pradella Sistemi srl" },
    { lat:45.756, lng:9.69134, brand:"Pradella Sistemi srl" },
    { lat:45.77405, lng:9.92269, brand:"Pradella Sistemi srl" },
    { lat:45.650833, lng:9.499306, brand:"Pradella Sistemi srl" },
    { lat:45.4990153, lng:9.7666439, brand:"" },
    { lat:45.8753, lng:9.89365, brand:"Pradella Sistemi srl" },
    { lat:45.87386, lng:9.89301, brand:"Pradella Sistemi srl" },
    { lat:45.8759, lng:9.89173, brand:"Pradella Sistemi srl" },
    { lat:45.894561, lng:10.007172, brand:"Pradella Sistemi srl" },
    { lat:45.813588, lng:9.568993, brand:"Pradella Sistemi srl" },
    { lat:45.853442, lng:9.501022, brand:"Pradella Sistemi srl" },
    { lat:45.830755, lng:9.544068, brand:"Pradella Sistemi srl" },
    { lat:45.803295, lng:9.503682, brand:"Pradella Sistemi srl" },
    { lat:45.852504, lng:9.528515, brand:"" },
    { lat:45.768536, lng:9.561781, brand:"Pradella Sistemi srl" },
    { lat:45.828463, lng:9.518973, brand:"Pradella Sistemi srl" },
    { lat:45.87593, lng:9.89176, brand:"Pradella Sistemi srl" },
    { lat:45.875666, lng:9.889484, brand:"Pradella Sistemi srl" },
    { lat:45.874263, lng:9.893046, brand:"Pradella Sistemi srl" },
    { lat:45.874239, lng:9.892959, brand:"Pradella Sistemi srl" },
    { lat:45.874232, lng:9.89285, brand:"Pradella Sistemi srl" },
    { lat:45.5215, lng:9.5805, brand:"Pradella Sistemi srl" },
    { lat:45.5509, lng:9.578, brand:"Pradella Sistemi srl" },
    { lat:45.515485, lng:9.588288, brand:"Pradella Sistemi srl" },
    { lat:46.032095, lng:10.002094, brand:"Pradella Sistemi srl" },
    { lat:45.67114, lng:9.494243, brand:"Pradella Sistemi srl" },
    { lat:45.674038, lng:9.496199, brand:"Pradella Sistemi srl" },
    { lat:45.7346898, lng:9.6370414, brand:"" },
    { lat:45.791035, lng:9.8324015, brand:"Pradella Sistemi srl" },
    { lat:45.6171242, lng:9.7579113, brand:"" },
    { lat:45.731667, lng:9.733759, brand:"Pradella Sistemi srl" },
    { lat:45.791035, lng:9.8324015, brand:"Pradella Sistemi srl" },
    { lat:45.8108226, lng:9.8681493, brand:"Pradella Sistemi srl" },
    { lat:45.4973713, lng:9.6437468, brand:"" },
    { lat:45.4973696, lng:9.643735, brand:"" },
    { lat:46.0547, lng:10.009854, brand:"Pradella Sistemi srl" },
    { lat:45.7067, lng:9.8715, brand:"Pradella Sistemi srl" },
    { lat:45.6938, lng:9.8807, brand:"Pradella Sistemi srl" },
    { lat:45.7431, lng:9.6513, brand:"Pradella Sistemi srl" },
    { lat:45.7082, lng:9.876, brand:"Pradella Sistemi srl" },
    { lat:45.7347, lng:9.637, brand:"Pradella Sistemi srl" },
    { lat:45.8314, lng:9.5117, brand:"Pradella Sistemi srl" },
    { lat:45.8284, lng:9.5189, brand:"Pradella Sistemi srl" },
    { lat:45.8637281, lng:9.4007655, brand:"Shelter Lecco Via Sora" },
    { lat:45.8633837, lng:9.4280838, brand:"Shelter Lecco Piani d'Erna" },
    { lat:45.502441, lng:9.7689264, brand:"" },
    { lat:45.666984, lng:9.9549197, brand:"" },
    { lat:45.7952584, lng:9.5634767, brand:"" },
    { lat:45.8906449, lng:9.7691267, brand:"" },
    { lat:45.8646602, lng:9.7731032, brand:"" },
];
var DRINKING = [
    { kind:"drinking", lat:45.6704804, lng:9.657106 },
    { kind:"drinking", lat:45.6623086, lng:9.6771123 },
    { kind:"drinking", lat:45.6628628, lng:9.6752592 },
    { kind:"drinking", lat:45.6632636, lng:9.676301 },
    { kind:"drinking", lat:45.6595311, lng:9.6728113 },
    { kind:"drinking", lat:45.6595695, lng:9.6746841 },
    { kind:"drinking", lat:45.6582303, lng:9.6692131 },
    { kind:"drinking", lat:45.6612075, lng:9.6758748 },
    { kind:"drinking", lat:45.6728834, lng:9.6656496 },
    { kind:"drinking", lat:45.6602766, lng:9.6756984 },
    { kind:"drinking", lat:45.6883296, lng:9.6155579 },
    { kind:"drinking", lat:45.6636418, lng:9.6773868 },
    { kind:"drinking", lat:45.6605597, lng:9.6570241 },
    { kind:"drinking", lat:45.6845827, lng:9.686254 },
    { kind:"drinking", lat:45.6735047, lng:9.6615638 },
    { kind:"drinking", lat:45.7075372, lng:9.49825, wiki:"20230201-grezia_bob-129.jpg", hash:"9/93" },
    { kind:"drinking", lat:45.9029761, lng:9.4950207, wiki:"20240131-giro_taleggio-091.jpg", hash:"2/21" },
    { kind:"drinking", lat:45.9543461, lng:9.7655965, wiki:"20220823-cornacchie-104.jpg", hash:"0/01" },
    { kind:"drinking", lat:45.9546502, lng:9.764458, wiki:"20220823-cornacchie-112.jpg", hash:"5/5c" },
    { kind:"drinking", lat:45.9544044, lng:9.7619252 },
    { kind:"drinking", lat:45.9520677, lng:9.7343393, wiki:"20220823-cornacchie-046.jpg", hash:"e/ea" },
    { kind:"drinking", lat:45.9532498, lng:9.7292102, wiki:"20220823-cornacchie-223.jpg", hash:"6/61" },
    { kind:"drinking", lat:45.9570413, lng:9.7449847, wiki:"20220824-mezzeno-034.jpg", hash:"5/50" },
    { kind:"drinking", lat:45.6875205, lng:9.6533083 },
    { kind:"drinking", lat:45.9481023, lng:9.9154699 },
    { kind:"drinking", lat:45.6711232, lng:9.7300907 },
    { kind:"drinking", lat:45.9544439, lng:9.8124394 },
    { kind:"drinking", lat:45.9500405, lng:9.8582101 },
    { kind:"drinking", lat:45.7628126, lng:9.9315199 },
    { kind:"drinking", lat:45.712053, lng:9.6939895 },
    { kind:"drinking", lat:45.7109798, lng:9.6937788 },
    { kind:"drinking", lat:45.7564679, lng:9.7976267 },
    { kind:"drinking", lat:45.7794729, lng:9.82486 },
    { kind:"drinking", lat:45.8001464, lng:9.8469743 },
    { kind:"drinking", lat:45.8223004, lng:9.8589254 },
    { kind:"drinking", lat:45.8486754, lng:9.8808443, wiki:"20211229-518_bondo-283.jpg", hash:"2/23" },
    { kind:"drinking", lat:45.8002336, lng:9.8852461 },
    { kind:"drinking", lat:45.6504964, lng:9.6528921 },
    { kind:"drinking", lat:45.6449258, lng:9.6550686 },
    { kind:"drinking", lat:45.660983, lng:9.677207 },
    { kind:"drinking", lat:45.8980759, lng:9.4633964 },
    { kind:"drinking", lat:45.8986566, lng:9.4617554 },
    { kind:"drinking", lat:45.89749, lng:9.4649277 },
    { kind:"drinking", lat:45.9389466, lng:10.0419115 },
    { kind:"drinking", lat:45.7223792, lng:9.6204192 },
    { kind:"drinking", lat:45.8313282, lng:10.0751081 },
    { kind:"drinking", lat:45.8276082, lng:10.0449279, wiki:"20220602-colombina-247.jpg", hash:"3/35" },
    { kind:"drinking", lat:45.8363198, lng:10.0752948 },
    { kind:"drinking", lat:45.9218698, lng:9.5122878, wiki:"20240131-giro_taleggio-055.jpg", hash:"6/62" },
    { kind:"drinking", lat:45.9188229, lng:9.5248666 },
    { kind:"drinking", lat:45.9266783, lng:9.5269475 },
    { kind:"drinking", lat:45.6957608, lng:9.7038845 },
    { kind:"drinking", lat:45.8612401, lng:9.9910627 },
    { kind:"drinking", lat:45.8775602, lng:9.9774798 },
    { kind:"drinking", lat:45.8679438, lng:9.9927315, wiki:"20220602-colombina-046.jpg", hash:"d/d6" },
    { kind:"drinking", lat:45.717329, lng:9.6750508 },
    { kind:"drinking", lat:45.6392953, lng:9.6841398 },
    { kind:"drinking", lat:45.6942265, lng:9.6923641 },
    { kind:"drinking", lat:45.7062903, lng:9.6587578 },
    { kind:"drinking", lat:45.8916023, lng:10.0094375 },
    { kind:"drinking", lat:45.6802853, lng:9.6439322 },
    { kind:"drinking", lat:45.6796184, lng:9.6499197 },
    { kind:"drinking", lat:45.6804506, lng:9.6505599 },
    { kind:"drinking", lat:45.6916687, lng:9.6109995 },
    { kind:"drinking", lat:45.7030685, lng:9.6708451 },
    { kind:"drinking", lat:45.7044153, lng:9.6719738 },
    { kind:"drinking", lat:45.8160989, lng:10.0731701 },
    { kind:"drinking", lat:45.8155103, lng:10.0713681 },
    { kind:"drinking", lat:45.8191475, lng:10.0775838 },
    { kind:"drinking", lat:45.819764, lng:10.0798978 },
    { kind:"drinking", lat:45.8211402, lng:10.0801279 },
    { kind:"drinking", lat:45.7044162, lng:9.6572295 },
    { kind:"drinking", lat:46.0091392, lng:10.1546344 },
    { kind:"drinking", lat:45.7119868, lng:9.6667115 },
    { kind:"drinking", lat:45.6907096, lng:9.611475 },
    { kind:"drinking", lat:45.7743489, lng:9.5496998, wiki:"20221106-roncola_comunali-017.jpg", hash:"3/37" },
    { kind:"drinking", lat:45.7740557, lng:9.5502829, wiki:"20221106-roncola_comunali-015.jpg", hash:"7/78" },
    { kind:"drinking", lat:45.680593, lng:10.0192581 },
    { kind:"drinking", lat:45.7053242, lng:9.5405298 },
    { kind:"drinking", lat:45.8205396, lng:10.0743019 },
    { kind:"drinking", lat:45.8134033, lng:10.0676804 },
    { kind:"drinking", lat:46.0007564, lng:10.0828326 },
    { kind:"drinking", lat:45.9901776, lng:9.6766, wiki:"20230806-piazzolo-116.jpg", hash:"0/04" },
    { kind:"drinking", lat:45.9567559, lng:9.7459935, wiki:"20220824-mezzeno-039.jpg", hash:"6/60" },
    { kind:"drinking", lat:45.9544572, lng:9.7441462 },
    { kind:"drinking", lat:45.7192153, lng:9.6703657 },
    { kind:"drinking", lat:45.9649391, lng:9.8000308, wiki:"20220824-mezzeno-093.jpg", hash:"2/24" },
    { kind:"drinking", lat:45.8037571, lng:10.0671661 },
    { kind:"drinking", lat:45.8022722, lng:10.0684552 },
    { kind:"drinking", lat:45.7676775, lng:9.562092, wiki:"20221106-roncola_comunali-083.jpg", hash:"2/2c" },
    { kind:"drinking", lat:45.8023227, lng:10.065821 },
    { kind:"drinking", lat:45.8050867, lng:9.8208494, wiki:"20230910-slayer-047.jpg", hash:"8/83" },
    { kind:"drinking", lat:45.8059754, lng:9.8204278, wiki:"20230910-slayer-049.jpg", hash:"9/91" },
    { kind:"drinking", lat:45.8096413, lng:9.7932802, wiki:"20230902-gru_donadoni-133.jpg", hash:"4/43" },
    { kind:"drinking", lat:45.8157553, lng:9.7841243, wiki:"20230819-gru_poieto-073.jpg", hash:"3/35" },
    { kind:"drinking", lat:45.8070852, lng:9.6352061, wiki:"20240120-corno_zucco-091.jpg", hash:"a/a1" },
    { kind:"drinking", lat:45.7318307, lng:9.6788124 },
    { kind:"drinking", lat:45.7161328, lng:9.657984 },
    { kind:"drinking", lat:45.7760137, lng:9.5571983, wiki:"20200920-strozza_explo-40.jpg", hash:"e/e3" },
    { kind:"drinking", lat:45.778079, lng:9.5472456, wiki:"20221106-roncola_comunali-022.jpg", hash:"7/71" },
    { kind:"drinking", lat:45.8326009, lng:9.899035, wiki:"20250615-farno_cirano-062.jpg", hash:"9/9d" },
    { kind:"drinking", lat:45.694839, lng:9.6643049 },
    { kind:"drinking", lat:45.8013, lng:9.8989636 },
    { kind:"drinking", lat:45.7535627, lng:9.6355199, wiki:"20220910-bruntino-206.jpg", hash:"c/cf" },
    { kind:"drinking", lat:45.8693663, lng:9.6426513 },
    { kind:"drinking", lat:45.8463794, lng:9.6334024 },
    { kind:"drinking", lat:46.0080745, lng:10.1322264 },
    { kind:"drinking", lat:45.9293921, lng:10.0952987 },
    { kind:"drinking", lat:46.0457582, lng:9.7579185, wiki:"20220731-valcervia_dordona-008.jpg", hash:"a/a9" },
    { kind:"drinking", lat:46.0471673, lng:9.7566034, wiki:"20211010-lago_moro-063.jpg", hash:"9/98" },
    { kind:"drinking", lat:45.9775605, lng:9.5318551 },
    { kind:"drinking", lat:45.5839889, lng:9.8357874 },
    { kind:"drinking", lat:45.7318357, lng:9.7025665, wiki:"20230319-birondina_hard-045.jpg", hash:"c/c5" },
    { kind:"drinking", lat:46.0265794, lng:9.7441351, wiki:"20220716-lemma_tartano_valleve-009.jpg", hash:"a/a3" },
    { kind:"drinking", lat:45.6451572, lng:9.6829235 },
    { kind:"drinking", lat:45.6096948, lng:9.5815926 },
    { kind:"drinking", lat:45.6100179, lng:9.5823704 },
    { kind:"drinking", lat:45.9928653, lng:9.8036898, wiki:"20220814-gemelli_212-104.jpg", hash:"d/d4" },
    { kind:"drinking", lat:45.6527234, lng:9.7316508 },
    { kind:"drinking", lat:45.5810176, lng:9.7061602 },
    { kind:"drinking", lat:45.7792448, lng:9.7451502, wiki:"20220904-520dh-075.jpg", hash:"7/7b" },
    { kind:"drinking", lat:45.7102857, lng:9.6341791, wiki:"20231230-colli-011.jpg", hash:"e/ef" },
    { kind:"drinking", lat:45.7096695, lng:9.6529842 },
    { kind:"drinking", lat:45.7118189, lng:9.6384879 },
    { kind:"drinking", lat:45.6548995, lng:9.6545539 },
    { kind:"drinking", lat:45.6556549, lng:9.6564444 },
    { kind:"drinking", lat:45.6545853, lng:9.6548153 },
    { kind:"drinking", lat:45.7047971, lng:9.64675 },
    { kind:"drinking", lat:45.988911, lng:9.5787248, wiki:"20211026-inferno-032.jpg", hash:"9/96" },
    { kind:"drinking", lat:45.6774508, lng:9.6768737 },
    { kind:"drinking", lat:45.6768951, lng:9.6771075 },
    { kind:"drinking", lat:45.7110185, lng:9.654877 },
    { kind:"drinking", lat:45.6903913, lng:9.6591242 },
    { kind:"drinking", lat:45.6895661, lng:9.6583845 },
    { kind:"drinking", lat:45.902117, lng:9.4981705 },
    { kind:"drinking", lat:45.894185, lng:9.5012373 },
    { kind:"drinking", lat:45.6912547, lng:9.6372038 },
    { kind:"drinking", lat:45.6909294, lng:9.6381083 },
    { kind:"drinking", lat:45.6931201, lng:9.6389982 },
    { kind:"drinking", lat:45.8572541, lng:9.5248467, wiki:"20210721-fuipiano_explo-143.jpg", hash:"4/4b" },
    { kind:"drinking", lat:45.6349543, lng:9.8670098 },
    { kind:"drinking", lat:45.9929685, lng:9.6769303, wiki:"20230806-piazzolo-122.jpg", hash:"b/b4" },
    { kind:"drinking", lat:45.7431912, lng:9.6513897 },
    { kind:"drinking", lat:45.7099974, lng:9.6783618 },
    { kind:"drinking", lat:45.756893, lng:9.6908355 },
    { kind:"drinking", lat:45.9557299, lng:9.7603881 },
    { kind:"drinking", lat:45.7470326, lng:9.7475925 },
    { kind:"drinking", lat:45.7122065, lng:9.647048 },
    { kind:"drinking", lat:45.6461104, lng:9.546452 },
    { kind:"drinking", lat:45.6455435, lng:9.5466236 },
    { kind:"drinking", lat:45.6461063, lng:9.5471584 },
    { kind:"drinking", lat:45.694191, lng:9.6350497 },
    { kind:"drinking", lat:45.6935429, lng:9.6356089 },
    { kind:"drinking", lat:45.630265, lng:9.5917624 },
    { kind:"drinking", lat:45.7220823, lng:9.6676148 },
    { kind:"drinking", lat:45.8741475, lng:9.5658422, wiki:"20220416-tre_faggi-156.jpg", hash:"4/47" },
    { kind:"drinking", lat:45.873523, lng:9.5647868, wiki:"20220416-tre_faggi-010.jpg", hash:"2/2e" },
    { kind:"drinking", lat:45.8924755, lng:9.5178379 },
    { kind:"drinking", lat:45.8909297, lng:9.5402661, wiki:"20220316-avolasio_artavaggio-070.jpg", hash:"b/b5" },
    { kind:"drinking", lat:45.8892154, lng:9.5431, wiki:"20220316-avolasio_artavaggio-062.jpg", hash:"1/1e" },
    { kind:"drinking", lat:46.0009411, lng:9.5580875, wiki:"20211026-inferno-136.jpg", hash:"7/73" },
    { kind:"drinking", lat:45.7499542, lng:9.7858806 },
    { kind:"drinking", lat:45.7883881, lng:9.533379, wiki:"20210630-pertus_explo-31.jpg", hash:"3/3b" },
    { kind:"drinking", lat:45.792842, lng:9.7984807, wiki:"20220904-520dh-134.jpg", hash:"8/8f" },
    { kind:"drinking", lat:45.7926096, lng:9.798291, wiki:"20220904-520dh-131.jpg", hash:"d/d3" },
    { kind:"drinking", lat:45.8329437, lng:9.665004 },
    { kind:"drinking", lat:45.7592547, lng:9.796919 },
    { kind:"drinking", lat:45.6742943, lng:9.5886215 },
    { kind:"drinking", lat:45.598375, lng:9.5344528 },
    { kind:"drinking", lat:45.5764375, lng:9.5391868 },
    { kind:"drinking", lat:45.9902123, lng:9.6819466, wiki:"20230806-piazzolo-004.jpg", hash:"3/37" },
    { kind:"drinking", lat:45.7145869, lng:9.7406741 },
    { kind:"drinking", lat:45.9238536, lng:9.5123486 },
    { kind:"drinking", lat:45.6948838, lng:9.6697041 },
    { kind:"drinking", lat:45.8872739, lng:9.7976341, wiki:"20230528-sedrina_giro-216.jpg", hash:"6/6e" },
    { kind:"spring", lat:45.8191963, lng:9.4771917 },
    { kind:"drinking", lat:45.8397101, lng:9.4749464 },
    { kind:"drinking", lat:45.7577597, lng:9.7315622, wiki:"20240607-salmezza-055.jpg", hash:"6/6a" },
    { kind:"drinking", lat:45.9554612, lng:9.7663768 },
    { kind:"drinking", lat:45.7440476, lng:9.7595454 },
    { kind:"drinking", lat:45.8700092, lng:9.4495761 },
    { kind:"drinking", lat:45.8845564, lng:9.4794982, wiki:"20240131-giro_taleggio-131.jpg", hash:"1/13" },
    { kind:"drinking", lat:45.8586699, lng:10.0287289 },
    { kind:"drinking", lat:45.831037, lng:10.0411799 },
    { kind:"drinking", lat:45.832355, lng:10.0420999, wiki:"20220602-colombina-222.jpg", hash:"8/8e" },
    { kind:"drinking", lat:45.842774, lng:10.0408898 },
    { kind:"drinking", lat:45.8735226, lng:9.4828087, wiki:"20220119-grandi_alberi-211.jpg", hash:"9/94" },
    { kind:"drinking", lat:45.5760748, lng:9.6222787 },
    { kind:"drinking", lat:45.7267443, lng:9.713359 },
    { kind:"drinking", lat:46.0131826, lng:10.1393298 },
    { kind:"drinking", lat:46.0089693, lng:10.1563108 },
    { kind:"drinking", lat:45.8220573, lng:10.0830015 },
    { kind:"drinking", lat:45.8019621, lng:10.0632379 },
    { kind:"drinking", lat:46.0084183, lng:10.1586527 },
    { kind:"drinking", lat:45.8127481, lng:10.0717858 },
    { kind:"drinking", lat:45.7040422, lng:9.6629458 },
    { kind:"drinking", lat:45.650611, lng:9.8504097 },
    { kind:"drinking", lat:45.8175807, lng:10.076723 },
    { kind:"drinking", lat:45.6972508, lng:10.0534593 },
    { kind:"drinking", lat:45.8910709, lng:9.7680359, wiki:"20241031-val_vedra_fondovalle-064.jpg", hash:"4/4b" },
    { kind:"drinking", lat:45.891662, lng:9.7671754, wiki:"20230528-sedrina_giro-267.jpg", hash:"c/c9" },
    { kind:"drinking", lat:45.8726587, lng:9.8161371, wiki:"20241116-frassino-015.jpg", hash:"1/18" },
    { kind:"drinking", lat:45.8725069, lng:9.8148505, wiki:"20241116-frassino-017.jpg", hash:"e/e5" },
    { kind:"drinking", lat:45.9876273, lng:9.5010767 },
    { kind:"drinking", lat:46.0094251, lng:9.4916161 },
    { kind:"drinking", lat:45.7188066, lng:9.6796477 },
    { kind:"drinking", lat:45.8758323, lng:9.4822759, wiki:"20220119-grandi_alberi-158.jpg", hash:"7/76" },
    { kind:"drinking", lat:45.6928307, lng:9.663681 },
    { kind:"drinking", lat:45.8198742, lng:9.4511186 },
    { kind:"drinking", lat:45.7312876, lng:9.5035965 },
    { kind:"drinking", lat:45.8047504, lng:9.84523 },
    { kind:"drinking", lat:45.8244524, lng:9.4541061 },
    { kind:"drinking", lat:45.6977409, lng:9.690528 },
    { kind:"drinking", lat:46.0027295, lng:10.0545968 },
    { kind:"drinking", lat:45.9971083, lng:10.0912787 },
    { kind:"drinking", lat:45.9732417, lng:9.7291807, wiki:"20230929-pusdosso_explo-225.jpg", hash:"5/59" },
    { kind:"drinking", lat:45.6860266, lng:9.5813758 },
    { kind:"drinking", lat:45.9792561, lng:10.1101651 },
    { kind:"drinking", lat:45.6569179, lng:9.7242228 },
    { kind:"drinking", lat:45.7882908, lng:9.9820607, wiki:"20220327-sicolo-229.jpg", hash:"2/21" },
    { kind:"drinking", lat:45.7895865, lng:10.0259692 },
    { kind:"drinking", lat:45.8132894, lng:9.5679434, wiki:"20221030-antiche_tracce-097.jpg", hash:"0/0f" },
    { kind:"drinking", lat:45.7057108, lng:9.683272 },
    { kind:"drinking", lat:45.7016349, lng:9.6078607 },
    { kind:"drinking", lat:45.7062023, lng:9.7186751 },
    { kind:"drinking", lat:45.5864201, lng:9.6822279 },
    { kind:"drinking", lat:45.7043137, lng:9.6600292 },
    { kind:"drinking", lat:45.809282, lng:9.8506111 },
    { kind:"drinking", lat:45.7054158, lng:9.6693459 },
    { kind:"drinking", lat:45.9391035, lng:9.9717629 },
    { kind:"drinking", lat:45.9537134, lng:9.907244 },
    { kind:"drinking", lat:45.9329091, lng:9.4857839 },
    { kind:"drinking", lat:45.931526, lng:9.4836155 },
    { kind:"drinking", lat:45.9327843, lng:9.4878984 },
    { kind:"drinking", lat:45.6849994, lng:9.8853714, wiki:"20220604-sfermo_zandobbio-143.jpg", hash:"e/ef" },
    { kind:"drinking", lat:45.7331444, lng:9.9556155, wiki:"20220313-sfermo-103.jpg", hash:"6/6f" },
    { kind:"drinking", lat:45.7306744, lng:9.731819 },
    { kind:"drinking", lat:45.8594317, lng:10.1337449 },
    { kind:"drinking", lat:45.7177929, lng:9.6825512 },
    { kind:"drinking", lat:45.7145696, lng:9.652044 },
    { kind:"drinking", lat:45.8147211, lng:9.7459863, wiki:"20230909-costa_serina-184.jpg", hash:"c/c6" },
    { kind:"drinking", lat:45.8146145, lng:9.7484885, wiki:"20230709-suchello-014.jpg", hash:"a/a2" },
    { kind:"drinking", lat:45.8147083, lng:9.7444338, wiki:"20230709-suchello-146.jpg", hash:"2/21" },
    { kind:"drinking", lat:45.8499613, lng:9.6582716 },
    { kind:"drinking", lat:45.8482138, lng:9.6517085 },
    { kind:"drinking", lat:45.8682066, lng:9.4314536 },
    { kind:"drinking", lat:45.8696429, lng:9.4299728 },
    { kind:"drinking", lat:45.8653958, lng:9.4485146 },
    { kind:"drinking", lat:45.496388, lng:9.6752696 },
    { kind:"drinking", lat:45.4955754, lng:9.6762753 },
    { kind:"drinking", lat:45.603912, lng:9.5555662 },
    { kind:"drinking", lat:45.721434, lng:9.9660324 },
    { kind:"drinking", lat:45.8677878, lng:9.9959923 },
    { kind:"drinking", lat:45.8671725, lng:9.9969552, wiki:"Drinking_fountain-Cerete_Alto_church_parking.jpg", hash:"2/24" },
    { kind:"drinking", lat:45.5181448, lng:9.708063 },
    { kind:"drinking", lat:45.8575208, lng:9.4478722 },
    { kind:"drinking", lat:45.9888373, lng:9.6845258, wiki:"20230806-piazzolo-101.jpg", hash:"c/ca" },
    { kind:"drinking", lat:45.9891466, lng:9.6874049, wiki:"20230806-piazzolo-088.jpg", hash:"8/8a" },
    { kind:"drinking", lat:45.990368, lng:9.6771217, wiki:"20230806-piazzolo-115.jpg", hash:"c/c3" },
    { kind:"drinking", lat:45.9905962, lng:9.6770027 },
    { kind:"drinking", lat:45.9975775, lng:9.757887 },
    { kind:"drinking", lat:45.8907399, lng:9.9234767 },
    { kind:"drinking", lat:45.7027895, lng:9.5663518 },
    { kind:"drinking", lat:45.8540008, lng:9.4304964 },
    { kind:"drinking", lat:45.9875912, lng:9.9451871 },
    { kind:"drinking", lat:45.9877543, lng:9.9454005 },
    { kind:"drinking", lat:45.9892955, lng:9.9473379 },
    { kind:"drinking", lat:45.9987916, lng:9.9471093 },
    { kind:"drinking", lat:45.9990333, lng:9.9462411 },
    { kind:"drinking", lat:46.0013924, lng:9.9461778 },
    { kind:"drinking", lat:46.0027174, lng:9.9476678 },
    { kind:"drinking", lat:45.8608257, lng:9.9923006 },
    { kind:"drinking", lat:45.8617036, lng:9.9902433 },
    { kind:"drinking", lat:45.8622136, lng:9.990474 },
    { kind:"drinking", lat:45.8743812, lng:9.9910384, wiki:"20220602-colombina-050.jpg", hash:"e/ec" },
    { kind:"drinking", lat:45.8220264, lng:9.8541028 },
    { kind:"drinking", lat:45.8561032, lng:9.3932668 },
    { kind:"drinking", lat:46.025949, lng:9.8046259, wiki:"20220709-longo_selletta_calvi-021.jpg", hash:"7/7b" },
    { kind:"drinking", lat:45.7828296, lng:9.9823482 },
    { kind:"drinking", lat:45.7610451, lng:9.9975242, wiki:"20220327-sicolo-151.jpg", hash:"4/46" },
    { kind:"drinking", lat:45.756472, lng:9.4944289 },
    { kind:"drinking", lat:46.0404362, lng:9.666916 },
    { kind:"drinking", lat:45.9402056, lng:10.04498 },
    { kind:"drinking", lat:45.9344536, lng:10.039782 },
    { kind:"spring", lat:45.9429608, lng:10.0475484 },
    { kind:"drinking", lat:45.4826886, lng:9.6320556 },
    { kind:"drinking", lat:45.7154689, lng:9.8799193 },
    { kind:"drinking", lat:45.7719744, lng:9.7762809 },
    { kind:"drinking", lat:45.8527228, lng:9.7446731 },
    { kind:"drinking", lat:45.9316618, lng:9.4979955 },
    { kind:"drinking", lat:45.9334677, lng:9.5017809 },
    { kind:"drinking", lat:45.7217628, lng:9.7349845 },
    { kind:"drinking", lat:45.6412772, lng:9.9048645 },
    { kind:"drinking", lat:45.8906547, lng:10.0155136 },
    { kind:"drinking", lat:45.890328, lng:10.0104551 },
    { kind:"drinking", lat:45.8885899, lng:10.0171097 },
    { kind:"drinking", lat:45.8904232, lng:10.0065042 },
    { kind:"drinking", lat:45.6181301, lng:9.5427317 },
    { kind:"drinking", lat:45.9188784, lng:10.0583693 },
    { kind:"drinking", lat:45.6229091, lng:9.6560115 },
    { kind:"drinking", lat:45.7955489, lng:9.7846438, wiki:"20221208-explo_rena-031.jpg", hash:"a/a0" },
    { kind:"drinking", lat:45.6662833, lng:9.9567109 },
    { kind:"drinking", lat:45.7142968, lng:9.9586887 },
    { kind:"drinking", lat:45.6999471, lng:9.9496332 },
    { kind:"drinking", lat:45.816135, lng:9.8551472 },
    { kind:"drinking", lat:45.6363473, lng:9.9005586 },
    { kind:"drinking", lat:45.6337385, lng:9.8711803 },
    { kind:"drinking", lat:45.6099257, lng:9.8929009 },
    { kind:"drinking", lat:45.6622971, lng:9.8903538 },
    { kind:"drinking", lat:45.6562869, lng:9.8911156 },
    { kind:"drinking", lat:45.9124047, lng:9.9374262 },
    { kind:"drinking", lat:45.6493088, lng:9.9141288 },
    { kind:"drinking", lat:45.6409569, lng:9.9033892 },
    { kind:"drinking", lat:45.6400718, lng:9.8928267 },
    { kind:"drinking", lat:45.700338, lng:9.6623659 },
    { kind:"drinking", lat:45.6707591, lng:9.6134557 },
    { kind:"drinking", lat:45.9509926, lng:9.720699, wiki:"20220824-mezzeno-172.jpg", hash:"f/f8" },
    { kind:"drinking", lat:45.9526944, lng:9.7300902, wiki:"20220824-mezzeno-025.jpg", hash:"1/13" },
    { kind:"drinking", lat:45.8247693, lng:10.0276908 },
    { kind:"drinking", lat:45.8784982, lng:9.8302413 },
    { kind:"drinking", lat:46.0342277, lng:10.0044937 },
    { kind:"drinking", lat:46.035991, lng:10.0076962 },
    { kind:"spring", lat:45.7663153, lng:9.9364786 },
    { kind:"drinking", lat:45.7636741, lng:9.9299583 },
    { kind:"drinking", lat:45.8046208, lng:9.8372066 },
    { kind:"drinking", lat:46.0011264, lng:9.7596213 },
    { kind:"drinking", lat:45.9768234, lng:9.5357193 },
    { kind:"drinking", lat:45.9774242, lng:9.5351672 },
    { kind:"drinking", lat:45.9087824, lng:10.0367572 },
    { kind:"drinking", lat:45.9071157, lng:10.033095 },
    { kind:"drinking", lat:45.8968593, lng:10.002417 },
    { kind:"drinking", lat:45.8911214, lng:9.9779103 },
    { kind:"drinking", lat:45.8960835, lng:9.6566992, wiki:"20230812-vaccareggio_portiera-344.jpg", hash:"1/10" },
    { kind:"drinking", lat:45.9896162, lng:9.6800006, wiki:"20230806-piazzolo-007.jpg", hash:"9/92" },
    { kind:"drinking", lat:46.0045729, lng:9.6817678, wiki:"20210814-terzera-021.jpg", hash:"9/9f" },
    { kind:"drinking", lat:45.9471217, lng:9.668393 },
    { kind:"drinking", lat:45.9479014, lng:9.6755878 },
    { kind:"drinking", lat:45.8956078, lng:10.0138287 },
    { kind:"drinking", lat:45.9903724, lng:9.8939122 },
    { kind:"drinking", lat:45.9784845, lng:9.8960764 },
    { kind:"drinking", lat:46.0234898, lng:9.8771698 },
    { kind:"drinking", lat:46.0253111, lng:9.8163202, wiki:"20220709-longo_selletta_calvi-030.jpg", hash:"5/54" },
    { kind:"drinking", lat:45.8341242, lng:9.573898 },
    { kind:"drinking", lat:45.9574574, lng:10.0400738 },
    { kind:"drinking", lat:45.8011779, lng:9.5046606, wiki:"20220521-murada_nala-055.jpg", hash:"6/66" },
    { kind:"drinking", lat:45.8033413, lng:9.503692, wiki:"20210630-pertus_explo-36.jpg", hash:"9/95" },
    { kind:"drinking", lat:45.9838637, lng:9.8934136 },
    { kind:"drinking", lat:45.9960084, lng:9.8857767 },
    { kind:"drinking", lat:46.0281935, lng:9.8313368 },
    { kind:"drinking", lat:46.0545663, lng:10.0096534 },
    { kind:"drinking", lat:45.8041194, lng:10.0571677 },
    { kind:"drinking", lat:46.0617677, lng:10.0479887 },
    { kind:"drinking", lat:45.8067474, lng:9.8250861 },
    { kind:"drinking", lat:45.8076336, lng:9.8273903, wiki:"20230819-gru_poieto-213.jpg", hash:"7/7f" },
    { kind:"drinking", lat:45.8086757, lng:9.8260941, wiki:"20230819-gru_poieto-209.jpg", hash:"7/73" },
    { kind:"drinking", lat:45.945276, lng:9.9616743 },
    { kind:"drinking", lat:45.9707534, lng:9.9638329 },
    { kind:"drinking", lat:45.805159, lng:9.646234 },
    { kind:"drinking", lat:45.8880209, lng:9.8648852 },
    { kind:"drinking", lat:45.916676, lng:9.8632879 },
    { kind:"drinking", lat:45.9245993, lng:9.8501698 },
    { kind:"drinking", lat:45.6403769, lng:9.8696272 },
    { kind:"drinking", lat:45.6505526, lng:9.8730511 },
    { kind:"drinking", lat:45.6413647, lng:9.8765488 },
    { kind:"drinking", lat:45.6417152, lng:9.8737821 },
    { kind:"drinking", lat:45.6451289, lng:9.8844649 },
    { kind:"drinking", lat:45.7212809, lng:9.7378697 },
    { kind:"drinking", lat:45.7224392, lng:9.7283336 },
    { kind:"drinking", lat:45.7535374, lng:9.8647627 },
    { kind:"drinking", lat:45.886767, lng:9.5604051, wiki:"20220316-avolasio_artavaggio-016.jpg", hash:"1/1f" },
    { kind:"drinking", lat:45.8873962, lng:9.5591888, wiki:"20220316-avolasio_artavaggio-022.jpg", hash:"5/5c" },
    { kind:"drinking", lat:45.8886228, lng:9.5568674 },
    { kind:"drinking", lat:45.8880856, lng:9.5576412, wiki:"20220316-avolasio_artavaggio-026.jpg", hash:"e/e6" },
    { kind:"drinking", lat:45.6536709, lng:9.8850453 },
    { kind:"drinking", lat:45.8660473, lng:9.8833153 },
    { kind:"drinking", lat:45.8645486, lng:9.8824269 },
    { kind:"drinking", lat:45.869442, lng:9.8850796 },
    { kind:"drinking", lat:45.8726616, lng:9.8844707 },
    { kind:"drinking", lat:45.8636689, lng:9.8843983 },
    { kind:"drinking", lat:45.8673857, lng:9.8840389 },
    { kind:"drinking", lat:45.8632766, lng:9.8842695 },
    { kind:"drinking", lat:45.8621765, lng:9.8801604 },
    { kind:"drinking", lat:45.8934255, lng:9.9201036 },
    { kind:"drinking", lat:45.8633631, lng:9.8784344 },
    { kind:"drinking", lat:45.8647175, lng:9.8793762 },
    { kind:"drinking", lat:45.802892, lng:9.4629227 },
    { kind:"drinking", lat:45.9157461, lng:10.0371871 },
    { kind:"drinking", lat:45.8733598, lng:9.9150292 },
    { kind:"drinking", lat:45.8955499, lng:9.6346223, wiki:"20220417-cantiglio-022.jpg", hash:"d/db" },
    { kind:"drinking", lat:45.8953894, lng:9.6004838, wiki:"20220417-cantiglio-088.jpg", hash:"c/ce" },
    { kind:"drinking", lat:45.873172, lng:9.7295774, wiki:"20230528-sedrina_giro-060.jpg", hash:"5/56" },
    { kind:"drinking", lat:45.7132328, lng:9.4945908, wiki:"20230201-grezia_bob-007.jpg", hash:"c/c0" },
    { kind:"drinking", lat:45.9162421, lng:10.035323 },
    { kind:"drinking", lat:45.9305046, lng:9.4861226 },
    { kind:"drinking", lat:45.675219, lng:9.6938045 },
    { kind:"drinking", lat:45.742872, lng:9.8001851 },
    { kind:"drinking", lat:45.9241879, lng:9.4943906 },
    { kind:"drinking", lat:45.6815227, lng:9.6384016 },
    { kind:"drinking", lat:45.6819889, lng:9.6360067 },
    { kind:"drinking", lat:45.7011785, lng:9.6364866 },
    { kind:"drinking", lat:45.7818855, lng:10.0221061 },
    { kind:"drinking", lat:45.7898602, lng:9.7319644, wiki:"20231018-explo_selvino-078.jpg", hash:"e/e2" },
    { kind:"drinking", lat:45.7085303, lng:9.6501362 },
    { kind:"drinking", lat:45.9528112, lng:9.729161 },
    { kind:"drinking", lat:45.7096814, lng:9.5008168 },
    { kind:"drinking", lat:45.6578984, lng:9.6701241 },
    { kind:"drinking", lat:45.7804519, lng:9.6067309 },
    { kind:"drinking", lat:45.861491, lng:9.4100715 },
    { kind:"drinking", lat:45.884684, lng:9.4081814 },
    { kind:"drinking", lat:45.8870558, lng:9.4053726 },
    { kind:"drinking", lat:45.9039333, lng:9.3973496 },
    { kind:"drinking", lat:45.8798954, lng:9.4064659, wiki:"Piazza_Giovanni_Paolo_II_(Lecco)_-_drinking_fountain.jpg", hash:"5/57" },
    { kind:"drinking", lat:45.9533839, lng:9.9038689 },
    { kind:"drinking", lat:46.0208355, lng:9.7825114 },
    { kind:"drinking", lat:45.6234145, lng:9.6670885 },
    { kind:"drinking", lat:45.9872981, lng:9.9687189 },
    { kind:"drinking", lat:45.8184213, lng:10.0762048 },
    { kind:"drinking", lat:45.8207957, lng:9.8409547, wiki:"20211205-529_easy-044.jpg", hash:"a/af" },
    { kind:"drinking", lat:45.8967157, lng:9.987212 },
    { kind:"drinking", lat:45.6994254, lng:9.9464335 },
    { kind:"drinking", lat:45.7198852, lng:9.583138 },
    { kind:"drinking", lat:45.7151762, lng:9.5746341 },
    { kind:"drinking", lat:45.7156859, lng:9.5807074 },
    { kind:"drinking", lat:45.7214204, lng:9.5872034, wiki:"20240322-brembo_romanico-118.jpg", hash:"a/a1" },
    { kind:"drinking", lat:45.7187317, lng:9.5837665 },
    { kind:"drinking", lat:45.7221099, lng:9.5833289 },
    { kind:"drinking", lat:45.8617871, lng:9.3830398 },
    { kind:"drinking", lat:45.7184898, lng:9.5789786 },
    { kind:"drinking", lat:45.7201267, lng:9.5849171 },
    { kind:"drinking", lat:45.7182652, lng:9.5756002 },
    { kind:"drinking", lat:45.8474446, lng:9.6369524 },
    { kind:"drinking", lat:45.5193463, lng:9.599559 },
    { kind:"drinking", lat:45.5241555, lng:9.5951361 },
    { kind:"drinking", lat:45.9946765, lng:9.9536268 },
    { kind:"drinking", lat:45.9839048, lng:9.9761315 },
    { kind:"drinking", lat:45.7126453, lng:9.5821484 },
    { kind:"drinking", lat:45.8499398, lng:10.1345055 },
    { kind:"drinking", lat:45.8305302, lng:10.0948772 },
    { kind:"drinking", lat:45.8661935, lng:9.3992959 },
    { kind:"drinking", lat:45.7189213, lng:9.5704185 },
    { kind:"drinking", lat:45.7189832, lng:9.5713781 },
    { kind:"drinking", lat:45.9140237, lng:9.5042811 },
    { kind:"drinking", lat:45.7586598, lng:10.0206475, wiki:"20220412-torrezzo-027.jpg", hash:"2/22" },
    { kind:"drinking", lat:45.7580061, lng:10.0196233, wiki:"20220412-torrezzo-020.jpg", hash:"a/a4" },
    { kind:"drinking", lat:45.874759, lng:9.3818157 },
    { kind:"drinking", lat:45.800626, lng:9.8807235 },
    { kind:"drinking", lat:45.8401541, lng:9.614755 },
    { kind:"drinking", lat:45.8413989, lng:9.616723 },
    { kind:"drinking", lat:45.7367248, lng:9.6033699, wiki:"20240315-brembo-173.jpg", hash:"6/67" },
    { kind:"drinking", lat:45.9095309, lng:9.5074758 },
    { kind:"drinking", lat:45.8499228, lng:9.4480904 },
    { kind:"drinking", lat:45.8537486, lng:9.4641381 },
    { kind:"drinking", lat:45.8527933, lng:9.5284119, wiki:"20210721-fuipiano_explo-9.jpg", hash:"b/b7" },
    { kind:"drinking", lat:45.7163591, lng:9.5841537 },
    { kind:"drinking", lat:45.7181203, lng:9.5823316 },
    { kind:"drinking", lat:45.9473398, lng:9.6760336 },
    { kind:"drinking", lat:45.8458163, lng:9.7817348 },
    { kind:"drinking", lat:45.8694651, lng:9.3972685 },
    { kind:"drinking", lat:45.8704589, lng:9.3985299 },
    { kind:"drinking", lat:45.8852526, lng:9.9438127 },
    { kind:"drinking", lat:45.8647421, lng:9.3933764 },
    { kind:"drinking", lat:45.6511401, lng:9.658033 },
    { kind:"drinking", lat:45.6723104, lng:9.4938115 },
    { kind:"drinking", lat:45.8568016, lng:9.3929997 },
    { kind:"drinking", lat:45.8412268, lng:9.4001537 },
    { kind:"drinking", lat:45.8225444, lng:9.8544726 },
    { kind:"drinking", lat:45.996897, lng:9.8145164 },
    { kind:"drinking", lat:45.9557778, lng:9.7611089 },
    { kind:"drinking", lat:45.9568728, lng:9.7473685 },
    { kind:"drinking", lat:45.9575101, lng:9.7430133 },
    { kind:"drinking", lat:45.9573886, lng:9.7389139, wiki:"20220824-mezzeno-160.jpg", hash:"2/2e" },
    { kind:"drinking", lat:45.9554607, lng:9.7510413 },
    { kind:"drinking", lat:45.9558923, lng:9.7512385 },
    { kind:"drinking", lat:45.958337, lng:9.7509075 },
    { kind:"drinking", lat:45.9594482, lng:9.7488822 },
    { kind:"drinking", lat:45.9566434, lng:9.7504588 },
    { kind:"drinking", lat:45.9560296, lng:9.7479938 },
    { kind:"drinking", lat:45.9542043, lng:9.7505637 },
    { kind:"drinking", lat:45.9545462, lng:9.7517151 },
    { kind:"drinking", lat:45.9560026, lng:9.7397893 },
    { kind:"drinking", lat:45.9497613, lng:9.7274821, wiki:"20220823-cornacchie-038.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.9541438, lng:9.723936 },
    { kind:"drinking", lat:45.9557199, lng:9.7611469 },
    { kind:"drinking", lat:46.0048752, lng:9.7612612 },
    { kind:"drinking", lat:45.9608682, lng:9.7840361 },
    { kind:"drinking", lat:45.8683422, lng:9.4296498 },
    { kind:"drinking", lat:45.8703959, lng:9.4299225 },
    { kind:"drinking", lat:45.9477314, lng:9.7696484 },
    { kind:"drinking", lat:45.7166349, lng:9.6591828 },
    { kind:"drinking", lat:45.7167026, lng:9.6583261 },
    { kind:"drinking", lat:45.6949049, lng:9.6673672 },
    { kind:"drinking", lat:45.9624455, lng:9.7766619 },
    { kind:"drinking", lat:45.96559, lng:9.7643786 },
    { kind:"drinking", lat:45.9479994, lng:9.745403 },
    { kind:"drinking", lat:45.7154263, lng:10.0285613 },
    { kind:"drinking", lat:45.738988, lng:10.0383319 },
    { kind:"drinking", lat:45.8602362, lng:10.1207244 },
    { kind:"drinking", lat:45.6832746, lng:9.6441557 },
    { kind:"drinking", lat:45.9583743, lng:9.7524354 },
    { kind:"drinking", lat:45.6672006, lng:9.9638095 },
    { kind:"drinking", lat:45.7039445, lng:9.6764806 },
    { kind:"drinking", lat:45.832675, lng:9.439766 },
    { kind:"drinking", lat:45.8381117, lng:9.4624797 },
    { kind:"drinking", lat:45.8921275, lng:9.5675266, wiki:"20220226-artavaggio-035.jpg", hash:"e/e8" },
    { kind:"drinking", lat:45.6251064, lng:9.6584426 },
    { kind:"drinking", lat:45.6991917, lng:9.6899863 },
    { kind:"drinking", lat:45.6993847, lng:9.6886506 },
    { kind:"drinking", lat:45.6999429, lng:9.6895585 },
    { kind:"drinking", lat:45.6713817, lng:9.6617941 },
    { kind:"drinking", lat:45.9709302, lng:9.7291064, wiki:"20230929-pusdosso_explo-260.jpg", hash:"0/02" },
    { kind:"drinking", lat:45.96921, lng:9.7279543, wiki:"20230929-pusdosso_explo-270.jpg", hash:"6/66" },
    { kind:"drinking", lat:45.9655201, lng:9.7246469, wiki:"20230929-pusdosso_explo-178.jpg", hash:"3/3a" },
    { kind:"drinking", lat:45.9662055, lng:9.7243056, wiki:"20230929-pusdosso_explo-174.jpg", hash:"a/af" },
    { kind:"drinking", lat:45.973285, lng:9.7349612 },
    { kind:"drinking", lat:45.7312002, lng:9.832102, wiki:"20240824-giro_misma-070.jpg", hash:"7/7f" },
    { kind:"drinking", lat:45.7034411, lng:9.6291351, wiki:"20220518-gussa-059.jpg", hash:"e/e3" },
    { kind:"drinking", lat:45.8683242, lng:9.4000919 },
    { kind:"drinking", lat:45.8342144, lng:9.6017667 },
    { kind:"drinking", lat:45.7272306, lng:9.7149847 },
    { kind:"spring", lat:45.7852539, lng:9.9223381, wiki:"20220212-ranzanico_doppio-063.jpg", hash:"3/39" },
    { kind:"drinking", lat:45.5292684, lng:9.589109 },
    { kind:"drinking", lat:45.5305708, lng:9.588633 },
    { kind:"drinking", lat:45.532465, lng:9.5867874 },
    { kind:"drinking", lat:45.8432616, lng:9.7964877 },
    { kind:"drinking", lat:45.8491092, lng:9.7866217 },
    { kind:"drinking", lat:45.857109, lng:9.3843554 },
    { kind:"drinking", lat:45.8635019, lng:9.408218 },
    { kind:"drinking", lat:45.6388874, lng:9.5016176 },
    { kind:"drinking", lat:45.6422092, lng:9.5007739 },
    { kind:"drinking", lat:45.8558562, lng:9.4047574 },
    { kind:"drinking", lat:45.7400849, lng:9.6160051 },
    { kind:"drinking", lat:45.8227842, lng:10.0243679 },
    { kind:"drinking", lat:45.814488, lng:10.0131477 },
    { kind:"spring", lat:45.7754074, lng:10.0204392, wiki:"20220327-sicolo-050.jpg", hash:"f/fd" },
    { kind:"drinking", lat:45.6886532, lng:9.8523819 },
    { kind:"drinking", lat:45.930996, lng:9.4869171 },
    { kind:"drinking", lat:45.931203, lng:9.4855038 },
    { kind:"drinking", lat:45.7279903, lng:9.8170633 },
    { kind:"drinking", lat:45.9182149, lng:10.0783968 },
    { kind:"drinking", lat:45.666168, lng:9.6308976 },
    { kind:"drinking", lat:45.6659512, lng:9.6251067 },
    { kind:"drinking", lat:45.6662611, lng:9.6298888 },
    { kind:"drinking", lat:45.6687494, lng:9.6308625 },
    { kind:"drinking", lat:45.6653002, lng:9.6257582 },
    { kind:"drinking", lat:45.6718156, lng:9.6314901 },
    { kind:"drinking", lat:45.7082439, lng:9.6582016 },
    { kind:"spring", lat:45.813138, lng:9.812821, wiki:"20230819-gru_poieto-033.jpg", hash:"6/64" },
    { kind:"drinking", lat:45.9979184, lng:10.0934676 },
    { kind:"drinking", lat:45.9982632, lng:10.0991056 },
    { kind:"drinking", lat:45.9464559, lng:10.0245711 },
    { kind:"drinking", lat:45.6966024, lng:9.6829372 },
    { kind:"drinking", lat:45.6654522, lng:9.6300106 },
    { kind:"drinking", lat:45.9467482, lng:9.6747604 },
    { kind:"drinking", lat:45.7140854, lng:9.6078318 },
    { kind:"drinking", lat:45.6966828, lng:9.5888672 },
    { kind:"drinking", lat:45.9826077, lng:9.6255308, wiki:"20211023-corna_rossa-026.jpg", hash:"3/32" },
    { kind:"drinking", lat:45.9721266, lng:9.6485595, wiki:"20211023-corna_rossa-006.jpg", hash:"4/4b" },
    { kind:"drinking", lat:45.7578039, lng:9.6888269 },
    { kind:"drinking", lat:45.6948428, lng:9.6919502 },
    { kind:"drinking", lat:45.6044585, lng:9.5383638 },
    { kind:"drinking", lat:45.6048894, lng:9.5395962 },
    { kind:"drinking", lat:45.5869929, lng:9.6011698 },
    { kind:"drinking", lat:45.5762204, lng:9.6126327 },
    { kind:"drinking", lat:45.7471169, lng:9.7696474 },
    { kind:"drinking", lat:45.744566, lng:9.7691793 },
    { kind:"drinking", lat:45.7387395, lng:9.7515042 },
    { kind:"drinking", lat:45.7370019, lng:9.7410839 },
    { kind:"drinking", lat:45.7064281, lng:9.7121066 },
    { kind:"drinking", lat:45.719352, lng:9.7058514 },
    { kind:"drinking", lat:45.9006415, lng:9.948558 },
    { kind:"drinking", lat:45.7473636, lng:9.7662858 },
    { kind:"drinking", lat:45.818055, lng:9.8676521, wiki:"20250608-parafulmine_pizzo_casnigo-102.jpg", hash:"1/1f" },
    { kind:"drinking", lat:45.7406766, lng:9.7443104 },
    { kind:"drinking", lat:45.7408722, lng:9.7494495 },
    { kind:"drinking", lat:45.7428239, lng:9.7566592 },
    { kind:"drinking", lat:45.7469598, lng:9.7575189 },
    { kind:"drinking", lat:45.9633145, lng:9.8312132 },
    { kind:"drinking", lat:45.7450612, lng:9.7594619 },
    { kind:"drinking", lat:45.8831203, lng:9.9346096 },
    { kind:"drinking", lat:45.7497904, lng:9.7649973 },
    { kind:"drinking", lat:45.7729331, lng:9.6326117, wiki:"20230325-canto_alto-120.jpg", hash:"f/f5" },
    { kind:"drinking", lat:45.716736, lng:9.7716145 },
    { kind:"drinking", lat:45.7446994, lng:9.768825 },
    { kind:"drinking", lat:45.6865424, lng:9.6919223 },
    { kind:"drinking", lat:45.7123256, lng:9.6981474 },
    { kind:"drinking", lat:45.7196051, lng:9.7042111 },
    { kind:"drinking", lat:45.7335824, lng:9.7306241 },
    { kind:"drinking", lat:45.8617691, lng:9.4125115 },
    { kind:"drinking", lat:45.5154301, lng:9.5882524 },
    { kind:"drinking", lat:45.8801655, lng:9.8888058 },
    { kind:"drinking", lat:45.8637129, lng:9.8509424 },
    { kind:"drinking", lat:45.8613864, lng:9.8439352 },
    { kind:"drinking", lat:45.8626165, lng:9.8464205 },
    { kind:"drinking", lat:45.8695927, lng:9.8716453 },
    { kind:"drinking", lat:45.877253, lng:9.8809018 },
    { kind:"drinking", lat:45.8810096, lng:9.8915622, wiki:"20211120-vaccaro_240-026.jpg", hash:"5/5b" },
    { kind:"drinking", lat:45.7134217, lng:9.6172808 },
    { kind:"drinking", lat:45.5256646, lng:9.5898257 },
    { kind:"drinking", lat:45.7512587, lng:9.7433255 },
    { kind:"drinking", lat:45.7518164, lng:9.7471095 },
    { kind:"spring", lat:45.9379408, lng:9.4972232 },
    { kind:"drinking", lat:45.8591124, lng:9.8281707 },
    { kind:"drinking", lat:45.8512871, lng:9.8403703, wiki:"20211229-518_bondo-041.jpg", hash:"8/82" },
    { kind:"drinking", lat:45.8470917, lng:9.8386474, wiki:"20211229-518_bondo-082.jpg", hash:"1/16" },
    { kind:"drinking", lat:45.858962, lng:9.8265042, wiki:"20241116-frassino-118.jpg", hash:"9/91" },
    { kind:"drinking", lat:45.9569881, lng:9.7364851, wiki:"20220824-mezzeno-166.jpg", hash:"e/ec" },
    { kind:"drinking", lat:45.5345751, lng:9.5978677 },
    { kind:"drinking", lat:45.9357403, lng:9.4919772 },
    { kind:"drinking", lat:45.7425924, lng:9.7609939, wiki:"20240526-trevasco_est-066.jpg", hash:"f/ff" },
    { kind:"drinking", lat:45.7882665, lng:9.777786 },
    { kind:"drinking", lat:45.7702342, lng:9.7889371 },
    { kind:"drinking", lat:45.7702255, lng:9.7890361 },
    { kind:"drinking", lat:45.7692501, lng:9.7817078 },
    { kind:"drinking", lat:45.7890326, lng:9.7683887 },
    { kind:"drinking", lat:45.7845088, lng:9.7800267, wiki:"20230106-amora-061.jpg", hash:"f/f9" },
    { kind:"drinking", lat:46.0212721, lng:9.8210249 },
    { kind:"drinking", lat:46.016213, lng:9.8046215, wiki:"20220814-gemelli_212-044.jpg", hash:"c/cb" },
    { kind:"drinking", lat:45.4811081, lng:9.6305203 },
    { kind:"drinking", lat:45.8687936, lng:9.4532693, wiki:"20200822-anello_resegone-59.jpg", hash:"5/54" },
    { kind:"drinking", lat:45.8610507, lng:9.4528286 },
    { kind:"drinking", lat:45.6904594, lng:9.6959161 },
    { kind:"drinking", lat:45.8347245, lng:9.8456865 },
    { kind:"drinking", lat:45.8178642, lng:9.8510746, wiki:"20230304-530_special-062.jpg", hash:"5/57" },
    { kind:"drinking", lat:45.5223744, lng:9.5953955 },
    { kind:"drinking", lat:45.8234845, lng:10.0695198 },
    { kind:"drinking", lat:45.5168653, lng:9.7529613 },
    { kind:"drinking", lat:45.5280653, lng:9.7490132 },
    { kind:"drinking", lat:45.7338804, lng:9.634571 },
    { kind:"drinking", lat:45.7877417, lng:9.7680427 },
    { kind:"drinking", lat:45.7880982, lng:9.7682123 },
    { kind:"drinking", lat:45.9144486, lng:9.945468 },
    { kind:"drinking", lat:45.9159915, lng:9.9477741 },
    { kind:"drinking", lat:45.8816628, lng:9.9132642 },
    { kind:"drinking", lat:45.8826543, lng:9.9115072 },
    { kind:"drinking", lat:45.9366201, lng:9.5047044 },
    { kind:"drinking", lat:45.9357788, lng:9.5029724 },
    { kind:"drinking", lat:45.977224, lng:9.671385, wiki:"20230806-piazzolo-054.jpg", hash:"d/d6" },
    { kind:"drinking", lat:45.7798833, lng:9.7490311, wiki:"20220904-520dh-083.jpg", hash:"7/71" },
    { kind:"drinking", lat:45.7810873, lng:9.7482066 },
    { kind:"drinking", lat:45.7870001, lng:9.7532613 },
    { kind:"drinking", lat:45.7834998, lng:9.7499069 },
    { kind:"drinking", lat:45.6766657, lng:9.6641023 },
    { kind:"drinking", lat:45.8528551, lng:9.3877034 },
    { kind:"drinking", lat:45.8524447, lng:9.4384922, wiki:"Fontana_campo_de_boi.jpg", hash:"4/43" },
    { kind:"drinking", lat:45.9241543, lng:9.9244966 },
    { kind:"drinking", lat:45.8428694, lng:9.4461513 },
    { kind:"drinking", lat:45.7007386, lng:9.6761436 },
    { kind:"drinking", lat:45.675376, lng:9.6941219 },
    { kind:"drinking", lat:45.8663335, lng:9.4724074, wiki:"20200815-morterone_doppia-21.jpg", hash:"9/91" },
    { kind:"drinking", lat:45.8791017, lng:9.4961891, wiki:"20220119-grandi_alberi-116.jpg", hash:"6/62" },
    { kind:"drinking", lat:45.7788889, lng:9.8224166 },
    { kind:"drinking", lat:45.7587294, lng:9.8126585 },
    { kind:"drinking", lat:45.7027453, lng:9.7201226 },
    { kind:"drinking", lat:45.7028338, lng:9.7269545 },
    { kind:"drinking", lat:45.8550727, lng:9.3896037 },
    { kind:"drinking", lat:45.6934472, lng:9.7044451 },
    { kind:"drinking", lat:45.8912861, lng:9.5396839 },
    { kind:"drinking", lat:45.7714503, lng:9.8263944, wiki:"20241109-altino-009.jpg", hash:"1/18" },
    { kind:"drinking", lat:45.9054426, lng:10.021044 },
    { kind:"drinking", lat:45.8904638, lng:9.5415641, wiki:"20220316-avolasio_artavaggio-066.jpg", hash:"8/8e" },
    { kind:"drinking", lat:45.9009832, lng:9.4971011 },
    { kind:"drinking", lat:45.8316859, lng:9.5107121, wiki:"20210704-brumano_explo-36.jpg", hash:"3/3e" },
    { kind:"drinking", lat:45.8302153, lng:9.5145014, wiki:"20210704-brumano_explo-32.jpg", hash:"9/99" },
    { kind:"drinking", lat:45.8278732, lng:9.5170804, wiki:"20210704-brumano_explo-31.jpg", hash:"3/30" },
    { kind:"drinking", lat:45.8537775, lng:9.5009113, wiki:"20210704-brumano_explo-78.jpg", hash:"e/ef" },
    { kind:"drinking", lat:45.8492514, lng:9.5253307, wiki:"20210721-fuipiano_explo-157.jpg", hash:"5/51" },
    { kind:"drinking", lat:45.8191489, lng:9.514703, wiki:"20210630-pertus_explo-143.jpg", hash:"d/d3" },
    { kind:"drinking", lat:45.8161946, lng:9.5198989, wiki:"20210630-pertus_explo-147.jpg", hash:"8/8a" },
    { kind:"drinking", lat:45.8088943, lng:9.5161831, wiki:"20210722-mazzoleni_explo-50.jpg", hash:"4/4f" },
    { kind:"drinking", lat:45.8964779, lng:9.9463458 },
    { kind:"drinking", lat:45.7730175, lng:9.9088361, wiki:"20250301-rollingstones-067.jpg", hash:"e/e4" },
    { kind:"drinking", lat:45.7603331, lng:9.8840801, wiki:"20220306-pranza-028.jpg", hash:"c/cb" },
    { kind:"drinking", lat:45.8026776, lng:9.5324985, wiki:"20210630-pertus_explo-153.jpg", hash:"f/fa" },
    { kind:"drinking", lat:45.7964917, lng:9.5604847, wiki:"20210721-fuipiano_explo-178.jpg", hash:"8/80" },
    { kind:"drinking", lat:45.7726121, lng:9.5769988, wiki:"20210808-explo_strozza-131.jpg", hash:"4/46" },
    { kind:"drinking", lat:45.7146577, lng:9.4723769, wiki:"20230205-california_bob_bis-054.jpg", hash:"d/d2" },
    { kind:"drinking", lat:45.7049825, lng:9.4805365 },
    { kind:"drinking", lat:45.7281828, lng:9.7588339 },
    { kind:"drinking", lat:45.7408539, lng:9.7624844 },
    { kind:"drinking", lat:45.9039015, lng:9.7693037 },
    { kind:"drinking", lat:45.7205448, lng:9.478301 },
    { kind:"drinking", lat:45.7414115, lng:9.760164 },
    { kind:"drinking", lat:45.7955447, lng:9.4851735 },
    { kind:"drinking", lat:45.6975893, lng:9.6670301 },
    { kind:"drinking", lat:45.7749867, lng:9.5765477, wiki:"20210808-explo_strozza-126.jpg", hash:"a/aa" },
    { kind:"drinking", lat:45.7082844, lng:9.8763091 },
    { kind:"drinking", lat:45.7944281, lng:9.5461869, wiki:"20210630-pertus_explo-14.jpg", hash:"2/2c" },
    { kind:"drinking", lat:45.8368474, lng:9.7508986, wiki:"20230927-explo_costa_serina-073.jpg", hash:"2/27" },
    { kind:"drinking", lat:45.8527203, lng:9.7417143, wiki:"20230602-serina_cornalba_pioggia-107.jpg", hash:"2/29" },
    { kind:"drinking", lat:45.8703385, lng:9.7320065 },
    { kind:"drinking", lat:45.8745896, lng:9.7293369, wiki:"20230528-sedrina_giro-069.jpg", hash:"4/4b" },
    { kind:"drinking", lat:45.8899287, lng:9.6740986, wiki:"20230812-vaccareggio_portiera-289.jpg", hash:"2/23" },
    { kind:"drinking", lat:45.8924864, lng:9.6544591 },
    { kind:"drinking", lat:46.0501387, lng:10.028008 },
    { kind:"drinking", lat:46.0138677, lng:9.9058364 },
    { kind:"drinking", lat:45.8367895, lng:9.4572222 },
    { kind:"drinking", lat:45.7056388, lng:9.870619 },
    { kind:"drinking", lat:45.8820324, lng:9.6981149, wiki:"20230611-vaccareggio_mercatorum-087.jpg", hash:"c/c4" },
    { kind:"drinking", lat:45.6339757, lng:9.5129178 },
    { kind:"drinking", lat:45.833316, lng:9.4130392, wiki:"Villa_Gomes_(Lecco)_-_gate_north.jpg", hash:"8/89" },
    { kind:"drinking", lat:45.770452, lng:9.8100306 },
    { kind:"drinking", lat:45.7716645, lng:9.8060442, wiki:"20221119-bomba-009.jpg", hash:"9/90" },
    { kind:"drinking", lat:45.9962695, lng:10.0898531 },
    { kind:"drinking", lat:45.995235, lng:10.0946735 },
    { kind:"drinking", lat:45.9978693, lng:10.0639843 },
    { kind:"drinking", lat:45.4811189, lng:9.6305742 },
    { kind:"drinking", lat:45.7280134, lng:9.6117845 },
    { kind:"drinking", lat:45.7207018, lng:9.6750923 },
    { kind:"drinking", lat:45.812235, lng:9.7796727, wiki:"20230819-gru_poieto-080.jpg", hash:"d/d0" },
    { kind:"drinking", lat:45.7675485, lng:9.8527552 },
    { kind:"drinking", lat:45.6206914, lng:9.6605219 },
    { kind:"drinking", lat:45.6945425, lng:9.7130047 },
    { kind:"drinking", lat:45.7799149, lng:10.0259248, wiki:"20220512-monte_boario-023.jpg", hash:"b/be" },
    { kind:"drinking", lat:45.7794376, lng:10.0250436, wiki:"20220512-monte_boario-052.jpg", hash:"d/de" },
    { kind:"drinking", lat:45.9375399, lng:9.5064398, wiki:"Drinking_fountain_in_locality_La_Piazza_(Moggio).jpg", hash:"7/73" },
    { kind:"drinking", lat:45.7705968, lng:9.7997826 },
    { kind:"drinking", lat:45.7827365, lng:10.0245902 },
    { kind:"drinking", lat:45.8364279, lng:9.8254157, wiki:"20211205-529_easy-070.jpg", hash:"f/f4" },
    { kind:"drinking", lat:45.8366502, lng:9.8540131, wiki:"20211207-528_special-047.jpg", hash:"a/a6" },
    { kind:"drinking", lat:45.8503378, lng:9.3955431 },
    { kind:"drinking", lat:45.8505862, lng:9.3954783 },
    { kind:"drinking", lat:45.8375556, lng:9.8539424 },
    { kind:"drinking", lat:45.9210926, lng:9.5071674 },
    { kind:"drinking", lat:45.4950024, lng:9.6424728 },
    { kind:"drinking", lat:45.6472434, lng:9.8455918 },
    { kind:"drinking", lat:45.8527506, lng:9.5257728, wiki:"20210721-fuipiano_explo-152.jpg", hash:"f/f4" },
    { kind:"drinking", lat:45.5172179, lng:9.5960308 },
    { kind:"drinking", lat:45.5195754, lng:9.5889354 },
    { kind:"drinking", lat:45.521526, lng:9.589318 },
    { kind:"drinking", lat:45.5261757, lng:9.5950814 },
    { kind:"drinking", lat:45.6399109, lng:9.5880726 },
    { kind:"drinking", lat:45.7795433, lng:9.8260267, wiki:"20250216-beio_dh-007.jpg", hash:"8/8f" },
    { kind:"drinking", lat:45.8008425, lng:9.8428318 },
    { kind:"drinking", lat:45.7989955, lng:9.8399765, wiki:"20230910-slayer-027.jpg", hash:"c/c1" },
    { kind:"drinking", lat:45.8011982, lng:9.8425567 },
    { kind:"drinking", lat:45.8015851, lng:9.8429646 },
    { kind:"drinking", lat:45.7177339, lng:9.6828692 },
    { kind:"drinking", lat:45.71526, lng:9.6840161 },
    { kind:"drinking", lat:45.691088, lng:9.6745019 },
    { kind:"drinking", lat:46.0553992, lng:10.1145281 },
    { kind:"drinking", lat:45.6860376, lng:9.6723519 },
    { kind:"drinking", lat:45.6864127, lng:9.6713853 },
    { kind:"drinking", lat:45.6862689, lng:9.6719456 },
    { kind:"drinking", lat:45.7969657, lng:9.8351513, wiki:"20230819-gru_poieto-008.jpg", hash:"1/1d" },
    { kind:"drinking", lat:45.823093, lng:9.7580976, wiki:"20230608-serina_cornalba_giro_redo-095.jpg", hash:"4/41" },
    { kind:"drinking", lat:45.4762139, lng:9.7760661 },
    { kind:"drinking", lat:45.4755058, lng:9.7766395 },
    { kind:"drinking", lat:45.7995588, lng:9.82577, wiki:"20230114-tribulina_ganda-123.jpg", hash:"b/b0" },
    { kind:"drinking", lat:45.7591149, lng:9.7949584 },
    { kind:"drinking", lat:46.0485971, lng:9.6542923, wiki:"20250706-balicco-038.jpg", hash:"1/11" },
    { kind:"drinking", lat:45.5303905, lng:9.5907175 },
    { kind:"drinking", lat:45.6609585, lng:9.5614457 },
    { kind:"drinking", lat:45.9793413, lng:9.6705903, wiki:"20230806-piazzolo-058.jpg", hash:"e/ee" },
    { kind:"drinking", lat:45.9793524, lng:9.6726216, wiki:"20230806-piazzolo-061.jpg", hash:"b/b1" },
    { kind:"drinking", lat:45.8460144, lng:9.7947073 },
    { kind:"drinking", lat:46.029449, lng:9.8304176 },
    { kind:"drinking", lat:46.0622002, lng:9.9607461 },
    { kind:"drinking", lat:45.8087055, lng:9.6394309, wiki:"20210612-pernice-20.jpg", hash:"e/ec" },
    { kind:"drinking", lat:45.8766058, lng:9.9088499 },
    { kind:"spring", lat:45.7807945, lng:9.518374, wiki:"20221015-linzone-032.jpg", hash:"b/b6" },
    { kind:"drinking", lat:45.7525567, lng:9.5329535, wiki:"20221015-linzone-083.jpg", hash:"7/71" },
    { kind:"drinking", lat:45.7069582, lng:9.7141084 },
    { kind:"drinking", lat:45.8328007, lng:9.5588102, wiki:"20210806-explo_corna-118.jpg", hash:"2/27" },
    { kind:"drinking", lat:45.7633294, lng:9.9226616 },
    { kind:"drinking", lat:45.7446604, lng:9.6627383 },
    { kind:"drinking", lat:45.608455, lng:9.6273089 },
    { kind:"drinking", lat:45.8524245, lng:9.7443277 },
    { kind:"drinking", lat:45.549159, lng:9.6018332 },
    { kind:"drinking", lat:45.8091133, lng:9.8500925 },
    { kind:"drinking", lat:45.7823807, lng:9.7538289 },
    { kind:"drinking", lat:46.0276606, lng:9.7443634, wiki:"20220716-lemma_tartano_valleve-183.jpg", hash:"9/93" },
    { kind:"drinking", lat:46.0263477, lng:9.7434595, wiki:"20220716-lemma_tartano_valleve-010.jpg", hash:"d/d1" },
    { kind:"drinking", lat:45.7687678, lng:9.8092044 },
    { kind:"drinking", lat:45.7400141, lng:9.6995141, wiki:"20230211-cowboy_apache-024.jpg", hash:"1/1a" },
    { kind:"drinking", lat:45.9270464, lng:9.7113168 },
    { kind:"drinking", lat:45.7166345, lng:9.7715877 },
    { kind:"drinking", lat:45.6141099, lng:9.5971376 },
    { kind:"drinking", lat:45.755343, lng:9.5731509 },
    { kind:"drinking", lat:45.7879172, lng:9.9814533, wiki:"20220327-sicolo-004.jpg", hash:"c/c1" },
    { kind:"drinking", lat:45.7752546, lng:9.4724296 },
    { kind:"drinking", lat:45.8062543, lng:9.4885949, wiki:"20220627-nipotini_pertus-073.jpg", hash:"a/af" },
    { kind:"drinking", lat:45.7499207, lng:9.6078752, wiki:"20240315-brembo-038.jpg", hash:"4/49" },
    { kind:"drinking", lat:45.6065141, lng:9.5612782 },
    { kind:"drinking", lat:46.0231556, lng:10.0161842 },
    { kind:"drinking", lat:45.6294353, lng:9.586698 },
    { kind:"drinking", lat:45.8228859, lng:9.5104856, wiki:"20210815-valsecca_rota_explo-008.jpg", hash:"9/94" },
    { kind:"drinking", lat:45.6218502, lng:9.5585925 },
    { kind:"drinking", lat:45.6168133, lng:9.5242782 },
    { kind:"drinking", lat:45.7049373, lng:9.6662364 },
    { kind:"drinking", lat:46.025017, lng:9.9627666 },
    { kind:"drinking", lat:46.0112887, lng:9.6650482, wiki:"20240217-san_marco_neve-022.jpg", hash:"e/e5" },
    { kind:"drinking", lat:45.8135947, lng:9.5170459, wiki:"20210722-mazzoleni_explo-70.jpg", hash:"0/08" },
    { kind:"drinking", lat:45.8716774, lng:9.4254707, wiki:"Drinking_fountain_in_Sant'Egidio_(Lecco).jpg", hash:"7/70" },
    { kind:"drinking", lat:45.8205014, lng:9.5321197, wiki:"20210704-brumano_explo-186.jpg", hash:"7/7a" },
    { kind:"drinking", lat:45.5260811, lng:9.5996071 },
    { kind:"drinking", lat:45.5296834, lng:9.6032875 },
    { kind:"drinking", lat:45.5280244, lng:9.6039026 },
    { kind:"drinking", lat:45.5215847, lng:9.6019322 },
    { kind:"drinking", lat:45.8494724, lng:9.5093421, wiki:"20210704-brumano_explo-153.jpg", hash:"2/25" },
    { kind:"drinking", lat:45.5212144, lng:9.6025397 },
    { kind:"drinking", lat:45.7438487, lng:9.5821195 },
    { kind:"drinking", lat:45.7457138, lng:9.5804783 },
    { kind:"drinking", lat:45.7526854, lng:9.5676124 },
    { kind:"drinking", lat:45.9160729, lng:9.9450728 },
    { kind:"drinking", lat:45.8149165, lng:9.8176496, wiki:"20211205-529_easy-198.jpg", hash:"b/b4" },
    { kind:"drinking", lat:45.7189879, lng:9.7806323 },
    { kind:"drinking", lat:45.520006, lng:9.7534694 },
    { kind:"drinking", lat:45.5167804, lng:9.7413055 },
    { kind:"drinking", lat:45.5217198, lng:9.7543131 },
    { kind:"drinking", lat:45.5215055, lng:9.7569498 },
    { kind:"drinking", lat:45.5181129, lng:9.755525 },
    { kind:"drinking", lat:45.5205784, lng:9.7446943 },
    { kind:"drinking", lat:45.5162558, lng:9.7575127 },
    { kind:"drinking", lat:45.5160495, lng:9.7559559 },
    { kind:"drinking", lat:45.725439, lng:9.6339632, wiki:"20231230-colli-038.jpg", hash:"7/72" },
    { kind:"drinking", lat:45.7293955, lng:9.6767822 },
    { kind:"drinking", lat:45.6549948, lng:9.7309477 },
    { kind:"drinking", lat:45.7004281, lng:9.6810323 },
    { kind:"drinking", lat:45.5189678, lng:9.7524655 },
    { kind:"drinking", lat:45.8171133, lng:10.0730711 },
    { kind:"drinking", lat:45.7583691, lng:9.7307914 },
    { kind:"drinking", lat:45.665329, lng:9.8848388 },
    { kind:"drinking", lat:46.0086841, lng:9.6655991, wiki:"20240217-san_marco_neve-015.jpg", hash:"4/46" },
    { kind:"drinking", lat:45.7131048, lng:9.4659493 },
    { kind:"drinking", lat:45.7589575, lng:9.7916146 },
    { kind:"drinking", lat:45.8251415, lng:9.8532124, wiki:"20211207-528_special-029.jpg", hash:"d/d2" },
    { kind:"drinking", lat:45.7573893, lng:9.7920474 },
    { kind:"drinking", lat:45.7620028, lng:9.7936019 },
    { kind:"drinking", lat:45.8366246, lng:9.8414192, wiki:"20211230-518bis-067.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.8397812, lng:9.8397776, wiki:"20211229-518_bondo-173.jpg", hash:"b/b8" },
    { kind:"drinking", lat:45.5528292, lng:9.8365451 },
    { kind:"drinking", lat:45.716262, lng:9.6643001 },
    { kind:"drinking", lat:45.7163761, lng:9.6651411 },
    { kind:"drinking", lat:45.7349992, lng:9.6367931, wiki:"20230401-giongo-081.jpg", hash:"1/1f" },
    { kind:"drinking", lat:45.6516319, lng:9.611193 },
    { kind:"drinking", lat:45.666488, lng:9.6396735 },
    { kind:"drinking", lat:45.6685988, lng:9.6399546 },
    { kind:"drinking", lat:45.6482149, lng:9.6025592 },
    { kind:"drinking", lat:45.7817163, lng:9.6235847, wiki:"20230325-canto_alto-033.jpg", hash:"2/29" },
    { kind:"drinking", lat:45.8301511, lng:9.5222256, wiki:"20210815-valsecca_rota_explo-115.jpg", hash:"8/8a" },
    { kind:"drinking", lat:45.6882959, lng:9.4709712 },
    { kind:"drinking", lat:45.7459348, lng:9.6185638 },
    { kind:"drinking", lat:45.7453822, lng:9.6183188 },
    { kind:"drinking", lat:45.4679422, lng:9.8025615 },
    { kind:"drinking", lat:45.7477611, lng:9.6166126 },
    { kind:"drinking", lat:45.7421785, lng:9.5874498, wiki:"20240322-brembo_romanico-288.jpg", hash:"1/17" },
    { kind:"drinking", lat:45.6498608, lng:9.6033258 },
    { kind:"drinking", lat:45.834361, lng:10.0496926 },
    { kind:"drinking", lat:46.022834, lng:9.9577003 },
    { kind:"drinking", lat:45.9297851, lng:10.1014698 },
    { kind:"drinking", lat:45.9664326, lng:9.6106755 },
    { kind:"drinking", lat:45.7016578, lng:9.709387 },
    { kind:"drinking", lat:46.0136471, lng:9.6646241, wiki:"20210814-terzera-051.jpg", hash:"2/2a" },
    { kind:"drinking", lat:46.0125104, lng:9.6644461, wiki:"20240217-san_marco_neve-024.jpg", hash:"9/97" },
    { kind:"drinking", lat:46.0183003, lng:9.6664065, wiki:"20240217-san_marco_neve-028.jpg", hash:"f/f9" },
    { kind:"drinking", lat:45.8460031, lng:9.5080298, wiki:"20210704-brumano_explo-163.jpg", hash:"f/f8" },
    { kind:"drinking", lat:45.9887047, lng:9.623198, wiki:"20211023-corna_rossa-019.jpg", hash:"6/63" },
    { kind:"drinking", lat:46.0039246, lng:9.6244494, wiki:"20210925-enzo_ronzoni-144.jpg", hash:"5/58" },
    { kind:"drinking", lat:46.0177525, lng:9.614665 },
    { kind:"spring", lat:46.0312307, lng:9.6241895, wiki:"20211016-valmora-111.jpg", hash:"9/9f" },
    { kind:"drinking", lat:46.0016799, lng:10.0778022 },
    { kind:"drinking", lat:45.9543831, lng:9.7974389 },
    { kind:"drinking", lat:45.7415078, lng:9.6600428 },
    { kind:"drinking", lat:45.7850971, lng:9.6128787 },
    { kind:"drinking", lat:45.7818638, lng:9.6002543 },
    { kind:"drinking", lat:45.7057005, lng:9.5462538 },
    { kind:"drinking", lat:45.7095971, lng:9.5501159 },
    { kind:"drinking", lat:45.7394801, lng:9.6171153 },
    { kind:"drinking", lat:45.7149851, lng:9.6857205 },
    { kind:"drinking", lat:45.7130206, lng:9.6858889 },
    { kind:"drinking", lat:45.7143045, lng:9.6866618 },
    { kind:"drinking", lat:45.7864269, lng:9.7792369 },
    { kind:"drinking", lat:45.7479854, lng:9.6150474 },
    { kind:"drinking", lat:45.7819822, lng:9.7494363 },
    { kind:"drinking", lat:45.7809098, lng:9.7527485 },
    { kind:"drinking", lat:45.8398564, lng:10.0434252 },
    { kind:"drinking", lat:45.9476776, lng:9.7085686, wiki:"20220824-mezzeno-179.jpg", hash:"7/7c" },
    { kind:"drinking", lat:45.9471896, lng:9.7083102, wiki:"20220824-mezzeno-176.jpg", hash:"b/b7" },
    { kind:"drinking", lat:45.9495388, lng:9.7090787 },
    { kind:"drinking", lat:45.9778875, lng:9.5351414 },
    { kind:"drinking", lat:45.6834463, lng:9.6590429 },
    { kind:"drinking", lat:45.8828286, lng:9.4096903 },
    { kind:"drinking", lat:45.7192483, lng:9.4572257 },
    { kind:"drinking", lat:46.0225888, lng:9.7896401, wiki:"20220709-longo_selletta_calvi-300.jpg", hash:"1/11" },
    { kind:"drinking", lat:46.0067127, lng:9.7894016 },
    { kind:"drinking", lat:45.8511505, lng:9.4603959 },
    { kind:"drinking", lat:45.6855011, lng:9.5287728 },
    { kind:"drinking", lat:45.8505877, lng:9.5738667 },
    { kind:"drinking", lat:45.823962, lng:9.6756299 },
    { kind:"drinking", lat:45.887825, lng:10.0105906 },
    { kind:"drinking", lat:45.6884572, lng:9.6064181 },
    { kind:"drinking", lat:45.6826578, lng:9.6675175 },
    { kind:"drinking", lat:45.6612299, lng:9.677654 },
    { kind:"drinking", lat:45.6612124, lng:9.6776655 },
    { kind:"drinking", lat:45.764222, lng:9.9133008 },
    { kind:"drinking", lat:45.5201964, lng:9.7593816 },
    { kind:"drinking", lat:45.64043, lng:9.503973 },
    { kind:"drinking", lat:45.8750292, lng:9.6526574, wiki:"20230923-explo_giovanni_bianco-149.jpg", hash:"1/13" },
    { kind:"drinking", lat:45.6063962, lng:9.6274496 },
    { kind:"drinking", lat:45.731213, lng:10.0517965 },
    { kind:"drinking", lat:45.7379659, lng:9.6245571 },
    { kind:"drinking", lat:45.7302351, lng:9.5081302 },
    { kind:"drinking", lat:45.867167, lng:9.993518, wiki:"20220602-colombina-044.jpg", hash:"f/fd" },
    { kind:"drinking", lat:45.7479018, lng:9.6499622 },
    { kind:"drinking", lat:46.0232487, lng:10.1072175 },
    { kind:"drinking", lat:46.0025015, lng:10.0902648 },
    { kind:"drinking", lat:45.9972676, lng:9.8777846 },
    { kind:"drinking", lat:45.8920921, lng:9.9719586 },
    { kind:"drinking", lat:45.8903358, lng:9.9809661 },
    { kind:"drinking", lat:45.8329072, lng:9.4878415, wiki:"20220807-valsecca_explo-104.jpg", hash:"6/60" },
    { kind:"drinking", lat:45.7290378, lng:9.6102053 },
    { kind:"drinking", lat:45.7164254, lng:9.6871933 },
    { kind:"drinking", lat:45.7172743, lng:9.6866141 },
    { kind:"drinking", lat:45.5696498, lng:9.5698354 },
    { kind:"spring", lat:45.8390958, lng:9.9702773, wiki:"20250823-sandrera2-089.jpg", hash:"6/63" },
    { kind:"drinking", lat:45.6468973, lng:9.6793932 },
    { kind:"drinking", lat:45.6387411, lng:9.6820119 },
    { kind:"drinking", lat:45.6393372, lng:9.6832932 },
    { kind:"drinking", lat:45.673295, lng:9.7840058 },
    { kind:"drinking", lat:45.9738502, lng:9.7289894 },
    { kind:"drinking", lat:45.8411195, lng:9.5309296, wiki:"20210721-corna_explo-286.jpg", hash:"6/6d" },
    { kind:"drinking", lat:45.8639245, lng:9.8546531 },
    { kind:"drinking", lat:45.8855227, lng:9.9290563 },
    { kind:"drinking", lat:45.8283709, lng:9.5212642, wiki:"20210815-valsecca_rota_explo-118.jpg", hash:"f/fe" },
    { kind:"drinking", lat:45.8463521, lng:9.523254, wiki:"20210721-fuipiano_explo-175.jpg", hash:"c/c1" },
    { kind:"drinking", lat:45.838798, lng:9.664934 },
    { kind:"drinking", lat:45.8392614, lng:9.6652616 },
    { kind:"drinking", lat:45.9960249, lng:10.0930872 },
    { kind:"drinking", lat:45.7366503, lng:9.742105 },
    { kind:"drinking", lat:45.8814747, lng:9.9744637 },
    { kind:"drinking", lat:45.7303114, lng:9.61285 },
    { kind:"drinking", lat:45.8172752, lng:9.6953371, wiki:"20240622-ambria_spino-211.jpg", hash:"8/86" },
    { kind:"drinking", lat:45.7621673, lng:9.6019095 },
    { kind:"drinking", lat:45.7736538, lng:9.6072656, wiki:"20210623-ubione_explo_2-77.jpg", hash:"a/ab" },
    { kind:"drinking", lat:45.4511805, lng:9.852604 },
    { kind:"drinking", lat:45.6618555, lng:9.7829761 },
    { kind:"drinking", lat:45.752626, lng:9.5868499 },
    { kind:"drinking", lat:45.5335119, lng:9.5981544 },
    { kind:"drinking", lat:45.7223389, lng:10.0146161 },
    { kind:"drinking", lat:45.7618646, lng:9.92943 },
    { kind:"drinking", lat:45.6575894, lng:9.8324841 },
    { kind:"drinking", lat:45.5386007, lng:9.7884356 },
    { kind:"drinking", lat:45.8651873, lng:9.849474 },
    { kind:"drinking", lat:45.8570631, lng:9.8363277, wiki:"20241116-frassino-129.jpg", hash:"e/e3" },
    { kind:"drinking", lat:45.8649304, lng:9.8471277 },
    { kind:"drinking", lat:45.8586231, lng:9.8570165, wiki:"20241116-frassino-146.jpg", hash:"6/6b" },
    { kind:"drinking", lat:45.8617145, lng:9.8414412 },
    { kind:"drinking", lat:45.8623438, lng:9.8424932 },
    { kind:"drinking", lat:45.8684346, lng:9.8428635 },
    { kind:"drinking", lat:45.8594179, lng:9.8389599 },
    { kind:"drinking", lat:45.870447, lng:9.8339251 },
    { kind:"drinking", lat:45.8918044, lng:9.8244886 },
    { kind:"drinking", lat:45.8756636, lng:9.8177065 },
    { kind:"drinking", lat:45.8675717, lng:9.8512096 },
    { kind:"drinking", lat:45.8630357, lng:9.8424934 },
    { kind:"drinking", lat:45.8840296, lng:9.8376836 },
    { kind:"drinking", lat:45.5149315, lng:9.679963 },
    { kind:"drinking", lat:45.5554382, lng:9.5324447 },
    { kind:"drinking", lat:45.7109497, lng:9.4634192 },
    { kind:"drinking", lat:45.8795667, lng:9.828835 },
    { kind:"drinking", lat:45.8264896, lng:9.4961526, wiki:"20210630-pertus_explo-131.jpg", hash:"9/9f" },
    { kind:"spring", lat:45.8244182, lng:9.4831715, wiki:"20220723-valsecca_explo-030.jpg", hash:"a/a7" },
    { kind:"spring", lat:45.828083, lng:9.4857262, wiki:"20220807-valsecca_explo-114.jpg", hash:"8/88" },
    { kind:"drinking", lat:45.8670548, lng:9.8358913 },
    { kind:"drinking", lat:45.8506591, lng:9.8300092 },
    { kind:"drinking", lat:45.8615612, lng:9.8376435 },
    { kind:"drinking", lat:45.8048842, lng:9.4624712 },
    { kind:"drinking", lat:45.6728986, lng:9.5758899 },
    { kind:"drinking", lat:45.4918106, lng:9.8445091 },
    { kind:"drinking", lat:45.8611124, lng:9.8408895 },
    { kind:"drinking", lat:45.8608148, lng:9.8438112 },
    { kind:"drinking", lat:45.8831715, lng:9.8308589 },
    { kind:"drinking", lat:45.869954, lng:9.8348842 },
    { kind:"drinking", lat:45.863572, lng:9.8400353 },
    { kind:"drinking", lat:45.8592351, lng:9.7893435 },
    { kind:"drinking", lat:45.8707034, lng:9.8027604 },
    { kind:"drinking", lat:45.5707361, lng:9.7696827 },
    { kind:"drinking", lat:45.8850567, lng:9.8076108 },
    { kind:"drinking", lat:46.0208198, lng:9.9568938 },
    { kind:"drinking", lat:45.8548238, lng:9.8288357 },
    { kind:"drinking", lat:45.7218611, lng:9.7374731 },
    { kind:"drinking", lat:45.7212356, lng:9.7357493 },
    { kind:"drinking", lat:45.8623141, lng:9.8494348 },
    { kind:"drinking", lat:45.8263364, lng:9.5113379, wiki:"20220807-valsecca_explo-005.jpg", hash:"f/f4" },
    { kind:"drinking", lat:45.6834286, lng:10.0192878 },
    { kind:"drinking", lat:45.9061586, lng:9.5563757, wiki:"20220226-artavaggio-354.jpg", hash:"0/0b" },
    { kind:"drinking", lat:45.8298764, lng:9.5304216, wiki:"20210704-brumano_explo-182.jpg", hash:"0/07" },
    { kind:"drinking", lat:45.8776141, lng:9.8107473 },
    { kind:"drinking", lat:45.8945288, lng:9.8103024 },
    { kind:"drinking", lat:45.5914728, lng:9.809002 },
    { kind:"drinking", lat:45.8585071, lng:9.8473355 },
    { kind:"drinking", lat:45.8622381, lng:9.8391677 },
    { kind:"drinking", lat:45.8601613, lng:9.8286407 },
    { kind:"drinking", lat:45.8211378, lng:9.63718, wiki:"20210723-pizzo_cerro_hard-20.jpg", hash:"6/6c" },
    { kind:"drinking", lat:45.8929708, lng:9.5641767, wiki:"20220226-artavaggio-018.jpg", hash:"1/18" },
    { kind:"drinking", lat:45.9332982, lng:9.5342445, wiki:"20221002-corno_zuccone_sud-078.jpg", hash:"9/9d" },
    { kind:"drinking", lat:45.6664332, lng:9.4992632 },
    { kind:"drinking", lat:45.9926694, lng:9.6039179 },
    { kind:"drinking", lat:46.0188667, lng:10.2051668 },
    { kind:"drinking", lat:45.6876973, lng:9.8046595 },
    { kind:"drinking", lat:46.0402557, lng:9.6509123, wiki:"20240217-san_marco_neve-043.jpg", hash:"5/50" },
    { kind:"drinking", lat:46.0389917, lng:9.6294082, wiki:"20240217-san_marco_neve-072.jpg", hash:"a/ac" },
    { kind:"drinking", lat:45.880236, lng:10.0632148 },
    { kind:"drinking", lat:46.0256761, lng:9.8046136, wiki:"20220709-longo_selletta_calvi-292.jpg", hash:"6/66" },
    { kind:"drinking", lat:45.9454028, lng:9.9642925 },
    { kind:"drinking", lat:45.9393105, lng:9.9322046 },
    { kind:"drinking", lat:46.0308525, lng:9.6372029, wiki:"20200905-san_marco_113_ferro_rec-recovered_00000129.jpg", hash:"8/88" },
    { kind:"drinking", lat:46.0214981, lng:9.6434325, wiki:"20200905-san_marco_113_ferro_rec-recovered_00000152.jpg", hash:"c/c0" },
    { kind:"drinking", lat:45.9773578, lng:9.6563044, wiki:"20200905-san_marco_113_ferro-36.jpg", hash:"4/40" },
    { kind:"drinking", lat:45.9816319, lng:9.6661354 },
    { kind:"spring", lat:46.0287703, lng:9.6542242, wiki:"20240217-san_marco_neve-034.jpg", hash:"c/cb" },
    { kind:"drinking", lat:45.7176917, lng:9.6262239, wiki:"20231230-colli-057.jpg", hash:"f/f5" },
    { kind:"drinking", lat:45.9912589, lng:9.7175188, wiki:"20210820-pizzo_badile-008.jpg", hash:"1/1e" },
    { kind:"drinking", lat:45.9563742, lng:9.6396523, wiki:"20200918-baita_campo-47.jpg", hash:"9/92" },
    { kind:"drinking", lat:45.8743099, lng:9.8726538 },
    { kind:"spring", lat:45.8160433, lng:9.5764031, wiki:"20200926-berbenno_explo-90.jpg", hash:"6/69" },
    { kind:"drinking", lat:45.5699306, lng:9.7647314 },
    { kind:"drinking", lat:45.8974665, lng:9.5680047, wiki:"20220927-pizzino_redo-004.jpg", hash:"2/26" },
    { kind:"drinking", lat:45.9005078, lng:9.5647907, wiki:"20220316-avolasio_artavaggio-213.jpg", hash:"8/80" },
    { kind:"drinking", lat:45.9002322, lng:9.5742561, wiki:"20220226-artavaggio-480.jpg", hash:"4/4e" },
    { kind:"drinking", lat:45.8070378, lng:9.678138, wiki:"20231111-castello_orridi-144.jpg", hash:"b/b6" },
    { kind:"drinking", lat:45.8920448, lng:9.5692488, wiki:"20220305-pizzino-142.jpg", hash:"4/4a" },
    { kind:"drinking", lat:45.4807931, lng:9.8690794 },
    { kind:"drinking", lat:45.8775604, lng:9.8098626 },
    { kind:"drinking", lat:45.9873917, lng:9.5352993 },
    { kind:"drinking", lat:45.9841321, lng:9.5498253 },
    { kind:"drinking", lat:45.9846465, lng:9.5504697 },
    { kind:"drinking", lat:45.98243, lng:9.53042 },
    { kind:"drinking", lat:45.7394696, lng:9.7746804 },
    { kind:"drinking", lat:45.7422943, lng:9.7739924 },
    { kind:"drinking", lat:46.0509896, lng:10.0300542 },
    { kind:"drinking", lat:45.9950503, lng:9.6942812 },
    { kind:"drinking", lat:45.9952658, lng:9.6927368 },
    { kind:"drinking", lat:45.5738429, lng:9.5409527 },
    { kind:"drinking", lat:45.8799653, lng:9.7905921 },
    { kind:"drinking", lat:45.9013738, lng:9.5616518, wiki:"20220226-artavaggio-368.jpg", hash:"f/f8" },
    { kind:"drinking", lat:45.9025484, lng:9.5598496 },
    { kind:"drinking", lat:45.9891502, lng:9.6043488 },
    { kind:"drinking", lat:46.0032662, lng:10.0524626 },
    { kind:"drinking", lat:45.8102054, lng:9.8543784 },
    { kind:"drinking", lat:45.8088837, lng:9.8496294 },
    { kind:"drinking", lat:45.8556326, lng:9.5020356, wiki:"20210815-valsecca_rota_explo-026.jpg", hash:"0/08" },
    { kind:"drinking", lat:45.8560756, lng:9.4982574, wiki:"20221019-giganti-089.jpg", hash:"7/70" },
    { kind:"drinking", lat:45.4939858, lng:9.6404009 },
    { kind:"drinking", lat:45.8622313, lng:9.8460066 },
    { kind:"drinking", lat:45.8488068, lng:9.8406624 },
    { kind:"drinking", lat:45.8486064, lng:10.1128963 },
    { kind:"drinking", lat:45.4867873, lng:9.6351941 },
    { kind:"spring", lat:45.818091, lng:9.8511143, wiki:"20230304-530_special-072.jpg", hash:"1/1d" },
    { kind:"drinking", lat:45.7604462, lng:9.9199358, wiki:"20220212-ranzanico_doppio-118.jpg", hash:"d/d0" },
    { kind:"drinking", lat:45.7649082, lng:9.9227202 },
    { kind:"drinking", lat:45.8687746, lng:9.8229329, wiki:"20241116-frassino-008.jpg", hash:"a/a7" },
    { kind:"drinking", lat:45.8208122, lng:9.5961305 },
    { kind:"drinking", lat:45.8216199, lng:9.5955936 },
    { kind:"drinking", lat:45.8192451, lng:9.5980232, wiki:"20210921-ripe_lera-032.jpg", hash:"0/06" },
    { kind:"drinking", lat:45.8082002, lng:9.6017123 },
    { kind:"drinking", lat:45.8082028, lng:9.6009111 },
    { kind:"drinking", lat:45.8492739, lng:9.5693976 },
    { kind:"drinking", lat:45.7855686, lng:9.768609 },
    { kind:"drinking", lat:45.6685738, lng:9.8309331 },
    { kind:"drinking", lat:45.6545844, lng:9.5057285 },
    { kind:"drinking", lat:45.8326512, lng:9.9199091 },
    { kind:"drinking", lat:45.9227101, lng:9.9247199 },
    { kind:"drinking", lat:45.7674662, lng:9.6133759 },
    { kind:"drinking", lat:45.7369585, lng:9.7341815 },
    { kind:"drinking", lat:45.6256836, lng:9.5666349 },
    { kind:"drinking", lat:45.6475867, lng:9.592165 },
    { kind:"drinking", lat:45.6471659, lng:9.5712545 },
    { kind:"drinking", lat:45.8379017, lng:9.6663777 },
    { kind:"drinking", lat:45.8365272, lng:9.6651947 },
    { kind:"drinking", lat:45.9860855, lng:9.6350919 },
    { kind:"drinking", lat:45.9882894, lng:9.6345985 },
    { kind:"drinking", lat:45.9893897, lng:9.631728, wiki:"20220625-mincucco_doldo-110.jpg", hash:"1/12" },
    { kind:"drinking", lat:45.9853405, lng:9.6383318 },
    { kind:"drinking", lat:45.7039311, lng:9.6694186 },
    { kind:"drinking", lat:45.5346563, lng:9.7386632 },
    { kind:"drinking", lat:45.7576697, lng:9.4852999 },
    { kind:"drinking", lat:45.741801, lng:9.9114431, wiki:"20220313-sfermo-227.jpg", hash:"f/fa" },
    { kind:"drinking", lat:45.7426313, lng:9.9113536 },
    { kind:"drinking", lat:45.7522719, lng:9.9123813 },
    { kind:"drinking", lat:45.7893473, lng:9.9484092 },
    { kind:"drinking", lat:45.527189, lng:9.8028876 },
    { kind:"spring", lat:45.7860527, lng:9.7371031, wiki:"20230916-explo_selvino-178.jpg", hash:"a/a4" },
    { kind:"drinking", lat:45.8138172, lng:10.0134115 },
    { kind:"drinking", lat:45.8177962, lng:9.91058 },
    { kind:"spring", lat:45.837654, lng:9.7120918, wiki:"20210529-corna_maria-64.jpg", hash:"f/f9" },
    { kind:"drinking", lat:45.7838551, lng:9.6887319 },
    { kind:"spring", lat:45.8015615, lng:9.5901718, wiki:"20211017-laxolo-037.jpg", hash:"9/97" },
    { kind:"drinking", lat:45.5158555, lng:9.5891395 },
    { kind:"spring", lat:45.8231481, lng:9.719445, wiki:"20230916-explo_selvino-267.jpg", hash:"7/7f" },
    { kind:"drinking", lat:45.9838833, lng:9.6022666, wiki:"20210826-avaro_109-076.jpg", hash:"5/57" },
    { kind:"drinking", lat:45.7956685, lng:9.6818687, wiki:"20210605-monte_castello-97.jpg", hash:"3/38" },
    { kind:"drinking", lat:45.780162, lng:9.6089165, wiki:"20210623-ubione_explo_2-68.jpg", hash:"9/98" },
    { kind:"drinking", lat:45.638018, lng:9.6814822 },
    { kind:"drinking", lat:45.8186256, lng:9.4523921, wiki:"20210626-munik-176.jpg", hash:"9/94" },
    { kind:"drinking", lat:45.8224594, lng:10.1032209 },
    { kind:"spring", lat:45.8077307, lng:9.7495077, wiki:"20230917-trafficanti-007.jpg", hash:"1/1c" },
    { kind:"spring", lat:45.8042745, lng:9.7495957, wiki:"20230917-trafficanti-013.jpg", hash:"6/69" },
    { kind:"drinking", lat:45.5977127, lng:9.5387242 },
    { kind:"drinking", lat:45.7066615, lng:9.8146639 },
    { kind:"drinking", lat:45.8319239, lng:9.5096025, wiki:"20210704-brumano_explo-39.jpg", hash:"5/5e" },
    { kind:"drinking", lat:45.8373168, lng:9.5122561, wiki:"20210704-brumano_explo-43.jpg", hash:"1/14" },
    { kind:"drinking", lat:45.8491051, lng:9.5104609, wiki:"20210704-brumano_explo-156.jpg", hash:"f/ff" },
    { kind:"drinking", lat:45.842126, lng:9.5101994, wiki:"20210704-brumano_explo-167.jpg", hash:"c/c3" },
    { kind:"drinking", lat:46.0488727, lng:10.0254616 },
    { kind:"drinking", lat:45.8478709, lng:9.5663766, wiki:"20210703-piazzacava-115.jpg", hash:"e/e9" },
    { kind:"spring", lat:45.8088622, lng:9.5815481, wiki:"20210703-piazzacava-12.jpg", hash:"e/ed" },
    { kind:"drinking", lat:45.5353679, lng:9.7086837 },
    { kind:"drinking", lat:45.9753847, lng:9.8962422 },
    { kind:"drinking", lat:45.9828107, lng:9.8919808 },
    { kind:"drinking", lat:45.8144089, lng:9.6169042, wiki:"20210720-pizzo_cerro-18.jpg", hash:"2/2f" },
    { kind:"drinking", lat:45.8407157, lng:9.5309096, wiki:"20210721-corna_explo-268.jpg", hash:"a/aa" },
    { kind:"spring", lat:45.840533, lng:9.5316677, wiki:"20210721-corna_explo-282.jpg", hash:"4/44" },
    { kind:"drinking", lat:45.84261, lng:9.5218751, wiki:"20210721-corna_explo-319.jpg", hash:"9/96" },
    { kind:"drinking", lat:45.6983735, lng:9.7335915 },
    { kind:"drinking", lat:45.6081022, lng:9.5280404 },
    { kind:"drinking", lat:45.9587734, lng:9.7921085, wiki:"20220824-mezzeno-119.jpg", hash:"1/1f" },
    { kind:"spring", lat:46.0071536, lng:9.7392363, wiki:"20230924-forcolino-067.jpg", hash:"5/5f" },
    { kind:"spring", lat:45.8541867, lng:9.5378989, wiki:"20210721-fuipiano_explo-31.jpg", hash:"6/6c" },
    { kind:"drinking", lat:45.7979484, lng:9.5301925, wiki:"20210722-mazzoleni_explo-152.jpg", hash:"9/95" },
    { kind:"drinking", lat:45.6757914, lng:9.5793982 },
    { kind:"drinking", lat:45.832747, lng:9.5416042, wiki:"20210806-explo_corna-49.jpg", hash:"e/e9" },
    { kind:"drinking", lat:45.8332259, lng:9.5450299, wiki:"20210806-explo_corna-104.jpg", hash:"8/8e" },
    { kind:"drinking", lat:45.8336056, lng:9.5330968, wiki:"20210806-explo_corna-25.jpg", hash:"0/04" },
    { kind:"drinking", lat:45.8228462, lng:9.5523919, wiki:"20210806-explo_corna-144.jpg", hash:"7/72" },
    { kind:"drinking", lat:45.7626253, lng:9.8863457, wiki:"20220515-cesuli-062.jpg", hash:"5/5c" },
    { kind:"drinking", lat:45.7612272, lng:9.883725, wiki:"20220515-cesuli-070.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.7617758, lng:9.896037 },
    { kind:"drinking", lat:45.855709, lng:9.5804601, wiki:"20210807-foldone_sonardello-115.jpg", hash:"f/f4" },
    { kind:"drinking", lat:45.5305245, lng:9.5809368 },
    { kind:"drinking", lat:45.7799625, lng:9.5764957, wiki:"20210808-explo_strozza-162.jpg", hash:"7/74" },
    { kind:"drinking", lat:45.7614858, lng:9.8981211 },
    { kind:"drinking", lat:45.8902666, lng:9.9935784 },
    { kind:"drinking", lat:45.9223515, lng:9.4964924 },
    { kind:"drinking", lat:45.5169631, lng:9.7519566 },
    { kind:"drinking", lat:45.8909686, lng:9.9878584 },
    { kind:"drinking", lat:45.8902454, lng:9.9902583 },
    { kind:"drinking", lat:45.8902357, lng:9.9910104 },
    { kind:"drinking", lat:46.0075649, lng:9.6759078, wiki:"20210814-terzera-118.jpg", hash:"3/3f" },
    { kind:"drinking", lat:45.833186, lng:9.506575, wiki:"20210815-valsecca_rota_explo-101.jpg", hash:"9/97" },
    { kind:"drinking", lat:45.8275906, lng:9.5200553, wiki:"20210815-valsecca_rota_explo-119.jpg", hash:"7/73" },
    { kind:"spring", lat:45.8370623, lng:9.4835213, wiki:"20210815-valsecca_rota_explo-065.jpg", hash:"7/7b" },
    { kind:"drinking", lat:45.8928943, lng:9.992166 },
    { kind:"drinking", lat:45.8917152, lng:9.9882817 },
    { kind:"drinking", lat:45.8901458, lng:9.995852 },
    { kind:"drinking", lat:45.8939055, lng:9.9906124 },
    { kind:"drinking", lat:45.9744643, lng:10.0829643 },
    { kind:"drinking", lat:45.9970371, lng:9.706619, wiki:"20210820-pizzo_badile-100.jpg", hash:"6/66" },
    { kind:"drinking", lat:46.0023481, lng:9.7365775, wiki:"20210820-pizzo_badile-053.jpg", hash:"4/4a" },
    { kind:"drinking", lat:45.7161692, lng:9.8800742 },
    { kind:"drinking", lat:45.9594855, lng:10.1134924 },
    { kind:"drinking", lat:45.9722517, lng:10.128309 },
    { kind:"drinking", lat:45.7963174, lng:9.8363037 },
    { kind:"drinking", lat:46.0394455, lng:10.0142598 },
    { kind:"drinking", lat:45.9770652, lng:9.6200438, wiki:"20210826-avaro_109-093.jpg", hash:"d/d3" },
    { kind:"drinking", lat:45.8977425, lng:9.5524725, wiki:"20220409-corno_zuccone-112.jpg", hash:"1/16" },
    { kind:"drinking", lat:45.9287524, lng:9.486294 },
    { kind:"drinking", lat:45.9255709, lng:9.4905802 },
    { kind:"drinking", lat:45.6048441, lng:9.5378856 },
    { kind:"drinking", lat:45.4811143, lng:9.6305053 },
    { kind:"drinking", lat:45.4811112, lng:9.6305128 },
    { kind:"drinking", lat:45.835187, lng:9.6572152 },
    { kind:"drinking", lat:45.6780746, lng:9.8431634 },
    { kind:"drinking", lat:45.4945524, lng:9.7492151 },
    { kind:"drinking", lat:45.8655969, lng:10.114613 },
    { kind:"drinking", lat:45.4975078, lng:9.6759251 },
    { kind:"drinking", lat:45.4974237, lng:9.6786049 },
    { kind:"drinking", lat:45.5134795, lng:9.7017383 },
    { kind:"drinking", lat:45.5964479, lng:9.5380194 },
    { kind:"drinking", lat:45.8050596, lng:9.5020398, wiki:"20220521-murada_nala-063.jpg", hash:"7/7a" },
    { kind:"drinking", lat:46.0019886, lng:9.6281349, wiki:"20210925-enzo_ronzoni-170.jpg", hash:"7/78" },
    { kind:"drinking", lat:45.991374, lng:9.6247908, wiki:"20210925-enzo_ronzoni-185.jpg", hash:"9/94" },
    { kind:"drinking", lat:45.9811924, lng:9.6213357, wiki:"20210925-enzo_ronzoni-010.jpg", hash:"f/fb" },
    { kind:"drinking", lat:45.9982374, lng:9.5794082, wiki:"20210925-enzo_ronzoni-086.jpg", hash:"1/1c" },
    { kind:"drinking", lat:46.0188007, lng:9.7788584, wiki:"20220724-sambuzza-163.jpg", hash:"f/f3" },
    { kind:"drinking", lat:46.0044198, lng:9.7594911, wiki:"20211010-lago_moro-012.jpg", hash:"d/d9" },
    { kind:"drinking", lat:46.0241015, lng:9.7434922, wiki:"20211010-lago_moro-026.jpg", hash:"0/0d" },
    { kind:"drinking", lat:46.0034826, lng:9.7589603, wiki:"20211010-lago_moro-175.jpg", hash:"1/10" },
    { kind:"drinking", lat:46.0248612, lng:9.7839562, wiki:"20211010-lago_moro-155.jpg", hash:"f/f3" },
    { kind:"drinking", lat:45.9893947, lng:9.6037425, wiki:"20211016-valmora-012.jpg", hash:"0/0c" },
    { kind:"drinking", lat:45.9906873, lng:9.6032807, wiki:"20211016-valmora-018.jpg", hash:"3/36" },
    { kind:"drinking", lat:45.8083683, lng:9.61159, wiki:"20211017-laxolo-074.jpg", hash:"9/9b" },
    { kind:"drinking", lat:46.0057816, lng:9.5959002, wiki:"20211023-corna_rossa-037.jpg", hash:"7/72" },
    { kind:"drinking", lat:45.9726074, lng:9.6488909, wiki:"20211023-corna_rossa-008.jpg", hash:"7/7c" },
    { kind:"drinking", lat:45.9700028, lng:9.6487126, wiki:"20211023-corna_rossa-106.jpg", hash:"d/df" },
    { kind:"drinking", lat:45.9681539, lng:9.6474722, wiki:"20211023-corna_rossa-103.jpg", hash:"0/01" },
    { kind:"drinking", lat:45.9716411, lng:9.6303361, wiki:"20211023-corna_rossa-097.jpg", hash:"5/5c" },
    { kind:"drinking", lat:45.9918455, lng:9.6006765, wiki:"20211023-corna_rossa-028.jpg", hash:"8/86" },
    { kind:"drinking", lat:45.9890324, lng:9.5792803, wiki:"20211026-inferno-018.jpg", hash:"1/13" },
    { kind:"drinking", lat:45.9835983, lng:9.618644, wiki:"20211026-inferno-204.jpg", hash:"a/aa" },
    { kind:"drinking", lat:45.9877058, lng:9.5797072, wiki:"20211027-inferno_redo-126.jpg", hash:"e/e3" },
    { kind:"drinking", lat:46.0069071, lng:9.6676193, wiki:"20211030-priula-026.jpg", hash:"d/dd" },
    { kind:"drinking", lat:46.0122894, lng:9.6646629, wiki:"20211030-priula-035.jpg", hash:"1/11" },
    { kind:"drinking", lat:45.9533568, lng:9.6970871, wiki:"20211106-torcola_moio-007.jpg", hash:"3/31" },
    { kind:"drinking", lat:45.9495893, lng:9.6906285, wiki:"20211106-torcola_moio-127.jpg", hash:"a/a1" },
    { kind:"drinking", lat:45.9444894, lng:9.6760742, wiki:"20211106-torcola_moio-135.jpg", hash:"9/9a" },
    { kind:"drinking", lat:45.9080812, lng:9.8927546, wiki:"20211120-vaccaro_240-063.jpg", hash:"d/dc" },
    { kind:"drinking", lat:45.8882997, lng:9.887538, wiki:"20211120-vaccaro_240-216.jpg", hash:"3/39" },
    { kind:"drinking", lat:45.9030976, lng:9.8966608, wiki:"20211120-vaccaro_240-057.jpg", hash:"4/4a" },
    { kind:"drinking", lat:45.8775795, lng:9.8906318, wiki:"20211120-vaccaro_240-022.jpg", hash:"9/9f" },
    { kind:"drinking", lat:45.9046455, lng:9.8818069, wiki:"20211120-vaccaro_240-108.jpg", hash:"1/1c" },
    { kind:"drinking", lat:45.8142113, lng:9.8446506, wiki:"20211205-529_easy-020.jpg", hash:"2/28" },
    { kind:"drinking", lat:45.8112417, lng:9.8504035, wiki:"20211205-529_easy-008.jpg", hash:"7/7c" },
    { kind:"drinking", lat:45.8162881, lng:9.8096105, wiki:"20211205-529_easy-193.jpg", hash:"a/ab" },
    { kind:"drinking", lat:45.8397437, lng:9.8401727, wiki:"20211207-528_special-091.jpg", hash:"5/50" },
    { kind:"drinking", lat:45.8594976, lng:9.83937, wiki:"20211229-518_bondo-031.jpg", hash:"4/46" },
    { kind:"drinking", lat:45.8596787, lng:9.8394802, wiki:"20211229-518_bondo-033.jpg", hash:"0/07" },
    { kind:"drinking", lat:45.8895732, lng:9.9445087 },
    { kind:"drinking", lat:45.8592875, lng:9.8795806, wiki:"20211229-518_bondo-012.jpg", hash:"e/ef" },
    { kind:"drinking", lat:45.8077165, lng:9.8527902, wiki:"20211231-529hard-075.jpg", hash:"4/45" },
    { kind:"drinking", lat:45.7576024, lng:9.797808 },
    { kind:"drinking", lat:45.8177192, lng:9.8956914, wiki:"20220108-giro_gandino-025.jpg", hash:"2/22" },
    { kind:"drinking", lat:45.6840223, lng:9.5614868 },
    { kind:"drinking", lat:45.8572962, lng:9.5315639, wiki:"20220115-fuipiano_fail_2-006.jpg", hash:"0/0e" },
    { kind:"spring", lat:45.8231523, lng:9.9114864, wiki:"202210116-formico_groaro-093.jpg", hash:"6/64" },
    { kind:"drinking", lat:45.8762453, lng:9.4828842, wiki:"20220119-grandi_alberi-195.jpg", hash:"4/4e" },
    { kind:"drinking", lat:45.8769344, lng:9.4833335, wiki:"20220119-grandi_alberi-204.jpg", hash:"7/76" },
    { kind:"drinking", lat:45.9201722, lng:9.9481831 },
    { kind:"drinking", lat:45.8786773, lng:9.5064618, wiki:"20220123-grandi_alberi-091.jpg", hash:"4/4b" },
    { kind:"drinking", lat:45.686049, lng:9.5498244 },
    { kind:"drinking", lat:45.8209952, lng:10.0198464, wiki:"20220205-malga_lunga_563-086.jpg", hash:"b/bb" },
    { kind:"drinking", lat:45.7952977, lng:9.9829316, wiki:"20220205-malga_lunga_563-128.jpg", hash:"3/3f" },
    { kind:"drinking", lat:45.5751452, lng:9.5393205 },
    { kind:"drinking", lat:45.7737164, lng:9.9194923, wiki:"20220212-ranzanico_doppio-103.jpg", hash:"a/a9" },
    { kind:"drinking", lat:45.7648477, lng:9.9191629, wiki:"20220212-ranzanico_doppio-011.jpg", hash:"b/b1" },
    { kind:"drinking", lat:45.864338, lng:9.5688231, wiki:"20220223-bura_faggi-146.jpg", hash:"7/72" },
    { kind:"drinking", lat:45.8656806, lng:9.5768655, wiki:"20220223-bura_faggi-198.jpg", hash:"c/c5" },
    { kind:"drinking", lat:45.8576665, lng:9.5574575, wiki:"20220223-bura_faggi-093.jpg", hash:"3/38" },
    { kind:"drinking", lat:45.8571876, lng:9.5817696, wiki:"20220223-bura_faggi-207.jpg", hash:"0/05" },
    { kind:"drinking", lat:45.8924184, lng:9.5640801, wiki:"20220226-artavaggio-006.jpg", hash:"1/19" },
    { kind:"drinking", lat:45.9019423, lng:9.5700943, wiki:"20220226-artavaggio-453.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.9019184, lng:9.5702312, wiki:"20220226-artavaggio-455.jpg", hash:"e/e2" },
    { kind:"drinking", lat:45.7490527, lng:9.910571, wiki:"20220306-pranza-014.jpg", hash:"6/65" },
    { kind:"drinking", lat:45.8932048, lng:9.566116, wiki:"20220309-gherardi-006.jpg", hash:"4/49" },
    { kind:"drinking", lat:45.8794964, lng:9.6988356, wiki:"20231027-explo_dossena-037.jpg", hash:"f/fd" },
    { kind:"drinking", lat:45.8806297, lng:9.6969931, wiki:"20231014-explo_dossena-077.jpg", hash:"c/c3" },
    { kind:"spring", lat:45.8189842, lng:9.5013774, wiki:"20220312-valu-096.jpg", hash:"8/8d" },
    { kind:"drinking", lat:45.7178437, lng:9.9030596, wiki:"20220313-sfermo-016.jpg", hash:"7/7d" },
    { kind:"drinking", lat:45.7460382, lng:9.9143938, wiki:"20220313-sfermo-221.jpg", hash:"9/98" },
    { kind:"drinking", lat:45.7198717, lng:9.893468, wiki:"20220313-sfermo-235.jpg", hash:"0/0b" },
    { kind:"drinking", lat:45.8918592, lng:9.562688, wiki:"20220316-avolasio_artavaggio-008.jpg", hash:"5/5b" },
    { kind:"drinking", lat:45.8847768, lng:9.5484817, wiki:"20220316-avolasio_artavaggio-053.jpg", hash:"4/44" },
    { kind:"drinking", lat:45.6710011, lng:9.7696172 },
    { kind:"drinking", lat:45.7165255, lng:9.8809627, wiki:"20220319-luzzana_2-004.jpg", hash:"5/59" },
    { kind:"drinking", lat:45.5333745, lng:9.7141442 },
    { kind:"drinking", lat:45.8386862, lng:9.5116299, wiki:"20220320-alaska_siberia-005.jpg", hash:"e/e7" },
    { kind:"drinking", lat:45.5210781, lng:9.7028389 },
    { kind:"drinking", lat:45.8868066, lng:9.5395091, wiki:"20220323-fracchio_enna-113.jpg", hash:"6/68" },
    { kind:"drinking", lat:45.8033007, lng:9.7703778 },
    { kind:"drinking", lat:45.788582, lng:9.9819397, wiki:"20220327-sicolo-232.jpg", hash:"f/f6" },
    { kind:"drinking", lat:45.7839905, lng:9.9958279, wiki:"20220327-sicolo-015.jpg", hash:"a/ab" },
    { kind:"drinking", lat:45.782479, lng:9.981694, wiki:"20220412-torrezzo-187.jpg", hash:"e/e6" },
    { kind:"drinking", lat:45.7806995, lng:9.979004, wiki:"20220412-torrezzo-177.jpg", hash:"f/f6" },
    { kind:"drinking", lat:45.8722641, lng:9.5692139, wiki:"20220416-tre_faggi-171.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.8818595, lng:9.6473862, wiki:"20220417-cantiglio-008.jpg", hash:"a/ae" },
    { kind:"drinking", lat:45.9034064, lng:9.6369382, wiki:"20220418-cancervo-014.jpg", hash:"7/79" },
    { kind:"spring", lat:45.9104756, lng:9.6360335, wiki:"20220418-cancervo-020.jpg", hash:"b/bf" },
    { kind:"drinking", lat:45.7082317, lng:9.6398197 },
    { kind:"drinking", lat:45.7134136, lng:9.6082926 },
    { kind:"drinking", lat:45.8463854, lng:9.5174429, wiki:"20220430-coegia-094.jpg", hash:"e/ed" },
    { kind:"drinking", lat:45.8643249, lng:9.3943563 },
    { kind:"drinking", lat:45.721314, lng:9.9662043 },
    { kind:"drinking", lat:46.0035564, lng:10.1088791 },
    { kind:"drinking", lat:45.5224359, lng:9.5757508 },
    { kind:"drinking", lat:45.5135419, lng:9.5940544 },
    { kind:"drinking", lat:45.7493925, lng:9.9059939, wiki:"20220515-cesuli-184.jpg", hash:"1/1f" },
    { kind:"drinking", lat:45.8752559, lng:9.8069719 },
    { kind:"drinking", lat:45.7800968, lng:9.4582763 },
    { kind:"drinking", lat:45.7308753, lng:9.9386384, wiki:"20220528-sfermo_torrezzo-047.jpg", hash:"d/d3" },
    { kind:"drinking", lat:45.821433, lng:10.0217553, wiki:"20220602-colombina-310.jpg", hash:"a/a3" },
    { kind:"drinking", lat:45.8214421, lng:10.0226765, wiki:"20220602-colombina-312.jpg", hash:"9/9e" },
    { kind:"drinking", lat:45.8267596, lng:10.0195824, wiki:"20220602-colombina-015.jpg", hash:"7/71" },
    { kind:"spring", lat:45.8437667, lng:10.0021469, wiki:"20220602-colombina-031.jpg", hash:"c/cb" },
    { kind:"drinking", lat:45.8590223, lng:9.99459, wiki:"20220602-colombina-040.jpg", hash:"7/71" },
    { kind:"drinking", lat:45.8801116, lng:9.9898889, wiki:"20220602-colombina-061.jpg", hash:"b/b9" },
    { kind:"drinking", lat:45.8817167, lng:9.9899888, wiki:"20220602-colombina-067.jpg", hash:"3/30" },
    { kind:"drinking", lat:45.8828434, lng:9.9905339, wiki:"20220602-colombina-070.jpg", hash:"7/78" },
    { kind:"drinking", lat:45.810885, lng:10.0648261, wiki:"20220602-colombina-306.jpg", hash:"a/a3" },
    { kind:"drinking", lat:45.8307712, lng:9.5439512, wiki:"20220605-corna-008.jpg", hash:"6/69" },
    { kind:"drinking", lat:45.8310743, lng:9.7374969, wiki:"20230909-costa_serina-102.jpg", hash:"7/72" },
    { kind:"drinking", lat:45.7274153, lng:9.910716, wiki:"20220604-sfermo_zandobbio-010.jpg", hash:"8/80" },
    { kind:"drinking", lat:45.6856993, lng:9.8544704, wiki:"20220604-sfermo_zandobbio-169.jpg", hash:"6/60" },
    { kind:"drinking", lat:45.6830147, lng:9.8536638, wiki:"20220604-sfermo_zandobbio-170.jpg", hash:"d/d5" },
    { kind:"drinking", lat:45.6799877, lng:9.5807714 },
    { kind:"drinking", lat:45.9209774, lng:10.0484175 },
    { kind:"drinking", lat:45.6940761, lng:9.8798684, wiki:"20220606-zandobbio_redo-024.jpg", hash:"1/18" },
    { kind:"drinking", lat:45.7371934, lng:9.7209863 },
    { kind:"drinking", lat:45.5810731, lng:9.6629559 },
    { kind:"drinking", lat:45.8729356, lng:9.5663297 },
    { kind:"drinking", lat:46.0020821, lng:9.8866927 },
    { kind:"drinking", lat:46.0105366, lng:9.6440597, wiki:"20220625-mincucco_doldo-073.jpg", hash:"6/69" },
    { kind:"drinking", lat:45.9886012, lng:9.6326057, wiki:"20220625-mincucco_doldo-101.jpg", hash:"c/c2" },
    { kind:"drinking", lat:45.8130997, lng:9.4811123, wiki:"20220627-nipotini_pertus-043.jpg", hash:"6/6a" },
    { kind:"drinking", lat:45.8779947, lng:9.7008606, wiki:"20231014-explo_dossena-094.jpg", hash:"c/c3" },
    { kind:"drinking", lat:46.018103, lng:9.7757204, wiki:"20220709-longo_selletta_calvi-006.jpg", hash:"b/b1" },
    { kind:"drinking", lat:45.8562817, lng:9.4484845 },
    { kind:"drinking", lat:45.8550956, lng:9.4460714 },
    { kind:"drinking", lat:45.8522548, lng:9.4472918 },
    { kind:"drinking", lat:45.8537416, lng:9.4256483 },
    { kind:"drinking", lat:45.8752868, lng:9.8593696 },
    { kind:"drinking", lat:46.0312041, lng:9.7424719, wiki:"20220716-lemma_tartano_valleve-180.jpg", hash:"4/4b" },
    { kind:"drinking", lat:46.0222443, lng:9.7895168, wiki:"20220821-carona_moro-084.jpg", hash:"0/0e" },
    { kind:"spring", lat:45.9395118, lng:10.0061735 },
    { kind:"drinking", lat:46.0198708, lng:9.7825881, wiki:"20220724-sambuzza-137.jpg", hash:"4/4d" },
    { kind:"drinking", lat:45.8179559, lng:9.5069343, wiki:"20220730-fenil_explo-018.jpg", hash:"1/1c" },
    { kind:"drinking", lat:45.8169321, lng:9.5121013, wiki:"20220730-fenil_explo-022.jpg", hash:"f/f3" },
    { kind:"drinking", lat:45.8338807, lng:9.4885452, wiki:"20220807-valsecca_explo-099.jpg", hash:"0/09" },
    { kind:"drinking", lat:45.8286787, lng:9.5025554, wiki:"20220807-valsecca_explo-050.jpg", hash:"c/cd" },
    { kind:"spring", lat:45.829185, lng:9.4856685, wiki:"20220807-valsecca_explo-105.jpg", hash:"a/a9" },
    { kind:"drinking", lat:45.8319752, lng:9.5116293, wiki:"20220828-rota_explo-062.jpg", hash:"4/48" },
    { kind:"drinking", lat:45.9735609, lng:9.729434 },
    { kind:"drinking", lat:45.9992854, lng:9.7920891, wiki:"20220814-gemelli_212-072.jpg", hash:"b/b3" },
    { kind:"drinking", lat:45.9973706, lng:9.7592048, wiki:"20220814-gemelli_212-256.jpg", hash:"0/0e" },
    { kind:"drinking", lat:46.0008194, lng:9.7600579, wiki:"20220814-gemelli_212-266.jpg", hash:"7/7f" },
    { kind:"drinking", lat:45.9519477, lng:9.7220291, wiki:"20220823-cornacchie-243.jpg", hash:"b/b3" },
    { kind:"drinking", lat:45.9492641, lng:9.7189902 },
    { kind:"drinking", lat:46.0027041, lng:10.0548262 },
    { kind:"drinking", lat:45.7913109, lng:9.9589026 },
    { kind:"drinking", lat:45.7918355, lng:9.9561962 },
    { kind:"drinking", lat:45.7911594, lng:9.9543938 },
    { kind:"drinking", lat:45.7903449, lng:9.950915 },
    { kind:"drinking", lat:45.7901878, lng:9.9505931 },
    { kind:"drinking", lat:45.7856821, lng:9.9443999 },
    { kind:"drinking", lat:45.785569, lng:9.9442832 },
    { kind:"drinking", lat:45.7851649, lng:9.9406891 },
    { kind:"drinking", lat:45.9497953, lng:9.7208349, wiki:"20220823-cornacchie-030.jpg", hash:"f/fa" },
    { kind:"drinking", lat:45.9502412, lng:9.7342028, wiki:"20220823-cornacchie-059.jpg", hash:"e/e8" },
    { kind:"drinking", lat:45.9534172, lng:9.7685283, wiki:"20220823-cornacchie-085.jpg", hash:"8/8b" },
    { kind:"drinking", lat:45.9503783, lng:9.7211852, wiki:"20220823-cornacchie-032.jpg", hash:"4/44" },
    { kind:"spring", lat:45.9576222, lng:9.752065, wiki:"20220823-cornacchie-129.jpg", hash:"a/a1" },
    { kind:"drinking", lat:45.9515949, lng:9.7296406, wiki:"20220824-mezzeno-017.jpg", hash:"6/61" },
    { kind:"drinking", lat:45.9517157, lng:9.7293243, wiki:"20220824-mezzeno-020.jpg", hash:"4/48" },
    { kind:"drinking", lat:45.5963134, lng:9.6491335 },
    { kind:"drinking", lat:45.7030905, lng:9.6652423 },
    { kind:"drinking", lat:45.7032024, lng:9.6672399 },
    { kind:"drinking", lat:45.6140081, lng:9.6622297 },
    { kind:"drinking", lat:45.6067037, lng:9.6636272 },
    { kind:"drinking", lat:45.8349473, lng:9.5085979, wiki:"20220828-rota_explo-047.jpg", hash:"0/0d" },
    { kind:"drinking", lat:45.4811819, lng:9.7848206 },
    { kind:"drinking", lat:45.4820929, lng:9.7862632 },
    { kind:"drinking", lat:45.4844199, lng:9.7840475 },
    { kind:"drinking", lat:45.8724823, lng:9.9663032, wiki:"20250807-san_lucio_2-112.jpg", hash:"8/85" },
    { kind:"drinking", lat:45.8910396, lng:9.9820599 },
    { kind:"drinking", lat:45.93706, lng:9.4819334 },
    { kind:"drinking", lat:45.9483598, lng:9.6730928 },
    { kind:"drinking", lat:45.785785, lng:9.756754, wiki:"20220904-520dh-092.jpg", hash:"8/87" },
    { kind:"drinking", lat:45.7904263, lng:9.7741324, wiki:"20220904-520dh-105.jpg", hash:"5/56" },
    { kind:"drinking", lat:45.8354768, lng:10.0737698 },
    { kind:"drinking", lat:45.8288339, lng:10.0788739 },
    { kind:"drinking", lat:45.8603503, lng:9.4073453 },
    { kind:"drinking", lat:45.774455, lng:10.0415098 },
    { kind:"drinking", lat:45.7738091, lng:10.0395839 },
    { kind:"drinking", lat:45.8212756, lng:10.0784832 },
    { kind:"drinking", lat:45.7946851, lng:9.9772662 },
    { kind:"drinking", lat:45.8101649, lng:10.0169424 },
    { kind:"drinking", lat:45.7950226, lng:9.9836028 },
    { kind:"drinking", lat:45.7779325, lng:9.9434593 },
    { kind:"drinking", lat:45.7894512, lng:10.0253813 },
    { kind:"drinking", lat:45.758832, lng:10.0198592 },
    { kind:"drinking", lat:45.7623357, lng:10.0309633 },
    { kind:"drinking", lat:45.8267517, lng:10.0163407 },
    { kind:"drinking", lat:45.8267813, lng:10.0159019 },
    { kind:"drinking", lat:45.8378898, lng:10.0327007 },
    { kind:"drinking", lat:45.8354083, lng:10.0210174 },
    { kind:"drinking", lat:45.834481, lng:10.019366 },
    { kind:"drinking", lat:45.824468, lng:10.023778 },
    { kind:"drinking", lat:45.8218657, lng:10.0244312 },
    { kind:"drinking", lat:45.7401235, lng:9.5923448, wiki:"20240322-brembo_romanico-145.jpg", hash:"1/19" },
    { kind:"drinking", lat:45.8870651, lng:9.6045806, wiki:"20221002-corno_zuccone_sud-168.jpg", hash:"0/01" },
    { kind:"drinking", lat:45.6822387, lng:9.9565635 },
    { kind:"drinking", lat:45.7521978, lng:9.5349776, wiki:"20221015-linzone-096.jpg", hash:"8/80" },
    { kind:"drinking", lat:45.9084083, lng:10.0360937 },
    { kind:"drinking", lat:45.9076211, lng:10.036723 },
    { kind:"drinking", lat:45.8209651, lng:9.5480609, wiki:"20221028-castagno_ponti-129.jpg", hash:"c/c5" },
    { kind:"drinking", lat:45.8145735, lng:9.5336044, wiki:"20221028-castagno_ponti-179.jpg", hash:"7/75" },
    { kind:"drinking", lat:45.8151667, lng:9.5318719, wiki:"20230120-explo_ubione_584-178.jpg", hash:"9/93" },
    { kind:"drinking", lat:45.8939847, lng:9.7969041, wiki:"20221029-grem-230.jpg", hash:"d/df" },
    { kind:"drinking", lat:45.7878765, lng:9.5886511, wiki:"20221031-anello_contrade-084.jpg", hash:"e/ee" },
    { kind:"drinking", lat:45.9875701, lng:9.6047042 },
    { kind:"drinking", lat:45.8919683, lng:9.7678619, wiki:"20221105-vedra-137.jpg", hash:"d/dd" },
    { kind:"drinking", lat:45.7622213, lng:9.5776635, wiki:"20221106-roncola_comunali-095.jpg", hash:"c/c7" },
    { kind:"drinking", lat:45.8905038, lng:9.7689956, wiki:"20221105-vedra-013.jpg", hash:"7/77" },
    { kind:"drinking", lat:45.8897167, lng:9.7720645, wiki:"20221105-vedra-014.jpg", hash:"d/db" },
    { kind:"drinking", lat:45.7601976, lng:9.7969653 },
    { kind:"drinking", lat:45.7898483, lng:10.0248967 },
    { kind:"drinking", lat:45.6930958, lng:9.6381954 },
    { kind:"spring", lat:45.8581437, lng:9.4868034 },
    { kind:"drinking", lat:45.7710436, lng:9.7916913, wiki:"20221207-rena-100.jpg", hash:"2/28" },
    { kind:"drinking", lat:45.7914756, lng:9.7814112, wiki:"20221208-explo_rena-016.jpg", hash:"3/37" },
    { kind:"drinking", lat:45.8296901, lng:9.5464012, wiki:"20221211-palio_neve_prati-061.jpg", hash:"8/84" },
    { kind:"drinking", lat:45.8637866, lng:9.4008577 },
    { kind:"spring", lat:45.7858985, lng:9.8061463, wiki:"20230114-tribulina_ganda-047.jpg", hash:"a/a5" },
    { kind:"drinking", lat:45.8521615, lng:9.3877739 },
    { kind:"drinking", lat:45.8284636, lng:9.4167969 },
    { kind:"drinking", lat:45.7931652, lng:9.8259461, wiki:"20230114-tribulina_ganda-156.jpg", hash:"3/31" },
    { kind:"drinking", lat:45.5281085, lng:9.7538362 },
    { kind:"drinking", lat:45.8508458, lng:9.8415392, wiki:"20211229-518_bondo-041.jpg", hash:"8/82" },
    { kind:"drinking", lat:45.8693603, lng:9.8323949 },
    { kind:"spring", lat:45.7012518, lng:9.9906411 },
    { kind:"drinking", lat:45.7145586, lng:9.4767435, wiki:"20230205-california_bob_bis-046.jpg", hash:"5/59" },
    { kind:"drinking", lat:45.8820615, lng:9.6507671 },
    { kind:"drinking", lat:45.7403997, lng:9.7124158, wiki:"20230319-birondina_hard-070.jpg", hash:"e/ee" },
    { kind:"drinking", lat:45.7774254, lng:9.623295, wiki:"20230325-canto_alto-036.jpg", hash:"4/48" },
    { kind:"drinking", lat:45.8906949, lng:9.944766 },
    { kind:"drinking", lat:45.8796511, lng:9.7081608, wiki:"2023070916-vaccareggio_valpiana-058.jpg", hash:"3/34" },
    { kind:"drinking", lat:45.7300071, lng:9.4886004, wiki:"20230411-frana_canyon_california_2-027.jpg", hash:"6/69" },
    { kind:"drinking", lat:45.7319971, lng:9.5660735 },
    { kind:"drinking", lat:46.0008449, lng:9.5719794 },
    { kind:"drinking", lat:45.7214973, lng:9.894307 },
    { kind:"drinking", lat:45.7849895, lng:9.6211441, wiki:"20230425-monte_ubiale-118.jpg", hash:"e/e4" },
    { kind:"drinking", lat:45.9674769, lng:9.6084099 },
    { kind:"drinking", lat:45.9669951, lng:9.6112247 },
    { kind:"drinking", lat:45.9166575, lng:10.0556729 },
    { kind:"drinking", lat:45.9725554, lng:9.5470437 },
    { kind:"drinking", lat:45.6615767, lng:9.8510501, wiki:"20230514-zandobbio_giro-108.jpg", hash:"8/8b" },
    { kind:"drinking", lat:45.8708873, lng:9.7289942, wiki:"20230528-sedrina_giro-048.jpg", hash:"f/f8" },
    { kind:"drinking", lat:45.8653406, lng:9.7285853, wiki:"20230528-sedrina_giro-322.jpg", hash:"2/26" },
    { kind:"drinking", lat:45.8953397, lng:9.7744099, wiki:"20230528-sedrina_giro-262.jpg", hash:"b/b3" },
    { kind:"drinking", lat:45.5519299, lng:9.5300417 },
    { kind:"drinking", lat:45.529904, lng:9.7737785 },
    { kind:"drinking", lat:45.5789742, lng:9.6701841 },
    { kind:"drinking", lat:45.8248689, lng:9.7485574, wiki:"20230608-serina_cornalba_giro_redo-138.jpg", hash:"0/02" },
    { kind:"drinking", lat:45.838227, lng:9.7316152, wiki:"20230608-serina_cornalba_giro_redo-219.jpg", hash:"6/65" },
    { kind:"drinking", lat:45.8839532, lng:9.7415085, wiki:"20230611-vaccareggio_mercatorum-011.jpg", hash:"7/79" },
    { kind:"spring", lat:45.8849541, lng:9.7073186, wiki:"20230611-vaccareggio_mercatorum-129.jpg", hash:"5/55" },
    { kind:"drinking", lat:45.8847382, lng:9.7424745, wiki:"20230611-vaccareggio_mercatorum-013.jpg", hash:"7/70" },
    { kind:"drinking", lat:45.6143446, lng:9.5662157 },
    { kind:"drinking", lat:45.8517181, lng:9.5295161, wiki:"20230618-canti_faggi-064.jpg", hash:"6/63" },
    { kind:"drinking", lat:45.8791863, lng:9.7603281, wiki:"20230617-rifugio_alben-021.jpg", hash:"d/dc" },
    { kind:"drinking", lat:45.8506807, lng:9.7342295, wiki:"20230617-rifugio_alben-177.jpg", hash:"b/b5" },
    { kind:"drinking", lat:45.5440623, lng:9.653151 },
    { kind:"drinking", lat:45.8549196, lng:9.7353142, wiki:"20230624-alben_panoramico-009.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.8519295, lng:9.744001, wiki:"20230624-alben_panoramico-123.jpg", hash:"5/5d" },
    { kind:"drinking", lat:45.8541812, lng:9.5000543, wiki:"20231129-pramagnone-007.jpg", hash:"e/e2" },
    { kind:"drinking", lat:45.869658, lng:9.8922824 },
    { kind:"drinking", lat:45.8831017, lng:9.7762511 },
    { kind:"drinking", lat:45.827847, lng:9.7451854, wiki:"20230709-suchello-109.jpg", hash:"f/f7" },
    { kind:"drinking", lat:45.8198706, lng:9.8338396 },
    { kind:"drinking", lat:45.5106955, lng:9.7009914 },
    { kind:"drinking", lat:45.6293948, lng:9.8461529 },
    { kind:"drinking", lat:45.447094, lng:9.8772791 },
    { kind:"drinking", lat:45.8663874, lng:9.728512, wiki:"2023070916-vaccareggio_valpiana-148.jpg", hash:"e/e4" },
    { kind:"drinking", lat:45.6509145, lng:9.6529323 },
    { kind:"drinking", lat:45.6621889, lng:9.7814552 },
    { kind:"drinking", lat:45.622412, lng:9.7994827 },
    { kind:"drinking", lat:45.5344217, lng:9.7726964 },
    { kind:"drinking", lat:45.4977516, lng:9.7655518 },
    { kind:"drinking", lat:45.8618788, lng:9.8430122 },
    { kind:"drinking", lat:45.6923546, lng:9.5705053 },
    { kind:"drinking", lat:45.4966656, lng:9.6038119 },
    { kind:"drinking", lat:45.448804, lng:9.8523644 },
    { kind:"drinking", lat:45.8681369, lng:9.4012497 },
    { kind:"drinking", lat:45.8198335, lng:9.4503471 },
    { kind:"drinking", lat:45.8254151, lng:10.0969703 },
    { kind:"spring", lat:45.8892445, lng:9.7012671, wiki:"20230812-vaccareggio_portiera-208.jpg", hash:"a/a7" },
    { kind:"drinking", lat:45.8910936, lng:9.6740016, wiki:"20230812-vaccareggio_portiera-292.jpg", hash:"9/9f" },
    { kind:"drinking", lat:45.8967846, lng:9.6573852, wiki:"20230812-vaccareggio_portiera-342.jpg", hash:"2/2a" },
    { kind:"drinking", lat:45.6164445, lng:9.759554 },
    { kind:"drinking", lat:45.5452424, lng:9.6463178 },
    { kind:"drinking", lat:45.4823013, lng:9.5593329 },
    { kind:"drinking", lat:45.9083563, lng:10.034394 },
    { kind:"drinking", lat:45.8539648, lng:9.6950347, wiki:"20230814-passato-038.jpg", hash:"9/91" },
    { kind:"drinking", lat:45.9780024, lng:9.5340996 },
    { kind:"drinking", lat:46.0357247, lng:10.0054822 },
    { kind:"drinking", lat:46.0316361, lng:10.0024293 },
    { kind:"drinking", lat:45.6371046, lng:9.5545549 },
    { kind:"drinking", lat:45.6363501, lng:9.5523924 },
    { kind:"drinking", lat:45.6038916, lng:9.5562089 },
    { kind:"drinking", lat:45.8156072, lng:9.5203181, wiki:"20230818-missing_image-021.jpg", hash:"3/30" },
    { kind:"drinking", lat:45.6804729, lng:10.0150774 },
    { kind:"drinking", lat:45.6795737, lng:10.0171769 },
    { kind:"drinking", lat:46.0324628, lng:10.0050493 },
    { kind:"drinking", lat:45.8581117, lng:9.3855735 },
    { kind:"drinking", lat:45.8908913, lng:9.9501058 },
    { kind:"drinking", lat:45.8203427, lng:9.7970223, wiki:"20230826-poieto_516-103.jpg", hash:"8/81" },
    { kind:"drinking", lat:45.9701977, lng:9.9595755 },
    { kind:"drinking", lat:45.8642117, lng:9.3856589 },
    { kind:"drinking", lat:45.8131863, lng:9.8144609 },
    { kind:"drinking", lat:45.8283107, lng:9.4296343 },
    { kind:"drinking", lat:46.0486919, lng:9.6755185, wiki:"20250831-lemma_terzera-108.jpg", hash:"f/f2" },
    { kind:"drinking", lat:45.8652838, lng:9.3857625 },
    { kind:"drinking", lat:45.7353924, lng:9.6345352 },
    { kind:"drinking", lat:45.735218, lng:9.6348995 },
    { kind:"drinking", lat:45.5322454, lng:9.7452237 },
    { kind:"drinking", lat:45.8173507, lng:9.7617856, wiki:"20230909-costa_serina-164.jpg", hash:"6/68" },
    { kind:"drinking", lat:45.8235325, lng:9.7198392, wiki:"20230909-costa_serina-006.jpg", hash:"0/0e" },
    { kind:"drinking", lat:45.7592088, lng:9.7934931 },
    { kind:"drinking", lat:45.7593157, lng:9.7929053 },
    { kind:"spring", lat:45.8006693, lng:9.7565207, wiki:"20230916-explo_selvino-062.jpg", hash:"8/82" },
    { kind:"drinking", lat:45.8004678, lng:9.747495, wiki:"20230916-explo_selvino-242.jpg", hash:"a/a9" },
    { kind:"drinking", lat:45.8015905, lng:9.7499478, wiki:"20230916-explo_selvino-041.jpg", hash:"9/9c" },
    { kind:"drinking", lat:45.7947402, lng:9.7705011, wiki:"20230917-trafficanti-042.jpg", hash:"9/9d" },
    { kind:"drinking", lat:46.0025254, lng:10.1281846 },
    { kind:"drinking", lat:46.0074408, lng:10.1580483 },
    { kind:"drinking", lat:46.0096847, lng:10.1523647 },
    { kind:"drinking", lat:45.8772059, lng:9.6669424, wiki:"20230923-explo_giovanni_bianco-131.jpg", hash:"a/a7" },
    { kind:"drinking", lat:45.8719238, lng:9.6508937, wiki:"20230923-explo_giovanni_bianco-005.jpg", hash:"f/f1" },
    { kind:"drinking", lat:45.8723807, lng:9.6580598, wiki:"20230923-explo_giovanni_bianco-082.jpg", hash:"c/cc" },
    { kind:"drinking", lat:45.8647395, lng:9.6716608, wiki:"20230923-explo_giovanni_bianco-094.jpg", hash:"d/d8" },
    { kind:"drinking", lat:45.7402101, lng:9.7487634 },
    { kind:"drinking", lat:45.7471722, lng:9.7479556 },
    { kind:"drinking", lat:45.8290223, lng:9.7238598, wiki:"20230927-explo_costa_serina-008.jpg", hash:"1/13" },
    { kind:"drinking", lat:45.5216718, lng:9.6410405 },
    { kind:"drinking", lat:45.9680117, lng:9.7355007, wiki:"20230929-pusdosso_explo-146.jpg", hash:"6/6e" },
    { kind:"drinking", lat:45.9713197, lng:9.724512, wiki:"20230929-pusdosso_explo-200.jpg", hash:"b/b6" },
    { kind:"drinking", lat:45.9676227, lng:9.7371069, wiki:"20230929-pusdosso_explo-305.jpg", hash:"9/99" },
    { kind:"spring", lat:45.9385023, lng:9.5632162 },
    { kind:"drinking", lat:45.832614, lng:9.7393671, wiki:"20231004-explo_costa_serina-114.jpg", hash:"f/f7" },
    { kind:"drinking", lat:45.8445091, lng:9.7435605, wiki:"20231004-explo_costa_serina-026.jpg", hash:"8/87" },
    { kind:"drinking", lat:45.8456939, lng:9.7486561, wiki:"20231004-explo_costa_serina-040.jpg", hash:"5/52" },
    { kind:"drinking", lat:45.8232028, lng:9.7177554, wiki:"20231004-explo_costa_serina-163.jpg", hash:"3/3a" },
    { kind:"drinking", lat:45.7928317, lng:9.7697527 },
    { kind:"drinking", lat:45.884866, lng:9.6636803, wiki:"20231008-vaccareggio_bianco-122.jpg", hash:"0/01" },
    { kind:"drinking", lat:45.8162101, lng:9.5647926 },
    { kind:"drinking", lat:45.881643, lng:9.693689, wiki:"20231014-explo_dossena-071.jpg", hash:"9/98" },
    { kind:"drinking", lat:45.8701161, lng:9.669712, wiki:"20231014-explo_dossena-044.jpg", hash:"5/5a" },
    { kind:"drinking", lat:45.8672847, lng:9.6694337, wiki:"20231014-explo_dossena-048.jpg", hash:"f/f1" },
    { kind:"drinking", lat:45.8672882, lng:9.6702033, wiki:"20231014-explo_dossena-051.jpg", hash:"2/2d" },
    { kind:"drinking", lat:45.8778304, lng:9.6804424, wiki:"20231014-explo_dossena-113.jpg", hash:"f/f3" },
    { kind:"drinking", lat:45.8719767, lng:9.6535892, wiki:"20231014-explo_dossena-142.jpg", hash:"d/d6" },
    { kind:"drinking", lat:46.0107761, lng:9.6004396, wiki:"20220625-mincucco_doldo-011.jpg", hash:"3/33" },
    { kind:"drinking", lat:45.8106183, lng:9.8476213 },
    { kind:"drinking", lat:45.8122538, lng:9.8416337 },
    { kind:"drinking", lat:45.8115886, lng:9.8509345 },
    { kind:"drinking", lat:45.716549, lng:9.5155255 },
    { kind:"drinking", lat:45.6841088, lng:9.66074 },
    { kind:"drinking", lat:45.6896717, lng:9.6186315 },
    { kind:"drinking", lat:45.875254, lng:9.7000772, wiki:"20231027-explo_dossena-018.jpg", hash:"b/b0" },
    { kind:"drinking", lat:45.613544, lng:9.725647 },
    { kind:"drinking", lat:45.4792306, lng:9.8676157 },
    { kind:"drinking", lat:45.7908568, lng:9.6697769, wiki:"20231108-giro_castello-005.jpg", hash:"0/01" },
    { kind:"drinking", lat:45.9701553, lng:9.9506921 },
    { kind:"drinking", lat:45.9703154, lng:9.9477263 },
    { kind:"drinking", lat:45.9703865, lng:9.9486022 },
    { kind:"drinking", lat:45.8056353, lng:9.7353799, wiki:"20231115-sambusita_explo-099.jpg", hash:"9/94" },
    { kind:"drinking", lat:45.8053128, lng:9.7200835, wiki:"20231115-sambusita_explo-084.jpg", hash:"1/17" },
    { kind:"drinking", lat:45.8455523, lng:9.5083746, wiki:"20231118-porta_rota-018.jpg", hash:"2/20" },
    { kind:"drinking", lat:45.7486362, lng:9.5808807 },
    { kind:"drinking", lat:45.698614, lng:9.6735271 },
    { kind:"drinking", lat:45.7035317, lng:9.6636724 },
    { kind:"drinking", lat:45.8865364, lng:10.0184735 },
    { kind:"drinking", lat:45.8468066, lng:9.4910714, wiki:"20231129-pramagnone-039.jpg", hash:"7/78" },
    { kind:"drinking", lat:45.8027019, lng:10.0604318 },
    { kind:"drinking", lat:45.8520993, lng:9.5292987, wiki:"20231210-canti_neve-104.jpg", hash:"9/9d" },
    { kind:"drinking", lat:45.7896143, lng:9.4815513 },
    { kind:"drinking", lat:45.9212483, lng:9.5010455 },
    { kind:"drinking", lat:45.9231664, lng:9.5059559 },
    { kind:"drinking", lat:45.8409482, lng:9.5121568, wiki:"20240112-explo_rota-075.jpg", hash:"5/58" },
    { kind:"drinking", lat:45.8418465, lng:9.5151984, wiki:"20240112-explo_rota-088.jpg", hash:"7/76" },
    { kind:"drinking", lat:45.8095895, lng:9.6347648, wiki:"20240120-corno_zucco-109.jpg", hash:"e/e2" },
    { kind:"drinking", lat:45.6088851, lng:9.6206328 },
    { kind:"drinking", lat:46.0487612, lng:10.0272565 },
    { kind:"drinking", lat:46.0100173, lng:9.6667198, wiki:"20240217-san_marco_neve-012.jpg", hash:"b/bd" },
    { kind:"drinking", lat:46.0125613, lng:9.6644655, wiki:"20240217-san_marco_neve-026.jpg", hash:"a/a9" },
    { kind:"drinking", lat:46.0111106, lng:9.6676671, wiki:"20240217-san_marco_neve-099.jpg", hash:"a/ac" },
    { kind:"drinking", lat:45.7333782, lng:9.6053252, wiki:"20240315-brembo-008.jpg", hash:"0/04" },
    { kind:"drinking", lat:45.7371559, lng:9.5978765, wiki:"20240315-brembo-120.jpg", hash:"e/ee" },
    { kind:"drinking", lat:45.7894027, lng:9.9358041 },
    { kind:"drinking", lat:45.7373498, lng:9.5846781, wiki:"20240322-brembo_romanico-309.jpg", hash:"0/01" },
    { kind:"drinking", lat:45.4832118, lng:9.7268952 },
    { kind:"drinking", lat:45.8121319, lng:10.0183898 },
    { kind:"drinking", lat:45.5968338, lng:9.7020247 },
    { kind:"drinking", lat:45.5984542, lng:9.6926362 },
    { kind:"drinking", lat:45.5991874, lng:9.6941212 },
    { kind:"drinking", lat:45.6006389, lng:9.6861565 },
    { kind:"drinking", lat:45.5969036, lng:9.699836 },
    { kind:"drinking", lat:45.6135087, lng:9.7268502 },
    { kind:"drinking", lat:45.8004943, lng:9.7172117, wiki:"20240414-poscante_back-006.jpg", hash:"6/65" },
    { kind:"drinking", lat:45.7920267, lng:9.6696488, wiki:"20240421-filaressa_fail-084.jpg", hash:"1/1e" },
    { kind:"drinking", lat:45.592379, lng:9.762283 },
    { kind:"drinking", lat:45.6009327, lng:9.7034679 },
    { kind:"drinking", lat:45.7591928, lng:9.7615738 },
    { kind:"drinking", lat:45.8397171, lng:9.5964285 },
    { kind:"drinking", lat:45.8315393, lng:9.631927 },
    { kind:"drinking", lat:45.5985249, lng:9.6964079 },
    { kind:"drinking", lat:45.873583, lng:9.8867781 },
    { kind:"drinking", lat:45.7463963, lng:9.6189301 },
    { kind:"drinking", lat:45.5236273, lng:9.6427105 },
    { kind:"drinking", lat:45.5861502, lng:9.6821952 },
    { kind:"drinking", lat:45.5869743, lng:9.682036 },
    { kind:"drinking", lat:45.7420699, lng:9.7604884, wiki:"20240526-trevasco_est-069.jpg", hash:"a/a9" },
    { kind:"drinking", lat:45.8070101, lng:9.4701408 },
    { kind:"drinking", lat:45.8139298, lng:9.4701565 },
    { kind:"drinking", lat:46.0064471, lng:10.1513576 },
    { kind:"drinking", lat:46.0019921, lng:10.0888331 },
    { kind:"drinking", lat:45.8558262, lng:9.4138719 },
    { kind:"drinking", lat:45.8542798, lng:9.4138254 },
    { kind:"drinking", lat:45.8102511, lng:9.9006438 },
    { kind:"drinking", lat:45.79198, lng:9.868204, wiki:"20250221-bo_croce_beio-068.jpg", hash:"5/59" },
    { kind:"drinking", lat:45.8007749, lng:9.9000438 },
    { kind:"drinking", lat:45.8677376, lng:10.1303033 },
    { kind:"drinking", lat:45.7188948, lng:9.5473416 },
    { kind:"drinking", lat:45.8319282, lng:9.4066914 },
    { kind:"drinking", lat:45.878726, lng:9.7326145 },
    { kind:"drinking", lat:45.7872777, lng:9.6553897 },
    { kind:"drinking", lat:45.6821012, lng:9.6567142 },
    { kind:"drinking", lat:45.7877786, lng:9.6606172, wiki:"20240616-canto_alto_back-005.jpg", hash:"6/6b" },
    { kind:"drinking", lat:45.7853048, lng:9.6440892, wiki:"20240616-canto_alto_back-017.jpg", hash:"6/6a" },
    { kind:"drinking", lat:45.7608389, lng:9.7913008 },
    { kind:"drinking", lat:45.6345548, lng:9.5535724 },
    { kind:"drinking", lat:45.9913786, lng:9.6880058 },
    { kind:"drinking", lat:45.831416, lng:9.7181347, wiki:"20240622-ambria_spino-064.jpg", hash:"0/03" },
    { kind:"drinking", lat:45.6787298, lng:9.6560444 },
    { kind:"drinking", lat:45.7400683, lng:9.4746477 },
    { kind:"drinking", lat:45.8149279, lng:9.8719119 },
    { kind:"drinking", lat:45.6190722, lng:9.7957714 },
    { kind:"drinking", lat:45.801907, lng:9.8367074 },
    { kind:"drinking", lat:45.799601, lng:9.8377749 },
    { kind:"drinking", lat:45.8037014, lng:9.8393722 },
    { kind:"drinking", lat:46.0236274, lng:10.2272422 },
    { kind:"drinking", lat:45.5526597, lng:9.8250821 },
    { kind:"drinking", lat:45.5344737, lng:9.7912128 },
    { kind:"drinking", lat:45.6749738, lng:9.7616513 },
    { kind:"drinking", lat:45.7985561, lng:9.8461001 },
    { kind:"drinking", lat:45.602378, lng:9.6169487 },
    { kind:"drinking", lat:45.71296, lng:9.4663958 },
    { kind:"drinking", lat:45.6344036, lng:9.5534404 },
    { kind:"spring", lat:45.783359, lng:9.6011144, wiki:"20240720-fiori-027.jpg", hash:"c/c0" },
    { kind:"drinking", lat:45.6170938, lng:9.5215346 },
    { kind:"drinking", lat:45.6828175, lng:10.0273061 },
    { kind:"drinking", lat:45.9750811, lng:10.0832779 },
    { kind:"drinking", lat:45.9702177, lng:10.0790528 },
    { kind:"drinking", lat:45.9745654, lng:10.0717213 },
    { kind:"drinking", lat:45.9751095, lng:10.0774104 },
    { kind:"drinking", lat:45.7732617, lng:10.0390507 },
    { kind:"drinking", lat:45.7923407, lng:9.9417088 },
    { kind:"drinking", lat:45.6818177, lng:10.0256154 },
    { kind:"drinking", lat:45.8484069, lng:9.4079183 },
    { kind:"drinking", lat:45.8483714, lng:9.4091735 },
    { kind:"drinking", lat:46.027879, lng:9.7442688 },
    { kind:"drinking", lat:46.0029952, lng:9.7600962 },
    { kind:"drinking", lat:45.7643086, lng:9.9298446 },
    { kind:"drinking", lat:45.7804765, lng:9.8241368 },
    { kind:"drinking", lat:46.0013757, lng:9.7602973 },
    { kind:"drinking", lat:45.9157337, lng:9.9246492 },
    { kind:"drinking", lat:45.9623128, lng:9.7854376 },
    { kind:"drinking", lat:45.9126564, lng:10.0713063 },
    { kind:"drinking", lat:45.7847824, lng:9.8249325 },
    { kind:"drinking", lat:45.7963817, lng:9.8413882, wiki:"20250221-bo_croce_beio-088.jpg", hash:"2/2a" },
    { kind:"drinking", lat:45.949052, lng:9.6734415 },
    { kind:"drinking", lat:46.0305827, lng:9.9984036 },
    { kind:"drinking", lat:45.8496941, lng:9.7383216 },
    { kind:"drinking", lat:46.0085005, lng:9.9462308 },
    { kind:"drinking", lat:45.9689338, lng:9.929199 },
    { kind:"drinking", lat:45.5884554, lng:9.7361978 },
    { kind:"drinking", lat:45.980591, lng:10.0924616 },
    { kind:"drinking", lat:45.797787, lng:9.8420251 },
    { kind:"drinking", lat:45.747259, lng:9.7878241, wiki:"20240824-giro_misma-094.jpg", hash:"8/84" },
    { kind:"drinking", lat:45.8083874, lng:9.8328579 },
    { kind:"drinking", lat:45.5846201, lng:9.8405122 },
    { kind:"drinking", lat:46.0515758, lng:9.6626072, wiki:"20250706-balicco-086.jpg", hash:"a/a4" },
    { kind:"drinking", lat:45.7981612, lng:9.8387967 },
    { kind:"drinking", lat:45.7920532, lng:9.6771071 },
    { kind:"drinking", lat:45.5646352, lng:9.6279303 },
    { kind:"drinking", lat:46.0114607, lng:9.5787575 },
    { kind:"drinking", lat:45.8002896, lng:9.8472753 },
    { kind:"drinking", lat:45.7225921, lng:9.6489359 },
    { kind:"drinking", lat:45.6467153, lng:9.5982732 },
    { kind:"drinking", lat:45.4977633, lng:9.6407999 },
    { kind:"drinking", lat:45.6951146, lng:9.705524 },
    { kind:"drinking", lat:45.8002222, lng:9.8455286 },
    { kind:"drinking", lat:45.8317269, lng:9.6613165 },
    { kind:"drinking", lat:45.8710713, lng:9.8037841, wiki:"20241116-frassino-032.jpg", hash:"d/dd" },
    { kind:"drinking", lat:45.8710057, lng:9.8036086, wiki:"20241116-frassino-036.jpg", hash:"c/c8" },
    { kind:"drinking", lat:45.7608379, lng:9.8306944, wiki:"20241122-altino2-052.jpg", hash:"9/9b" },
    { kind:"drinking", lat:45.7639158, lng:9.8297608, wiki:"20241122-altino2-071.jpg", hash:"a/a8" },
    { kind:"drinking", lat:45.9039128, lng:9.863954 },
    { kind:"drinking", lat:45.7186498, lng:9.5483898 },
    { kind:"drinking", lat:45.6872341, lng:9.69151 },
    { kind:"drinking", lat:45.7171725, lng:9.5456498 },
    { kind:"drinking", lat:46.0357582, lng:10.0066848 },
    { kind:"drinking", lat:45.8809084, lng:9.4075113 },
    { kind:"drinking", lat:45.8688477, lng:9.4028877 },
    { kind:"drinking", lat:45.7361842, lng:9.7200854 },
    { kind:"drinking", lat:45.68479, lng:9.7341108 },
    { kind:"drinking", lat:45.6403909, lng:9.6845568 },
    { kind:"drinking", lat:45.6393433, lng:9.6863154 },
    { kind:"drinking", lat:45.6391463, lng:9.6888393 },
    { kind:"drinking", lat:45.792874, lng:9.8812918, wiki:"20250221-bo_croce_beio-065.jpg", hash:"d/df" },
    { kind:"drinking", lat:45.699924, lng:9.7266994 },
    { kind:"drinking", lat:45.6718796, lng:9.951979 },
    { kind:"drinking", lat:45.6355705, lng:9.8141155 },
    { kind:"drinking", lat:45.6403419, lng:9.8133841 },
    { kind:"drinking", lat:45.639485, lng:9.8146585 },
    { kind:"drinking", lat:45.7371794, lng:9.7786572 },
    { kind:"drinking", lat:45.6386018, lng:9.5579011 },
    { kind:"drinking", lat:45.990672, lng:9.60124 },
    { kind:"drinking", lat:45.8094235, lng:10.0974435 },
    { kind:"drinking", lat:45.7010041, lng:9.6627714 },
    { kind:"drinking", lat:46.001817, lng:9.9457913 },
    { kind:"drinking", lat:45.6249471, lng:9.5563006 },
    { kind:"drinking", lat:45.8691566, lng:9.8862879 },
    { kind:"drinking", lat:45.9979674, lng:9.6099654 },
    { kind:"drinking", lat:45.757172, lng:9.7225742, wiki:"20250503-nesa-073.jpg", hash:"d/de" },
    { kind:"drinking", lat:45.832481, lng:9.422728 },
    { kind:"drinking", lat:45.9084555, lng:9.6510099, wiki:"20250531-era-032.jpg", hash:"8/88" },
    { kind:"drinking", lat:45.8948095, lng:9.6495745, wiki:"20250531-era-095.jpg", hash:"d/de" },
    { kind:"drinking", lat:45.7848591, lng:9.7687762 },
    { kind:"drinking", lat:45.8010799, lng:9.843314 },
    { kind:"drinking", lat:45.8022547, lng:9.8395424 },
    { kind:"drinking", lat:45.7948418, lng:9.8360055 },
    { kind:"drinking", lat:45.9368823, lng:9.965834 },
    { kind:"drinking", lat:45.9343421, lng:9.9661845 },
    { kind:"drinking", lat:45.8236014, lng:9.8669732, wiki:"20250608-parafulmine_pizzo_casnigo-108.jpg", hash:"2/21" },
    { kind:"spring", lat:45.8277275, lng:9.8717858, wiki:"20250608-parafulmine_pizzo_casnigo-122.jpg", hash:"7/7b" },
    { kind:"spring", lat:45.8351553, lng:9.8949477, wiki:"20250608-parafulmine_pizzo_casnigo-031.jpg", hash:"a/a8" },
    { kind:"spring", lat:45.9015583, lng:9.6406127, wiki:"20250531-era-042.jpg", hash:"b/b2" },
    { kind:"drinking", lat:45.8980119, lng:9.6408726, wiki:"20250531-era-071.jpg", hash:"9/9c" },
    { kind:"drinking", lat:45.8156469, lng:9.8860642, wiki:"20250615-farno_cirano-008.jpg", hash:"2/23" },
    { kind:"spring", lat:45.8209449, lng:9.9089422, wiki:"20250615-farno_cirano-085.jpg", hash:"e/e4" },
    { kind:"drinking", lat:45.6667161, lng:9.9489932 },
    { kind:"drinking", lat:45.6706812, lng:9.9673286 },
    { kind:"drinking", lat:45.665606, lng:9.9596704 },
    { kind:"drinking", lat:45.6706739, lng:9.9673355 },
    { kind:"drinking", lat:45.8984229, lng:9.880161 },
    { kind:"drinking", lat:45.9104009, lng:9.8812028 },
    { kind:"drinking", lat:45.5865948, lng:9.6810947 },
    { kind:"drinking", lat:45.6924868, lng:9.7045468 },
    { kind:"drinking", lat:45.6897085, lng:9.6978509 },
    { kind:"drinking", lat:45.6887178, lng:9.4678034 },
    { kind:"drinking", lat:45.6883557, lng:9.4666205 },
    { kind:"drinking", lat:45.6936688, lng:9.7052915 },
    { kind:"drinking", lat:45.8070939, lng:9.6610738 },
    { kind:"drinking", lat:45.5416888, lng:9.5541101 },
    { kind:"drinking", lat:46.0509878, lng:9.6576375, wiki:"20250706-balicco-068.jpg", hash:"f/f7" },
    { kind:"drinking", lat:45.6931294, lng:9.7058157 },
    { kind:"drinking", lat:45.6918725, lng:9.7046402 },
    { kind:"drinking", lat:45.9231107, lng:10.0501739 },
    { kind:"drinking", lat:45.7617393, lng:9.4495591, wiki:"Chiesa_dei_Morti_(Cisano_Bergamasco)_01.jpg", hash:"4/41" },
    { kind:"drinking", lat:45.8906534, lng:9.7709864 },
    { kind:"drinking", lat:45.578166, lng:9.7185906 },
    { kind:"drinking", lat:45.5717198, lng:9.5736807 },
    { kind:"drinking", lat:45.5440152, lng:9.6477172 },
    { kind:"drinking", lat:45.6661094, lng:9.6990645 },
    { kind:"drinking", lat:45.8117154, lng:9.9074917 },
    { kind:"drinking", lat:45.5779119, lng:9.7177969 },
    { kind:"drinking", lat:45.5792407, lng:9.7172843 },
    { kind:"drinking", lat:45.823926, lng:9.4190031 },
    { kind:"drinking", lat:45.8193183, lng:9.8584573 },
    { kind:"drinking", lat:45.7067366, lng:9.6551025 },
    { kind:"drinking", lat:45.6047065, lng:9.5387683 },
    { kind:"drinking", lat:45.581325, lng:9.7198044 },
    { kind:"drinking", lat:45.6718051, lng:9.6434069 },
    { kind:"drinking", lat:45.5812535, lng:9.7186818 },
    { kind:"drinking", lat:45.7382387, lng:9.6096535 },
    { kind:"drinking", lat:46.0446647, lng:10.0208964 },
    { kind:"drinking", lat:45.6075193, lng:9.6291532 },
    { kind:"drinking", lat:45.8921886, lng:9.519558 },
    { kind:"drinking", lat:46.0455121, lng:9.7498077 },
    { kind:"drinking", lat:45.5845594, lng:9.716416 },
    { kind:"drinking", lat:46.0436738, lng:9.6757093, wiki:"20250812-forcella_rossa-083.jpg", hash:"6/6e" },
    { kind:"drinking", lat:46.0235439, lng:10.0316523 },
    { kind:"drinking", lat:46.02394, lng:10.014905 },
    { kind:"drinking", lat:46.0085374, lng:10.1607372 },
    { kind:"drinking", lat:45.9008848, lng:9.4957212 },
    { kind:"drinking", lat:45.6920832, lng:9.6433634 },
    { kind:"drinking", lat:45.8687975, lng:9.9648409, wiki:"20250823-sandrera2-010.jpg", hash:"1/1d" },
    { kind:"drinking", lat:45.7505071, lng:9.613199 },
    { kind:"drinking", lat:46.0450438, lng:9.6780354, wiki:"20250812-forcella_rossa-080.jpg", hash:"f/f5" },
    { kind:"drinking", lat:46.0510773, lng:9.6775836, wiki:"20250812-forcella_rossa-033.jpg", hash:"7/79" },
    { kind:"drinking", lat:45.8925908, lng:9.9877097 },
    { kind:"drinking", lat:45.5796817, lng:9.7107104 },
    { kind:"drinking", lat:46.0410514, lng:9.6691147, wiki:"20250831-lemma_terzera-119.jpg", hash:"3/31" },
];
/*
 * MTB Bergamo (c) by Andrea Mazzoleni 2022
 *
 * MTB Bergamo is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * You should have received a copy of the license along with this
 * work. If not, see <http://creativecommons.org/licenses/by-sa/4.0/>.
 */

var WEB = 'https://www.mtbbergamo.it/';
var ARCHIVE = 'https://amadvance.github.io/mtbbergamo/www/';

/*
 * Allow cross-domain download
 *
 * https://stackoverflow.com/questions/49474775/chrome-65-blocks-cross-origin-a-download-client-side-workaround-to-force-down
 *
 * At present disable as it doesn't work on Android.
 * The files gets renamed to .txt in Firefox, or blob:xxxxxxxxxxxxxx in Chrome.
 *
 * Note that instead it's working correctly on PC, from Firefox/Chrome/Edge.
 */
function force_download(blob, filename) {
  var a = document.createElement('a');
  a.href = blob;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function trigger_download(url) {
  filename = url.split('\\').pop().split('/').pop();

  fetch(url, {
      headers: new Headers({
        'Origin': location.origin
      }),
      mode: 'cors'
    })
    .then(response => response.blob())
    .then(blob => {
      let blobUrl = window.URL.createObjectURL(new Blob([blob], {type: "application/gpx+xml"}));
      force_download(blobUrl, filename);
    })
    .catch(e => console.error(e));
}

function _merge_fields(a, b) {
	var _ = {};
	for (var attr in a) { _[attr] = a[attr]; }
	for (var attr in b) { _[attr] = b[attr]; }
	return _;
}

function get_track_name(index)
{
	return TRACKS[index].name;
}

function get_track_gpx(index)
{
	var url = ARCHIVE + 'gpx/' + TRACKS[index].file;

	return url;
}

function get_track_elevation(index)
{
	if (TRACKS[index].kind == 'trek')
		return TRACKS[index].elevation_gain;

	if (TRACKS[index].kind == 'up')
		return TRACKS[index].elevation_gain;

	if (!('link' in TRACKS[index]))
		return TRACKS[index].elevation_loss;

	// search for a up trak, it must be only one
	var down_index = -1;
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].kind != 'up')
			continue;

		if (!('link' in TRACKS[i]))
			continue;

		if (TRACKS[i].link == TRACKS[index].link) {
			if (down_index == -1) {
				down_index = i;
			} else {
				down_index = -1;
				break;
			}
		}
	}
	if (down_index < 0)
		return TRACKS[index].elevation_loss;
	else
		return TRACKS[down_index].elevation_loss + TRACKS[index].elevation_loss;
}

function get_track_anchor_blob(index, text)
{
	var gpx = get_track_gpx(index);

	return "<a href=\"" + get_track_gpx(index) + "\" onclick=\"trigger_download('" + gpx + "'); return false;\">" + text + "</a>";
}

function get_track_anchor(index, text)
{
	return get_track_anchor_blob(index, text);
}

function get_shademap_anchor(index)
{
	return "<span title=\"Esposizione solare della traccia a seconda dell'ora e del giorno.\nDal sito shademap.app\"><a href=\"https://shademap.app/#gpx=" + ARCHIVE + "redux/" + TRACKS[index].file + "\"><img src=\"" + ARCHIVE + "img/shademap.png\" class=\"leaflet-slope-img\" width=24 height=24></a></span>";
}

function get_track_vote(index)
{
	if (index == -1)
		return "";

	if (TRACKS[index].vote == 0)
		return "";

	if (TRACKS[index].vote == 5)
		return "Eccellente";
	if (TRACKS[index].vote == 4)
		return "Ottimo";
	if (TRACKS[index].vote == 3)
		return "Buono";
	if (TRACKS[index].vote == 2)
		return "Discreto";
	if (TRACKS[index].vote == 1)
		return "Scarso";
	if (TRACKS[index].vote == 0)
		return "Sconsigliato";

	return "";
}

function get_track_rate(index)
{
	if (index == -1)
		return "";

	if (TRACKS[index].rate == 0 && TRACKS[index].rate_max == 0)
		return "";

	return "S" + TRACKS[index].rate.toString();
}

function get_track_rate_max(index)
{
	if (index == -1)
		return "";

	rate = "";

	if (TRACKS[index].rate_max != 0)
		rate = " (massima S" + TRACKS[index].rate_max.toString() + ")";

	return rate;
}

function get_track_cycle(index)
{
	if (index == -1)
		return "";

	if (typeof TRACKS[index].cycle === 'string')
		return TRACKS[index].cycle;

	if (TRACKS[index].cycle == 0)
		return "";

	if (TRACKS[index].cycle == 1)
		return "1 minuto";

	return TRACKS[index].cycle.toString() + " minuti";
}

function create_map(id) {
	var mymap = L.map(id, { fullscreenControl: true } );

	// Create the renderer to use for hotlines
	// To have multiple tracks clickable on the same map only one renderer for map must be used
	// To support multiple map on the same page, each map should have its renderer
	mymap.hotline_renderer = L.hotline_create_new_renderer();

	var myscale = new L.control.scale({ metric: true, imperial: false });

	myscale.addTo(mymap);

	return mymap;
}

var ZONE_TITLE = "<div class='maptitle'>Per informazioni clicca sul percorso colorato nella mappa</div>"
var TRACK_TITLE = "<div class='maptitle'>Per informazioni clicca sul percorso colorato nella mappa</div>"

function create_map_zone(id) {
	var mymap = create_map(id);

	document.getElementById(id).insertAdjacentHTML('beforebegin', ZONE_TITLE);

	return mymap;
}

function create_map_track(id) {
	var mymap = create_map(id);

	document.getElementById(id).insertAdjacentHTML('beforebegin', TRACK_TITLE);

	var myimage = L.control.custom({
		position: 'bottomleft',
		content : '<img src="' + ARCHIVE + 'img/slope.png" class="leaflet-slope-img" id="demoImage">',
		classes : '',
		style   :
		{
			margin: '0',
			padding: '0',
			background: '0',
			border: '0'
		},
	});

	myimage.addTo(mymap);

	return mymap;
}

// create charging markers
function create_charging(map, control)
{
	var ChargingIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 15],
		popupAnchor:  [-3, -20]
	}
	});

	var chargingIcon = new ChargingIcon({iconUrl: ARCHIVE + 'img/charging-icon.png'});

	// Create a group to hold all markers
	var chargingLayer = L.layerGroup();

	for (var i = 0; i < CHARGING.length; i++) {
		var p = CHARGING[i];
		L.marker([p.lat, p.lng], {icon: chargingIcon}).addTo(chargingLayer).bindPopup("Ricarica E-Bike " + p.brand);
	}

	// Add to layer control so user can toggle it
	control.addOverlay(chargingLayer, "Ricariche E-Bike");

	return chargingLayer;
}

// create drinking markers
function create_drinking(map, control)
{
	var DrinkingIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 16],
		popupAnchor:  [-3, -20]
	}
	});

	var SpringIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 16],
		popupAnchor:  [-3, -20]
	}
	});

	var drinkingIcon = new DrinkingIcon({iconUrl: ARCHIVE + 'img/drinking-icon.png'});
	var springIcon = new SpringIcon({iconUrl: ARCHIVE + 'img/spring-icon.png'});

	// Create a group to hold all markers
	var drinkingLayer = L.layerGroup();

	for (var i = 0; i < DRINKING.length; i++) {
		var p = DRINKING[i];
		if (p.kind == "drinking") {
			p_msg = "Punto acqua";
			p_icon = drinkingIcon;
		} else {
			p_msg = "Sorgente";
			p_icon = springIcon;
		}
		if ("wiki" in p)
			p_msg += ` <a href="https://commons.wikimedia.org/wiki/File:${p.wiki}">con foto<br><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/${p.hash}/${p.wiki}/320px-${p.wiki}"></a>`;
		L.marker([p.lat, p.lng], {icon: p_icon}).addTo(drinkingLayer).bindPopup(p_msg);
	}

	// Add to layer control so user can toggle it
	control.addOverlay(drinkingLayer, "Punti acqua");

	return drinkingLayer;
}


function create_waymarkedtrails(map, control) {
	var myhiking = L.tileLayer('https://tile.waymarkedtrails.org/{id}/{z}/{x}/{y}.png', {
		id: 'hiking',
		pointable: true,
		attribution: '&copy; <a href="http://waymarkedtrails.org">Sarah Hoffmann</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
	});

	control.addOverlay(myhiking, "Sentieri CAI e Comunali");

	return myhiking;
}

function create_base(map, control) {
	// More layers at https://leaflet-extras.github.io/leaflet-providers/preview/

	var CyclOSM = new L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://www.cyclosm.org/">CyclOSM</a> | <a href="https://www.cyclosm.org/legend.html" title="Legenda dei simboli grafici">Legenda</a>'
	});

	// CyclOSM.addTo(map);  // add it to make the default

	control.addBaseLayer(CyclOSM, "CyclOSM");

	var Tracestrack = L.tileLayer('https://tile.tracestrack.com/topo_it/{z}/{x}/{y}.png?key=8b3409d2713e8014e7ebe376a7a19a20', {
		maxZoom: 17,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | &copy; <a href="https://www.tracestrack.com/">Tracestrack</a>)'
	});

	control.addBaseLayer(Tracestrack, "Tracestrack");

	var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
	});

	control.addBaseLayer(OpenTopoMap, "OpenTopoMap");

	var Thunderforest_OpenCycleMap = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}', {
		attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		apikey: 'b9a5e78a27a644dbbb109bc904b8919c',
		maxZoom: 21
	});

	/*
	 * Thunderforest has a quota of 150.000 requests per month, but at 2023, the site requires about 20.000 per day,
	 * then it cannot be used.
	 */

	control.addBaseLayer(Thunderforest_OpenCycleMap, "OpenCycleMap");

	var Thunderforest_Outdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
		attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		apikey: 'b9a5e78a27a644dbbb109bc904b8919c',
		maxZoom: 21
	});

	control.addBaseLayer(Thunderforest_Outdoors, "Outdoors");

	var OpenStreetMap_Mapnik = new L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	OpenStreetMap_Mapnik.addTo(map);  // add it to make the default

	control.addBaseLayer(OpenStreetMap_Mapnik, "OpenStreetMap");

	var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
		attribution: '&copy; Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
	});

	control.addBaseLayer(Esri_WorldImagery, "Satellite");
}

// map for tracks
function create_control(map) {
	var control = L.control.layers(null, null).addTo(map);

	create_base(map, control);

	// add to map to have it shown by default
	create_waymarkedtrails(map, control).addTo(map);

	// do not add to map to have it hidden by default
	create_charging(map, control);
	create_drinking(map, control);

	var ret = {ct: control, gr: null};

	return ret;
}

// map for climbs
function create_control_climb(map) {
	var control = L.control.layers(null, null).addTo(map);

	create_base(map, control);

	// do not add to map to have it hidden by default
	create_waymarkedtrails(map, control);

	var ret = {ct: control, gr: null};

	return ret;
}

function get_track_group(index)
{
	if (TRACKS[index].kind == "up")
		return 0;
	return TRACKS[index].vote;
}

// map for groups
function create_control_group(map) {
	var control = L.control.layers(null, null).addTo(map);

	create_base(map, control);

	// do not add to map to have it hidden by default
	create_waymarkedtrails(map, control);

	var group = [];

	group[0] = L.layerGroup([]);
	group[1] = L.layerGroup([]);
	group[2] = L.layerGroup([]);
	group[3] = L.layerGroup([]);
	group[4] = L.layerGroup([]);
	group[5] = L.layerGroup([]);

	var group_count = [];
	group_count[0] = 0;
	group_count[1] = 0;
	group_count[2] = 0;
	group_count[3] = 0;
	group_count[4] = 0;
	group_count[5] = 0;

	control.addOverlay(group[5], "Eccellenti");
	control.addOverlay(group[4], "Ottimi");
	control.addOverlay(group[3], "Buoni");
	control.addOverlay(group[2], "Discreti");
	control.addOverlay(group[1], "Sconsigliati");
	control.addOverlay(group[0], "Salite");

	var ret = {ct: control, gr: group, grc: group_count};

	return ret;
}

function create_gpx_info(map, control, gpx, url, index, link)
{
	try {
		// extend the bounds to add the new track
		var bounds = map.getBounds();
		bounds.extend(gpx.getBounds());
		map.fitBounds(bounds);
	} catch (err) {
		// if the bounds are not set, it's the first track
		map.fitBounds(gpx.getBounds());
	}

	var desc;

	name = TRACKS[index].name;

	if (link)
		desc = '<b><a href="' + WEB + link + '.html">' + name + "</a></b>";
	else
		desc = "<b>" + name + "</b>";

	vote = get_track_vote(index);
	if (vote != "") {
		desc += "<br/>";
		desc += "Giudizio: <b>" + vote + "</b>";
	}

	rate = get_track_rate(index);
	if (rate != "") {
		desc += "<br/>";
		desc += "Difficolt\u00E0: <b>" + rate + "</b>" + get_track_rate_max(index);
	}

	cycle = get_track_cycle(index);
	if (cycle != "") {
		desc += "<br/>";
		desc += "Tempo a spinta: <b>" + cycle + "</b>";
	}

	desc += "<br/>";
	desc += "&harr; " + (gpx.get_distance() / 1000).toFixed(1) + " km";

	var elevation_gain = gpx.get_elevation_gain();
	if (elevation_gain > 100) {
		desc += ", &uarr; "+ Math.floor(elevation_gain) + "m";
	}
	var elevation_loss = gpx.get_elevation_loss();
	if (elevation_loss > 100) {
		desc += ", &darr; "+ Math.floor(elevation_loss) + "m";
	}
	var moving_time = gpx.get_moving_time();
	if (moving_time > 1000 * 60) {
		desc += ", "+ Math.floor(moving_time / (1000*60)) + "min";
		if (url.indexOf("Salita") != -1) {
			if (url.indexOf("_EBIKE") != -1)
				desc += " (E-Bike)";
			else
				desc += " (muscolare)";
			desc += ", VAM ";
			desc += Math.floor(elevation_gain / moving_time * (1000*60*60));
			desc += "m/h";
		}
	}

	desc += "<br/>";
	desc += get_track_anchor(index, "Download GPX");
	gpx.bindPopup(desc);

	if (control.gr === null) {
		control.ct.addOverlay(gpx, name);

		gpx.addTo(map);
	} else {
		var group_index = get_track_group(index);
		var group = control.gr[group_index];

		group.addLayer(gpx);

		++control.grc[group_index];

		// don't show sconsigliati
		if (group_index != 1 && control.grc[group_index] == 1)
			group.addTo(map);
	}
}

// create a track for a post with full size icons
function create_track(map, control, url, index, track_options)
{
	var _DEFAULT_TRACK_OPTS = {
		color: 'blue',
		weight: 5,
		slope: false,
		force_renderer: map.hotline_renderer
	};

	// set default options
	track_options = _merge_fields(_DEFAULT_TRACK_OPTS, track_options || {});

	new L.GPX(url,
	{
		async: true,
		marker_options: {
			// half icons
			startIconUrl: ARCHIVE + 'img/pin-icon-start-50.png',
			endIconUrl: ARCHIVE + 'img/pin-icon-end-50.png',
			shadowUrl: ARCHIVE + 'img/pin-shadow-50.png',
			iconSize: [16, 25],
			shadowSize: [25, 25],
			iconAnchor: [8, 22],
			shadowAnchor: [8, 23]
		},
		polyline_options: {
			color: track_options.color,
			weight: track_options.weight,
			slope: track_options.slope,
			force_renderer: map.hotline_renderer
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, index, null);
	});
}

// create a track for a zone post, with link to the specific post
function create_zone_track(map, control, url, index, track_options)
{
	var _DEFAULT_TRACK_OPTS = {
		color: 'blue',
		weight: 5,
		slope: false,
		force_renderer: map.hotline_renderer
	};

	// set default options
	track_options = _merge_fields(_DEFAULT_TRACK_OPTS, track_options || {});

	new L.GPX(url,
	{
		async: true,
		marker_options: {
			// half icons
			startIconUrl: ARCHIVE + 'img/pin-icon-start-50.png',
			endIconUrl: ARCHIVE + 'img/pin-icon-end-50.png',
			shadowUrl: ARCHIVE + 'img/pin-shadow-50.png',
			iconSize: [16, 25],
			shadowSize: [25, 25],
			iconAnchor: [8, 22],
			shadowAnchor: [8, 23]
		},
		polyline_options: {
			color: track_options.color,
			weight: track_options.weight,
			slope: track_options.slope,
			force_renderer: map.hotline_renderer
		}
	}).on('loaded', function(e) {
		var gpx = e.target;
		create_gpx_info(map, control, gpx, url, index, TRACKS[index].link);
	});
}

// detect if the page shown contains multiple blog pages
// with multiple pages, the "info_header" cannot be used because we have many of them
function is_multi_page()
{
	// it's a tag page
	if (window.location.href.search("/search/") >= 0)
		return true;

	// it's a single page
	if (window.location.href.search(".html") >= 0)
		return false;

	// it's a list, like month one
	return true;
}

// misc colors for down
// from https://en.wikipedia.org/wiki/Web_colors

var COLORS_5 = [
"Red",
"Firebrick",
"Crimson",
"IndianRed",
"LightCoral",
"DarkSalmon",
"Salmon",
"DarkRed", // dark
//"LightSalmon", // too light
// repeat
"Red",
"Firebrick",
"Crimson",
"IndianRed",
"LightCoral",
"DarkSalmon",
"Salmon",
"DarkRed", // dark
"Red",
"Red",
"Red",
"Red",
"Red",
"Red",
"Red",
"Red",
"Red"
];

var COLORS_4 = [
"DarkGreen",
"Green",
"ForestGreen",
"SeaGreen",
"MediumSeaGreen",
//"MediumAquamarine",  like blue
//"DarkSeaGreen", like openstreetmap background
//"PaleGreen", too ligth
//"LightGreen", too ligth
//"MediumSpringGreen", too strong
//"SpringGreen", too strong
//"GreenYellow", too strong
//"Chartreuse", too strong
//"LawnGreen", too strong
//"Lime", too strong
"LimeGreen",
"YellowGreen",
// "OliveDrab", like openstreetmap background
// "Olive", like openstreetmap background
// "DarkOliveGreen", like openstreetmap background
// repeat
"DarkGreen",
"Green",
"ForestGreen",
"SeaGreen",
"MediumSeaGreen",
"LimeGreen",
"YellowGreen",
"OliveDrab",
"Olive",
"DarkOliveGreen",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green",
"Green"
];

var COLORS_3 = [
"MidnightBlue",
"DarkBlue",
"Blue",
"RoyalBlue",
"SteelBlue",
"CornflowerBlue",
"DodgerBlue",
"DeepSkyBlue",
"MediumBlue", // dark
"Navy", // dark
//"LightSkyBlue", too light
//"SkyBlue", too light
//"LightBlue", too light
//"PowderBlue", too light
//"LightSteelBlue", too light
// repeat
"MidnightBlue",
"DarkBlue",
"Blue",
"RoyalBlue",
"SteelBlue",
"CornflowerBlue",
"DodgerBlue",
"DeepSkyBlue",
"MediumBlue", // dark
"Navy", // dark
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
"Blue",
];

var COLORS_2 = [
"Indigo",
"Purple",
"DarkOrchid",
"DarkViolet",
"BlueViolet",
"MediumPurple",
"MediumOrchid",
"Magenta",
"Orchid",
"Violet",
"Plum",
// repeat
"Indigo",
"Purple",
"DarkOrchid",
"DarkViolet",
"BlueViolet",
"MediumPurple",
"MediumOrchid",
"Magenta",
"Orchid",
"Violet",
"Plum",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple",
"Purple"
];

var COLORS_1 = [
"DarkSlateGray",
"SlateGray",
"DimGray",
"Gray",
"DarkGray",
"Silver",
"LightGray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray",
"Gray"
];

// Colors for up track.
// Gray for Openstreetmap
// Black for Cyclosm
var COLORS_UP = "#1F1F1F";

// multi track info
var multi_down_set = [];
var multi_up_set = [];

// setup the info header adding the info of the down, assume a single call
function setup_down(index)
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = "";

	var cycle = get_track_cycle(index)
	if (cycle == "")
		cycle = "no";

	html += "<b>Giudizio: " + get_track_vote(index) + "</b><br/>";
	html += "<b>Difficolt\u00E0: " + get_track_rate(index) + "</b>" + get_track_rate_max(index) + "<br/>";
	html += "<b>Tempo a spinta:<!--DISCESA--> " + cycle + "</b><!--SALITA--><br/>";
	html += "<b>Download GPX: </b>" + get_track_anchor(index,"<b>" + get_track_name(index) + "</b>");
	html += "&nbsp;" + get_shademap_anchor(index);

	element.innerHTML = html;
}

// setup the info header adding the GPX of the up
function setup_up(index)
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = element.innerHTML;

	html += ", " + get_track_anchor(index, get_track_name(index));
	html += "&nbsp;" + get_shademap_anchor(index);

	var cycle = get_track_cycle(index);
	if (cycle != "") {
		html = html.replace("<!--DISCESA-->","</b> discesa <b>");
		html = html.replace("<!--SALITA-->", ", salita <b>" + cycle + "</b>");
	}

	element.innerHTML = html;
}

function sort_by_vote(a, b)
{
	if (TRACKS[a].vote > TRACKS[b].vote)
		return -1;
	if (TRACKS[a].vote < TRACKS[b].vote)
		return 1;
	return 0;
}

function setup_multi()
{
	var element = document.getElementById("info_header");
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = "<p>";

	multi_down_set.sort(sort_by_vote);

	for (var i = 0; i < multi_down_set.length; ++i) {
		var index = multi_down_set[i];
		html += "<b>" + get_track_name(index) + "</b><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;" + get_track_vote(index) + ", ";
		html += get_track_rate(index) + get_track_rate_max(index);
		html += ", " + get_track_anchor(index, "download GPX");
		html += "&nbsp;" + get_shademap_anchor(index);
		html += "</br>";
	}

	for (var i = 0; i < multi_up_set.length; ++i) {
		var index = multi_up_set[i];
		html += "<b>" + get_track_name(index) + "</b><br/>";
		html += "&nbsp;&nbsp;&nbsp;&nbsp;";
		html += get_track_anchor(index, "download GPX");
		html += "&nbsp;" + get_shademap_anchor(index);
		html += "</br>";
	}

	html += "</p>";

	element.innerHTML = html;
}

// adjust the file name to the new standard
function adjust_file(file)
{
	if (RENAME[file] === undefined)
		return file;
	else
		return RENAME[file];
}

// create a post down track
function create_down(map, control, file)
{
	file = adjust_file(file);

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_track(map, control,
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					weight: 7,
					slope: true,
					force_renderer: map.hotline_renderer
				}
			);

			// setup info directly
			setup_down(i);
			break;
		}
	}
}

// create a post up track
function create_up(map, control, file)
{
	file = adjust_file(file);

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].file == file) {
			create_zone_track(map, control,
				ARCHIVE + 'gpx/' + TRACKS[i].file,
				i,
				{
					color: COLORS_UP,
					weight: 3
				}
			);

			// setup info directly
			setup_up(i);
			break;
		}
	}
}

// create a post including all the up and down tracks matching a specific locality
// use slope as color
function create_post(map, control, zone)
{
	// first down
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "down" && TRACKS[i].kind != "trek")
			continue;

		create_track(map, control,
			ARCHIVE + 'gpx/' + TRACKS[i].file,
			i,
			{
				weight: 7,
				slope: true,
				force_renderer: map.hotline_renderer
			}
		);

		// insert in the header list
		multi_down_set.push(i);
	}

	// then up
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "up")
			continue;

		create_zone_track(map, control,
			ARCHIVE + 'gpx/' + TRACKS[i].file,
			i,
			{
				color: COLORS_UP,
				weight: 3
			}
		);

		// insert in the header list
		multi_up_set.push(i);
	}

	setup_multi();
}

// create a dog marker
function create_dog(map, control, pos_x, pos_y, msg)
{
	var DogIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 26],
		iconAnchor:   [16, 13],
		popupAnchor:  [-3, -20]
	}
	});

	var dogIcon = new DogIcon({iconUrl: ARCHIVE + 'img/dog-icon.png'});

	L.marker([pos_x, pos_y], {icon: dogIcon}).addTo(map).bindPopup(msg);
}

// create a tree marker
function create_tree(map, control, pos_x, pos_y, msg)
{
	var TreeIcon = L.Icon.extend({
		options: {
		iconSize:     [32, 32],
		iconAnchor:   [16, 16],
		popupAnchor:  [-3, -20]
	}
	});

	var treeIcon = new TreeIcon({iconUrl: ARCHIVE + 'img/tree-icon.png'});

	L.marker([pos_x, pos_y], {icon: treeIcon}).addTo(map).bindPopup(msg);
}

function table_track(index)
{
	var html = "";

	html += '<tr><td>';
	if (TRACKS[index].link)
		html += '<b><a href="' + WEB + TRACKS[index].link + '.html">' + TRACKS[index].name + "</a></b>&nbsp;&nbsp;";
	else
		html += TRACKS[index].name + "&nbsp;&nbsp;";
	html += '</td><td style="white-space:nowrap;padding-left:5px;padding-right:5px">';
	html += get_track_vote(index);
	html += '</td><td style="white-space:nowrap;padding-left:5px;padding-right:5px">';
	html += get_track_rate(index) + get_track_rate_max(index);
	html += '</td><td style="white-space:nowrap;padding-left:5px;padding-right:5px">';
	html += "" + get_track_elevation(index);
	html += "</td></tr>";

	return html;
}

function table_zone(title, desc, header)
{
	var element = document.getElementById(header);
	if (element == null)
		return;

	if (is_multi_page()) {
		element.innerHTML = "";
		return;
	}

	var html = desc;

	if (multi_down_set.length != 0) {
		html += "<p><table>";
		html += '<tr><th style="text-align:left;">';
		html += title;
		html += '</th><th style="text-align:left;">Giudizio</th><th style="text-align:left;">Difficolt\u00E0</th><th style="text-align:left;">Dislivello</th></tr>';

		for (var i = 0; i < multi_down_set.length; ++i) {
			var index = multi_down_set[i];

			html += table_track(index);
		}

		html += "</table></p>";
	}

	element.innerHTML = html;
}

// create a post including all the filtered tracks, use rank as color
function create_generic(map, control, zone, title, desc, header, filter)
{
	var color_d = [0, 0, 0, 0, 0, 0];

	multi_down_set = [];
	multi_up_set = [];

	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (filter.search(TRACKS[i].kind) < 0)
			continue;

		// insert in the proper multi list
		if (TRACKS[i].kind == "up") {
			multi_up_set.push(i);
		} else {
			multi_down_set.push(i);
		}
	}

	multi_down_set.sort(sort_by_vote);

	// first down
	for (var i = 0; i < multi_down_set.length; ++i) {
		var index = multi_down_set[i];
		var color;
		var weight;

		// select weight and color for DOWN track
		weight = 9;
		if (TRACKS[index].vote == 5)
			color = COLORS_5[color_d[5]++]
		else if (TRACKS[index].vote == 4)
			color = COLORS_4[color_d[4]++]
		else if (TRACKS[index].vote == 3)
			color = COLORS_3[color_d[3]++]
		else if (TRACKS[index].vote == 2)
			color = COLORS_2[color_d[2]++]
		else
			color = COLORS_1[color_d[1]++]

		create_zone_track(map, control,
			ARCHIVE + 'redux/' + TRACKS[index].file,
			index,
			{
				color: color,
				weight: weight
			}
		);
	}

	// then up
	for (var i = 0; i < multi_up_set.length; ++i) {
		var index = multi_up_set[i];
		var color;
		var weight;

		// select weight and color for UP track
		color = COLORS_UP;
		weight = 3;

		create_zone_track(map, control,
			ARCHIVE + 'redux/' + TRACKS[index].file,
			index,
			{
				color: color,
				weight: weight
			}
		);
	}

	table_zone(title, desc, header);
}

// create a zone post including all the up and down tracks
function create_zone(map, control, zone)
{
	desc = "";

	desc += "<p>";
	desc += "Elenco dei percorsi orientati alla discesa. Sono generalmente fattibili sia con una MTB muscolare che E-Bike. ";
	desc += "</p>";

	create_generic(map, control, zone, "Discese", desc, "info_header", "up,down");
}

// create a zone post including all the trek tracks
function create_trek(map, control, zone)
{

	desc = "";

	desc += "<p>"
	desc += "Elenco dei percorsi escursionistici, meno orientati alla discesa e di più all'escursionismo. ";
	desc += "</p>"

	create_generic(map, control, zone, "Escursioni", desc, "trek_header", "trek");
}

// create a climp post including all the up tracks
function create_climb(map, control, zone) {
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].zone.search(zone) < 0)
			continue;

		if (TRACKS[i].kind != "up")
			continue;

		create_zone_track(map, control,
			ARCHIVE + 'redux/' + TRACKS[i].file,
			i,
			{
				slope: true,
				weight: 7
			}
		);
	}
}

function count_tracks()
{
	var count = 0;
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].kind != "down" && TRACKS[i].kind != "trek")
			continue;
		if (TRACKS[i].zone == "hidden")
			continue;
		++count;
	}

	return count.toString();
}

function count_ups()
{
	var count = 0;
	for (i = 0; i < TRACKS.length; i++) {
		if (TRACKS[i].kind != "up")
			continue;
		if (TRACKS[i].zone == "hidden")
			continue;
		++count;
	}

	return count.toString();
}

function count_pages()
{
	var pages = new Set()
	for (i = 0; i < TRACKS.length; i++) {
		pages.add(TRACKS[i].link);
	}

	return pages.size.toString();
}
