'use strict';

describe('Service: technicalService', function () {

  // load the service's module
  beforeEach(module('technicalFrontApp'));

  // instantiate service
  var technicalService;
  beforeEach(inject(function (_technicalService_) {
    technicalService = _technicalService_;
  }));

  it('should do something', function () {
    expect(!!technicalService).toBe(true);
  });

});
