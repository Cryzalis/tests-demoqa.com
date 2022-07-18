const { browser } = require("protractor")
const{FramesPage} = require('../pages/framesPage')
const framesPage = new FramesPage()
describe('Frame',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/frames');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('frame 1', async()=>{
        console.log('frame')
        await framesPage.getFrameinfo1()

    })
    it ('frame 2', async()=>{
        await framesPage.getFrameinfo2()

    })
})
