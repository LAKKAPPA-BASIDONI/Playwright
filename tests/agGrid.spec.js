const {test, expect} = require("@playwright/test");

test("ag Grid", async({page}) => {
    await page.goto("https://www.ag-grid.com/example/");
    //collections table name
    await page.waitForSelector('[ref="eText"]>>nth=0');
    const tbNames = await page.locator('[ref="eText"]').allInnerTexts()
    console.log("Table Names  : "+tbNames, typeof(tbNames))
    //first column values
    const firstCl = await page.locator('[class="ag-cell-value"]').allInnerTexts();
    console.log(firstCl)
    //arrow visibility
    await page.click('[ref="eText"]>>nth=0');
    await expect(page.locator('[ref="eText"]>>nth=0')).toBeVisible();
    //filter
    await page.click('[class="ag-icon ag-icon-menu"]>>nth=0');
    await page.click('[class="ag-icon ag-icon-filter"]:visible')
    await page.fill('input[aria-label="Search filter values"]:visible', "tony");
    await page.keyboard.press("Enter")
    const expectedArr = firstCl.sort()
    console.log("Expected ::"+expectedArr,"length : "+expectedArr.length)
    await page.waitForTimeout(10000)
    const actualArr = await page.locator('[class="ag-cell-value"]').allInnerTexts();
    const actualArr1 =  page.locator('[class="ag-cell-value"]')
    console.log("Actual ::"+actualArr,"length :"+actualArr.length,actualArr1)
    for(let i=0;i<actualArr1.length; i++){
        console.log("inside loop")
        console.log(await actualArr1.nth(i).innerText())
    }
    

    //await expect(actualArr).toEqual(expectedArr)


})

test(" text print with tab", async({page})=>{
    await page.goto("https://www.ag-grid.com/example/");
    for(let i=2;i<20;i++){
        if(i==7 || i == 8){
            continue
        }
        //const nn = await page.locator('div[class="ag-center-cols-container"] div[aria-colindex="'+i+'"]>>nth=0').innerText()
        await page.locator('div[class="ag-center-cols-container"] div[aria-colindex="'+i+'"]>>nth=0').focus();
        await page.keyboard.press('ArrowRight')
        await page.waitForTimeout(1000)
       // console.log(nn)
        
    }
    
    //await page.pause()
})


test("pinning", async({page}) =>{
    await page.goto("https://www.ag-grid.com/example/");
    const arrt = ["Country","Bank Balance","Extra Info 2","Rating"]
    await page.waitForTimeout(5000)
    //await page.click('span:text-is("Columns")')
    await page.locator('input[aria-label="Toggle Select All Columns"]').uncheck();
    for(let i=1;i<18;i++){
        const name =await page.locator('div[aria-posinset="'+i+'"]').innerText()
        console.log(name)
        if(arrt.includes(name)){
            await page.locator('div[aria-posinset="'+i+'"] input').check()
        }
        await page.locator('div[aria-posinset="'+i+'"]').focus()
        await page.keyboard.press("Tab");
    }

    
})

test("filter with text ", async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Scroll down the page
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });

  await page.waitForTimeout(3000);

  // Scroll within an element with class 'tableFixHead'
  await page.evaluate(() => {
    const element = document.querySelector('.tableFixHead');
    if (element) {
      element.scrollTop = 5000;
    }
  });

  await page.waitForTimeout(3747);

  //await browser.close();
    //await page.pause();
})


test("pinningwe", async({page}) =>{
    await page.goto("https://www.ag-grid.com/example/");
    await page.waitForTimeout(3747);

    await page.evaluate(() => {
        const element = document.querySelector('.ag-virtual-list-viewport.ag-column-select-virtual-list-viewport.ag-focus-managed');
        if (element) {
          element.scrollTop = 5000;
          
        }
      });
      await page.waitForTimeout(3747);
      //await page.pause();
      await page.evaluate(() => {
        const element = document.querySelector('.ag-body-horizontal-scroll-viewport');
          element.scrollLeft = 6000;
      });
      await page.waitForTimeout(3747);
      


      
})