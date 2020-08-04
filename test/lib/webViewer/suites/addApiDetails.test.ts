import assert from "assert";
import fs from "fs";
import { root } from "../../../../lib/config";

export default function suite()
{
    describe('#addApiDetails()', function(this: any) 
    {
        it('should add api details to the database correctly', function()
        {
            this.webViewer.addApiDetails({totalRequests: 5000, remainingRequests: 4000});
            assert.strictEqual(JSON.stringify(JSON.parse(fs.readFileSync(root+this.webSettings.databaseFile).toString()).apiKeyDetails), JSON.stringify({totalRequests: 5000, remainingRequests: 4000}));
        });
    });
}