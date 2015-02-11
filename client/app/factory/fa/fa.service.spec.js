'use strict';

describe('Service: fa', function () {

  // load the service's module
  beforeEach(module('faTestApp'));

  // instantiate service
  var fa;
  beforeEach(inject(function (_fa_) {
    fa = _fa_;
  }));

  it('should do something', function () {
    expect(!!fa).toBe(true);
  });

});
