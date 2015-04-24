'use strict';

var Agency = require('../api/agency/agency.model.js')

Agency.find({}).remove(function(){
	Agency.create({
		Company: 'United Talent Agency',
		Email: 'Tim@UTA.com',
		Location: 'Los Angeles',
		Description: 'United Talent Agency is a premier global talent and literary agency.',
    Image: "http://extras.mnginteractive.com/live/media/site241/2012/0402/20120402_031313_180048v2-max-250x250.png"
	},
    {
      Company: 'Stewart Talent Group',
      Email: 'AriGold@sta.com',
      Location: 'Chicago',
      Description: "Chicago's premier full service agency",
      Image: "http://www.stewarttalent.com/assets/index_title.png"
    },
    {
      Company: 'AC Talent Agency',
      Email: 'RJohnson@http://actalentagency.com/',
      Location: 'Los Angeles, CA',
      Description: "Delivering Quality Talent",
      Image: "http://actalentagency.com/images/logo.png"
    },
    {
      Company: 'Circle Talent Agency',
      Email: 'info@circletalentagency.com/',
      Location: 'Los Angeles',
      Description: "Circle Talent Agency welcomes all new talent",
      Image: "http://www.circletalentagency.com/images/favicon.ico"
    }
  )

});
