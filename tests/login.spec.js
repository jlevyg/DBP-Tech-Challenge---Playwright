const { test, expect } = require('@playwright/test');
const HomePage = require("../pages/homePage.js");


test.describe('Login functionality', () => {  
test('User can login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page); 

    // 1. Navigate to the Demo Blaze homepage
    await page.goto('https://www.demoblaze.com/index.html');
    // 2. Open the login modal
    await homePage.openLoginModal();
    // 3. Provide a valid username
    await homePage.provideUserName();
    // 4. Provide a valid password
    await homePage.providePassword();
    // 5. Click the login button
    await homePage.clickLoginButton();
    // 6. Verify successful login by checking for logout element
    await homePage.verifyLogout();
  });
});

module.exports = {};