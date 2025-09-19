// pageobjects/base.page.js
export default class BasePage {
    constructor(path = '') {
        this.path = path
    }

    async open() {
        // baseUrl comes from wdio.conf.js
        await browser.url(this.path)
    }
}