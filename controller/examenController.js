const db = require('../models');

const mostrarFormCrearExamen = async (req, res) => {
  try{
         const tipoMuestras = await db.TipoMuestra.findAll();
     if (!tipoMuestras) 
      {
        return res.status(404).json({ mensaje: 'Examen no encontrado' });
      }
      

      res.render('crearExamen', { tipoMuestras });
      
  }catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el examen', error: error.message });
  }

};

const crearExamen = async (req, res) => {
  try {
    const { nombre,tipoMuestraId} = req.body;

    const resultado = await db.Examen.create({ nombre ,tipoMuestraId});
    //res.json({ nombre,tipoMuestraId });
    res.render('selectDeterminacion', {resultado});
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el examen', error: error.message });
  }
};

const mostrarFormEditarExamen = async (req, res) => {
  try {
    const { id } = req.params;
    const examen = await db.Examen.findByPk(id);
    if (!examen) {
      return res.status(404).json({ mensaje: 'Examen no encontrado' });
    }
    res.render('editarExamen', { examen });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el examen', error: error.message });
  }
};


const actualizarExamen = async (req, res) => {
  try {
    console.log("Controlador para actualizar examen ejecutándose...");
    const { id } = req.params;
    const { nombre } = req.body;
    const [numFilas, examenActualizado] = await db.Examen.update({ nombre }, { where: { id }, returning: true });
    console.log("Número de filas afectadas:", numFilas);
    console.log("Examen actualizado:", examenActualizado);
    if (numFilas === 0) {
      return res.status(404).json({ mensaje: 'Examen no encontrado' });
    }
    res.redirect('/examenes');
  } catch (error) {
    console.error("Error en el controlador de actualización:", error);

    res.status(500).json({ mensaje: 'Error al modificar el examen', error: error.message });
  }
};



const listarExamenes = async (req, res) => {
    try {
        const examenes = await db.Examen.findAll();
        const tipoMuestras = await db.TipoMuestra.findAll();
        res.render('listarExamenes', { examenes , tipoMuestras });
        
      } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener la lista de exámenes', error: error.message });
      }
  };

  const verDetalles = async (req, res) => {
    try {
      const { id } = req.params;
      const examen = await db.Examen.findByPk(id, {
        include: [{
          model: db.ExamenDeterminacion,
          include: [db.Determinacion],
        }],
      });
      res.render('detalleExamen', { examen });
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener detalles del examen', error: error.message });
    }
  };
  
  var verDeterminaciones = async (req, res) => {
  try {
    const examenId = req.params.id;

    const determinaciones = await ExamenDeterminacion.findAll({
      where: {
        examenId: examenId
      },
      include: [{
        model: Determinacion
      }]
    });

    if (!determinaciones) {
      return res.status(404).json({ mensaje: 'No se encontraron determinaciones para este examen' });
    }

    res.render('detallesDeterminaciones', { determinaciones });
  } catch (error) {
    console.error('Error al obtener determinaciones del examen:', error);
    res.status(500).json({ mensaje: 'Error al obtener determinaciones del examen' });
  }
};
  

const eliminarExamen = async (req, res) => {
  try {
    const { id } = req.params;
    const numFilas = await db.Examen.destroy({ where: { id } });
    if (numFilas === 0) {
      res.status(404).json({ mensaje: 'Examen no encontrado' });
    } else {
      res.status(200).json({ mensaje: 'Examen eliminado con éxito' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar el examen', error: error.message });
  }
};


const agregarDeterminacion = async (req, res) =>{
  const {nombre, unidadMedida, examenId} = req.body;

  try {

  const determinacion = await db.Determinacion.create({nombre,unidadMedida});
  if(determinacion){
    const examdet = await db.ExamenDeterminacion.create({examenId: examenId, determinacionId:determinacion.id});
    res.render('agregarReferencias', {examdet});
  }
 

  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear determinacion', error: error.message });
  }

};


const crearExamenConDeterminacionesYValores = async (req, res) => {
  const { nombreExamen,tipoMuestraId, determinaciones, valoresReferencia } = req.body;

  const t = await db.sequelize.transaction(); // Inicia la transacción

  try {
    // Crea el examen
    const examen = await db.Examen.create({ nombre: nombreExamen, tipoMuestraId }, { transaction: t });

    // Crea las determinaciones asociadas al examen
    for (const determinacionData of determinaciones) {
      const determinacion = await db.Determinacion.create({
        nombre: determinacionData.nombre,
        ExamenId: examen.id, // Asocia la determinación al examen
      }, { transaction: t });

      // Crea los valores de referencia asociados a la determinación
      for (const valorReferenciaData of valoresReferencia) {
        await db.ValorReferencia.create({
          rangoMinimo: valorReferenciaData.rangoMinimo,
          rangoMaximo: valorReferenciaData.rangoMaximo,
          DeterminacionId: determinacion.id, // Asocia el valor de referencia a la determinación
        }, { transaction: t });
      }
    }

    await t.commit(); // Confirma la transacción

    res.status(200).json({ mensaje: 'Examen creado exitosamente' });
  } catch (error) {
    await t.rollback(); // Deshace la transacción en caso de error
    res.status(500).json({ mensaje: 'Error al crear el examen', error: error.message });
  }
};

const agregarValoresReferencia = async (req, res) =>{
 const{rango_min,rango_max,descripcion,examenId,determinacionId,idexd, examdet } = req.body;

 try{
  const valores = await db.ValoresReferencia.create({rango_min,rango_max,descripcion,determinacionId});
  if(valores){
    const id = parseInt(idexd, 10);

    /*const examdet2 = db.ExamenDeterminacion.findOne({
      where: {
        id: examdet.id
      },
      attributes: {
        exclude: ['ExamenDeterminacionId', 'ExamenId']
      }
    });*/

    //res.json({valores, idexd, examdet, examdet2});
    res.render('agregarReferencias', {examdet});
  }

 }catch(error){
  res.status(500).json({ mensaje: 'Error al crear valores de referencia', error: error.message });
 }
};
module.exports = { agregarValoresReferencia, agregarDeterminacion, crearExamenConDeterminacionesYValores,crearExamen,verDetalles,verDeterminaciones, actualizarExamen, eliminarExamen, listarExamenes, mostrarFormCrearExamen, mostrarFormEditarExamen };
