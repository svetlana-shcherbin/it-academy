/* Настроить Selenium Webdriver  и с помощью selenium-webdriver написать 3 теста:
1. зайти на сайт https://chromedriver.chromium.org/home;
2. проверить текст основного тайтла ""ChromeDriver"";
3. кликнуть в хедере на пункт ""Chrome Extensions"";
4. сделать хайлайт для нового основного тайтла;
5. проверить что новый тайтл стал ""Chrome Extensions"";

1. Перейти на страницу поиска;
2. Ввести driver в поиск;
3. Проверить что первая ссылка содержит слово driver;

1. Открыть в меню ""Дополнительно""
2. Нажать ""Mobile Emulation""
3. Проверить что url содержит /mobile-emulation */

const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("ChromeDriver tests", function () {
  let driver = new Builder().forBrowser("chrome").build();

  before(async () => {
    await driver.manage().window().setSize({ width: 1480, height: 1260 });
  });

  after(async () => {
    await driver.quit();
  });

  it("check ChromeDriver header", async () => {
    await driver.get("https://chromedriver.chromium.org/home");
    const mainTitle = await driver.findElement(
      By.xpath('//span[contains(@class, "Rn3Z1b")]')
    );
    expect(await mainTitle.getText()).to.equal("ChromeDriver");
    const chromeExtensionsTab = await driver.findElement(
      By.xpath(
        '//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[text()="Chrome Extensions"]'
      )
    );
    await chromeExtensionsTab.click();
    const newTitle = await driver.findElement(
      By.xpath('//span[contains(@class, "Rn3Z1b")]')
    );
    driver.executeScript(
      "arguments[0].style.backgroundColor = 'grey'",
      newTitle
    );
    expect(await newTitle.getText()).to.equal("Chrome Extensions");
  });

  it("check Search bar", async () => {
    await driver.get("https://chromedriver.chromium.org");
    const searchButton = await driver.findElement(
      By.xpath('//*[@class="RBEWZc"]')
    );
    await searchButton.click();

    const searchInput = await driver.findElement(
      By.xpath('//*[@class="whsOnd zHQkBf"]')
    );
    await driver.sleep(2000);
    await searchInput.sendKeys("driver", Key.ENTER);
    await driver.sleep(2000);
    const searchResult = await driver
      .findElement(
        By.xpath(
          '//div[contains(@class, "gtazFe")][1]//div[contains(@class, "yDWqEe")]'
        )
      )
      .getText();
    expect(await searchResult).to.contain("driver");
  });

  it("check More menu", async () => {
    await driver.get("https://chromedriver.chromium.org");
    const moreTab = await driver.findElement(
      By.xpath('//a[text()="Дополнительно"]')
    );
    await driver.actions().move({ origin: moreTab }).perform();
    const dropdownsElement = await driver.findElement(
      By.xpath(
        '//div[contains(@class,"PsKE7e IKA38e oNsfjf")]//a[text()="Mobile Emulation"]'
      )
    );
    await dropdownsElement.click();
    await driver.wait(until.urlContains("/mobile-emulation"), 10000);
  });
});
