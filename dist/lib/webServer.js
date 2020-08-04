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
exports.closeServer = exports.startServer = exports.PrivateJSON = exports.getLocalIPAddress = void 0;
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const mime = __importStar(require("mime"));
const path = __importStar(require("path"));
const url = __importStar(require("url"));
const querystring = __importStar(require("querystring"));
const types = __importStar(require("./types"));
const config = __importStar(require("./config"));
const dns_1 = require("dns");
const os_1 = require("os");
var serverConfig = {
    port: 8008,
    dir: "public"
};
async function getLocalIPAddress(options) {
    return (await dns_1.promises.lookup(os_1.hostname(), options))
        .address;
}
exports.getLocalIPAddress = getLocalIPAddress;
const webSettings = JSON.parse(fs.readFileSync(config.root + 'config/web-config.json').toString());
class PrivateJSON {
    constructor() {
        this.JSON = {};
        this.file = "";
    }
    open(file) {
        this.file = file;
        try {
            this.contents = fs.readFileSync(file);
            this.JSON = JSON.parse(this.contents.toString());
        }
        catch (_a) {
            return;
        }
    }
    set(newJSON) {
        this.JSON = newJSON;
        this.contents = Buffer.from(JSON.stringify(newJSON));
    }
    string() {
        return JSON.stringify(this.JSON);
    }
}
exports.PrivateJSON = PrivateJSON;
function privateFile(filename) {
    return path.join(process.cwd(), config.root + filename);
}
function publicFile(filename) {
    return path.join(process.cwd(), config.root + serverConfig.dir, filename);
}
function containingDirectory(filename) {
    return path.dirname(filename).split(path.sep).pop();
}
async function streamFile(filename, response) {
    fs.createReadStream(filename, {
        flags: 'r',
        mode: 0o666
    })
        .addListener("data", (data) => {
        response.write(data);
    })
        .addListener("close", () => {
        response.end();
    });
}
var server = http.createServer((request, response) => {
    var requestUrl = request.url || "";
    var pathname = url.parse(requestUrl).pathname;
    var filename = publicFile(pathname);
    if (request.method == "POST") {
        var body = "";
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            if (path.extname(filename)
                || containingDirectory(filename) != "api") {
                response.end('{"success":false}');
                return;
            }
            var api = path.basename(filename);
            var query = querystring.parse(body);
            if (api == "config") {
                try {
                    var newConfigData = new types.Config();
                    var data = JSON.parse(query.data);
                    newConfigData.pwEmail = data.pwEmail || config.config.pwEmail;
                    newConfigData.pwPassword = data.pwPassword || config.config.pwPassword;
                    newConfigData.apiKey = data.apiKey || config.config.apiKey;
                    newConfigData.checkTime = data.checkTime || config.config.checkTime;
                    newConfigData.checksToRelogin = data.checksToRelogin || config.config.checksToRelogin;
                    newConfigData.subject = data.subject || config.config.subject;
                    newConfigData.message = data.message || config.config.message;
                    config.setConfig(newConfigData);
                    fs.writeFileSync(config.root + "config/config.json", JSON.stringify(newConfigData));
                    response.end('{"success":true}');
                    if (data.pwEmail || data.pwPassword) {
                        setTimeout(function () {
                            process.on("exit", function () {
                                require("child_process").exec(process.argv.shift());
                            });
                            process.exit();
                        }, 1000);
                    }
                }
                catch (_a) {
                    response.end('{"success":false"}');
                }
            }
            response.end('{"success":false}');
        });
        return;
    }
    var isApiRequest = false;
    if (!path.extname(filename)
        && containingDirectory(filename) == "api") {
        isApiRequest = true;
    }
    if (isApiRequest) {
        var api = path.basename(filename);
        if (api == "config") {
            var privateConfig = new PrivateJSON();
            privateConfig.open(privateFile("config/config.json"));
            var censoredJSON = privateConfig.JSON;
            censoredJSON.pwPassword = "";
            privateConfig.set(censoredJSON);
            response.write(privateConfig.string());
            response.end();
        }
        if (api == "web-db") {
            streamFile(privateFile(webSettings.databaseFile), response);
        }
    }
    else if (fs.existsSync(filename)) {
        response.writeHead(200, { 'Content-Type': mime.getType(filename) || "application/octet-stream" });
        streamFile(filename, response);
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not Found");
        response.end();
        return;
    }
});
function startServer() {
    server.listen(serverConfig.port);
}
exports.startServer = startServer;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
