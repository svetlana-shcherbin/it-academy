const BasePage = require("./basePage");

class MainPage extends BasePage {
  get title() {
    return $(".hero__title");
  }
  async checkTitle() {
    await this.title.isDisplayed();
  }
  get subtitle() {
    return $(".hero__subtitle");
  }
}

module.exports = new MainPage();
