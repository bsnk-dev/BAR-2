"use strict";
/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = exports.config = exports.setConfig = void 0;
const fs = require("fs");
var root;
exports.root = root;
try {
    exports.root = root = JSON.parse(fs.readFileSync("./bar.json").toString()).root;
}
catch (_a) {
    exports.root = root = "";
}
var config;
exports.config = config;
var data = fs.readFileSync(root + 'config/config.json').toString();
try {
    exports.config = config = JSON.parse(data);
}
catch (_b) {
    console.error("Can't load config!");
}
function setConfig(newData) {
    exports.config = config = newData;
    fs.writeFileSync(root + "config/config.json", JSON.stringify(config));
}
exports.setConfig = setConfig;
