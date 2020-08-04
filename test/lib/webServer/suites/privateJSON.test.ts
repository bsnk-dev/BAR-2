import assert from "assert";
import { root } from "../../../../lib/config";

export default function suite()
{
    describe("class PrivateJSON()", function(this: any)
    {
        it('should grab a private file and read it correctly', function()
        {
            var privateExample = new this.webServer.PrivateJSON();
            privateExample.open(root+"config/example.json");

            assert.strictEqual(privateExample.contents.toString(), '{"pass":"1234"}');
        });

        it('should accept censored json and output the new json', function()
        {
            var privateExample = new this.webServer.PrivateJSON();
            privateExample.open(root+"config/example.json");

            var newJSON = privateExample.JSON;
            newJSON.pass = "";

            privateExample.set(newJSON);

            assert.strictEqual(privateExample.string(), '{"pass":""}');
        });
    });
}