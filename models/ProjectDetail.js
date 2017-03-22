//Need to add further validation
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
const ProjectDetailSchema = new Schema({
  //link project detail with project id
  projectId: {
  	type: Schema.Types.ObjectId, 
  	ref: 'Project' 
  },
  title: {
  	type: String,
  	required: true
  },
  summary: {
  	type: String,
  	required: true
  },
  detail: {
  	type: String,
  	required: true
  },
  location: {
  	type: String,
  	required: true
  },
  latitude: {
  	type: Number
  },
  longitude: {
  	type: Number
  }
}, 
    {
        timestamps: true
    });

module.exports = mongoose.model('ProjectDetail', ProjectDetailSchema);