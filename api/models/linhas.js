'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Linhas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Linhas.belongsTo(models.Paradas, {
        foreignKey: 'paradas_id'
      })
      Linhas.hasMany(models.Veiculos, {
        foreignKey: 'linhas_id'
      })
    }
  }
  Linhas.init({
    Nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Linhas',
  });
  return Linhas;
};