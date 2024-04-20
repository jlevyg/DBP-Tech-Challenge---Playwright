const { test, expect } = require('@playwright/test');
const HomePage = require("../pages/homePage.js");


test.describe('Verify the existing categories', () => {  
test('verify the existing categories', async ({ page }) => {
  const homePage = new HomePage(page);

  // Navigate to DemoBlaze homepage
  await page.goto('https://www.demoblaze.com/index.html');
  // Get category text content
  const categoryTexts = await homePage.getCategoryTexts();
  // Log the identified categories for verification
  console.log('Identified categories:');
  console.log(categoryTexts);
  });
});

  module.exports = {};