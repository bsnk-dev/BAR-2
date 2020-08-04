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
exports.updated = exports.addApiDetails = exports.addToWebViewer = void 0;
const types = __importStar(require("./types"));
const fs = require("fs");
const config_1 = require("./config");
const settings = JSON.parse(fs.readFileSync(config_1.root + 'config/web-config.json').toString());
if (!fs.existsSync(config_1.root + settings.databaseFile)) {
    var defaultDatabase = {
        messages: [],
        apiKeyDetails: new types.ApiKeyDetails(),
        lastChecked: 0
    };
    fs.writeFileSync(config_1.root + settings.databaseFile, JSON.stringify(defaultDatabase));
}
var db = JSON.parse(fs.readFileSync(config_1.root + settings.databaseFile).toString());
function addToWebViewer(message) {
    if (db.messages.length > settings.maxSentMessages) {
        db.messages.pop();
    }
    db.messages.splice(0, 0, message);
    writeDatabase();
}
exports.addToWebViewer = addToWebViewer;
function addApiDetails(apiKeyDetails) {
    db.apiKeyDetails = apiKeyDetails;
    writeDatabase();
}
exports.addApiDetails = addApiDetails;
function updated() {
    db.lastChecked = Date.now();
    writeDatabase();
}
exports.updated = updated;
function writeDatabase() {
    fs.writeFileSync(config_1.root + settings.databaseFile, JSON.stringify(db));
}
