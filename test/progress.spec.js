const { browser } = require("protractor")
const{ProgressPage} = require('../pages/progressPage')
const progressPage = new ProgressPage()
describe('Sider',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/progress-bar');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('slider for', async()=>{
        await progressPage.clickStart('16%')
    })

})
