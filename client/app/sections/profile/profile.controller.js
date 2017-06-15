(function() {
    'use strict';

    angular
        .module('summoner.profile')
        .controller('ProfileController', ProfileController);

        ProfileController.$inject = [
            '$stateParams',
            'SummonerStatsService'
        ];

        function ProfileController (
            $stateParams,
            SummonerStatsService
        ){

            var vm = this;

            var summonerName = $stateParams.name;

            vm.matchList = [];
            vm.summonerData = {};

            activate();

            /////////////////////////////////

            function activate() {
                getSummonerData()
                    .then(getRecentMatches);
            }

            function getSummonerData() {
                return SummonerStatsService.getSummonerData(summonerName)
                    .then((data) => {
                        vm.summonerData = data;
                    })
                    .catch((error) => {
                        console.error("NOT FOUND!!!");
                    });
            }

            function getRecentMatches() {
                return SummonerStatsService.getRecentMatches(vm.summonerData.accountId)
                    .then((data) => {
                        vm.matchList = data;
                    })
                    .catch((error) => {
                        console.error("No matches!!!");
                    });
            }
        }
})();
