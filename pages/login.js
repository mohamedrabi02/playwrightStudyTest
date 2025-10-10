export class loginPage{
    constructor(page)
    {
        this.page=page;
        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password']");
        this.loginBtn = page.locator("//input[@id='login']");
    }

    async navigate()
    {
        await this.page.goto("https://www.adactinhotelapp.com/")
    }

    async login(userName,pwd){
        await this.username.fill(userName);
        await this.password.fill(pwd);
        await this.loginBtn.click()
        //Ravitheja312,Ravi@312
    }
}