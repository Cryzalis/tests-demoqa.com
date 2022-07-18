const { browser, element, protractor } = require("protractor")
const{ButtonPage} = require('../pages/buttonsPage')
const buttonPage = new ButtonPage()
describe('WebTable',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/buttons');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    xit('Double click',async ()=>{
        
        await buttonPage.clickDouble();
        expect(await buttonPage.countMessage()).toEqual(1)
    });
    it('Context click',async ()=>{
        await buttonPage.clickRight();
        expect(await buttonPage.countMessage()).toEqual(2)
    });
    it('Simple click',async ()=>{
        await buttonPage.clickSimle();
        expect(await buttonPage.countMessage()).toEqual(3)
    });

})
