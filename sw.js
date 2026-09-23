self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Intercept requests directed to /service/
  if (url.pathname.startsWith('/service/')) {
    const targetUrl = decodeURIComponent(url.pathname.replace('/service/', ''));

    if (targetUrl) {
      event.respondWith(
        fetch(targetUrl, {
          method: event.request.method,
          headers: event.request.headers,
          mode: 'cors'
        }).catch(err => {
          return new Response("Failed to reach target server: " + err.message, {
            status: 502,
            headers: { 'Content-Type': 'text/plain' }
          });
        })
      );
    }
  }
});
