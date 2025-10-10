import {test,chromium} from "@playwright/test";

test("webtable test automate",async()=>{
    const browser = await chromium.launch({headless:false});
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    await page1.goto("https://qavbox.github.io/demo/webtable/");

    const cell2_2 = page1.locator("//table[@id=\"table02\"]/tbody/tr[2]/td[2]")
    console.log(await cell2_2.textContent());
  
    const row2 = page1.locator("//table[@id=\"table02\"]/tbody/tr[2]/td")
    console.log(await row2.allTextContents());

    const col2 = page1.locator("//table[@id=\"table02\"]/tbody/tr/td[3]")
    console.log(await col2.allTextContents());

    const all = page1.locator("//table[@id=\"table02\"]/tbody/tr/td")
    console.log(await all.allTextContents());
    
})