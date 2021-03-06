"use strict";
/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/
Object.defineProperty(exports, "__esModule", { value: true });
const Config = require("./config");
const pwMessenger = require("./pwMessage");
var messenger = new pwMessenger.messenger();
const Gatherer = require("./gatherer");
var gatherer = new Gatherer.Gatherer();
const webViewer = require("./webViewer");
const webServer = require("./webServer");
webServer.startServer();
console.log("Bann's Auto Recruitment Bot 2 (BAR 2)", "\nView your recruitment details at:", "\nLocal: http://localhost:8008/index.html", "\n\n404 Errors and failed messages are caused by configuration errors. Configure it by going to the link above and going to the configuration page.", "\n\n");
webServer.getLocalIPAddress({}).then(res => console.log(`Network: http://${res}:8008/index.html`));
var loopsSinceLastLogin = 0;
gatherer.onDataGathered(async (data) => {
    messenger.emptyQueue();
    webViewer.updated();
    loopsSinceLastLogin++;
    if (loopsSinceLastLogin >= Config.config.checksToRelogin) {
        var hasLoggedOn = await messenger.login();
        if (!hasLoggedOn) {
            console.log("Cannot login to Politics and War. Please check your login information in config. P&W may also be down.");
            return;
        }
        loopsSinceLastLogin = 0;
    }
    data.newAcceptableNations.forEach((nation) => {
        messenger.addToQueue(nation);
    });
});
gatherer.onApiDataGathered((apiDetails) => {
    webViewer.addApiDetails(apiDetails);
});
messenger.onSentMessage((message) => {
    webViewer.addToWebViewer(message);
});
gatherer.start();
gatherer.loop(gatherer);
