'use strict';

describe('Controller: CreateofferingCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var CreateofferingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreateofferingCtrl = $controller('CreateofferingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
