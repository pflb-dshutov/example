import { defineSupportCode} from "cucumber";
import { TopicsPage } from "../pages/topicsPage";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

defineSupportCode(({Then}) => {
    let topicsPage = new TopicsPage();
    
    Then(/^I am on Topics page$/, async () => {
       await topicsPage.WaitForTopicsPageIsLoaded();
    });

    Then(/^I check the presence of Research element$/, async () => {
        await topicsPage.ElementWait(topicsPage.ResearchFieldElement);
    });

})
