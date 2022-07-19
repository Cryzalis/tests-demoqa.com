const { browser } = require("protractor")
const{ModalPage} = require('../pages/modalPage')
const modalPage = new ModalPage()
describe('Modal',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/modal-dialogs');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('Smal modal', async()=>{
        await modalPage.openSmallModal()
        await modalPage.checkSmallHeager('Small Modal')
        await modalPage.closeSmallModal()
    })
    it ('Large Modal', async()=>{
        await modalPage.openLargeModal()
        await modalPage.checkLargeHeager('Large Modal')
        await modalPage.closeLargeModal()
    })
})
