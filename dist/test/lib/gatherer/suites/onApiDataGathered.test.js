"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function suite() {
    describe("#onApiDataGathered()", function () {
        it('should call back the same function', function (done) {
            this.gatherer.onApiDataGathered(() => { done(); });
            this.gatherer.apiDataGathered();
        });
    });
}
exports.default = suite;
