const {  $, browser, } = require("protractor");
var EC = browser.ExpectedConditions;
class ToolTipsPage{
    #btn = $('#toolTipButton')
    #input = $('#toolTipTextField')
    #btnToolTip = $('#buttonToolTip')
    #inputToolTip = $('#textFieldToolTip')

    
    
    async moveToBtn(){
        await browser.actions().mouseMove(this.#btn).perform(); 
        await browser.sleep(1000)
        expect (this.#btnToolTip.isDisplayed()).toBe(true)
    }
    async moveToInput(){
        await browser.actions().mouseMove(this.#input).perform(); 
        await browser.sleep(1000)
        expect (this.#inputToolTip.isDisplayed()).toBe(true)
    }

}
exports.ToolTipsPage=ToolTipsPage;