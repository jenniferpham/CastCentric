var mongoose = require('mongoose'),
	Schema = mongoose.Schema

	var DirectorSchema = new Schema({
		Name: String,
		Email: String,
		Role: String,
		Location: String,
		WorkHistory:{
			Title: String,
			Comapny: String,
			Description: String
		},
		ProfileImage: String,
		Education:{
			School: String,
			Degree: String,
			Year: Number
		},
		OpUrl: String
	});


	module.exports = mongoose.model('Director', DirectorSchema)