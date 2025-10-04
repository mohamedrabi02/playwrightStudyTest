import {test} from "@playwright/test";

test("dynamicXpath test",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");

    const search = page.locator("//input[@id='twotabsearchtextbox']");
    await search.fill("Computers");

    const searchBtn = page.locator("//input[@id='nav-search-submit-button']");
    await searchBtn.click();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("((//div[@class=\"a-section a-spacing-small a-spacing-top-small\"])[4]//descendant::a)[1]").click()
    ]);

    const addToCartBtn = newPage.locator("#add-to-cart-button");
    await addToCartBtn.click();

    await newPage.waitForLoadState('domcontentloaded');
    await newPage.screenshot({path:"screenshot1/amazonAddToCart.png"})
    //await page.waitForTimeout(3000);

    await page.bringToFront();

    await newPage.close();

    await page.waitForTimeout(3000);

});