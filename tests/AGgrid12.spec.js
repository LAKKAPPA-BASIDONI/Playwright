import {test, expect} from "@playwright/test";
import {GridMethods} from "../pageObjects/GridMethod"

test("filtering ", async({page}) =>{
    await page.goto("https://www.ag-grid.com/example/")
    await page.click('div button span[class="ag-icon ag-icon-filter"]>>nth=3')
    await page.type('input[aria-label="Search filter values"]','Agon')
    await page.keyboard.press("Enter");
    await page.keyboard.press("Escape");
    await expect(page.locator('div[col-id="game.name"]>>nth=1')).toHaveText("Agon")
    //await page.pause()

})

test("pinning34 ", async({page}) =>{
   
    const obj = new GridMethods(page)
    await page.goto("https://www.ag-grid.com/example/")
    await page.waitForTimeout(5000)
   await obj.pnning("Pin Left")
})

