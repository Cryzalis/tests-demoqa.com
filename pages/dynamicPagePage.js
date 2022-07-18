const { element, browser } = require("protractor");
var EC = protractor.ExpectedConditions;

class DynamicPage{
    #visible = element(by.id('visibleAfter'));


    async visibleBtnClick(){
        await browser.wait(EC.visibilityOf(this.#visible), 10000);
        await this.#visible.click();
        
    }
    getRequest(){
        
    }

}


exports.DynamicPage=DynamicPage;