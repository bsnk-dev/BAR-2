"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function suite() {
    describe("#emptyQueue()", function () {
        it('should send a message', function () {
            this.goodMessenger.queue = [];
            this.goodMessenger.addToQueue({ name: "Blusania", leader: "Nixon", id: 100541, founded: 0 });
            this.goodMessenger.onSentMessage((res) => {
                if (JSON.stringify(res.nation) == JSON.stringify({ name: "Blusania", leader: "Nixon", id: 100541, founded: 0 }) && res.successful) {
                    assert_1.default.ok(true);
                }
                else {
                    assert_1.default.ok(false);
                }
            });
            this.goodMessenger.emptyQueue();
        });
        it('should fail to send a message', async function () {
            this.badMessenger.queue = [];
            this.badMessenger.addToQueue({ name: "Blusania", leader: "_no_leader_____", id: 100541, founded: 0 });
            this.badMessenger.onSentMessage((res) => {
                if (JSON.stringify(res.nation) == JSON.stringify({ name: "Blusania", leader: "_no_leader_____", id: 100541, founded: 0 }) && !res.successful) {
                    assert_1.default.ok(true);
                }
                else {
                    assert_1.default.ok(false);
                }
            });
            this.badMessenger.emptyQueue();
        });
    });
}
exports.default = suite;
