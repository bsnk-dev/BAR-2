/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

import Config = require("./config");

import pwMessenger = require("./pwMessage");
var messenger = new pwMessenger.messenger(Config.config.pwEmail, Config.config.pwPassword);

import Gatherer = require("./gatherer");
import { ApiKeyDetails, Nation, SentMessage } from "./types";
var gatherer: Gatherer.Gatherer = new Gatherer.Gatherer();

import webViewer = require("./webViewer");

import webServer = require("./webServer");
webServer.startServer();

console.log("Bann's Auto Recruitment Bot 2 (BAR 2)", 
            "\nView your recruitment details at:", 
            "\nLocal: http://localhost:8008/index.html")
            
webServer.getLocalIPAddress({}).then(res => console.log(`Network: http://${res}:8008/index.html`));

var loopsSinceLastLogin: number = 0;

gatherer.onDataGathered(async (data: Gatherer.Gatherer) =>
{
    messenger.emptyQueue();

    webViewer.updated();

    loopsSinceLastLogin++;

    if (loopsSinceLastLogin >= Config.config.checksToRelogin)
    {
        var hasLoggedOn: boolean = await messenger.login();

        if (!hasLoggedOn)
        {
            console.log("Cannot login to Politics and War. Please check your login information in config. P&W may also be down. Make sure to configure it in the local web ui."); 
            return;
        }

        loopsSinceLastLogin = 0;
    }

    data.newAcceptableNations.forEach((nation: Nation) => {
        messenger.addToQueue(nation);
    });
});

gatherer.onApiDataGathered((apiDetails: ApiKeyDetails) =>
{
    webViewer.addApiDetails(apiDetails);
});


messenger.onSentMessage((message: SentMessage) =>
{
    webViewer.addToWebViewer(message);
});

gatherer.start();
gatherer.loop(gatherer);



