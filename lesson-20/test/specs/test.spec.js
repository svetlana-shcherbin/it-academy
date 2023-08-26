const { expect } = require("chai");
const { Key } = require("webdriverio");
const mainPage = require("../pageobjects/mainPage");
const apiPage = require("../pageobjects/apiPage");
const getValuePage = require("../pageobjects/getValuePage");
const header = require("../pageobjects/components/header");
const search = require("../pageobjects/components/search");

describe("webdriver.io site test", function () {
  it("the main page should have title & subtitle", async () => {
    await mainPage.navigate("https://webdriver.io/");
    await mainPage.isTitleDisplayed(true);
    expect(await mainPage.subtitle.getText()).to.equal(
      "Next-gen browser and mobile automation test framework for Node.js"
    );
  });

  it("after clicking on the API tab should redirect to the /docs/api site", async () => {
    await mainPage.navigate("https://webdriver.io/");
    await header.clickApiTab();
    expect(await apiPage.navigate("https://webdriver.io/docs/api"));
  });

  it("the website should be displayed in German after switching language in the dropdown menu", async () => {
    await mainPage.navigate("https://webdriver.io/");
    await header.clickLanguageSwitcher();
    await header.selectLanguage();
    expect(await mainPage.navigate("https://webdriver.io/de/"));
    expect(await mainPage.subtitle.getText()).to.equal(
      "Test-Framework für Browser und mobile Automatisierung der nächsten Generation für Node.js"
    );
  });
  it("search button should find and display the result", async () => {
    await mainPage.navigate("https://webdriver.io/");
    await header.clickSearchButton();
    await search.startSearch("getValue");
    expect(
      await getValuePage.navigate(
        "https://webdriver.io/docs/api/element/getValue/"
      )
    );
  });
});
