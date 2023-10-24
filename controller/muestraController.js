const db = require('../models');

const crearMuestra = async (req, res) => {
  try {
    const { tipo, pacienteId } = req.body;
    const muestra = await db.Muestra.create({ tipo, pacienteId });
    res.status(201).json({ mensaje: 'Muestra creada con éxito', muestra });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear la muestra', error: error.message });
  }
};

const modificarMuestra = async (req, res) => {
  try {
    const { id } = req.params;
    const { tipo, pacienteId } = req.body;
    const [numFilas, [muestra]] = await db.Muestra.update({ tipo, pacienteId }, { where: { id }, returning: true });
    if (numFilas === 0) {
      res.status(404).json({ mensaje: 'Muestra no encontrada' });
    } else {
      res.status(200).json({ mensaje: 'Muestra modificada con éxito', muestra });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al modificar la muestra', error: error.message });
  }
};

const eliminarMuestra = async (req, res) => {
  try {
    const { id } = req.params;
    const numFilas = await db.Muestra.destroy({ where: { id } });
    if (numFilas === 0) {
      res.status(404).json({ mensaje: 'Muestra no encontrada' });
    } else {
      res.status(200).json({ mensaje: 'Muestra eliminada con éxito' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar la muestra', error: error.message });
  }
};

module.exports = { crearMuestra, modificarMuestra, eliminarMuestra };
