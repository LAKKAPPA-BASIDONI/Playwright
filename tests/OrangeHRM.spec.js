import {test, expect} from "@playwright/test";

test("OrangeHRM login", async({browser}) =>{
    const br = await browser.newContext();
    const page = await br.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator('input[name="username"]').pressSequentially("Admin")
    await page.locator('input[name="password"]').pressSequentially("admin123")
    const nameSelector = 'input[name="username"]'
    const passwordSelector = 'input[name="password"]'

    const buttonBoundingBox = await page.locator(nameSelector).boundingBox();
    const boxBoundingBox = await page.locator(passwordSelector).boundingBox();
    console.log("name :: "+buttonBoundingBox.x)
    console.log("name width :: "+buttonBoundingBox.width)
    console.log("password :: "+boxBoundingBox.x)

    await page.click('button[type="submit"]')
    //await page.pause();
})

test(" validate left side icon ", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
    const iconBox = await page.locator('svg[class="oxd-icon orangehrm-sm-icon"]>>nth=3').boundingBox()
    console.log("iconBox  ::"+iconBox.x)
    const vsize = await page.locator('body').boundingBox();
    console.log("vsize :: "+vsize.width)

    if(iconBox.x <vsize.x + (vsize.width/2)){
        console.log("present at left side ")
    }else{
        console.log("it not present at left")
    }
})

test("singin ", async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //await page.getByRole('link', {name:"OrangeHRM, Inc"}).click()
    await page.waitForTimeout(3000)
    const webElement =await page.locator('button[type="submit"]')
    const color = await webElement.evaluate((e)=>{
		return window.getComputedStyle(e).getPropertyValue('color')
        
    })
    console.log(color)

   
    //await page.pause()
})

test("setOfLocatorChecking", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const alll =  page.$$('p')
    await page.waitForTimeout(2000)
    const count = await alll.length
    console.log(count)
    for(let ee of alll){
        console.log(await ee.innerText())
    }
    await page.pause()
})