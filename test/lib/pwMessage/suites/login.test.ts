import assert from "assert";

export default function suite()
{
    describe("#login()", function(this: any)
    {
        it('should succeed with correct login info', async function()
        {   
            var success: boolean = await this.goodMessenger.login()
            assert.strictEqual(success, true);
        });

        it('should fail with incorrect login info', async function()
        {  
            var success: boolean = await this.badMessenger.login()
            assert.strictEqual(success, false);
        });
    });
}