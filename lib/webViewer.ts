/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

import * as types from "./types";
import fs = require("fs");

import { root } from "./config";

const settings: types.WebViewerSettings = JSON.parse(fs.readFileSync(root+'config/web-config.json').toString());

if (!fs.existsSync(root+settings.databaseFile))
{
    var defaultDatabase: types.WebViewerDatabase = 
    {
        messages: [],
        apiKeyDetails: new types.ApiKeyDetails(),
        lastChecked: 0
    }

    fs.writeFileSync(root+settings.databaseFile, JSON.stringify(defaultDatabase));
}

var db: types.WebViewerDatabase = JSON.parse(fs.readFileSync(root+settings.databaseFile).toString());

export function addToWebViewer(message: types.SentMessage)
{
    if (db.messages.length > settings.maxSentMessages)
    {
        db.messages.pop();
    }

    db.messages.splice(0, 0, message);

    writeDatabase();
}

export function addApiDetails(apiKeyDetails: types.ApiKeyDetails)
{
    db.apiKeyDetails = apiKeyDetails;

    writeDatabase();
}

export function updated()
{
    db.lastChecked = Date.now();
    
    writeDatabase();
}

function writeDatabase()
{
    fs.writeFileSync(root+settings.databaseFile, JSON.stringify(db));
}