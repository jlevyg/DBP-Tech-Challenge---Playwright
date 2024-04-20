const { test, expect } = require('@playwright/test');
const HomePage = require("../pages/homePage.js");
const CartPage = require("../pages/cartPage.js");
const ProductPage = require("../pages/productPage.js");

test.describe('Fill in the user data form and edit it', () => {  
    test('user can fill in data and then edit', async ({ page }) => {
        const homePage = new HomePage(page); 
        const cartPage = new CartPage(page);
        const productPage = new ProductPage(page);
        // 1. Navigate to the DemoBlaze homepage
        await page.goto('https://www.demoblaze.com/index.html');
        // 2. Select an item
        await homePage.selectItem();
        // 3. Add item the cart
        await productPage.addToCartItem();
        // 4. Navigate to the cart page
        await productPage.goToCart();
        // 5. Verify the added item is present in the cart
        await cartPage.validateCartItem();
        // 6. Initiate the checkout process
        await cartPage.clickPlaceOrder();
        // 7. Populate the purchase form with user data
        await cartPage.fillPurchaseForm();
        // 8. Simulate a short wait to give time to check the data
        await page.waitForTimeout(2000);
        // 9. Edit user data fields
        await cartPage.nameField.fill("DBP Edited Name");
        await cartPage.countryField.fill("Argentina (edited)");
        await cartPage.cityField.fill("Buenos Aires (edited)");
        // 10. Simulate a short wait to give time to check the data
        await page.waitForTimeout(3000);
      });
    });