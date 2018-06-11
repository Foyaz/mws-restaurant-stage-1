self.addEventListener('install', function(event) {
event.waitUntil(
    caches.open('restaurant-app').then(function(cache) {
      return cache.addAll([
        '/',
        './js/main.js',
        './js/dbhelper.js',
        './js/restaurant_info.js',
        './css/styles.css',
        './data/restaurants.json',
        './index.html',
        './restaurant.html',
        './img/1.jpg',
        './img/2.jpg',
        './img/3.jpg',
        './img/4.jpg',
        './img/5.jpg',
        './img/6.jpg',
        './img/7.jpg',
        './img/8.jpg',
        './img/9.jpg',
        './img/10.jpg'
        ]);
    })
  ).then(self.skipWaiting());  
});
self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});
  
  self.addEventListener('fetch', function(event) {
      caches.match('restaurant-app');
  });
  