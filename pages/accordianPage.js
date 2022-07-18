const { element, $, browser, protractor, ExpectedConditions } = require("protractor");

class AccordianPage{
    #section1 = $('#section1Heading')
    #section2 = $('#section2Heading')
    #section3 = $('#section3Heading')
    #content1 = $('#section1Content')
    #content2 = $('#section2Content')
    #content3 = $('#section3Content')


    async section1(){
        expect(this.#content1.isDisplayed()).toBe(true)
        expect(this.#content2.isDisplayed()).toBe(false)
        expect(this.#content3.isDisplayed()).toBe(false)
    }
    async section2(){
        await this.#section2.click()
        expect(this.#content1.isDisplayed()).toBe(false)
        expect(this.#content2.isDisplayed()).toBe(true)
        expect(this.#content3.isDisplayed()).toBe(false)
    }
    async section3(){
        await this.#section3.click()
        expect(this.#content1.isDisplayed()).toBe(false)
        expect(this.#content2.isDisplayed()).toBe(false)
        expect(this.#content3.isDisplayed()).toBe(true)
    }
    async scroll(height){
        await browser.executeScript('window.scrollTo(0,'+height +');')
    }
}
exports.AccordianPage=AccordianPage;