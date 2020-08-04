"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webServer = __importStar(require("../../../lib/webServer"));
const superagent_1 = __importDefault(require("superagent"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../../../lib/config");
async function postUrl(url, data) {
    var response = await superagent_1.default.post(url)
        .set('Content-Type', 'www-form-urlencoded')
        .send(`data=${JSON.stringify(data)}`)
        .then();
    return response.text;
}
async function getUrl(url) {
    var response = await superagent_1.default.get(url)
        .accept("text/plain")
        .then();
    return response.text;
}
before(function () {
    this.webServer = webServer;
    this.webServer.startServer();
    this.postUrl = postUrl;
    this.getUrl = getUrl;
    fs_1.default.writeFileSync(config_1.root + "config/example.json", '{"pass":"1234"}');
});
