export default function suite()
{
    describe("#onApiDataGathered()", function(this: any) {
        it('should call back the same function', function(done) {
            this.gatherer.onApiDataGathered(() => { done(); });
            this.gatherer.apiDataGathered();
        });
    });
}
