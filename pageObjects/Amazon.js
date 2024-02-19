class Amazon{
    constructor(page,expect){
        this.expect = expect;
        this.page = page;
        this.menuBtn = page.locator('#nav-hamburger-menu')
        this.newReleasesOpt = page.locator('[id="hmenu-content"]>ul>li>>nth=2')
        this.firstProduct = page.locator('[class="zg-carousel-general-faceout"]>>nth=0')
        this.productName = page.locator('[id="productTitle"]:visible')
        this.productDescription = page.locator('[class="a-normal a-spacing-micro"] tr')
        //this.prodRow = page.locator('td>span')

        this.amazonLogo = page.locator('[id="nav-logo-sprites"]')
        this.searchIcon = page.locator('[id="nav-search-submit-button"]')
        this.navbar = page.locator('[class="nav-a-content"]>>nth=0')

        this.productRating = page.locator('[class="a-size-base a-color-base"]:visible>>nth=0')
        this.cartBtn = page.locator('[id="add-to-cart-button"]')
        this.relatedProduct = page.locator('[class="a-section a-spacing-none sw-recommendations-carousel-element"]:visible')
        //[class="a-truncate-cut"]

        this.map = new Map();
    }
    async goTo(){
        await this.page.goto("/")
        await this.page.waitForTimeout(2000)
    }
    async searchProduct(){
        await this.menuBtn.click();
        await this.newReleasesOpt.click()
        await this.firstProduct.click()
        console.log(await this.productName.innerText())
        const count = await this.productDescription.count()
        for(let i=0;i<count; i++){
            console.log(await this.productDescription.nth(i).locator('td>span').first().innerText()+
            " :  "+await this.productDescription.nth(i).locator('td>span').last().innerText())
        }

        console.log("completed")
    }

    async assertionChecking(){
        await this.expect(this.amazonLogo).toBeVisible()
        await this.expect(this.searchIcon).toBeVisible()
        await this.expect(this.navbar).toBeVisible()
    }
    async buyDecesion(){
        const rate = await this.productRating.innerText();

        //console.log()
        console.log("product rating :"+rate,"type :"+typeof(rate));

        if(rate>=4){
            await this.cartBtn.click();
            console.log("Cart the product")

        }
        else{
            console.log("rating is bellow the average")
        }

     }
    // async relatedProductNameAndPrice(){
    //     const relatedProductcount = await this.relatedProduct.count();
    //     console.log("length   ::"+relatedProductcount)
    //     for(let i=0;i<relatedProductcount;i++){
    //         const relprodNmae = await this.relatedProduct.nth(i).locator('[class="a-truncate-cut"]').innerText();
    //         const relprodPrice = await this.relatedProduct.nth(i).locator('[class="a-price-whole"]').innerText();
    //         console.log("productName :"+relprodNmae+"   ::: prise  : "+relprodPrice)
    //         this.map.set(relprodNmae,relprodPrice)
    //     }
    //     console.log(this.map)
    // }
}
module.exports = {Amazon}