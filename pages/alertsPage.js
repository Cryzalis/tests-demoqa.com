const { $, browser } = require("protractor");

class AlertsPage{
    #alertBtn = $('#alertButton')
    #waitAlertBtn = $('#timerAlertButton')
    #confirmBtn = $('#confirmButton')
    #promptBTn = $('#promtButton')

    async clickAlert(){
        await this.#alertBtn.click()
    }
    async clickWaitAlert(){
        await this.#waitAlertBtn.click()
    }
    async clickConfirm(){
        await this.#confirmBtn.click()
    }
    async clickPrompt(){
        await this.#promptBTn.click()
    }
    async alertAcept(){
        await browser.switchTo().alert().accept()
    }
    async waitAlert(){
        let ec = browser.ExpectedConditions;
        await browser.wait(ec.alertIsPresent(),70000)
    }
    async setPrompt(val){
        console.log('prompt')
        await browser.switchTo().alert().sendKeys(val)
    }



}
exports.AlertsPage=AlertsPage;