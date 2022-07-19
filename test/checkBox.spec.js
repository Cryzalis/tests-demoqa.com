const { browser } = require("protractor")
const{CheckBox} = require('../pages/checkboxPage')
const checkBox = new CheckBox()
describe('Checkbox',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/checkbox');
    })
    afterAll(async()=>{
        browser.sleep(3000)
    })
    it('Select all element in folder',async ()=>{
        await checkBox.openTree();
        await checkBox.scroll(200);
        await checkBox.checkInput();
    })
})
