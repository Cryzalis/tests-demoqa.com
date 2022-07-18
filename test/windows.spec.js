const { browser } = require("protractor")
const{WindowsPage} = require('../pages/windowsPage')
const windowsPage = new WindowsPage()
describe('Windows',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/browser-windows');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('check swich to new tab ', async()=>{
        await windowsPage.clickTab()
        await windowsPage.getWindowText()

    })
    it ('check swich to new  window', async()=>{
        await windowsPage.clickWindow();
        await windowsPage.getWindowText()

    })
    it ('Check message',async ()=>{
        await windowsPage.clickMessage()
    })
})
