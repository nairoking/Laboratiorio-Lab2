'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tecnico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tecnico.belongsTo(models.Rol, { foreignKey: 'rol' });
    }
  }
  Tecnico.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    rol: DataTypes.INTEGER,
    email: DataTypes.STRING,
    contrasena: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tecnico',
  });
  return Tecnico;
};