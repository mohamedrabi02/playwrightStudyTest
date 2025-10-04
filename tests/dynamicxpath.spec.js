import {test} from "@playwright/test";

test("dynamicXpath test",async({page})=>{
    await page.goto("https://www.amazon.com/");
    await page.reload();
    const navbara1 = page.locator("//a[text()=\"Today's Deals\"]");
    const navbara2 = page.locator("(//div[@class='nav-div'])[4]//child::a");
    const navbara3 = page.locator("//a[text()=\"Prime Video\"]//ancestor::li//following-sibling::li//descendant::a[text()=\"Gift Cards\"]");
    
    //---using relative locator----------------------------------------------------------------------------
    await navbara1.click();
    await page.waitForTimeout(3000);
    await page.goBack();

    //----using relative indexing and child------------------------------------------------------------------
    await navbara2.click();
    await page.waitForTimeout(3000);
    await page.goBack();

    //-----------using dynamic xpath(ansector, following sibling, descendant)----------------------------------
    await navbara3.click();
    await page.waitForTimeout(3000);
})