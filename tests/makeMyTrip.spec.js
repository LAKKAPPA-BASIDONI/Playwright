const {test, expect} = require("@playwright/test");

test("make my trip", async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.makemytrip.com/");
    
    await page.waitForTimeout(6000)
    await page.click('[class="commonModal__close"]')
    // await page.waitForSelector('a[class="close"]',{state:'visible',timeout:10000})
    // await page.click('a[class="close"]')
    //from
    await page.click('label[for="fromCity"]')
    await page.click('p:has-text("Bengaluru, India")')
    //to
    await page.click('label[for="toCity"]')
    await page.click('p:has-text("Hyderabad, India")')

    //date
    //await page.click('label[for="departure"]')
    await page.click('label>span:has-text("Departure")')
    await page.click('[class="dateInnerCell"] p:has-text("16")>>nth=0');

    await page.click('.wrapFilter>p:has-text("Student ")')

    //submit 
    await page.locator(".widgetSearchBtn").click()

    await page.waitForTimeout(6000);

    // second step
    await page.waitForSelector('.overlayCrossIcon')
    await page.click('.overlayCrossIcon')

    //locator ::p:has-text("Bengaluru")+div label>>nth=0
    // locator::::::p:has-text("Stops From Bengaluru")+div>div[class="makeFlex spaceBetween appendBottom12"]>label[class="checkboxContainer "]>>nth=0
    await page.click('p:has-text("Bengaluru")+div label>>nth=0')
    // view price 
    await page.click('[class="customArrow arrowDown"]>>nth=0')
    const dlink =  await page.locator('button:text("Book Now")>>nth=0')

    const [newTwo] = await Promise.all([
        context.waitForEvent('page'),
        dlink.click()
    ])
    
    await newTwo.getByPlaceholder("Mobile No").fill("8147831880");
    await newTwo.getByPlaceholder("Email").fill("lakkappa@gmail.com");
    await newTwo.fill('#pincode_gst_info',"591114");
    await newTwo.fill('#id="address_gst_info"',"Khanapeth");

    await newTwo.waitForTimeout(6000);
    

})