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

        const payBtn = $('#pay-button')
        await payBtn.waitForClickable()
        await payBtn.click()
        const resultElement = $('#results')

        await expect(resultElement).toBeDisplayed()
        await expect(resultElement.text()).not.toEqual('')
    })
})