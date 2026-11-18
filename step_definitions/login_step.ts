import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { TestContext } from '../support/testcontext';

setDefaultTimeout(30_000);

Given('User Open Browser with URL {string}', async function (this: TestContext, url: string) {
  await this.page.goto(url);
});

When('User should see login page.', async function (this: TestContext) {
  await this.loginpage.isLoginPageDisplayed();
});

Then('User enter valid username as {string}', async function (this: TestContext, username: string) {
  await this.loginpage.enterUsername(username);
});

Then('User enter valid username password as {string}', async function (this: TestContext, password: string) {
  await this.loginpage.enterPassword(password);
});

Then('User click on login button.', async function (this: TestContext) {
  await this.loginpage.clickOnLoginButton();
});

Then('User should see home page.', async function (this: TestContext) {
  await this.loginpage.isHomePageDisplayed();
});

Then('User click on logout button.', async function (this: TestContext) {
  await this.loginpage.clickOnWelcomeLink();
  await this.loginpage.clickOnLogoutButton();
});

Then('User enter username as {string}', async function (this: TestContext, username: string) {
  await this.loginpage.enterUsername(username);
});

Then('User enter password as {string}', async function (this: TestContext, password: string) {
  await this.loginpage.enterPassword(password);
});

Then('User should see error message {string}', async function (this: TestContext, expectedMessage: string) {
  await this.loginpage.verifyErrorMessage(expectedMessage);
});