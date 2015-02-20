'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('calculator-payment', {
        url: '/calculator-payment',
        templateUrl: 'app/calculator-payment/calculator-payment.html',
        controller: 'CalculatorPaymentCtrl'
      });
  });