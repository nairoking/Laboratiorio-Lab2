'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paciente.init({
    id: DataTypes.INTEGER,
    contrasena: DataTypes.STRING,
    email: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    genero: DataTypes.STRING,
    telefono: DataTypes.STRING,
    rol: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Paciente',
  });
  return Paciente;
};