(self.webpackChunkreactjs_webpack_5=self.webpackChunkreactjs_webpack_5||[]).push([[383],{8172:(t,e,r)=>{"use strict";function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[T]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===X}(t)||Array.isArray(t)||!!t[J]||!!t.constructor[J]||l(t)||s(t))}function u(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:q)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[T];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:l(t)?2:s(t)?3:0}function f(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function a(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t){return W&&t instanceof Map}function s(t){return N&&t instanceof Set}function p(t){return t.o||t.t}function y(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=B(t);delete e[T];for(var r=q(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function v(t,e){return void 0===e&&(e=!1),h(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=d),Object.freeze(t),e&&u(t,(function(t,e){return v(e,!0)}),!0)),t}function d(){n(2)}function h(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function b(t){var e=G[t];return e||n(18,t),e}function P(){return M}function m(t,e){e&&(b("Patches"),t.u=[],t.s=[],t.v=e)}function O(t){g(t),t.p.forEach(j),t.p=null}function g(t){t===M&&(M=t.l)}function w(t){return M={p:[],l:M,h:t,m:!0,_:0}}function j(t){var e=t[T];0===e.i||1===e.i?e.j():e.O=!0}function A(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.g||b("ES5").S(e,t,o),o?(r[T].P&&(O(e),n(4)),i(t)&&(t=S(e,t),e.l||k(e,t)),e.u&&b("Patches").M(r[T],t,e.u,e.s)):t=S(e,r,[]),O(e),e.u&&e.v(e.u,e.s),t!==$?t:void 0}function S(t,e,r){if(h(e))return e;var n=e[T];if(!n)return u(e,(function(o,i){return D(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return k(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=y(n.k):n.o;u(3===n.i?new Set(o):o,(function(e,i){return D(t,n,o,e,i,r)})),k(t,o,!1),r&&t.u&&b("Patches").R(n,r,t.u,t.s)}return n.o}function D(t,e,r,n,u,c){if(o(u)){var l=S(t,u,c&&e&&3!==e.i&&!f(e.D,n)?c.concat(n):void 0);if(a(r,n,l),!o(l))return;t.m=!1}if(i(u)&&!h(u)){if(!t.h.F&&t._<1)return;S(t,u),e&&e.A.l||k(t,u)}}function k(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&v(e,r)}function _(t,e){var r=t[T];return(r?p(r):t)[e]}function F(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function x(t){t.P||(t.P=!0,t.l&&x(t.l))}function E(t){t.o||(t.o=y(t.t))}function z(t,e,r){var n=l(e)?b("MapSet").N(e,r):s(e)?b("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:P(),P:!1,I:!1,D:{},l:e,t,k:null,o:null,j:null,C:!1},o=n,i=H;r&&(o=[n],i=L);var u=Proxy.revocable(o,i),c=u.revoke,f=u.proxy;return n.k=f,n.j=c,f}(e,r):b("ES5").J(e,r);return(r?r.A:P()).p.push(n),n}function I(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[T],o=c(e);if(n){if(!n.P&&(n.i<4||!b("ES5").K(n)))return n.t;n.I=!0,r=R(e,o),n.I=!1}else r=R(e,o);return u(r,(function(e,o){n&&function(t,e){return 2===c(t)?t.get(e):t[e]}(n.t,e)===o||a(r,e,t(o))})),3===o?new Set(r):r}(t)}function R(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return y(t)}var K,M,C="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,N="undefined"!=typeof Set,U="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,$=C?Symbol.for("immer-nothing"):((K={})["immer-nothing"]=!0,K),J=C?Symbol.for("immer-draftable"):"__$immer_draftable",T=C?Symbol.for("immer-state"):"__$immer_state",X=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),q="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,B=Object.getOwnPropertyDescriptors||function(t){var e={};return q(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},G={},H={get:function(t,e){if(e===T)return t;var r=p(t);if(!f(r,e))return function(t,e,r){var n,o=F(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===_(t.t,e)?(E(t),t.o[e]=z(t.A.h,n,t)):n},has:function(t,e){return e in p(t)},ownKeys:function(t){return Reflect.ownKeys(p(t))},set:function(t,e,r){var n=F(p(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=_(p(t),e),i=null==o?void 0:o[T];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}(r,o)&&(void 0!==r||f(t.t,e)))return!0;E(t),x(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==_(t.t,e)||e in t.t?(t.D[e]=!1,E(t),x(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=p(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},L={};u(H,(function(t,e){L[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),L.deleteProperty=function(t,e){return H.deleteProperty.call(this,t[0],e)},L.set=function(t,e,r){return H.set.call(this,t[0],e,r,t[0])};var Q=new(function(){function t(t){var e=this;this.g=U,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var c=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var f;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var a=w(e),l=z(e,t,void 0),s=!0;try{f=r(l),s=!1}finally{s?O(a):g(a)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(t){return m(a,o),A(t,a)}),(function(t){throw O(a),t})):(m(a,o),A(f,a))}if(!t||"object"!=typeof t){if((f=r(t))===$)return;return void 0===f&&(f=t),e.F&&v(f,!0),f}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=I(t));var e=w(this),r=z(this,t,void 0);return r[T].C=!0,g(e),r},e.finishDraft=function(t,e){var r=(t&&t[T]).A;return m(r,e),A(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!U&&n(20),this.g=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}r>-1&&(e=e.slice(r+1));var i=b("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},t}());Q.produce,Q.produceWithPatches.bind(Q),Q.setAutoFreeze.bind(Q),Q.setUseProxies.bind(Q),Q.applyPatches.bind(Q),Q.createDraft.bind(Q),Q.finishDraft.bind(Q)},8917:(t,e,r)=>{}},t=>{"use strict";var e=e=>t(t.s=e);e(8172),e(8917)}]);