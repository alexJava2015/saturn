'use strict';

describe('Service: technical', function () {

  // load the service's module
  beforeEach(module('technicalFrontApp'));

  // instantiate service
  var technical;
  beforeEach(inject(function (_technical_) {
    technical = _technical_;
  }));

  it('should do something', function () {
    expect(!!technical).toBe(true);
  });

});
