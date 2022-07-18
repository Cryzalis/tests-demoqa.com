const { browser,protractor } = require("protractor")
const{SliderPage} = require('../pages/sliderPage')
const sliderPage = new SliderPage()
describe('Sider',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/slider');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('slider for', async()=>{
        await sliderPage.siderFor()
        await browser.sleep(2000)
    })
    it ('Slider js', async()=>{
        await sliderPage.sliderJS()
        await browser.sleep(2000)
    })

})
