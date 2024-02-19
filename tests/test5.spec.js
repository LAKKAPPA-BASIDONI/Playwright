const {test, expect}  = require("@playwright/test");

test("sagar_check", async({page})=> {
//     const browser = await chromium.launch();
//   const page = await browser.newPage();

  await page.goto("https://www.ag-grid.com/example/");

  // Wait for the Ag-Grid to be rendered
  await page.waitForSelector('.ag-root');

  // Locate the starting and ending columns
  const startColumn = await page.locator("div[col-id='jan'][role='columnheader']");
  const endColumn = await page.locator("div[col-id='dec'][role='columnheader']");

  // Get the bounding boxes of the columns
  const startBoundingBox = await startColumn.boundingBox();
  const endBoundingBox = await endColumn.boundingBox();

  // Perform a drag-and-drop operation from the start column to the end column
  await page.mouse.move(startBoundingBox.x + startBoundingBox.width / 2, startBoundingBox.y + startBoundingBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(endBoundingBox.x + endBoundingBox.width / 2, endBoundingBox.y + endBoundingBox.height / 2);
  await page.mouse.up();

  // Wait for a brief moment to observe the result
  await page.waitForTimeout(60000);
await startColumn.boundingBox()
 // await browser.close();

    
})