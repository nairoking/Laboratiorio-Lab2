'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ValoresReferencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ValoresReferencia.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    determinacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Determinacions', // Nombre de la tabla de Determinacion
        key: 'id'
      }
    }, 
    rango_min: DataTypes.FLOAT,
    rango_max: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ValoresReferencia',
  });
  return ValoresReferencia;
};