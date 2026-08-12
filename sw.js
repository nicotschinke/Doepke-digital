// sw.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/Doepke-digital/',
        '/Doepke-digital/index.html',
        '/Doepke-digital/manifest.json',
        '/Doepke-digital/favicon.ico',
        '/Doepke-digital/js/createjs.min.js',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});