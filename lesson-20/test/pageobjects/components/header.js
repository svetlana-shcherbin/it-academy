class Header {
  get ApiTab() {
    return $('.navbar__item.navbar__link[href="/docs/api"]');
  }
  get languageSwitcher() {
    return $(".navbar__item.dropdown.dropdown--hoverable.dropdown--right");
  }

  get germanOption() {
    return $('a[href="/de/"]');
  }
  get searchButton() {
    return $("button.DocSearch-Button");
  }
  get searchInput() {
    return $("input.DocSearch-Input");
  }
  async clickApiTab() {
    await this.ApiTab.waitForClickable();
    await this.ApiTab.click();
  }

  async clickLanguageSwitcher() {
    await this.languageSwitcher.waitForClickable();
    await this.languageSwitcher.click();
  }

  async selectLanguage() {
    await this.germanOption.waitForClickable();
    await this.germanOption.click();
  }

  async clickSearchButton() {
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
  }

  async clickSearchButton() {
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
  }
}

module.exports = new Header();
