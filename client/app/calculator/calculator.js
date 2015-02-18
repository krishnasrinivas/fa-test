'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calculator', {
        url: '/calculator',
        templateUrl: 'app/calculator/calculator.html',
        controller: 'CalculatorCtrl'
      });
  });