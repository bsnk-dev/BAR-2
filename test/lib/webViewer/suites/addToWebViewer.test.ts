import assert from "assert";
import fs from "fs";
import { root } from "../../../../lib/config";

export default function suite()
{
    describe('#addToWebViewer()', function(this: any) {
        it('should add a message to the web viewer database', function()
        {
            var nation: any = {id: 0, name: "Foo", leader: "Bar", score: 0, cities: 1, founded: 0};
            var sent: any = {nation: nation, successful: true};

            this.webViewer.addToWebViewer(sent);
            assert.strictEqual(
                JSON.stringify(
                    JSON.parse(
                        fs.readFileSync(root+this.webSettings.databaseFile).toString()
                    ).messages[0]),
                JSON.stringify(sent));
        });
    });
}