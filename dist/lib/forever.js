"use strict";
/*
*   (C) Copyright bsnk-dev 2020
*   MIT License - See license file for details
*
*   This is the file that runs everything else. Running index.js directly will not work because of the configuration.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const config_1 = require("./config");
/*var index: any = spawn('forever ./dist/lib/index.js');

index.stdout.on('data', (data: any) =>
{
    console.log(data);
});*/
var processRunning = false;
while (!processRunning) {
    var index = child_process_1.spawn('node ' + config_1.root + './index.js');
    index.stdout.on('data', (data) => {
        console.log(data);
    });
    index.stdout.on('close', (data) => {
        processRunning = false;
    });
    processRunning = true;
}
