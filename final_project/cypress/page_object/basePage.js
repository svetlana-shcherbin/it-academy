class BasePage {
  constructor(page) {
    this.page = page;
  }
  navigate(url) {
    cy.visit(url);
  }
  doClick(category) {
    category.click();
  }
  checkTitle(title,content) {
    title.contains(content);
  }
  typeData(input, data) {
    input.type(data)
  }
}

module.exports = BasePage;
