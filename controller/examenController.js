const db = require('../models');

const crearExamen = async (req, res) => {
  try {
    const { nombre } = req.body;
    const examen = await db.Examen.create({ nombre });
    res.status(201).json({ mensaje: 'Examen creado con éxito', examen });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear el examen', error: error.message });
  }
};

const modificarExamen = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const [numFilas, [examen]] = await db.Examen.update({ nombre }, { where: { id }, returning: true });
    if (numFilas === 0) {
      res.status(404).json({ mensaje: 'Examen no encontrado' });
    } else {
      res.status(200).json({ mensaje: 'Examen modificado con éxito', examen });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al modificar el examen', error: error.message });
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

module.exports = { crearExamen, modificarExamen, eliminarExamen };
