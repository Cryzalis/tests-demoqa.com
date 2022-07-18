const { element, $, browser, protractor } = require("protractor");

class TablePage{
    #firstNameInput = $('#firstName')
    #lastNameInput = $('#lastName')
    #userEmailInput = $('#userEmail')
    #gender = element(by.xpath("//label[@for='gender-radio-1']"))
    #mobileInput = $('#userNumber')
    #dateOfBirtIhnput = $('#dateOfBirthInput')
    #subjectsContainerInput = element(by.css('#subjectsContainer input'))
    #hobbies = element(by.xpath("//label[@for='hobbies-checkbox-1']"))
    #currentAddress = element(by.id("currentAddress"))
    #state = $('#state div')
    #city = $('#city div')
    


    async setName(name){
        await this.#firstNameInput.sendKeys(name)
    }
    async setLast(last){
        await this.#lastNameInput.sendKeys(last)
    }
    async setEmail(email){
        await this.#userEmailInput.sendKeys(email)
    }
    async setGender(){
        await this.#gender.click()
    }
    async setMobile(mobile){
        await this.#mobileInput.sendKeys(mobile)
    }
    async setDateOfBirth(date){
        await this.#dateOfBirtIhnput.sendKeys(date)
        await browser.actions().mouseMove({x: 50, y: 0}).mouseDown().mouseUp().perform();
    }
    async setSubjects(){
        let EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be clickable.
        browser.wait(EC.elementToBeClickable(this.#subjectsContainerInput), 10000);
        await this.#subjectsContainerInput.sendKeys('E',protractor.Key.TAB); 
    }

    async clickHobbies(){
        let EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be clickable.
        browser.wait(EC.elementToBeClickable(this.#hobbies), 10000);
        await this.#hobbies.click()
    }

    async setCurrentAddress(addrs){
        await this.#currentAddress.sendKeys(addrs)
    }
    async setState(){
        await this.#state.click();
        await browser.actions().sendKeys(protractor.Key.DOWN,protractor.Key.DOWN,protractor.Key.ENTER).perform()
    }
    async setCity(){
        await this.#city.click();
        await browser.actions().sendKeys(protractor.Key.DOWN,protractor.Key.ENTER).perform()
    }
    async scroll(){
        await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    }
    async submit(){

        await this.#subjectsContainerInput.sendKeys(protractor.Key.ENTER); 
    }

}
exports.TablePage=TablePage;