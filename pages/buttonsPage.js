const { element, $, browser, protractor } = require("protractor");

class ButtonPage{
    #doubleBtn = element(by.id("doubleClickBtn"))
    #rigthBtn = $('#rightClickBtn')
    #simpleBtn = element(by.buttonText('Click Me'))
    #message = element.all(by.css('div.col-md-6 p'))

    async clickDouble(){
        await browser.actions().doubleClick(this.#doubleBtn).perform();
    }

    async clickRight(){
        await browser.actions().click(this.#rigthBtn, protractor.Button.RIGHT).perform();

    }

    async clickSimle(){
        await this.#simpleBtn.click()
    }

    async countMessage(){
        return await this.#message.count()
    }
}
exports.ButtonPage=ButtonPage;