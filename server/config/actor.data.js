'user strict';

var Actor = require('../api/actor/actor.model.js')


Actor.find({}).remove(function(){
	Actor.create({
	Name: 'Joe Cool',
	Email:'joe@gmail.com',
	ProfileImage: 'http://s3-media1.fl.yelpassets.com/bphoto/nf2lPpoAlNL-_erxACkeJw/l.jpg',
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
		Ethnicity: 'Spanish'
	},
	EducationTraining:{
		School: 'Santa Monica College',
		Teacher: '',
		Degree: 'Theater',
		Location: 'Santa Monica,CA',
		Year: 2014
	},
	OpUrl: 'Facebook.com'
	},{
	Name: 'Sally Mo',
	Email:'SallyMo@gmail.com',
	ProfileImage: 'https://s-media-cache-ak0.pinimg.com/236x/6e/4b/11/6e4b11e8a5928e7acaa7fb9effac8043.jpg',
	Role:'actor',
	Location: 'Santa Monica, Ca',
	WorkHistory: {
		Title: 'Avengers',
		RoleType: 'Lead Role',
		Director: 'John Whedon',
		Company: 'Disney'
	},
	PhysicalAttribute: {
		Gender: 'Female',
		AgeRange:{ 
			Start: 24,
		    End: 35
		},
		Height: "5'10",
		Build: 'Built',
		Hair: 'Comb Over',
		Eyes: 'Green',
		Ethnicity: 'Spanish'
	},
	EducationTraining:{
		School: 'Santa Monica College',
		Teacher: '',
		Degree: 'Theater',
		Location: 'Santa Monica,CA',
		Year: 2014
	},
	OpUrl: 'Facebook.com'

	}
	)
});