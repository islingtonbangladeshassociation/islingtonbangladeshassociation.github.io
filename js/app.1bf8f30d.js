(function(e){function t(t){for(var r,u,a=t[0],i=t[1],l=t[2],f=0,p=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function u(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d20813a":"eeac35a1","chunk-2d22d746":"b81d11fa"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=u(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",l.name="ChunkLoadError",l.type=r,l.request=c,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/ibal/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t){const n=Object(r["t"])("router-link"),o=Object(r["t"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("nav",null,[Object(r["g"])(n,{to:"/"},{default:Object(r["y"])(()=>[Object(r["f"])("Home")]),_:1}),Object(r["f"])(" | "),Object(r["g"])(n,{to:"/about"},{default:Object(r["y"])(()=>[Object(r["f"])("About")]),_:1}),Object(r["f"])(" | "),Object(r["g"])(n,{to:"/news"},{default:Object(r["y"])(()=>[Object(r["f"])("News")]),_:1})]),Object(r["g"])(o)],64)}n("b069");var c=n("6b0d"),u=n.n(c);const a={},i=u()(a,[["render",o]]);var l=i,f=n("6605");const s={class:"home"},p=Object(r["e"])("h1",null,"Home Page",-1),b=[p];function d(e,t,n,o,c,u){return Object(r["p"])(),Object(r["d"])("div",s,b)}var h={name:"Home"};const j=u()(h,[["render",d]]);var O=j;const v=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"/news",name:"News",component:()=>n.e("chunk-2d20813a").then(n.bind(null,"a2f9"))}],m=Object(f["a"])({history:Object(f["b"])("/ibal/"),routes:v});var y=m;Object(r["c"])(l).use(y).mount("#app")},b069:function(e,t,n){"use strict";n("f3e7")},f3e7:function(e,t,n){}});
//# sourceMappingURL=app.1bf8f30d.js.map