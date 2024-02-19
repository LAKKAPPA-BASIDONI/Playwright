const {test, expect} = require('@playwright/test');

test("Popup validation", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.goto("https://google.com");
    await page.goBack();
    await page.goForward();

    // page.on("dialog", dialog =>dailog.accept())
    // page.on("dialog", dialog =>dailog.dismiss())
    // npx playwright test --ui


})