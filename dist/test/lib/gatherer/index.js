"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getNations_test_1 = __importDefault(require("./suites/getNations.test"));
const onApiDataGathered_test_1 = __importDefault(require("./suites/onApiDataGathered.test"));
const onDataGathered_test_1 = __importDefault(require("./suites/onDataGathered.test"));
const start_test_1 = __importDefault(require("./suites/start.test"));
describe('Gatherer', function () {
    return;
    getNations_test_1.default.bind(this)();
    onApiDataGathered_test_1.default.bind(this)();
    onDataGathered_test_1.default.bind(this)();
    start_test_1.default.bind(this)();
});
