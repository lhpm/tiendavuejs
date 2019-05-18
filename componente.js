const Inicio = {
			data: function(){
				return {

				}
			},

			template: `
				<div>
						<h2> Inicio </h2>
  <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark color="grey">
            <v-card-text class="px-0">

            <iframe width="560" height="315" src="https://www.youtube.com/embed/r0HcgMTf6ug" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
			`
		}



const Tienda = { 
  data: function(){
	return {
	  productos: [

		{nombre: 'Patines', imagen: 'https://home.ripley.cl/store/Attachment/WOP/D175/2000366012974/2000366012974_2.jpg', precio: '30000'},
		{nombre: 'TV', imagen: 'data:image/jpeg;base64,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',precio: '900000'},
		{nombre: 'Camisa', imagen: 'https://www.decathlon.es/media/838/8382186/big_9131417d-99cb-4c44-b2ee-f6b137dd5d64.jpg',precio: '20000'},
		{nombre: 'Matrix', imagen: 'https://mxuniformes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/camisas_hombre_-_azul_ml.jpg',precio: '80000'},
		{nombre: 'Camisa 2', imagen: 'https://mxuniformes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/camisas_hombre_-_azul_ml.jpg',precio: '60000'},
		{nombre: 'Reloj', imagen: 'https://www.woodenson.com/wp-content/uploads/2016/06/reloj-de-pulsera-de-bamb-deva-rojo-2.jpg',precio: '90000'},
		{nombre: 'Celular', imagen: 'https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/9/6947681549210-8.jpg',precio: '78000'},
		{nombre: 'Portatil', imagen: 'https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/8/8/889349841259_3.jpg',precio: '30000'},
	  ],
	  lista_compras: [],
	  dialog: false

	}
  },
  methods: {
    
      agregarCarrito: function (compras) {
            this.lista_compras.push(compras);

      },

      eliminar (index) {
        // this.todos.splice(index, 1)
        this.$delete(this.lista_compras, index)
      }

    },
    computed: {
      totalCuenta: function() {
        let total = 0;
        for(let i = 0; i < this.lista_compras.length; i++){
          total += parseInt(this.lista_compras[i].precio);
        }
        return total;
      }
    },

  template: `
<div id="app">

<h2> Tienda </h2>
  <v-app id="inspire">
    <div class="text-xs-center">
      <v-badge color="primary">
        <span slot="badge">{{lista_compras.length}}</span>
        <v-icon large color="grey lighten-1">shopping_cart</v-icon>
      </v-badge>

    </div>

        <v-dialog v-model="dialog" persistent max-width="400">
        <v-btn slot="activator" color="primary" dark>Lista de Compras</v-btn>
        <v-card>
          <v-card-title class="headline">Lista de Compras</v-card-title>
          <v-card-text>Productos para llevar:<br />
          <table class="table table-striped">
			<thead>
			  <tr>
				<th> Imagen </th>
				<th> Nombre </th>
				<th> Precio </th>
				<th>  </th>
			  </tr>
			</thead>
			<tbody>
            <tr v-for="producto, index in lista_compras">
              <td><img :src="producto.imagen" width="70" :alt="producto.nombre"></td>
              <td><span>{{producto.nombre}}</span></td>
              <td><span>{{producto.precio}}</span></td>
              <td><v-icon dark left @click="eliminar(index)" color="red">remove_circle</v-icon></td>
            </tr>
			</tbody>
		   </table>
             <span><b>Total: {{ totalCuenta }}</b></span>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="dialog = false">Cancelar</v-btn>
            <v-btn color="green darken-1" flat @click.native="dialog = false">Comprar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    <v-container grid-list-md text-xs-center fluid>
      <v-layout row wrap>

        <v-flex v-for="producto in productos" xs6>
          <v-card dark color="blue-grey lighten-5">
            <v-card-text class="px-0" :style="{ fontSize: tamaniofuente + 'em', color: color }">{{index}} {{producto.nombre}}</v-card-text>
            <br />
            <img :src="producto.imagen" width="200" class="responsive">
            <br />
            <v-card-text class="px-0" :style="{ fontSize: tamaniofuente + 'em', color: color }">{{index}} {{producto.precio}}</v-card-text>
          </v-card>
          <footer>

              <v-btn color="error" dark @click="agregarCarrito(producto)">Agregar</v-btn>

          </footer>
        </v-flex>


      </v-layout>
    </v-container>
  </v-app>
</div>

	`

	 }

