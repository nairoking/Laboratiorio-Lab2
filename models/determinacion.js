'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Determinacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Determinacion.belongsTo(models.Examen, { foreignKey: 'examenId' });

      // Asociación con ValoresReferencia
      Determinacion.hasMany(models.ValoresReferencia, { foreignKey: 'determinacionId' });
    }
  }
  Determinacion.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    unidadMedida: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Determinacion',
  });
  return Determinacion;
};