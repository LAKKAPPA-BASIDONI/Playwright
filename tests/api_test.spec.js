const {test , expect, chromium} = require("@playwright/test");
const { firefox } = require('playwright'); 

test("api GET Request", async({request}) => {
    const response = await request.get("https://reqres.in/api/users/2")
    console.log(await response.json())
    expect(await response.status()).toBe(200)
})

test("api POST Request", async({request}) => {
    const response = await request.post("https://reqres.in/api/users",{
        data: {
            "name": "vijay",
            "job": "leader"
        }
    })
    console.log(await response.json())
    expect(await response.status()).toBe(201)
    
})

// https://www.google.com/gmail/about/

test("Email validation", async({page}) =>{
    await page.goto("https://www.google.com/gmail/about")
    await page.click('[data-action="sign in"]');
    await page.type('[id="identifierId"]',"lakkappabasidoni2000@gmail.com");
    await page.click('span:text-is("Next")');
    await page.waitForTimeout(1000)
    await page.type('[name="Passwd"]',"********")
    await page.click('span:text-is("Not now")');
    
    //await page.pause()
    await page.click('div:text-is("Compose")');
    await page.type('[peoplekit-id="BbVjBd"]',"sumithamin948@getMaxListeners.com")
    await page.fill('[placeholder="Subject"]',"Email Validation");
    await page.type('[aria-label="Message Body"]', "you received mail")
    await page.click('div:text-is("Send")');


    //await page.click('[class="gb_g gb_bb gb_Zf gb_H"]');




})