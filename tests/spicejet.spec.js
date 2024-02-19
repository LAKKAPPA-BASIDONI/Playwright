const {test, expect} = require("@playwright/test")

test("Spice jet",async ({page})=>{
    await page.goto('https://www.spicejet.com/');
    await page.click('div[dir="auto"]:has-text("From")>>nth=0');
    await page.getByText('BLR').click();
    await page.click('div[data-focusable="true"]:has-text("To")>>nth=0');
    console.log('going to click hyd');
    await page.getByText("Hyderabad").click();
    //await page.waitForEvent("", {state: "visible", timeout: 10000})

    //await page.getByText("Departure Date").click();
    await page.locator("//div[@class='css-1dbjc4n r-18u37iz']//div[@class='css-1dbjc4n r-14lw9ot r-11u4nky r-z2wwpe r-1phboty r-rs99b7 r-1loqt21 r-13awgt0 r-ymttw5 r-5njf8e r-1otgn73']").click()
    

    //await page.waitForTimeout(5000)
    console.log("date clicked")
    const sss=  page.locator('[class="css-76zvg2 r-homxoj r-adyw6z r-1kfrs79"]>>nth=0').innerText()
    console.log(sss+"   "+typeof(sss))
    // const dd = 26
    // const my = "November 2023"
     
    
    // while(true){
    //     const cur_dd = await page.
    //     if()
    // }
// selecting student radio button
    //await page.locator('[data-testid="svg-img"]>>nth=20').click()
    
    //div[@class='css-1dbjc4n r-14lw9ot r-z2wwpe r-vgw6uq r-156q2ks r-11ict49 r-8uuktl r-136ojw6']//div[9]
    // for(let i=0;i<fr.length;i++){
    //     if(i == "Bengaluru"){
    //        await i.click()
    //        break;
    //     }
    // }
    // body > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(9)
    // await page.click('input[class="css-1cwyjr8 r-homxoj r-ubezar r-10paoce r-13qz1uu"]>>nth=1')
    // await page.click("//div[@id='react-root']//div[20]")

    // await page.click('[data-testid="departure-date-dropdown-label-test-id"]')
    // await page.waitForTimeout(2000)
    // await page.click('[class="css-76zvg2 r-homxoj r-ubezar r-16dba41"]>>nth=20')

    // await page.click('[data-testid="home-page-travellers"]')
    // await page.click('[data-testid="svg-img"]>>nth=15')
    // await page.click('[data-testid="svg-img"]>>nth=19')
    // await page.click('[class="css-76zvg2 r-homxoj r-ubezar"]>>nth=33')
    // await page.click('[data-testid="home-page-flight-cta"]')

    
    
})



test('test2', async ({ page }) => {
  await page.goto('https://www.spicejet.com/');
  await page.getByTestId('one-way-radio-button').locator('circle').nth(1).click();
  await page.getByTestId('to-testID-origin').getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Bengaluru$/ }).first().click();
  await page.getByText('HyderabadRajiv Gandhi International AirportHYD').click();
  await page.getByTestId('undefined-calendar-picker').locator('circle').first().click();
  await page.getByTestId('undefined-month-February-2024').getByText('15').click();
  await page.getByTestId('home-page-travellers').locator('div').nth(1).click();
  await page.getByTestId('Adult-testID-plus-one-cta').click();
  await page.locator('div').filter({ hasText: /^INR$/ }).first().click();
  await page.locator('div').filter({ hasText: /^INR$/ }).nth(2).click();
  await page.locator('div:nth-child(4) > div > div > div > svg > circle').click();
  await page.getByTestId('home-page-flight-cta').click();
  await page.getByRole('img').locator('rect').click();
  await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
});

test("test3", async({page}) => {

  await page.goto('https://www.spicejet.com/');

  await page.locator('input[autocapitalize="sentences"]>>nth=0').fill("Bangalore")
  await page.getByText("Regions").waitFor();
  await page.waitForTimeout(5000)
  await page.locator('input[autocapitalize="sentences"]>>nth=1').fill("Hyderabad")
  //await page.pause()
})