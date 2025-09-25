import BasePage from './base.page.js'
import Chance from "chance"

class ContactFormPage extends BasePage {
    constructor() {
        super('')
    }

    // TODO: Add the correct selectors to the getters below
    get form() { return $("form") }
    get contactTopMenu() { return $('//*[@id="main-menu"]/div[3]/button') }
    get fullNameInput() { return $("#first_name") }
    get emailInput() { return $("#email") }
    get websiteInput() { return $("#url") }
    get messageTextarea() { return $('//*[@id="00N3t00000Mnjbl"]') }
    get serviceRequestedDropdown() { return $('//*[@id="00NPg000005JFTV"]') }
    get submitContactForm() { return $('//*[@id="contact"]/div[2]/form/div[7]/button') }

    async open() {
        await browser.url("")
        await this.form.waitForExist({ timeout: 15000 })
    }

    async generateContactModel(seed) {
        const chance = new Chance(seed)

      const serviceOptions = [
            "Project Management",
            "QA Testing",
            "Salesforce Administration",
            "Salesforce Development",
            "Staff Augmentation",
            "UX/UI Design",
        ]


        return {
            fullName: chance.name(),
            email: chance.email(),
            website: chance.url(),
            message: chance.sentence({ words: 5 }),
            serviceRequested: chance.pickone(serviceOptions)
        }
    }

    async selectContactMenu() {
        await browser.pause(5000)
        await this.contactTopMenu.waitForClickable({ timeout: 10000, timeoutMsg: 'Contact Top Menu was not clickable after 10 seconds' })
        await this.contactTopMenu.click()
    }

    // TODO: Implement this method to select a service from the dropdown
    async chooseService(serviceRequested) {

        const opt = serviceRequested;

        await this.serviceRequestedDropdown.selectByVisibleText(opt)


        return opt

        //throw new Error('Not implemented')
    }

    async fillForm(model) {
        await browser.pause(1000)
        await this.fullNameInput.waitForDisplayed({ timeout: 10_000, timeoutMsg: 'FullName input was not clickable after 10 seconds' })
        await this.fullNameInput.scrollIntoView()
        await this.fullNameInput.setValue(model.fullName)
        await this.emailInput.setValue(model.email)
        await this.websiteInput.setValue(model.website)
        await this.chooseService(model.serviceRequested)
        await this.messageTextarea.setValue(model.message)
        await this.submitContactForm.click()
    }
}

export default new ContactFormPage()
