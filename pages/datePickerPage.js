const { $, protractor } = require("protractor");
class DatePickerPage{
    #dateInput = $('#datePickerMonthYearInput')
    #dateTimeInput = $('#dateAndTimePickerInput')
    #test = $('div.main-header')
    
    async setDate(date){
        await this.#dateInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await this.#dateInput.sendKeys(protractor.Key.DELETE);
        await this.#dateInput.sendKeys(date)
        await this.#dateInput.sendKeys(protractor.Key.ENTER)

    }
    async setDateTime(dateTime){
        await this.#dateTimeInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await this.#dateTimeInput.sendKeys(protractor.Key.DELETE);    
        await this.#dateTimeInput.sendKeys(dateTime)
        await this.#dateTimeInput.sendKeys(protractor.Key.ENTER)
    }
}
exports.DatePickerPage=DatePickerPage;