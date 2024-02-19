const {test, expect} = require("@playwright/test");
const {Flipkart} = require("../pageObjects/flipkartDailyProducts")
const {flipkart} =require("../dataset/test-base")

flipkart("fipkartDailyProducts" , async({page,dataset}) => {
    const obj = new Flipkart(page, dataset,expect)
    await obj.goTo();
    await obj.getProduts();
   // await obj.assert()
    //await page.pause();


})