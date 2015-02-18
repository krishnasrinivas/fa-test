'use strict';

describe('Controller: EscrowledgerCtrl', function () {

  // load the controller's module
  beforeEach(module('faTestApp'));

  var EscrowledgerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EscrowledgerCtrl = $controller('EscrowledgerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
