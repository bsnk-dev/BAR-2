"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function suite() {
    describe('#start()', function () {
        it('the interval should start and put it\'s value into memory', async function () {
            await this.gatherer.start();
            assert_1.default.strictEqual(this.gatherer.loopInterval._destroyed, false);
            this.gatherer.clear();
        });
    });
}
exports.default = suite;
