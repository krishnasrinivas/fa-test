'use strict';

describe('Controller: OfferingCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var OfferingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OfferingCtrl = $controller('OfferingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
