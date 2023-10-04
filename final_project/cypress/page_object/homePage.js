const BasePage = require("./basePage");

class HomePage extends BasePage {
  get womenCategory() {
    return cy.get('._items_16eml_2 > [href="/women-home/"]');
  }
  get menCategory() {
    return cy.get('[href="/men-home/"]');
  }
  get kidsCategory() {
    return cy.get('[href="/kids-home/"]');
  }
  get popularTitle() {
    return cy.get(".d-recommendations__title");
  }
}
module.exports = HomePage;
