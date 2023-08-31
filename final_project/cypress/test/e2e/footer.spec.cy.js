const PageFactory = require("../../page_object/pageFactory");
const factory = new PageFactory();
const faker = require('@faker-js/faker')


describe("test header", function() {
  
    beforeEach(() => {
        factory.basePage.navigate("https://www.lamoda.by");
      });

      it('check that mobile version is switched on from the footer', ()=>{
        factory.footer.doClick(factory.footer.switchDisplayMode)
        cy.url().should("include", "women-home/?sv=mob")
      })
})