const Noticias = {

			data: function(){
				return {
					       noticias: [

		{id: '1', titulo: 'Nokia 1: el celular que quiere popularizarse en el mercado colombiano', imagen: 'img/nokia_1.jpg', descripcion: 'Apariencia. El Nokia 1 es un teléfono ligero, su apariencia externa, como muchos otros dispositivos de su gama, está compuesta por unos marcos, adornados por un bisel blanco, que rodean su pantalla de 4.5 pulgadas.',fecha:'10/06/2018'},
		{id: '2', titulo: 'Una breve introducción al E3 y todas sus novedades en videojuegos', imagen: 'https://www.elespectador.com/sites/default/files/us-technology-entertainment-economy-e3_20260165-1.jpg',descripcion: 'Las empresas dedicadas al diseño de videojuegos están en Los Angeles en este momento, sacando, casi literalmente, todos los fierros. Los portales de videojuegos y las redes sociales están explotando con cada anuncio que se ha presentado en estos días. La E3 comenzó este martes y, sin embargo, desde hace unos días las empresas ya habían estado mostrando los dientes para el placer de todos los jugadores alrededor del mundo. Estos son los anuncios que dieron la largada para la conferencia.',fecha:'13/06/2018'},
		{id: '3', titulo: 'Intel Vs. AMD: continúa la guerra de procesadores', imagen: 'http://e.rpp-noticias.io/normal/2018/06/10/010901_624816.jpg',descripcion: 'Intel Lanzará un procesador de 28 núcleos y 56 hilos en el cuatrimestre final de este año. Su demo mostró el prototipo llegando hasta 5 GHz. Sin embargo, luego se aclaró que se trataba un procesador con overclock, por lo que no será la velocidad de stock de los productos que lanzará a fines de año.',fecha:'01/06/2018'},
		{id: '4', titulo: 'Apple ahora evita que los desarrolladores de apps puedan vender tu agenda de contactos', imagen: 'https://i.kinja-img.com/gawker-media/image/upload/s--2VUMhajc--/c_scale,f_auto,fl_progressive,q_80,w_800/eaxeetsszsnw9fyuxh20.png',descripcion: 'Apple ha implementado nuevas reglas mucho más severas a su App Store, incluyendo una que prohíbe a los desarrolladores que compartan o vendan los datos de la agenda de contactos del móvil a otros, sin su consentimiento.',fecha:'11/06/2018'},
		{id: '5', titulo: '¿Preparados? Es probable que la OPEP acuerde aumentar la producción de petróleo?', imagen: 'https://www.elespectador.com/sites/default/files/325573991_1-4-1.jpg',descripcion: 'La Organización de Países Exportadores de Petróleo y sus aliados se preparan para reuniones polémicas los días 22 y 23 de junio destinadas a revisar si se echarán atrás con las reducciones del suministro implementadas hace 18 meses. Si bien los productores en condiciones de reactivar la producción están dispuestos a hacerlo, crece la oposición de los países que no pueden.',fecha:'12/06/2018'},
		{id: '6', titulo: 'Así serían los tiempos para migrar a la factura electrónica', imagen: 'http://www.eltiempo.com/files/article_main/files/crop/uploads/2018/06/12/5b2096e0ae809.r_1528862502911.0-1014-3000-2517.jpeg',descripcion: 'La implementación de la factura electrónica en el país, para todas las empresas y establecimientos comerciales, tendría dos grandes momentos de aquí al 2022, año en el que terminaría la transición total de esta materia.',fecha:'02/06/2018'},
		{id: '7', titulo: '"Leo", entre los 100 mejores restaurantes del mundo', imagen: 'http://www.eltiempo.com/files/article_main/files/crop/uploads/2017/10/24/59f016f2cba5d.r_1528825477652.377-119-2935-1398.jpeg',descripcion: 'A pocos días de darse a conocer el nuevo listado de Los 50 Mejores Restaurantes del Mundo, se dio a conocer como antesala el conteo de los lugares que ocupan las posiciones que van del 51 al 100 según los votos dados por chefs, periodistas gastronómicos y sibaritas del mundo. Por primera vez, un restaurante colombiano se encuentra dentro de este listado.Se trata del restaurante Leo, de la chef Leonor Espinosa, que después de 15 años abierto en el pasaje Mompox del Centro Internacional de Bogotá, consigue llegar a este selecto grupo.',fecha:'08/06/2018'},
		{id: '8', titulo: 'Disney lanza primer tráiler de "Dumbo", película con actores de carne y hueso', imagen: 'https://www.elespectador.com/sites/default/files/dumbo_0.jpg',descripcion: 'Las primeras imágenes de la película "Dumbo" en acción real ya están disponibles, pues Disney lanzó el primer avance del filme dirigido por Tim Burton y protagonizado por Colin Farell, Michael Keaton, Danny DeVito y Eva Green.',fecha:'06/06/2018'},
		{id: '9', titulo: 'Los icónicos baobabs milenarios están muriendo misteriosamente en África', imagen: 'https://www.elespectador.com/sites/default/files/bao1.jpg',descripcion: 'Un nuevo estudio descriptivo de varios de los árboles baobab más antiguos del África subsahariana, que se encuentran entre los árboles más grandes y más antiguos del planeta, revela una misteriosa mortandad. Los autores informan que 9 de los 13 baobabs más antiguos han muerto en los últimos años, y cinco de los seis más grandes habían muerto o habían perdido sus partes más antiguas. Y los datos, publicados en Nature Plants, afirman que las muertes no fueron causadas por una epidemia.',fecha:'06/06/2018'},
		{id: '10', titulo: 'El bitcóin sigue a la baja: cayó por debajo de los 6.800 dólares', imagen: 'http://www.eltiempo.com/files/article_main/uploads/2018/06/07/5b1937b3a0a96.jpeg',descripcion: 'El bitcóin, la criptomoneda más conocida del sistema Blockchain, no pasa por su mejor momento. Luego de alcanzar un valor de 20.000 dólares a finales de 2017, este año se ha caracterizado por mantener su tendencia a la baja. Este fin de semana el precio de la criptomoneda alcanzó los 6.765 dólares, su nivel más bajo en 2018. El pasado abril la moneda digital se cotizó a 7.300 dólares.',fecha:'06/06/2018'},
		{id: '11', titulo: 'EE.UU. vuelve a tener el supercomputador más poderoso del mundo', imagen: 'https://www.elespectador.com/sites/default/files/supercomputer-1782179_960_720_1.jpg',descripcion: 'Con un rendimiento máximo de 200.000 billones de cálculos por segundo, o 200 petaflops, Summit será ocho veces más poderosa que el sistema anterior mejor clasificado de ORNL, Titán. Para ciertas aplicaciones científicas, Summit también podrá realizar más de tres billones de cálculos de precisión mixta por segundo, o 3,3 exaops.',fecha:'06/06/2018'},
		{id: '12', titulo: 'Qué es la “Regla de Volcker” y cómo su transformación podría facilitar la próxima crisis económica global', imagen: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/11787/production/_101995517_wallstreet.jpg',descripcion: 'Cuando pasó el pánico inicial, la pregunta obvia que muchos se plantearon fue qué se puede hacer para que esto no vuelva a ocurrir, o al menos, si sucede que sea menos catastrófico.',fecha:'06/06/2018'},
       ]
				}
			},

			template: `
				<div>
						<h2> Noticias </h2>
 <v-app id="inspire">

   <v-layout v-for="(noticia, index) in noticias">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="noticia.imagen">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline" style="color:#FFFFFF;"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span style="color:red">{{noticia.fecha}}</span><br />
              <span class="grey--text" style="font-size:26px;">{{noticia.titulo}}</span><br>
            </div>
          </v-card-title>
          <v-card-actions>
             <v-btn flat color="red" :to="{ name: 'detalles', params: { id: noticia.id, titulo: noticia.titulo, desc: noticia.descripcion, imagen: noticia.imagen, fecha: noticia.fecha }}">LEER MAS</v-btn>
          </v-card-actions>
        </v-card>

        
      </v-flex>
    </v-layout>
  </v-app>
					</div>
				</div>
			`
		}

		const Post = {
			props: ["id", "titulo", "desc", "imagen", "fecha"],

			data: function(){
				return {

				}
			},
			template: `
				<div>

<v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="imagen">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline" style="color:#FFFFFF;"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <span class="grey--text" style="font-size:30px;">{{titulo}}</span><br>
              
              <span>{{desc}}</span>
              <span>{{fecha}}</span>
            </div>
          </v-card-title>

        </v-card>

        
      </v-flex>

				</div>

			`
		};
         const routes = [
            {path: '/', component: Inicio},
            {path: '/tienda', component: Tienda},
            {path: '/noticias', component: Noticias},
            {path: '/noticias/:id/detalles', name: 'detalles',component: Post, props: true,}
         ];
         const router = new VueRouter({
            routes: routes
         });


// Llamado Vue al div html

var vm = new Vue ({

	el: '#app',
	router,
	data: {
     items: [
      { title: 'Inicio', url: '/' },
      { title: 'Tienda', url: '/tienda' },
      { title: 'Noticias', url: '/noticias' }
     ],
	 links: [
	           {titulo:'Inicio', url:'/'},
               {titulo:'Tienda', url:'/tienda'},
               {titulo:'Noticias', url:'/noticias'}

	 ],
     footers: [
               {titulo:'Inicio', url:'/'},
               {titulo:'Servicios', url:'/servicios'},
               {titulo:'Tienda', url:'/tienda'},
               {titulo:'Noticias', url:'/noticias'}
     ],
    }
    

})