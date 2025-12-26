import { Page, expect, Locator } from "@playwright/test";
import { TextBoxInputFieldsDataType } from "../types";
import { BasePage } from "./base.page";
import { timeouts } from "../config/timeouts";

export class TextBoxPage extends BasePage {
  readonly page: Page;

  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly resultField: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    this.fullNameInput = this.page.locator("#userName");
    this.emailInput = this.page.locator("#userEmail");
    this.currentAddressInput = this.page.locator("#currentAddress");
    this.permanentAddressInput = this.page.locator("#permanentAddress");
    this.submitButton = this.page.locator("#submit");
    this.resultField = this.page.locator("#output");
  }

  async fillFullNameInput(userFullName: string) {
    await this.checkThatElementIsVisible(this.fullNameInput, timeouts.shortTimeout);
    await this.fullNameInput.fill(userFullName);
  }

  async fillEmailInput(userEmail: string) {
    await this.checkThatElementIsVisible(this.emailInput, timeouts.shortTimeout);
    await this.emailInput.fill(userEmail);
  }

  async fillCurrentAddressInput(userCurrentAddress: string) {
    await this.checkThatElementIsVisible(this.currentAddressInput, timeouts.shortTimeout);
    await this.currentAddressInput.fill(userCurrentAddress);
  }

  async fillPermanentAddressInput(userPermanentAddress: string) {
    await this.checkThatElementIsVisible(this.permanentAddressInput, timeouts.shortTimeout);
    await this.permanentAddressInput.fill(userPermanentAddress);
  }

  async clickSubmitButton() {
    await this.checkThatElementIsVisible(this.submitButton, timeouts.shortTimeout);
    await this.submitButton.click({ delay: timeouts.shortTimeout });
  }

  async fillTextBoxInputs(data: TextBoxInputFieldsDataType) {
    await this.fillFullNameInput(data.fullName);
    await this.fillEmailInput(data.email);
    await this.fillCurrentAddressInput(data.currentAddress);
    await this.fillPermanentAddressInput(data.permanentAddress);
  }

  async checkResultField(data: TextBoxInputFieldsDataType, validCase: boolean = true) {
    if (!validCase) {
      await expect(this.resultField).not.toContainText(data.fullName);
      await expect(this.resultField).not.toContainText(data.email);
      await expect(this.resultField).not.toContainText(data.currentAddress);
      await expect(this.resultField).not.toContainText(data.permanentAddress);
    } else {
      await expect(this.resultField).toContainText(data.fullName);
      await expect(this.resultField).toContainText(data.email);
      await expect(this.resultField).toContainText(data.currentAddress);
      await expect(this.resultField).toContainText(data.permanentAddress);
    }
  }
}
