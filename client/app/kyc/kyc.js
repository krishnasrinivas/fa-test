'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kyc', {
        url: '/kyc/:id',
        templateUrl: 'app/kyc/kyc.html',
        controller: 'KycCtrl'
      });
  });