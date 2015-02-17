/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var fa = require('./fundamerica')
var util = require('util');

fa.init(process.env.FA_USER);

// Get list of things
exports.index = function(req, res) {
  res.json([
  ]);
};

exports.createEntity = function(req, res) {
  fa.entities.create(req.body, function() {
    res.json(arguments);
  });
}

exports.achAuthorizations = function(req, res) {
  fa.ach.create(req.body, function() {
    res.json(arguments);
  });
}

exports.kycTokens = function(req, res) {
	fa.kycToken.create(req.body, function() {
		res.json(arguments);
	})
}

exports.createOffering = function(req, res) {
	fa.offerings.create(req.body, function() {
		res.json(arguments);
	})
}

exports.getOffering = function(req, res) {
	fa.offerings.getOne(req.params.id, function() {
		res.json(arguments);
	})
}

exports.bankinfo = function(req, res) {
	fa.bankinfo(req.params.routing_number, function() {
		console.log(arguments)
		res.json(arguments);
	})
}

exports.escrowAgreements = function(req, res) {
	fa.escrowAgreements.create(req.body, function(err, data) {
		fa.escrowServiceApplications.create({
			offering_id: req.body.offering_id,
			escrow_agreement_id: data.id,
			ppm_url:"http://fortunegate.com"
		}, function(){});
		res.json(arguments);
	})
}
