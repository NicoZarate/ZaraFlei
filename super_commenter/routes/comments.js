var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next){
    //res.send('el id del producto es '+req.params.id);
    var connection = require('../model/insert.js');
    connection.insert(req.params.id, 'pepe', 'hola mundo');
    connection.selectAll(req.params.id); 
    var commentss = [ { author:"pepe", message:"hola"}, {author:"juan", message:"mundo"} ];

    res.render('comments', { comments : commentss, id: req.params.id } );   
});

module.exports = router;
