'use strict';

import _ from 'lodash';
import config from '../../config/environment';
import constants from '../../shared/constants';

const request = require('request');
const NUM_RECENT_MATCHES = 5;

// TODO: Extract status constants

export function getSummonerName(req, res) {
    let url = config.LOL_API_URL+ '/summoner/v3/summoners/by-name/' + req.params.name + '?api_key=' + config.LOL_API_KEY;

    return request(url, (error, response, data) => {
        return res.status(constants.STATUS_OK)
            .send(JSON.parse(data));
    });

}

export function getMatchesBySummoner(req, res) {
    let url = config.LOL_API_URL+ '/match/v3/matchlists/by-account/' + req.params.accountId + '/recent?api_key=' + config.LOL_API_KEY;

    return request(url, (error, response, data) => {
        data = JSON.parse(data);

        if (data.status) {
            return res.status(data.status.status_code);
        }

        let matchPromises = [];
        let matchList = data.matches.slice(0,NUM_RECENT_MATCHES);
        for (let match of matchList) {

            matchPromises.push(_getMatchData(match.gameId, match.champion));
        }

        Promise.all(matchPromises)
            .then(matches => {
                return res.status(constants.STATUS_OK)
                    .send(matches);
            });
    });
}

function _getMatchData(gameId, championId) {
    let url = config.LOL_API_URL+ '/match/v3/matches/' + gameId + '?api_key=' + config.LOL_API_KEY;

    return new Promise((resolve, reject) => {
       request(url, (error, response, data) => {
           if (error) { reject(); }

           resolve(_.extend(JSON.parse(data), {'championId': championId}));
       });
   });
}

// Get Static data
// TODO: Move this to its own endpoint + possibly store in MongoDB
export function getChampionData(req, res) {
    let url = config.LOL_STATIC_DATA_URL+ '/v3/champions?api_key=' + config.LOL_API_KEY;
    return request(url, (error, response, data) => {
        return res.status(constants.STATUS_OK)
            .send(JSON.parse(data));
    });
}

export function getSpellData(req, res) {
    let url = config.LOL_STATIC_DATA_URL+ '/v3/summoner-spells?api_key=' + config.LOL_API_KEY;
    return request(url, (error, response, data) => {
        return res.status(constants.STATUS_OK)
            .send(JSON.parse(data));
    });
}
