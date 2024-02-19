const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async({browser})=>{
    const email = "anshika@gmail.com";
    const context = await browser.newContext();
    const page = await context.newPage();
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await context.storageState({path:"state.json"});
   webContext = await browser.newContext({storageState:'state.json'})
   //ctr + fhift +p ==debug


})
 
 
 
 
test('@Client App login', async ({}) => {
    
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productNameCart = "IPHONE 13 PRO";
   
   const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
//    await page.locator("#userEmail").fill(email);
//    await page.locator("#userPassword").type("Iamking@000");
//    await page.locator("[value='Login']").click();

   //printing product names
   await page.waitForSelector(".card-body");
   
   const productNames = page.locator(".card-body");
   const count = await productNames.count();
   console.log("length ::"+count)
   for(let i=0; i<count; i++){
    console.log( await productNames.locator('b').nth(i).innerText())
   }

});