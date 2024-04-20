const { expect } = require('@playwright/test');

class ProductPage{
    
    // Locators

    constructor(page){
        this.page = page
        this.addToCartButton = page.locator('.btn:text("Add to cart")')
        this.goToCartLink = page.locator('.nav-link:text("Cart")')
        this.deleteLink = page.locator(':text("Delete")')
        this.placeOrderButton = page.locator('button:text("Place Order")')
    
    }

    // Interactions

    async addToCartItem(){
        await this.addToCartButton.click();
    }

    async goToCart(){
        await this.goToCartLink.click();
    }
}

module.exports = ProductPage;