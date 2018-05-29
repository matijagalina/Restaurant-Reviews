const cacheName = 'cache_v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log(`Opened cache - ${cacheName}`);
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
      .catch((er) => {
        console.log(`error type - ${er}`);
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker is activated');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((fromCacheMatch) => {
        const fromNetwork = fetch(event.request)
          .then((response) => {
            var copyForCache = response.clone();
            caches.open(cacheName)
              .then((cache) => {
                if (event.request.url.startsWith('chrome-extension://')) {
                  return;
                }
                cache.put(event.request, copyForCache);
              });
            return response;
          })
          .catch(() => {
            return new Response('<h1>We\'re sorry, the service is under mainteinance</h1>', {
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            });
          });

        return fromCacheMatch || fromNetwork;
      })
  )
});