const BasePage = require("./basePage");
const HomePage = require("./homePage");
const Search = require("./components/search");
const Header = require ("./components/header");
const Cities =require ("./components/cities")

class PageFactory {
    constructor(page) {
    this.page =page;
    this.basePage = new BasePage(page);
    this.homePage = new HomePage(page);
    this.search = new Search(page);
    this.header = new Header (page);
    this.cities = new Cities (page)

}}

module.exports = PageFactory;
