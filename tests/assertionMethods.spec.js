import {test, expect} from '@playwright/test';

test("toContainText()", async ({page})=>{
    const blinkText = "Free Access to InterviewQues/ResumeAssistance/Material"
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    //await page.waitForTimeout(5000)
    //wait for loading element
    await page.locator('[for="username"]').waitFor();
    await expect.soft(page.locator('[for="username"]')).toContainText("Username:");
    await expect(page.locator('[for="password"]')).toContainText("Password:")
    await expect(page.locator('[target="_blank"]')).toContainText(blinkText)

})

test("toBeTruthy()", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator('[for="username"]').waitFor();

    const bool1 = await page.locator('[for="username"]').isVisible();
    console.log("element is visible return :"+bool1)
    await expect(bool1).toBeTruthy();
    const bool2 = await page.locator('[for="username"]').isEditable();
    console.log("element is editable :"+bool2);
    //await expect(bool2).toBeE();

    let s= "";
    console.log("length of s is  :"+s.length);
   const arr= [23,72,38,292,26,27];
    for(const i of arr){
        console.log(i);

    }

})

