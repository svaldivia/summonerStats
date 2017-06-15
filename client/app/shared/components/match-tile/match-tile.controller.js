(function() {
    'use strict';

    angular
        .module('summoner.match-tile')
        .controller('MatchTileController', MatchTileController);

    MatchTileController.$inject = [
        'appStates',
        'SummonerStatsService'
    ];

    function MatchTileController (
        appStates,
        SummonerStatsService
    ){
        var vm = this;

        vm.appStates = appStates;
        vm.playerMatchInfo = {};
        vm.getChampionName = SummonerStatsService.getChampionName;
        vm.getSpellName = SummonerStatsService.getSpellName;
        vm.teams = {};

        activate();

        //////////////////////

        function activate() {
            getPlayerMatchStats();
            populateTeamsData();
        }

        function getPlayerMatchStats() {

            let participantId = _.get(_.find(vm.match.participantIdentities, participant => {
                return participant.player.summonerId == vm.summonerId;
            }), 'participantId');

            vm.playerMatchInfo = _.find(vm.match.participants, participant => {
                return participant.participantId == participantId;
            });
        }

        function populateTeamsData() {

            vm.teams = _.reduce(vm.match.participants, (result, participant, index) => {
                let summonerName = vm.match.participantIdentities[index].player.summonerName;

                if (!result[participant.teamId]) {
                    result[participant.teamId] = [];
                }

                result[participant.teamId].push({
                    name: summonerName,
                    championId: participant.championId
                });

                return result;
            }, {});
        }
    }
}());
