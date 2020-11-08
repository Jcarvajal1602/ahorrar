;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_ahorra+',
  urlsToCache = [
    './',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4',
    'https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css',
    'https://use.fontawesome.com/releases/v5.0.13/js/solid.js',
    'https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    'css/bootstrap.min.css',
    './img/favicon/ahorrar.png',
    'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    './style.css',
    './script.js',
    './img/favicon/ahorra_16.jpg',
    './img/favicon/ahorra_32.jpg',
    './img/favicon/ahorra_64.jpg',
    './img/favicon/ahorra_96.jpg',
    './img/favicon/ahorra_128.jpg',
    './img/favicon/ahorra_192.jpg',
    './img/favicon/ahorra_256.jpg',
    './img/favicon/ahorra_384.jpg',
    './img/favicon/ahorra_512.jpg',
    './img/favicon/ahorra_1024.jpg',
    './img/perfil.jpg',
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})