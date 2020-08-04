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
exports.messenger = void 0;
const superagent = require("superagent");
const config_1 = require("./config");
const types = __importStar(require("./types"));
class messenger {
    constructor(email, password) {
        this.callback = function () { };
        this.session = superagent.agent();
        this.email = email;
        this.password = password;
        this.queue = [];
    }
    async emptyQueue() {
        for (var i = this.queue.length - 1; i >= 0; i--) {
            var success = await this.sendMessage({ receiver: this.queue[i].leader, subject: config_1.config.subject, body: config_1.config.message });
            if (success) {
                console.log(`Sent message to ${this.queue[i].leader}\nhttps://politicsandwar.com/nation/id=${this.queue[i].id} \n`);
            }
            else {
                console.log(`Failed to send message to ${this.queue[i].leader}; removing from queue.`);
            }
            this.sentMessage({ nation: this.queue[i], successful: success });
            this.queue.pop();
        }
    }
    async addToQueue(nation) {
        this.queue.push(nation);
    }
    async login() {
        var response = await this.session
            .post("https://politicsandwar.com/login/")
            .send({ "email": this.email, "password": this.password, "loginform": "Login" })
            .type("form")
            .set('Accept', 'text/plain')
            .then();
        if (response.text.includes("Login Successful")) {
            return true;
        }
        else {
            return false;
        }
    }
    messageOptions(options) {
        var newOptions = new types.NewMessageOptions();
        newOptions.receiver = options.receiver || "";
        newOptions.carboncopy = options.carboncopy || "";
        newOptions.subject = options.subject || "";
        newOptions.body = options.body || "";
        return newOptions;
    }
    async sendMessage(options) {
        return true;
        options = this.messageOptions(options);
        var response = await this.session
            .post("https://politicsandwar.com/inbox/message/")
            .send({ "receiver": options.receiver, "carboncopy": options.carboncopy, "subject": options.subject, "body": options.body, "sndmsg": true, "newconversation": true })
            .type('form')
            .then();
        if (response.text.includes("You have successfully sent a message")) {
            return true;
        }
        else {
            return false;
        }
    }
    onSentMessage(callback) {
        this.callback = callback;
    }
    sentMessage(message) {
        this.callback(message);
    }
}
exports.messenger = messenger;
