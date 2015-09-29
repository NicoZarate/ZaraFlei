
module.exports.insert = function(id_product, name, message){
    var connection = require('./connection.js');
    var query = connection.query('INSERT INTO comments(id_product, author, message) VALUES(?, ?, ?)', [id_product, name, message], function(error, result){
       if(error){
          throw error;
       }else{
          console.log(result);
       }
    });  
//    connection.end();
//  PREGUNTAR   
}

module.exports.selectAll = function(id_product){
    var connection = require('./connection.js');
    var query = connection.query('SELECT author, message FROM comments WHERE id_product = ?', [id_product], function(error, result){
       if(error){
          throw error;
       }else{
          console.log(result);
     //     callback(result); TODO?
       }
    });  
//    connection.end();
//  ESTOY DEJANDO LA CONEXION CON LA BD ABIERTA, WTF?
//  PREGUNTAR!! 

}
