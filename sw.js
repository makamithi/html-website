// This service worker unregisters itself and clears all caches.
// It exists so that browsers with the old SW installed will pick up
// this new version, which immediately self-destructs.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(cacheNames.map(name => caches.delete(name)))
    ).then(() => self.registration.unregister())
  );
});
