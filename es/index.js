import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.parse-int.js";import"core-js/modules/es.array.for-each.js";import"core-js/modules/web.dom-collections.for-each.js";import"core-js/modules/es.date.to-string.js";import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.match.js";import"core-js/modules/es.string.replace.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.array.map.js";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),r=t((function(t){var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)}));r.version;var n=function(t){return"object"==typeof t?null!==t:"function"==typeof t},o=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t},i=function(t){try{return!!t()}catch(t){return!0}},u=!i((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),c=e.document,a=n(c)&&n(c.createElement),s=!u&&!i((function(){return 7!=Object.defineProperty((t="div",a?c.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),f=Object.defineProperty,l={f:u?Object.defineProperty:function(t,e,r){if(o(t),e=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}(e,!0),o(r),s)try{return f(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},p=u?function(t,e,r){return l.f(t,e,function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}(1,r))}:function(t,e,r){return t[e]=r,t},m={}.hasOwnProperty,g=function(t,e){return m.call(t,e)},d=0,v=Math.random(),h=t((function(t){var n="__core-js_shared__",o=e[n]||(e[n]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})}))("native-function-to-string",Function.toString),y=t((function(t){var n,o="Symbol(".concat(void 0===(n="src")?"":n,")_",(++d+v).toString(36)),i="toString",u=(""+h).split(i);r.inspectSource=function(t){return h.call(t)},(t.exports=function(t,r,n,i){var c="function"==typeof n;c&&(g(n,"name")||p(n,"name",r)),t[r]!==n&&(c&&(g(n,o)||p(n,o,t[r]?""+t[r]:u.join(String(r)))),t===e?t[r]=n:i?t[r]?t[r]=n:p(t,r,n):(delete t[r],p(t,r,n)))})(Function.prototype,i,(function(){return"function"==typeof this&&this[o]||h.call(this)}))})),b=function(t,e,r){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}},j=function(t,n,o){var i,u,c,a,s=t&j.F,f=t&j.G,l=t&j.S,m=t&j.P,g=t&j.B,d=f?e:l?e[n]||(e[n]={}):(e[n]||{}).prototype,v=f?r:r[n]||(r[n]={}),h=v.prototype||(v.prototype={});for(i in f&&(o=n),o)c=((u=!s&&d&&void 0!==d[i])?d:o)[i],a=g&&u?b(c,e):m&&"function"==typeof c?b(Function.call,c):c,d&&y(d,i,c,t&j.U),v[i]!=c&&p(v,i,a),m&&h[i]!=c&&(h[i]=c)};e.core=r,j.F=1,j.G=2,j.S=4,j.P=8,j.B=16,j.W=32,j.U=64,j.R=128;var w=j,S=e.navigator,I=S&&S.userAgent||"",_=[].slice,E=/MSIE .\./.test(I),A=function(t){return function(e,r){var n=arguments.length>2,o=!!n&&_.call(arguments,2);return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,r)}};function T(t){return function(t){if(Array.isArray(t))return M(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}w(w.G+w.B+w.F*E,{setTimeout:A(e.setTimeout),setInterval:A(e.setInterval)});var P=[],F={_getImgSrcFromBgImg:function(t){var e,r=t.match(/url\(.*?\)/g);if(r&&r.length){var n=r[r.length-1].replace(/^url\([\'\"]?/,"").replace(/[\'\"]?\)$/,"");(/^http/.test(n)||/^\/\//.test(n))&&(e=n)}return e},getImgSrcFromDom:function(t,e){if(!(t.getBoundingClientRect&&t.getBoundingClientRect().top<window.innerHeight))return!1;var r;if(e=[/(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i],"IMG"==t.nodeName.toUpperCase())r=t.getAttribute("src");else{var n=window.getComputedStyle(t),o=n.getPropertyValue("background-image")||n.getPropertyValue("background"),i=this._getImgSrcFromBgImg(o,e);i&&this._isImg(i,e)&&(r=i)}return r},_isImg:function(t,e){for(var r=0,n=e.length;r<n;r++)if(e[r].test(t))return!0;return!1},getImageSrc:function(t){var e=t.tagName;if("SCRIPT"!==e&&"STYLE"!==e&&"META"!==e&&"HEAD"!==e){var r=this.getImgSrcFromDom(t);r&&!P.includes(r)&&P.push(r);var n=t.children?t.children.length:0;if(n>0)for(var o=t.children,i=n-1;i>=0;i--)this.getImageSrc(o[i])}}};function x(t){var e,r,n=t.eleSelector,o=void 0===n?"body":n,i=t.intervalTime,u=void 0===i?100:i,c=t.totalTime,a=void 0===c?2e3:c,s=window.performance.timing,f=window.document,l=window.MutationObserver||window.WebKitMutationObserver,p=[],m=0;return new Promise((function(t){function n(e){r=setInterval((function(){if(m++,e(),m>Math.floor(a/u)){i();for(var r=0,n=0,o=1;o<p.length;o++)p[o].num-p[o-1].num>n&&(n=p[o].num-p[o-1].num,r=o);var c=(F.getImageSrc(document.body),Math.max.apply(Math,T(P.map((function(t){/^(\/\/)/.test(t)&&(t="https:"+t);try{return performance.getEntriesByName(t)[0].responseEnd||0}catch(t){return 0}}))))),f=p[r].time-s.navigationStart;t(c>f?parseInt(c):parseInt(f))}}),u)}function i(){m=0,clearInterval(r)}var c,g,d;c=o,g=function(){var t={num:B(f.querySelectorAll(o)[0],0),time:(new Date).getTime()};p.push(t)},d=f.querySelectorAll(c)[0],e||(g(),n(g),(e=new l((function(t){t.forEach((function(){i(),n(g),g()}))}))).observe(d,{childList:!0,subtree:!0}))}))}function B(t,e,r){var n=0,o=window.screen.height,i=t.tagName;if("SCRIPT"!==i&&"STYLE"!==i&&"META"!==i&&"HEAD"!==i){var u=t.children?t.children.length:0;if(u>0)for(var c=t.children,a=u-1;a>=0;a--)n+=B(c[a],e+1,n>0);if(n<=0&&!r&&!(t.getBoundingClientRect&&t.getBoundingClientRect().top<o))return 0;n+=1+.5*e}return n}export default x;