'use strict';

describe('Service: summonerService', function () {

  // load the service's module
  beforeEach(module('summonerStatsApp'));

  // instantiate service
  var summonerService;
  beforeEach(inject(function (_summonerService_) {
    summonerService = _summonerService_;
  }));

  it('should do something', function () {
    expect(!!summonerService).toBe(true);
  });

});
