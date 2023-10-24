const db = require('../models');

const crearDeterminacion = async (req, res) => {
  try {
    const { nombre, unidadMedida } = req.body;
    const determinacion = await db.Determinacion.create({ nombre, unidadMedida });
    res.status(201).json({ mensaje: 'Determinación creada con éxito', determinacion });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la determinación', error: error.message });
  }
};

const modificarDeterminacion = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, unidadMedida } = req.body;
    const [numFilas, [determinacion]] = await db.Determinacion.update({ nombre, unidadMedida }, { where: { id }, returning: true });
    if (numFilas === 0) {
      res.status(404).json({ mensaje: 'Determinación no encontrada' });
    } else {
      res.status(200).json({ mensaje: 'Determinación modificada con éxito', determinacion });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al modificar la determinación', error: error.message });
  }
};

const eliminarDeterminacion = async (req, res) => {
  try {
    const { id } = req.params;
    const numFilas = await db.Determinacion.destroy({ where: { id } });
    if (numFilas === 0) {
      res.status(404).json({ mensaje: 'Determinación no encontrada' });
    } else {
      res.status(200).json({ mensaje: 'Determinación eliminada con éxito' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la determinación', error: error.message });
  }
};

module.exports = { crearDeterminacion, modificarDeterminacion, eliminarDeterminacion };
