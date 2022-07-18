const { element, $, browser, protractor, ExpectedConditions } = require("protractor");

class ModalPage{
    #small = $('#showSmallModal')
    #large = $('#showLargeModal')
    #closeSmall = $('#closeSmallModal')
    #closeLarge = $('#closeLargeModal')
    #headerLarge = $('#example-modal-sizes-title-lg')
    #headerSmall = $('#example-modal-sizes-title-sm')

    async openSmallModal(){
        await this.#small.click()
    }
    async closeSmallModal(){
        await this.#closeSmall.click()
    }
    async openLargeModal(){
        await this.#large.click()
    }
    async closeLargeModal(){
        await this.#closeLarge.click()
    }
    async checkSmallHeager(text){
        expect(await this.#headerSmall.getText()).toEqual(text)
    }
    async checkLargeHeager(text){
        expect(await this.#headerLarge.getText()).toEqual(text)
    }
   
}
exports.ModalPage=ModalPage;