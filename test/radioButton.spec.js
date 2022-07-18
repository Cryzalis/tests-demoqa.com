const { browser } = require("protractor")
const{RadioButton} = require('../pages/radioButtonPage')
const radioButton = new RadioButton()
describe('Radio Bbutton',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/radio-button');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it('Select yes and check result',async ()=>{
        await radioButton.selectYes();
        await radioButton.checkResult();


    })
})
