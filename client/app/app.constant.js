(function(angular, undefined) {
'use strict';

angular.module('summoner.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],LOL_API_URL:'https://na.api.pvp.net/api/lol/na',LOL_STATIC_DATA_URL:'https://na.api.pvp.net/api/lol/na'})
.constant('appStates', angular.copy(appStates));
})(angular);
