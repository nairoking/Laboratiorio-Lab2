'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Muestras', 'examenId');
    await queryInterface.removeColumn('Muestras', 'tipo');
    await queryInterface.addColumn('Muestras', 'fechaToma', {
      type: Sequelize.DATE
    });
    await queryInterface.addColumn('Muestras', 'tipoMuestra', {
      type: Sequelize.INTEGER
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('Muestras', 'examenId', {
      type: Sequelize.INTEGER
    });
    await queryInterface.addColumn('Muestras', 'tipo', {
      type: Sequelize.INTEGER
    });
    await queryInterface.removeColumn('Muestras', 'fechaToma');
    await queryInterface.removeColumn('Muestras', 'tipoMuestra');
  }
};
