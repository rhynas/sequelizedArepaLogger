'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
    queryInterface.createTable('arepas',{
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false

        },
        arepa_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        devoured: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false
        }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('arepas', {});
  }
};

