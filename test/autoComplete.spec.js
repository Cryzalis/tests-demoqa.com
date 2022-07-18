const { browser } = require("protractor")
const{AutoCompletePage} = require('../pages/autoCompletePage')
const autoCompletePage = new AutoCompletePage()
describe('Auto Complete',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/auto-complete');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('Multiple', async()=>{
        await autoCompletePage.multiple();
        await browser.sleep(500)
    })
    it ('Second tab', async()=>{
        await autoCompletePage.single();
        await browser.sleep(2000)
    })

})
