const { element, $, browser, protractor, ExpectedConditions } = require("protractor");
class SliderPage{
    #slider = element(by.xpath("//input[@type]"))
    
    async siderFor(){
        for (let index = 0; index < 20; index++) {
            await this.#slider.sendKeys(protractor.Key.ARROW_RIGHT);
        }
    }
    async sliderJS(){
        await browser.executeScript("document.getElementsByTagName('input').value = '90'")
    }
}
exports.SliderPage=SliderPage;