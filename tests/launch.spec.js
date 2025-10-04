import {expect, test} from "@playwright/test"

test("launch browser",async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.reload();
    const selectDept =  page.locator("//select[@id='searchDropdownBox']");
    await selectDept.selectOption({label:"Electronics"});
    const search = await page.locator("//input[@id='twotabsearchtextbox']");
    await search.fill("Mobiles");
    const selectFinal = await selectDept.locator("Option:Checked").textContent();
    const searchBtn = await page.locator("//input[@id='nav-search-submit-button']");
    await searchBtn.click();
    //await page.waitForTimeout(5000);
    // const filterDD = await page.locator("//select[@name='s']");
    // await filterDD.selectOption([{label:"Newest Arrivals"}]);
    //Price: High to Low
    await page.waitForTimeout(5000);
    //await page.goBack();
    const a =await page.url();
    console.log(a);
    console.log(selectFinal);
    
    //await expect(page).toHaveURL("https://www.amazon.com/")
    //await expect(page).toHaveTitle("Amazon.com. Spend less. Smile more.")
    // const search = await page.locator("//input[@id='twotabsearchtextbox']");
    // await search.fill("Mobiles");
    // const searchBtn = await page.locator("//input[@id='nav-search-submit-button']");
    // await searchBtn.click();
    // const searchPageUrl = await page.url();
    // console.log(searchPageUrl);
    // const title =await page.title()
    // console.log(title);
})