'user strict';

var Actor = require('../api/actor/actor.model.js')


Actor.find({}).remove(function(){
	Actor.create({
	Name: 'Joe Cool',
	Email:'joe@gmail.com',
	ProfileImage: '',
	Role:'actor',
	Location: 'Santa Monica, Ca',
	WorkHistory: {
		Title: 'Avengers',
		RoleType: 'Lead Role',
		Director: 'John Whedon',
		Company: 'Disney'
	},
	PhysicalAttribute: {
		Gender: 'Male',
		AgeRange:{ 
			Start: 24,
		    End: 35
		},
		Height: "5'10",
		Build: 'Built',
		Hair: 'Comb Over',
		Eyes: 'Green',
		Ethnicity: 'Asian'
	},
	EducationTraining:{
		School: 'Santa Monica College',
		Teacher: '',
		Degree: 'Theater',
		Location: 'Santa Monica,CA',
		Year: 2014
	},
	OpUrl: 'Facebook.com'
	})
});