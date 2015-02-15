'use strict';

angular.module('faTestApp')
  .controller('AchauthCtrl', function ($scope, fa) {
  	$scope.achauth = {};
  	$scope.alert = {};
  	$scope.success = {};
  	$scope.createachauth = function() {
  		fa.createachauth($scope.achauth, function(data) {
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
