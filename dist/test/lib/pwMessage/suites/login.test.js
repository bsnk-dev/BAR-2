"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function suite() {
    describe("#login()", function () {
        it('should succeed with correct login info', async function () {
            var success = await this.goodMessenger.login();
            assert_1.default.strictEqual(success, true);
        });
        it('should fail with incorrect login info', async function () {
            var success = await this.badMessenger.login();
            assert_1.default.strictEqual(success, false);
        });
    });
}
exports.default = suite;
