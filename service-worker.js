"use strict";var precacheConfig=[["/portfolio/index.html","ed5864ca101cf81d77991c839f977cd3"],["/portfolio/static/css/main.cbce8ff7.css","134f9239bc30eba337c7933e3496f920"],["/portfolio/static/js/main.cec2d0b0.js","5c775110e8b0a7310eae74c8a16079d6"],["/portfolio/static/media/BG1.1.1c23cf71.png","1c23cf717a6ef4ffefdc0a243a9b17fd"],["/portfolio/static/media/BG1.c20d95ee.png","c20d95ee45373bb3a03e1b5e33826325"],["/portfolio/static/media/BG2.1.d302ddc0.png","d302ddc0eb8c256b9e27e72ed9a33671"],["/portfolio/static/media/Campfire.2.74351f02.png","74351f025b5f2e5c24376f8d4b9c3fc5"],["/portfolio/static/media/Campfire.fdb9f141.png","fdb9f141fa2e8e394d9aad50defb5431"],["/portfolio/static/media/c2.ba588185.png","ba5881856e1581513b8acb31f8117048"],["/portfolio/static/media/c3.ab64bd6c.png","ab64bd6c5aa86fe2ac512212d54a1906"],["/portfolio/static/media/c4.13102f84.png","13102f8464981f629b7cdf13e461679e"],["/portfolio/static/media/c5.1f24ec4a.png","1f24ec4a7a5e83f6244a67ae40db646e"],["/portfolio/static/media/codepen.6db9549d.svg","6db9549d35d0d0444c84654635216bab"],["/portfolio/static/media/couvRavage1.fbd8afae.png","fbd8afae13a5d54d4a63dbede8746fb3"],["/portfolio/static/media/couvRavage2.fb2acd96.png","fb2acd96e0fd89df08c752e82723059c"],["/portfolio/static/media/drum_machine.70c98770.png","70c98770f6298418c53a031fa3958ad4"],["/portfolio/static/media/facebook.3457bc9c.svg","3457bc9c3cb1729ca3c9a8246e9892cb"],["/portfolio/static/media/github.9ef7aa68.svg","9ef7aa68e356502de5c43cc8435e84b5"],["/portfolio/static/media/linkedin.0fc43bc0.svg","0fc43bc04a3ecc8ae9196215c3a86009"],["/portfolio/static/media/markdownpreviewer.af875394.png","af8753946746dd7635ac8ba3e6903b11"],["/portfolio/static/media/profilepic.64359fba.png","64359fbacee58c01a8796703fa974a84"],["/portfolio/static/media/tictactoe.a358ce40.png","a358ce40e166dac0ecd1e0f1a066329a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});