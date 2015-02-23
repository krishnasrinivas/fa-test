'use strict';

angular.module('faTestApp')
  .controller('CalculatorRevenueCtrl', function ($scope) {
  	$scope.calc = {
  		termtype : "1"
  	}
    $scope.rows = [];
    $scope.revenue = function() {
        return (Math.round($scope.calc.investmentAmount * Math.pow((1 + (($scope.calc.annualInterest*($scope.calc.termtype/12))/100)), $scope.calc.terms) * 100)/100);
    }
    $scope.profit = function() {
    	return (Math.round(($scope.revenue() - $scope.calc.investmentAmount)*100))/100;
    }
    $scope.emi = function() {
      var interestperterm = $scope.calc.annualInterest*($scope.calc.termtype/12)/100;
      var x = Math.pow(1+interestperterm, $scope.calc.terms);
      return Math.round($scope.calc.investmentAmount*interestperterm*x/(x-1)*100)/100;
    }
    $scope.totalInterest = function() {
      return Math.round(($scope.emi()*$scope.calc.terms - $scope.calc.investmentAmount)*100)/100;
    }

    $scope.$watch($scope.emi,
      function() {
        $scope.rows = [];
        var emi = $scope.emi();
        var interestperterm = $scope.calc.annualInterest*($scope.calc.termtype/12)/100;
        var balance = $scope.calc.investmentAmount;
        for (var i = 0; i < $scope.calc.terms; i++) {
          var obj = {
            termno: i+1,
            interest: Math.round(balance*interestperterm*100)/100,
            principal: Math.round((emi - balance*interestperterm)*100)/100,
            balance: Math.round((balance - (emi - balance*interestperterm))*100)/100
          }
          balance = balance - obj.principal;
          obj.totalpaid = $scope.calc.investmentAmount - balance;
          obj.totalpaid = Math.round(obj.totalpaid*100)/100;
          if (obj.balance<0)
            obj.balance = 0;
          $scope.rows.push(obj);
        }
      }
    );

  });
