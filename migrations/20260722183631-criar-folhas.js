'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Folhas', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      funcionarioId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      competencia: {
        type: Sequelize.STRING,
        allowNull: false
      },

      salarioBruto: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },

      inss: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },

      fgts: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
      },

      descontoValeTransporte: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: 0
      },

      descontoPlanoSaude: {
        type: Sequelize.DECIMAL(10,2),
        defaultValue: 0
      },

      salarioLiquido: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
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

  async down(queryInterface) {
    await queryInterface.dropTable('Folhas');
  }
};