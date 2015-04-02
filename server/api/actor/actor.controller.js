/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Actors              ->  index
 * POST    /Actors              ->  create
 * GET     /Actors/:id          ->  show
 * PUT     /Actors/:id          ->  update
 * DELETE  /Actors/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Actor = require('./actor.model');

// Get list of Actors
exports.index = function(req, res) {
  Actor.find(function (err, Actors) {
    if(err) { return handleError(res, err); }
    return res.json(200, Actors);
  });
};

// Get a single Actor
exports.show = function(req, res) {
  Actor.findById(req.params.id, function (err, Actor) {
    if(err) { return handleError(res, err); }
    if(!Actor) { return res.send(404); }
    return res.json(Actor);
  });
};

// Creates a new Actor in the DB.
exports.create = function(req, res) {
  Actor.create(req.body, function(err, Actor) {
    if(err) { return handleError(res, err); }
    return res.json(201, Actor);
  });
};

// Updates an existing Actor in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Actor.findById(req.params.id, function (err, Actor) {
    if (err) { return handleError(res, err); }
    if(!Actor) { return res.send(404); }
    var updated = _.merge(Actor, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Actor);
    });
  });
};

// Deletes a Actor from the DB.
exports.destroy = function(req, res) {
  Actor.findById(req.params.id, function (err, Actor) {
    if(err) { return handleError(res, err); }
    if(!Actor) { return res.send(404); }
    Actor.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}