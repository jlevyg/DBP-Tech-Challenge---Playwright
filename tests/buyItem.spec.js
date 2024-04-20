const { test, expect } = require('@playwright/test');
const HomePage = require("../pages/homePage.js");
const CartPage = require("../pages/cartPage.js");
const ProductPage = require("../pages/productPage.js");

test.describe('Add an item to the cart and make the purchase', () => {  
    test('User can add an item to the cart, go to cart and place the order', async ({ page }) => {
        const homePage = new HomePage(page); 
        const cartPage = new CartPage(page);
        const productPage = new ProductPage(page);


        // 1. Navigate to Demo Blaze homepage
        await page.goto('https://www.demoblaze.com/index.html');
        // 2. Select an item on the homepage (implementation in HomePage.js)
        await homePage.selectItem();
        // 3. Go to the product page and add the item to the cart (implementation in ProductPage.js)
        await productPage.addToCartItem();
        // 4. Navigate to the cart page (implementation in ProductPage.js)
        await productPage.goToCart();
        // 5. Validate the added item in the cart (implementation in CartPage.js)
        await cartPage.validateCartItem();
        // 6. Click the "Place Order" button (implementation in CartPage.js)
        await cartPage.clickPlaceOrder();
        // 7. Fill out the purchase form (implementation in CartPage.js)
        await cartPage.fillPurchaseForm();
        // 8. Click the "Purchase" button (implementation in CartPage.js)
        await cartPage.clickPurchase();
        // 9. Validate the successful purchase toast message (implementation in CartPage.js)
        await cartPage.validateToastMessage();
      });
    });