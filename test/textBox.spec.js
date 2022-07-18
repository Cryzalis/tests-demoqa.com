const { browser } = require("protractor")
const{TextBox} = require('../pages/textBoxPage')
const textBox = new TextBox();

describe('TextBox page',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/text-box');
    })
    // beforeEach(async ()=>{
    // })
    afterAll(async()=>{
    })
    it ('Require text fiend and click submit', async()=>{
        await textBox.setName('Some Name');
        await textBox.setEmail('example@example.com');
        await textBox.setCurrent('123 Main Street, New York, NY 10030');
        await textBox.setPermanent('123 Main Street, New York, NY 10030');
        await textBox.scroll(300);
        await textBox.clickSubmit();
    })
})