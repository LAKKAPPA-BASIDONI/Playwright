const{test , expect} =require("@playwright/test");
const {Amazon} = require("../pageObjects/Amazon");

test("amazonPageObject", async({page}) => {
   const amazon = new Amazon(page,expect);
   await amazon.goTo();
   await amazon.searchProduct()
   await amazon.assertionChecking()
   await amazon.buyDecesion()
   //await amazon.getAmazonPage.relatedProductNameAndPrice()
   //await page.pause()
    
})