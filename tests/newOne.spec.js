const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productNameCart = "IPHONE 13 PRO";
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();

   //printing product names
   await page.waitForSelector(".card-body");
   const productNames = page.locator(".card-body");
   const count = await productNames.count();
   console.log("length ::"+count)
   for(let i=0; i<count; i++){
    console.log( await productNames.locator('b').nth(i).innerText())
   }

   //cart 
   for(let i=0; i<count; i++){
      const name = await productNames.locator('b').nth(i).innerText()
     // console.log(name+"jdhijidji")
      if( name == productNameCart){
         await productNames.nth(i).locator('[class="btn w-10 rounded"]').click()
         console.log(productNameCart+": product carted")
         break;
      }
      
     }

   await page.waitForTimeout(6000)
   

   await page.click('button[routerlink="/dashboard/cart"]');
   await page.waitForTimeout(6000)
   // //validate cart product
   // await page.waitForSelect('.cartSection>h3')
   // await expect.soft(page.locator('cartSection>h3')).toHaveText(productNameCart);

   //  print product number
   console.log(await page.locator('.cartSection .itemNumber').textContent())

   await page.locator('button:has-text("Buy Now")').click();

   const cardNumber = "4542 9931 9292 2293";
   const NameOnCard = "Lakkappa Basidoni"
   const CV = "3645";

   //apply coupon
   await page.fill('[class="input txt text-validated"]',cardNumber);
   await page.fill('[class="input txt"]>>nth=0',CV);
   await page.fill('[class="input txt"]>>nth=1',NameOnCard)
   await page.fill('input[name="coupon"]', "245sg6");

   //date
   await page.locator('[class="input ddl"]>>nth=0').selectOption("08")

   await page.locator('[class="input ddl"]>>nth=1').selectOption("24")

   
   


     // shipping information
   await page.fill('[class="user__name mt-5"] input>>nth=0',email);
   await page.locator('[class="user__name mt-5"] input>>nth=1').type("India", {delay:100});
   await page.click('span:text-is(" India")')
   //await page.pause()


   // checking product in orders table
   await page.click()

   //submit
  // await page.click('button[type="submit"]')



   
   
})
 