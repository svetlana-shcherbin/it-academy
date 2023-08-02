const { expect } = require("chai");
const { Key } = require('webdriverio');

describe("webdriver.io site test", function (){

    it('the main page should have title & subtitle', async () =>{
        await browser.url('https://webdriver.io/')
        expect(await $('.hero__title').isDisplayed(false))
        expect(await $('.hero__subtitle').getText()).to.equal('Next-gen browser and mobile automation test framework for Node.js')
    })

    it('API tab menu should redirect correctly', async () =>{
        await browser.url('https://webdriver.io/')
        await $('.navbar__item.navbar__link[href="/docs/api"]').click();
        expect(await browser.url('https://webdriver.io/docs/api'))
    })

    it ('the website should be displayed in German', async() =>{
        await browser.url('https://webdriver.io/')
        await $('.navbar__item.dropdown.dropdown--hoverable.dropdown--right').click();
        await $('a[href="/de/"]').click();
        expect(await browser.url('https://webdriver.io/de/'))
        expect(await $('.hero__subtitle').getText()).to.equal('Test-Framework für Browser und mobile Automatisierung der nächsten Generation für Node.js')
    })
    it('search button should find and display the result', async()=>{
        await browser.url('https://webdriver.io/') 
        await $('button.DocSearch-Button').click();
        await $('input.DocSearch-Input').setValue('getValue');
        await browser.keys(Key.Enter);
        expect(await browser.url('https://webdriver.io/docs/api/element/getValue/'))
    })
})

