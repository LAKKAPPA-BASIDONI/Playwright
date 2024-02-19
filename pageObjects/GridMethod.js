class GridMethods{
    columnHeaderName = 'div[role="columnheader"] :text-is("Name"):visible'
    filterIcon = 'span[aria-hidden="true"] span[class="ag-icon ag-icon-menu"]>>nth=0'
    filterCollapse = 'span[class="ag-icon ag-icon-small-right"]'
    pinTable = 'div[class="ag-menu ag-ltr ag-popup-child"]'

    constructor(page){
        this.page = page;
    }
    async pnning(pinningValuse){
        await this.page.locator(columnHeaderName).hover();
        await this.page.locator(filterIcon).click()
        await this.page.locator(filterCollapse).hover()
        await this.page.waitForSelector(pinTable,{state:'visible',timeot:10000})
        await this.page.click('span:text-is("'+pinningValuse+'")')
        await this.page.pause()
    }
}

module.exports ={GridMethods}