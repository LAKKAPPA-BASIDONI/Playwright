const {test, expect, request} = require("@playwright/test");
const {APIUtils} = require("./Utils/APIUtils")

const loginPayLoad = {userEmail:"anshika@gmail.com",userPassword:"Iamking@000"}
const orderPayload = [
    {
      country: "India",
      productOrderedId: "64c139cd7244490f958d0a40"
    }
  ]

var orderId;
var response;


test.beforeAll(async ()=>{
    const apiContext = await request.newContext();
   let obj = new APIUtils(apiContext,loginPayLoad)
   response = obj.getToken();
   console.log(response)


    // const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:loginPayLoad});

    // expect(loginResponse.ok).toBeTruthy();
    // const loginResponseJson = await loginResponse.json();
    //  token =loginResponseJson.token;
    // console.log(token);

    // oreder
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data:orderPayload,
        headers :{
            "Authorization" :response.token,
            "Content-Type" : "aapplication/json"
        },
    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders;
    console.log(orderId)


});

test("web Api testing", async ({page})=>{

    page.addInitScript(value =>{
        window.localStorage.setItem("token", value)
    },response.token)
    await page.goto("https://rahulshettyacademy.com/client")

})