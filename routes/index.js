var express = require('express');
var router = express.Router();
var pacienteController = require("../controller/pacienteController.js");
const examen = require('../models/examen.js');
var examenController = require("../controller/examenController.js");
var ordenTrabajoController = require("../controller/ordenTrabajoController.js");

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


//PRUEBAS EXAMEN - DETERMINACIONES - REFERENCIAS
router.get('/selectDeterminacion', function(req, res, next) {
  res.render('selectDeterminacion', { title: 'Determinacion' });
});

router.get('/agregarReferencias', function(req, res, next) {
  res.render('agregarReferencias', { title: 'Referencias' });
});



router.get('/pacientes', pacienteController.listar);//listar todos los pacientes
router.get('/buscar', pacienteController.buscarPorDNI);//buscar por dni
router.post('/registrar', pacienteController.registrarPaciente);//añta de paciente
router.get('/modificarPaciente/:id', pacienteController.mostrarDatosPaciente);//selecciona un paciente para modificar
router.post('/guardarCambios', pacienteController.actualizarPaciente);//guarda la modificacion

router.get('/ordenes/crear', ordenTrabajoController.cargarfrmOrdenTrabajo);//Cargar la vista para nueva orden de trabajo
router.post('/ordenTrabajo/crear', ordenTrabajoController.crearOrdenTrabajo);//Alta de orden de trabajo
router.get('/ordenTrabajo/listar', ordenTrabajoController.listarOrdenes);//Listar orden trabajo


router.get('/examenes', examenController.listarExamenes);// muestra todos los examenes
router.get('/examenes/crear', examenController.mostrarFormCrearExamen);// carga el formulario para una alta de examen PASA a selec determinacion
//router.get('/selectDeterminacion', examenController.selectDeterminacion);
router.post('/examenes/crear', examenController.crearExamen);//guarda los datos del nuevo examen
router.get('/examenes/:id/editar', examenController.mostrarFormEditarExamen);//carga los datos a editar en un formulario
router.post('/examenes/:id', examenController.actualizarExamen);//guarda los datos actualizados
router.get('/examenes/:id/detalles', examenController.verDetalles);
router.get('/:id/detalles', examenController.verDeterminaciones);



// Ruta para manejar la solicitud POST del formulario
router.post('/registrar', (req, res) => {
  const nombre = req.body.name; // Recupera el dato del formulario
  res.send(`Hola ${nombre}`);
});

module.exports = router;
