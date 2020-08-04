import assert from "assert";
import * as Config from "../../../../lib/config";
import * as webViewer from "../../../../lib/webViewer";

import fs from "fs";

export default function suite()
{
    describe("GET /api/web-db/", function(this: any)
    {
        it("should return the set web database", async function()
        {
            var webSettings = JSON.parse(fs.readFileSync(Config.root+"config/web-config.json").toString())

            webViewer.addApiDetails(
            {
                totalRequests: 999,
                remainingRequests: 1
            })

            assert.strictEqual(JSON.stringify(JSON.parse(await this.getUrl("http://localhost:8008/api/web-db")).apiKeyDetails), JSON.stringify(JSON.parse(fs.readFileSync(Config.root+webSettings.databaseFile).toString()).apiKeyDetails));
        });
    });
}