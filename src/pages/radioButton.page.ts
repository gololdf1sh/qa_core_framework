import { Locator, Page } from "@playwright/test";
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

  private async generateRadioButtonLocator(radioButtonName: string): Promise<Locator> {
    return this.page.locator('[class*="custom-radio"]', { hasText: `${radioButtonName}` });
  }

  async clickOnRadioButton(radioButtonName: string) {
    let radioButtonLocator = await this.generateRadioButtonLocator(radioButtonName);
    await this.checkThatElementIsVisible(radioButtonLocator, timeouts.shortTimeout);
    await this.clickOnElement(radioButtonLocator, timeouts.superShortTimeout);
  }

  async checkResultField(radioButtonName: string) {
    await this.checkThatElementContainExpectedText(this.resultField, radioButtonName);
  }
}
