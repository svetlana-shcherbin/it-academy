const BasePage = require("../basePage");

class Footer extends BasePage {
  get emailInput() {
    return cy.get(".input-material__input-wrapper>input");
  }
  get checkBox() {
    return cy.get(".x-checkbox.x-checkbox_alignment_center");
  }
  get checkBoxContent() {
    return cy.get(".x-checkbox__content");
  }
  get resultTitle() {
    return cy.get("_titleResult_1lmun_30");
  }
  get switchDisplayMode() {
    return cy.get('._root_m3snj_6 > ._root_f9xmk_2')
  }
}
module.exports = Footer;
