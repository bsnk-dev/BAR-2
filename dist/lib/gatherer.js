"use strict";
/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherer = void 0;
const sa = require("superagent");
const types = __importStar(require("./types"));
const Config = require("./config");
class Gatherer {
    constructor() {
        this.nations = [];
        this.callback = function () { };
        this.apiCallback = function () { };
        this.loopInterval = 0;
        this.newAcceptableNations = [];
    }
    async start() {
        this.loopInterval = setInterval(this.loop, Config.config.checkTime, this);
    }
    clear() {
        clearInterval(this.loopInterval);
    }
    async loop(_this) {
        var collectedData = await _this.getNations();
        if (!collectedData) {
            return;
        }
        _this.apiDataGathered(collectedData.api);
        var nations = collectedData.nations;
        if (!nations) {
            console.log("Cannot get the list of nations from Politics and War. Please check your API key or internet. P&W may also be down.");
            return;
        }
        if (_this.nations.length == 0) {
            _this.nations = nations;
            return;
        }
        _this.newAcceptableNations = [];
        nations.forEach(async (nation) => {
            var found = false;
            _this.nations.forEach((oldNation) => {
                if (oldNation.id == nation.id) {
                    found = true;
                }
            });
            if (!found && nation.score < 70 && nation.cities == 1) {
                _this.newAcceptableNations.push(nation);
                console.log("Added " + nation.leader + " to the queue.");
            }
        });
        _this.nations = nations;
        _this.dataGathered();
    }
    onDataGathered(callback) {
        this.callback = callback;
    }
    dataGathered() {
        this.callback(this);
    }
    onApiDataGathered(callback) {
        this.apiCallback = callback;
    }
    apiDataGathered(apiDetails) {
        this.apiCallback(apiDetails);
    }
    async getNations() {
        var response = await sa.get(`https://politicsandwar.com/api/v2/nations/${Config.config.apiKey}/`)
            .set('Accept', 'text/plain')
            .then()
            .catch(err => { console.error(`Nation Data Gathering Error Code: ${err.status}`); });
        var data;
        try {
            data = JSON.parse(response.text);
        }
        catch (_a) {
            console.error("Can't parse nation data. Check your internet and if politics and war is available.");
            return;
        }
        var apiDetails = new types.ApiKeyDetails();
        apiDetails.totalRequests = data.api_request.api_key_details.daily_requests_maximum;
        apiDetails.remainingRequests = data.api_request.api_key_details.daily_requests_remaining;
        data = data.data;
        var nations = [];
        data.forEach((nationData) => {
            var nation = new types.Nation();
            nation.id = nationData.nation_id;
            nation.name = nationData.nation;
            nation.leader = nationData.leader;
            nation.score = nationData.score;
            nation.cities = nationData.cities;
            nation.founded = new Date(nationData.founded).getTime();
            nations.push(nation);
        });
        return { nations: nations, api: apiDetails };
    }
}
exports.Gatherer = Gatherer;
