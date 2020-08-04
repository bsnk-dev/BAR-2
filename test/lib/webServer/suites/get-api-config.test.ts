import assert from "assert";
import * as Config from "../../../../lib/config";

export default function suite()
{
    describe("GET /api/config/", function(this: any)
    {
        it("should return the set config", async function()
        {
            Config.setConfig({
                "pwEmail":"",
                "pwPassword":"",
                "apiKey":"",
                "checkTime":180000,
                "subject":"Welcome to the Generic Alliance.",
                "checksToRelogin":1
            });

            assert.strictEqual(await this.getUrl("http://localhost:8008/api/config"), JSON.stringify(Config.config));
        });
    });
}