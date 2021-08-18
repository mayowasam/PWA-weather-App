const CACHE_NAME = 'version-1'
const urlToCache = ['index.html', 'offline.html']

const self = this

//install sw 
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('cache is opened')
            return cache.addAll(urlToCache)
        })

    )

})

//listen for the sw 
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
        .then(() => {
            return fetch(e.request)
            .catch(() => caches.match('offline.html'))
        })

    )
    
})

//activate sw 
self.addEventListener('activate', (e) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)


    e.waitUntil(
        caches.keys()
        .then((cacheNames) => promise.all(
            cacheNames.map(cacheName => {
                if(!cacheNames.includes(cacheName)) return caches.delete(cacheName)

          
            })))
    )
})