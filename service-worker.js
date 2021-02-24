const CACHE_NAME = 'Phone-Chat';
let resourcesToCache = ["./", "./img/game.png"];
self.addEventListener("install", e=>{ e.waitUntil( caches.open(CACHE_NAME).then(cache =>{ return cache.addAll(resourcesToCache); }) ); });
// Cache and return requests
self.addEventListener("fetch", e=>{ e.respondWith( caches.match(e.request).then(response=>{ return response || fetch(e.request); }) ); });
// Update a service worker 
const cacheWhitelist = ['Phone-Chat'];
self.addEventListener('activate', event => { event.waitUntil( caches.keys().then(cacheNames => { return Promise.all( cacheNames.map(cacheName => { if (cacheWhitelist.indexOf(cacheName) === -1) { return caches.delete(cacheName); } }) ); }) ); });
