import { expect, Locator, Page } from "@playwright/test";
import { timeouts } from "../config/timeouts";
import { BasePage } from "./base.page";

export class RadioButtonPage extends BasePage {
  readonly page: Page;

  readonly resultField: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.resultField = this.page.locator('[class="mt-3"]');
  }

  async generateRadioButtonLocator(radioButtonName: string): Promise<Locator> {
    return this.page.locator('[class*="custom-radio"]', { hasText: `${radioButtonName}` });
  }
  async clickOnRadioButton(radioButtonName: string) {
    let radioButtonLocator = await this.generateRadioButtonLocator(radioButtonName);
    await this.checkThatElementIsVisible(radioButtonLocator, timeouts.shortTimeout);
    await radioButtonLocator.click({ delay: timeouts.shortTimeout });
  }

  async checkResultField(radioButtonName: string) {
    await expect(this.resultField).toContainText(radioButtonName);
  }
}
