const {Paciente} = require('../models');  // Importa el modelo Paciente

module.exports = {
  // Método para listar todos los pacientes
  async listar(req, res) {
    try {
      const pacientes = await Paciente.findAll();
      res.render("pacientes", { pacientes: pacientes });
    } catch (error) {
      res.render("error", { error: error });
    }
  },

  // Método para obtener un paciente por su ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const paciente = await Paciente.findByPk(id);
      if (paciente) {
        res.json(paciente);
      } else {
        res.status(404).json({ mensaje: 'Paciente no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Agrega más métodos según sea necesario para tu aplicación
};
