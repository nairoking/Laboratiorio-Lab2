var express = require('express');
var router = express.Router();
var pacienteController = require("../controller/pacienteController.js");
const examen = require('../models/examen.js');
var examenController = require("../controller/examenController.js");

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


router.get('/pacientes', pacienteController.listar);//listar todos los pacientes
router.get('/buscar', pacienteController.buscarPorDNI);//buscar por dni
router.post('/registrar', pacienteController.registrarPaciente);//añta de paciente
router.get('/modificarPaciente/:id', pacienteController.mostrarDatosPaciente);//selecciona un paciente para modificar
router.post('/guardarCambios', pacienteController.actualizarPaciente);//guarda la modificacion


router.get('/examenes', examenController.listarExamenes);
router.get('/examenes/crear', examenController.mostrarFormCrearExamen);
router.post('/examenes/crear', examenController.crearExamen);
router.get('/examenes/:id/editar', examenController.mostrarFormEditarExamen);
router.post('/examenes/:id', examenController.actualizarExamen);
router.get('/examenes/:id/detalles', examenController.verDetalles);
router.get('/:id/detalles', examenController.verDeterminaciones);



// Ruta para manejar la solicitud POST del formulario
router.post('/registrar', (req, res) => {
  const nombre = req.body.name; // Recupera el dato del formulario
  res.send(`Hola ${nombre}`);
});

module.exports = router;
