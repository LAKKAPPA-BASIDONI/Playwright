const {test, expect} = require("@playwright/test");

test("forhers", async ({page})=>{
     const arr = ["Other", "A few years ago"]

    await page.goto("https://www.forhers.com/");
    await page.getByTestId("main-navigation-link-Anxiety").click();
    await page.getByTestId("dropDownNavigationLink-General worry").click()
   // await page.waitForSelector("button:has-text('Continue')")
    await page.locator('button:has-text("Continue")').click()

    //first
    await page.locator('div[aria-labelledby="question"]>div:has-text("Other")').click();
    await page.locator("button:has-text('Continue')").click()

    //second
    await page.locator('div[aria-labelledby="question"]>div:has-text("A few years ago")').click();

    await page.waitForTimeout(6000);

    

})