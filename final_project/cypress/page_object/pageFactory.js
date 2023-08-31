const BasePage = require("./basePage");
const HomePage = require("./homePage");
const Search = require("./components/search");
const Header = require ("./components/header");
const Footer = require ("./components/footer")
const Cities =require ("./components/cities");
const ProductPage = require ("./productPage");
const CartPage = require ("./cartPage")

class PageFactory {
    constructor(page) {
    this.page =page;
    this.basePage = new BasePage(page);
    this.homePage = new HomePage(page);
    this.search = new Search(page);
    this.header = new Header (page);
    this.cities = new Cities (page);
    this.footer = new Footer (page);
    this.productPage = new ProductPage (page)
    this.cartPage = new CartPage(page)

}}

module.exports = PageFactory;
