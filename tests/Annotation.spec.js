const {test, expect} = require("@playwright/test");
test.fixme()

test.skip("skip() test", async ({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('[id="nav-hamburger-menu"]')
    console.log("skip annotation")
})

test("test1",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('[id="nav-hamburger-menu"]')
    console.log("test1")

})
test("test2",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('[id="nav-hamburger-menu"]')
    console.log("test2")


})
test("test3",async({page})=>{
    await page.goto("https://www.amazon.in")
    await page.locator('[id="nav-hamburger-menu"]')
    console.log("test3")

})
