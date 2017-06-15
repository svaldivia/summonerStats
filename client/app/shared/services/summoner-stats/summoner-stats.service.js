(function() {
    'use strict';

    angular
        .module('summoner.stats')
        .factory('SummonerStatsService', SummonerStatsService);

    SummonerStatsService.$inject = [
        '$http',
        '$location',
        '$q'
    ];

    function SummonerStatsService(
        $http,
        $location,
        $q
    ){

        var currentSummoner = {};
        var recentMatches = [];
        var champions = {};
        var spells = {};

        var service = {
            getSummonerData: getSummonerData,
            getRecentMatches: getRecentMatches,
            getChampionName: getChampionName,
            getSpellName: getSpellName
        }

        activate();

        return service;

        //////////////////////////////

        function activate() {
            getChampions();
            getSpells();
        }

        function getSummonerData(summonerName) {
            if (!summonerName) { return; }

            return $http.get('/api/summoner/' + summonerName)
                .then(summoner => summoner.data);
        }

        function getRecentMatches(summonerAccountId) {
            if (!summonerAccountId) { return; }

            return $http.get('/api/summoner/' + summonerAccountId + '/matches')
                .then((data) => data.data);
        }

        function getChampions() {
            return $http.get('/api/summoner/static/champions')
                .then(championList => {
                    champions = championList.data.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }

        function getSpells() {
            return $http.get('/api/summoner/static/spells')
                .then(spellsList => {
                    spells = spellsList.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }

        function getChampionName(championId, forProfileIcon){
            let champion = _.find(champions, champion => {
                return champion.id === championId;
            });

            if (forProfileIcon) {
                return champion ? champion.key : '???';
            }

            return champion ? champion.name : '???';
        }

        function getSpellName(spellId){
            let spell = _.find(spells, spell => {
                return spell.id === spellId;
            });
            return spell ? spell.name : '???';
        }
    }
})();
