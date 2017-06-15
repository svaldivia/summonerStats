(function() {
    'use strict';

    angular
        .module('summoner.titlebar')
        .controller('TitlebarController', TitlebarController);

    TitlebarController.$inject = [
        'appStates',
    ];

    function TitlebarController (
        appStates,
    ){
        var vm = this;

        vm.appStates = appStates;
    }
}());
