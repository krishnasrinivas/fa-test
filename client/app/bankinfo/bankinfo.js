'use strict';

angular.module('faTestApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bankinfo', {
        url: '/bankinfo',
        templateUrl: 'app/bankinfo/bankinfo.html',
        controller: 'BankinfoCtrl'
      });
  });