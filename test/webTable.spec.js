const { browser } = require("protractor")
const{WebTable} = require('../pages/webTablePage')
const webTable = new WebTable()
describe('WebTable',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/webtables');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it('Negative test without data',async ()=>{
        await webTable.clickAdd();
    });
    it ('Positive with all data', async()=>{
        let before = webTable.getRowsCount();
        await webTable.setName('Dmitry');
        await webTable.setLast('Maslo');
        await webTable.setEmail('dmytro@gmail.com');
        await webTable.setAge('11');
        await webTable.setSalary('1');
        await webTable.setDepartment('department');
        await webTable.clickSubmit();
        expect(await before).toEqual(3);
        expect (await webTable.getRowsCount()).toEqual(4);
    })
})
