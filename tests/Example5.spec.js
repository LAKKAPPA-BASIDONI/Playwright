// // @ts-check

// const { test } = require('@playwright/test');

// test.describe.configure({ mode: 'serial' });

// /** @type {import('@playwright/test').Page} */
// let page;

// test.beforeAll(async ({ browser }) => {
//   page = await browser.newPage();
// });

// test.afterAll(async () => {
//   await page.close();
// });

// test('runs first', async () => {
//   await page.goto('https://playwright.dev/');
//   console.log("lakkappa")
// });

// test('runs second', async () => {
//   await page.getByText('Get Started').click();
//   console.log("basidoni")
// });

const {test} = require('@playwright/test');
test.describe.configure({ mode: 'parallel' })
let page;
test.beforeAll(async({browser})=>{
     page = await browser.newPage()
    
    
})

test("Two", async()=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log("Two..........")

    await page.waitForTimeout(1000)
    await page.locator('input[name="username"]').pressSequentially("Admin")

})

test("Three", async()=>{
    console.log("Three..........")
    await page.waitForTimeout(1000)

    await page.locator('input[name="password"]').pressSequentially("admin123")
    //await page.pause()
    

})

test("five", async()=>{
    console.log("five..........")
    await page.waitForTimeout(1000)

    const passwordSelector = 'input[name="password"]'
    await page.click('button[type="submit"]')
    //await page.pause();
})

test.skip("Four", async()=>{
    console.log("Four..........")
    await page.waitForTimeout(1000)

    const nameSelector = 'input[name="username"]'

})

