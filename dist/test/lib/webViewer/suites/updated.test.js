"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../../../../lib/config");
function suite() {
    describe('#updated()', function () {
        it('should update last checked correctly', function () {
            this.webViewer.updated();
            assert_1.default.notStrictEqual(JSON.parse(fs_1.default.readFileSync(config_1.root + this.webSettings.databaseFile).toString()).lastChecked, 0);
        });
    });
}
exports.default = suite;
