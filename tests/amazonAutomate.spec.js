import {expect, test} from "@playwright/test";

test("automate amazon test",async({browser})=>{
  //const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    //const context2 = await browser.newContext();
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
    // await newPage.screenshot({path:"screenshot1/amazonAddToCart.png"})

    // context2 = await Promise.all([
    //     newPage.waitForEvent('page'),
    //     newPage.locator("//a[text()='Details']").click()
    // ])

  //   const [detailsContext] = await Promise.all([
  //   browser.waitForEvent("context"), // waits for a NEW window context
  //   newPage.locator("//a[text()='Details']").click(),
  // ]);

  // const detailsPage = await detailsContext.waitForEvent("page");
  // await detailsPage.waitForLoadState('domcontentloaded');
    
  // await detailsPage.locator("//a[@class='a-button a-button-primary same_window']").click();
  // await detailsPage.waitForLoadState('domcontentloaded');
    const proceedToBuy = await newPage.locator("//input[@name='proceedToRetailCheckout']");
    const textContentInButton = await proceedToBuy.inputValue();

    console.log(textContentInButton);

    expect(textContentInButton==="Proceed to checkout");
    
    // await page.bringToFront();

    // await newPage.close();

    // await page.waitForTimeout(3000);

});