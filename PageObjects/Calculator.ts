import { ElementFinder,element,by } from "protractor";

 export class Calculator{
    firstBox:ElementFinder;
    secondBox:ElementFinder;
    goBtn:ElementFinder;
    Result:ElementFinder;

    constructor(){
        this.firstBox=element(by.model('first'));
        this.secondBox = element(by.model('second'));
        this.goBtn = element(by.id('gobutton'));
        this.Result=element(by.repeater('result in memory')).element(by.css('td:nth-child(3)'));
    }
}
