const {test, expect} = require("@playwright/test");

test("opencart", async({page}) => {
    await page.goto("https://google.com")
   
})