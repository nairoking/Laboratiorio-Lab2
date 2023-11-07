'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('recepcionista', 'email', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('recepcionista', 'contrasena', {
      type: Sequelize.STRING,
    });

    await queryInterface.addColumn('tecnicos', 'email', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('tecnicos', 'contrasena', {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('recepcionista', 'email');
    await queryInterface.removeColumn('recepcionista', 'contrasena');

    await queryInterface.removeColumn('tecnicos', 'email');
    await queryInterface.removeColumn('tecnicos', 'contrasena');
  }
};
