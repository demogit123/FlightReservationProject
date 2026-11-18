import { Before } from "@cucumber/cucumber";
import { TestContext } from "./testcontext";
import { chromium } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

Before(async function(this:TestContext){

    this.browser = await chromium.launch({headless:false})
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
    this.loginpage = new LoginPage(this.page) 
       

})