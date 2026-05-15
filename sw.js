const CACHE = 'binge-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/binge_icon_64.png',
  '/binge_icon_128.png',
  '/binge_icon_256.png',
  '/that-girl-energy.jpg',
  '/miami-blues.jpg',
  '/eco-odyssey.jpg',
  '/Shes-a-Lot.jpg',
  '/unfiltered.jpg'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
