'use strict';

describe('Controller: BankinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var BankinfoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BankinfoCtrl = $controller('BankinfoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
