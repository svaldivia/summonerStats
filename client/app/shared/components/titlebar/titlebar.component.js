(function() {
    'use strict';

    angular
        .module('summoner.titlebar')
        .component('titlebar', {
            templateUrl: 'app/shared/components/titlebar/titlebar.html',
            controller: 'TitlebarController',
            controllerAs: 'vm'
        });
}());
