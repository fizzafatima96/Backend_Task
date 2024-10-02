"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
   
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
