'use strict';

var Agency = require('../api/agency/agency.model.js')

Agency.find({}).remove(function(){
	Agency.create({
		Company: 'United Talent Agency',
		Email: 'Tim@UTA.com',
		Location: 'Los Angeles',
		Description: 'Top notch Agency',
    Image: "http://extras.mnginteractive.com/live/media/site241/2012/0402/20120402_031313_180048v2-max-250x250.png"
	},
    {
      Company: 'Stewart Talent Group',
      Email: 'AriGold@sta.com',
      Location: 'Chicago',
      Description: "Chicago's premier full service agency",
      Image: "http://www.stewarttalent.com/assets/index_title.png"
    })

});
