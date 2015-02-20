'use strict';

angular.module('faTestApp')
  .controller('CalculatorRevenueCtrl', function ($scope) {
  	$scope.calc = {
  		termtype : "1"
  	}
    $scope.revenue = function() {
        return (Math.round($scope.calc.investmentAmount * Math.pow((1 + (($scope.calc.annualInterest*($scope.calc.termtype/12))/100)), $scope.calc.terms) * 100)/100);
    }
    $scope.profit = function() {
    	return (Math.round(($scope.revenue() - $scope.calc.investmentAmount)*100))/100;
    }
  });
