if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise(async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()})),s.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},s=(s,r)=>{Promise.all(s.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(s)};self.define=(s,n,t)=>{r[s]||(r[s]=Promise.resolve().then(()=>{let r={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return r;case"module":return i;default:return e(s)}})).then(e=>{const s=t(...e);return r.default||(r.default=s),r})}))}}define("./service-worker.js",["./workbox-7aabeca4"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"1c8070aa58e3ce1736c746f36a6b8723"},{url:"./static/js/main.c52d7c.js.LICENSE.txt",revision:"71b7475baad26df965944bf7f496e59c"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/_/,/\/[^/?]+\.[^/]+$/]})),e.registerRoute(/\.html$/,new e.StaleWhileRevalidate({cacheName:"my-html-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:60,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg)$/,new e.StaleWhileRevalidate({cacheName:"my-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:3600,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\.js$/,new e.StaleWhileRevalidate({cacheName:"my-js-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:3600,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));