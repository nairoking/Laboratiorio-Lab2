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

  //Buscar x dni
  async buscarPorDNI(req, res) {
    const dni = req.query.dni;
    try {
      const paciente = await Paciente.findOne({ where: { dni } });

      if (!paciente) {
        return res.render('pacientes', { pacientes: [] });
        //return res.render('error', { error: 'Paciente no encontrado' });
      }

      return res.render('pacientes', { pacientes: [paciente] });
    } catch (error) {
      res.render('error', { error });
    }
  },

 //Alta paciente
  async registrarPaciente(req, res) {
    const { name, apellido, DNI, telefono, password, email, fechaNac, genero, direccion } = req.body;

    try {
      const paciente = await Paciente.create({
        nombre: name,
        apellido,
        dni: DNI,
        telefono,
        contrasena: password,
        email,
        fechaNacimiento: fechaNac,
        genero,
        direccion,
        rol: 2
      });

      res.redirect('/pacientes'); 
    } catch (error) {
      res.render('error', { error });
    }
  },

// carga el formulario para editar un paciente
  async mostrarDatosPaciente(req, res) {
    const pacienteId = req.params.id;

    try {
      const paciente = await Paciente.findByPk(pacienteId);
      res.render('modificarPaciente', { paciente });
    } catch (error) {
      res.render('error', { error });
    }
  },
// Actualizar paciente
  async actualizarPaciente(req, res) {
    const { id, contrasena, email, nombre, apellido, dni, fechaNacimiento, genero, telefono, rol, direccion } = req.body;

    try {
      await Paciente.update({
        contrasena,
        email,
        nombre,
        apellido,
        dni,
        fechaNacimiento,
        genero,
        telefono,
        rol,
        direccion
      }, {
        where: {
          id: id
        }
      });

      res.redirect('/pacientes');
    } catch (error) {
      res.render('error', { error });
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
