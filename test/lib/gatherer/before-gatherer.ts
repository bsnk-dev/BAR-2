import * as Gatherer from "../../../lib/gatherer";

before(function(done)
{
    this.gatherer = new Gatherer.Gatherer();

    this.nationData = {};

    this.gatherer.getNations().then(((res: any) => 
    {
        this.nationData = res; 
        done();

        
    }));
});