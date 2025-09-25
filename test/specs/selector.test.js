import ContactFormPage from "../pageobjects/contact.page.js"
//This test will focus on completing the test by adding the correct selector
describe('Selector Contact Form', () => {
    it('should navigate to contact us section', async () => {
        const contact = await ContactFormPage.generateContactModel()

        await ContactFormPage.open()
        await ContactFormPage.selectContactMenu()
      
        await expect(await ContactFormPage.fullNameInput).toBeDisplayed()
        await expect(await ContactFormPage.emailInput).toBeDisplayed()
        await expect(await ContactFormPage.websiteInput).toBeDisplayed()
        await expect(await ContactFormPage.messageTextarea).toBeDisplayed()
        await expect(await ContactFormPage.submitContactForm).toBeDisplayed()
        
        
    })
})