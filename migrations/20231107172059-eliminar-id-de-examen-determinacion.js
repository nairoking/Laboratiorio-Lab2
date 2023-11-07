'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('ExamenDeterminacions', 'id');
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('ExamenDeterminacions', 'id', {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    });
  }
};
