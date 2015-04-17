'use strict';

var Agency = require('../api/agency/agency.model.js')

Agency.find({}).remove(function(){
	Agency.create({
		Company: 'SomeAgency',
		Email: 'Tim@SomeAgency.com',
		Location: 'Beverly Hills, CA',
		Description: 'Top notch Agency'
	}
	)
});
