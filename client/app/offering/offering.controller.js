'use strict';

angular.module('faTestApp')
  .controller('OfferingCtrl', function ($scope, $stateParams, fa) {
  	fa.getOffering($stateParams.id, function(data) {
		var err = data['0'];
		var msg = data['1'];
		if (err) {
			alert("Error!")
		} else {
			$scope.wireinfo = msg.bank_wire_info;
			$scope.checkinfo = msg.check_mailing_address;
			$scope.check_mailing_instructions = msg.check_mailing_instructions;
		}
		console.log(msg);
  	})
  });
