const { browser } = require("protractor")
const{TablePage} = require('../pages/tablePage')
const tablePage = new TablePage()
describe('WebTable',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/automation-practice-form');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('Positive with all data', async()=>{
        await tablePage.setName('Name')
        await tablePage.setLast('Last')
        await tablePage.setEmail('example@gmail.com')
        await tablePage.setGender()
        await tablePage.scroll()
        await tablePage.setMobile('1234567890')
        await tablePage.setDateOfBirth('17 Jul 2022')
        await tablePage.setSubjects()
        await tablePage.clickHobbies()
        await tablePage.setCurrentAddress('NY boston')
        await tablePage.submit()
    })
})
