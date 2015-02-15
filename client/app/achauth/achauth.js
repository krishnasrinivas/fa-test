'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('achauth', {
        url: '/achauth',
        templateUrl: 'app/achauth/achauth.html',
        controller: 'AchauthCtrl'
      });
  });