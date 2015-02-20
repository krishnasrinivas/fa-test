'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calculator-revenue', {
        url: '/calculator-revenue',
        templateUrl: 'app/calculator-revenue/calculator-revenue.html',
        controller: 'CalculatorRevenueCtrl'
      });
  });