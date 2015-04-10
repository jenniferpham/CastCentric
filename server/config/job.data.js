'user strict';

var Job = require('../api/job/job.model.js');


Job.find({}).remove(function(){
	Job.create({
      production:{
        name: 'Wicked',
        desc: 'Renowned production that tells the other story from the witch\'s point of view and how she became the way she is',
        type: 'broadway',
        date: {
          start: 'Jan 4, 2016',
          end: 'Feb 1, 2016'
        },
        loc: 'New York'
    },
      audition: {
        type: 'face-to-face',
        date: {
          start: 'May 4, 2015',
          end: 'June 1, 2015'
        },
        loc: 'New York'
      },
      rehearsal: {
        date: {
          start: 'Aug 4, 2015',
          end: 'Dec 1, 2015'
        },
        loc: 'New York'
      },
      role:{
        'Glinda': {
          charactername: 'Glinda',
          type: 'lead',
          gender: 'female',
          age: {
            start: 20,
            end: 30
          },
          ethnicity: 'Caucasian',
          description: 'Glinda is the witch\'s roommate and rather self-centered.',
          nudity: false,
          comp_min: 43000,
          comp_max: 70000,
          union: true,
          notes: 'Director wants great work ethic in all from lead to supporting to extras',
          location: 'New York'
        },
        'Witch': {
          charactername: 'Witch',
          type: 'lead',
          gender: 'female',
          age: {
            start: 20,
            end: 30
          },
          ethnicity: 'any',
          description: 'witch is the witch\'s roommate and rather self-centered.',
          nudity: false,
          comp_min: 43000,
          comp_max: 70000,
          union: true,
          notes: 'Director wants great work ethic in all from lead to supporting to extras',
          location: 'New York'
        }
      },
      activepost: {
        start: 'April 10, 2015',
        end: 'June 4, 2015'
      }
	},

    {
      production:{
        name: 'Wicked',
        desc: 'Renowned production that tells the other story from the witch\'s point of view and how she became the way she is',
        type: 'broadway',
        date: {
          start: 'Jan 4, 2016',
          end: 'Feb 1, 2016'
        },
        loc: 'New York'
      },
      audition: {
        type: 'face-to-face',
        date: {
          start: 'May 4, 2015',
          end: 'June 1, 2015'
        },
        loc: 'New York'
      },
      rehearsal: {
        date: {
          start: 'Aug 4, 2015',
          end: 'Dec 1, 2015'
        },
        loc: 'New York'
      },
      role:{
        charactername: 'Glinda',
        type: 'lead',
        gender: 'female',
        age: {
          start: 20,
          end: 30
        },
        ethnicity: 'Caucasian',
        description: 'Glinda is the witch\'s roommate and rather self-centered.',
        nudity: false,
        comp_min: 43000,
        comp_max: 70000,
        union: true,
        notes: 'Director wants great work ethic in all from lead to supporting to extras',
        location: 'New York'
      },
      activepost: {
        start: 'April 10, 2015',
        end: 'June 4, 2015'
      }
    }
	)
});
