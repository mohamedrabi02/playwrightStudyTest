import {chromium,test} from "@playwright/test";

test("get attribute", async({browser})=>{
    var context = await browser.newContext();
    var page = await context.newPage();

    await page.goto("https://www.amazon.in/");
    var temp = await page.locator("//input[@name=\"dropdown-selection\"]");

    const inputattributes = await temp.evaluate(el => {
    const attrs = {};
    for (const { name, value } of el.attributes) {
        attrs[name] = value;
    }
    return attrs;
    });

    console.log(inputattributes);
    
})