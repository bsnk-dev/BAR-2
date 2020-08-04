/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/

import fs = require("fs");
import * as types from "./types";

var root: string;

try
{
    root = JSON.parse(fs.readFileSync("./bar.json").toString()).root;
} 
catch
{
    root = "";
}


var config: types.Config;

var data: string = fs.readFileSync(root+'config/config.json').toString();

try
{
    config = JSON.parse(data);
}
catch
{
    console.error("Can't load config!");
}

export function setConfig(newData: types.Config)
{
    config = newData;
    fs.writeFileSync(root+"config/config.json", JSON.stringify(config));
}

export { config, root };