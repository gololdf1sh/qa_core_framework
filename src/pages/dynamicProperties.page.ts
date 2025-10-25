import { expect, Locator, Page } from "@playwright/test";

export class DynamicPropertiesPage {
  page: Page;
  readonly thisTextHasRandomId: Locator;
  readonly willEnableFiveSecondsButton: Locator;
  readonly colorChangeButton: Locator;
  readonly visibleAfterFiveSecondsButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.thisTextHasRandomId = this.page.locator("p", { hasText: "This text has random Id" });
    this.willEnableFiveSecondsButton = this.page.locator("#enableAfter");
    this.colorChangeButton = this.page.locator("#colorChange");
    this.visibleAfterFiveSecondsButton = this.page.locator("#visibleAfter");
  }

  async checkThatThisTextHasRandomIdIsVisible() {
    await expect(this.thisTextHasRandomId).toBeVisible({ timeout: 5000 });
  }

  async checkThatWillEnableFiveSecondsButtonIsVisible() {
    await expect(this.willEnableFiveSecondsButton).toBeVisible({ timeout: 5000 });
  }

  async checkThatColorChangeButtonIsVisible() {
    await expect(this.colorChangeButton).toBeVisible({ timeout: 5000 });
  }

  async checkThatVisibleAfterFiveSecondsButtonIsVisible() {
    await expect(this.visibleAfterFiveSecondsButton).toBeVisible({ timeout: 4900 });
  }

  async checkThatVisibleAfterFiveSecondsButtonIsNotVisible() {
    await expect(this.visibleAfterFiveSecondsButton).not.toBeVisible({ timeout: 100 });
  }

  async checkThatWillEnableFiveSecondsButtonIsDisabled() {
    await expect(this.willEnableFiveSecondsButton).toHaveAttribute("disabled", { timeout: 100 });
  }

  async checkThatWillEnableFiveSecondsButtonIsNotDisabled() {
    await expect(this.willEnableFiveSecondsButton).not.toHaveAttribute("disabled", { timeout: 4900 });
  }

  async takeColorOfColorChangeButtonAndCheckThatColorIsChangedAfterFiveSeconds() {
    const firstColor = await this.colorChangeButton.evaluate((el) => getComputedStyle(el).color);
    await this.page.waitForTimeout(5000);
    const changedColor = await this.colorChangeButton.evaluate((el) => getComputedStyle(el).color);
    expect(firstColor).not.toBe(changedColor);
  }
}
