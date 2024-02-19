const {test, expect} = require("@playwright/test");

test("opening browser", async({page}) => {
    await page.goto("https://google.com")
    //await page.pause();
})