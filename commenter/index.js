var http = require('http');
var querystring = require('querystring');
var mensajes = require('./modulos/mensajes');
var mensajes_lista = new Array();
var data_post_maximo = 8 * 1024 * 1024; //límite para no colgar el server
http.createServer(function(peticion, respuesta){
    //verifico que se envíe algo por POST
    if(peticion.method == 'POST'){
      var data_post = '';
//con el evento on() y el valor 'data' recuperamos los datos y los concatenamos en una variable
      peticion.on('data', function(data_cortada){
         data_post += data_cortada;
         if(data_post.length > data_post_maximo){ 
         // si los datos pasan el limite, detiene la ejecucion
            this.pause();
            respuesta.writeHead(413);
            respuesta.end('Ha surgido un error y no puede continuarse.');
         }
      });
//con el evento on() y el valor 'end' sabemos que terminamos de recuperar los datos
      peticion.on('end', function(){
      //con el metodo parse() del objeto querystring convertimos a JSON
      // para tratarlo más comodamente, y lo guardamos en data_post_objeto
         var data_post_objeto = querystring.parse(data_post);
         //guardamos las propiedades del objeto en un array
        // posteriormente debería ser una bd donde guardar y obtener
         mensajes_lista.push({nombre: data_post_objeto.nombre, mensaje: data_post_objeto.mensaje});
         respuesta.writeHead(200, {'Content-Type': 'text/html'});
         //mandamos a escribir los datos del array
         respuesta.end(mensajes.dibujarCodigoHtml(mensajes_lista));
      });
   }else{ 
   // si no se mandó nada sólo muestro los mensajes
      respuesta.writeHead(200, {'Content-Type': 'text/html'});
      respuesta.end(mensajes.dibujarCodigoHtml(mensajes_lista));
   }
}).listen(3000, '127.0.0.1');
console.log('Servidor funcionando.');

