class Header {
  get ApiTab() {
    return $('.navbar__item.navbar__link[href="/docs/api"]');
  }

  async clickApiTab() {
    await this.ApiTab.waitForClickable();
    await this.ApiTab.click();
  }

  get languageSwitcher() {
    return $(".navbar__item.dropdown.dropdown--hoverable.dropdown--right");
  }

  async clickLanguageSwitcher() {
    await this.languageSwitcher.waitForClickable();
    await this.languageSwitcher.click();
  }

  get germanOption() {
    return $('a[href="/de/"]');
  }
  async selectGermanLanguage() {
    await this.germanOption.waitForClickable();
    await this.germanOption.click();
  }
  get searchButton() {
    return $("button.DocSearch-Button");
  }
  async clickSearchButton() {
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
  }
  get searchInput() {
    return $("input.DocSearch-Input");
  }
  async clickSearchButton() {
    await this.searchButton.waitForClickable();
    await this.searchButton.click();
  }
}

module.exports = new Header();
