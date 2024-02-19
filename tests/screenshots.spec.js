const{test, expect} = require('@playwright/test');
const{method} = require("../Method/method")

test("screenshots", async({page})=>{
    await page.goto("https://www.foundit.in/");
    
    // // visible page screenshots
    // await page.screenshot({path:"screen0001.png"})

    // // full page screenshots
    // await page.screenshot({path:Date.now()+"full.png",fullPage:true})

    // // element level screenshots
    // const element =  page.locator('[class="migrationBanner"]')
    // await  element?.screenshot({path:"element.png"})

   
    const obj = new method();
    obj.getName()

    
})


//const { test, expect } = require('@playwright/test');

test('Check Vertical Scroll Bar', async ({ page }) => {
  // Navigate to your web page
  await page.goto("https://playwright.dev/docs/accessibility-testing");

  // Use the evaluate function to check if a vertical scroll bar is present
  const isVerticalScrollBarPresent = await page.evaluate(() => {
    // Check if there is a vertical scroll bar on the page
    return document.documentElement.scrollHeight > window.innerHeight;
  });

  // Assert that the vertical scroll bar is present
  expect(isVerticalScrollBarPresent).toBe(true);
  console.log("scroll bar present :: "+isVerticalScrollBarPresent)
});
