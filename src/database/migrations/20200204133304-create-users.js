'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email : {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,

      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      created_at: {
        tyoe: Sequelize.DATE,
        allowNull: false,
      },
      update_at: {},

    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
