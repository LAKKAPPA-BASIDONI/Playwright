const {test, expect} = require("@playwright/test");

test("download files", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com/download")
    await page.waitForTimeout(2000);
    //await page.click(text, {position: {x: 5, y: 5}});

    const downloadFile = page.waitForEvent("download")
    await page.getByText("some-file.txt").click();
    const download = await downloadFile
    await download.saveAs("some-file.txt")
})