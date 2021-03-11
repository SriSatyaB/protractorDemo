import { Given,When,Then } from "@cucumber/cucumber";
import {browser} from "protractor";
import { Calculator } from "../PageObjects/Calculator";
import { AngularPage } from "../PageObjects/AngularPage";
import chai from "chai";

        //Scenario 1

        let calc = new Calculator();
        var expect = chai.expect;
         Given('user navigates to the calc site', async ()=> {
            await browser.get('http://juliemr.github.io/protractor-demo/');
          });

                   
         When('user enters {string} abnd {string}', async (string, string2)=> {
            await calc.firstBox.sendKeys(string);
            await calc.secondBox.sendKeys(string2);
            });


          When('user clicks on go button', async ()=> {
            await calc.goBtn.click();
          });

          
           Then('the result should be {string}', async (string)=> {
            //await expect(calc.Result.getText()).toBe(int);
            await calc.Result.getText().then(function(text){
                 expect(text).to.equal(string);
             });

            
            
            });
        
          //Scenario 2
          Given('user navigates to angular site', async ()=> {
            await browser.get('https://angular.io/');
          });

          When('user enters {string} in search field', async (string)=> {
            let ang =new AngularPage();
            await ang.search.sendKeys(string);
          });

          Then('user should be able to see the related results', function () {
            console.log("done");
          });