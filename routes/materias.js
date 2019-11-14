var express = require('express');
var router = express.Router();
var materiaModel = require('../models/Materia');

/* GET users listing. */
router.post('/', function(req,res){
  let Materia = new materiaModel({
      nombre: req.body.name,
      uv: req.body.uv,
      descripcion: req.body.descripcion,
      nota: req.body.nota
  })

  Materia.save(function(err){
      if (err){
          res.status(500)
          res.send({err});
      }
      res.send("Se ha inscrito con exito :D");
  });
});

module.exports = router;
