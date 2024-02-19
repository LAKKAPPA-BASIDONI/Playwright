const {test, expect} = require("@playwright/test");
const{newtest} = require("../dataset/test-base")

test.describe.configure({mode:"parallel"})
test("google", async ({page})=>{
    await page.goto("https://www.google.com");
    await page.fill("[id='APjFqb']", "today news");
    await page.keyboard.press("Enter")
    await  page.pause()
    await page.waitForSelector('[class="LC20lb MBeuO DKV0Md"]>>nth=0');
    const listOfNews = page.locator('[class="LC20lb MBeuO DKV0Md"]');

    const count = await listOfNews.count();
    for(let i=0;i<count;i++){
        console.log(i+"  "+await listOfNews.nth(i).innerText())
    }
    console.log("length::"+count)
    await page.click('[class="LC20lb MBeuO DKV0Md"]>>nth=0')
    //await page.getByTitle("India").click()

})
const ProductName = ["vivo mobile","oppo mobile","redmi mobile","oneplus mobile","apple mobile"];
const length = ProductName.length;

for(let i=0; i<length; i++){
    test(`newone ${ProductName[i]}`,async({page})=>{
        await page.goto("https://www.google.com");
        await page.fill("[id='APjFqb']", ProductName[i]);
        await page.keyboard.press("Enter")
        await page.waitForSelector('[class="LC20lb MBeuO DKV0Md"]>>nth=0');
        const listOfNews = page.locator('[class="LC20lb MBeuO DKV0Md"]');
        const count = await listOfNews.count();
        for(let i=0;i<count;i++){
            console.log(i+"  "+await listOfNews.nth(i).innerText())
        }
        console.log("length::"+count)
        //await page.pause()

    })
}

test("test4", async({page}) => {

    await page.goto("https://practice.expandtesting.com/");
    await page.click('div.card-body>>nth=0')
    //await page.fill('[for="input-password"]',"12")
    //await page.fill('#input-password',"12")
    //await page.getByLabel('Input: Password').fill("12")

    //await page.fill('[for="input-text"]',"lakkappa basidoni")
    //await page.fill('#input-text',"lakkappa basidoni")
    await page.getByLabel('Input: Text').fill("lakkappa basidoni")
    //await page.pause()
})

newtest("google using fixture", async({page,googlelocator})=>{
    await page.goto("https://www.google.com");
    await page.fill(googlelocator.textField, googlelocator.searchValue);
    await page.keyboard.press("Enter")
    await  page.pause()
    await page.waitForSelector(googlelocator.firstProduct);
    const listOfNews = page.locator(googlelocator.productList);

    const count = await listOfNews.count();
    for(let i=0;i<count;i++){
        console.log(i+"  "+await listOfNews.nth(i).innerText())
    }
    console.log("length::"+count)
})