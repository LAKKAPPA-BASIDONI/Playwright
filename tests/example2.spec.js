const {test, expect}= require("@playwright/test");
const{Example2}= require("../pageObjects/Example2")
const{example2test}= require("../dataset/test-base");


example2test("example 2", async({page, dataset}) =>{
  const obj = new Example2(page,dataset)
  await obj.goTo();
  await obj.formValidate();
  //await page.pause()
  
})

example2test("example 3", async({page,dataset}) => {
    const obj =new Example2(page,dataset)
    await obj.goTo();
    await obj.addAndDelete();
    //await page.pause()

})

example2test("example 4", async({page,dataset}) => {
    const obj =new Example2(page,dataset)
    await obj.goTo();
    await obj.dropDown();

})