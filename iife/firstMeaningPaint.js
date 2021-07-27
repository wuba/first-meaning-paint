var firstMeaningPaint=function(){"use strict";function t(t,n){return t(n={exports:{}},n.exports),n.exports}var n=t((function(t){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)})),e=t((function(t){var n=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)}));e.version;var r=function(t){return"object"==typeof t?null!==t:"function"==typeof t},o=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t},i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),c=n.document,a=r(c)&&r(c.createElement),f=!u&&!i((function(){return 7!=Object.defineProperty((t="div",a?c.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),l=Object.defineProperty,s={f:u?Object.defineProperty:function(t,n,e){if(o(t),n=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}(n,!0),o(e),f)try{return l(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},p=u?function(t,n,e){return s.f(t,n,function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}(1,e))}:function(t,n,e){return t[n]=e,t},g={}.hasOwnProperty,m=function(t,n){return g.call(t,n)},v=0,d=Math.random(),h=t((function(t){var r="__core-js_shared__",o=n[r]||(n[r]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}))("native-function-to-string",Function.toString),y=t((function(t){var r,o="Symbol(".concat(void 0===(r="src")?"":r,")_",(++v+d).toString(36)),i="toString",u=(""+h).split(i);e.inspectSource=function(t){return h.call(t)},(t.exports=function(t,e,r,i){var c="function"==typeof r;c&&(m(r,"name")||p(r,"name",e)),t[e]!==r&&(c&&(m(r,o)||p(r,o,t[e]?""+t[e]:u.join(String(e)))),t===n?t[e]=r:i?t[e]?t[e]=r:p(t,e,r):(delete t[e],p(t,e,r)))})(Function.prototype,i,(function(){return"function"==typeof this&&this[o]||h.call(this)}))})),b=function(t,n,e){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}},w=function(t,r,o){var i,u,c,a,f=t&w.F,l=t&w.G,s=t&w.S,g=t&w.P,m=t&w.B,v=l?n:s?n[r]||(n[r]={}):(n[r]||{}).prototype,d=l?e:e[r]||(e[r]={}),h=d.prototype||(d.prototype={});for(i in l&&(o=r),o)c=((u=!f&&v&&void 0!==v[i])?v:o)[i],a=m&&u?b(c,n):g&&"function"==typeof c?b(Function.call,c):c,v&&y(v,i,c,t&w.U),d[i]!=c&&p(d,i,a),g&&h[i]!=c&&(h[i]=c)};n.core=e,w.F=1,w.G=2,w.S=4,w.P=8,w.B=16,w.W=32,w.U=64,w.R=128;var S=w,I=n.navigator,_=I&&I.userAgent||"",E=[].slice,A=/MSIE .\./.test(_),M=function(t){return function(n,e){var r=arguments.length>2,o=!!r&&E.call(arguments,2);return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,o)}:n,e)}};function T(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return j(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}S(S.G+S.B+S.F*A,{setTimeout:M(n.setTimeout),setInterval:M(n.setInterval)});var P=[],F={_getImgSrcFromBgImg:function(t){var n,e=t.match(/url\(.*?\)/g);if(e&&e.length){var r=e[e.length-1].replace(/^url\([\'\"]?/,"").replace(/[\'\"]?\)$/,"");(/^http/.test(r)||/^\/\//.test(r))&&(n=r)}return n},getImgSrcFromDom:function(t,n){if(!(t.getBoundingClientRect&&t.getBoundingClientRect().top<window.innerHeight))return!1;var e;if(n=[/(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i],"IMG"==t.nodeName.toUpperCase())e=t.getAttribute("src");else{var r=window.getComputedStyle(t),o=r.getPropertyValue("background-image")||r.getPropertyValue("background"),i=this._getImgSrcFromBgImg(o,n);i&&this._isImg(i,n)&&(e=i)}return e},_isImg:function(t,n){for(var e=0,r=n.length;e<r;e++)if(n[e].test(t))return!0;return!1},getImageSrc:function(t){var n=t.tagName;if("SCRIPT"!==n&&"STYLE"!==n&&"META"!==n&&"HEAD"!==n){var e=this.getImgSrcFromDom(t);e&&!P.includes(e)&&P.push(e);var r=t.children?t.children.length:0;if(r>0)for(var o=t.children,i=r-1;i>=0;i--)this.getImageSrc(o[i])}}};function B(t,n,e){var r=0,o=window.screen.height,i=t.tagName;if("SCRIPT"!==i&&"STYLE"!==i&&"META"!==i&&"HEAD"!==i){var u=t.children?t.children.length:0;if(u>0)for(var c=t.children,a=u-1;a>=0;a--)r+=B(c[a],n+1,r>0);if(r<=0&&!e&&!(t.getBoundingClientRect&&t.getBoundingClientRect().top<o))return 0;r+=1+.5*n}return r}return function(t){var n,e,r=t.eleSelector,o=void 0===r?"body":r,i=t.intervalTime,u=void 0===i?100:i,c=t.totalTime,a=void 0===c?2e3:c,f=window.performance.timing,l=window.document,s=window.MutationObserver||window.WebKitMutationObserver,p=[],g=0;return new Promise((function(t){function r(n){e=setInterval((function(){if(g++,n(),g>Math.floor(a/u)){i();for(var e=0,r=0,o=1;o<p.length;o++)p[o].num-p[o-1].num>r&&(r=p[o].num-p[o-1].num,e=o);var c=(F.getImageSrc(document.body),Math.max.apply(Math,T(P.map((function(t){/^(\/\/)/.test(t)&&(t="https:"+t);try{return performance.getEntriesByName(t)[0].responseEnd||0}catch(t){return 0}}))))),l=p[e].time-f.navigationStart;t(c>l?parseInt(c):parseInt(l))}}),u)}function i(){g=0,clearInterval(e)}var c,m,v;c=o,m=function(){var t={num:B(l.querySelectorAll(o)[0],0),time:(new Date).getTime()};p.push(t)},v=l.querySelectorAll(c)[0],n||(m(),r(m),(n=new s((function(t){t.forEach((function(){i(),r(m),m()}))}))).observe(v,{childList:!0,subtree:!0}))}))}}();
