'use strict';

angular.module('summonerStatsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('summoner', {
        url: '/summoner/:name',
        templateUrl: 'app/summoner/summoner.html',
        controller: 'SummonerCtrl'
      });
  });
