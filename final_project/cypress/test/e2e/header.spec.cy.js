const PageFactory = require("../../page_object/pageFactory");
const factory = new PageFactory();
const params = ["Минск", "Брест", "Пинск"];
describe("test the header", function () {
  beforeEach(() => {
    factory.basePage.navigate("https://www.lamoda.by");
  });
  params.forEach((params) => {
    it("check that the city is updated after enter the data into the search field", () => {
      factory.header.doClick(factory.header.selectCityIcon);
      factory.cities.typeData(factory.cities.searchInput, `${params}`);
      factory.cities.doClick(factory.cities.resultField);
      cy.wait(1000);
      factory.cities.doClick(factory.cities.goForwardButton);
      factory.header.checkTitle(factory.header.cityTitle, `${params}`);
    });
  });
  it("check that the city is updated after select the data from the list", () => {
    factory.header.doClick(factory.header.selectCityIcon);
    factory.cities.doClick(factory.cities.cityMogilev);
    cy.wait(1000);
    factory.cities.doClick(factory.cities.goForwardButton);
    factory.header.checkTitle(factory.header.cityTitle, "Могилев");
  });
  it("check that the header menu redirects correctly to the men category after click", () => {
    factory.header.doClick(factory.header.ManCategory);
    cy.url().should("include", "/men-home/");
  });
  it("check that the header menu redirects correctly to the kids category after click", () => {
    factory.header.doClick(factory.header.KidsCategory);
    cy.url().should("include", "/kids-home/");
  });
});
