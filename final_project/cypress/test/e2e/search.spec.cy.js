const PageFactory = require("../../page_object/pageFactory");
const factory = new PageFactory();
const params = ["nike", "dress"];

describe("test the search functionality", function () {
  beforeEach(() => {
    factory.basePage.navigate("https://www.lamoda.by");
  });

  params.forEach((params) => {
    it("check that search redirects to the search result page after data entry", () => {
      factory.search.doSearch(params);
      factory.search.searchTitle.contains(`${params}`);
      cy.url().should(
        "include",
        "https://www.lamoda.by/catalogsearch/result/?q=" + `${params}`
      );
    });
  });
});
