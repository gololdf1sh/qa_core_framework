# QA Core Framework

## Overview

**QA Core Framework** is a comprehensive, lightweight test automation framework designed for end-to-end (e2e) testing of web applications. Built using **Playwright** and **TypeScript**, this framework focuses on testing functionalities available on [demoqa.com](https://demoqa.com), a popular demo site for practicing automation testing.

The framework emphasizes modularity, scalability, maintainability, and adherence to best practices in test automation. It incorporates the Page Object Model (POM) design pattern, structured test data management, and robust reporting capabilities to ensure high-quality, reliable automated tests.

### Key Features
- **Page Object Model (POM)**: Encapsulates page elements and actions for better code organization and reusability.
- **Type-Safe Development**: Leverages TypeScript for enhanced code reliability and developer experience.
- **Parallel Test Execution**: Supports running tests in parallel to reduce execution time.
- **Retry Logic**: Built-in retries for handling flaky tests.
- **Comprehensive Reporting**: Integrates Allure and Playwright HTML reports for detailed test results.
- **CI/CD Integration**: Configured for seamless integration with Testomat.io and other CI/CD pipelines.
- **Linting and Formatting**: Includes ESLint and Prettier for code quality enforcement.
- **Git Hooks**: Uses Husky and lint-staged for pre-commit quality checks.

## Technologies Used

| Technology             | Version | Description |
|------------------------|---------|-------------|
| **Playwright**         | 1.57.0  | Browser automation library for reliable e2e testing across multiple browsers. |
| **TypeScript**         | 5.9.3   | Superset of JavaScript providing static typing for better code quality. |
| **Node.js**            | Latest  | JavaScript runtime environment. |
| **Allure Reporter**    | 3.4.4   | Generates visually rich, detailed test reports. |
| **Testomat.io**        | 2.5.2   | Test management and reporting platform. |
| **ESLint**             | 9.39.2  | Linting tool for identifying and fixing code issues. |
| **Prettier**           | 3.7.4   | Code formatter for consistent styling. |
| **Husky**              | 9.1.7   | Git hooks manager for pre-commit checks. |
| **Faker.js**           | 10.2.0  | Library for generating fake test data. |
| **Visual Studio Code** | -       | Recommended IDE for development. |

## Project Structure

```
qa_core_framework/
├── src/
│   ├── index.ts                          # Main application class exporting page objects
│   ├── api-controllers/
│   │   └── index.ts                      # Reserved for future API testing utilities
│   ├── config/
│   │   └── timeouts.ts                   # Timeout configurations
│   ├── data/
│   │   ├── index.ts                      # Exports all test data
│   │   ├── buttonsExerciseData.ts        # Test data for buttons exercise
│   │   ├── checkBoxData.ts               # Test data for checkbox exercise
│   │   ├── linksExerciseData.ts          # Test data for links exercise
│   │   ├── navigationData.ts             # Navigation-related test data
│   │   ├── radioButtonData.ts            # Test data for radio buttons
│   │   ├── textBoxData.ts                # Test data for text box inputs
│   │   └── webTablesUsersData.ts         # Test data for web tables
│   ├── files/                            # Directory for test files (uploads, etc.)
│   ├── pages/
│   │   ├── index.ts                      # Exports all page object classes
│   │   ├── base.page.ts                  # Base page class with common methods
│   │   ├── buttons.page.ts               # Page object for buttons functionality
│   │   ├── checkBox.page.ts              # Page object for checkboxes
│   │   ├── dynamicProperties.page.ts     # Page object for dynamic properties
│   │   ├── links.page.ts                 # Page object for links
│   │   ├── navigation.page.ts            # Navigation page object
│   │   ├── radioButton.page.ts           # Page object for radio buttons
│   │   ├── textBox.page.ts               # Page object for text boxes
│   │   ├── uploadAndDownload.page.ts     # Page object for file operations
│   │   ├── webTables.page.ts             # Page object for web tables
│   │   └── webTablesRegistrationFormModal.page.ts # Modal for web tables registration
│   ├── scripts/
│   │   └── cleanup.ts                    # Cleanup scripts
│   └── types/
│       ├── index.ts                      # Exports all TypeScript types
│       ├── buttonsExerciseData.types.ts  # Types for buttons data
│       ├── checkBoxData.types.ts         # Types for checkbox data
│       ├── navigationData.types.ts       # Types for navigation data
│       ├── radioButtonData.types.ts      # Types for radio button data
│       ├── textBoxData.types.ts          # Types for text box data
│       └── webTablesUsersData.types.ts   # Types for web tables data
├── tests/
│   └── e2e/
│       ├── exercises/
│       │   ├── buttons/
│       │   │   └── buttons.spec.ts       # Test specs for buttons
│       │   ├── checkBox/
│       │   │   └── checkBox.spec.ts      # Test specs for checkboxes
│       │   ├── dynamicProperties/
│       │   │   └── dynamicProperties.spec.ts # Test specs for dynamic properties
│       │   ├── links/
│       │   │   └── links.spec.ts         # Test specs for links
│       │   ├── radioButton/
│       │   │   └── radioButton.spec.ts   # Test specs for radio buttons
│       │   ├── textBox/
│       │   │   └── textBox.spec.ts       # Test specs for text boxes
│       │   ├── uploadAndDownload/
│       │   │   └── uploadAndDownload.spec.ts # Test specs for file operations
│       │   └── webTables/
│       │       └── webTables.spec.ts     # Test specs for web tables
│       └── navigation/
│           └── navigation.spec.ts        # Navigation tests
├── .env                                  # Environment variables (not committed)
├── eslint.config.mjs                    # ESLint configuration
├── lint-staged.config.mjs               # Lint-staged configuration
├── package.json                         # Project dependencies and scripts
├── playwright.config.ts                 # Playwright test configuration
├── README.md                            # This file
├── tsconfig.json                        # TypeScript configuration
└── .husky/                              # Git hooks (created by Husky)
```

## Installation and Setup

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git** for version control

### 1. Clone the Repository
```bash
git clone https://github.com/My-AQA-Frameworks/qa_core_framework.git
cd qa_core_framework
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Playwright Browsers
```bash
npx playwright install
```

### 4. Environment Configuration
Create a `.env` file in the project root with the following variables:
```bash
BASE_URL=https://demoqa.com
TESTOMATIO=<your-testomat-api-key>  # Optional, for Testomat.io integration
```

### 5. Verify Installation
Check versions to ensure everything is set up correctly:
```bash
node -v
npm -v
npx playwright --version
```

## Usage

### Running Tests

#### Run All Tests (Headless Mode)
```bash
npm test
# or
npx playwright test
```

#### Run Tests with Browser UI (Headed Mode)
```bash
npx playwright test --headed
```

#### Run Specific Test File
```bash
npx playwright test tests/e2e/exercises/textBox/textBox.spec.ts
```

#### Run Tests by Tag
```bash
npx playwright test --grep "@T0e4f7d50"
```

#### Debug Mode
```bash
npm run debug
# or
npx playwright test --debug
```

#### Run Tests for Testomat.io
```bash
npm run test:tm
```

### Viewing Test Reports

#### Allure Reports
Generate and open Allure report:
```bash
npm run report:allure
# or manually:
# npx allure generate ./allure-results --clean -o allure-report
# npx allure open allure-report
```

#### Playwright HTML Report
```bash
npx playwright show-report
```

## Framework Architecture

### Page Object Model (POM)
The framework uses POM to separate test logic from page-specific code. Each page has its own class in `src/pages/` that encapsulates:
- Page elements (locators)
- Actions (methods)
- Assertions

Example from `src/pages/textBox.page.ts`:
```typescript
export class TextBoxPage extends BasePage {
  // Locators
  private fullNameInput = this.page.locator("#userName");
  private emailInput = this.page.locator("#userEmail");
  // ... more locators

  // Actions
  async fillTextBoxInputs(data: TextBoxInputs) {
    await this.fullNameInput.fill(data.fullName);
    await this.emailInput.fill(data.email);
    // ... fill other fields
  }
}
```

### Test Data Management
Test data is centralized in `src/data/` with TypeScript types in `src/types/`. This ensures:
- Reusable test data
- Type safety
- Easy maintenance

### Application Class
The main `Application` class in `src/index.ts` provides a single entry point for all page objects:
```typescript
export class Application extends BasePage {
  navigation = new NavigationPage(this.page);
  textBox = new TextBoxPage(this.page);
  // ... other pages
}
```

### Test Structure
Tests follow a consistent structure:
```typescript
test.describe("'Text Box' exercise", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);
    // Setup steps
  });

  test("Check Text Box positive scenario", async () => {
    // Test steps using app.pageObject.method()
  });
});
```

## Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Test Directory**: `./tests`
- **Timeout**: 30,000 ms per test
- **Retries**: 1 on failure
- **Parallel Workers**: 4 by default
- **Base URL**: From environment variable
- **Reporters**: Allure, HTML, List, Blob, Testomat.io
- **Screenshots**: Only on failure
- **Traces**: Always on
- **Videos**: Retained on failure

### TypeScript Configuration (`tsconfig.json`)
- Target: ES2022
- Module: ESNext
- Strict type checking enabled
- Decorators and experimental features supported

### Linting and Formatting
- **ESLint**: Configured with TypeScript and Prettier plugins
- **Prettier**: Code formatting rules
- **Husky**: Pre-commit hooks for linting
- **lint-staged**: Run linters on staged files

## Adding New Tests

### 1. Create Test Data (if needed)
Add data to `src/data/` and types to `src/types/`:
```typescript
// src/data/newFeatureData.ts
export const newFeatureData = {
  validInput: "test input",
  // ...
};

