'use strict';

var Actor = require('../api/actor/actor.model.js');


Actor.find({}).remove(function(){
	Actor.create({
	Name: 'Joe Cool',
	Email:'joe@gmail.com',
	ProfileImage: 'http://s3-media1.fl.yelpassets.com/bphoto/nf2lPpoAlNL-_erxACkeJw/l.jpg',
	Role:'actor',
	Location: 'Los Angeles, Ca',
	WorkHistory:[
		{
			Title: 'Avengers',
			RoleType: 'Supprting Cast',
			Director: 'John Whedon',
			Company: 'Marvel Studios'
		}
	],
	PhysicalAttribute: {
		Gender: 'Male',
		AgeRange:{
			Start: 27,
		    End: 43
		},
		Height: "5'10",
		Build: 'Built',
		Hair: 'Comb Over',
		Eyes: 'Green',
		Ethnicity: 'Spanish'
	},
	EducationTraining:[
		{
			School: 'Los Angeles College',
			Teacher: '',
			Degree: 'Theater',
			Location: 'Los Angeles,CA',
			Year: 2014
		}
	],
	OpUrl:{
		facebook:'Facebook.com',
		twitter:'www.twitter.com',
		pinterest:'www.pinterest.com'
	}
	},{
	Name: 'Sally Mo',
	Email:'SallyMo@gmail.com',
	ProfileImage: 'https://s-media-cache-ak0.pinimg.com/236x/6e/4b/11/6e4b11e8a5928e7acaa7fb9effac8043.jpg',
	Role:'actor',
	Location: 'Santa Monica, Ca',
	WorkHistory:[
		{
			Title: 'Twilight',
			RoleType: 'Extra',
			Director: 'Catherine Hardwicke',
			Company: 'Temple Hill Entertainment'
		},{
			Title:'Ninja Turtles',
			RoleType: 'Supporting Cast',
			Director: 'Jonathan Liebesman',
			Company: 'Nickelodeon Movies'
		}
	],
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
	EducationTraining:[
		{
			School: 'Mount Sac College',
			Teacher: '',
			Degree: 'Theater',
			Location: 'Chino,CA',
			Year: 2014
		}
	],
	OpUrl:{
		facebook:'Facebook.com',
		twitter:'www.twitter.com',
		pinterest:'www.pinterest.com'
	}
	},{
	Name: 'Janette Freeman',
	Email:'JFreeman@gmail.com',
	ProfileImage: 'http://www.janettezilioli.com/sites/default/files/Janette_Zilioli-Headshot8x10.jpg',
	Role:'actor',
	Location: 'Los Angeles, Ca',
	WorkHistory: [
		{
			Title: 'Avengers',
			RoleType: 'Lead Role',
			Director: 'John Whedon',
			Company: 'Disney'
		}
	],
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
		Ethnicity: 'Hispanic/Caucasian'
	},
	EducationTraining:[
		{
			School: 'Santa Monica College',
			Teacher: '',
			Degree: 'Theater',
			Location: 'Los Angeles,CA',
			Year: 2014
		}
	],
	OpUrl:{
		facebook:'Facebook.com',
		twitter:'www.twitter.com',
		pinterest:'www.pinterest.com'
	}
	},{
	Name: 'Aaron Rodgers',
	Email:'aRod@gmail.com',
	ProfileImage: 'http://xfinity.comcast.net/blogs/tv/files/2012/02/aaron-rodgers-getty.jpg',
	Role:'actor',
	Location: 'Chico, Ca',
	WorkHistory: [
		{
			Title: 'Avengers',
			RoleType: 'Lead Role',
			Director: 'John Whedon',
			Company: 'Disney'
		}
	],
	PhysicalAttribute:{
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
	EducationTraining:[
			{
			School: 'USC School of Dramatic Arts',
			Teacher: '',
			Degree: 'Theater, Art',
			Location: 'Los Angeles, CA',
			Year: 2014
		}
	],
	OpUrl:{
		facebook:'Facebook.com',
		twitter:'www.twitter.com',
		pinterest:'www.pinterest.com'
	}
	},{
	Name: 'Julie Smith',
	Email:'JuSmith@gmail.com',
	ProfileImage: 'http://juliewyma.com/wp-content/uploads/2014/11/JulieWymaHeadshot2013.jpg',
	Role:'actor',
	Location: 'San Fransico, Ca',
	WorkHistory:[
		{
			Title: 'Avatar',
			RoleType: 'Support role',
			Director: 'James Cameron',
			Company: 'Light Storm Entertainment'
		}
	],
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
	EducationTraining:[
	{
		School: 'Los Angeles College',
		Teacher: '',
		Degree: 'Theater',
		Location: 'Los Angeles,CA',
		Year: 2014
	}
	],
	OpUrl:{
		facebook:'Facebook.com',
		twitter:'www.twitter.com',
		pinterest:'www.pinterest.com'
	}
	})
});
