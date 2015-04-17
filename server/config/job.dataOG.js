/**
 * Created by Jennifer on 4/16/2015.
 */
'use strict';

var Job = require('../api/job/job.model.js');


Job.find({}).remove(function(){
  Job.create({
      production: {
        name: 'Wicked',
        desc: 'tale told from the other side',
        type: 'theater',
        date: {
          start: 'June 1, 2016',
          end: 'July 31, 2016'
        },
        loc: 'New York'
      },
      audition: {
         type: 'face-to-face',
         date: {
           start: 'June 1, 2015',
           end: 'Aug 1, 2015'
         },
         loc: 'New York'
       },
       rehearsal: {
         date: {
           start: 'Aug 15, 2015',
           end: 'Nov 15, 2015'
       },
        loc: 'New York'
       },
       roles:[
       {
       charactername: 'Glinda',
       type: 'lead',
       gender: 'female',
       age: 25,
       ethnicity: 'Caucasian',
       description: 'best friend of witch',
       nudity: false,
       compensation:true,
       union: true,
       notes: 'director wants someone hard working'
       },
       {
       charactername: 'Witch',
       type: 'lead',
       gender: 'female',
       age: 25,
       ethnicity: 'any',
       description: 'best friend of witch',
       nudity: false,
       compensation:true,
       union: true,
       notes: 'director wants someone hard working'
       }
       ],
      activepost: {
        start: 'April 15, 2015',
        end: 'May 15, 2015'
      }
    }
  )
});
