var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  title: {
    type: String
  },
  summary: {
    type: String
  },
  detail: {
    type: String
  },
  location: {
    type: String
  },
  latitude: {
    type: Number
  },
  longitude: {
    type: Number
  },
  date: {
    type: Date
  },
  creator: {
    type: String
  },
  team: {
    type: Array
  }

});

var Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
