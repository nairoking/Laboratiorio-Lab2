'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMuestra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoMuestra.hasMany(models.Muestra)
      TipoMuestra.hasMany(models.Examen)
      TipoMuestra.hasMany(models.OrdenTrabajo)
    }
  }
  TipoMuestra.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoMuestra',
  });
  return TipoMuestra;
};