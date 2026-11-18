import { setWorldConstructor, World  } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';


export class TestContext extends World  {
        browser!:Browser;
        context!:BrowserContext;
        page!:Page;
        loginpage!:LoginPage 
        
}setWorldConstructor(TestContext);