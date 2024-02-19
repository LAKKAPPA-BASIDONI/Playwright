class APIUtils{
     
    constructor(apiContext, loginPayload){
        this.apiContext =apiContext;
        this.loginPayload = loginPayload;
        this.response={};

    }
    async getToken(){
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:this.loginPayload});
        //expect(loginResponse.ok).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        let token =loginResponseJson.token;
        console.log(token)
        this.response.token=token;
        return this.response;
    }
}
module.exports = {APIUtils}