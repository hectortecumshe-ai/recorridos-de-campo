// Esta guía cambió de dirección: se retira el service worker anterior sin tocar las cachés de otras guías.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(
  caches.keys().then((ks) => Promise.all(ks.filter((k) => /^$/.test(k)).map((k) => caches.delete(k))))
    .then(() => self.registration.unregister())
    .then(() => self.clients.matchAll({ type: "window" })).then((cs) => cs.forEach((c) => c.navigate(c.url)))));
