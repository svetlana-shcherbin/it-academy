const PageFactory = require("../../page_object/pageFactory");
const factory = new PageFactory();
describe("test the home page", function () {
  beforeEach(() => {
    factory.basePage.navigate('https://www.lamoda.by');
  });
  it("check that the home main banner redirects correctly to the men category after click", () => {
    factory.homePage.doClick(factory.homePage.menCategory);
    cy.url().should("include", "/men-home/");
  });
  it("check that the home main banner redirects correctly to the woman category after click", () => {
    factory.homePage.doClick(factory.homePage.womenCategory);
    cy.url().should("include", "/women-home/");
  });

  it("check that the home main banner redirects correctly to the kids category after click", () => {
    factory.homePage.doClick(factory.homePage.kidsCategory);
    cy.url().should("include", "/kids-home/");
  });

  it("check the title of the popular section", () => {
    factory.homePage.checkTitle(factory.homePage.popularTitle,"Популярное");
  });
});
