import { expect, Locator, Page } from "@playwright/test";
import { clickResultFields } from "../data";
import { CommonMethodsPage } from "./commonMethods.page";

export class ButtonsPage extends CommonMethodsPage {
  readonly doubleClickMeResultField: Locator;
  readonly rightClickMeButtonResultField: Locator;
  readonly clickMeButtonResultField: Locator;

  constructor(page: Page) {
    super(page);
    this.doubleClickMeResultField = this.page.locator(`#${clickResultFields.doubleClickMeResultField.name}`);
    this.rightClickMeButtonResultField = this.page.locator(`#${clickResultFields.rightClickMeButtonResultField.name}`);
    this.clickMeButtonResultField = this.page.locator(`#${clickResultFields.clickMeButtonResultField.name}`);
  }

  async generateButtonLocator(buttonName: string) {
    return this.page.getByRole("button", { name: buttonName, exact: true });
  }

  async dblClickOnButton(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await this.checkThatElementIsVisible(buttonLocator);
    await buttonLocator.dblclick();
  }

  async rightClickOnButton(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await this.checkThatElementIsVisible(buttonLocator);
    await buttonLocator.click({ button: "right" });
  }

  async clickOnButton(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await this.checkThatElementIsVisible(buttonLocator);
    await buttonLocator.click();
  }

  async checkResultField(expectedField: string, expectedText: string) {
    if (expectedField === clickResultFields.doubleClickMeResultField.name) {
      await this.checkThatElementIsVisible(this.doubleClickMeResultField);
      await expect(this.doubleClickMeResultField).toContainText(expectedText);
    } else if (expectedField === clickResultFields.rightClickMeButtonResultField.name) {
      await this.checkThatElementIsVisible(this.rightClickMeButtonResultField);
      await expect(this.rightClickMeButtonResultField).toContainText(expectedText);
    } else {
      await this.checkThatElementIsVisible(this.clickMeButtonResultField);
      await expect(this.clickMeButtonResultField).toContainText(expectedText);
    }
  }

  async checkThatResultFieldIsNotDisplayed(expectedField: string) {
    if (expectedField === clickResultFields.doubleClickMeResultField.name) {
      await this.checkThatElementIsNotVisible(this.doubleClickMeResultField);
    } else if (expectedField === clickResultFields.rightClickMeButtonResultField.name) {
      await this.checkThatElementIsNotVisible(this.rightClickMeButtonResultField);
    } else {
      await this.checkThatElementIsNotVisible(this.clickMeButtonResultField);
    }
  }
}
