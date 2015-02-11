'use strict';

describe('Controller: KycCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var KycCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KycCtrl = $controller('KycCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
