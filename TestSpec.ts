import {browser,element,by} from "protractor";
import { Calculator } from "./PageObjects/Calculator";
import { AngularPage } from "./PageObjects/AngularPage";
describe('Repeator Demo',()=>{
    it('demo1',async()=>{
       await browser.get('http://juliemr.github.io/protractor-demo/');

       let calc = new Calculator();
       await calc.firstBox.sendKeys(5);
       //await element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
       await calc.secondBox.sendKeys(5);
       await calc.goBtn.click();
       await calc.Result.getText().then(function(text){
            console.log(text);
        });

    });

    it('Angular app Title Test',async()=>{
        await browser.get('https://angular.io/');
        let ang =new AngularPage();
        await ang.search.sendKeys('hello');
        //console.log(browser.getTitle());
    });
});