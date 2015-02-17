'use strict';

var express = require('express');
var controller = require('./fa.controller');

var router = express.Router();

router.get('/entities', controller.index);
router.post('/entities', controller.createEntity);
router.post('/kyc_tokens', controller.kycTokens)
router.post('/offerings', controller.createOffering)
router.get('/offerings/:id', controller.getOffering)
router.get('/bank_info/:routing_number', controller.bankinfo)
router.post('/escrow_agreements', controller.escrowAgreements)
router.post('/ach_authorizations', controller.achAuthorizations)

module.exports = router;
