const { element, $, browser, protractor, ExpectedConditions } = require("protractor");

class WindowsPage{
    #tabBtn = $('#tabButton')
    #windowBtn = $('#windowButton')
    #messageBtn = $('#messageWindowButton')
   //#tabText = $('h1')

    async clickTab(){
        await this.#tabBtn.click()
    }
    async clickWindow(){
        await this.#windowBtn.click()
    }
    async clickMessage(){
        await this.#messageBtn.click()
    }

    async getWindowText(){
        await browser.getAllWindowHandles().then(async (handles)=>{
            
            await browser.switchTo().window(handles[1]);
            expect(await $('#sampleHeading').getText()).toEqual('This is a sample page')
            await browser.driver.close();
            await browser.driver.switchTo().window(handles[0]);
        });
    }

}
exports.WindowsPage=WindowsPage;