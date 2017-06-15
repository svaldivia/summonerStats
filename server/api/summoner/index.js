'use strict';

var express = require('express');
var controller = require('./summoner.controller');

var router = express.Router();

router.get('/:name', controller.getSummonerName);
router.get('/:accountId/matches', controller.getMatchesBySummoner);
router.get('/static/champions', controller.getChampionData);
router.get('/static/spells', controller.getSpellData);
// router.get('/match/:gameId', controller.getMatchData);

module.exports = router;
