const {test, expect} = require("@playwright/test")

test("signinToRahulShettyAcademy", async ({page})=>{
    const userName = "rahulshettyacademy";
    const password = "learning";
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.getByLabel("Username:").fill(userName);
    await page.getByLabel("Password:").fill(password);
    await page.locator('input[id="usertype"]').nth(1).check();
    await page.locator('#okayBtn').click()
    await page.locator('[class="form-control"]>>nth=2').click()
    await page.locator('#terms').check();
    await page.click('#signInBtn')

    // print all product
    await page.waitForTimeout(6000);
    for(let i=0; i<4; i++){
        const productNames =  await page.locator('h4[class="card-title"]>a').nth(i).textContent()
        console.log(i +" : "+productNames)
    }
    
    await page.locator('button[class="btn btn-info"]').first().click();
    await page.click('[class="nav-link btn btn-primary"]');

    await expect(page.locator('[class="media-heading"]>>nth=0')).toBeVisible();
    const productPrice = await page.locator('td[class="text-right"]>h3>strong').textContent();
    console.log("cart product prise is : "+productPrice);
})

test("add to cart Nokia Edge",async ({page})=>{
    const userName = "rahulshettyacademy";
    const password = "learning";
    const mobileCartName = "Nokia Edge";

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.getByLabel("Username:").fill(userName);
    await page.getByLabel("Password:").fill(password);
    //await page.locator('input[id="usertype"]').nth(1).check();
    //await page.locator('#okayBtn').click()
    await page.locator('[class="form-control"]>>nth=2').click()
    //await page.selectOption("consult");
    await page.locator('#terms').check();
    await page.click('#signInBtn')
    await page.waitForTimeout(6000)
    const mobileNames = page.locator('[class="card h-100"]')
    await page.waitForTimeout(6000)
    const count = await mobileNames.count();
    console.log("mobile count"+count);
    for(let i=0; i<count; i++){
        if(await mobileNames.nth(i).locator('[class="card-body"] a').textContent() == mobileCartName){
            console.log(await mobileNames.nth(i).locator('[class="card-body"] a').textContent())
            await mobileNames.nth(i).locator('[class="card-body"]+[class="card-footer"] [class="btn btn-info"]').click();

        }
    }

    //await page.pause();

})

test("test2", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    //await page.locator('[value="admin"]:visible').check()
    await page.locator('[id="terms"]').check();
    //await page.pause()

})