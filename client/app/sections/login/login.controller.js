(function () {
    'use strict';

    angular
        .module('summoner.login')
        .controller('LogInController', LogInController);

    LogInController.$inject = [
        '$state',
        'appStates'
    ];

    function LogInController (
        $state,
        appStates
    ){
        var vm = this;

        vm.summonerName = '';
        vm.submitSummoner = submitSummoner;

        /////////////////////////

        function submitSummoner() {
            if (!vm.summonerName) {return;}

            $state.go(appStates.PROFILE, {name: vm.summonerName});
        }

    }

})();
