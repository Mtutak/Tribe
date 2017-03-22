const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
const ProfileSchema = new Schema({
  userId: {
  	type: Schema.Types.ObjectId, 
  	ref: 'User' 
  },
  title: { 
  	type: String,
  	required: true
  },
  bio: { 
  	type: String,
  	required: true
  },
  detail: { 
  	type: String
  },
  location: { 
  	type: String,
  	required: true
  }
}, 
    {
        timestamps: true
    });

module.exports = mongoose.model('Profile', ProfileSchema);