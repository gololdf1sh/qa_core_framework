import { Page, expect, Locator } from "@playwright/test";
import { TextBoxInputFieldsDataType } from "../types";
import { CommonMethodsPage } from "./commonMethods.page";

export class TextBoxPage extends CommonMethodsPage {
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;
  readonly resultField: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameInput = this.page.locator("#userName");
    this.emailInput = this.page.locator("#userEmail");
    this.currentAddressInput = this.page.locator("#currentAddress");
    this.permanentAddressInput = this.page.locator("#permanentAddress");
    this.submitButton = this.page.locator("#submit");
    this.resultField = this.page.locator("#output");
  }

  async fillFullNameInput(userFullName: string) {
    await this.checkThatElementIsVisible(this.fullNameInput);
    await this.fullNameInput.fill(userFullName);
    await this.page.waitForTimeout(500);
  }

  async fillEmailInput(userEmail: string) {
    await this.checkThatElementIsVisible(this.emailInput);
    await this.emailInput.fill(userEmail);
    await this.page.waitForTimeout(500);
  }

  async fillCurrentAddressInput(userCurrentAddress: string) {
    await this.checkThatElementIsVisible(this.currentAddressInput);
    await this.currentAddressInput.fill(userCurrentAddress);
    await this.page.waitForTimeout(500);
  }

  async fillPermanentAddressInput(userPermanentAddress: string) {
    await this.checkThatElementIsVisible(this.permanentAddressInput);
    await this.permanentAddressInput.fill(userPermanentAddress);
    await this.page.waitForTimeout(500);
  }

  async clickSubmitButton() {
    await this.checkThatElementIsVisible(this.submitButton);
    await this.submitButton.click();
    await this.page.waitForTimeout(500);
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
