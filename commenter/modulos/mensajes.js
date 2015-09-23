function dibujarCodigoHtml(mensajes_lista){
   var html = '<!DOCTYPE html>';
   html += '<html>';
   html += '<head>';
   html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">';
   html += '<style> ';
   
   
   html +=  'body{ background:#FFFFFF;font-family:arial }'
   html += '* { box-sizing: border-box;}';
   html +=' div.caja{ background-color: #E4ECD1;width: 40%;top:0; height:auto; margin:2% auto; box-shadow:0px 0px 10px #555555;padding: 1em;border-radius: 10px 0px 10px 0px;}';
   
   html += 'div.caja.comentarios{width:90%;margin:5%;}';
   
   html +=  'input[type=text],textarea{margin: 5px 0 20px 0; resize:none;width: 100%;padding: 0.5em; border: 0px;border-radius: 10px 0px 10px 0px; }';
   html +=  'textarea{ padding:2em;  }';
   html +=	'input[type=submit]{padding:1em; width: 100%; box-shadow:0px 0px 2px #555555; background: #DEEBDF;border: 0px;color:black;font-family: arial black;border-radius: 10px 0px 10px 0px;}';
   html += ' input[type=submit]:hover{background: #DBEBB7;}';
   html += ' h1,label,p { margin-left:0%; color: #000; font-size: 15px;}';
   html += ' h1{ font-size: 25px;}';
   
   
   html +='</style>';
   html += '</head>';
   html += '<body>';
   html += '<div class="caja">';
   html += '<form action="" method="post">';
   html += '<label> Nombre </label> <br />';
   html += '<input type="text" name="nombre" required="required" /> <br />';
   html += '<label> Mensaje </label> <br />';
   html += '<textarea name="mensaje" required="required"></textarea> <br />';
   html += '<input type="submit" value="Enviar" />';
   html += '</form>';
   html += '</div>';
   html += '<div class="caja comentarios">';
   html += mostrarMensajes(mensajes_lista);
    html +='<p> <strong>  hola mundo  </strong> dijo: </p>';
    html += '</div>';
   html += '</body>';
   html += '</html>';
   return html;
}
function mostrarMensajes(mensajes_lista){
   var html = '<ul>';
   for(var i in mensajes_lista){
      html += '<li>';
      html += '<p> <strong> ' + mensajes_lista[i].nombre + ' </strong> dijo: </p>';
      html += '<p> ' + mensajes_lista[i].mensaje + ' </p>';
      html += '</li>';
   }
   html += '</ul>';
   return html;
}
//con exports permitimos que la funcion sea utilizada por otro objeto
exports.dibujarCodigoHtml = dibujarCodigoHtml;
