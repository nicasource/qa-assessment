//This test will focus on filling a payment form
describe('Credit Card', () => {
    const creditCard = {
        number: '4111111111111111',
        expDate: '1229',
        cvv: '129',
        postalCode: '12345',
    }

    it('should submit valid payment using a credit card', async () => {
        await browser.url('https://braintree.github.io/braintree-web-drop-in/')
        const cardElement = $('.braintree-option.braintree-option__card')
        await cardElement.waitForClickable()
        await cardElement.click()

        // TODO: Fill the payment form with the credit card information

        const numberFrame = await $('iframe[name="braintree-hosted-field-number"]')
        await browser.switchToFrame(numberFrame)
        await $('#credit-card-number').waitForDisplayed({ timeout: 10000 })
        await $('#credit-card-number').setValue(creditCard.number)
        await browser.switchToParentFrame()

        const expirationFrame = await $('iframe[name="braintree-hosted-field-expirationDate"]')
        await browser.switchToFrame(expirationFrame)
        await $('#expiration').waitForDisplayed({ timeout: 10000 })
        await $('#expiration').setValue(creditCard.expDate)
        await browser.switchToParentFrame()

        const cvvFrame = await $('iframe[name="braintree-hosted-field-cvv"]')
        await browser.switchToFrame(cvvFrame)
        await $('#cvv').waitForDisplayed({ timeout: 10000 })
        await $('#cvv').setValue(creditCard.cvv)
        await browser.switchToParentFrame()

        const postalFrame = await $('iframe[name="braintree-hosted-field-postalCode"]')
        await browser.switchToFrame(postalFrame)
        await $('#postal-code').waitForDisplayed({ timeout: 10000 })
        await $('#postal-code').setValue(creditCard.postalCode)
        await browser.switchToParentFrame()


        const payBtn = $('#pay-button')
        await payBtn.waitForClickable()
        await payBtn.click()
        const resultElement = $('#results')

        await expect(resultElement).toBeDisplayed()
        await expect(resultElement.text()).not.toEqual('')
    })
})