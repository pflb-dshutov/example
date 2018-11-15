
import {$, $$, ElementArrayFinder, ElementFinder, element, by, browser, protractor} from "protractor"
import { LoggerExample } from "../helpers/wins";
import { PseudoAbstractPage } from "./pseudoAbstractPage";
const winston = require('winston');
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let logObject = LoggerExample.loggerDetails;
const logger =  winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
 });



export class MainPage extends PseudoAbstractPage  {
    public headings;


    constructor(){
        super();
    }


    //     // this.headings = await $$("li.h-c-header__nav-li>a");

//===============================================================

    async ClickOnMainMenuElement(value: string) {
        let _element = await element(by.xpath(`//li[@class='h-c-header__nav-li' ]/a[contains(., '${value}')]`));
        await this.ClickOnElement(_element);
    }



    async ScrollToTopics() {
        let _element = await element(by.xpath("//section[@class='h-c-page products-navigation-list']/h1"));
        await browser.executeScript("arguments[0].scrollIntoView();", _element);
        await expect(await _element.getText()).to.equal("Topics");
    }

    async GetHeading(number: string) {
        let heading = await element(by.xpath(`//li[@class='h-c-header__nav-li'][${number}]/a`)).getText();
        // logObject.log("info", `Main menu heading under the number ${number} is: ${heading}`);
        return heading;
    }

    async CheckAllHeadings() {
        logObject.log("info", "Checking main page menu headings");
        await expect(await this.GetHeading("1")).to.equal("Latest Stories"); 
        await expect(await this.GetHeading("2")).to.equal("Product News"); 
        await expect(await this.GetHeading("3")).to.equal("Topics"); 
    }

//==================================================================

    async CheckHeading(number: string, value: string) {
        logObject.log("info", `Checking main menu heading under the number ${number}, value should be - ${value}`);
        await expect(await this.GetHeading(number)).to.equal(value); 
    }
    

}