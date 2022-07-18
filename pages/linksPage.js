const { element, $,by } = require("protractor");
const HttpClient = require("protractor-http-client").HttpClient

class LinksPage{
    #homeLink = element(by.linkText("Home"))
    #homeSKLink = element(by.linkText("HomemyySK"))
    #createdLink = element(by.linkText("Created"))
    #noContentLink = element(by.linkText("No Content"))
    #movedLink = element(by.linkText("Moved"))
    #badRequestLink = element(by.linkText("Bad Request"))
    #unauthorizedLink = element(by.linkText("Unauthorized"))
    #forbiddenLink = element(by.linkText("Forbidden"))
    #notFoundLink = element(by.linkText("Not Found"))

    async homeClick(){
        await this.#homeLink.click()
    }
    async homeSKClick(){
        await this.#homeSKLink.click()
    }
    async createdClick(){
        await this.#createdLink.click()
    }
    async noContentClick(){
        await this.#noContentLink.click()
    }
    async movedClick(){
        await this.#movedLink.click()
    }
    async badRequestClick(){
        await this.#badRequestLink.click()
    }
    async unauthorizedClick(){
        await this.#unauthorizedLink.click()
    }
    async forbiddenClick(){
        await this.#forbiddenLink.click()
    }
    async notFoundClick(){
        await this.#notFoundLink.click()
    }
    

}
exports.LinksPage=LinksPage;