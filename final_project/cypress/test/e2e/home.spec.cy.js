const PageFactory = require("../../page_object/pageFactory");
const build = new PageFactory();
describe("test the home page", function () {
  beforeEach(() => {
    build.basePage.navigate('https://www.lamoda.by');
  });
  it("check that the home main banner redirects correctly to the men category after click", () => {
    build.homePage.openCategory(build.homePage.menCategory);
    cy.url().should("include", "/men-home/");
  });
  it("check that the home main banner redirects correctly to the woman category after click", () => {
    build.homePage.openCategory(build.homePage.womenCategory);
    cy.url().should("include", "/women-home/");
  });

  it("check that the home main banner redirects correctly to the kids category after click", () => {
    build.homePage.openCategory(build.homePage.kidsCategory);
    cy.url().should("include", "/kids-home/");
  });

  it("check the title of the popular section", () => {
    build.homePage.checkTitle("Популярное");
  });
});
