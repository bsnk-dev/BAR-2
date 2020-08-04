import * as webViewer from "../../../lib/webViewer";
import fs from "fs";
import { root } from "../../../lib/config";

before(function()
{
    fs.unlinkSync(root+'db/web-db.json');

    this.webViewer = webViewer;
    this.webSettings = JSON.parse(fs.readFileSync(root+'config/web-config.json').toString());
});