(function() {
    'use strict';

    angular
        .module('SummonerStatsApp')
        .provider('SummonerStateConfig', SummonerStateConfig);

    SummonerStateConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        'appStates'
    ];

    function SummonerStateConfig(
        $stateProvider,
        $urlRouterProvider,
        appStates
    ) {

        this.$get = ['$state', $get];
        this.initialize = initialize;

        ////////////////////////////////

        function initialize() {
            addStates();

            // $urlRouterProvider.otherwise(redirectTo404);
            $urlRouterProvider.otherwise(($injector, $location) => {
                var $state = $injector.get('$state');
                console.log($state);
            });
        }

        function addStates() {
            addState(appStates.SUMMONER,        appRootState(),         '');
            addState(appStates.LOGIN,           loginState(),           '/');
            addState(appStates.PROFILE,         profileState(),         '/summoner/{name}');
        }

        function $get($state) {
            return {
                getStates: $state.get
            };
        }

        function addState(stateName, stateConfig, url) {
            $stateProvider.state(stateName, _.extend({}, stateConfig, {url: url}));
        }

        // State definitions //

        function appRootState() {
            return {
                abstract: true,
                templateUrl: '/app/sections/app-container.html',
            };
        }

        function loginState() {
            return {
                templateUrl: '/app/sections/login/login.html',
                controller: 'LogInController',
                controllerAs: 'vm',
                bindToController: true
            };
        }

        function profileState() {
            return {
                templateUrl: '/app/sections/profile/profile.html',
                controller: 'ProfileController',
                controllerAs: 'vm',
                bindToController: true
            };
        }

        //TODO
        function redirectTo404($injector, $location) {
            var $state = $injector.get('$state');

            $state.get(appStates.FOUR_OH_FOUR, null, {location: false});

            return $location.path();
        }

    }
})();
