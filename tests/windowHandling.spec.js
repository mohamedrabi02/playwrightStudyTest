import {test} from "@playwright/test";

test("windowHandling test",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/browser-windows");

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//button[@id=\"tabButton\"]")
    ]);

    const newPageHeading = newPage.locator("//h1[@id=\"sampleHeading\"]")
    console.log(await newPageHeading.textContent());
    
});