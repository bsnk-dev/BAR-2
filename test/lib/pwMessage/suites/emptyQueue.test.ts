import assert from "assert";

export default function suite()
{
    describe("#emptyQueue()", function(this: any)
    {
        it('should send a message', function()
        {  
            this.goodMessenger.queue = [];
            this.goodMessenger.addToQueue({name: "Blusania", leader: "Nixon", id: 100541, founded: 0});

            this.goodMessenger.onSentMessage((res: any) => 
            { 
                if (JSON.stringify(res.nation) == JSON.stringify({name: "Blusania", leader: "Nixon", id: 100541, founded: 0}) && res.successful)
                {
                    assert.ok(true);
                }
                else
                {
                    assert.ok(false);
                }
            });

            this.goodMessenger.emptyQueue();
        });

        it('should fail to send a message', async function()
        {  
            this.badMessenger.queue = [];
            this.badMessenger.addToQueue({name: "Blusania", leader: "_no_leader_____", id: 100541, founded: 0});

            this.badMessenger.onSentMessage((res: any) => 
            { 
                if (JSON.stringify(res.nation) == JSON.stringify({name: "Blusania", leader: "_no_leader_____", id: 100541, founded: 0}) && !res.successful)
                {
                    assert.ok(true);
                }
                else
                {
                    assert.ok(false);
                }
            });

            this.badMessenger.emptyQueue();
        });
    });
}

