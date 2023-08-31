const BasePage = require("./basePage");

class CartPage extends BasePage {
    get productCountTitle() {
      return cy.get ('.ui-checkout-cart__products-count');
    }
  }
  module.exports = CartPage;