const {test, expect} = require("@playwright/test");

test("hims", async ({page})=>{
    await page.goto("https://www.hims.com/")
    await page.waitForSelector('div[class*="fvXOKe"]')
    const arr = page.locator('div[class*="fvXOKe"]')
    const length = await arr.count();

    for(let i=0; i<length; i++){
        console.log(i+"  "+await arr.nth(i).locator("div").innerText())
    }
    await page.waitForTimeout(6000)
})

