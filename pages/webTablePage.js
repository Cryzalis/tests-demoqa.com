const { element, $ } = require("protractor");

class WebTable{
    #addBtn = element(by.id("addNewRecordButton"))
    #firstNameInput = $('#firstName')
    #lastNameInput = $('#lastName')
    #userEmailInput = $('#userEmail')
    #ageInput = $('#age')
    #salaryInput = $('#salary')
    #departmentInput = $('#department')
    #submitBtn = $('#submit')
    #allRows = element.all(by.xpath("//span[@title='Delete']/ancestor::div[@role='row']"))
    


    async clickAdd(){
        await this.#addBtn.click()
    }

    async clickSubmit(){
        await this.#submitBtn.click()
    }
    async setName(name){
        await this.#firstNameInput.sendKeys(name)
    }
    async setLast(last){
        await this.#lastNameInput.sendKeys(last)
    }
    async setEmail(email){
        await this.#userEmailInput.sendKeys(email)
    }
    async setAge(age){
        await this.#ageInput.sendKeys(age)
    }
    async setSalary(salary){
        await this.#salaryInput.sendKeys(salary)
    }
    async setDepartment(department){
        await this.#departmentInput.sendKeys(department)
    }
    async getRowsCount(){
        return this.#allRows.count();
      
    }

}
exports.WebTable=WebTable;