// Dependencies
// =============================================================
//NEED TO UPDATE
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "usertoproject" model that matches up with DB - a model represents a table in the DB
// Models are defined with sequelize.define('name', {attributes}, {options})
var UserToProject = sequelize.define("usertoproject", {
  user_id: { type: Sequelize.STRING, primaryKey: true, allowNull: false},
  project_id: { type: Sequelize.STRING, allowNull: false},
});

// Syncs with DB
UserToProject.sync();

// Makes the usertoproject Model available for other files (will also create a table)
module.exports = UserToProject;
