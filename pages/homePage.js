const { expect } = require('@playwright/test');

class HomePage {

    // Locators

    constructor(page){
        this.page = page
        this.loginModal = page.locator('id=login2')
        this.userName = page.locator('id=loginusername')
        this.userPassword = page.locator('id=loginpassword')
        this.loginButton = page.locator('button:text("Log In")')
        this.logoutButton = page.locator('#logout2')
        this.categories = page.locator('.col-lg-3 a')
        this.nexus6 = page.locator('.hrefch:text("Nexus 6")')

        // Add listener for dialog events (including prompts)
    this.page.on('dialog', dialog => {
        // Assert the prompt message and handle it
        this.handlePrompt(dialog);
      });
    
    }

    // Interactions
    
    // open login modal
    async openLoginModal(){
        await this.loginModal.click();
    }

    // type username
    async provideUserName(){
        await this.userName.fill("admin")
    }

    // type password
    async providePassword (){
        await this.userPassword.fill("admin")
    }

    // click login button
    async clickLoginButton(){
        await this.loginButton.click();
    }

    // verify logout 
    async verifyLogout(){
        await expect(this.logoutButton).toBeVisible();
    }

    async getCategoryTexts() {
        const categoryElements = await this.categories.all();
        const categoryTexts = [];
        for (const element of categoryElements) {
          const text = await element.innerText();
          categoryTexts.push(text.trim()); // Remove extra spaces
        }
        return categoryTexts;
      }
    

     async selectItem(){
        await this.nexus6.click();
     }

     async handlePrompt(dialog) {
        const promptText = dialog.message();
        expect(promptText).toContain('Wrong password.');
      }
    



}

module.exports = HomePage;