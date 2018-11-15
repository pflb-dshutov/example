import { ElementFinder, element, by, browser, protractor} from "protractor"
import { LoggerExample } from "../helpers/wins";

let logObject = LoggerExample.loggerDetails;

export class PseudoAbstractPage {

    async ClickOnElement(_element) {
        logObject.log("info", `Click on element '${await _element.getText()}'`)
        await _element.click();        
    }

    async ElementWait(_element) {
        logObject.log("info", `Wait until the element '${await _element.getText()}' is visible`)
        await browser.wait(protractor.ExpectedConditions.visibilityOf(_element), 10000, "Element never loaded");
    }
}