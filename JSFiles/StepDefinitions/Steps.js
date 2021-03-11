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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const Calculator_1 = require("../PageObjects/Calculator");
const AngularPage_1 = require("../PageObjects/AngularPage");
const chai_1 = __importDefault(require("chai"));
//Scenario 1
let calc = new Calculator_1.Calculator();
var expect = chai_1.default.expect;
cucumber_1.Given('user navigates to the calc site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('user enters {string} abnd {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstBox.sendKeys(string);
    yield calc.secondBox.sendKeys(string2);
}));
cucumber_1.When('user clicks on go button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.goBtn.click();
}));
cucumber_1.Then('the result should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    //await expect(calc.Result.getText()).toBe(int);
    yield calc.Result.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//Scenario 2
cucumber_1.Given('user navigates to angular site', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://angular.io/');
}));
cucumber_1.When('user enters {string} in search field', (string) => __awaiter(void 0, void 0, void 0, function* () {
    let ang = new AngularPage_1.AngularPage();
    yield ang.search.sendKeys(string);
}));
cucumber_1.Then('user should be able to see the related results', function () {
    console.log("done");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBcUQ7QUFDckQsMkNBQW1DO0FBQ25DLDBEQUF1RDtBQUN2RCw0REFBeUQ7QUFDekQsZ0RBQXdCO0FBRWhCLFlBQVk7QUFFWixJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUM1QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3hCLGdCQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBUSxFQUFFO0lBQ2hELE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0osZUFBSSxDQUFDLG9DQUFvQyxFQUFFLENBQU8sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ2pFLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBR0wsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN6QyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdGLGVBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3JELGdEQUFnRDtJQUNoRCxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUlKLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFTCxZQUFZO0FBQ1osZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFRLEVBQUU7SUFDaEQsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUMzRCxJQUFJLEdBQUcsR0FBRSxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUMzQixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0RBQWdELEVBQUU7SUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN0QixDQUFDLENBQUMsQ0FBQyJ9