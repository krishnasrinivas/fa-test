'use strict';

describe('Controller: EscrowagreementCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var EscrowagreementCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EscrowagreementCtrl = $controller('EscrowagreementCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});