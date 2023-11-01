const {Bioquimico} = require('../models');  // Importa el modelo Paciente

module.exports = {

  // Método para listar todos los pacientes
  async listar(req, res) {
    try {
      const bioquimico = await Bioquimico.findAll();
      res.render("pacientes", { bioquimicos: bioquimico });
    } catch (error) {
      res.render("error", { error: error });
    }
  },

  //Buscar x dni
  async buscarPorDNI(req, res) {
    const dni = req.query.dni;
    try {
      const bioquimico = await Bioquimico.findOne({ where: { dni } });

      if (!bioquimico) {
        return res.render('pacientes', { bioquimicos: [] });
        //return res.render('error', { error: 'Paciente no encontrado' });
      }

      return res.render('pacientes', { bioquimicos: [bioquimico] });
    } catch (error) {
      res.render('error', { error });
    }
  },

 //Alta paciente
  async registrarBioquimico(req, res) {
    const { nombre, apellido, DNI, telefono, password, email, fechaNac, genero, direccion, matricula } = req.body;

    try {
      const bioquimico = await Bioquimico.create({
        nombre: nombre,
        apellido,
        dni: DNI,
        telefono,
        contrasena: password,
        email,
        fechaNacimiento: fechaNac,
        genero,
        direccion,
        matricula,
        rol: 3
      });

      res.redirect('/pacientes'); 
    } catch (error) {
      res.render('error', { error });
    }
  },

}