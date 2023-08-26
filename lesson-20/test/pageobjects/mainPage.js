const BasePage = require("./basePage");

class MainPage extends BasePage {
  get title() {
    return $(".hero__title");
  }
  get subtitle() {
    return $(".hero__subtitle");
  }
  async isTitleDisplayed() {
    await this.title.isDisplayed();
  }
}

module.exports = new MainPage();
