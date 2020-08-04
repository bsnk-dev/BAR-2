/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

import * as http from "http";
import * as fs from "fs";
import * as mime from "mime";
import * as path from "path";
import * as url from "url";
import * as querystring from "querystring"

import * as types from "./types";

import * as config from "./config";

import { promises } from "dns";
import { hostname } from "os";

var serverConfig = { 
  port: 8008,
  dir: "public"
};

export async function getLocalIPAddress(options: any) 
{
  return (await promises.lookup(hostname(), options))
    .address;
}

const webSettings: types.WebViewerSettings = JSON.parse(fs.readFileSync(config.root+'config/web-config.json').toString());

export class PrivateJSON
{
    public JSON: any = {};
    public file: string = "";
    public contents: Buffer | undefined;

    public open(file: string)
    {
        this.file = file;

        try
        {
            this.contents = fs.readFileSync(file);
            this.JSON = JSON.parse(this.contents.toString());
        }
        catch
        {
            return;
        }
    }

    public set(newJSON: any)
    {
        this.JSON = newJSON;
        this.contents = Buffer.from(JSON.stringify(newJSON));
    }

    public string()
    {
    
        return JSON.stringify(this.JSON);
    }
}

function privateFile(filename: string)
{
    return path.join(process.cwd(), config.root+filename);
}

function publicFile(filename: string)
{
    return path.join(process.cwd(), config.root+serverConfig.dir, filename);
}

function containingDirectory(filename: string)
{
    return path.dirname(filename).split(path.sep).pop();
}

async function streamFile(filename: string, response: http.ServerResponse)
{
    fs.createReadStream(filename, 
        {
            flags: 'r',
            mode: 0o666
        })
    .addListener("data", (data) =>
    {
        response.write(data);

    })
    .addListener("close", () =>
    {
        response.end();

    });
}

var server = http.createServer((request, response) => {
    var requestUrl = request.url || "";

    var pathname: any = url.parse(requestUrl).pathname;
    var filename: string = publicFile(pathname);
    
    if (request.method == "POST")
    {
        var body: string = "";

        request.on('data', chunk => 
        {
            body += chunk.toString();
        });
        request.on('end', () => 
        {
            if (path.extname(filename)
            || containingDirectory(filename) != "api")
            {
                response.end('{"success":false}');
                return;
            }

            var api: string = path.basename(filename);
            var query: any = querystring.parse(body);

            if (api == "config")
            {
                try
                {
                    var newConfigData: types.Config = new types.Config();
                    var data: types.Config = JSON.parse(query.data);
    
                    newConfigData.pwEmail = data.pwEmail || config.config.pwEmail;
                    newConfigData.pwPassword = data.pwPassword || config.config.pwPassword;
                    newConfigData.apiKey = data.apiKey || config.config.apiKey;
                    newConfigData.checkTime = data.checkTime || config.config.checkTime;
                    newConfigData.checksToRelogin = data.checksToRelogin || config.config.checksToRelogin;
                    newConfigData.subject = data.subject || config.config.subject;
                    newConfigData.message = data.message || config.config.message;
    
                    config.setConfig(newConfigData);
    
                    fs.writeFileSync(config.root+"config/config.json", JSON.stringify(newConfigData));

                    response.end('{"success":true}');
                }
                catch
                {
                    response.end('{"success":false"}');
                }
            }

            response.end('{"success":false}');
        });

        return;
    }

    var isApiRequest: boolean = false;
    if (!path.extname(filename)
        && containingDirectory(filename) == "api"
    )
    {
        isApiRequest = true;
    }

    if (isApiRequest)
    {
        var api = path.basename(filename);

        if (api == "config")
        {
            var privateConfig: PrivateJSON = new PrivateJSON();
            privateConfig.open(privateFile("config/config.json"));

            var censoredJSON = privateConfig.JSON;
            censoredJSON.pwPassword = "";

            privateConfig.set(censoredJSON);

            response.write(privateConfig.string());
            response.end();
        }

        if (api == "web-db")
        {
            streamFile(privateFile(webSettings.databaseFile), response);
        }
    }
    else if (fs.existsSync(filename))
    {
        response.writeHead(200, {'Content-Type': mime.getType(filename) || "application/octet-stream"});

        streamFile(filename, response);
    }
    else
    {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();

        return;
    }
});

export function startServer()
{
    server.listen(serverConfig.port);
}

export function closeServer()
{
    server.close();
}