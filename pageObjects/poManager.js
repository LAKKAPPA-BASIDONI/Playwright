const {Amazon} =require("./Amazon")
const {LoginPge} =require("./LoginPage")

class poManager{
    constructor(page){
       // this.expect= expect;
        this.page  = page;
        this.amazon = new Amazon(this.page);
    }

    async getAmazonPage(){
        return this.amazon;
    }

    getLoginPage(){
        return 0
    }
}

module.exports ={poManager}