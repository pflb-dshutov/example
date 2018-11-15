
import { defineSupportCode, Then} from "cucumber";
import { browser, ExpectedConditions } from 'protractor';
import { MainPage } from '../pages/mainPage'
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

defineSupportCode(({Given, When, Then}) => {
    let mainPage = new MainPage(); 
    browser.manage().timeouts().implicitlyWait(5000);

    Given(/^I navigate to main page$/, async () => {
        await browser.get("https://cloud.google.com/blog/"); 
    });

    Then(/^I check i am on main page$/, async () => {
        await expect(browser.getTitle()).to.eventually.equal("Google Cloud Blog | News, Features and Announcements");
    })

    Then(/^I check headings on main menu:$/, async (datatable) => {
        datatable.raw().forEach(async row => {
            await mainPage.CheckHeading(row[0], row[1]);
        });
    })

});

