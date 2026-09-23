const CACHE_NAME = "bible-app-v1";

const urlsToCache = [
  "/bible/",
  "/bible/index.html",
  "/bible/manifest.json",
  "/bible/icon-192.png",
  "/bible/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
