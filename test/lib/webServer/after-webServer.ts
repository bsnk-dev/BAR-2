import * as webServer from "../../../lib/webServer";
import fs from "fs";
import { root } from "../../../lib/config";

after(function() 
{
    webServer.closeServer();

    fs.unlinkSync(root+"config/example.json");
});
