const { browser,protractor } = require("protractor")
const{ToolTipsPage} = require('../pages/toolTipsPage')
const toolTipsPage = new ToolTipsPage()
describe('ToolTips',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/tool-tips');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('Button', async()=>{
        await toolTipsPage.moveToBtn()
    })
    it ('Input', async()=>{
        await toolTipsPage.moveToInput()
    })

})
