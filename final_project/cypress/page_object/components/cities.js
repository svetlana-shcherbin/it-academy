const BasePage = require('../basePage');

class Cities extends BasePage{
    get searchInput() {
        return cy.get('.input-material__input-wrapper')
    }
    get resultField() {
        return cy.get('._dropdown_104fn_7')
    }
    get cityMogilev () {
        return cy.get(':nth-child(16) > .notranslate')
    }
    get locationTitle() {
        return cy.get('._locationTitle_rq1gl_59 > :nth-child(2)')
    }
    get closeIcon() {
        return cy.get('.d-modal__close-button')
    }
    get goForwardButton() {
        return cy.get('._controls_rq1gl_69 > .x-button_primaryFilledWeb7184')
    }
}
module.exports = Cities;