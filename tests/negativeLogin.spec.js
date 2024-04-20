const { test, expect } = require('@playwright/test');
const HomePage = require("../pages/homePage.js");


test.describe('Login functionality - negative flow', () => {  
test('User get a prompt indicating the password is wrong', async ({ page }) => {
    const homePage = new HomePage(page); 
    
    // 1. Navigate to the Demo Blaze homepage
    await page.goto('https://www.demoblaze.com/index.html');
    // 2. Open the login modal
    await homePage.openLoginModal();
    // 3. Provide a valid username
    await homePage.provideUserName();
    // 4. Fill the password field with an incorrect password
    await homePage.userPassword.fill("ADMIN01");
    // 5. Click the login button to trigger the prompt
    await homePage.clickLoginButton();
    // 6. Wait for the JavaScript prompt to appear
    const dialog = await page.waitForEvent('dialog'); 
    // 7. validate the prompt indicating the password is wrong
    await homePage.handlePrompt(dialog);

  });
});

  module.exports = {};