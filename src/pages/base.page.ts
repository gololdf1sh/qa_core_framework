import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkThatElementIsVisible(elementLocator: Locator, timeoutNumber: number) {
    await expect(elementLocator).toBeVisible({ timeout: timeoutNumber });
  }

  async checkThatElementIsNotVisible(elementLocator: Locator, timeoutNumber: number) {
    await expect(elementLocator).not.toBeVisible({ timeout: timeoutNumber });
  }
}
