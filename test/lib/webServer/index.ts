import getApiConfig from "./suites/get-api-config.test";
import postApiConfig from "./suites/post-api-config.test";
import getWebDB from "./suites/get-api-webDB.test";
import privateJSON from "./suites/privateJSON.test";

describe("webServer", function()
{
    getApiConfig.bind(this)();
    postApiConfig.bind(this)();
    getWebDB.bind(this)();
    privateJSON.bind(this)();
});