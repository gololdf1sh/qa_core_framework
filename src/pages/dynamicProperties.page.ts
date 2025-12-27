import { expect, Locator, Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "./base.page";

export class DynamicPropertiesPage extends BasePage {
  readonly page: Page;

  readonly thisTextHasRandomId: Locator;
  readonly willEnableFiveSecondsButton: Locator;
  readonly colorChangeButton: Locator;
  readonly visibleAfterFiveSecondsButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.thisTextHasRandomId = this.page.locator("p", { hasText: "This text has random Id" });
    this.willEnableFiveSecondsButton = this.page.locator("#enableAfter");
    this.colorChangeButton = this.page.locator("#colorChange");
    this.visibleAfterFiveSecondsButton = this.page.locator("#visibleAfter");
  }

  async checkThatThisTextHasRandomIdIsVisible() {
    await this.checkThatElementIsVisible(this.thisTextHasRandomId, timeouts.shortTimeout);
  }

  async checkThatWillEnableFiveSecondsButtonIsVisible() {
    await this.checkThatElementIsVisible(this.willEnableFiveSecondsButton, timeouts.shortTimeout);
  }

  async checkThatColorChangeButtonIsVisible() {
    await this.checkThatElementIsVisible(this.colorChangeButton, timeouts.shortTimeout);
  }

  async checkThatVisibleAfterFiveSecondsButtonIsVisible() {
    await this.checkThatElementIsVisible(this.visibleAfterFiveSecondsButton, timeouts.shortTimeout);
  }

  async checkThatVisibleAfterFiveSecondsButtonIsNotVisible() {
    await this.checkThatElementIsNotVisible(this.visibleAfterFiveSecondsButton, timeouts.shortTimeout);
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
