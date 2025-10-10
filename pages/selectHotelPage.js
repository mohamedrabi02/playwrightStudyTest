export class selectHotel{
    constructor(page){
        this.page=page;
        this.radioSelect = page.locator("(//table[@class='login']//descendant::input)[1]")
        this.continueBtn = page.locator("//input[@id='continue']");
    }

    async selectHotelFromList(){
        await this.radioSelect.click();
        await this.continueBtn.click()
    }
}