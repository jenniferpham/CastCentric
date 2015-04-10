'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var JobSchema = new Schema({
  production: {
    name: String,
    desc: String,
    type: String,
    date: Date,
    loc: String
  },
  audition: {
    type: String,
    date: Date,
    loc: String
  },
  rehearsal: {
    date: Date,
    loc: String
  },
  role:{
    charactername: String,
    type: String,
    gender: String,
    age: {
      start: Number,
      end: Number
    },
    ethnicity: String,
    description: String,
    nudity: Boolean,
    comp_min: Number,
    comp_max: Number,
    union: Boolean,
    notes: String,
    location: String
  },
  activepost: {
    start: Date,
    end: Date
  }
});

module.exports = mongoose.model('Job', JobSchema);
