const BasePage = require("./basePage");

class Product extends BasePage {
  get listSize() {
    return cy.get("._select_1widv_10");
  }
  get size() {
    return cy.get(".recaptcha > :nth-child(3)");
  }
  get addToCartButton() {
    return cy.get(".recaptcha > .x-button");
  }
  get modalTitle() {
    return cy.get(".d-modal__header");
  }
  get closeModalIcon() {
    return cy.get(".d-modal__close-button > .icon");
  }
}
module.exports = Product;
