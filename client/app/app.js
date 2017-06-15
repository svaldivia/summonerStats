(function() {
    'use strict';

    angular.module('SummonerStatsApp')

    .config(function($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    })
    .config(function(SummonerStateConfigProvider) {
        SummonerStateConfigProvider.initialize();
    });
})();
