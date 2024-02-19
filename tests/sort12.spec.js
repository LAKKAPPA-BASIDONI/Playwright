const {test, expect} = require('@playwright/test');

test("sort column ", async({page}) =>{
    await page.goto("https://www.ag-grid.com/example/");
    await page.waitForTimeout(5000)
    const arr4= await page.locator('div[col-id="name"] div[class="ag-selection-checkbox"]+span').allTextContents();
    console.log(arr4)
     let arr=[];
     let count =0;
     let element21 = await page.innerText('span:text-is("Rows")+span');
     let rows = Number(element21)
     console.log(element21, typeof(ele))
     //await page.pause()
     
    while(true){
        let name =await page.locator('div[row-id="'+count+'"] div[col-id="name"] div[class="ag-selection-checkbox"]+span').innerText()
        arr.push(name)
        console.log(name+" :: "+count)
        await page.locator('div[row-id="'+count+'"] div[col-id="name"]').focus()
        await page.keyboard.press("ArrowDown")
        count++;
        await page.waitForTimeout(200)
        if(count ==rows){
            break;
        }
    }
    console.log(arr)

    arr =arr.sort()
    await page.evaluate(()=>{
        const ele = document.querySelector('.ag-body-vertical-scroll-viewport')
        ele.scrollTop = 0
    })

    ////
    // await page.waitForTimeout(2000)
    // await page.click('div[class="ag-header-cell-label"] span:text-is("Name")')
    // await page.waitForTimeout(2000)

    // let arr1 = await page.locator('div[col-id="name"] div+span').allTextContents()
    
    // let arr2 = arr1.sort()
    // for(let i=0; i<arr2.length;i++){
    //     console.log(arr1[i]+"  ::  "+arr2[i])
    //     await expect(arr1[i]).toEqual(arr2[i])
    // }
    

})

test("drag option ", async({page}) =>{
    await page.goto("https://practice.expandtesting.com/infinite-scroll")
    await page.waitForTimeout(3000)
    
    await page.evaluate(()=>{
       const ele = document.querySelector('')
        window.scrollBy(0,20000)
    })
    

    
     await page.waitForTimeout(3000)
     //await page.pause()
})

