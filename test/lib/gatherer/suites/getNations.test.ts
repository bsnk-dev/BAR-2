import assert from "assert";

export default function suite() {
    describe('#getNations()', function(this: any) {
        it('should respond with a list of nations longer than 100', function() {
            
            if (this.nationData.nations.length > 100)
            {
                assert.ok(true);
            } 
            else
            {
                assert.ok(false);
            }
        });

        it ('should have accurate api details', function() {
            if (this.nationData.api.totalRequests >= 2000 && this.nationData.api.totalRequests <= 10000)
            {
                assert.ok(true);
            }
            else
            {
                assert.ok(false);
            }
        });
    });
}