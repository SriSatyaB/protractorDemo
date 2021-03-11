import {Config} from "protractor";
import  * as reporter from "cucumber-html-reporter";

export let config: Config  = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs:['../features/first.feature'],
    //by default it protractor considers chrome as default browser
    capabilities: {
        'browserName': 'chrome'
      },
      
      cucumberOpts: {
        tags:"@test",
        format:"json:./cucumberReport.json",
        
        
        require: [
          './StepDefinitions/*.js' // accepts a glob
        ]
        },
        onComplete:()=>{ 
           
    
        reporter.generate(
          {
          theme: 'bootstrap',
          jsonFile: './cucumberReport.json',
          output: './cucumber_Report.html',
          reportSuiteAsScenarios: true,
          scenarioTimestamp: true,
          launchReport: true,
          metadata: {
              "App Version":"0.3.2",
              "Test Environment": "STAGING",
              "Browser": "Chrome  54.0.2840.98",
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      }
      );
      },
};