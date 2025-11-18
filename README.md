[README.md](https://github.com/user-attachments/files/21976687/README.md)
# QA Core Framework

## Testomat.io
https://app.testomat.io/projects/qa_core_framework/

## Overview

**QA Core Framework** is a lightweight test automation framework built with **Playwright** and **TypeScript**.  
It is designed to test functionalities on [demoqa.com](https://demoqa.com), ensuring quality and stability through automated UI tests.  

The framework is modular, scalable, and easy to maintain, following **best practices** in test automation:
- Page Object Model (POM)
- Clear test organization by functionality
- Parallel execution of tests
- Retry logic for flaky tests

---

## Technologies

| Technology          | Description                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| **Playwright**      | Browser automation library for end-to-end testing                          |
| **TypeScript**      | A superset of JavaScript with type safety for more reliable code            |
| **Node.js**         | JavaScript runtime environment                                             |
| **Allure Reporter** | Generates detailed, visually rich test reports                             |
| **WebStorm**        | IDE used for development                                                   |

---

## Project Configuration

### 1. Install dependencies
```bash
npm install
```

### Check versions
```bash
node -v
npm -v
```

### 2. Environment variables
Create a `.env` file in the project root:
```bash
BASE_URL=https://demoqa.com
```

### 3. Playwright configuration (`playwright.config.ts`)
- Test directory: `./tests`  
- Timeout: `30_000 ms` per test  
- Reporters: `Allure` and `HTML`  
- Retries on failure: `2`  
- Parallel execution: `4` workers by default  
- Base URL: from `.env`  

---

## Running Tests

### 1. Run all tests (headless mode)
```bash
npx playwright test
```

### 2. Run tests with UI (headed mode)
```bash
npx playwright test --headed
```

### 3. Run a specific test file
```bash
npx playwright test tests/textBox.spec.ts
```

---

## Viewing Reports

### 1. Allure reports

Generate:
```bash
npx allure generate allure-results --clean -o allure-report
```

Open:
```bash
npx allure open allure-report
```

### 2. Playwright HTML report

Open built-in HTML report:
```bash
npx playwright show-report
```

---

## Project Structure

```
qa_core_framework/
├── src/
│   ├── pages/            # Page Object classes
│   ├── data/             # Test data
│   ├── types/            # TypeScript types
│   └── api-controllers/  # API utilities (reserved for future use)
├── tests/                # Test specifications
├── playwright.config.ts  # Playwright configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── allure-results/       # Raw Allure results
└── README.md             # Project documentation
```

---

## Troubleshooting

If browsers are not installed:
```bash
npx playwright install
```

Clear cache and reinstall dependencies:
```bash
rm -rf node_modules
npm cache clean --force
npm install
```

---

✅ **Author**: Oleksandr Kiriukhin  
