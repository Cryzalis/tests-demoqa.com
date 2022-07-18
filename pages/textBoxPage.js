const { element } = require("protractor");

class TextBox{
    #inputName = element(by.id('userName'))
    #inputEmail = element(by.id('userEmail'))
    #inputCurrentAdrs = element(by.id('currentAddress'))
    #inputPermanentAdrs = element(by.id('permanentAddress'))
    #submitBtn = element(by.buttonText('Submit'))

    async setName(name){
        await this.#inputName.sendKeys(name)
    }
    async setEmail(email){
        await this.#inputEmail.sendKeys(email)
    }
    async setCurrent(address){
        await this.#inputCurrentAdrs.sendKeys(address)
    }
    async setPermanent(address){
        await this.#inputPermanentAdrs.sendKeys(address)
    }
    async clickSubmit(){
        await this.#submitBtn.click()
    }
    async scroll(height){
        await browser.executeScript('window.scrollTo(0,'+height +');')
    }
}
exports.TextBox=TextBox;