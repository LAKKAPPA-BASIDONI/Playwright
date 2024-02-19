class LoginPage{
    constructor(page){
        this.page = page;
        this.userEmail= page.locator("#userEmail")
        this.userPassword = page.locator("#userPassword")
        this.userLogin = page.locator("[value='Login']")
    }
    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client")
    }
    async varifyLogin(username, password){
        await this.userEmail.fill(username);
        await this.userPassword.type(password);
        await this.userLogin.click()

    }
}
module.exports = {LoginPage}