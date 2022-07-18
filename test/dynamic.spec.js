
const { browser } = require('protractor');
const {DynamicPage} = require('../pages/dynamicPagePage');
const dynamicPagePage = new DynamicPage();

describe('Links',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/dynamic-properties');
    })
    it ('wait button',async ()=>{
        dynamicPagePage.visibleBtnClick();
    })
})