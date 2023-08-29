const BasePage = require("./basePage");
const HomePage = require("./homePage");
const Search = require("./components/search");

class PageFactory {
    constructor(page) {
    this.page =page;
    this.basePage = new BasePage(page);
    this.homePage = new HomePage(page);
    this.search = new Search(page)

}}

module.exports = PageFactory;
