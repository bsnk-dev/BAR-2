"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const addApiDetails_test_1 = __importDefault(require("./suites/addApiDetails.test"));
const addToWebViewer_test_1 = __importDefault(require("./suites/addToWebViewer.test"));
const updated_test_1 = __importDefault(require("./suites/updated.test"));
describe("webViewer", function () {
    addApiDetails_test_1.default.bind(this)();
    addToWebViewer_test_1.default.bind(this)();
    updated_test_1.default.bind(this)();
});
