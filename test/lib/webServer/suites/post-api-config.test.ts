import assert from "assert";
import * as Config from "../../../../lib/config";



export default function suite()
{
    describe("POST /api/config/", function(this: any)
    {
        it("should modify the config", async function()
        {
            await this.postUrl('http://localhost:8008/api/config', {pwEmail: "hello@world", checkTime: 100});

            assert.strictEqual(Config.config.pwEmail, "hello@world");
            assert.strictEqual(Config.config.checkTime, 100);
        });
    });
}