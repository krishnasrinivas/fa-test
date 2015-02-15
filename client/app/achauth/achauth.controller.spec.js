'use strict';

describe('Controller: AchauthCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var AchauthCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AchauthCtrl = $controller('AchauthCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
