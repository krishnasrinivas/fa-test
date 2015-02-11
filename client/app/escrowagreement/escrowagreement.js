'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('escrowagreement', {
        url: '/escrowagreement/:id',
        templateUrl: 'app/escrowagreement/escrowagreement.html',
        controller: 'EscrowagreementCtrl'
      });
  });