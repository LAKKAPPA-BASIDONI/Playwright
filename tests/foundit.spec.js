const {test, expect} = require("@playwright/test");

test("foundit", async ({page}) =>{
      
    await page.goto("https://www.foundit.in/");

    await page.locator('a:text-is("Jobs")').focus();
    await page.keyboard.press("ArrowRight")
    await page.keyboard.press("ArrowRight")
    await page.keyboard.press("Enter")
    //await page.pause()
    // await page.fill('[id="SE_home_autocomplete"]',"java")
    // await page.fill('[id="SE_home_autocomplete_location"]',"Bengaluru / Bangalore")
    // await page.click('div[class="multiselect modal-ref-class"]')
    // await page.click('[class="mqfihd-upload"]')
    // await page.locator('#file-upload').setInputFiles("tests/uploadfiles/blank.pdf")
    // await page.waitForTimeout(3000);
    // await page.locator('[id="pop_upload"]').click()

    // await page.fill('#fullName',"Lakkappa Basidoni")
    // await page.fill('#emailId',"lakkappabasidoni2000@gmail.com")
    // await page.fill('#mobileNumber',"8147831880")
    // await page.click('[type="radio"]:visible>>nth=0')
    //await page.click('#continue-btn')
    
})

test("video", async({page}) =>{
    await page.goto("https://www.hims.com/");
    await page.waitForTimeout(20000)
    await expect( page.locator("video")).toHaveJSProperty('paused', false)
})


test.skip("videoPlayChecking", async({page}) =>{
    await page.goto("/");
    await page.waitForTimeout(5000)
    const iconlocator = page.locator('div svg+button')
    const status = await iconlocator.getAttribute("aria-label")
    console.log("status of video :"+status)
    if(status == "Play video"){
        console.log("Video : ON")
    }else{
        console.log("Video : OFF")
    }
    await expect(status).toBe("Play video")
    await expect(status).toEqual("Play video")
})

test("focus method", async({page}) => {
    await page.goto("https://www.hims.com/");
    await page.waitForTimeout(5000)
    await page.locator('[class="electric-windstyle__ButtonIcon-sc-1ytvbvs-1 phXbj"]>>nth=0').hover()
    //await page.pause()
    await page.locator('[class="electric-windstyle__ButtonIcon-sc-1ytvbvs-1 phXbj"]>>nth=0').focus()

    //await page.click('[data-testid="GlobalNavigationButton"]')
    
    const boxValue= page.locator('[data-tracking-id="atf_tile"]')
    const count = await boxValue.count();
    console.log("length :"+count)
    for(let i=0; i<count; i++){
        const text = await boxValue.nth(i).locator('[class="typographystyle__Typography-sc-1pfzedw-0 lkagwC"]').innerText();
        console.log(i+"   "+text);
    }
    console.log("completed")
})

test("visualy", async({page}) => {
    await page.goto("https://www.hims.com/");
    expect(await page.screenshot()).toMatchSnapshot("landing.png")
})
