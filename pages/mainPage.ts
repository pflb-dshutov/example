
import {$, $$, ElementArrayFinder, ElementFinder, element, by, browser, protractor} from "protractor"
import { LoggerExample } from "../helpers/wins";
import { PseudoAbstractPage } from "./pseudoAbstractPage";
const winston = require('winston');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let logObject = LoggerExample.loggerDetails;

export class MainPage extends PseudoAbstractPage  {
    public headings;


    constructor(){
        super();
    }

    async ClickOnMainMenuElement(value: string) {
        let _element = await element(by.xpath(`//li[@class='h-c-header__nav-li' ]/a[contains(., '${value}')]`));
        await this.ClickOnElement(_element);
    }



    async GetHeading(number: string) {
        let heading = await element(by.xpath(`//li[@class='h-c-header__nav-li'][${number}]/a`)).getText();
        return heading;
    }

    async CheckHeading(number: string, value: string) {
        logObject.log("info", `Checking main menu heading under the number ${number}, value should be - ${value}`);
        await expect(await this.GetHeading(number)).to.equal(value); 
    }
    

}