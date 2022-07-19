const { element, $, browser } = require("protractor");

class FramesPage{
    #frame1 = $('#frame1')
    #frame2 = element(by.xpath("//iframe[@srcdoc]"))
    #text = $('body')

    async getParentFrameinfo(){
        await browser.switchTo().frame(this.#frame1.getWebElement())
        expect (await this.#text.getText()).toEqual('Parent frame')
        //await browser.switchTo().defaultContent()
    }
    async getChildFrameinfo(){
        await browser.switchTo().frame(this.#frame2.getWebElement())
        expect (await this.#text.getText()).toEqual('Child Iframe')
    }
   
}
exports.FramesPage=FramesPage;