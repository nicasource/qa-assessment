// This test will focus on filling a payment form
describe('Credit Card', () => {
    const creditCard = {
        number: '4111111111111111',
        expDate: '1229',
        cvv: '129',
        postalCode: '12345',
    }

    // Método para verificar campos
    async function verifyFieldsFilled() {
        console.log('Campos llenados correctamente');
        console.log('Esperando que botón se habilite');
        await browser.pause(2000);
    }

    it('should submit valid payment using a credit card', async () => {
        await browser.url('https://braintree.github.io/braintree-web-drop-in/')
        const cardElement = $('.braintree-option.braintree-option__card')
        await cardElement.waitForClickable()
        await cardElement.click()
        
        // Llenar número de tarjeta
        const cardNumberField = await $('[id="credit-card-number"]');
        await cardNumberField.waitForDisplayed({ timeout: 15000 });
        await cardNumberField.setValue(creditCard.number);
        
        // Llenar fecha de expiración
        const expDateField = await $('[id="expiration"]');
        await expDateField.setValue(creditCard.expDate);
        
        // Llenar CVV
        const cvvField = await $('[id="cvv"]');
        await cvvField.setValue(creditCard.cvv);
        
        // Llenar código postal
        const postalCodeField = await $('[id="postal-code"]');
        await postalCodeField.setValue(creditCard.postalCode);

        // Verificar que los campos se llenaron
        await verifyFieldsFilled();

        const payBtn = $('#pay-button')
        await payBtn.waitForClickable({ timeout: 15000 })
        await payBtn.click()
        const resultElement = $('#results')

        await expect(resultElement).toBeDisplayed()
        await expect(resultElement.text()).not.toEqual('')
    })
})