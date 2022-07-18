const { element, $, browser, protractor, ExpectedConditions } = require("protractor");
var EC = browser.ExpectedConditions;
class ProgressPage{
    #startBtn = $('#startStopButton')
    #vlaue = element(by.css('#progressBar div'))
    
    async clickStart(val){
        await this.#startBtn.click()
        await browser.wait(EC.textToBePresentInElement(this.#vlaue, val), 10000);
    }

}
exports.ProgressPage=ProgressPage;