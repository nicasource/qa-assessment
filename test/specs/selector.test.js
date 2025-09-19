import ContactFormPage from "../pageobjects/contact.page.js";
// This test will focus on completing the test by adding the correct selector
describe('Selector Contact Form', () => {
    it('should navigate to contact us section', async () => {
        const contact = await ContactFormPage.generateContactModel()

        await ContactFormPage.open()
        await ContactFormPage.selectContactMenu()
      
        // Esperar a que los elementos estén displayeados
        await ContactFormPage.fullNameInput.waitForDisplayed()
        await ContactFormPage.emailInput.waitForDisplayed()
        await ContactFormPage.websiteInput.waitForDisplayed()
        await ContactFormPage.messageTextarea.waitForDisplayed()
        await ContactFormPage.submitContactForm.waitForDisplayed()
        
    })
})