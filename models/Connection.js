const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
const ConnectionSchema = new Schema({
  //your userId 
  userId: {
  	type: Schema.Types.ObjectId, 
  	ref: 'User' 
  },
  connections: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, 
    {
        timestamps: true
    });

module.exports = mongoose.model('Connection', ConnectionSchema);