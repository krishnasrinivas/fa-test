'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('escrowledger', {
        url: '/escrowledger',
        templateUrl: 'app/escrowledger/escrowledger.html',
        controller: 'EscrowledgerCtrl'
      });
  });