const { element, $, ExpectedConditions } = require("protractor");

class RadioButton{
    #yesInput = element(by.xpath("//label[@for='yesRadio']"))
    #result = $('p.mt-3 span')


    async selectYes(){
        //console.log(await this.#inputList.count());
        await this.#yesInput.click()
    }
    async checkResult(){
        expect(await this.#result.getText()).toBe('Yes');
    }

}
exports.RadioButton=RadioButton;