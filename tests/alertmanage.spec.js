import {test} from "@playwright/test";
//aaa
//bbb
//ccc
test("dynamicXpath test",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html");

    page.once("dialog",async(dialog)=>{
        console.log("Simple alert",dialog.message());
        await dialog.accept();
    })
    const clickbtn1 = page.locator("//button[@onclick='alertbox()']");
    await clickbtn1.click();

    const clicka2 = page.locator("//a[text()=\"Alert with OK & Cancel \"]");
    await clicka2.click();

    page.once("dialog",async(dialog)=>{
        console.log("Confirm alert",dialog.message());  
        await dialog.dismiss();
    })
    const clickbtn2 = page.locator("//button[@onclick='confirmbox()']");
    await clickbtn2.click();

    const clicka3 = page.locator("//a[text()=\"Alert with Textbox \"]");
    await clicka3.click();

    page.once("dialog",async(dialog3)=>{
        console.log("Prompt Message",dialog3.message());
        console.log("Popup Default Value",dialog3.defaultValue());
        await dialog3.accept("Message1");
    });
    const clickbtn3 = page.locator("//button[@onclick='promptbox()']");
    await clickbtn3.click();
})