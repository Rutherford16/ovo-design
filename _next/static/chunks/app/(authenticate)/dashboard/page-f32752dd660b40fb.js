(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{827:function(e,t,r){Promise.resolve().then(r.bind(r,4768))},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return a}});let n=r(1024),l=r(2301),s=r(7873),o=r(3222),i=n._(r(6515)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=o.Image},4768:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(7437),l=r(6691),s=r.n(l),o=r(2265),i="undefined"!=typeof document?o.useLayoutEffect:o.useEffect,a=({axis:e="x",initialPages:t=[]}={})=>{let r="x"===e?"width":"height",n="x"===e?"scrollWidth":"scrollHeight",l="x"===e?"clientWidth":"clientHeight",s="x"===e?"left":"top",a="x"===e?"right":"bottom",u="x"===e?"scrollLeft":"scrollTop",[d,h]=(0,o.useState)(null),[{pages:f,activePageIndex:m},g]=(0,o.useState)({pages:t,activePageIndex:0}),w=(0,o.useCallback)(e=>{if(!d)return;let t=Math.floor(d[n]-d[u])<=d[l];if(t){g({pages:e,activePageIndex:e.length-1});return}let r=Array.from(d.children),o=d.getBoundingClientRect(),i=e.map(e=>{let t=e[0],n=r[t];x(n instanceof HTMLElement,"Expected HTMLElement");let l=p(d,n,s),i=n.getBoundingClientRect()[s]-o[s]-l;return Math.abs(i)}),a=i.indexOf(Math.min(...i));g({pages:e,activePageIndex:a})},[d,l,s,n,u]),v=(0,o.useCallback)(()=>{let e;if(!d)return;let t=Array.from(d.children),n=d.getBoundingClientRect(),l=t.reduce((t,l,o)=>{x(l instanceof HTMLElement,"Expected HTMLElement");let i=t[t.length-1],u=c(l,l.parentElement);if(!i||u[a]-e>Math.ceil(n[r])){t.push([o]);let r=p(d,l,s);e=u[s]-r}else i.push(o);return t},[]);w(l)},[w,d,r,a,s,u]);i(()=>{v()},[v]),(0,o.useEffect)(()=>{let e=()=>{v()};return window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[v]),(0,o.useEffect)(()=>{if(!d)return;let e=()=>{w(f)};return d.addEventListener("scroll",e),()=>{d.removeEventListener("scroll",e)}},[w,f,d]);let j=e=>{if(!d)return;let t=f[e];if(!t)return;let r=t[0],n=Array.from(d.children)[r];if(!(n instanceof HTMLElement))return;let l=p(d,n,s);d.scrollTo({behavior:"smooth",[s]:c(n,n.parentElement)[s]-l})},b=(0,o.useMemo)(()=>new Set(f.map(e=>e[0])),[f]);return{prev:()=>{j(m-1)},next:()=>{j(m+1)},goTo:j,refresh:v,pages:f,activePageIndex:m,snapPointIndexes:b,scrollRef:h}},c=(e,t)=>{let r=u(e);if(!t)return r;let n=u(t);return{left:r.left-n.left,top:r.top-n.top,right:r.right-n.left,bottom:r.bottom-n.top,width:r.width,height:r.height}},u=e=>{let t=e.getBoundingClientRect(),r=0,n=0,l=e.parentElement;for(;l;)r+=l.scrollLeft,n+=l.scrollTop,l=l.parentElement;let s=t.left+r,o=t.top+n;return{left:s,top:o,right:s+t.width,bottom:o+t.height,width:t.width,height:t.height}},d=(e,t)=>{let r=window.getComputedStyle(e),n=r.getPropertyValue(`scroll-padding-${t}`);if("auto"===n)return 0;let l=`Unsupported scroll padding value, expected <length> or <percentage> value, received ${n}`;if(n.endsWith("px")){let e=parseInt(n);return x(!Number.isNaN(e),l),e}if(n.endsWith("%")){let t=parseInt(n);return x(!Number.isNaN(t),l),e.clientWidth/100*t}throw new f(l)},h=(e,t)=>{let r=window.getComputedStyle(e),n=r.getPropertyValue(`scroll-margin-${t}`),l=`Unsupported scroll margin value, expected <length> value, received ${n}`;x(n.endsWith("px"),l);let s=parseInt(n);return x(!Number.isNaN(s),l),s},p=(e,t,r)=>{let n=d(e,r),l=h(t,r),s=c(t,t.parentElement);return Math.min(n+l,s[r])};function x(e,t){if(!e)throw new f(t)}var f=class extends Error{constructor(e){super(`[react-snap-carousel]: ${e}`)}};function m(){let{scrollRef:e,activePageIndex:t,next:r,goTo:l,pages:i}=a(),[c,u]=(0,o.useState)(3);return setInterval(()=>{console.log("aktif "+t),console.log("terakhir "+(i.length-1)),t===i.length-1?l(0):r()},5e3),(0,n.jsxs)("div",{className:"flex flex-col bg-white border-y-8 py-3 border-gray-300",children:[(0,n.jsx)("ul",{className:"flex overflow-hidden px-2 gap-2 snap-x snap-mandatory",ref:e,children:Array.from({length:c}).map((e,t)=>(0,n.jsx)("li",{className:"flex-shrink-0 w-auto h-52 snap-center",children:(0,n.jsx)(s(),{src:"/ovo-design/images/promo/promo-".concat(t,".jpg"),width:144,height:64,alt:"Promo ".concat(t),className:"w-full h-full rounded-2xl"})},t))}),(0,n.jsx)("div",{className:"flex justify-center gap-1 mt-1",children:i.map((e,r)=>t===r?(0,n.jsx)("div",{className:"w-4 h-1 bg-purple-600 rounded-full transition-all"},r):(0,n.jsx)("div",{className:"w-2 h-1 bg-purple-300 rounded-full transition-all"},r))})]})}function g(){let[e,t]=(0,o.useState)("******"),[r,l]=(0,o.useState)(!1);return(0,n.jsxs)("section",{className:"h-full bg-gradient-to-r from-purple-600 to-purple-300",children:[(0,n.jsxs)("header",{className:"p-5 text-purple-800 flex justify-between",children:[(0,n.jsx)("h1",{className:"text-2xl",children:"OVO"}),(0,n.jsx)("button",{className:"bg-slate-300 p-1 rounded-full hover:opacity-70",children:"% Promo"})]}),(0,n.jsxs)("div",{className:"m-4 py-2 px-4 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl text-sm text-white",children:[(0,n.jsx)("h3",{children:"OVO Cash"}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{className:"text-xs",onClick:()=>{r?t("******"):t("Rp 12.715"),l(!r)},children:[(0,n.jsxs)("h4",{className:"flex",children:["Total Saldo",r?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-auto",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"})}):(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-auto",children:[(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})]}),(0,n.jsx)("h4",{children:e})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"h-4"}),(0,n.jsx)("button",{className:"rounded-full bg-white text-purple-800 text-xs p-1 h-fit",children:"OVO Points"})]})]}),(0,n.jsxs)("div",{className:"m-4 flex flex-row justify-between",children:[(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-12 h-auto",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Top Up"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-12 h-auto",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Transfer"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-12 h-auto",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75"})}),"Tarik Tunai"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-12 h-auto",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"})}),"History"]})]})]}),(0,n.jsxs)("div",{className:"bg-white rounded-t-2xl w-full h-fit p-3",children:[(0,n.jsxs)("div",{className:"p-3 flex gap-2 text-xs",children:[(0,n.jsx)("button",{className:"bg-gray-200 rounded-full px-4 py-1 h-fit text-purple-800",children:"Favorit"}),(0,n.jsx)("button",{className:"hover:bg-purple-200 rounded-full px-4 py-1 h-fit",children:"Pilihan Lain"}),(0,n.jsx)("button",{className:"hover:bg-purple-200 rounded-full px-4 py-1 h-fit",children:"Grab"}),(0,n.jsx)("button",{className:"hover:bg-purple-200 rounded-full px-4 py-1 h-fit",children:"Finansial"})]}),(0,n.jsxs)("div",{className:"grid grid-cols-4 text-xs p-2",children:[(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-14 h-auto text-blue-600 bg-blue-200 rounded-full p-2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"})}),"Pulsa/Paket Data"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-14 h-auto text-yellow-600 fill-yellow-600 bg-yellow-200 rounded-full p-2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})}),"PLN"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-14 h-auto text-blue-600 fill-blue-600 bg-blue-200 rounded-full p-2",children:[(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"}),(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"})]}),"Air PDAM"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-14 h-auto text-blue-600 bg-blue-200 rounded-full p-2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"})}),"Uang Elektronik"]}),(0,n.jsxs)("button",{className:"flex flex-col items-center p-2",children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-14 h-auto text-yellow-600 fill-yellow-600 bg-yellow-200 rounded-full p-2",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"})}),"Pascabayar"]})]})]}),(0,n.jsx)(m,{}),(0,n.jsx)("div",{className:"h-20"})]})}r(1396)},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:l,type:e,key:c,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)},1396:function(e,t,r){r(6685)}},function(e){e.O(0,[685,222,971,596,744],function(){return e(e.s=827)}),_N_E=e.O()}]);