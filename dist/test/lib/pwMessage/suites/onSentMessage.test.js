"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function suite() {
    describe("#onSentMessage()", function () {
        it('should call same function', function (done) {
            this.goodMessenger.onSentMessage(() => {
                done();
            });
            this.goodMessenger.sentMessage();
            this.goodMessenger.onSentMessage(() => { });
        });
    });
}
exports.default = suite;
