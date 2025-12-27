import { Page, Locator } from "@playwright/test";
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

  private async fillFullNameInput(userFullName: string) {
    await this.checkThatElementIsVisible(this.fullNameInput, timeouts.shortTimeout);
    await this.fillInputElement(this.fullNameInput, userFullName);
  }

  private async fillEmailInput(userEmail: string) {
    await this.checkThatElementIsVisible(this.emailInput, timeouts.shortTimeout);
    await this.fillInputElement(this.emailInput, userEmail);
  }

  private async fillCurrentAddressInput(userCurrentAddress: string) {
    await this.checkThatElementIsVisible(this.currentAddressInput, timeouts.shortTimeout);
    await this.fillInputElement(this.currentAddressInput, userCurrentAddress);
  }

  private async fillPermanentAddressInput(userPermanentAddress: string) {
    await this.checkThatElementIsVisible(this.permanentAddressInput, timeouts.shortTimeout);
    await this.fillInputElement(this.permanentAddressInput, userPermanentAddress);
  }

  async clickSubmitButton() {
    await this.checkThatElementIsVisible(this.submitButton, timeouts.shortTimeout);
    await this.clickOnElement(this.submitButton, timeouts.superShort);
  }

  async fillTextBoxInputs(data: TextBoxInputFieldsDataType) {
    await this.fillFullNameInput(data.fullName);
    await this.fillEmailInput(data.email);
    await this.fillCurrentAddressInput(data.currentAddress);
    await this.fillPermanentAddressInput(data.permanentAddress);
  }

  async checkResultField(data: TextBoxInputFieldsDataType, validCase: boolean = true) {
    if (!validCase) {
      await this.checkThatElementDoesNotContainExpectedText(this.resultField, data.fullName);
      await this.checkThatElementDoesNotContainExpectedText(this.resultField, data.email);
      await this.checkThatElementDoesNotContainExpectedText(this.resultField, data.currentAddress);
      await this.checkThatElementDoesNotContainExpectedText(this.resultField, data.permanentAddress);
    } else {
      await this.checkThatElementContainExpectedText(this.resultField, data.fullName);
      await this.checkThatElementContainExpectedText(this.resultField, data.email);
      await this.checkThatElementContainExpectedText(this.resultField, data.currentAddress);
      await this.checkThatElementContainExpectedText(this.resultField, data.permanentAddress);
    }
  }
}
