'use strict';

angular.module('summonerStatsApp')
  .directive('titlebar', () => ({
    templateUrl: 'components/titlebar/titlebar.html',
    restrict: 'E',
    controller: 'TitlebarController',
    controllerAs: 'tbar'
  }));
