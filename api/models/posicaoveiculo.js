'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PosicaoVeiculo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PosicaoVeiculo.belongsTo(models.Veiculos, {
        foreignKey: 'veiculos_id'
    })    
    }
  }
  PosicaoVeiculo.init({
    Latitude: DataTypes.DOUBLE,
    Longitude: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'PosicaoVeiculo',
  });
  return PosicaoVeiculo;
};