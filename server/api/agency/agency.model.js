var mongoose = require('mongoose'),
	Schema = mongoose.Schema

var AgencySchema = new Schema({
  Name: String,
	Company: String,
	Email: String,
	Location: String,
	Description: String,
  Image: String
});


module.exports = mongoose.model('Agency', AgencySchema);
