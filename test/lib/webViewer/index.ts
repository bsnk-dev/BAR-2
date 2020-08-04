import addApiDetails from "./suites/addApiDetails.test";
import addToWebViewer from "./suites/addToWebViewer.test";
import updated from "./suites/updated.test";

describe("webViewer", function() {
    addApiDetails.bind(this)();
    addToWebViewer.bind(this)();
    updated.bind(this)();
});