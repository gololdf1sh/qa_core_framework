import { expect, Locator, Page } from "@playwright/test";

export class CommonMethodsPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkThatElementIsVisible(elementLocator: Locator) {
    await expect(elementLocator).toBeVisible({ timeout: 3000 });
  }

  async checkThatElementIsNotVisible(elementLocator: Locator) {
    await expect(elementLocator).not.toBeVisible({ timeout: 3000 });
  }
}
