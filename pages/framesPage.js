const { element, $, browser, protractor, ExpectedConditions } = require("protractor");

class FramesPage{
    #frame1 = $('#frame1')
    #frame2 = element(by.id('frame2'))
    #text = $('h1')

    async getFrameinfo1(){
        await browser.switchTo().frame(this.#frame1.getWebElement())
        expect (await this.#text.getText()).toEqual('This is a sample page')
        await browser.switchTo().defaultContent()
    }
    async getFrameinfo2(){
        await browser.switchTo().frame(this.#frame2.getWebElement())
        expect (await this.#text.getText()).toEqual('This is a sample page')
    }
   
}
exports.FramesPage=FramesPage;