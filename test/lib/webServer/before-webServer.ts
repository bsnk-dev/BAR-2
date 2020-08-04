import * as webServer from "../../../lib/webServer";
import superagent from "superagent";
import fs from "fs";
import { root } from "../../../lib/config";

async function postUrl(url: string, data: object)
{
    var response = await superagent.post(url)
                           .set('Content-Type', 'www-form-urlencoded')
                           .send(`data=${JSON.stringify(data)}`)
                           .then();
    return response.text;
}

async function getUrl(url: string)
{
    var response = await superagent.get(url)
                           .accept("text/plain")
                           .then();
    return response.text;
}

before(function()
{
    this.webServer = webServer;
    this.webServer.startServer();

    this.postUrl = postUrl;
    this.getUrl = getUrl;

    fs.writeFileSync(root+"config/example.json", '{"pass":"1234"}');
});