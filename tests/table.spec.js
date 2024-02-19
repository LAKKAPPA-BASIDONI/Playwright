const {test, expect} =  require("@playwright/test");

test("filter table" , async({page})=>{
    await page.goto("https://letcode.in/table");
    const table = page.locator('table[id="simpletable"]')
    const rows = table.locator('tbody tr');
    const  arr =  ["Raj","Chatterjee","Man"]
    for(let ar of arr){
    for(let i=0; i<await rows.count(); i++){
        if(await rows.nth(i).locator('td').nth(1).innerText()==ar){
            await rows.nth(i).locator('td').last().locator('input').check();
        }
    }
}
    
})

test("using filter method", async({page})=> {
    await page.goto("https://letcode.in/table");
    const table = page.locator('table[id="simpletable"]')
    const rows = table.locator('tbody tr');
    const  arr =  ["Raj","Chatterjee","Man"]

    const namematch = rows.filter({
        has : page.locator('td'),
        hasText: "Ra"
    })
    
     await namematch.locator('input').scrollIntoViewIfNeeded();
     await namematch.locator('input').focus();
     await namematch.locator('input').click();
     //await page.pause()

})

test("test2s", async ({page})=>{
    await page.goto("https://letcode.in/table");
    const cells = await page.locator('table[class="mat-sort table is-bordered is-striped is-narrow is-hoverable is-fullwidth"] tr');

    const match = cells.filter({
        has: page.locator('td'),
        hasText:"Eclair"
    })

    console.log(await match.allInnerTexts())
    await page.reload()
})

test( "column sorting ", async({page}) =>{
    await page.goto("https://letcode.in/table");
    const srTable = await page.locator('table[class*="mat-sort table is-bordered"]')
    const expectedArr = await page.locator('//table[contains(@class,"mat-sort table is-bordered")]/tr/td[1]').allTextContents();
    console.log(expectedArr)
    expectedArr.sort()
    console.log(expectedArr)

    await page.click('div:text-is("Dessert (100g)")')
    const actualArr = await page.locator('//table[contains(@class,"mat-sort table is-bordered")]/tr/td[1]').allTextContents();

    await expect(actualArr).toEqual(expectedArr)  
    console.log(actualArr)  
    console.log(actualArr.reverse())
    await page.evaluate(() => {
        window.scrollBy(0, 500);
      });  
})

async function checkSort(){
    

}