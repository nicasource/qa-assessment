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

        const iFramecardNumber = await $('#braintree-hosted-field-number')
        await iFramecardNumber.waitForExist({ timeout: 5000 })
        await browser.switchFrame(iFramecardNumber)
    
        const cardNumber = await $('#credit-card-number')
        await cardNumber.setValue(creditCard.number)

        await browser.switchFrame(null)

        const iFrameExpiration = await $('#braintree-hosted-field-expirationDate')
        await iFrameExpiration.waitForExist({ timeout: 5000 })
        await browser.switchFrame(iFrameExpiration)

        const expirationCard = $('#expiration')
        await expirationCard.setValue(creditCard.expDate)

        await browser.switchFrame(null)

        const iFrameCvv = await $('#braintree-hosted-field-cvv')
        await iFrameCvv.waitForExist({ timeout: 5000 })
        await browser.switchFrame(iFrameCvv)

        const cvvCard = $('#cvv')
        await cvvCard.click()
        await cvvCard.setValue(creditCard.cvv)

        
        await browser.switchFrame(null)

        const iFramePostalCode = await $('#braintree-hosted-field-postalCode')
        await iFramePostalCode.waitForExist({ timeout: 5000 })
        await browser.switchFrame(iFramePostalCode)

        const postalCodeCard = $('#postal-code')
        await postalCodeCard.click()
        await postalCodeCard.setValue(creditCard.postalCode)

        await browser.switchFrame(null)
    
        const payBtn = $('#pay-button')
        await payBtn.waitForClickable()
        await payBtn.click()
        const resultElement = $('#results')

        await expect(resultElement).toBeDisplayed()
        await expect(resultElement.text()).not.toEqual('')
    })
})