var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Arepa = sequelize.define("arepas", {
  arepa_name: {
    type: Sequelize.STRING    
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false

  }
}, {
  timestamps: false,
  freezeTableName: true, // Model tableName will be the same as the model name instead of being pluralized
   // define the table's name
  tableName: 'arepas'
});
  

// Syncs with DB
Arepa.sync();

// Makes the Arepas Model available for other files (will also create a table)
module.exports = Arepa;

