const CACHE_NAME = 'mon-site-cache-v1';
const cacheName = 'saved-wishilist-cache';

self.addEventListener('fetch', (event) => {
  const requestUrl = event.request.url;

  // Check if the request matches a route you want to cache
  if (requestUrl.startsWith('/api') || requestUrl.endsWith('.json')) {
    event.respondWith(async () => {
      const cachedResponse = await caches.match(requestUrl);

      if (cachedResponse) {
        // Serve data from cache if it's fresh
        const cachedResponseAge = Date.now() - cachedResponse.headers.get('Date');
        if (cachedResponseAge < 60000) { // Cache for 1 minute (adjust as needed)
          return cachedResponse;
        }
      }

      // Fetch from network if not cached or stale
      const networkResponse = await fetch(event.request);
      // Clone the response to avoid modifying the original
      const responseClone = networkResponse.clone();

      // Cache the network response for future requests
      caches.open('data-cache').then((cache) => {
        cache.put(requestUrl, responseClone);
      });

      return responseClone;
    });
  }
});


self.addEventListener('message', (event) => {
  console.log(event.data)
  if (event.data && event.data.type === 'CASHE_WISH') {
    const datas = event.data;
    const newUrl ='/wishlists?mine=wishlists';

    console.log(datas)

    caches.open(CACHE_NAME).then((cache) => {
      cache.add(newUrl);
      console.log(`URL cached: ${newUrl}`);
    });

    

    // Cache the service data as JSON using a unique key
    const serviceDataKey = `service-wishilist_data`; // Create unique key
    caches.open(cacheName).then((cache) => {
      const serviceDataJson = JSON.stringify({message: false});
      return cache.put(serviceDataKey, new Response(serviceDataJson)); // Added return
    }).then(() => {
      console.log('Service data cached successfully.');
    });
  }
});
