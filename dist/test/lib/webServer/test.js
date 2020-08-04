"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_api_config_test_1 = __importDefault(require("./suites/get-api-config.test"));
const post_api_config_test_1 = __importDefault(require("./suites/post-api-config.test"));
describe("webServer", function () {
    get_api_config_test_1.default.bind(this)();
    post_api_config_test_1.default.bind(this)();
});
