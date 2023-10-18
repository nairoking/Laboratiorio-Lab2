const Paciente = require('../models').Paciente;  // Importa el modelo Paciente

module.exports = {
  // Métodos para manipular el modelo Usuario
  async getAll(req, res) {
    try {
      const pacientes = await Usuario.findAll();
      res.json(pacientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findByPk(id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Agrega más métodos según sea necesario para tu aplicación
};

exports.listar = function(req,res){
    Paciente.findAll()
        .then((pacientes) => {
            res.render("pacientes", {pacientes:pacientes})
        })
    .catch((err)=> res.render("error",{error:err}));
}