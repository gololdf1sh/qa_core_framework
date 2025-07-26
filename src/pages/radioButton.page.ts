import { expect, Locator, Page } from "@playwright/test";

export class RadioButtonPage {
  readonly page: Page;
  readonly resultField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultField = this.page.locator('[class="mt-3"]');
  }

  async generateRadioButtonLocator(radioButtonName: string): Promise<Locator> {
    return this.page.locator('[class*="custom-radio"]', { hasText: `${radioButtonName}` });
  }
  async clickOnRadioButton(radioButtonName: string) {
    let radioButtonLocator = await this.generateRadioButtonLocator(radioButtonName);
    await radioButtonLocator.click();
  }

  async checkResultField(radioButtonName: string) {
    await expect(this.resultField).toContainText(radioButtonName);
  }
}
