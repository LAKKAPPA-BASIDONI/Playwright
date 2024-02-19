const {test, expect} = require('@playwright/test');

test("amazon", async ({page})=>{
    await page.goto('https://www.amazon.in/?&ext_vrnc=hi&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=58355126069&hvpone=&hvptwo=&hvadid=678711876615&hvpos=&hvnetw=g&hvrand=9483183872010389877&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9061997&hvtargid=kwd-10573980&hydadcr=14453_2371562');
    await page.locator('._fluid-quad-image-label-v2_style_fluidQuadImageLabelBody__3tld0')
    //https://github.com/LAKKAPPA-BASIDONI
    const bool = await page.evaluate(()=>{
        return document.documentElement.scrollHeight > window.innerHeight;
      
    })
    console.log(bool)
    //await page.pause();
    page.get
})

test.skip("focus element", async({page}) => {
    await page.goto("/");
    await page.waitForTimeout(3000)
    await page.locator('[id="twotabsearchtextbox"]').focus();
    await page.keyboard.press("Tab")
    //await page.pause()
})
