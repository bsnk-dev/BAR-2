"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_test_1 = __importDefault(require("./suites/login.test"));
const addToQueue_test_1 = __importDefault(require("./suites/addToQueue.test"));
const emptyQueue_test_1 = __importDefault(require("./suites/emptyQueue.test"));
const onSentMessage_test_1 = __importDefault(require("./suites/onSentMessage.test"));
describe("pwMessenger", function () {
    login_test_1.default.bind(this)();
    addToQueue_test_1.default.bind(this)();
    emptyQueue_test_1.default.bind(this)();
    onSentMessage_test_1.default.bind(this)();
});
