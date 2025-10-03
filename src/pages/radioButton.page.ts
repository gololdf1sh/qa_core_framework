import { expect, Locator, Page } from "@playwright/test";
import { CommonMethodsPage } from "./commonMethods.page";

export class RadioButtonPage extends CommonMethodsPage {
  readonly resultField: Locator;

  constructor(page: Page) {
    super(page);
    this.resultField = this.page.locator('[class="mt-3"]');
  }

  async generateRadioButtonLocator(radioButtonName: string): Promise<Locator> {
    return this.page.locator('[class*="custom-radio"]', { hasText: `${radioButtonName}` });
  }
  async clickOnRadioButton(radioButtonName: string) {
    let radioButtonLocator = await this.generateRadioButtonLocator(radioButtonName);
    await this.checkThatElementIsVisible(radioButtonLocator);
    await radioButtonLocator.click();
    await this.page.waitForTimeout(500);
  }

  async checkResultField(radioButtonName: string) {
    await expect(this.resultField).toContainText(radioButtonName);
  }
}
