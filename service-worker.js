self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/3almoda-store/',
        '/3almoda-store/index.html',
        '/3almoda-store/style.css',
        '/3almoda-store/icons/icon-192.png',
        '/3almoda-store/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
