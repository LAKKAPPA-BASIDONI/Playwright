class Flipkart{
    constructor(page,dataset,expect){
        this.page = page;
        this.dataset = dataset;
        this.expect= expect;
    }
    async goTo(){
        await this.page.goto("https://www.flipkart.com/")
    }
    async getProduts(){
        const products = this.page.locator(this.dataset.allProductList);
        const produ = await this.page.locator(this.dataset.allProductList).allTextContents();
        console.log(produ)
        console.log( await this.page.locator('[class="_2j7a4R"]').textContent())
        console.log("---------------------------------------------------------------------")
        console.log( await this.page.locator('[class="_2j7a4R"]').innerText())
        const countOfProdutct = await products.count();
        console.log
        let i=0;
        while(i<countOfProdutct){
            const productText = await products.nth(i++).innerText()
            const productPrices = await products.nth(i++).locator(this.dataset.productPrice).textContent();
            console.log(productText+"  :  "+productPrices)
        }
    }
    async assert(){
        //tittle validaion
        await this.expect.soft(this.page.locator(this.dataset.tittle)).toBeVisible()
        //cart text 
        await this.expect.soft(this.page.locator(this.dataset.cartTxt)).toHaveText("Cart")
        // checking login icon
        await this.expect.soft(this.page.locator(this.dataset.loginIcon)).toBeVisible();
        // validate text
        await this.expect.soft(this.page.locator(this.dataset.rightText)).toHaveText("Become a Seller")



    }
}
module.exports = {Flipkart}