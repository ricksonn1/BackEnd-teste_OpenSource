'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paradas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Paradas.hasMany(models.Linhas, {
        foreignKey: 'paradas_id'
      })

    }
  }
  Paradas.init({
    Nome: DataTypes.STRING,
    Latitude: DataTypes.DOUBLE,
    Longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Paradas',
  });
  return Paradas;
};