/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Directors              ->  index
 * POST    /Directors              ->  create
 * GET     /Directors/:id          ->  show
 * PUT     /Directors/:id          ->  update
 * DELETE  /Directors/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Director = require('./director.model');

// Get list of Directors
exports.index = function(req, res) {
  Director.find(function (err, Directors) {
    if(err) { return handleError(res, err); }
    return res.json(200, Directors);
  });
};

// Get a single Director
exports.show = function(req, res) {
  Director.findById(req.params.id, function (err, Director) {
    if(err) { return handleError(res, err); }
    if(!Director) { return res.send(404); }
    return res.json(Director);
  });
};

// Creates a new Director in the DB.
exports.create = function(req, res) {
  Director.create(req.body, function(err, Director) {
    if(err) { return handleError(res, err); }
    return res.json(201, Director);
  });
};

// Updates an existing Director in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Director.findById(req.params.id, function (err, Director) {
    if (err) { return handleError(res, err); }
    if(!Director) { return res.send(404); }
    var updated = _.merge(Director, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Director);
    });
  });
};

// Deletes a Director from the DB.
exports.destroy = function(req, res) {
  Director.findById(req.params.id, function (err, Director) {
    if(err) { return handleError(res, err); }
    if(!Director) { return res.send(404); }
    Director.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}