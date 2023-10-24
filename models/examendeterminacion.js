'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExamenDeterminacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      

    }
  }
  ExamenDeterminacion.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    examenId: DataTypes.INTEGER,
    
    determinacionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ExamenDeterminacion',
    tableName: 'examendeterminacions',
  });
  return ExamenDeterminacion;
};