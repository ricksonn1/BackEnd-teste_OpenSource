'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PosicaoVeiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Latitude: {
        type: Sequelize.DOUBLE
      },
      Longitude: {
        type: Sequelize.DOUBLE
      },
      veiculos_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Veiculos', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PosicaoVeiculos');
  }
};