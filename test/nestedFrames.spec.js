const { browser } = require("protractor")
const{FramesPage} = require('../pages/nestedFramesPage')
const framesPage = new FramesPage()
describe('Nested Frame',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/nestedframes');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('parent frame', async()=>{
        console.log('frame')
        await framesPage.getParentFrameinfo()
    })
    it ('Child frame', async()=>{
        await framesPage.getChildFrameinfo()
    })
})
