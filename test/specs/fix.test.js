import ContactFormPage from "../pageobjects/contact.page.js"
//This test will focus on fixing an existing test
describe('Fix Contact form: New Project', () => {
     it('should submit contact form successfully and redirect to thank you page', async () => {
            const contact = await ContactFormPage.generateContactModel()
    
            await ContactFormPage.open()
            await ContactFormPage.selectContactMenu()
            await ContactFormPage.fillForm(contact)
    
            await browser.pause(3000)
            const currentUrl = await browser.getUrl()
            expect(currentUrl).toEqual(browser.options.baseUrl + "thank-you")
        })
})