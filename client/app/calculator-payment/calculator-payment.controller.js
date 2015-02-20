'use strict';

angular.module('faTestApp')
  .controller('CalculatorPaymentCtrl', function ($scope) {
  	$scope.calc = {
  		termtype : "1"
  	}
  	$scope.payment = function() {
  		return Math.round($scope.calc.investmentAmount * Math.pow((1 + (($scope.calc.annualInterest*($scope.calc.termtype/12))/100)), $scope.calc.terms) * 100)/100;
  	}
  });
