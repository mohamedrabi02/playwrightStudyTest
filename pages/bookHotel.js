export class bookHotel{
    constructor(page){
        this.page=page;
        this.firstName=page.locator("//input[@id='first_name']");
        this.lastName=page.locator("//input[@id='last_name']");
        this.billingAddress=page.locator("//textarea[@id='address']");
        this.cardNo=page.locator("//input[@id='cc_num']");
        this.cardType=page.locator("//select[@id='cc_type']");
        this.expDateMonth =page.locator("//select[@id='cc_exp_month']");
        this.expDateYear=page.locator("//select[@id='cc_exp_year']");
        this.cvvNo=page.locator("//input[@id='cc_cvv']");
        this.bookNowBtn = page.locator("//input[@id='book_now']");
    }

    async fillExtraDetailsAndBook(fName,lName,bAddress,cardNumber,CvvNumber){
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.billingAddress.fill(bAddress);
        await this.cardNo.fill(cardNumber);
        await this.cardType.selectOption({label:"American Express"});
        await this.expDateMonth.selectOption({label:"January"});
        await this.expDateYear.selectOption({label:"2012"});
        await this.cvvNo.fill(CvvNumber);
        await this.bookNowBtn.click();
    }
}