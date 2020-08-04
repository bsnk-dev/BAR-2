import assert from "assert";

export default function suite()
{
    describe("#addToQueue()", function(this: any)
    {
        it('should add a message to a queue', function()
        {
            this.goodMessenger.addToQueue({name: "Blusania", leader: "Nixon", id: 100541, founded: 0});
            assert.strictEqual(JSON.stringify(this.goodMessenger.queue[0]), JSON.stringify({name: "Blusania", leader: "Nixon", id: 100541, founded: 0}));
        });
    });
}