var cases;(()=>{"use strict";var e,r,t,n,o,a,i={9350:(e,r,t)=>{var n={"./Case":()=>Promise.all([t.e(220),t.e(315),t.e(221)]).then((()=>()=>t(9743)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})},1865:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof contacts)return e();t.l("https://apathetic-able.surge.sh/contacts/artefacts/prod/remoteEntry.js",(t=>{if("undefined"!=typeof contacts)return e();var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,r(n)}),"contacts")})).then((()=>contacts))}},s={};function f(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,exports:{}};return i[e](t,t.exports,f),t.exports}f.m=i,f.c=s,f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);f.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,f.d(o,a),o},f.d=(e,r)=>{for(var t in r)f.o(r,t)&&!f.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((r,t)=>(f.f[t](e,r),r)),[])),f.u=e=>(315===e?"Contacts":e)+"."+{220:"2f1b27b8e88389c4f923",221:"819fd300672db8638793",315:"9754a6402de87a2dd07c",788:"9dbc53dd69ebc15d2904"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="cases:",f.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==n+o){i=l;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,f.nc&&i.setAttribute("nonce",f.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),s&&document.head.appendChild(i)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={315:[3484]},a={3484:["default","./Contact",1865]},f.f.remotes=(e,r)=>{f.o(o,e)&&o[e].forEach((e=>{var t=f.R;t||(t=[]);var n=a[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),f.m[e]=()=>{throw r},n.p=0},i=(e,t,a,i,s,f)=>{try{var u=e(t,a);if(!u||!u.then)return s(u,i,f);var c=u.then((e=>s(e,i)),o);if(!f)return c;r.push(n.p=c)}catch(e){o(e)}},s=(e,r,o)=>i(r.get,n[1],t,0,u,o),u=r=>{n.p=1,f.m[e]=e=>{e.exports=r()}};i(f,n[2],0,0,((e,r,t)=>e?i(f.I,n[0],0,e,s,t):o()),1)}}))},f.j=718,(()=>{f.S={};var e={},r={};f.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];f.o(f.S,t)||(f.S[t]={});var a=f.S[t],i="cases",s=(e,r,t,n)=>{var o=a[e]=a[e]||{},s=o[r];(!s||!s.loaded&&(!n!=!s.eager?n:i>s.from))&&(o[r]={get:t,from:i,eager:!!n})},u=[];if("default"===t)s("@infini-soft/store","0.1.24",(()=>f.e(315).then((()=>()=>f(3570))))),s("react-dom","18.2.0",(()=>Promise.all([f.e(788),f.e(315)]).then((()=>()=>f(2788))))),s("react","18.2.0",(()=>f.e(315).then((()=>()=>f(2735))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var o=f(e);if(!o)return;var a=e=>e&&e.init&&e.init(f.S[t],n);if(o.then)return u.push(o.then(a,r));var i=a(o);if(i&&i.then)u.push(i.catch(r))}catch(e){r(e)}})(1865);return u.length?e[t]=Promise.all(u).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;f.g.importScripts&&(e=f.g.location+"");var r=f.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),f.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var o=r[n],a=(typeof o)[0];if(n>=t.length)return"u"==a;var i=t[n],s=(typeof i)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=i)return o<i;n++}},t=e=>{var r=e[0],n="";if(1===e.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,n+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,s);return n}var i=[];for(a=1;a<e.length;a++){var s=e[a];i.push(0===s?"not("+f()+")":1===s?"("+f()+" || "+f()+")":2===s?i.pop()+" "+i.pop():t(s))}return f();function f(){return i.pop().replace(/^\((.+)\)$/,"$1")}},n=(r,t)=>{if(0 in r){t=e(t);var o=r[0],a=o<0;a&&(o=-o-1);for(var i=0,s=1,f=!0;;s++,i++){var u,c,l=s<r.length?(typeof r[s])[0]:"";if(i>=t.length||"o"==(c=(typeof(u=t[i]))[0]))return!f||("u"==l?s>o&&!a:""==l!=a);if("u"==c){if(!f||"u"!=l)return!1}else if(f)if(l==c)if(s<=o){if(u!=r[s])return!1}else{if(a?u>r[s]:u<r[s])return!1;u!=r[s]&&(f=!1)}else if("s"!=l&&"n"!=l){if(a||s<=o)return!1;f=!1,s--}else{if(s<=o||c<l!=a)return!1;f=!1}else"s"!=l&&"n"!=l&&(f=!1,s--)}}var p=[],d=p.pop.bind(p);for(i=1;i<r.length;i++){var h=r[i];p.push(1==h?d()|d():2==h?d()&d():h?n(h,t):!d())}return!!d()},o=(e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)},a=(e,r,n,o)=>"Unsatisfied version "+n+" from "+(n&&e[r][n].from)+" of shared singleton module "+r+" (required "+t(o)+")",i=(e,r,t,i)=>{var f=o(e,t);return n(i,f)||"undefined"!=typeof console&&console.warn&&console.warn(a(e,t,f,i)),s(e[t][f])},s=e=>(e.loaded=1,e.get()),u=e=>function(r,t,n,o){var a=f.I(r);return a&&a.then?a.then(e.bind(e,r,f.S[r],t,n,o)):e(r,f.S[r],t,n,o)},c=u(((e,r,t,n,o)=>r&&f.o(r,t)?i(r,0,t,n):o())),l={},p={3887:()=>c("default","react",[1,18,2,0],(()=>f.e(315).then((()=>()=>f(2735))))),5445:()=>c("default","@infini-soft/store",[2,0,1,4],(()=>f.e(315).then((()=>()=>f(3570))))),6399:()=>c("default","react-dom",[1,18,2,0],(()=>f.e(788).then((()=>()=>f(2788)))))},d={221:[5445,6399],315:[3887]};f.f.consumes=(e,r)=>{f.o(d,e)&&d[e].forEach((e=>{if(f.o(l,e))return r.push(l[e]);var t=r=>{l[e]=0,f.m[e]=t=>{delete f.c[e],t.exports=r()}},n=r=>{delete l[e],f.m[e]=t=>{throw delete f.c[e],r}};try{var o=p[e]();o.then?r.push(l[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))}})(),(()=>{var e={718:0};f.f.j=(r,t)=>{var n=f.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=f.p+f.u(r),i=new Error;f.l(a,(t=>{if(f.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,s]=t,u=0;if(a.some((r=>0!==e[r]))){for(n in i)f.o(i,n)&&(f.m[n]=i[n]);if(s)s(f)}for(r&&r(t);u<a.length;u++)o=a[u],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunkcases=globalThis.webpackChunkcases||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),f.nc=void 0;var u=f(9350);cases=u})();