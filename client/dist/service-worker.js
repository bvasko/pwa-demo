if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),d={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f683aea5"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"ada50a4d0fb5667a2320ff4b0019d674"},{url:"js/install.bundle.js",revision:"4e829b277a8679a33dc84baf159bf69e"},{url:"js/main.bundle.js",revision:"e8a0cc83fa1348ec1f63aca5c688798c"},{url:"main.css",revision:"55000d38b02080fb4cbf975ce66bb3a4"},{url:"src-sw.js",revision:"0c44e3f71c2de2cdc061cedade61600d"}],{})}));