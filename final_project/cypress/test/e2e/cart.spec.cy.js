const PageFactory = require("../../page_object/pageFactory");
const factory = new PageFactory();
const products = ["RTLACY145201","RTLACX038601","RTLAAI511702"]

describe('test cart functionality', function(){
    beforeEach(() => {
        factory.basePage.navigate("https://www.lamoda.by");
      });

      it("check that a product is added to the cart successfully", () => {
        factory.search.doSearch(products[0])
        factory.productPage.doClick(factory.productPage.listSize)
        factory.productPage.doClick(factory.productPage.size)
        factory.productPage.doClick(factory.productPage.addToCartButton)
        factory.productPage.checkTitle(factory.productPage.modalTitle, "Товар добавлен в корзину")
        factory.productPage.doClick(factory.productPage.closeModalIcon)
        factory.header.doClick(factory.header.CartIcon)
        factory.cartPage.checkTitle(factory.cartPage.productCountTitle,'1 товар')
      })

      it("check that several product are added to the cart successfully", () => {
        products.forEach((products) =>{
        factory.search.doSearch(products)
        factory.productPage.doClick(factory.productPage.listSize)
        factory.productPage.doClick(factory.productPage.size)
        factory.productPage.doClick(factory.productPage.addToCartButton)
        factory.productPage.checkTitle(factory.productPage.modalTitle, "Товар добавлен в корзину")
        factory.productPage.doClick(factory.productPage.closeModalIcon)
        })
       factory.header.doClick(factory.header.CartIcon)
       factory.cartPage.checkTitle(factory.cartPage.productCountTitle,products.length)
      })
      
})