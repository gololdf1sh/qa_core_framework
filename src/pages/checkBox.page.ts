import { expect, Locator, Page } from "@playwright/test";
import { CheckBoxDataTypes } from "../types";
import { CommonMethodsPage } from "./commonMethods.page";

export class CheckBoxPage extends CommonMethodsPage {
  readonly resultField: Locator;
  readonly plusButton: Locator;
  readonly minusButton: Locator;

  constructor(page: Page) {
    super(page);
    this.resultField = this.page.locator("#result");
    this.plusButton = this.page.getByLabel("Expand all");
    this.minusButton = this.page.getByTitle("Collapse all");
  }

  async clickOnPlusButton() {
    await this.checkThatElementIsVisible(this.plusButton);
    await this.page.waitForTimeout(500);
    await this.plusButton.click();
  }

  async checkThatAllFilesInTreeAreVisible(checkBoxFilesNamesData: CheckBoxDataTypes) {
    const fileNames = Object.values(checkBoxFilesNamesData).reverse();

    for (const fileName of fileNames) {
      const fileNameLocator = await this.generateFileLocator(fileName);
      await this.checkThatElementIsVisible(fileNameLocator);
    }
  }

  async generateFileLocator(fileName: string) {
    return this.page.locator('[class="rct-title"]', { hasText: `${fileName}` });
  }

  async clickOnFile(fileName: string) {
    let fileNameLocator = await this.generateFileLocator(fileName);
    await this.checkThatElementIsVisible(fileNameLocator);
    await fileNameLocator.click();
    await this.page.waitForTimeout(500);
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
