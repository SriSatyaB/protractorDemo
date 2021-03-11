import {Config} from "protractor";

export let config: Config  = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    specs:['TestSpec.js'],
    //by default it protractor considers chrome as default browser
    capabilities: {
        'browserName': 'chrome'
      }
};