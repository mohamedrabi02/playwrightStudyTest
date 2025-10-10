import {chromium,test} from "@playwright/test";
import { loginPage } from "../pages/login";
import { SearchHome } from "../pages/searchPage";
import { selectHotel } from "../pages/selectHotelPage";
import { bookHotel } from "../pages/bookHotel";

test("adactin pom",async({browser})=>{
    //const context1 = await chromium.launch({headless:false});
    const page1 = await browser.newPage();

    const loginClassA = new loginPage(page1);
    const searchPageA = new SearchHome(page1);
    const selectHotelA = new selectHotel(page1);
    const bookHotelA = new bookHotel(page1);


    await loginClassA.navigate();
    await loginClassA.login("Rabitemp002","Rabi@002"); 
    await searchPageA.selectOptionsFromDD("Sydney");
    await selectHotelA.selectHotelFromList();
    await bookHotelA.fillExtraDetailsAndBook("John","Doe","12,washington st,chennai-16.","378282246310005","466")

    //await page1.waitForTimeout(5000);
    
})