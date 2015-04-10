'user strict';

var Agency = require('../api/agency/agency.model.js')

Agency.find({}).remove(function(){
	Agency.create({
		Company: 'SomeAgency',
		Email: 'Tim@SomeAgency.com',
		Location: 'Beverly Hills, CA',
<<<<<<< HEAD
		Description: 'Top notch Agency',
    Image: "http://extras.mnginteractive.com/live/media/site241/2012/0402/20120402_031313_180048v2-max-250x250.png"
	})
=======
		Description: 'Top notch Agency'
	}
	)
>>>>>>> 89238208a73384e6305588c7ed146ef8357124ef
});
