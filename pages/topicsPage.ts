import { PseudoAbstractPage } from "./pseudoAbstractPage";
import { browser, protractor, element, by} from "protractor"

export class TopicsPage extends PseudoAbstractPage {
    public ResearchFieldElement = element(by.xpath("//*[@id='jump-content']/div/section[2]/div/a[7]"));

    constructor() {
        super();
    }
    
    async WaitForTopicsPageIsLoaded() {
        await browser.wait(protractor.ExpectedConditions.titleContains("Topics | Google Cloud Blog"), 10000, "Topics page never loaded");
    }

}
