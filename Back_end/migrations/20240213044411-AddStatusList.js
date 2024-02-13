'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Lists', 'status' , {type: Sequelize.STRING, allowNull: false, defaultValue: 'to-do'})
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Lists', 'status', {})
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
