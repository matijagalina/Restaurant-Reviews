var cacheName = 'my-site-cache-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName)
      .then(function (cache) {
        console.log('Opened cache - ' + cacheName);
        return cache.addAll([
          '/',
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/js/dbhelper.js'
        ]);
      })
      .catch(function (er) {
        console.log('error type - ' + er);
      })
  );
});

self.addEventListener('activate', function (event) {
  console.log('Service worker is activated');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (fromCache) {
        var fromNetwork = fetch(event.request)
          .then(function (response) {
            var copyForCache = response.clone();
            caches.open(cacheName)
              .then(function (cache) {
                if (event.request.url.startsWith('chrome-extension://')) {
                  return;
                }
                cache.put(event.request, copyForCache);
              });
            return response;
          })
          .catch(function () {
            return new Response('<h1>We\'re sorry, the service is under mainteinance</h1>', {
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            });
          });

        return fromCache || fromNetwork;
      })
  )
});