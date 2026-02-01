import { expect, Locator, Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "./base.page";

export class DynamicPropertiesPage extends BasePage {
  readonly thisTextHasRandomId: Locator = this.page.locator("p", { hasText: "This text has random Id" });
  readonly willEnableFiveSecondsButton: Locator = this.page.locator("#enableAfter");
  readonly colorChangeButton: Locator = this.page.locator("#colorChange");
  readonly visibleAfterFiveSecondsButton: Locator = this.page.locator("#visibleAfter");

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
    await this.checkThatElementIsVisible(this.visibleAfterFiveSecondsButton, timeouts.middleTimeout);
  }

  async checkThatVisibleAfterFiveSecondsButtonIsNotVisible() {
    await this.checkThatElementIsNotVisible(this.visibleAfterFiveSecondsButton, timeouts.shortTimeout);
  }

  async checkThatWillEnableFiveSecondsButtonIsDisabled() {
    await expect(this.willEnableFiveSecondsButton).toBeDisabled({ timeout: timeouts.superShortTimeout });
  }

  async checkThatWillEnableFiveSecondsButtonIsNotDisabled() {
    await expect(this.willEnableFiveSecondsButton).toBeEnabled({ timeout: timeouts.middleTimeout });
  }

  async takeColorOfColorChangeButtonAndCheckThatColorIsChangedAfterFiveSeconds() {
    const firstColor = await this.colorChangeButton.evaluate((el) => getComputedStyle(el).color);
    await this.page.waitForTimeout(5000);
    const changedColor = await this.colorChangeButton.evaluate((el) => getComputedStyle(el).color);
    expect(firstColor).not.toBe(changedColor);
  }
}
