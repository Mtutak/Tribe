// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Project" model that matches up with DB - a model represents a table in the DB
// Models are defined with sequelize.define('name', {attributes}, {options})
var Project = sequelize.define("project", {
  project_id: { type: Sequelize.STRING, primaryKey: true, allowNull: false},
  // the name of the project (a string)
  title: { type: Sequelize.STRING, allowNull: false},
  // the project's summary (a string)
  summary: { type: Sequelize.STRING, allowNull: false},
  // the project's detail (a string)
  detail: { type: Sequelize.TEXT, allowNull: true},
  //the projects location
  location: { type: Sequelize.STRING, allowNull: false},
  // Long Lat and Validation
  latitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -90, max: 90 }
  },
  longitude: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: { min: -180, max: 180 }
  },
  // the user_id of the creator of the project
  user_id: { type: Sequelize.INTEGER, allowNull: false},
  // the date the project was generated
  date: { type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: false}
});

// Syncs with DB
Project.sync();

// Makes the project Model available for other files (will also create a table)
module.exports = Project;