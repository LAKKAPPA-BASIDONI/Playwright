const {test, expect}  = require("@playwright/test");

test("cricbuzz", async({page})=> {
    let playerName = 'Sai Sudharsan';


    await page.goto("https://www.cricbuzz.com/")
    await page.click('a[title="Live Cricket Score"]')
    await page.click('a[id="recent-tab"]');
    await page.click('div[class="cb-col"]>>nth=0')
    await page.click('a:text-is("Scorecard")')

    const name = (await page.locator('div[id="innings_1"] div div[class*="cb-scrd-itms"]').allInnerTexts());
    console.log(name);
     let nn1 = [];
     for(let i=0; i<name.length; i++){
        nn1[i] = name[i].split("\n")
     }
     console.log(nn1)
     console.log("specified player :::::::")
     for(let i=0; i<name.length;i++){
        if(nn1[i][0]== playerName){
            console.log(nn1[i])
        }
     }

     let r = await page.locator('div[class="cb-col cb-col-100 cb-scrd-sub-hdr cb-bg-gray"]').allInnerTexts();
     console.log(r)

     let batter = r[0].split("\n")
     let bowler = r[1].split("\n")
     console.log(batter +"::::::>>>"+bowler)

     console.log("specified player :::::::")
     for(let i=0; i<name.length;i++){
        if(nn1[i][0]== playerName){
            if(true){ //nn1[i].length == batter.length
                for(let k=0; k<batter.length; k++){
                    console.log(batter[k]+" :::: "+nn1[i][k])
                }

            }else if(nn1[i].length == bowler.length){
                for(let k=0; k<batter.length; k++){
                    console.log(bowler[k]+" :::: "+(k==1)?"out ":nn1[i][k])
                }

            }
            console.log(nn1[i])
        }
     }


     console.log(">.....>>>>>>>>>>>>>>>>>>>>>...................>>>>>>>>>>>>>>>>>>>>......")
     let hash = new Map()
     const rws = await page.locator('//div[@id="innings_1"]/div/div[@class="cb-col cb-col-100 cb-scrd-itms"]')
     for(let i=0; i<await rws.count()-3; i++){
        hash.set(await rws.locator('//div[1]').nth(i).innerText(),await rws.locator('//div[3]').nth(i).innerText())
        console.log(await rws.locator('//div[1]').nth(i).innerText()+"   ::::  "+await rws.locator('//div[3]').nth(i).innerText());
     }
    console.log("==================================================================")
     for(let i=1; i<=5;i++){
        let max = 0
        let kk;
        hash.forEach((values, keys)=>{
            
            if(max< +values){
                max = +values
                
                kk = keys;

            }

        })
        console.log(kk+" : "+hash.get(kk))
        hash.delete(kk)
     }
     console.log("----------------------------------------")
})

