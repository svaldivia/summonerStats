'use strict';

angular.module('summonerStatsApp')
  .controller('SummonerCtrl', function ($scope, summonerService) {
    $scope.summonerService = summonerService;
    var summoner = summonerService.getSummoner();
    $scope.summoner = summoner;

    summonerService.getRecentMatchesFromAPI()
      .success((matches)=>{
          $scope.recentMatches = matches.games.slice(0,5);
          console.log(matches.games);
          summonerService.setRecentMatches(matches.games);
      });

      function getFellowPlayerMatchInfo(fellowPlayers, playerId){
        for (var i = 0, numPlayers = fellowPlayers.length; i < numPlayers; i++) {
          if (fellowPlayers[i].summonerId == playerId){
            return {teamId: fellowPlayers[i].teamId,
                    championId:fellowPlayers[i].championId} ;
          }
        }
      }

      $scope.getPlayerStats = function(player){
        console.log("Getting data for: "+player);
        summonerService.setSummoner(player);
      };

      $scope.getWinnerText = function(hasWon){
        if (hasWon){
          return "Victory";
        }
        return "Defeat";
      };

      $scope.getFellowPlayers = function(fellowPlayers,summonerTeam, summonerChampionId){
        var fellowPlayersIds = "";
        var matchTeamInfo = {
          100: [],
          200: []
        };

        matchTeamInfo[summonerTeam].push({
          id:summoner.id,
          isSummoner: true,
          championId: summonerChampionId,
          name:summoner.name
        });

        for (var i = 0, size = fellowPlayers.length; i < size; i++) {
          fellowPlayersIds += fellowPlayers[i].summonerId;
          if(i != size - 1){
            fellowPlayersIds += ",";
          }
        }
        summonerService.getFellowPlayersNames(fellowPlayersIds)
        .success((players)=>{
          var fellowPlayer = {}

          for(var player in players){
            fellowPlayer = getFellowPlayerMatchInfo(fellowPlayers,player);
            matchTeamInfo[fellowPlayer.teamId].push({
              id:player,
              isSummoner: false,
              championId: fellowPlayer.championId,
              name:players[player]
            });
          }
          // console.log(matchTeamInfo);

          $scope.matchTeamInfo = matchTeamInfo;
        });
      };
  });
