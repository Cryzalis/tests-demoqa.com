const { $, protractor } = require("protractor");

class AutoCompletePage{
    #multipleInput = $('#autoCompleteMultipleInput')
    #singleInput = $('#autoCompleteSingleInput')

    async multiple(){
        await this.#multipleInput.sendKeys('g');
        await this.#multipleInput.sendKeys(protractor.Key.chord(protractor.Key.ARROW_DOWN, protractor.Key.TAB));
    }
    async single(){
        await this.#singleInput.sendKeys('t');
        await this.#singleInput.sendKeys(protractor.Key.chord(protractor.Key.ARROW_DOWN, protractor.Key.TAB));
    }
}
exports.AutoCompletePage=AutoCompletePage;