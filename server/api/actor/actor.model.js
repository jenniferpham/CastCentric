'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ActorSchema = new Schema({
	Name: String,
	Email: String,
	ProfileImage: String,
	Role:String,
	Location: String,
	WorkHistory:[{
		Title: String,
		RoleType: String,
		Director: String,
		Company: String
	}],
	PhysicalAttribute: {
		Gender: String,
		AgeRange:{
			Start: Number,
			 End: Number
		},
		Height: String,
		Build: String,
		Hair: String,
		Eyes: String,
		Ethnicity: String
	},
	EducationTraining:[{
		School: String,
		Teacher: String,
		Degree: String,
		Location: String,
		Year: Number
	}],
	OpUrl: String
});

module.exports = mongoose.model('Actor', ActorSchema);
