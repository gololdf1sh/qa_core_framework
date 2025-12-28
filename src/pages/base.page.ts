import { expect, Locator, Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goToUrl(url: string) {
    const response = await this.page.goto(url);
    await this.page.waitForLoadState("domcontentloaded", { timeout: timeouts.longTimeout });

    if (!response) {
      throw new Error(`goToUrl: no response returned for url: ${url}`);
    }

    if (!response.ok()) {
      throw new Error(`goToUrl: navigation failed (HTTP ${response.status()}) for url: ${url}`);
    }

    await expect(this.page).toHaveURL(url);
  }

  async checkThatElementIsVisible(elementLocator: Locator, timeoutNumber: number) {
    await expect(elementLocator).toBeVisible({ timeout: timeoutNumber });
  }

  async checkThatElementIsNotVisible(elementLocator: Locator, timeoutNumber: number) {
    await expect(elementLocator).not.toBeVisible({ timeout: timeoutNumber });
  }

  async clickOnElement(elementLocator: Locator, timeoutNumber?: number) {
    await elementLocator.click({ delay: timeoutNumber });
    await this.page.waitForLoadState("domcontentloaded");
  }

  async checkThatElementContainExpectedText(elementLocator: Locator, expectedText: string, timeoutNumber?: number) {
    await expect(elementLocator).toContainText(expectedText, { timeout: timeoutNumber });
  }

  async checkThatElementDoesNotContainExpectedText(elementLocator: Locator, expectedText: string, timeoutNumber?: number) {
    await expect(elementLocator).not.toContainText(expectedText, { timeout: timeoutNumber });
  }

  async fillInputElement(elementLocator: Locator, textToFill: string) {
    await elementLocator.fill(textToFill);
  }

  async checkThatInputHasExpectedValue(elementLocator: Locator, expectedValue: string, timeoutNumber?: number) {
    await expect(elementLocator).toHaveValue(expectedValue, { timeout: timeoutNumber });
  }
}
