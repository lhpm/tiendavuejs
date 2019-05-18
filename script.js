;
//Registro de Características de PWA's
((d, w, n, c) => {
  //Registro de SW
  if ( 'serviceWorker' in n ) {
    w.addEventListener('load', () => {
      n.serviceWorker.register('./sw.js')
        .then( registration => {
          c(registration)
          c(
            'Service Worker registrado con éxito',
            registration.scope
          )
        })
        .catch( err => c(`Registro de Service Worker fallido`, err) )
    })
  }

  //Activar Notificaciones
  if( w.Notification && Notification.permission !== 'denied' ) {
    Notification.requestPermission(status => {
      console.log(status)
      let n = new Notification('Nombre Tienda', {
        body: 'Gracias por su visita :)',
        icon: './img/icon_192x192.png'
      })
    })
  }

  //Activar Sincronización de Fondo
  if ( 'serviceWorker' in n && 'SyncManager' in w ) {
    function registerBGSync () {
      n.serviceWorker.ready
        .then(registration => {
          return registration.sync.register('var_memoria')
            .then( () => c('Sincronización de Fondo Registrada') )
            .catch( err => c('Fallo la Sincronización de Fondo', err) )
        })
    }

    registerBGSync()
  }

  //Compartiendo contenido con el API Share
  if ( n.share !== undefined ) {
    d.addEventListener('DOMContentLoaded', e => {
      let shareBtn = d.getElementById('share')

      shareBtn.addEventListener('click', e => {
        n.share({
          title: d.title,
          text: 'Hola soy un contenido para compartir',
          url: w.location.href
        })
        .then(() => c.log('Contenido compartido con éxito') )
          .catch( err => c.log('Error al compartir: ', err) )
      })
    })
  }
})(document, window, navigator, console.log);

//Detección del Estado de la Conexión
((d, w, n, c) => {
  const header = d.querySelector('.Header'),
    metaTagTheme = d.querySelector('meta[name=theme-color]')

  function networkStatus (e) {
    c( e, e.type )

    if ( n.onLine ) {
      metaTagTheme.setAttribute('content', '#F7DF1E')
      header.classList.remove('u-offline')
      alert('Conexión Recuperada :)')
    } else {
      metaTagTheme.setAttribute('content', '#666')
      header.classList.add('u-offline')
      alert('Conexión Perdida :(')
    }
  }

  d.addEventListener('DOMContentLoaded', e => {
    if ( !n.onLine ) {
      networkStatus(this)
    }

    w.addEventListener('online', networkStatus)
    w.addEventListener('offline', networkStatus)
  })
})(document, window, navigator, console.log);

//Aplicación Interactuando con API LHPM DegustApp
((d, w, n, c) => {
  const userInfo = d.querySelector('.GitHubUser'),
    searchForm = d.querySelector('.GitHubUser-form')

  function fetch_auxiliar (username, requestFromBGSync) {
    //let name = username || 'escueladigital',
      url = 'hola.json'

    fetch(url, { method:'GET' })
      .then(response => response.json())
      .then(userData => {
        if ( !requestFromBGSync ) {
          localStorage.removeItem('var_memoria')
        }

        let template = `
          <article class="GitHubUser-info">
            <h2>${userData.NOMBRE}</h2>
            <img src="${userData.RUTALOGO}" alt="${userData.NOMBRE}">
            <p>${userData.CELULAR1}</p>
            <ul>
              <li>IDEMPRESA ${userData.IDEMPRESA}</li>
              <li>CODEMP ${userData.CODEMP}</li>
              <li>NOMBRE ${userData.NOMBRE}</li>
              <li>DESCRIPCION ${userData.DESCRIPCION}</li>
              <li>TELEEFONO ${userData.TELEEFONO}</li>
            </ul>
          </article>
        `
        userInfo.innerHTML = template
      })
      .catch(err => {
        //Si el usuario esta offline y envía una petición, está se almacenará en localStorage
        //Una vez que el usuario esté online, se activará la sincronización de fondo para recuperar la petición fallida
        localStorage.setItem('var_memoria', name)
        c(err)
      })
  }

  fetch_auxiliar( localStorage.getItem('var_memoria') )

  searchForm.addEventListener('submit', e => {
    e.preventDefault()

    let user = d.getElementById('search').value

    if ( user === '' ) return;

    localStorage.setItem('var_memoria', user)
    fetch_auxiliar(user)

    e.target.reset()
  })

  n.serviceWorker.addEventListener('message', e => {
    console.log('Desde la Sincronización de Fondo: ', e.data)
    fetch_auxiliar( localStorage.getItem('var_memoria'), true )
  })
})(document, window, navigator, console.log);
