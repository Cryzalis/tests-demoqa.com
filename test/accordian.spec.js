const { browser } = require("protractor")
const{AccordianPage} = require('../pages/accordianPage')
const accordianPage = new AccordianPage()
describe('Modal',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/accordian');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('First tab', async()=>{
        await accordianPage.section1()
        await accordianPage.scroll(500)
    })
    it ('Second tab', async()=>{
        await accordianPage.section2()

        
    })
    it ('Third tab', async()=>{
        await accordianPage.section3()
    })
})
