"use strict";
exports.__esModule = true;
exports.config = void 0;
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    specs: ['TestSpec.js'],
    //by default it protractor considers chrome as default browser
    capabilities: {
        'browserName': 'chrome'
    }
};
