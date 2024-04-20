## DBP Automation Challenge - Playwright

This project is a technical challenge for DBP, automating functionalities on the DemoBlaze website ([https://www.demoblaze.com/](https://www.demoblaze.com/)). It utilizes Playwright, JavaScript, and the Page Object Model (POM) design pattern for efficient test structure.

**Setup:**

* **Environment:** The project was set up and tested on a local development machine. Node.js and npm were required prerequisites.
* **Playwright Configuration:** The `playwright.config.js` file was modified to run tests only on the Chromium browser to optimize execution time.

**Technologies:**

* **Playwright:** A powerful test automation framework for web applications.
* **JavaScript:** The primary scripting language for interacting with the web page elements.
* **Page Object Model (POM):** A design pattern for organizing test automation code by separating page UI interactions from test logic, promoting reusability and maintainability.

**Features:**

* This project demonstrates the ability to automate basic interactions on DemoBlaze, such as:
    * Navigating to the homepage.
    * Identifying existing categories (potentially expandable).
    * Buying an Item
    * Login Functionality

**Future Enhancements:**

* **Random Data Generation:** While not implemented in this submission due to time constraints, incorporating a library like `faker.js` would allow for generating random user data for testing registration, login, and purchase functionalities.
* **Additional Test Cases:** The project can be extended to cover a wider range of functionalities on DemoBlaze, including product search, adding items to cart, and checkout processes.

**Running the Tests:**

1. Ensure you have Node.js and npm installed on your machine.
2. Clone this repository.
3. Open a terminal in the project directory.
4. Install dependencies: `npm install`
5. Run the tests: `npx playwright test`

**Note:** This project serves as a basic demonstration of Playwright and POM for automating DemoBlaze interactions. It can be further expanded upon to include more comprehensive test coverage.
