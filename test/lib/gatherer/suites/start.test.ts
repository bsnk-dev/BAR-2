import assert from "assert";

export default function suite()
{
    describe('#start()', function(this: any) {
        it('the interval should start and put it\'s value into memory', async function() {
            await this.gatherer.start();
            assert.strictEqual(this.gatherer.loopInterval._destroyed, false);
            this.gatherer.clear();
        });
    });
}
