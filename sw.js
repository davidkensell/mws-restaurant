self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mws-restaurant-stage-1').then(function(cache) {
     // main assets
     cache.addAll([
       '/',
       'index.html',
       'restaurant.html',
       'js/main.js',
       'js/dbhelper.js',
       'js/restaurant_info.js',
       'css/styles.css',
       'css/sm.css',
       'css/md.css',
       'css/lg.css'
     ]);
     // other pages not as dependency
     return cache.addAll([
     	'restaurant.html?id=1',
     	'restaurant.html?id=2',
     	'restaurant.html?id=3',
     	'restaurant.html?id=4',
     	'restaurant.html?id=5',
     	'restaurant.html?id=6',
     	'restaurant.html?id=7',
     	'restaurant.html?id=8',
     	'restaurant.html?id=9',
     	'restaurant.html?id=10'
     	]);
   })
 );
});


self.addEventListener('fetch', function(event) {
  console.log(event.request);

  event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});