/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

import superagent = require("superagent");
import { config } from "./config";

import * as types from "./types";

export class messenger
{
    private session: any;
    private email: string | undefined;
    private password: string | undefined;
    private queue: Array<types.Nation>;

    private callback: Function = function() {};

    constructor(email?: string, password?: string)
    {
        this.session = superagent.agent();
        this.email = email;
        this.password = password;
        this.queue = [];
    }

    getEmailAndPassword()
    {
        return {email: this.email || config.pwEmail, password: this.password || config.pwPassword };
    }

    async emptyQueue()
    {
        for (var i = this.queue.length - 1; i >= 0; i--)
        {
            var success: boolean = await this.sendMessage({receiver: this.queue[i].leader, subject: config.subject, body: config.message});

            if (success)
            {
                console.log(`Sent message to ${this.queue[i].leader}\nhttps://politicsandwar.com/nation/id=${this.queue[i].id} \n`);
            }
            else
            {
                console.log(`Failed to send message to ${this.queue[i].leader}; removing from queue.`);
            }

            this.sentMessage({nation: this.queue[i], successful: success});

            this.queue.pop();
            
        }
    }

    async addToQueue(nation: types.Nation)
    {
        this.queue.push(nation);
    }
    
    async login()
    {   
        var login: any = this.getEmailAndPassword();

        var response = await this.session
            .post("https://politicsandwar.com/login/")
            .send({"email": login.email, "password": login.password, "loginform": "Login"})
            .type("form")
            .set('Accept', 'text/plain')
            .then();

        if (response.text.includes("Login Successful"))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    messageOptions(options: any)
    {
        var newOptions = new types.NewMessageOptions();

        newOptions.receiver = options.receiver || "";
        newOptions.carboncopy = options.carboncopy || "";
        newOptions.subject = options.subject || "";
        newOptions.body = options.body || "";

        return newOptions;
    }

    async sendMessage(options: types.NewMessageOptions)
    {
        options = this.messageOptions(options);

        var response: any = await this.session
        .post("https://politicsandwar.com/inbox/message/")
        .send({"receiver":options.receiver, "carboncopy":options.carboncopy, "subject":options.subject, "body":options.body, "sndmsg":true, "newconversation":true})
        .type('form')
        .then();

        if (response.text.includes("You have successfully sent a message"))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    onSentMessage(callback: Function)
    {
        this.callback = callback;
    }

    sentMessage(message: types.SentMessage)
    {
        this.callback(message);
    }
}
