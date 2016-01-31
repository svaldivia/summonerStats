'use strict';

angular.module('summonerStatsApp').factory('summonerService', function ($http, $location) {
  // Service logic
  // ...

  var currentSummoner = {},
      recentMatches = [],
      champions = {},
      spells = {},
      baseUrl = "https://na.api.pvp.net/api/lol/na",
      baseStaticDataUrl = "https://global.api.pvp.net/api/lol/static-data/na",
      apiKey = "***";

  // Public API here
  return {
    setSummoner(summonerName) {
      var url = baseUrl + '/v1.4/summoner/by-name/' + summonerName + apiKey;

      return $http.get(url).success(function (summoner) {
        currentSummoner = summoner[summonerName.toLowerCase()];
        $location.path('/summoner/'+summonerName);
      }).error(function (error) {
        alert("Mmmm...That Summoner doesn't exist. Try again :)");
      });
    },

    setRecentMatches(matches){
      recentMatches = matches;
    },

    getSummoner() {
      return currentSummoner;
    },

    getRecentMatches() {
      return recentMatches;
    },

    getChampionName(championId){
      for(var champion in champions){
        if(champions[champion].id == championId){
          return champion;
        }
      }
      return "???";
    },

    getChampions(){
      var url = baseStaticDataUrl + '/v1.2/champion' + apiKey;

      return $http.get(url).success(function (championList) {
        champions = championList.data;
      }).error(function (error) {
        alert("Mmmm...Something went wrong geting the champions. Check it out! :)");
        console.log(error);
      });
    },

    getSpellName(spellId){
      for(var spell in spells){
        if(spells[spell].id == spellId){
          return spell;
        }
      }
      return "???"
    },

    getSpells(){
      var url = baseStaticDataUrl + '/v1.2/summoner-spell' + apiKey;

      return $http.get(url).success(function (spellList) {
        spells = spellList.data;
      }).error(function (error) {
        alert("Mmmm...Something went wrong fetching the spells. Check it out! :)");
        console.log(error);
      });
    },

    getFellowPlayersNames(players) {
      var url = baseUrl + '/v1.4/summoner/' + players + '/name' + apiKey;
      console.log(url);
      return $http.get(url);
    },

    getRecentMatchesFromAPI() {
      if (!currentSummoner.id) {
        $location.path('/');
        return;
      }
      var url = baseUrl + '/v1.3/game/by-summoner/' + currentSummoner.id + "/recent" + apiKey;
      return $http.get(url);
    }
  };
});
//# sourceMappingURL=summonerService.service.js.map
