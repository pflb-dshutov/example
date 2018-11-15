import { defineSupportCode} from "cucumber";
import { MainPage } from '../pages/mainPage'

defineSupportCode(({ When }) => {
    let mainPage = new MainPage(); 

    When(/^I click "([^\"]*)" heading$/, async (heading: string) => {
        await mainPage.ClickOnMainMenuElement(heading);
    })

})
