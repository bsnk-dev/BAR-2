export default function suite()
{
    describe("#onDataGathered()", function(this: any) {
        it('should call back the same function', function(done) {
            this.gatherer.onDataGathered(() => { done(); });
            this.gatherer.dataGathered();
        });
    });
}
