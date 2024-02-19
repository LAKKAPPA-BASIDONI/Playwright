const {test, expect} = require('@playwright/test');

test("laptop cart" , async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const page2 = await context.newPage();
    await page2.goto("https://google.com")
    await page.goto('https://www.flipkart.com/')
    await page.click('span[role="button"]')
    await page.waitForTimeout(1000)
    await page.getByPlaceholder("Search for Products, Brands and More").fill("HP laptop")
    await page.keyboard.press("Enter")
    const arr = await page.$$('[class="_4rR01T"]')

    // await page.getByRole("button", {type:"submit"}).click()
   const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator('[target="_blank"]').first().click()


   ])
   await newPage.locator('button:has-text("Add to cart")mm').click();
   await page.waitForTimeout(4000)

    

})
