"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function suite() {
    describe("#onDataGathered()", function () {
        it('should call back the same function', function (done) {
            this.gatherer.onDataGathered(() => { done(); });
            this.gatherer.dataGathered();
        });
    });
}
exports.default = suite;
