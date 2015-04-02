'user strict';

var Director = require('../api/director/director.model.js')


Director.find({}).remove(function(){
	Director.create({
		Name: 'James Smith',
		Email: 'JamesS@gmail.com',
		Role: 'Lead',
		Location: 'Burbank, Ca',
		WorkHistory:{
			Title: 'World War Z',
			Comapny: 'Universal',
			Description: 'Casting Director'
		},
		ProfileImage: '',
		Education:{
			School: 'Art Institue',
			Degree: 'Bachelor of Art',
			Year: 2003
		},
		OpUrl: 'http://www.google.com'
	})
});