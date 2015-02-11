'use strict';

angular.module('faTestApp')
  .controller('CreateofferingCtrl', function ($scope, $stateParams, $location, fa) {
  	$scope.offering = {};
  	$scope.alert = {};
  	$scope.offering.entity_id = $stateParams.id;
  	$scope.createOffering = function() {
  		fa.createOffering($scope.offering, function(data) {
  			var err = data['0'];
  			var msg = data['1'];
  			if (err) {
  				$scope.alert.msg = msg;
  				$scope.alert.show = true;
  			} else {
  				$location.url('/escrowagreement/' + msg.id);
  			}
  			console.log(msg);
  		});
  	}
  });
