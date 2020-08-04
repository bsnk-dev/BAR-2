"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function suite() {
    describe('#getNations()', function () {
        it('should respond with a list of nations longer than 100', function () {
            if (this.nationData.nations.length > 100) {
                assert_1.default.ok(true);
            }
            else {
                assert_1.default.ok(false);
            }
        });
        it('should have accurate api details', function () {
            if (this.nationData.api.totalRequests >= 2000 && this.nationData.api.totalRequests <= 10000) {
                assert_1.default.ok(true);
            }
            else {
                assert_1.default.ok(false);
            }
        });
    });
}
exports.default = suite;
