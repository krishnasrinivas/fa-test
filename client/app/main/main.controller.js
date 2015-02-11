'use strict';

angular.module('faTestApp')
  .controller('MainCtrl', function ($scope, $http, $location, fa) {
  	$scope.issuer = {};
  	$scope.alert = {};

  	$scope.createIssuer = function() {
  		fa.createIssuer($scope.issuer, function(data) {
  			var err = data['0'];
  			var msg = data['1'];
  			if (err) {
  				$scope.alert.msg = msg;
  				$scope.alert.show = true;
  			} else {
  				$location.url('/kyc/' + msg.id);
  			}
  			console.log(msg);
  		});
  	}
  });
