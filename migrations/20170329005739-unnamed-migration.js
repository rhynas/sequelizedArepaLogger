'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable('arepas',
    {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false

        },
        arepa_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        devoured: {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        },
        date_created: {
          type: Sequelize.DATE,
          allowNull: false
        },
        date_devoured: {
          type: Sequelize.DATE
        }
    })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('arepas', {});
  }
};

