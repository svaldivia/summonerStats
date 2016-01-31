'use strict';

describe('Controller: SummonerCtrl', function () {

  // load the controller's module
  beforeEach(module('summonerStatsApp'));

  var SummonerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SummonerCtrl = $controller('SummonerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
