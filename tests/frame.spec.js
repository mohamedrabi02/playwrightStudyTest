import {test} from "@playwright/test";

test("dynamicXpath test",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html");

    const frame1 = page.frameLocator("//iframe[@id=\"singleframe\"]")
    const textinframe = frame1.locator("//input[@type=\"text\"]");
    await textinframe.fill("located ur text input")
    console.log("text in input : ",await textinframe.inputValue());

    const framepage2 = page.locator("//a[text()=\"Iframe with in an Iframe\"]");
    await framepage2.click();
    
});