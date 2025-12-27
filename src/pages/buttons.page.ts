import { Locator, Page } from "@playwright/test";
import { clickResultFields } from "../data";
import { BasePage } from "../pages";
import { timeouts } from "../config/timeouts";

export class ButtonsPage extends BasePage {
  readonly page: Page;

  readonly doubleClickMeResultField: Locator;
  readonly rightClickMeButtonResultField: Locator;
  readonly clickMeButtonResultField: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.doubleClickMeResultField = this.page.locator(`#${clickResultFields.doubleClickMeResultField.name}`);
    this.rightClickMeButtonResultField = this.page.locator(`#${clickResultFields.rightClickMeButtonResultField.name}`);
    this.clickMeButtonResultField = this.page.locator(`#${clickResultFields.clickMeButtonResultField.name}`);
  }

  private async generateButtonLocator(buttonName: string) {
    return this.page.getByRole("button", { name: buttonName, exact: true });
  }

  async dblClickOnGeneratedButtonLocator(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await this.checkThatElementIsVisible(buttonLocator, timeouts.shortTimeout);
    await buttonLocator.dblclick({ delay: timeouts.superShortTimeout });
  }

  async rightClickOnGeneratedButtonLocator(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await this.checkThatElementIsVisible(buttonLocator, timeouts.shortTimeout);
    await buttonLocator.click({ button: "right" });
  }

  async clickOnGeneratedButtonLocator(buttonName: string) {
    const buttonLocator = await this.generateButtonLocator(buttonName);
    await this.checkThatElementIsVisible(buttonLocator, timeouts.shortTimeout);
    await this.clickOnElement(buttonLocator);
  }

  async checkResultField(expectedField: string, expectedText: string) {
    if (expectedField === clickResultFields.doubleClickMeResultField.name) {
      await this.checkThatElementIsVisible(this.doubleClickMeResultField, timeouts.shortTimeout);
      await this.checkThatElementContainExpectedText(this.doubleClickMeResultField, expectedText);
    } else if (expectedField === clickResultFields.rightClickMeButtonResultField.name) {
      await this.checkThatElementIsVisible(this.rightClickMeButtonResultField, timeouts.shortTimeout);
      await this.checkThatElementContainExpectedText(this.rightClickMeButtonResultField, expectedText);
    } else {
      await this.checkThatElementIsVisible(this.clickMeButtonResultField, timeouts.shortTimeout);
      await this.checkThatElementContainExpectedText(this.clickMeButtonResultField, expectedText);
    }
  }

  async checkThatResultFieldIsNotDisplayed(expectedField: string) {
    if (expectedField === clickResultFields.doubleClickMeResultField.name) {
      await this.checkThatElementIsNotVisible(this.doubleClickMeResultField, timeouts.shortTimeout);
    } else if (expectedField === clickResultFields.rightClickMeButtonResultField.name) {
      await this.checkThatElementIsNotVisible(this.rightClickMeButtonResultField, timeouts.shortTimeout);
    } else {
      await this.checkThatElementIsNotVisible(this.clickMeButtonResultField, timeouts.shortTimeout);
    }
  }
}
