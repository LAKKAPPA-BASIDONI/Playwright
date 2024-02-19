const {test, expect} = require('@playwright/test')

test("uploadfiles", async ({page})=>{

    await page.goto("https://www.foundit.in/")
    await page.waitForSelector('.mqfihd-upload')
    await page.click('.mqfihd-upload')

    await page.locator('#file-upload').setInputFiles("tests/uploadfiles/blank.pdf")
    await page.waitForTimeout(6000)
})

test ("upload multiple files", async ({page})=>{

    //https://the-internet.herokuapp.com/upload
    await page.goto("https://www.foundit.in/")
    await page.waitForSelector('.mqfihd-upload')
    await page.click('.mqfihd-upload')

    await page.locator('#file-upload').setInputFiles(["tests/uploadfiles/blank.pdf","tests/uploadfiles/blank1.pdf"])
    await page.waitForTimeout(6000)

    // remove files
    await page.locator('#file-upload').setInputFiles([])
    await page.waitForTimeout(3000)


})