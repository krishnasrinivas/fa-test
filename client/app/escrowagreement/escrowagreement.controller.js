'use strict';

angular.module('faTestApp')
  .controller('EscrowagreementCtrl', function ($scope, $stateParams, $location, fa) {
  	$scope.escrowagreement = {
  	};
  	$scope.alert = {};
  	fa.getEscrowAgreementUrl($stateParams.id, function(data) {
		var err = data['0'];
		var msg = data['1'];
		if (err) {
			$scope.alert.msg = msg;
			$scope.alert.show = true;
		} else {
			$scope.escrowagreement.url = msg.signing_links.issuer_signature.url;
		}
		console.log(msg);
  	})
  	$scope.escrowagreementdone = function() {
  		$location.url('/offering/' + $stateParams.id);
  	}
  });
