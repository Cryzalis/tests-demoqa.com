const { element } = require("protractor");

class CheckBox{
    #openTreeBtn = element(by.css('.rct-options button:nth-child(1)'))
    #inputList = element.all(by.css('ol  span svg.rct-icon-leaf-close'))

    async checkInput(){
        //console.log(await this.#inputList.count());
        await this.#inputList.each(async (elem,indx)=>{
            await elem.click();
        })
    }
    async openTree(){
        await this.#openTreeBtn.click()
    }
    async scroll(height){
        await browser.executeScript('window.scrollTo(0,'+height +');');
    }
}
exports.CheckBox=CheckBox;