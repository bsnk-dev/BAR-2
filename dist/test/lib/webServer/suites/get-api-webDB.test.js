"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const Config = __importStar(require("../../../../lib/config"));
const webViewer = __importStar(require("../../../../lib/webViewer"));
const fs_1 = __importDefault(require("fs"));
function suite() {
    describe("GET /api/web-db/", function () {
        it("should return the set web database", async function () {
            var webSettings = JSON.parse(fs_1.default.readFileSync(Config.root + "config/web-config.json").toString());
            webViewer.addApiDetails({
                totalRequests: 999,
                remainingRequests: 1
            });
            assert_1.default.strictEqual(JSON.stringify(JSON.parse(await this.getUrl("http://localhost:8008/api/web-db")).apiKeyDetails), JSON.stringify(JSON.parse(fs_1.default.readFileSync(Config.root + webSettings.databaseFile).toString()).apiKeyDetails));
        });
    });
}
exports.default = suite;
