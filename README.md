# Playwright Automation - Banking Project 🚀

So.. this is a comprehensive end-to-end testing suite for a Demo Banking Application. In this Project my focus was to correctly implement **Page Object Model (POM)** to ensure test scalability, readability, and easy maintenance.

## 🛠 Technologies & Tools

* **Playwright** - Core test automation framework.
* **JavaScript** - Programming language.
* **Faker.js** - Used for generating dynamic test data (names, postcodes, etc.).
* **Page Object Model (POM)** - Architecture pattern separating test logic from UI locators.

## 📋 Testing Scope

The test suite covers critical business flows for the Manager role:
1.  **Customer Management**: Creating new customer profiles using dynamic data.
2.  **Account Operations**: Opening new accounts in different currencies (for created customers.)
3.  **Data Validation**: 
    * Verifying that new customers are correctly added to the database.
    * Ensuring account numbers are generated and displayed properly.
    * Validating that the table is updated in real-time.
4.  **Search & Filtering**: Testing the search functionality across multiple criteria (First Name, Last Name, Postcode).
5.  **Dynamic Deletion**: Finding and removing customers from the system using dynamic locators.

## 🏗 Project Structure

```text
├── tests/
│   └── manager/          # E2E functional tests
├── src/
│   └── pages/            # Page Object Model implementation
│       └── manager/      # Page classes (e.g., AddCustomerPage, CustomersListPage)
├── playwright.config.js  # Framework configuration
└── package.json          # Project dependencies and scripts


🚀 You can run it too!
Clone the repository:

Bash

git clone [https://github.com/konradtech2/Playwright-Automation-Banking-Project.git](https://github.com/konradtech2/Playwright-Automation-Banking-Project.git)
cd Playwright-Automation-Banking-Project
Install dependencies:

Bash

npm install
Run tests in headless mode:

Bash

npx playwright test
Launch interactive UI Mode:

Bash

npx playwright test --ui
🧠 Key Technical Features
Dynamic Locators: Instead of hardcoded values, the suite uses dynamic selectors that adapt to the data generated during the test execution.

Advanced Table Assertions: Utilizes Playwright's .last() and .nth() methods to precisely target data within dynamic tables, avoiding flaky ID-based selectors.

Clean Setup/Teardown: Uses beforeEach hooks to maintain a clean state for every test case.

Robust Assertions: Implements toBeEmpty() and not.toBeVisible() for reliable state verification.