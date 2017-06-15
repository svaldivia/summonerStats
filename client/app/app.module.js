(function() {
    'use-strict';

    angular
        .module('SummonerStatsApp', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'summoner.constants',
            'summoner.profile',
            'summoner.login',
            'summoner.stats',
            'summoner.titlebar',
            'summoner.match-tile',
        ]);
})();
