const db = require('../models');

const cargarfrmOrdenTrabajo = async (req, res) => {
  try{
        const pacientes = await db.Paciente.findAll();
        const estados = await db.Estado.findAll();
        const bioquimicos = await db.Bioquimico.findAll();
        const examenes = await db.Examen.findAll();
        const muestras = await db.Muestra.findAll();

      res.render('crearOrdenDeTrabajo', { pacientes , estados, bioquimicos, examenes, muestras});
      
  }catch (error) {
    res.status(500).json({ mensaje: 'Error al cargar la Orden de trabajo', error: error.message });
  }
  
};


const crearOrdenTrabajo = async (req, res) => {
    try {
      const { pacienteId, estadoId, bioquimicoId, examenId, muestraId, fecha } = req.body;
  
      // Verifica que los campos requeridos no estén vacíos
      if (!pacienteId || !estadoId || !bioquimicoId || !examenId  || !fecha) {
        return res.status(400).json({ mensaje: 'Todos los campos son obligatorios.' });
      }
  
      // Crea la orden de trabajo
      const nuevaOrdenTrabajo = await db.OrdenTrabajo.create({
        pacienteId,
        estadoId,
        bioquimicoId,
        examenId,
        muestraId,
        fecha,
      });
  
      // Si todo va bien, devuelve una respuesta satisfactoria
      listarOrdenes(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: 'Error al crear la orden de trabajo.' });
    }
  };

const listarOrdenes = async (req, res) => {
  try {
      const ordenes = await db.OrdenTrabajo.findAll({attributes: { exclude: ['TipoMuestraId'] }});
      const pacientes = await db.Paciente.findAll();
      const estados = await db.Estado.findAll();
      const bioquimicos = await db.Bioquimico.findAll();
      const examenes = await db.Examen.findAll();
      const muestras = await db.Muestra.findAll();
      res.render('listarOrdenes', { ordenes,pacientes , estados, bioquimicos, examenes, muestras});
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener la lista de Ordenes de trabajo', error: error.message });
    }
};

/*const listarOrdenes2 = async (req, res) => {
  try {
    const ordenes = await db.OrdenTrabajo.findAll({
      include: [
        { model: db.Paciente, attributes: ['nombre', 'apellido'] },
        { model: db.Estado, attributes: ['nombre'] },
        { model: db.Bioquimico, attributes: ['nombre'] },
        { model: db.Examen, attributes: ['nombre'] },
        { model: db.Muestra, attributes: ['id'] }
      ]
    });

    res.render('listarOrdenes', { ordenes });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener la lista de Ordenes de trabajo', error: error.message });
  }
};*/



module.exports = { cargarfrmOrdenTrabajo, crearOrdenTrabajo, listarOrdenes }