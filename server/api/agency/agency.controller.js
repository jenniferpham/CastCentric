/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /Agencys              ->  index
 * POST    /Agencys              ->  create
 * GET     /Agencys/:id          ->  show
 * PUT     /Agencys/:id          ->  update
 * DELETE  /Agencys/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Agency = require('./agency.model');

// Get list of Agencys
exports.index = function(req, res) {
  Agency.find(function (err, Agencys) {
    if(err) { return handleError(res, err); }
    return res.json(200, Agencys);
  });
};

// Get a single Agency
exports.show = function(req, res) {
  Agency.findById(req.params.id, function (err, Agency) {
    if(err) { return handleError(res, err); }
    if(!Agency) { return res.send(404); }
    return res.json(Agency);
  });
};

// Creates a new Agency in the DB.
exports.create = function(req, res) {
  Agency.create(req.body, function(err, Agency) {
    if(err) { return handleError(res, err); }
    return res.json(201, Agency);
  });
};

// Updates an existing Agency in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Agency.findById(req.params.id, function (err, Agency) {
    if (err) { return handleError(res, err); }
    if(!Agency) { return res.send(404); }
    var updated = _.merge(Agency, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, Agency);
    });
  });
};

// Deletes a Agency from the DB.
exports.destroy = function(req, res) {
  Agency.findById(req.params.id, function (err, Agency) {
    if(err) { return handleError(res, err); }
    if(!Agency) { return res.send(404); }
    Agency.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}