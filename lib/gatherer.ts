/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

import sa = require("superagent");

import * as types from "./types";

import Config = require("./config");
var config = Config.config; 

import pwMessenger = require("./pwMessage");

export class Gatherer
{
    private nations: Array<types.Nation> = [];

    private callback: Function = function() {};
    private apiCallback: Function = function() {};

    private loopInterval: number = 0;
    public newAcceptableNations: Array<types.Nation> = [];

    async start()
    {
        this.loopInterval = setInterval(this.loop, config.checkTime, this);
    }

    clear()
    {
        clearInterval(this.loopInterval);
    }

    async loop(_this: Gatherer)
    {
        var collectedData: any = await _this.getNations();

        if (!collectedData)
        {
            return;
        } 

        _this.apiDataGathered(collectedData.api);

        var nations: Array<types.Nation> = collectedData.nations;

        if (!nations)
        {
            console.log("Cannot get the list of nations from Politics and War. Please check your API key or internet. P&W may also be down."); 
            return;
        }

        if (_this.nations.length == 0)
        {
            _this.nations = nations;

            return;
        }

        _this.newAcceptableNations = [];

        nations.forEach(async (nation: types.Nation) =>
        {
            var found = false;

            _this.nations.forEach((oldNation: types.Nation) => {
                if (oldNation.id == nation.id)
                {
                    found = true;
                }
            });
            
            if (!found && nation.score < 70 && nation.cities == 1)
            {
                _this.newAcceptableNations.push(nation);
                console.log("Added "+nation.leader+" to the queue.");
            }
        });

        _this.nations = nations;

        _this.dataGathered();
    }

    onDataGathered(callback: Function)
    {
        this.callback = callback;
    }

    dataGathered()
    {
        this.callback(this);
    }

    onApiDataGathered(callback: Function)
    {
        this.apiCallback = callback;
    }

    apiDataGathered(apiDetails: types.ApiKeyDetails)
    {
        this.apiCallback(apiDetails);
    }

    async getNations()
    {
        var response: any = await sa.get(`https://politicsandwar.com/api/v2/nations/${config.apiKey}/`)
           .set('Accept', 'text/plain')
           .then()
           .catch(err => {console.error(`Nation Data Gathering Error Code: ${err.status}`)});
           
        var data: any;

        try
        {
            data = JSON.parse(response.text);
        }
        catch
        {
            console.error("Can't parse nation data. Check your internet and if politics and war is available.");
            return;
        }

        var apiDetails = new types.ApiKeyDetails();
        apiDetails.totalRequests = data.api_request.api_key_details.daily_requests_maximum;
        apiDetails.remainingRequests = data.api_request.api_key_details.daily_requests_remaining;

        data = data.data;

        var nations: Array<types.Nation> = [];

        data.forEach((nationData: any) => {
            var nation: types.Nation = new types.Nation();

            nation.id = nationData.nation_id;
            nation.name = nationData.nation;
            nation.leader = nationData.leader;
            nation.score = nationData.score;
            nation.cities = nationData.cities;
            nation.founded = new Date(nationData.founded).getTime();

            nations.push(nation);
        });

        return {nations: nations, api: apiDetails};
    }
}