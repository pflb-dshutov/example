import { TopicsPage } from "../pages/topicsPage";
import { defineSupportCode} from "cucumber";
import { ProdcutNewsPage } from "../pages/productNewsPage";
import { LoggerExample } from "../helpers/wins";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

let logObject = LoggerExample.loggerDetails;

defineSupportCode(({Then}) => {
    let topicsPage = new TopicsPage();
    let prodcutNewsPage = new ProdcutNewsPage();
 
    Then(/^I am on Product News page$/, async () => {
        logObject.log("info", "Checking i am on the Product News Page");
        await prodcutNewsPage.WaitForProductNewsPageIsLoaded();
    })

    Then(/^there is no Research element on this page$/, async () => {
        logObject.log("info", "Checking that element Research is not present on the Product News Page");
        await expect(topicsPage.ResearchFieldElement.getText()).not.to.be.equal("Research");
    });

})