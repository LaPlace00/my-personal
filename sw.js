self.addEventListener("install", e => { 
    e.waitUntil(
      caches.open("offlineFiles").then(cache => {
         return cache.addAll([
             "./",
             "./src/index.js",
             "./css/styles.css",
             "./css/pink.css",
             "./picture/csharp.png",
             "./picture/hob1.jpg",
             "./picture/hob2.jpeg",
             "./picture/hob3.jpg",
             "./picture/java.png",
             "./picture/m1.jpg",
             "./picture/m2.jpg",
             "./picture/m3.jpg",
             "./picture/me.jpg",
             "./picture/mv1.jpg",
             "./picture/mv2.jpg",
             "./picture/mv3.jpg",
             "./picture/pyt.png"
         ]);
      })
    );
});

self.addEventListener("fetch", e => {
   console.log("Intercepting request :"+ e.request.url);
   e.respondWith(
       caches.match(e.request).then(response => {
            return response || fetch(e.request);
       })
   );
});