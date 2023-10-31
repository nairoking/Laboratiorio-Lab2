'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenTrabajo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrdenTrabajo.belongsTo(models.Estado);
      OrdenTrabajo.belongsTo(models.Paciente);
      OrdenTrabajo.belongsTo(models.Bioquimico);
      OrdenTrabajo.hasOne(models.Muestra);
    }
  }
  OrdenTrabajo.init({
    pacienteId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    bioquimicoId: DataTypes.INTEGER,
    examenId: DataTypes.INTEGER,
    muestraId: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OrdenTrabajo',
  });
  return OrdenTrabajo;
};