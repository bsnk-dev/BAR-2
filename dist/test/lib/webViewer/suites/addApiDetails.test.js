"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../../../../lib/config");
function suite() {
    describe('#addApiDetails()', function () {
        it('should add api details to the database correctly', function () {
            this.webViewer.addApiDetails({ totalRequests: 5000, remainingRequests: 4000 });
            assert_1.default.strictEqual(JSON.stringify(JSON.parse(fs_1.default.readFileSync(config_1.root + this.webSettings.databaseFile).toString()).apiKeyDetails), JSON.stringify({ totalRequests: 5000, remainingRequests: 4000 }));
        });
    });
}
exports.default = suite;
