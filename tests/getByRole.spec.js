const {test, expect} = require('@playwright/test');

test("getByRole", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.getByRole('checkbox', {id:"terms"}).check();
    //await page.getByRole('link',{href:"https://rahulshettyacademy.com/documents-request"}).click()
    await expect( page.getByText('Username:')).toBeVisible()
    await expect( page.getByText('(username ')).toBeVisible()
    await expect( page.getByText([a-zA-Z])).toBeVisible()


})