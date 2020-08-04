import * as pwMessage from "../../../lib/pwMessage";

import { config } from "../../../lib/config";

before(function()
{
    this.goodMessenger = new pwMessage.messenger(config.pwEmail, config.pwPassword);
    this.badMessenger = new pwMessage.messenger("__foo@foo.com", "*");
})