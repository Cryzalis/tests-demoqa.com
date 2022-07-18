const { element, $, browser, protractor, ExpectedConditions } = require("protractor");
var EC = browser.ExpectedConditions;
class TabsPage{
    #what = $('#demo-tab-what')
    #origin = $('#demo-tab-origin')
    #use = $('#demo-tab-use')
    #tabWhat = $('#demo-tabpane-what')
    #tabOrigin = $('#demo-tabpane-origin')
    #tabUse = $('#demo-tabpane-use')
    
    
    async clickWhat(){
        await this.#what.click()
        expect (this.#tabWhat.isDisplayed()).toBe(true)
        expect (this.#tabOrigin.isDisplayed()).toBe(false)
        expect (this.#tabUse.isDisplayed()).toBe(false)
    }
    async clickOrigin(){
        await this.#origin.click()
        expect (this.#tabWhat.isDisplayed()).toBe(false)
        expect (this.#tabOrigin.isDisplayed()).toBe(true)
        expect (this.#tabUse.isDisplayed()).toBe(false)
    }
    async clickUse(){
        await this.#use.click()
        expect (this.#tabWhat.isDisplayed()).toBe(false)
        expect (this.#tabOrigin.isDisplayed()).toBe(false)
        expect (this.#tabUse.isDisplayed()).toBe(true)
    }

}
exports.TabsPage=TabsPage;