'use strict';

angular.module('faTestApp')
  .controller('EscrowledgerCtrl', function ($scope, fa) {
  	$scope.alert = {}
  	$scope.success = {}
  	$scope.resources;
  	$scope.escrowledger = function() {
  		fa.escrowledger($scope.offering_id, function(data) {
  			var err = data['0'];
  			var msg = data['1'];
  			if (err) {
  				$scope.alert.msg = msg;
  				$scope.alert.show = true;
  			} else {
  				$scope.success.msg = msg;
  				$scope.success.show = true;
  				$scope.resources = msg.resources;
  			}
  			console.log(msg);
  		});
  	}
  });
