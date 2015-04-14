'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var JobSchema = new Schema({
  production: {
    name: String,
    desc: String,
    type: String,
    date: {
      start: Date,
      end: Date
    },
    loc: String
  },
  audition: {
    type: String,
    date: {
      start: Date,
      end: Date
    },
    loc: String
  },
  rehearsal: {
    date: {
      start: Date,
      end: Date
    },
    loc: String
  },
  roles:[{
    charactername: String,
    type: String,
    gender: String,
    age: Number,
    ethnicity: String,
    description: String,
    nudity: Boolean,
    compensation:Boolean,
    union: Boolean,
    notes: String
  }],
  activepost: {
    start: Date,
    end: Date
  }
});

module.exports = mongoose.model('Job', JobSchema);
