var express = require('express');
var router = express.Router();
var pacienteController = require("../controller/pacienteController");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/buscador', function(req, res, next) {
  res.render('buscador', { title: 'Express' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Express' });
});

router.get('/pacientes', pacienteController.listar);


// Ruta para manejar la solicitud POST del formulario
router.get('/registrar', (req, res) => {
  const nombre = req.body.name; // Recupera el dato del formulario
  res.send('Hola');
});

module.exports = router;
