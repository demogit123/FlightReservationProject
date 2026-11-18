import { Page , Locator ,expect} from "@playwright/test";

export class LoginPage{
    page:Page
    loginButton:Locator
    Username:Locator
    Password:Locator
    adminlink:Locator
    welcomeLink:Locator
    LogoutLink:Locator
    ErrorMessage:Locator
      
    constructor(page:Page)
    {
        this.page=page;
        this.loginButton = page.getByRole('button',{ name:'LOGIN',exact: true})
        this.Username = page.locator("#txtUsername")
        this.Password = page.locator("#txtPassword")
        this.adminlink=page.getByRole('link', { name:'Admin'})
        this.welcomeLink=page.getByRole('link', { name:'Welcome'})
        this.LogoutLink=page.getByRole('link', { name:'Logout'})
        this.ErrorMessage=page.locator('#spanMessage')
    }
    async isLoginPageDisplayed():Promise<void>
    {
        await expect(this.loginButton).toBeVisible()
    }
    async enterUsername(username:string):Promise<void>
    {
        await this.Username.fill(username);
        
    }
    async enterPassword(password:string):Promise<void>
    {
        await this.Password.fill(password);
    
    }
    async clickOnLoginButton():Promise<void>
    {
        await this.loginButton.click();
    }
    async isHomePageDisplayed():Promise<void>
    {
        await expect(this.adminlink).toBeVisible()
    }
    async clickOnWelcomeLink():Promise<void>
    {
        await this.welcomeLink.click();
    }
    async clickOnLogoutButton():Promise<void>
    {
        await this.LogoutLink.click();
    }
    
    async verifyErrorMessage(expected: string) 
    {
        await expect(this.ErrorMessage).toContainText(expected);
    }
}