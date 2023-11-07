const jwt = require('jsonwebtoken');
const secretKey = 'mySecretKey'; // Asegúrate de usar un secreto seguro en una aplicación real
const db = require('../models');
// Importa los modelos necesarios
const Paciente = require('../models/paciente');
//const Recepcionista = require('../models/recepcionistaModel');
//const Tecnico = require('../models/tecnicoModel');
const Bioquimico = require('../models/bioquimico');




// Método para manejar el inicio de sesión
const login = (req, res) => {
    const { email, contrasena, nombreRol } = req.body;
  
    let UserModel;
    let roleId;
  
    // Determina el modelo y roleId según el nombre del rol
    switch (nombreRol) {
      case 'Paciente':
        UserModel = db.Paciente;
        roleId = 2; // Por ejemplo, si el ID del rol Paciente es 1 en tu base de datos
        break;
      case 'Recepcionista':
        UserModel = db.Recepcionista;
        roleId = 4; // ID del rol Recepcionista
        break;
      case 'Tecnico':
       UserModel = Tecnico;
        roleId = 5; // ID del rol Tecnico
        break;
      case 'Bioquimico':
        UserModel = db.Bioquimico;
        roleId = 3; // ID del rol Bioquimico
        break;
      default:
        res.status(401).json({ message: 'Rol no válido' });
        return;
    }
  
    // Busca al usuario en la base de datos
    UserModel.findOne({ where: { email, contrasena} })
      .then(user => {
        if (user) {
          const token = jwt.sign({ userId: user.id, nombreRol }, secretKey, { expiresIn: '1h' });
  
          // Redirecciona según el rol
          switch (nombreRol) {
            case 'Paciente':
                res.cookie('jwtToken', token, { httpOnly: true });
                res.render('indexPaciente', { token });
                break;
            case 'Recepcionista':
                res.cookie('jwtToken', token, { httpOnly: true });
                res.render('indexRecepcionista', { token });
              break;
            case 'Tecnico':
                res.cookie('jwtToken', token, { httpOnly: true });
                res.render('indexBioquimico', { token });
              break;
            case 'Bioquimico':
                res.cookie('jwtToken', token, { httpOnly: true });
                res.render('indexBioquimico', { token });
              break;
            default:
              res.status(401).json({ message: 'Rol no válido' });
              return;
          }
        } else {
          res.status(401).json({ message: 'Credenciales inválidas' });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
      });
  };
  
  module.exports = {
    login
  };