// src/types/newFeatureData.types.ts
export interface NewFeatureInputs {
  input: string;
}
```

### 2. Create Page Object
Add a new page class in `src/pages/`:
```typescript
// src/pages/newFeature.page.ts
export class NewFeaturePage extends BasePage {
  private inputField = this.page.locator("#input");

  async fillInput(value: string) {
    await this.inputField.fill(value);
  }
}
```

### 3. Update Application Class
Add the new page to `src/index.ts`:
```typescript
export class Application extends BasePage {
  // ... existing pages
  newFeature = new NewFeaturePage(this.page);
}
```

### 4. Create Test Spec
Add test file in `tests/e2e/exercises/`:
```typescript
// tests/e2e/exercises/newFeature/newFeature.spec.ts
import { test } from "@playwright/test";
import { Application } from "../../../../src";

test.describe("'New Feature' exercise", () => {
  let app: Application;

  test.beforeEach(async ({ page }) => {
    app = new Application(page);
    // Navigation setup
  });

  test("Check New Feature functionality", async () => {
    await app.newFeature.fillInput("test");
    // Assertions
  });
});
```

## CI/CD Integration

### Testomat.io
The framework is integrated with Testomat.io for test management:
- Test results are automatically uploaded
- Test cases are synchronized
- Reports are available in the Testomat.io dashboard

### GitHub Actions (Recommended)
Example workflow for CI:
```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install
      - run: npm test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: test-results
          path: test-results/
