"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const config_1 = require("../../../../lib/config");
function suite() {
    describe("class PrivateJSON()", function () {
        it('should grab a private file and read it correctly', function () {
            var privateExample = new this.webServer.PrivateJSON();
            privateExample.open(config_1.root + "config/example.json");
            assert_1.default.strictEqual(privateExample.contents.toString(), '{"pass":"1234"}');
        });
        it('should accept censored json and output the new json', function () {
            var privateExample = new this.webServer.PrivateJSON();
            privateExample.open(config_1.root + "config/example.json");
            var newJSON = privateExample.JSON;
            newJSON.pass = "";
            privateExample.set(newJSON);
            assert_1.default.strictEqual(privateExample.string(), '{"pass":""}');
        });
    });
}
exports.default = suite;
