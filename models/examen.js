'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Examen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Examen.belongsToMany(models.Determinacion, { through: 'ExamenDeterminacion' });

      // Asociación con Muestra (one-to-many)
      Examen.hasMany(models.Muestra, { foreignKey: 'examenId' });
    }
  }
  Examen.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Examen',
  });
  return Examen;
};