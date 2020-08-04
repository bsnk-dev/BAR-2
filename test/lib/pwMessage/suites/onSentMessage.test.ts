export default function suite()
{
    describe("#onSentMessage()", function(this: any)
    {
        it('should call same function', function(done) {
            this.goodMessenger.onSentMessage(() =>
            {
                done();
            });
    
            this.goodMessenger.sentMessage();

            this.goodMessenger.onSentMessage(() => {});
        });
    });
}