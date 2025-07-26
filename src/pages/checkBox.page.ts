import { expect, Locator, Page } from "@playwright/test";
import { CheckBoxDataTypes } from "../types";

export class CheckBoxPage {
  page: Page;
  readonly resultField: Locator;
  readonly plusButton: Locator;
  readonly minusButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultField = this.page.locator("#result");
    this.plusButton = this.page.getByLabel("Expand all");
    this.minusButton = this.page.getByTitle("Collapse all");
  }

  async clickOnPlusButton() {
    await this.plusButton.click();
  }

  async checkThatAllFilesInTreeAreVisible(checkBoxFilesNamesData: CheckBoxDataTypes) {
    const fileNames = Object.values(checkBoxFilesNamesData).reverse();

    for (const fileName of fileNames) {
      const fileNameLocator = await this.generateFileLocator(fileName);
      await expect(fileNameLocator).toBeVisible();
    }
  }

  async generateFileLocator(fileName: string) {
    return this.page.locator('[class="rct-title"]', { hasText: `${fileName}` });
  }

  async clickOnFile(fileName: string) {
    let fileNameLocator = await this.generateFileLocator(fileName);
    await fileNameLocator.click();
  }

  async clickOnAllFilesInTree(checkBoxFilesNamesData: CheckBoxDataTypes) {
    const fileNames = Object.values(checkBoxFilesNamesData).reverse();

    for (const fileName of fileNames) {
      await this.clickOnFile(fileName);
    }
  }

  async checkResultField(checkBoxResultFilesNamesData: CheckBoxDataTypes) {
    for (const fileName of Object.values(checkBoxResultFilesNamesData)) {
      await expect(this.resultField).toContainText(fileName);
    }
  }
}
