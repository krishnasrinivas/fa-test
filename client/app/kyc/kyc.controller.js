'use strict';

angular.module('faTestApp')
  .controller('KycCtrl', function ($scope, $stateParams, fa, $location) {
  	$scope.kyc = {
  	};
  	$scope.alert = {};
  	fa.getKycUrl($stateParams.id, function(data) {
		var err = data['0'];
		var msg = data['1'];
		if (err) {
			$scope.alert.msg = msg;
			$scope.alert.show = true;
		} else {
			$scope.kyc.url = msg.url;
		}
		console.log(msg);
  	})
  	$scope.kycdone = function() {
  		$location.url('/createoffering/' + $stateParams.id);
  	}
  });
