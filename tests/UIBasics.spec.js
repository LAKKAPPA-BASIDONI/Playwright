const {test, expect} = require("@playwright/test");

test('UIBasics exaple', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator('[class="blinkingText"]')

    const usrName = page.locator('#username')
    const psrName = page.locator('#password')
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click()
    ])
     const text = await newPage.locator('.red').textContent();
     console.log(text)
     const srArr = text.split("@")
     const scPart = srArr[1].split(" ")
     const domainName = scPart[0]
     console.log("Domain Name is  : "+domainName)
    
     await page.locator('#username').fill(domainName);
     
     
     console.log(await page.locator('#username').textContent())
     console.log("hello harish")

     await page.click('input[id="signInBtn"]')
     await page.waitForTimeout(10000)
})


test("basic test case", async({browser}) =>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const documentLink = page.locator('[class="blinkingText"]')

    const usrName = page.locator('#username')
    const psrName = page.locator('#password')

    await page.waitForTimeout(5000)

     const page2Promise = context.waitForEvent('page')
     await page.locator('[class="blinkingText"]').click()
     const page2 = await page2Promise
     await page2.waitForTimeout(10000)

})