(function() {
    'use strict';

    angular
        .module('summoner.match-tile')
        .component('matchTile', {
            templateUrl: '/app/shared/components/match-tile/match-tile.html',
            controller: 'MatchTileController',
            controllerAs: 'vm',
            bindings: {
                match: '<',
                summonerId: '@'
            }
        });
}());
