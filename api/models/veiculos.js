'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Veiculos.belongsTo(models.Linhas, {
        foreignKey: 'linhas_id'
      })

      Veiculos.hasMany(models.PosicaoVeiculo, {
          foreignKey: 'veiculos_id'
      })
    }
  }
  Veiculos.init({
    Nome: DataTypes.STRING,
    Modelo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};