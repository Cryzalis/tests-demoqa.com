const { browser } = require("protractor")
const{TabsPage} = require('../pages/tabsPage')
const tabsPage = new TabsPage()
describe('Tabs',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/tabs');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('Origin tab', async()=>{
        tabsPage.clickOrigin()
    })
    it ('Use tab', async()=>{
        tabsPage.clickUse()
    })
    it ('What tab', async()=>{
        tabsPage.clickWhat()
    })

})
