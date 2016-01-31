'use strict';

angular.module('summonerStatsApp')
  .controller('LoginCtrl', function ($scope,summonerService,$location) {
    $scope.summonerService = summonerService;
    summonerService.getChampions();
    summonerService.getSpells();

    $scope.enterSummoner = function () {
      summonerService.setSummoner($scope.summoner);
    }
  });
