import assert from "assert";
import fs from "fs";
import { root } from "../../../../lib/config";

export default function suite()
{
    describe('#updated()', function(this: any) {
        it('should update last checked correctly', function()
        {
            this.webViewer.updated();
            assert.notStrictEqual(JSON.parse(fs.readFileSync(root+this.webSettings.databaseFile).toString()).lastChecked, 0);
        });
    });
}