/* ServiceDATA Mobil – Service Worker (Offline-Betrieb). Bei jeder neuen Version VERSION ändern. */
const VERSION = '2.3';
const CACHE = 'sdm-' + VERSION;
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'zxing.min.js', 'msal-browser.min.js', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-512-maskable.png', 'icons/sun-96.png', 'icons/sun-rays.png', 'icons/sun-face.png', 'icons/sun-face-wink.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('sdm-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  // config.json: zuerst Netz (damit Änderungen ankommen), sonst Cache
  if (new URL(r.url).pathname.endsWith('/config.json')) { e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; }).catch(() => caches.match(r, { ignoreSearch: true }).then(h => h || new Response('{}', { headers: { 'Content-Type': 'application/json' } })))); return; }
  // Offline zuerst: aus dem Cache, sonst Netz (und merken)
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(hit => hit || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; }).catch(() => r.mode === 'navigate' ? caches.match('index.html') : Response.error())));
});
