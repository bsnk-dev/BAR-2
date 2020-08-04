import login from "./suites/login.test";
import addToQueue from "./suites/addToQueue.test";
import emptyQueue from "./suites/emptyQueue.test";
import onSentMessage from "./suites/onSentMessage.test";

describe("pwMessenger", function()
{
    login.bind(this)();
    addToQueue.bind(this)();
    emptyQueue.bind(this)();
    onSentMessage.bind(this)();
});