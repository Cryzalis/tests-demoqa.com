const { browser } = require("protractor")
const{AlertsPage} = require('../pages/alertsPage')
const alertsPage = new AlertsPage()
describe('Alerts',()=>{
    beforeAll(async ()=>{
        await browser.get('https://demoqa.com/alerts');
    })
    afterAll(async()=>{
        //browser.sleep(3000)
    })
    it ('open and close alert', async()=>{
        await alertsPage.clickAlert()
        await alertsPage.alertAcept()

    })
    it ('wait open alert and close ', async()=>{
        await alertsPage.clickWaitAlert()
        await alertsPage.waitAlert()
        await alertsPage.alertAcept()

    })
    it ('Confirm',async ()=>{
        await alertsPage.clickConfirm()
        await alertsPage.alertAcept()
    })
    it ('Prompt',async ()=>{
        await alertsPage.clickPrompt()
        await alertsPage.setPrompt('some value')
        await browser.sleep(1000)
        await alertsPage.alertAcept()
    })
})
