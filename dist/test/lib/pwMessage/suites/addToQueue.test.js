"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function suite() {
    describe("#addToQueue()", function () {
        it('should add a message to a queue', function () {
            this.goodMessenger.addToQueue({ name: "Blusania", leader: "Nixon", id: 100541, founded: 0 });
            assert_1.default.strictEqual(JSON.stringify(this.goodMessenger.queue[0]), JSON.stringify({ name: "Blusania", leader: "Nixon", id: 100541, founded: 0 }));
        });
    });
}
exports.default = suite;
