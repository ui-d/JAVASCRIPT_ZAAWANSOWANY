caches.open('test-cache').then(function(cache) {
  console.log(cache)
});


// cache options

const options = {
  method: "GET",
  headers: new Headers({
      'Content-Type': 'text/html'
  }),
}  

newCache.add(new Request('/cats.json', options))


// cache.addAll

const urls = ['pets/cats.json', 'pets/dogs.json'];
newCache.addAll(urls);
