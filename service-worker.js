"use strict";var precacheConfig=[["hadrienallemon.github.io/portfolio/index.html","ae48979f4a4281142014a2c457ed6fe2"],["hadrienallemon.github.io/portfolio/static/css/main.83833b49.css","e619a88bdd15b6c0c3e8d354bd0ebdd3"],["hadrienallemon.github.io/portfolio/static/js/main.3f30bd73.js","781ba874e37bc2f9a86a1014b7aa5dfb"],["hadrienallemon.github.io/portfolio/static/media/BG1.1.1c23cf71.png","1c23cf717a6ef4ffefdc0a243a9b17fd"],["hadrienallemon.github.io/portfolio/static/media/BG1.c20d95ee.png","c20d95ee45373bb3a03e1b5e33826325"],["hadrienallemon.github.io/portfolio/static/media/BG2.1.d302ddc0.png","d302ddc0eb8c256b9e27e72ed9a33671"],["hadrienallemon.github.io/portfolio/static/media/Campfire.2.74351f02.png","74351f025b5f2e5c24376f8d4b9c3fc5"],["hadrienallemon.github.io/portfolio/static/media/Campfire.3.c31234e3.png","c31234e3475796854911fc57364d2da0"],["hadrienallemon.github.io/portfolio/static/media/Campfire.fdb9f141.png","fdb9f141fa2e8e394d9aad50defb5431"],["hadrienallemon.github.io/portfolio/static/media/c2.ba588185.png","ba5881856e1581513b8acb31f8117048"],["hadrienallemon.github.io/portfolio/static/media/c3.ab64bd6c.png","ab64bd6c5aa86fe2ac512212d54a1906"],["hadrienallemon.github.io/portfolio/static/media/c4.13102f84.png","13102f8464981f629b7cdf13e461679e"],["hadrienallemon.github.io/portfolio/static/media/c5.1f24ec4a.png","1f24ec4a7a5e83f6244a67ae40db646e"],["hadrienallemon.github.io/portfolio/static/media/c6.30420d44.png","30420d4418d7c63400ac352bdd557d5b"],["hadrienallemon.github.io/portfolio/static/media/c7.bb8eb018.png","bb8eb0187102447d6e8b3528b4b52f3f"],["hadrienallemon.github.io/portfolio/static/media/c8.2474e8aa.png","2474e8aa16be48afe92c15aadbf12238"],["hadrienallemon.github.io/portfolio/static/media/codepen.6db9549d.svg","6db9549d35d0d0444c84654635216bab"],["hadrienallemon.github.io/portfolio/static/media/couvRavage1.fbd8afae.png","fbd8afae13a5d54d4a63dbede8746fb3"],["hadrienallemon.github.io/portfolio/static/media/couvRavage2.fb2acd96.png","fb2acd96e0fd89df08c752e82723059c"],["hadrienallemon.github.io/portfolio/static/media/drum_machine.70c98770.png","70c98770f6298418c53a031fa3958ad4"],["hadrienallemon.github.io/portfolio/static/media/facebook.3457bc9c.svg","3457bc9c3cb1729ca3c9a8246e9892cb"],["hadrienallemon.github.io/portfolio/static/media/github.9ef7aa68.svg","9ef7aa68e356502de5c43cc8435e84b5"],["hadrienallemon.github.io/portfolio/static/media/linkedin.0fc43bc0.svg","0fc43bc04a3ecc8ae9196215c3a86009"],["hadrienallemon.github.io/portfolio/static/media/markdownpreviewer.af875394.png","af8753946746dd7635ac8ba3e6903b11"],["hadrienallemon.github.io/portfolio/static/media/pomodoroclock.56991f2c.png","56991f2c44ea5a335a567ebc2aa2afd4"],["hadrienallemon.github.io/portfolio/static/media/profilepic.64359fba.png","64359fbacee58c01a8796703fa974a84"],["hadrienallemon.github.io/portfolio/static/media/simon.3d95e3ee.png","3d95e3ee08202fb88a799cbb258621f6"],["hadrienallemon.github.io/portfolio/static/media/tictactoe.a358ce40.png","a358ce40e166dac0ecd1e0f1a066329a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,i){var n=new URL(e);return i&&n.pathname.match(i)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],i=new URL(a,self.location),n=createCacheKey(i,hashParamName,t,/\.\w{8}\./);return[i.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(i){return setOfCachedUrls(i).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return i.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),i="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,i),e=urlsToCacheKeys.has(t));var n="hadrienallemon.github.io/portfolio/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});