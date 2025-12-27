import { Locator, Page } from "@playwright/test";
import { CheckBoxDataTypes } from "../types";
import { timeouts } from "../config/timeouts";
import { BasePage } from "../pages";

export class CheckBoxPage extends BasePage {
  readonly page: Page;

  readonly resultField: Locator;
  readonly plusButton: Locator;
  readonly minusButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.resultField = this.page.locator("#result");
    this.plusButton = this.page.getByLabel("Expand all");
    this.minusButton = this.page.getByTitle("Collapse all");
  }

  async clickOnPlusButton() {
    await this.checkThatElementIsVisible(this.plusButton, timeouts.shortTimeout);
    await this.clickOnElement(this.plusButton, timeouts.superShort);
  }

  async checkThatAllFilesInTreeAreVisible(checkBoxFilesNamesData: CheckBoxDataTypes) {
    const fileNames = Object.values(checkBoxFilesNamesData).reverse();

    for (const fileName of fileNames) {
      const fileNameLocator = await this.generateFileLocator(fileName);
      await this.checkThatElementIsVisible(fileNameLocator, timeouts.shortTimeout);
    }
  }

  private async generateFileLocator(fileName: string) {
    return this.page.locator('[class="rct-title"]', { hasText: `${fileName}` });
  }

  private async clickOnFile(fileName: string) {
    let fileNameLocator = await this.generateFileLocator(fileName);
    await this.checkThatElementIsVisible(fileNameLocator, timeouts.shortTimeout);
    await this.clickOnElement(fileNameLocator, timeouts.superShort);
  }

  async clickOnAllFilesInTree(checkBoxFilesNamesData: CheckBoxDataTypes) {
    const fileNames = Object.values(checkBoxFilesNamesData).reverse();

    for (const fileName of fileNames) {
      await this.clickOnFile(fileName);
    }
  }

  async checkResultField(checkBoxResultFilesNamesData: CheckBoxDataTypes) {
    for (const fileName of Object.values(checkBoxResultFilesNamesData)) {
      await this.checkThatElementContainExpectedText(this.resultField, fileName);
    }
  }
}