```

## Troubleshooting

### Common Issues

#### Browsers Not Installed
```bash
npx playwright install
```

#### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### Environment Variables Not Loaded
Ensure `.env` file exists and contains required variables.

#### Tests Failing Due to Timeouts
Increase timeouts in `src/config/timeouts.ts` or `playwright.config.ts`.

#### Allure Report Not Generating
Ensure `allure-results` directory exists and has write permissions.

### Debugging Tips
- Use `--debug` flag for step-by-step execution
- Enable traces and videos in config for failure analysis
- Check browser console logs in headed mode
- Use Playwright's codegen for locator assistance:
  ```bash
  npx playwright codegen https://demoqa.com
  ```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes and add tests
4. Run linting: `npm run lint`
5. Run tests: `npm test`
6. Commit changes: `git commit -m "Add new feature"`
7. Push to branch: `git push origin feature/new-feature`
8. Create a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author

**Oleksandr Kiriukhin**

## Acknowledgments

- [Playwright](https://playwright.dev/) for the excellent testing framework
- [demoqa.com](https://demoqa.com) for providing a comprehensive testing playground
- [Testomat.io](https://testomat.io) for test management integration
- [Allure](https://docs.qameta.io/allure/) for beautiful test reporting

---

For more information, visit the [Testomat.io Project](https://app.testomat.io/projects/qa_core_framework/).  
