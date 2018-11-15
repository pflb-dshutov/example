import { PseudoAbstractPage } from "./PseudoAbstractPage";
import { browser, protractor } from "protractor"

export class ProdcutNewsPage extends PseudoAbstractPage {

    constructor() {
        super();
    }

    async WaitForProductNewsPageIsLoaded() {
        await browser.wait(protractor.ExpectedConditions.titleContains("Product News | Google Cloud Blog"),
         10000, "Product news page never loaded");
    }
}