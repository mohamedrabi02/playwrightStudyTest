export class SearchHome
{
    constructor(page)
    {
        this.page=page;
        this.locationSelector = page.locator("//select[@id='location']");
        this.searchBtn = page.locator("//input[@id='Submit']");
    }
    async selectOptionsFromDD(location){
        await this.locationSelector.selectOption({label:location});
        await this.searchBtn.click();
    }
}