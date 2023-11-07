'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('ValoresReferencia', 'descripcion', {
      type: Sequelize.STRING,
      allowNull: true, // Puedes cambiar esto según tus requisitos
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('ValoresReferencia', 'descripcion');
  }
};
