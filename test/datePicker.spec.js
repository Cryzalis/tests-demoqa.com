const { browser } = require('protractor');
const{DatePickerPage} = require('../pages/datePickerPage')
const datePickerPagePage = new DatePickerPage()
describe('Date',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/date-picker');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('Date picker', async()=>{
        await datePickerPagePage.setDate('01/20/2023')
    })
    it ('Date and time', async()=>{
        await datePickerPagePage.setDateTime('January 23, 2023 8:30 AM')
    })

})
