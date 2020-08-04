"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../../../../lib/config");
function suite() {
    describe('#addToWebViewer()', function () {
        it('should add a message to the web viewer database', function () {
            var nation = { id: 0, name: "Foo", leader: "Bar", score: 0, cities: 1, founded: 0 };
            var sent = { nation: nation, successful: true };
            this.webViewer.addToWebViewer(sent);
            assert_1.default.strictEqual(JSON.stringify(JSON.parse(fs_1.default.readFileSync(config_1.root + this.webSettings.databaseFile).toString()).messages[0]), JSON.stringify(sent));
        });
    });
}
exports.default = suite;
