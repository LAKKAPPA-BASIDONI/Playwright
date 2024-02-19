const{test, expect} = require("@playwright/test");
const dataset = {
    url : "https://practice.expandtesting.com/",
    dragDrop : 'a[href="/drag-and-drop"]',
    squereA :  '[class="column"]>>nth=0',
    squereB : '[class="column"]>>nth=1',
    dragDropCircle : 'a[href="/drag-and-drop-circles"]',
    target : 'div[id="target"]',
    current : '[id="source"]>div>>nth=0',
    login : 'a[href="/login"]',
    usrName : '#username',
    pwd : '[id="password"]',
    submitBtn : '[type="submit"]',
    logoutBtn : 'i:text-is(" Logout")',
    formValidation : 'a[href="/form-validation"]',
    datePicker : '[name="pickupdate"]',
    ctName : '[name="ContactName"]',
    phoneNo : '[name="contactnumber"]',
    payMethod : '[name="payment"]',
    uploadFile : '[href="/upload"]',
    areaOfUpload : '[data-testid="file-input"]'
}
test("drag and drop", async({page}) => {
    await page.goto(dataset.url);
    await page.click(dataset.dragDrop)
     const first = await page.locator(dataset.squereA)
     const second = await page.locator(dataset.squereB)
     //await page.pause();
     await first.dragTo(second)
})
test("drag and drop a circle", async({page}) =>{
    await page.goto(dataset.url);
    await page.click(dataset.dragDropCircle)
    const square =  page.locator(dataset.target)
    const circle = page.locator(dataset.current)
    for(let i=0; i<3; i++){
        await circle.dragTo(square)
        await page.waitForTimeout(1000)
    }
})
test("login form", async({page})=>{
    await page.goto(dataset.url);
    await page.click(dataset.login)
    const userName = await page.locator('b>em').first().innerText()
    const password = await page.locator('b>em').last().innerText()
    await page.locator(dataset.usrName).fill(userName)
    await page.locator(dataset.pwd).fill(password)
    await page.click(dataset.submitBtn)
    await expect(page.locator('[id="flash"]')).toHaveText("You logged into a secure area!")
    await page.click(dataset.logoutBtn)
})
test("form validation", async({page}) => {
    await page.goto(dataset.url)
    await page.click(dataset.formValidation)
    await page.locator(dataset.datePicker).type("12/12/2023") 
    await page.fill(dataset.ctName,"Lakkappa Basidoni")
    await page.fill(dataset.phoneNo,"8147831880")
    await page.locator(dataset.payMethod).selectOption('card')
});
test("upload file ", async({page}) => {
    await page.goto(dataset.url)
    await page.click(dataset.uploadFile)
    await page.locator(dataset.areaOfUpload).setInputFiles('tests/uploadfiles/blank.pdf')  
})

//demo.opencart
test("whatsapp", async({page}) => {
    await page.goto("https://web.whatsapp.com/");
    //await page.pause()
})

test("equalTo()", async({page}) => {
    await expect([1, 2, 3]).toEqual(expect.arrayContaining([1]));
    await expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 4]));
    await expect("lakkappa").toEqual("lakkappa")
})

test("population count", async({page}) => {
    await page.goto("https://www.worldometers.info")
    const pp = await page.locator('[rel="dth1s_this_year"]').innerText();
    console.log("1 : "+pp)
})