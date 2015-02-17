'use strict';

angular.module('faTestApp')
  .controller('BankinfoCtrl', function ($scope, fa) {
  	$scope.alert = {}
  	$scope.success = {}
  	$scope.getbankinfo = function() {
  		fa.getbankinfo($scope.routing_number, function(data) {
  			var err = data['0'];
  			var msg = data['1'];
  			if (err) {
  				$scope.alert.msg = msg;
  				$scope.alert.show = true;
  			} else {
  				$scope.success.msg = msg;
  				$scope.success.show = true;
  			}
  			console.log(msg);
  		});
  	}
  });
