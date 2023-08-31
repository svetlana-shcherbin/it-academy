const BasePage = require("../basePage");

class Header extends BasePage {
  get selectCityIcon() {
    return cy.get("._message_32s20_11");
  }
  get cityTitle() {
    return cy.get("._message_32s20_11 > :nth-child(1) > .notranslate");
  }
  get ManCategory() {
    return cy.get('[href="/men-home/?sitelink=topmenuM"]');
  }
  get KidsCategory() {
    return cy.get('[href="/kids-home/?sitelink=topmenuK"]');
  }
  get CartIcon() {
    return cy.get('a[href="/checkout/cart/"]');
  }
}
module.exports = Header;
