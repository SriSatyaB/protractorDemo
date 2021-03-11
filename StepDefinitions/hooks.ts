import {After, Before, Status} from "@cucumber/cucumber";
import { browser } from "protractor";
Before({tags: "@calctest"}, function () {
    console.log("this is clac test begining");
  });
  
  Before({tags: " @angulartest"}, function () {
    console.log("-----------------start");
  });

  After({tags: "@angulartest"}, function () {
    console.log("----------------------end");
  });

  //taking screenshot on scenario failure

  After( async function (scenario){
      if(scenario.result.status == Status.FAILED){
          const screenshot = await browser.takeScreenshot();
          this.attach(screenshot,"image/png");
      }

  });
  