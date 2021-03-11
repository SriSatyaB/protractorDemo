"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./PageObjects/Calculator");
const AngularPage_1 = require("./PageObjects/AngularPage");
describe('Repeator Demo', () => {
    it('demo1', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        let calc = new Calculator_1.Calculator();
        yield calc.firstBox.sendKeys(5);
        //await element(by.model('operator')).element(by.css('option:nth-child(4)')).click();
        yield calc.secondBox.sendKeys(5);
        yield calc.goBtn.click();
        yield calc.Result.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular app Title Test', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get('https://angular.io/');
        let ang = new AngularPage_1.AngularPage();
        yield ang.search.sendKeys('hello');
        //console.log(browser.getTitle());
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UZXN0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUE4QztBQUM5Qyx5REFBc0Q7QUFDdEQsMkRBQXdEO0FBQ3hELFFBQVEsQ0FBQyxlQUFlLEVBQUMsR0FBRSxFQUFFO0lBQ3pCLEVBQUUsQ0FBQyxPQUFPLEVBQUMsR0FBTyxFQUFFO1FBQ2pCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUUvRCxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLHFGQUFxRjtRQUNyRixNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBQyxHQUFPLEVBQUU7UUFDakMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFFLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsa0NBQWtDO0lBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9