'use strict';

const {hashPassword} = require('../helpers/hashPassword')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const user = [
      {
        email: "user1@mail.com",
        password : "user1",
        role:  true
      },
      {
        email: "user2@mail.com",
        password : "user2",
        role: false
      }
    ]

    user.map((el) => {
      el.password = hashPassword(el.password)
      el.createdAt = el.updatedAt = new Date()
      return el
    })

    await queryInterface.bulkInsert('Users', user, {})


    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
