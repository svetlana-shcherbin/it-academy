const BasePage = require('../basePage');

class Search extends BasePage {
    get searchButton(){
        return cy.get('.x-button.x-button_primaryFilledWeb7184')
    }
    get searchInput() {
        return cy.get('._input_1su1z_19._inputShown_1su1z_43')
    }
    get searchTitle () {
        return cy.get('.ui-catalog-search-head-title')
    }
    doSearch(data) {
        this.searchButton.click()
        this.searchInput.type(data).type('{enter}')

    }
}
module.exports = Search;