'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('offering', {
        url: '/offering/:id',
        templateUrl: 'app/offering/offering.html',
        controller: 'OfferingCtrl'
      });
  });