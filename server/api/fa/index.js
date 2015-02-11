'use strict';

var express = require('express');
var controller = require('./fa.controller');

var router = express.Router();

router.get('/entities', controller.index);
router.post('/entities', controller.createEntity);
router.post('/kyc_tokens', controller.kycTokens)
router.post('/offerings', controller.createOffering)
router.get('/offerings/:id', controller.getOffering)
router.post('/escrow_agreements', controller.escrowAgreements)

module.exports = router;
