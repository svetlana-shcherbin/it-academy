const PageFactory = require('../../page_object/pageFactory')
const build = new PageFactory();
describe("test the search functionality", function () {
    beforeEach(() => {
        build.basePage.navigate("https://www.lamoda.by");
      })
  it("check that search redirects to the search result page after data entry", () => {
        build.search.doSearch("nike");
        cy.url().should("include", "/catalogsearch/result/?q=nike");
        
  });
});