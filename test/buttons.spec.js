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
        // console.log(protractor.Button)
        // await browser.get('http://the-internet.herokuapp.com/context_menu');
        // await browser.actions().mouseMove(element(by.id('hot-spot'))).perform();
        // browser.actions().click(protractor.Button.RIGHT).perform();
        // await browser.sleep(2000);
        await buttonPage.clickRight();
        expect(await buttonPage.countMessage()).toEqual(2)
    });
    xit('Simple click',async ()=>{
        await buttonPage.clickSimle();
        expect(await buttonPage.countMessage()).toEqual(3)
    });

})
