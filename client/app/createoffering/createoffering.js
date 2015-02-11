'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createoffering', {
        url: '/createoffering/:id',
        templateUrl: 'app/createoffering/createoffering.html',
        controller: 'CreateofferingCtrl'
      });
  });