import { ElementFinder,element,by } from "protractor";

export class AngularPage{
    search:ElementFinder;

    constructor(){
        this.search=element(by.css("input[type='search']"));
    }
}