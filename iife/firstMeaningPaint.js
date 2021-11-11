var firstMeaningPaint=function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n,r,o,i=function(t){return t&&t.Math==Math&&t},c=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof t&&t)||Function("return this")(),u=function(t){try{return!!t()}catch(t){return!0}},a=!u((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),f=function(t){return"object"==typeof t?null!==t:"function"==typeof t},l=c.document,s=f(l)&&f(l.createElement),p=function(t){return s?l.createElement(t):{}},v=!a&&!u((function(){return 7!=Object.defineProperty(p("div"),"a",{get:function(){return 7}}).a})),h=function(t){if(!f(t))throw TypeError(String(t)+" is not an object");return t},d=function(t,e){if(!f(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!f(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!f(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!f(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},g=Object.defineProperty,y={f:a?g:function(t,e,n){if(h(t),e=d(e,!0),h(n),v)try{return g(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},m=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},b=a?function(t,e,n){return y.f(t,e,m(1,n))}:function(t,e,n){return t[e]=n,t},S=function(t,e){try{b(c,t,e)}catch(n){c[t]=e}return e},w="__core-js_shared__",x=c[w]||S(w,{}),E=e((function(t){(t.exports=function(t,e){return x[t]||(x[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),j={}.hasOwnProperty,T=function(t,e){return j.call(t,e)},I=E("native-function-to-string",Function.toString),O=c.WeakMap,A="function"==typeof O&&/native code/.test(I.call(O)),M=0,L=Math.random(),P=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++M+L).toString(36)},C=E("keys"),R=function(t){return C[t]||(C[t]=P(t))},k={},D=c.WeakMap;if(A){var N=new D,F=N.get,$=N.has,_=N.set;n=function(t,e){return _.call(N,t,e),e},r=function(t){return F.call(N,t)||{}},o=function(t){return $.call(N,t)}}else{var B=R("state");k[B]=!0,n=function(t,e){return b(t,B,e),e},r=function(t){return T(t,B)?t[B]:{}},o=function(t){return T(t,B)}}var V={set:n,get:r,has:o,enforce:function(t){return o(t)?r(t):n(t,{})},getterFor:function(t){return function(e){var n;if(!f(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},G=e((function(t){var e=V.get,n=V.enforce,r=String(I).split("toString");E("inspectSource",(function(t){return I.call(t)})),(t.exports=function(t,e,o,i){var u=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,f=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||T(o,"name")||b(o,"name",e),n(o).source=r.join("string"==typeof e?e:"")),t!==c?(u?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=o:b(t,e,o)):a?t[e]=o:S(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||I.call(this)}))})),H={}.toString,q=function(t){return H.call(t).slice(8,-1)},z=!!Object.getOwnPropertySymbols&&!u((function(){return!String(Symbol())})),W=c.Symbol,U=E("wks"),K=function(t){return U[t]||(U[t]=z&&W[t]||(z?W:P)("Symbol."+t))},Y=K("toStringTag"),X="Arguments"==q(function(){return arguments}()),J=function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Y))?n:X?q(e):"Object"==(r=q(e))&&"function"==typeof e.callee?"Arguments":r},Q={};Q[K("toStringTag")]="z";var Z="[object z]"!==String(Q)?function(){return"[object "+J(this)+"]"}:Q.toString,tt=Object.prototype;Z!==tt.toString&&G(tt,"toString",Z,{unsafe:!0});var et={}.propertyIsEnumerable,nt=Object.getOwnPropertyDescriptor,rt={f:nt&&!et.call({1:2},1)?function(t){var e=nt(this,t);return!!e&&e.enumerable}:et},ot="".split,it=u((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==q(t)?ot.call(t,""):Object(t)}:Object,ct=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},ut=function(t){return it(ct(t))},at=Object.getOwnPropertyDescriptor,ft={f:a?at:function(t,e){if(t=ut(t),e=d(e,!0),v)try{return at(t,e)}catch(t){}if(T(t,e))return m(!rt.f.call(t,e),t[e])}},lt=c,st=function(t){return"function"==typeof t?t:void 0},pt=function(t,e){return arguments.length<2?st(lt[t])||st(c[t]):lt[t]&&lt[t][e]||c[t]&&c[t][e]},vt=Math.ceil,ht=Math.floor,dt=function(t){return isNaN(t=+t)?0:(t>0?ht:vt)(t)},gt=Math.min,yt=function(t){return t>0?gt(dt(t),9007199254740991):0},mt=Math.max,bt=Math.min,St=function(t){return function(e,n,r){var o,i=ut(e),c=yt(i.length),u=function(t,e){var n=dt(t);return n<0?mt(n+e,0):bt(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},wt={includes:St(!0),indexOf:St(!1)},xt=wt.indexOf,Et=function(t,e){var n,r=ut(t),o=0,i=[];for(n in r)!T(k,n)&&T(r,n)&&i.push(n);for(;e.length>o;)T(r,n=e[o++])&&(~xt(i,n)||i.push(n));return i},jt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Tt=jt.concat("length","prototype"),It={f:Object.getOwnPropertyNames||function(t){return Et(t,Tt)}},Ot={f:Object.getOwnPropertySymbols},At=pt("Reflect","ownKeys")||function(t){var e=It.f(h(t)),n=Ot.f;return n?e.concat(n(t)):e},Mt=function(t,e){for(var n=At(e),r=y.f,o=ft.f,i=0;i<n.length;i++){var c=n[i];T(t,c)||r(t,c,o(e,c))}},Lt=/#|\.prototype\./,Pt=function(t,e){var n=Rt[Ct(t)];return n==Dt||n!=kt&&("function"==typeof e?u(e):!!e)},Ct=Pt.normalize=function(t){return String(t).replace(Lt,".").toLowerCase()},Rt=Pt.data={},kt=Pt.NATIVE="N",Dt=Pt.POLYFILL="P",Nt=Pt,Ft=ft.f,$t=function(t,e){var n,r,o,i,u,a=t.target,f=t.global,l=t.stat;if(n=f?c:l?c[a]||S(a,{}):(c[a]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(u=Ft(n,r))&&u.value:n[r],!Nt(f?r:a+(l?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Mt(i,o)}(t.sham||o&&o.sham)&&b(i,"sham",!0),G(n,r,i,t)}},_t=c.Promise,Bt=y.f,Vt=K("toStringTag"),Gt=K("species"),Ht=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},qt={},zt=K("iterator"),Wt=Array.prototype,Ut=function(t,e,n){if(Ht(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Kt=K("iterator"),Yt=function(t,e,n,r){try{return r?e(h(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&h(o.call(t)),e}},Xt=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var c,u,a,f,l,s,p,v,d=Ut(n,r,o?2:1);if(i)c=t;else{if(u=function(t){if(null!=t)return t[Kt]||t["@@iterator"]||qt[J(t)]}(t),"function"!=typeof u)throw TypeError("Target is not iterable");if(void 0!==(v=u)&&(qt.Array===v||Wt[zt]===v)){for(a=0,f=yt(t.length);f>a;a++)if((l=o?d(h(p=t[a])[0],p[1]):d(t[a]))&&l instanceof e)return l;return new e(!1)}c=u.call(t)}for(s=c.next;!(p=s.call(c)).done;)if("object"==typeof(l=Yt(c,d,p.value,o))&&l&&l instanceof e)return l;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Jt=K("iterator"),Qt=!1;try{var Zt=0,te={next:function(){return{done:!!Zt++}},return:function(){Qt=!0}};te[Jt]=function(){return this},Array.from(te,(function(){throw 2}))}catch(t){}var ee,ne,re,oe=K("species"),ie=pt("document","documentElement"),ce=pt("navigator","userAgent")||"",ue=c.location,ae=c.setImmediate,fe=c.clearImmediate,le=c.process,se=c.MessageChannel,pe=c.Dispatch,ve=0,he={},de="onreadystatechange",ge=function(t){if(he.hasOwnProperty(t)){var e=he[t];delete he[t],e()}},ye=function(t){return function(){ge(t)}},me=function(t){ge(t.data)},be=function(t){c.postMessage(t+"",ue.protocol+"//"+ue.host)};ae&&fe||(ae=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return he[++ve]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},ee(ve),ve},fe=function(t){delete he[t]},"process"==q(le)?ee=function(t){le.nextTick(ye(t))}:pe&&pe.now?ee=function(t){pe.now(ye(t))}:se&&!/(iphone|ipod|ipad).*applewebkit/i.test(ce)?(re=(ne=new se).port2,ne.port1.onmessage=me,ee=Ut(re.postMessage,re,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(be)?ee=de in p("script")?function(t){ie.appendChild(p("script")).onreadystatechange=function(){ie.removeChild(this),ge(t)}}:function(t){setTimeout(ye(t),0)}:(ee=be,c.addEventListener("message",me,!1)));var Se,we,xe,Ee,je,Te,Ie,Oe,Ae={set:ae,clear:fe},Me=ft.f,Le=Ae.set,Pe=c.MutationObserver||c.WebKitMutationObserver,Ce=c.process,Re=c.Promise,ke="process"==q(Ce),De=Me(c,"queueMicrotask"),Ne=De&&De.value;Ne||(Se=function(){var t,e;for(ke&&(t=Ce.domain)&&t.exit();we;){e=we.fn,we=we.next;try{e()}catch(t){throw we?Ee():xe=void 0,t}}xe=void 0,t&&t.enter()},ke?Ee=function(){Ce.nextTick(Se)}:Pe&&!/(iphone|ipod|ipad).*applewebkit/i.test(ce)?(je=!0,Te=document.createTextNode(""),new Pe(Se).observe(Te,{characterData:!0}),Ee=function(){Te.data=je=!je}):Re&&Re.resolve?(Ie=Re.resolve(void 0),Oe=Ie.then,Ee=function(){Oe.call(Ie,Se)}):Ee=function(){Le.call(c,Se)});var Fe,$e,_e,Be,Ve,Ge,He,qe=Ne||function(t){var e={fn:t,next:void 0};xe&&(xe.next=e),we||(we=e,Ee()),xe=e},ze=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Ht(e),this.reject=Ht(n)},We={f:function(t){return new ze(t)}},Ue=function(t,e){if(h(t),f(e)&&e.constructor===t)return e;var n=We.f(t);return(0,n.resolve)(e),n.promise},Ke=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Ye=Ae.set,Xe=K("species"),Je="Promise",Qe=V.get,Ze=V.set,tn=V.getterFor(Je),en=_t,nn=c.TypeError,rn=c.document,on=c.process,cn=c.fetch,un=on&&on.versions,an=un&&un.v8||"",fn=We.f,ln=fn,sn="process"==q(on),pn=!!(rn&&rn.createEvent&&c.dispatchEvent),vn="unhandledrejection",hn=Nt(Je,(function(){var t=en.resolve(1),e=function(){},n=(t.constructor={})[Xe]=function(t){t(e,e)};return!((sn||"function"==typeof PromiseRejectionEvent)&&t.then(e)instanceof n&&0!==an.indexOf("6.6")&&-1===ce.indexOf("Chrome/66"))})),dn=hn||!function(t,e){if(!e&&!Qt)return!1;var n=!1;try{var r={};r[Jt]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){en.all(t).catch((function(){}))})),gn=function(t){var e;return!(!f(t)||"function"!=typeof(e=t.then))&&e},yn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;qe((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,f,l=r[c++],s=i?l.ok:l.fail,p=l.resolve,v=l.reject,h=l.domain;try{s?(i||(2===e.rejection&&wn(t,e),e.rejection=1),!0===s?u=o:(h&&h.enter(),u=s(o),h&&(h.exit(),f=!0)),u===l.promise?v(nn("Promise-chain cycle")):(a=gn(u))?a.call(u,p,v):p(u)):v(o)}catch(t){h&&!f&&h.exit(),v(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&bn(t,e)}))}},mn=function(t,e,n){var r,o;pn?((r=rn.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),c.dispatchEvent(r)):r={promise:e,reason:n},(o=c["on"+t])?o(r):t===vn&&function(t,e){var n=c.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},bn=function(t,e){Ye.call(c,(function(){var n,r=e.value;if(Sn(e)&&(n=Ke((function(){sn?on.emit("unhandledRejection",r,t):mn(vn,t,r)})),e.rejection=sn||Sn(e)?2:1,n.error))throw n.value}))},Sn=function(t){return 1!==t.rejection&&!t.parent},wn=function(t,e){Ye.call(c,(function(){sn?on.emit("rejectionHandled",t):mn("rejectionhandled",t,e.value)}))},xn=function(t,e,n,r){return function(o){t(e,n,o,r)}},En=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,yn(t,e,!0))},jn=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw nn("Promise can't be resolved itself");var o=gn(n);o?qe((function(){var r={done:!1};try{o.call(n,xn(jn,t,r,e),xn(En,t,r,e))}catch(n){En(t,r,n,e)}})):(e.value=n,e.state=1,yn(t,e,!1))}catch(n){En(t,{done:!1},n,e)}}};hn&&(en=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,en,Je),Ht(t),Fe.call(this);var e=Qe(this);try{t(xn(jn,this,e),xn(En,this,e))}catch(t){En(this,e,t)}},(Fe=function(t){Ze(this,{type:Je,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)G(t,r,e[r],n);return t}(en.prototype,{then:function(t,e){var n,r,o,i=tn(this),c=fn((n=en,void 0===(o=h(this).constructor)||null==(r=h(o)[oe])?n:Ht(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=sn?on.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&yn(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),$e=function(){var t=new Fe,e=Qe(t);this.promise=t,this.resolve=xn(jn,t,e),this.reject=xn(En,t,e)},We.f=fn=function(t){return t===en||t===_e?new $e(t):ln(t)},"function"==typeof _t&&(Be=_t.prototype.then,G(_t.prototype,"then",(function(t,e){var n=this;return new en((function(t,e){Be.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof cn&&$t({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return Ue(en,cn.apply(c,arguments))}}))),$t({global:!0,wrap:!0,forced:hn},{Promise:en}),Ge=Je,He=!1,(Ve=en)&&!T(Ve=He?Ve:Ve.prototype,Vt)&&Bt(Ve,Vt,{configurable:!0,value:Ge}),function(t){var e=pt(t),n=y.f;a&&e&&!e[Gt]&&n(e,Gt,{configurable:!0,get:function(){return this}})}(Je),_e=lt.Promise,$t({target:Je,stat:!0,forced:hn},{reject:function(t){var e=fn(this);return e.reject.call(void 0,t),e.promise}}),$t({target:Je,stat:!0,forced:hn},{resolve:function(t){return Ue(this,t)}}),$t({target:Je,stat:!0,forced:dn},{all:function(t){var e=this,n=fn(e),r=n.resolve,o=n.reject,i=Ke((function(){var n=Ht(e.resolve),i=[],c=0,u=1;Xt(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=fn(e),r=n.reject,o=Ke((function(){var o=Ht(e.resolve);Xt(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var Tn=[].slice,In=function(t){return function(e,n){var r=arguments.length>2,o=r?Tn.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};$t({global:!0,bind:!0,forced:/MSIE .\./.test(ce)},{setTimeout:In(c.setTimeout),setInterval:In(c.setInterval)});var On="\t\n\v\f\r                　\u2028\u2029\ufeff",An="["+On+"]",Mn=RegExp("^"+An+An+"*"),Ln=RegExp(An+An+"*$"),Pn=function(t){return function(e){var n=String(ct(e));return 1&t&&(n=n.replace(Mn,"")),2&t&&(n=n.replace(Ln,"")),n}},Cn={start:Pn(1),end:Pn(2),trim:Pn(3)}.trim,Rn=c.parseInt,kn=/^[+-]?0[Xx]/,Dn=8!==Rn(On+"08")||22!==Rn(On+"0x16")?function(t,e){var n=Cn(String(t));return Rn(n,e>>>0||(kn.test(n)?16:10))}:Rn;$t({global:!0,forced:parseInt!=Dn},{parseInt:Dn});var Nn,Fn,$n=function(t){return Object(ct(t))},_n=Array.isArray||function(t){return"Array"==q(t)},Bn=K("species"),Vn=function(t,e){var n;return _n(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!_n(n.prototype)?f(n)&&null===(n=n[Bn])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Gn=[].push,Hn=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(u,a,f,l){for(var s,p,v=$n(u),h=it(v),d=Ut(a,f,3),g=yt(h.length),y=0,m=l||Vn,b=e?m(u,g):n?m(u,0):void 0;g>y;y++)if((c||y in h)&&(p=d(s=h[y],y,v),t))if(e)b[y]=p;else if(p)switch(t){case 3:return!0;case 5:return s;case 6:return y;case 2:Gn.call(b,s)}else if(o)return!1;return i?-1:r||o?o:b}},qn={forEach:Hn(0),map:Hn(1),filter:Hn(2),some:Hn(3),every:Hn(4),find:Hn(5),findIndex:Hn(6)},zn=qn.forEach,Wn=(Fn=[]["forEach"])&&u((function(){Fn.call(null,Nn||function(){throw 1},1)}))?[].forEach:function(t){return zn(this,t,arguments.length>1?arguments[1]:void 0)};$t({target:"Array",proto:!0,forced:[].forEach!=Wn},{forEach:Wn});for(var Un in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Kn=c[Un],Yn=Kn&&Kn.prototype;if(Yn&&Yn.forEach!==Wn)try{b(Yn,"forEach",Wn)}catch(t){Yn.forEach=Wn}}var Xn=Date.prototype,Jn="Invalid Date",Qn="toString",Zn=Xn.toString,tr=Xn.getTime;function er(t){return function(t){if(Array.isArray(t))return nr(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return nr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nr(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function nr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}new Date(NaN)+""!=Jn&&G(Xn,Qn,(function(){var t=tr.call(this);return t==t?Zn.call(this):Jn}));var rr,or,ir=function(){var t=h(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},cr=RegExp.prototype.exec,ur=String.prototype.replace,ar=cr,fr=(rr=/a/,or=/b*/g,cr.call(rr,"a"),cr.call(or,"a"),0!==rr.lastIndex||0!==or.lastIndex),lr=void 0!==/()??/.exec("")[1];(fr||lr)&&(ar=function(t){var e,n,r,o,i=this;return lr&&(n=new RegExp("^"+i.source+"$(?!\\s)",ir.call(i))),fr&&(e=i.lastIndex),r=cr.call(i,t),fr&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),lr&&r&&r.length>1&&ur.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var sr=ar;$t({target:"RegExp",proto:!0,forced:/./.exec!==sr},{exec:sr});var pr=K("species"),vr=!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),hr=!u((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),dr=function(t,e,n,r){var o=K(t),i=!u((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),c=i&&!u((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[pr]=function(){return n}),n[o](""),!e}));if(!i||!c||"replace"===t&&!vr||"split"===t&&!hr){var a=/./[o],f=n(o,""[t],(function(t,e,n,r,o){return e.exec===sr?i&&!o?{done:!0,value:a.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),l=f[0],s=f[1];G(String.prototype,t,l),G(RegExp.prototype,o,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)}),r&&b(RegExp.prototype[o],"sham",!0)}},gr=function(t){return function(e,n){var r,o,i=String(ct(e)),c=dt(n),u=i.length;return c<0||c>=u?t?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===u||(o=i.charCodeAt(c+1))<56320||o>57343?t?i.charAt(c):r:t?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},yr={codeAt:gr(!1),charAt:gr(!0)}.charAt,mr=function(t,e,n){return e+(n?yr(t,e).length:1)},br=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==q(t))throw TypeError("RegExp#exec called on incompatible receiver");return sr.call(t,e)};dr("match",1,(function(t,e,n){return[function(e){var n=ct(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var o=h(t),i=String(this);if(!o.global)return br(o,i);var c=o.unicode;o.lastIndex=0;for(var u,a=[],f=0;null!==(u=br(o,i));){var l=String(u[0]);a[f]=l,""===l&&(o.lastIndex=mr(i,yt(o.lastIndex),c)),f++}return 0===f?null:a}]}));var Sr=Math.max,wr=Math.min,xr=Math.floor,Er=/\$([$&'`]|\d\d?|<[^>]*>)/g,jr=/\$([$&'`]|\d\d?)/g,Tr=function(t){return void 0===t?t:String(t)};dr("replace",2,(function(t,e,n){return[function(n,r){var o=ct(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,o){var i=n(e,t,this,o);if(i.done)return i.value;var c=h(t),u=String(this),a="function"==typeof o;a||(o=String(o));var f=c.global;if(f){var l=c.unicode;c.lastIndex=0}for(var s=[];;){var p=br(c,u);if(null===p)break;if(s.push(p),!f)break;""===String(p[0])&&(c.lastIndex=mr(u,yt(c.lastIndex),l))}for(var v="",d=0,g=0;g<s.length;g++){p=s[g];for(var y=String(p[0]),m=Sr(wr(dt(p.index),u.length),0),b=[],S=1;S<p.length;S++)b.push(Tr(p[S]));var w=p.groups;if(a){var x=[y].concat(b,m,u);void 0!==w&&x.push(w);var E=String(o.apply(void 0,x))}else E=r(y,u,m,b,w,o);m>=d&&(v+=u.slice(d,m)+E,d=m+y.length)}return v+u.slice(d)}];function r(t,n,r,o,i,c){var u=r+t.length,a=o.length,f=jr;return void 0!==i&&(i=$n(i),f=Er),e.call(c,f,(function(e,c){var f;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":f=i[c.slice(1,-1)];break;default:var l=+c;if(0===l)return e;if(l>a){var s=xr(l/10);return 0===s?e:s<=a?void 0===o[s-1]?c.charAt(1):o[s-1]+c.charAt(1):e}f=o[l-1]}return void 0===f?"":f}))}}));var Ir=Object.keys||function(t){return Et(t,jt)},Or=a?Object.defineProperties:function(t,e){h(t);for(var n,r=Ir(e),o=r.length,i=0;o>i;)y.f(t,n=r[i++],e[n]);return t},Ar=R("IE_PROTO"),Mr=function(){},Lr=function(){var t,e=p("iframe"),n=jt.length;for(e.style.display="none",ie.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Lr=t.F;n--;)delete Lr.prototype[jt[n]];return Lr()},Pr=Object.create||function(t,e){var n;return null!==t?(Mr.prototype=h(t),n=new Mr,Mr.prototype=null,n[Ar]=t):n=Lr(),void 0===e?n:Or(n,e)};k[Ar]=!0;var Cr=K("unscopables"),Rr=Array.prototype;null==Rr[Cr]&&b(Rr,Cr,Pr(null));var kr,Dr=wt.includes;$t({target:"Array",proto:!0},{includes:function(t){return Dr(this,t,arguments.length>1?arguments[1]:void 0)}}),kr="includes",Rr[Cr][kr]=!0;var Nr=K("species"),Fr=qn.map;$t({target:"Array",proto:!0,forced:!function(t){return!u((function(){var e=[];return(e.constructor={})[Nr]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("map")},{map:function(t){return Fr(this,t,arguments.length>1?arguments[1]:void 0)}});var $r=[],_r={_getImgSrcFromBgImg:function(t){var e,n=t.match(/url\(.*?\)/g);if(n&&n.length){var r=n[n.length-1].replace(/^url\([\'\"]?/,"").replace(/[\'\"]?\)$/,"");(/^http/.test(r)||/^\/\//.test(r))&&(e=r)}return e},getImgSrcFromDom:function(t,e){if(!(t.getBoundingClientRect&&t.getBoundingClientRect().top<window.innerHeight))return!1;var n;if(e=[/(\.)(png|jpg|jpeg|gif|webp|ico|bmp|tiff|svg)/i],"IMG"==t.nodeName.toUpperCase())n=t.getAttribute("src");else{var r=window.getComputedStyle(t),o=r.getPropertyValue("background-image")||r.getPropertyValue("background"),i=this._getImgSrcFromBgImg(o,e);i&&this._isImg(i,e)&&(n=i)}return n},_isImg:function(t,e){for(var n=0,r=e.length;n<r;n++)if(e[n].test(t))return!0;return!1},getImageSrc:function(t){var e=t.tagName;if("SCRIPT"!==e&&"STYLE"!==e&&"META"!==e&&"HEAD"!==e){var n=this.getImgSrcFromDom(t);n&&!$r.includes(n)&&$r.push(n);var r=t.children?t.children.length:0;if(r>0)for(var o=t.children,i=r-1;i>=0;i--)this.getImageSrc(o[i])}}};function Br(t,e,n){var r=0,o=window.screen.height,i=t.tagName;if("SCRIPT"!==i&&"STYLE"!==i&&"META"!==i&&"HEAD"!==i){var c=t.children?t.children.length:0;if(c>0)for(var u=t.children,a=c-1;a>=0;a--)r+=Br(u[a],e+1,r>0);if(r<=0&&!n&&!(t.getBoundingClientRect&&t.getBoundingClientRect().top<o))return 0;r+=1+.5*e}return r}return function(t){var e,n,r=t.eleSelector,o=void 0===r?"body":r,i=t.intervalTime,c=void 0===i?100:i,u=t.totalTime,a=void 0===u?2e3:u,f=window.performance.timing,l=window.document,s=window.MutationObserver||window.WebKitMutationObserver,p=[],v=0;return new Promise((function(t){function r(e){n=setInterval((function(){if(v++,e(),v>Math.floor(a/c)){i();for(var n=0,r=0,o=1;o<p.length;o++)p[o].num-p[o-1].num>r&&(r=p[o].num-p[o-1].num,n=o);var u=(_r.getImageSrc(document.body),Math.max.apply(Math,er($r.map((function(t){/^(\/\/)/.test(t)&&(t="https:"+t);try{return performance.getEntriesByName(t)[0].responseEnd||0}catch(t){return 0}}))))),l=p[n].time-f.navigationStart;t(u>l?parseInt(u):parseInt(l))}}),c)}function i(){v=0,clearInterval(n)}var u,h,d;u=o,h=function(){var t={num:Br(l.querySelectorAll(o)[0],0),time:(new Date).getTime()};p.push(t)},d=l.querySelectorAll(u)[0],e||(h(),r(h),(e=new s((function(t){t.forEach((function(){i(),r(h),h()}))}))).observe(d,{childList:!0,subtree:!0}))}))}}();