const { expect } = require('@playwright/test');

class CartPage{
    
    // Locators

    constructor(page){
        this.page = page
        this.deleteLink = page.locator(':text("Delete")')
        this.placeOrderButton = page.locator('button:text("Place Order")')
        this.nameField = page.locator('id=name')
        this.countryField = page.locator('id=country')
        this.cityField = page.locator('id=city')
        this.cardField = page.locator('id=card')
        this.monthField = page.locator('id=month')
        this.yearField = page.locator('id=year')
        this.purchaseButton = page.locator('button:text("purchase")')
        this.toastMessage = page.locator('h2:text("Thank you for your purchase!")')

    }

    // Interactions


    async validateCartItem(){
        await expect(this.deleteLink).toBeVisible();
    }

    async clickPlaceOrder(){
        await this.placeOrderButton.click();
    }

    async fillPurchaseForm(){
        await this.nameField.fill("DBP Test");
        await this.countryField.fill("Chile");
        await this.cityField.fill("Santiago");
        await this.cardField.fill("4000000000001000");
        await this.monthField.fill("11");
        await this.yearField.fill("2026");
    }

    async clickPurchase(){
        await this.purchaseButton.click();
    }

    async validateToastMessage(){
        await expect(this.toastMessage).toBeVisible();
    }





}

module.exports = CartPage;