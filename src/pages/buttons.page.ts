import { expect, Locator, Page } from "@playwright/test";
import { clickResultFields } from "../data";

export class ButtonsPage {
  page: Page;
  readonly doubleClickMeResultField: Locator;
  readonly rightClickMeButtonResultField: Locator;
  readonly clickMeButtonResultField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.doubleClickMeResultField = this.page.locator(`#${clickResultFields.doubleClickMeResultField.name}`);
    this.rightClickMeButtonResultField = this.page.locator(`#${clickResultFields.rightClickMeButtonResultField.name}`);
    this.clickMeButtonResultField = this.page.locator(`#${clickResultFields.clickMeButtonResultField.name}`);
  }

  async generateButtonLocator(buttonName: string) {
    return this.page.getByRole("button", { name: buttonName, exact: true });
  }

  async dblClickOnButton(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.dblclick();
  }

  async rightClickOnButton(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.click({ button: "right" });
  }

  async clickOnButton(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.click();
  }

  async checkResultField(expectedField: string, expectedText: string) {
    if (expectedField === clickResultFields.doubleClickMeResultField.name) {
      await expect(this.doubleClickMeResultField).toBeVisible();
      await expect(this.doubleClickMeResultField).toContainText(expectedText);
    } else if (expectedField === clickResultFields.rightClickMeButtonResultField.name) {
      await expect(this.rightClickMeButtonResultField).toBeVisible();
      await expect(this.rightClickMeButtonResultField).toContainText(expectedText);
    } else {
      await expect(this.clickMeButtonResultField).toBeVisible();
      await expect(this.clickMeButtonResultField).toContainText(expectedText);
    }
  }

  async checkThatResultFieldIsNotDisplayed(expectedField: string) {
    if (expectedField === clickResultFields.doubleClickMeResultField.name) {
      await expect(this.doubleClickMeResultField).not.toBeVisible();
    } else if (expectedField === clickResultFields.rightClickMeButtonResultField.name) {
      await expect(this.rightClickMeButtonResultField).not.toBeVisible();
    } else {
      await expect(this.clickMeButtonResultField).not.toBeVisible();
    }
  }
}
