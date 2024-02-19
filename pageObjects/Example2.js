class Example2{
    constructor(page, dataset){
        this.page = page;
        this.dataset = dataset;
    }
    async goTo(){
        await this.page.goto("https://practice.expandtesting.com")
    }
    async formValidate(){
        await this.page.click(this.dataset.webInput)
        await this.page.fill(this.dataset.inputNum,"6")
        await this.page.fill(this.dataset.inputText,"user name")
        await this.page.fill(this.dataset.inputPwd, "password")
        await this.page.goBack()
        
        await this.addAndDelete();
    }
    async addAndDelete(){
        await this.page.click(this.dataset.addRemove)
        const originalLength = Math.round(Math.random()*10);
        console.log("length :"+originalLength)
        for(let i=0; i<originalLength; i++){
            await this.page.click(this.dataset.addElement);
            await this.page.waitForTimeout(1000)
        }
        for(let i=0; i<originalLength; i++){
            await this.page.click(this.dataset.removeElement);
            await this.page.waitForTimeout(1000)
        }
    }
    async dropDown(){
        const assrt ="Assertions";
        await this.page.click(this.dataset.ddBtn);
        await this.page.click('.dropdown-item:has-text("'+assrt+'")');
        await this.page.pause()
    }
}

module.exports= {Example2};